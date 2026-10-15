"""Decode complete four-stream BCJ2 data without executing its contents.

Algorithm reference: Igor Pavlov's public-domain 7-Zip BCJ2 decoder:
https://github.com/ip7z/7zip/blob/main/C/Bcj2.c
https://github.com/ip7z/7zip/blob/main/C/Bcj2.h

The starting instruction pointer is zero, as required by the ordinary 7z
BCJ2 coder. Inputs must already have been decompressed by their other coders.
This is an in-memory decoder; the caller should bound archive sizes and verify
the archive CRC independently. Malformed or incomplete streams raise ValueError.
"""


def decode(main: bytes, call: bytes, jump: bytes, control: bytes,
           output_size: int) -> bytes:
    """Recombine MAIN, CALL, JUMP and range-control streams into original bytes."""
    if not isinstance(output_size, int) or output_size < 0:
        raise ValueError("BCJ2 output_size must be a nonnegative integer")
    if len(call) % 4 or len(jump) % 4:
        raise ValueError("BCJ2 CALL and JUMP sizes must be multiples of four")
    if len(main) + len(call) + len(jump) != output_size:
        raise ValueError("BCJ2 stream sizes do not match output_size")
    if len(control) < 5 or control[0] != 0:
        raise ValueError("Invalid BCJ2 range-control initialization")

    code = int.from_bytes(control[1:5], "big")
    if code == 0xFFFFFFFF:
        raise ValueError("Invalid BCJ2 initial range code")
    interval = 0xFFFFFFFF
    probabilities = [1024] * 258
    control_pos = 5
    call_pos = jump_pos = 0
    previous = 0
    out = bytearray()

    for byte in main:
        if interval < (1 << 24):
            if control_pos == len(control):
                raise ValueError("Truncated BCJ2 range-control stream")
            interval <<= 8
            code = ((code << 8) | control[control_pos]) & 0xFFFFFFFF
            control_pos += 1

        out.append(byte)
        if byte == 0xE8:
            probability_index = previous + 2
        elif byte == 0xE9:
            probability_index = 1
        elif previous == 0x0F and 0x80 <= byte <= 0x8F:
            probability_index = 0
        else:
            previous = byte
            continue

        previous = byte
        probability = probabilities[probability_index]
        bound = (interval >> 11) * probability
        if code < bound:
            interval = bound
            probabilities[probability_index] += (2048 - probability) >> 5
            continue

        interval -= bound
        code -= bound
        probabilities[probability_index] -= probability >> 5
        if byte == 0xE8:
            if call_pos + 4 > len(call):
                raise ValueError("Truncated BCJ2 CALL stream")
            target = int.from_bytes(call[call_pos:call_pos + 4], "big")
            call_pos += 4
        else:
            if jump_pos + 4 > len(jump):
                raise ValueError("Truncated BCJ2 JUMP stream")
            target = int.from_bytes(jump[jump_pos:jump_pos + 4], "big")
            jump_pos += 4
        if len(out) + 4 > output_size:
            raise ValueError("BCJ2 conversion exceeds output_size")
        relative = (target - (len(out) + 4)) & 0xFFFFFFFF
        out.extend(relative.to_bytes(4, "little"))
        # The final offset byte can itself precede a conditional-jump marker.
        previous = relative >> 24

    # The C decoder normalizes once more before recognizing end of MAIN.
    if interval < (1 << 24):
        if control_pos == len(control):
            raise ValueError("Truncated BCJ2 final range-control byte")
        code = ((code << 8) | control[control_pos]) & 0xFFFFFFFF
        control_pos += 1

    if len(out) != output_size or call_pos != len(call) or jump_pos != len(jump):
        raise ValueError("BCJ2 output or branch streams did not finish exactly")
    if control_pos != len(control) or code != 0:
        raise ValueError("BCJ2 range-control stream did not finish exactly")
    return bytes(out)
