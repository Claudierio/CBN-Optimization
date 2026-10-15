/* CBN Boost: readable recovered compiled React; original notices retained. */
function Vh(e){
  return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,
  "default")?e.default:e}
var vf={
  exports:{
    }
  }
,
Ds={
  }
;
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ox;
function c_(){
  if(Ox)return Ds;
  Ox=1;
  var e=Symbol.for("react.transitional.element"),
  n=Symbol.for("react.fragment");
  function r(s,
  l,
  c){
    var f=null;
    if(c!==void 0&&(f=""+c),
    l.key!==void 0&&(f=""+l.key),
    "key"in l){
      c={
        }
      ;
      for(var g in l)g!=="key"&&(c[g]=l[g])}
    else c=l;
    return l=c.ref,
    {
      $$typeof:e,
      type:s,
      key:f,
      ref:l!==void 0?l:null,
      props:c}
    }
  return Ds.Fragment=n,
  Ds.jsx=r,
  Ds.jsxs=r,
  Ds}
var Ux;
function u_(){
  return Ux||(Ux=1,
  vf.exports=c_()),
  vf.exports}
var m=u_(),
wf={
  exports:{
    }
  }
,
ge={
  }
;
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ix;
function d_(){
  if(Ix)return ge;
  Ix=1;
  var e=Symbol.for("react.transitional.element"),
  n=Symbol.for("react.portal"),
  r=Symbol.for("react.fragment"),
  s=Symbol.for("react.strict_mode"),
  l=Symbol.for("react.profiler"),
  c=Symbol.for("react.consumer"),
  f=Symbol.for("react.context"),
  g=Symbol.for("react.forward_ref"),
  p=Symbol.for("react.suspense"),
  x=Symbol.for("react.memo"),
  b=Symbol.for("react.lazy"),
  v=Symbol.for("react.activity"),
  w=Symbol.iterator;
  function _(z){
    return z===null||typeof z!="object"?null:(z=w&&z[w]||z["@@iterator"],
    typeof z=="function"?z:null)}
  var L={
    isMounted:function(){
      return!1}
    ,
    enqueueForceUpdate:function(){
      }
    ,
    enqueueReplaceState:function(){
      }
    ,
    enqueueSetState:function(){
      }
    }
  ,
  M=Object.assign,
  E={
    }
  ;
  function A(z,
  U,
  J){
    this.props=z,
    this.context=U,
    this.refs=E,
    this.updater=J||L}
  A.prototype.isReactComponent={
    }
  ,
  A.prototype.setState=function(z,
  U){
    if(typeof z!="object"&&typeof z!="function"&&z!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this,
    z,
    U,
    "setState")}
  ,
  A.prototype.forceUpdate=function(z){
    this.updater.enqueueForceUpdate(this,
    z,
    "forceUpdate")}
  ;
  function D(){
    }
  D.prototype=A.prototype;
  function R(z,
  U,
  J){
    this.props=z,
    this.context=U,
    this.refs=E,
    this.updater=J||L}
  var Z=R.prototype=new D;
  Z.constructor=R,
  M(Z,
  A.prototype),
  Z.isPureReactComponent=!0;
  var V=Array.isArray;
  function I(){
    }
  var q={
    H:null,
    A:null,
    T:null,
    S:null}
  ,
  Q=Object.prototype.hasOwnProperty;
  function F(z,
  U,
  J){
    var ne=J.ref;
    return{
      $$typeof:e,
      type:z,
      key:U,
      ref:ne!==void 0?ne:null,
      props:J}
    }
  function te(z,
  U){
    return F(z.type,
    U,
    z.props)}
  function ie(z){
    return typeof z=="object"&&z!==null&&z.$$typeof===e}
  function de(z){
    var U={
      "=":"=0",
      ":":"=2"}
    ;
    return"$"+z.replace(/[=:]/g,
    function(J){
      return U[J]}
    )}
  var Be=/\/+/g;
  function De(z,
  U){
    return typeof z=="object"&&z!==null&&z.key!=null?de(""+z.key):U.toString(36)}
  function Ge(z){
    switch(z.status){
      case"fulfilled":return z.value;
      case"rejected":throw z.reason;
      default:switch(typeof z.status=="string"?z.then(I,
      I):(z.status="pending",
      z.then(function(U){
        z.status==="pending"&&(z.status="fulfilled",
        z.value=U)}
      ,
      function(U){
        z.status==="pending"&&(z.status="rejected",
        z.reason=U)}
      )),
      z.status){
        case"fulfilled":return z.value;
        case"rejected":throw z.reason}
      }
    throw z}
  function k(z,
  U,
  J,
  ne,
  se){
    var fe=typeof z;
    (fe==="undefined"||fe==="boolean")&&(z=null);
    var ve=!1;
    if(z===null)ve=!0;
    else switch(fe){
      case"bigint":case"string":case"number":ve=!0;
      break;
      case"object":switch(z.$$typeof){
        case e:case n:ve=!0;
        break;
        case b:return ve=z._init,
        k(ve(z._payload),
        U,
        J,
        ne,
        se)}
      }
    if(ve)return se=se(z),
    ve=ne===""?"."+De(z,
    0):ne,
    V(se)?(J="",
    ve!=null&&(J=ve.replace(Be,
    "$&/")+"/"),
    k(se,
    U,
    J,
    "",
    function(Cn){
      return Cn}
    )):se!=null&&(ie(se)&&(se=te(se,
    J+(se.key==null||z&&z.key===se.key?"":(""+se.key).replace(Be,
    "$&/")+"/")+ve)),
    U.push(se)),
    1;
    ve=0;
    var ht=ne===""?".":ne+":";
    if(V(z))for(var Qe=0;
    Qe<z.length;
    Qe++)ne=z[Qe],
    fe=ht+De(ne,
    Qe),
    ve+=k(ne,
    U,
    J,
    fe,
    se);
    else if(Qe=_(z),
    typeof Qe=="function")for(z=Qe.call(z),
    Qe=0;
    !(ne=z.next()).done;
    )ne=ne.value,
    fe=ht+De(ne,
    Qe++),
    ve+=k(ne,
    U,
    J,
    fe,
    se);
    else if(fe==="object"){
      if(typeof z.then=="function")return k(Ge(z),
      U,
      J,
      ne,
      se);
      throw U=String(z),
      Error("Objects are not valid as a React child (found: "+(U==="[object Object]"?"object with keys {"+Object.keys(z).join(", ")+"}":U)+"). If you meant to render a collection of children, use an array instead.")}
    return ve}
  function Y(z,
  U,
  J){
    if(z==null)return z;
    var ne=[],
    se=0;
    return k(z,
    ne,
    "",
    "",
    function(fe){
      return U.call(J,
      fe,
      se++)}
    ),
    ne}
  function $(z){
    if(z._status===-1){
      var U=z._result;
      U=U(),
      U.then(function(J){
        (z._status===0||z._status===-1)&&(z._status=1,
        z._result=J)}
      ,
      function(J){
        (z._status===0||z._status===-1)&&(z._status=2,
        z._result=J)}
      ),
      z._status===-1&&(z._status=0,
      z._result=U)}
    if(z._status===1)return z._result.default;
    throw z._result}
  var j=typeof reportError=="function"?reportError:function(z){
    if(typeof window=="object"&&typeof window.ErrorEvent=="function"){
      var U=new window.ErrorEvent("error",
      {
        bubbles:!0,
        cancelable:!0,
        message:typeof z=="object"&&z!==null&&typeof z.message=="string"?String(z.message):String(z),
        error:z}
      );
      if(!window.dispatchEvent(U))return}
    else if(typeof process=="object"&&typeof process.emit=="function"){
      process.emit("uncaughtException",
      z);
      return}
    }
  ,
  ee={
    map:Y,
    forEach:function(z,
    U,
    J){
      Y(z,
      function(){
        U.apply(this,
        arguments)}
      ,
      J)}
    ,
    count:function(z){
      var U=0;
      return Y(z,
      function(){
        U++}
      ),
      U}
    ,
    toArray:function(z){
      return Y(z,
      function(U){
        return U}
      )||[]}
    ,
    only:function(z){
      if(!ie(z))throw Error("React.Children.only expected to receive a single React element child.");
      return z}
    }
  ;
  return ge.Activity=v,
  ge.Children=ee,
  ge.Component=A,
  ge.Fragment=r,
  ge.Profiler=l,
  ge.PureComponent=R,
  ge.StrictMode=s,
  ge.Suspense=p,
  ge.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=q,
  ge.__COMPILER_RUNTIME={
    __proto__:null,
    c:function(z){
      return q.H.useMemoCache(z)}
    }
  ,
  ge.cache=function(z){
    return function(){
      return z.apply(null,
      arguments)}
    }
  ,
  ge.cacheSignal=function(){
    return null}
  ,
  ge.cloneElement=function(z,
  U,
  J){
    if(z==null)throw Error("The argument must be a React element, but you passed "+z+".");
    var ne=M({
      }
    ,
    z.props),
    se=z.key;
    if(U!=null)for(fe in U.key!==void 0&&(se=""+U.key),
    U)!Q.call(U,
    fe)||fe==="key"||fe==="__self"||fe==="__source"||fe==="ref"&&U.ref===void 0||(ne[fe]=U[fe]);
    var fe=arguments.length-2;
    if(fe===1)ne.children=J;
    else if(1<fe){
      for(var ve=Array(fe),
      ht=0;
      ht<fe;
      ht++)ve[ht]=arguments[ht+2];
      ne.children=ve}
    return F(z.type,
    se,
    ne)}
  ,
  ge.createContext=function(z){
    return z={
      $$typeof:f,
      _currentValue:z,
      _currentValue2:z,
      _threadCount:0,
      Provider:null,
      Consumer:null}
    ,
    z.Provider=z,
    z.Consumer={
      $$typeof:c,
      _context:z}
    ,
    z}
  ,
  ge.createElement=function(z,
  U,
  J){
    var ne,
    se={
      }
    ,
    fe=null;
    if(U!=null)for(ne in U.key!==void 0&&(fe=""+U.key),
    U)Q.call(U,
    ne)&&ne!=="key"&&ne!=="__self"&&ne!=="__source"&&(se[ne]=U[ne]);
    var ve=arguments.length-2;
    if(ve===1)se.children=J;
    else if(1<ve){
      for(var ht=Array(ve),
      Qe=0;
      Qe<ve;
      Qe++)ht[Qe]=arguments[Qe+2];
      se.children=ht}
    if(z&&z.defaultProps)for(ne in ve=z.defaultProps,
    ve)se[ne]===void 0&&(se[ne]=ve[ne]);
    return F(z,
    fe,
    se)}
  ,
  ge.createRef=function(){
    return{
      current:null}
    }
  ,
  ge.forwardRef=function(z){
    return{
      $$typeof:g,
      render:z}
    }
  ,
  ge.isValidElement=ie,
  ge.lazy=function(z){
    return{
      $$typeof:b,
      _payload:{
        _status:-1,
        _result:z}
      ,
      _init:$}
    }
  ,
  ge.memo=function(z,
  U){
    return{
      $$typeof:x,
      type:z,
      compare:U===void 0?null:U}
    }
  ,
  ge.startTransition=function(z){
    var U=q.T,
    J={
      }
    ;
    q.T=J;
    try{
      var ne=z(),
      se=q.S;
      se!==null&&se(J,
      ne),
      typeof ne=="object"&&ne!==null&&typeof ne.then=="function"&&ne.then(I,
      j)}
    catch(fe){
      j(fe)}
    finally{
      U!==null&&J.types!==null&&(U.types=J.types),
      q.T=U}
    }
  ,
  ge.unstable_useCacheRefresh=function(){
    return q.H.useCacheRefresh()}
  ,
  ge.use=function(z){
    return q.H.use(z)}
  ,
  ge.useActionState=function(z,
  U,
  J){
    return q.H.useActionState(z,
    U,
    J)}
  ,
  ge.useCallback=function(z,
  U){
    return q.H.useCallback(z,
    U)}
  ,
  ge.useContext=function(z){
    return q.H.useContext(z)}
  ,
  ge.useDebugValue=function(){
    }
  ,
  ge.useDeferredValue=function(z,
  U){
    return q.H.useDeferredValue(z,
    U)}
  ,
  ge.useEffect=function(z,
  U){
    return q.H.useEffect(z,
    U)}
  ,
  ge.useEffectEvent=function(z){
    return q.H.useEffectEvent(z)}
  ,
  ge.useId=function(){
    return q.H.useId()}
  ,
  ge.useImperativeHandle=function(z,
  U,
  J){
    return q.H.useImperativeHandle(z,
    U,
    J)}
  ,
  ge.useInsertionEffect=function(z,
  U){
    return q.H.useInsertionEffect(z,
    U)}
  ,
  ge.useLayoutEffect=function(z,
  U){
    return q.H.useLayoutEffect(z,
    U)}
  ,
  ge.useMemo=function(z,
  U){
    return q.H.useMemo(z,
    U)}
  ,
  ge.useOptimistic=function(z,
  U){
    return q.H.useOptimistic(z,
    U)}
  ,
  ge.useReducer=function(z,
  U,
  J){
    return q.H.useReducer(z,
    U,
    J)}
  ,
  ge.useRef=function(z){
    return q.H.useRef(z)}
  ,
  ge.useState=function(z){
    return q.H.useState(z)}
  ,
  ge.useSyncExternalStore=function(z,
  U,
  J){
    return q.H.useSyncExternalStore(z,
    U,
    J)}
  ,
  ge.useTransition=function(){
    return q.H.useTransition()}
  ,
  ge.version="19.2.0",
  ge}
var Yx;
function Zh(){
  return Yx||(Yx=1,
  wf.exports=d_()),
  wf.exports}
var C=Zh();
const ke=Vh(C);
var Sf={
  exports:{
    }
  }
,
As={
  }
,
_f={
  exports:{
    }
  }
,
Cf={
  }
;
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Px;
function f_(){
  return Px||(Px=1,
  (function(e){
    function n(k,
    Y){
      var $=k.length;
      k.push(Y);
      e:for(;
      0<$;
      ){
        var j=$-1>>>1,
        ee=k[j];
        if(0<l(ee,
        Y))k[j]=Y,
        k[$]=ee,
        $=j;
        else break e}
      }
    function r(k){
      return k.length===0?null:k[0]}
    function s(k){
      if(k.length===0)return null;
      var Y=k[0],
      $=k.pop();
      if($!==Y){
        k[0]=$;
        e:for(var j=0,
        ee=k.length,
        z=ee>>>1;
        j<z;
        ){
          var U=2*(j+1)-1,
          J=k[U],
          ne=U+1,
          se=k[ne];
          if(0>l(J,
          $))ne<ee&&0>l(se,
          J)?(k[j]=se,
          k[ne]=$,
          j=ne):(k[j]=J,
          k[U]=$,
          j=U);
          else if(ne<ee&&0>l(se,
          $))k[j]=se,
          k[ne]=$,
          j=ne;
          else break e}
        }
      return Y}
    function l(k,
    Y){
      var $=k.sortIndex-Y.sortIndex;
      return $!==0?$:k.id-Y.id}
    if(e.unstable_now=void 0,
    typeof performance=="object"&&typeof performance.now=="function"){
      var c=performance;
      e.unstable_now=function(){
        return c.now()}
      }
    else{
      var f=Date,
      g=f.now();
      e.unstable_now=function(){
        return f.now()-g}
      }
    var p=[],
    x=[],
    b=1,
    v=null,
    w=3,
    _=!1,
    L=!1,
    M=!1,
    E=!1,
    A=typeof setTimeout=="function"?setTimeout:null,
    D=typeof clearTimeout=="function"?clearTimeout:null,
    R=typeof setImmediate<"u"?setImmediate:null;
    function Z(k){
      for(var Y=r(x);
      Y!==null;
      ){
        if(Y.callback===null)s(x);
        else if(Y.startTime<=k)s(x),
        Y.sortIndex=Y.expirationTime,
        n(p,
        Y);
        else break;
        Y=r(x)}
      }
    function V(k){
      if(M=!1,
      Z(k),
      !L)if(r(p)!==null)L=!0,
      I||(I=!0,
      de());
      else{
        var Y=r(x);
        Y!==null&&Ge(V,
        Y.startTime-k)}
      }
    var I=!1,
    q=-1,
    Q=5,
    F=-1;
    function te(){
      return E?!0:!(e.unstable_now()-F<Q)}
    function ie(){
      if(E=!1,
      I){
        var k=e.unstable_now();
        F=k;
        var Y=!0;
        try{
          e:{
            L=!1,
            M&&(M=!1,
            D(q),
            q=-1),
            _=!0;
            var $=w;
            try{
              t:{
                for(Z(k),
                v=r(p);
                v!==null&&!(v.expirationTime>k&&te());
                ){
                  var j=v.callback;
                  if(typeof j=="function"){
                    v.callback=null,
                    w=v.priorityLevel;
                    var ee=j(v.expirationTime<=k);
                    if(k=e.unstable_now(),
                    typeof ee=="function"){
                      v.callback=ee,
                      Z(k),
                      Y=!0;
                      break t}
                    v===r(p)&&s(p),
                    Z(k)}
                  else s(p);
                  v=r(p)}
                if(v!==null)Y=!0;
                else{
                  var z=r(x);
                  z!==null&&Ge(V,
                  z.startTime-k),
                  Y=!1}
                }
              break e}
            finally{
              v=null,
              w=$,
              _=!1}
            Y=void 0}
          }
        finally{
          Y?de():I=!1}
        }
      }
    var de;
    if(typeof R=="function")de=function(){
      R(ie)}
    ;
    else if(typeof MessageChannel<"u"){
      var Be=new MessageChannel,
      De=Be.port2;
      Be.port1.onmessage=ie,
      de=function(){
        De.postMessage(null)}
      }
    else de=function(){
      A(ie,
      0)}
    ;
    function Ge(k,
    Y){
      q=A(function(){
        k(e.unstable_now())}
      ,
      Y)}
    e.unstable_IdlePriority=5,
    e.unstable_ImmediatePriority=1,
    e.unstable_LowPriority=4,
    e.unstable_NormalPriority=3,
    e.unstable_Profiling=null,
    e.unstable_UserBlockingPriority=2,
    e.unstable_cancelCallback=function(k){
      k.callback=null}
    ,
    e.unstable_forceFrameRate=function(k){
      0>k||125<k||(Q=0<k?Math.floor(1e3/k):5)}
    ,
    e.unstable_getCurrentPriorityLevel=function(){
      return w}
    ,
    e.unstable_next=function(k){
      switch(w){
        case 1:case 2:case 3:var Y=3;
        break;
        default:Y=w}
      var $=w;
      w=Y;
      try{
        return k()}
      finally{
        w=$}
      }
    ,
    e.unstable_requestPaint=function(){
      E=!0}
    ,
    e.unstable_runWithPriority=function(k,
    Y){
      switch(k){
        case 1:case 2:case 3:case 4:case 5:break;
        default:k=3}
      var $=w;
      w=k;
      try{
        return Y()}
      finally{
        w=$}
      }
    ,
    e.unstable_scheduleCallback=function(k,
    Y,
    $){
      var j=e.unstable_now();
      switch(typeof $=="object"&&$!==null?($=$.delay,
      $=typeof $=="number"&&0<$?j+$:j):$=j,
      k){
        case 1:var ee=-1;
        break;
        case 2:ee=250;
        break;
        case 5:ee=1073741823;
        break;
        case 4:ee=1e4;
        break;
        default:ee=5e3}
      return ee=$+ee,
      k={
        id:b++,
        callback:Y,
        priorityLevel:k,
        startTime:$,
        expirationTime:ee,
        sortIndex:-1}
      ,
      $>j?(k.sortIndex=$,
      n(x,
      k),
      r(p)===null&&k===r(x)&&(M?(D(q),
      q=-1):M=!0,
      Ge(V,
      $-j))):(k.sortIndex=ee,
      n(p,
      k),
      L||_||(L=!0,
      I||(I=!0,
      de()))),
      k}
    ,
    e.unstable_shouldYield=te,
    e.unstable_wrapCallback=function(k){
      var Y=w;
      return function(){
        var $=w;
        w=Y;
        try{
          return k.apply(this,
          arguments)}
        finally{
          w=$}
        }
      }
    }
  )(Cf)),
  Cf}
var qx;
function h_(){
  return qx||(qx=1,
  _f.exports=f_()),
  _f.exports}
var Lf={
  exports:{
    }
  }
,
Lt={
  }
;
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vx;
function m_(){
  if(Vx)return Lt;
  Vx=1;
  var e=Zh();
  function n(p){
    var x="https://react.dev/errors/"+p;
    if(1<arguments.length){
      x+="?args[]="+encodeURIComponent(arguments[1]);
      for(var b=2;
      b<arguments.length;
      b++)x+="&args[]="+encodeURIComponent(arguments[b])}
    return"Minified React error #"+p+"; visit "+x+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}
  function r(){
    }
  var s={
    d:{
      f:r,
      r:function(){
        throw Error(n(522))}
      ,
      D:r,
      C:r,
      L:r,
      m:r,
      X:r,
      S:r,
      M:r}
    ,
    p:0,
    findDOMNode:null}
  ,
  l=Symbol.for("react.portal");
  function c(p,
  x,
  b){
    var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;
    return{
      $$typeof:l,
      key:v==null?null:""+v,
      children:p,
      containerInfo:x,
      implementation:b}
    }
  var f=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function g(p,
  x){
    if(p==="font")return"";
    if(typeof x=="string")return x==="use-credentials"?x:""}
  return Lt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,
  Lt.createPortal=function(p,
  x){
    var b=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;
    if(!x||x.nodeType!==1&&x.nodeType!==9&&x.nodeType!==11)throw Error(n(299));
    return c(p,
    x,
    null,
    b)}
  ,
  Lt.flushSync=function(p){
    var x=f.T,
    b=s.p;
    try{
      if(f.T=null,
      s.p=2,
      p)return p()}
    finally{
      f.T=x,
      s.p=b,
      s.d.f()}
    }
  ,
  Lt.preconnect=function(p,
  x){
    typeof p=="string"&&(x?(x=x.crossOrigin,
    x=typeof x=="string"?x==="use-credentials"?x:"":void 0):x=null,
    s.d.C(p,
    x))}
  ,
  Lt.prefetchDNS=function(p){
    typeof p=="string"&&s.d.D(p)}
  ,
  Lt.preinit=function(p,
  x){
    if(typeof p=="string"&&x&&typeof x.as=="string"){
      var b=x.as,
      v=g(b,
      x.crossOrigin),
      w=typeof x.integrity=="string"?x.integrity:void 0,
      _=typeof x.fetchPriority=="string"?x.fetchPriority:void 0;
      b==="style"?s.d.S(p,
      typeof x.precedence=="string"?x.precedence:void 0,
      {
        crossOrigin:v,
        integrity:w,
        fetchPriority:_}
      ):b==="script"&&s.d.X(p,
      {
        crossOrigin:v,
        integrity:w,
        fetchPriority:_,
        nonce:typeof x.nonce=="string"?x.nonce:void 0}
      )}
    }
  ,
  Lt.preinitModule=function(p,
  x){
    if(typeof p=="string")if(typeof x=="object"&&x!==null){
      if(x.as==null||x.as==="script"){
        var b=g(x.as,
        x.crossOrigin);
        s.d.M(p,
        {
          crossOrigin:b,
          integrity:typeof x.integrity=="string"?x.integrity:void 0,
          nonce:typeof x.nonce=="string"?x.nonce:void 0}
        )}
      }
    else x==null&&s.d.M(p)}
  ,
  Lt.preload=function(p,
  x){
    if(typeof p=="string"&&typeof x=="object"&&x!==null&&typeof x.as=="string"){
      var b=x.as,
      v=g(b,
      x.crossOrigin);
      s.d.L(p,
      b,
      {
        crossOrigin:v,
        integrity:typeof x.integrity=="string"?x.integrity:void 0,
        nonce:typeof x.nonce=="string"?x.nonce:void 0,
        type:typeof x.type=="string"?x.type:void 0,
        fetchPriority:typeof x.fetchPriority=="string"?x.fetchPriority:void 0,
        referrerPolicy:typeof x.referrerPolicy=="string"?x.referrerPolicy:void 0,
        imageSrcSet:typeof x.imageSrcSet=="string"?x.imageSrcSet:void 0,
        imageSizes:typeof x.imageSizes=="string"?x.imageSizes:void 0,
        media:typeof x.media=="string"?x.media:void 0}
      )}
    }
  ,
  Lt.preloadModule=function(p,
  x){
    if(typeof p=="string")if(x){
      var b=g(x.as,
      x.crossOrigin);
      s.d.m(p,
      {
        as:typeof x.as=="string"&&x.as!=="script"?x.as:void 0,
        crossOrigin:b,
        integrity:typeof x.integrity=="string"?x.integrity:void 0}
      )}
    else s.d.m(p)}
  ,
  Lt.requestFormReset=function(p){
    s.d.r(p)}
  ,
  Lt.unstable_batchedUpdates=function(p,
  x){
    return p(x)}
  ,
  Lt.useFormState=function(p,
  x,
  b){
    return f.H.useFormState(p,
    x,
    b)}
  ,
  Lt.useFormStatus=function(){
    return f.H.useHostTransitionStatus()}
  ,
  Lt.version="19.2.0",
  Lt}
var Zx;
function p_(){
  if(Zx)return Lf.exports;
  Zx=1;
  function e(){
    if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}
    catch{
      }
    }
  return e(),
  Lf.exports=m_(),
  Lf.exports}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wx;
function g_(){
  if(Wx)return As;
  Wx=1;
  var e=h_(),
  n=Zh(),
  r=p_();
  function s(t){
    var a="https://react.dev/errors/"+t;
    if(1<arguments.length){
      a+="?args[]="+encodeURIComponent(arguments[1]);
      for(var i=2;
      i<arguments.length;
      i++)a+="&args[]="+encodeURIComponent(arguments[i])}
    return"Minified React error #"+t+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}
  function l(t){
    return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}
  function c(t){
    var a=t,
    i=t;
    if(t.alternate)for(;
    a.return;
    )a=a.return;
    else{
      t=a;
      do a=t,
      (a.flags&4098)!==0&&(i=a.return),
      t=a.return;
      while(t)}
    return a.tag===3?i:null}
  function f(t){
    if(t.tag===13){
      var a=t.memoizedState;
      if(a===null&&(t=t.alternate,
      t!==null&&(a=t.memoizedState)),
      a!==null)return a.dehydrated}
    return null}
  function g(t){
    if(t.tag===31){
      var a=t.memoizedState;
      if(a===null&&(t=t.alternate,
      t!==null&&(a=t.memoizedState)),
      a!==null)return a.dehydrated}
    return null}
  function p(t){
    if(c(t)!==t)throw Error(s(188))}
  function x(t){
    var a=t.alternate;
    if(!a){
      if(a=c(t),
      a===null)throw Error(s(188));
      return a!==t?null:t}
    for(var i=t,
    o=a;
    ;
    ){
      var u=i.return;
      if(u===null)break;
      var h=u.alternate;
      if(h===null){
        if(o=u.return,
        o!==null){
          i=o;
          continue}
        break}
      if(u.child===h.child){
        for(h=u.child;
        h;
        ){
          if(h===i)return p(u),
          t;
          if(h===o)return p(u),
          a;
          h=h.sibling}
        throw Error(s(188))}
      if(i.return!==o.return)i=u,
      o=h;
      else{
        for(var y=!1,
        S=u.child;
        S;
        ){
          if(S===i){
            y=!0,
            i=u,
            o=h;
            break}
          if(S===o){
            y=!0,
            o=u,
            i=h;
            break}
          S=S.sibling}
        if(!y){
          for(S=h.child;
          S;
          ){
            if(S===i){
              y=!0,
              i=h,
              o=u;
              break}
            if(S===o){
              y=!0,
              o=h,
              i=u;
              break}
            S=S.sibling}
          if(!y)throw Error(s(189))}
        }
      if(i.alternate!==o)throw Error(s(190))}
    if(i.tag!==3)throw Error(s(188));
    return i.stateNode.current===i?t:a}
  function b(t){
    var a=t.tag;
    if(a===5||a===26||a===27||a===6)return t;
    for(t=t.child;
    t!==null;
    ){
      if(a=b(t),
      a!==null)return a;
      t=t.sibling}
    return null}
  var v=Object.assign,
  w=Symbol.for("react.element"),
  _=Symbol.for("react.transitional.element"),
  L=Symbol.for("react.portal"),
  M=Symbol.for("react.fragment"),
  E=Symbol.for("react.strict_mode"),
  A=Symbol.for("react.profiler"),
  D=Symbol.for("react.consumer"),
  R=Symbol.for("react.context"),
  Z=Symbol.for("react.forward_ref"),
  V=Symbol.for("react.suspense"),
  I=Symbol.for("react.suspense_list"),
  q=Symbol.for("react.memo"),
  Q=Symbol.for("react.lazy"),
  F=Symbol.for("react.activity"),
  te=Symbol.for("react.memo_cache_sentinel"),
  ie=Symbol.iterator;
  function de(t){
    return t===null||typeof t!="object"?null:(t=ie&&t[ie]||t["@@iterator"],
    typeof t=="function"?t:null)}
  var Be=Symbol.for("react.client.reference");
  function De(t){
    if(t==null)return null;
    if(typeof t=="function")return t.$$typeof===Be?null:t.displayName||t.name||null;
    if(typeof t=="string")return t;
    switch(t){
      case M:return"Fragment";
      case A:return"Profiler";
      case E:return"StrictMode";
      case V:return"Suspense";
      case I:return"SuspenseList";
      case F:return"Activity"}
    if(typeof t=="object")switch(t.$$typeof){
      case L:return"Portal";
      case R:return t.displayName||"Context";
      case D:return(t._context.displayName||"Context")+".Consumer";
      case Z:var a=t.render;
      return t=t.displayName,
      t||(t=a.displayName||a.name||"",
      t=t!==""?"ForwardRef("+t+")":"ForwardRef"),
      t;
      case q:return a=t.displayName||null,
      a!==null?a:De(t.type)||"Memo";
      case Q:a=t._payload,
      t=t._init;
      try{
        return De(t(a))}
      catch{
        }
      }
    return null}
  var Ge=Array.isArray,
  k=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
  Y=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
  $={
    pending:!1,
    data:null,
    method:null,
    action:null}
  ,
  j=[],
  ee=-1;
  function z(t){
    return{
      current:t}
    }
  function U(t){
    0>ee||(t.current=j[ee],
    j[ee]=null,
    ee--)}
  function J(t,
  a){
    ee++,
    j[ee]=t.current,
    t.current=a}
  var ne=z(null),
  se=z(null),
  fe=z(null),
  ve=z(null);
  function ht(t,
  a){
    switch(J(fe,
    a),
    J(se,
    t),
    J(ne,
    null),
    a.nodeType){
      case 9:case 11:t=(t=a.documentElement)&&(t=t.namespaceURI)?lx(t):0;
      break;
      default:if(t=a.tagName,
      a=a.namespaceURI)a=lx(a),
      t=cx(a,
      t);
      else switch(t){
        case"svg":t=1;
        break;
        case"math":t=2;
        break;
        default:t=0}
      }
    U(ne),
    J(ne,
    t)}
  function Qe(){
    U(ne),
    U(se),
    U(fe)}
  function Cn(t){
    t.memoizedState!==null&&J(ve,
    t);
    var a=ne.current,
    i=cx(a,
    t.type);
    a!==i&&(J(se,
    t),
    J(ne,
    i))}
  function Xa(t){
    se.current===t&&(U(ne),
    U(se)),
    ve.current===t&&(U(ve),
    Es._currentValue=$)}
  var Ri,
  go;
  function Mt(t){
    if(Ri===void 0)try{
      throw Error()}
    catch(i){
      var a=i.stack.trim().match(/\n( *(at )?)/);
      Ri=a&&a[1]||"",
      go=-1<i.stack.indexOf(`
    at`)?" (<anonymous>)":-1<i.stack.indexOf("@")?"@unknown:0:0":""}
    return`
`+Ri+t+go}
  var pn=!1;
  function $a(t,
  a){
    if(!t||pn)return"";
    pn=!0;
    var i=Error.prepareStackTrace;
    Error.prepareStackTrace=void 0;
    try{
      var o={
        DetermineComponentFrameRoot:function(){
          try{
            if(a){
              var X=function(){
                throw Error()}
              ;
              if(Object.defineProperty(X.prototype,
              "props",
              {
                set:function(){
                  throw Error()}
                }
              ),
              typeof Reflect=="object"&&Reflect.construct){
                try{
                  Reflect.construct(X,
                  [])}
                catch(P){
                  var O=P}
                Reflect.construct(t,
                [],
                X)}
              else{
                try{
                  X.call()}
                catch(P){
                  O=P}
                t.call(X.prototype)}
              }
            else{
              try{
                throw Error()}
              catch(P){
                O=P}
              (X=t())&&typeof X.catch=="function"&&X.catch(function(){
                }
              )}
            }
          catch(P){
            if(P&&O&&typeof P.stack=="string")return[P.stack,
            O.stack]}
          return[null,
          null]}
        }
      ;
      o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";
      var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,
      "name");
      u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,
      "name",
      {
        value:"DetermineComponentFrameRoot"}
      );
      var h=o.DetermineComponentFrameRoot(),
      y=h[0],
      S=h[1];
      if(y&&S){
        var T=y.split(`
`),
        H=S.split(`
`);
        for(u=o=0;
        o<T.length&&!T[o].includes("DetermineComponentFrameRoot");
        )o++;
        for(;
        u<H.length&&!H[u].includes("DetermineComponentFrameRoot");
        )u++;
        if(o===T.length||u===H.length)for(o=T.length-1,
        u=H.length-1;
        1<=o&&0<=u&&T[o]!==H[u];
        )u--;
        for(;
        1<=o&&0<=u;
        o--,
        u--)if(T[o]!==H[u]){
          if(o!==1||u!==1)do if(o--,
          u--,
          0>u||T[o]!==H[u]){
            var W=`
`+T[o].replace(" at new ",
            " at ");
            return t.displayName&&W.includes("<anonymous>")&&(W=W.replace("<anonymous>",
            t.displayName)),
            W}
          while(1<=o&&0<=u);
          break}
        }
      }
    finally{
      pn=!1,
      Error.prepareStackTrace=i}
    return(i=t?t.displayName||t.name:"")?Mt(i):""}
  function Gi(t,
  a){
    switch(t.tag){
      case 26:case 27:case 5:return Mt(t.type);
      case 16:return Mt("Lazy");
      case 13:return t.child!==a&&a!==null?Mt("Suspense Fallback"):Mt("Suspense");
      case 19:return Mt("SuspenseList");
      case 0:case 15:return $a(t.type,
      !1);
      case 11:return $a(t.type.render,
      !1);
      case 1:return $a(t.type,
      !0);
      case 31:return Mt("Activity");
      default:return""}
    }
  function Fa(t){
    try{
      var a="",
      i=null;
      do a+=Gi(t,
      i),
      i=t,
      t=t.return;
      while(t);
      return a}
    catch(o){
      return`
Error generating stack: `+o.message+`
`+o.stack}
    }
  var Ja=Object.prototype.hasOwnProperty,
  Ne=e.unstable_scheduleCallback,
  Bt=e.unstable_cancelCallback,
  Ee=e.unstable_shouldYield,
  bt=e.unstable_requestPaint,
  xe=e.unstable_now,
  Hi=e.unstable_getCurrentPriorityLevel,
  Um=e.unstable_ImmediatePriority,
  Im=e.unstable_UserBlockingPriority,
  xo=e.unstable_NormalPriority,
  q1=e.unstable_LowPriority,
  Ym=e.unstable_IdlePriority,
  V1=e.log,
  Z1=e.unstable_setDisableYieldValue,
  Oi=null,
  qt=null;
  function fa(t){
    if(typeof V1=="function"&&Z1(t),
    qt&&typeof qt.setStrictMode=="function")try{
      qt.setStrictMode(Oi,
      t)}
    catch{
      }
    }
  var Vt=Math.clz32?Math.clz32:X1,
  W1=Math.log,
  K1=Math.LN2;
  function X1(t){
    return t>>>=0,
    t===0?32:31-(W1(t)/K1|0)|0}
  var yo=256,
  bo=262144,
  vo=4194304;
  function Qa(t){
    var a=t&42;
    if(a!==0)return a;
    switch(t&-t){
      case 1:return 1;
      case 2:return 2;
      case 4:return 4;
      case 8:return 8;
      case 16:return 16;
      case 32:return 32;
      case 64:return 64;
      case 128:return 128;
      case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;
      case 262144:case 524288:case 1048576:case 2097152:return t&3932160;
      case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;
      case 67108864:return 67108864;
      case 134217728:return 134217728;
      case 268435456:return 268435456;
      case 536870912:return 536870912;
      case 1073741824:return 0;
      default:return t}
    }
  function wo(t,
  a,
  i){
    var o=t.pendingLanes;
    if(o===0)return 0;
    var u=0,
    h=t.suspendedLanes,
    y=t.pingedLanes;
    t=t.warmLanes;
    var S=o&134217727;
    return S!==0?(o=S&~h,
    o!==0?u=Qa(o):(y&=S,
    y!==0?u=Qa(y):i||(i=S&~t,
    i!==0&&(u=Qa(i))))):(S=o&~h,
    S!==0?u=Qa(S):y!==0?u=Qa(y):i||(i=o&~t,
    i!==0&&(u=Qa(i)))),
    u===0?0:a!==0&&a!==u&&(a&h)===0&&(h=u&-u,
    i=a&-a,
    h>=i||h===32&&(i&4194048)!==0)?a:u}
  function Ui(t,
  a){
    return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&a)===0}
  function $1(t,
  a){
    switch(t){
      case 1:case 2:case 4:case 8:case 64:return a+250;
      case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a+5e3;
      case 4194304:case 8388608:case 16777216:case 33554432:return-1;
      case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;
      default:return-1}
    }
  function Pm(){
    var t=vo;
    return vo<<=1,
    (vo&62914560)===0&&(vo=4194304),
    t}
  function ou(t){
    for(var a=[],
    i=0;
    31>i;
    i++)a.push(t);
    return a}
  function Ii(t,
  a){
    t.pendingLanes|=a,
    a!==268435456&&(t.suspendedLanes=0,
    t.pingedLanes=0,
    t.warmLanes=0)}
  function F1(t,
  a,
  i,
  o,
  u,
  h){
    var y=t.pendingLanes;
    t.pendingLanes=i,
    t.suspendedLanes=0,
    t.pingedLanes=0,
    t.warmLanes=0,
    t.expiredLanes&=i,
    t.entangledLanes&=i,
    t.errorRecoveryDisabledLanes&=i,
    t.shellSuspendCounter=0;
    var S=t.entanglements,
    T=t.expirationTimes,
    H=t.hiddenUpdates;
    for(i=y&~i;
    0<i;
    ){
      var W=31-Vt(i),
      X=1<<W;
      S[W]=0,
      T[W]=-1;
      var O=H[W];
      if(O!==null)for(H[W]=null,
      W=0;
      W<O.length;
      W++){
        var P=O[W];
        P!==null&&(P.lane&=-536870913)}
      i&=~X}
    o!==0&&qm(t,
    o,
    0),
    h!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=h&~(y&~a))}
  function qm(t,
  a,
  i){
    t.pendingLanes|=a,
    t.suspendedLanes&=~a;
    var o=31-Vt(a);
    t.entangledLanes|=a,
    t.entanglements[o]=t.entanglements[o]|1073741824|i&261930}
  function Vm(t,
  a){
    var i=t.entangledLanes|=a;
    for(t=t.entanglements;
    i;
    ){
      var o=31-Vt(i),
      u=1<<o;
      u&a|t[o]&a&&(t[o]|=a),
      i&=~u}
    }
  function Zm(t,
  a){
    var i=a&-a;
    return i=(i&42)!==0?1:lu(i),
    (i&(t.suspendedLanes|a))!==0?0:i}
  function lu(t){
    switch(t){
      case 2:t=1;
      break;
      case 8:t=4;
      break;
      case 32:t=16;
      break;
      case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;
      break;
      case 268435456:t=134217728;
      break;
      default:t=0}
    return t}
  function cu(t){
    return t&=-t,
    2<t?8<t?(t&134217727)!==0?32:268435456:8:2}
  function Wm(){
    var t=Y.p;
    return t!==0?t:(t=window.event,
    t===void 0?32:Ax(t.type))}
  function Km(t,
  a){
    var i=Y.p;
    try{
      return Y.p=t,
      a()}
    finally{
      Y.p=i}
    }
  var ha=Math.random().toString(36).slice(2),
  vt="__reactFiber$"+ha,
  kt="__reactProps$"+ha,
  Dr="__reactContainer$"+ha,
  uu="__reactEvents$"+ha,
  J1="__reactListeners$"+ha,
  Q1="__reactHandles$"+ha,
  Xm="__reactResources$"+ha,
  Yi="__reactMarker$"+ha;
  function du(t){
    delete t[vt],
    delete t[kt],
    delete t[uu],
    delete t[J1],
    delete t[Q1]}
  function Ar(t){
    var a=t[vt];
    if(a)return a;
    for(var i=t.parentNode;
    i;
    ){
      if(a=i[Dr]||i[vt]){
        if(i=a.alternate,
        a.child!==null||i!==null&&i.child!==null)for(t=gx(t);
        t!==null;
        ){
          if(i=t[vt])return i;
          t=gx(t)}
        return a}
      t=i,
      i=t.parentNode}
    return null}
  function Nr(t){
    if(t=t[vt]||t[Dr]){
      var a=t.tag;
      if(a===5||a===6||a===13||a===31||a===26||a===27||a===3)return t}
    return null}
  function Pi(t){
    var a=t.tag;
    if(a===5||a===26||a===27||a===6)return t.stateNode;
    throw Error(s(33))}
  function jr(t){
    var a=t[Xm];
    return a||(a=t[Xm]={
      hoistableStyles:new Map,
      hoistableScripts:new Map}
    ),
    a}
  function gt(t){
    t[Yi]=!0}
  var $m=new Set,
  Fm={
    }
  ;
  function er(t,
  a){
    kr(t,
    a),
    kr(t+"Capture",
    a)}
  function kr(t,
  a){
    for(Fm[t]=a,
    t=0;
    t<a.length;
    t++)$m.add(a[t])}
  var ew=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),
  Jm={
    }
  ,
  Qm={
    }
  ;
  function tw(t){
    return Ja.call(Qm,
    t)?!0:Ja.call(Jm,
    t)?!1:ew.test(t)?Qm[t]=!0:(Jm[t]=!0,
    !1)}
  function So(t,
  a,
  i){
    if(tw(a))if(i===null)t.removeAttribute(a);
    else{
      switch(typeof i){
        case"undefined":case"function":case"symbol":t.removeAttribute(a);
        return;
        case"boolean":var o=a.toLowerCase().slice(0,
        5);
        if(o!=="data-"&&o!=="aria-"){
          t.removeAttribute(a);
          return}
        }
      t.setAttribute(a,
      ""+i)}
    }
  function _o(t,
  a,
  i){
    if(i===null)t.removeAttribute(a);
    else{
      switch(typeof i){
        case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);
        return}
      t.setAttribute(a,
      ""+i)}
    }
  function jn(t,
  a,
  i,
  o){
    if(o===null)t.removeAttribute(i);
    else{
      switch(typeof o){
        case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(i);
        return}
      t.setAttributeNS(a,
      i,
      ""+o)}
    }
  function tn(t){
    switch(typeof t){
      case"bigint":case"boolean":case"number":case"string":case"undefined":return t;
      case"object":return t;
      default:return""}
    }
  function ep(t){
    var a=t.type;
    return(t=t.nodeName)&&t.toLowerCase()==="input"&&(a==="checkbox"||a==="radio")}
  function nw(t,
  a,
  i){
    var o=Object.getOwnPropertyDescriptor(t.constructor.prototype,
    a);
    if(!t.hasOwnProperty(a)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){
      var u=o.get,
      h=o.set;
      return Object.defineProperty(t,
      a,
      {
        configurable:!0,
        get:function(){
          return u.call(this)}
        ,
        set:function(y){
          i=""+y,
          h.call(this,
          y)}
        }
      ),
      Object.defineProperty(t,
      a,
      {
        enumerable:o.enumerable}
      ),
      {
        getValue:function(){
          return i}
        ,
        setValue:function(y){
          i=""+y}
        ,
        stopTracking:function(){
          t._valueTracker=null,
          delete t[a]}
        }
      }
    }
  function fu(t){
    if(!t._valueTracker){
      var a=ep(t)?"checked":"value";
      t._valueTracker=nw(t,
      a,
      ""+t[a])}
    }
  function tp(t){
    if(!t)return!1;
    var a=t._valueTracker;
    if(!a)return!0;
    var i=a.getValue(),
    o="";
    return t&&(o=ep(t)?t.checked?"true":"false":t.value),
    t=o,
    t!==i?(a.setValue(t),
    !0):!1}
  function Co(t){
    if(t=t||(typeof document<"u"?document:void 0),
    typeof t>"u")return null;
    try{
      return t.activeElement||t.body}
    catch{
      return t.body}
    }
  var aw=/[\n"\\]/g;
  function nn(t){
    return t.replace(aw,
    function(a){
      return"\\"+a.charCodeAt(0).toString(16)+" "}
    )}
  function hu(t,
  a,
  i,
  o,
  u,
  h,
  y,
  S){
    t.name="",
    y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?t.type=y:t.removeAttribute("type"),
    a!=null?y==="number"?(a===0&&t.value===""||t.value!=a)&&(t.value=""+tn(a)):t.value!==""+tn(a)&&(t.value=""+tn(a)):y!=="submit"&&y!=="reset"||t.removeAttribute("value"),
    a!=null?mu(t,
    y,
    tn(a)):i!=null?mu(t,
    y,
    tn(i)):o!=null&&t.removeAttribute("value"),
    u==null&&h!=null&&(t.defaultChecked=!!h),
    u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),
    S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?t.name=""+tn(S):t.removeAttribute("name")}
  function np(t,
  a,
  i,
  o,
  u,
  h,
  y,
  S){
    if(h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(t.type=h),
    a!=null||i!=null){
      if(!(h!=="submit"&&h!=="reset"||a!=null)){
        fu(t);
        return}
      i=i!=null?""+tn(i):"",
      a=a!=null?""+tn(a):i,
      S||a===t.value||(t.value=a),
      t.defaultValue=a}
    o=o??u,
    o=typeof o!="function"&&typeof o!="symbol"&&!!o,
    t.checked=S?t.checked:!!o,
    t.defaultChecked=!!o,
    y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"&&(t.name=y),
    fu(t)}
  function mu(t,
  a,
  i){
    a==="number"&&Co(t.ownerDocument)===t||t.defaultValue===""+i||(t.defaultValue=""+i)}
  function Rr(t,
  a,
  i,
  o){
    if(t=t.options,
    a){
      a={
        }
      ;
      for(var u=0;
      u<i.length;
      u++)a["$"+i[u]]=!0;
      for(i=0;
      i<t.length;
      i++)u=a.hasOwnProperty("$"+t[i].value),
      t[i].selected!==u&&(t[i].selected=u),
      u&&o&&(t[i].defaultSelected=!0)}
    else{
      for(i=""+tn(i),
      a=null,
      u=0;
      u<t.length;
      u++){
        if(t[u].value===i){
          t[u].selected=!0,
          o&&(t[u].defaultSelected=!0);
          return}
        a!==null||t[u].disabled||(a=t[u])}
      a!==null&&(a.selected=!0)}
    }
  function ap(t,
  a,
  i){
    if(a!=null&&(a=""+tn(a),
    a!==t.value&&(t.value=a),
    i==null)){
      t.defaultValue!==a&&(t.defaultValue=a);
      return}
    t.defaultValue=i!=null?""+tn(i):""}
  function rp(t,
  a,
  i,
  o){
    if(a==null){
      if(o!=null){
        if(i!=null)throw Error(s(92));
        if(Ge(o)){
          if(1<o.length)throw Error(s(93));
          o=o[0]}
        i=o}
      i==null&&(i=""),
      a=i}
    i=tn(a),
    t.defaultValue=i,
    o=t.textContent,
    o===i&&o!==""&&o!==null&&(t.value=o),
    fu(t)}
  function Gr(t,
  a){
    if(a){
      var i=t.firstChild;
      if(i&&i===t.lastChild&&i.nodeType===3){
        i.nodeValue=a;
        return}
      }
    t.textContent=a}
  var rw=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
  function ip(t,
  a,
  i){
    var o=a.indexOf("--")===0;
    i==null||typeof i=="boolean"||i===""?o?t.setProperty(a,
    ""):a==="float"?t.cssFloat="":t[a]="":o?t.setProperty(a,
    i):typeof i!="number"||i===0||rw.has(a)?a==="float"?t.cssFloat=i:t[a]=(""+i).trim():t[a]=i+"px"}
  function sp(t,
  a,
  i){
    if(a!=null&&typeof a!="object")throw Error(s(62));
    if(t=t.style,
    i!=null){
      for(var o in i)!i.hasOwnProperty(o)||a!=null&&a.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,
      ""):o==="float"?t.cssFloat="":t[o]="");
      for(var u in a)o=a[u],
      a.hasOwnProperty(u)&&i[u]!==o&&ip(t,
      u,
      o)}
    else for(var h in a)a.hasOwnProperty(h)&&ip(t,
    h,
    a[h])}
  function pu(t){
    if(t.indexOf("-")===-1)return!1;
    switch(t){
      case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;
      default:return!0}
    }
  var iw=new Map([["acceptCharset",
  "accept-charset"],
  ["htmlFor",
  "for"],
  ["httpEquiv",
  "http-equiv"],
  ["crossOrigin",
  "crossorigin"],
  ["accentHeight",
  "accent-height"],
  ["alignmentBaseline",
  "alignment-baseline"],
  ["arabicForm",
  "arabic-form"],
  ["baselineShift",
  "baseline-shift"],
  ["capHeight",
  "cap-height"],
  ["clipPath",
  "clip-path"],
  ["clipRule",
  "clip-rule"],
  ["colorInterpolation",
  "color-interpolation"],
  ["colorInterpolationFilters",
  "color-interpolation-filters"],
  ["colorProfile",
  "color-profile"],
  ["colorRendering",
  "color-rendering"],
  ["dominantBaseline",
  "dominant-baseline"],
  ["enableBackground",
  "enable-background"],
  ["fillOpacity",
  "fill-opacity"],
  ["fillRule",
  "fill-rule"],
  ["floodColor",
  "flood-color"],
  ["floodOpacity",
  "flood-opacity"],
  ["fontFamily",
  "font-family"],
  ["fontSize",
  "font-size"],
  ["fontSizeAdjust",
  "font-size-adjust"],
  ["fontStretch",
  "font-stretch"],
  ["fontStyle",
  "font-style"],
  ["fontVariant",
  "font-variant"],
  ["fontWeight",
  "font-weight"],
  ["glyphName",
  "glyph-name"],
  ["glyphOrientationHorizontal",
  "glyph-orientation-horizontal"],
  ["glyphOrientationVertical",
  "glyph-orientation-vertical"],
  ["horizAdvX",
  "horiz-adv-x"],
  ["horizOriginX",
  "horiz-origin-x"],
  ["imageRendering",
  "image-rendering"],
  ["letterSpacing",
  "letter-spacing"],
  ["lightingColor",
  "lighting-color"],
  ["markerEnd",
  "marker-end"],
  ["markerMid",
  "marker-mid"],
  ["markerStart",
  "marker-start"],
  ["overlinePosition",
  "overline-position"],
  ["overlineThickness",
  "overline-thickness"],
  ["paintOrder",
  "paint-order"],
  ["panose-1",
  "panose-1"],
  ["pointerEvents",
  "pointer-events"],
  ["renderingIntent",
  "rendering-intent"],
  ["shapeRendering",
  "shape-rendering"],
  ["stopColor",
  "stop-color"],
  ["stopOpacity",
  "stop-opacity"],
  ["strikethroughPosition",
  "strikethrough-position"],
  ["strikethroughThickness",
  "strikethrough-thickness"],
  ["strokeDasharray",
  "stroke-dasharray"],
  ["strokeDashoffset",
  "stroke-dashoffset"],
  ["strokeLinecap",
  "stroke-linecap"],
  ["strokeLinejoin",
  "stroke-linejoin"],
  ["strokeMiterlimit",
  "stroke-miterlimit"],
  ["strokeOpacity",
  "stroke-opacity"],
  ["strokeWidth",
  "stroke-width"],
  ["textAnchor",
  "text-anchor"],
  ["textDecoration",
  "text-decoration"],
  ["textRendering",
  "text-rendering"],
  ["transformOrigin",
  "transform-origin"],
  ["underlinePosition",
  "underline-position"],
  ["underlineThickness",
  "underline-thickness"],
  ["unicodeBidi",
  "unicode-bidi"],
  ["unicodeRange",
  "unicode-range"],
  ["unitsPerEm",
  "units-per-em"],
  ["vAlphabetic",
  "v-alphabetic"],
  ["vHanging",
  "v-hanging"],
  ["vIdeographic",
  "v-ideographic"],
  ["vMathematical",
  "v-mathematical"],
  ["vectorEffect",
  "vector-effect"],
  ["vertAdvY",
  "vert-adv-y"],
  ["vertOriginX",
  "vert-origin-x"],
  ["vertOriginY",
  "vert-origin-y"],
  ["wordSpacing",
  "word-spacing"],
  ["writingMode",
  "writing-mode"],
  ["xmlnsXlink",
  "xmlns:xlink"],
  ["xHeight",
  "x-height"]]),
  sw=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Lo(t){
    return sw.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}
  function kn(){
    }
  var gu=null;
  function xu(t){
    return t=t.target||t.srcElement||window,
    t.correspondingUseElement&&(t=t.correspondingUseElement),
    t.nodeType===3?t.parentNode:t}
  var Hr=null,
  Or=null;
  function op(t){
    var a=Nr(t);
    if(a&&(t=a.stateNode)){
      var i=t[kt]||null;
      e:switch(t=a.stateNode,
      a.type){
        case"input":if(hu(t,
        i.value,
        i.defaultValue,
        i.defaultValue,
        i.checked,
        i.defaultChecked,
        i.type,
        i.name),
        a=i.name,
        i.type==="radio"&&a!=null){
          for(i=t;
          i.parentNode;
          )i=i.parentNode;
          for(i=i.querySelectorAll('input[name="'+nn(""+a)+'"][type="radio"]'),
          a=0;
          a<i.length;
          a++){
            var o=i[a];
            if(o!==t&&o.form===t.form){
              var u=o[kt]||null;
              if(!u)throw Error(s(90));
              hu(o,
              u.value,
              u.defaultValue,
              u.defaultValue,
              u.checked,
              u.defaultChecked,
              u.type,
              u.name)}
            }
          for(a=0;
          a<i.length;
          a++)o=i[a],
          o.form===t.form&&tp(o)}
        break e;
        case"textarea":ap(t,
        i.value,
        i.defaultValue);
        break e;
        case"select":a=i.value,
        a!=null&&Rr(t,
        !!i.multiple,
        a,
        !1)}
      }
    }
  var yu=!1;
  function lp(t,
  a,
  i){
    if(yu)return t(a,
    i);
    yu=!0;
    try{
      var o=t(a);
      return o}
    finally{
      if(yu=!1,
      (Hr!==null||Or!==null)&&(fl(),
      Hr&&(a=Hr,
      t=Or,
      Or=Hr=null,
      op(a),
      t)))for(a=0;
      a<t.length;
      a++)op(t[a])}
    }
  function qi(t,
  a){
    var i=t.stateNode;
    if(i===null)return null;
    var o=i[kt]||null;
    if(o===null)return null;
    i=o[a];
    e:switch(a){
      case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,
      o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),
      t=!o;
      break e;
      default:t=!1}
    if(t)return null;
    if(i&&typeof i!="function")throw Error(s(231,
    a,
    typeof i));
    return i}
  var Rn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),
  bu=!1;
  if(Rn)try{
    var Vi={
      }
    ;
    Object.defineProperty(Vi,
    "passive",
    {
      get:function(){
        bu=!0}
      }
    ),
    window.addEventListener("test",
    Vi,
    Vi),
    window.removeEventListener("test",
    Vi,
    Vi)}
  catch{
    bu=!1}
  var ma=null,
  vu=null,
  zo=null;
  function cp(){
    if(zo)return zo;
    var t,
    a=vu,
    i=a.length,
    o,
    u="value"in ma?ma.value:ma.textContent,
    h=u.length;
    for(t=0;
    t<i&&a[t]===u[t];
    t++);
    var y=i-t;
    for(o=1;
    o<=y&&a[i-o]===u[h-o];
    o++);
    return zo=u.slice(t,
    1<o?1-o:void 0)}
  function Eo(t){
    var a=t.keyCode;
    return"charCode"in t?(t=t.charCode,
    t===0&&a===13&&(t=13)):t=a,
    t===10&&(t=13),
    32<=t||t===13?t:0}
  function To(){
    return!0}
  function up(){
    return!1}
  function Rt(t){
    function a(i,
    o,
    u,
    h,
    y){
      this._reactName=i,
      this._targetInst=u,
      this.type=o,
      this.nativeEvent=h,
      this.target=y,
      this.currentTarget=null;
      for(var S in t)t.hasOwnProperty(S)&&(i=t[S],
      this[S]=i?i(h):h[S]);
      return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?To:up,
      this.isPropagationStopped=up,
      this}
    return v(a.prototype,
    {
      preventDefault:function(){
        this.defaultPrevented=!0;
        var i=this.nativeEvent;
        i&&(i.preventDefault?i.preventDefault():typeof i.returnValue!="unknown"&&(i.returnValue=!1),
        this.isDefaultPrevented=To)}
      ,
      stopPropagation:function(){
        var i=this.nativeEvent;
        i&&(i.stopPropagation?i.stopPropagation():typeof i.cancelBubble!="unknown"&&(i.cancelBubble=!0),
        this.isPropagationStopped=To)}
      ,
      persist:function(){
        }
      ,
      isPersistent:To}
    ),
    a}
  var tr={
    eventPhase:0,
    bubbles:0,
    cancelable:0,
    timeStamp:function(t){
      return t.timeStamp||Date.now()}
    ,
    defaultPrevented:0,
    isTrusted:0}
  ,
  Mo=Rt(tr),
  Zi=v({
    }
  ,
  tr,
  {
    view:0,
    detail:0}
  ),
  ow=Rt(Zi),
  wu,
  Su,
  Wi,
  Bo=v({
    }
  ,
  Zi,
  {
    screenX:0,
    screenY:0,
    clientX:0,
    clientY:0,
    pageX:0,
    pageY:0,
    ctrlKey:0,
    shiftKey:0,
    altKey:0,
    metaKey:0,
    getModifierState:Cu,
    button:0,
    buttons:0,
    relatedTarget:function(t){
      return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget}
    ,
    movementX:function(t){
      return"movementX"in t?t.movementX:(t!==Wi&&(Wi&&t.type==="mousemove"?(wu=t.screenX-Wi.screenX,
      Su=t.screenY-Wi.screenY):Su=wu=0,
      Wi=t),
      wu)}
    ,
    movementY:function(t){
      return"movementY"in t?t.movementY:Su}
    }
  ),
  dp=Rt(Bo),
  lw=v({
    }
  ,
  Bo,
  {
    dataTransfer:0}
  ),
  cw=Rt(lw),
  uw=v({
    }
  ,
  Zi,
  {
    relatedTarget:0}
  ),
  _u=Rt(uw),
  dw=v({
    }
  ,
  tr,
  {
    animationName:0,
    elapsedTime:0,
    pseudoElement:0}
  ),
  fw=Rt(dw),
  hw=v({
    }
  ,
  tr,
  {
    clipboardData:function(t){
      return"clipboardData"in t?t.clipboardData:window.clipboardData}
    }
  ),
  mw=Rt(hw),
  pw=v({
    }
  ,
  tr,
  {
    data:0}
  ),
  fp=Rt(pw),
  gw={
    Esc:"Escape",
    Spacebar:" ",
    Left:"ArrowLeft",
    Up:"ArrowUp",
    Right:"ArrowRight",
    Down:"ArrowDown",
    Del:"Delete",
    Win:"OS",
    Menu:"ContextMenu",
    Apps:"ContextMenu",
    Scroll:"ScrollLock",
    MozPrintableKey:"Unidentified"}
  ,
  xw={
    8:"Backspace",
    9:"Tab",
    12:"Clear",
    13:"Enter",
    16:"Shift",
    17:"Control",
    18:"Alt",
    19:"Pause",
    20:"CapsLock",
    27:"Escape",
    32:" ",
    33:"PageUp",
    34:"PageDown",
    35:"End",
    36:"Home",
    37:"ArrowLeft",
    38:"ArrowUp",
    39:"ArrowRight",
    40:"ArrowDown",
    45:"Insert",
    46:"Delete",
    112:"F1",
    113:"F2",
    114:"F3",
    115:"F4",
    116:"F5",
    117:"F6",
    118:"F7",
    119:"F8",
    120:"F9",
    121:"F10",
    122:"F11",
    123:"F12",
    144:"NumLock",
    145:"ScrollLock",
    224:"Meta"}
  ,
  yw={
    Alt:"altKey",
    Control:"ctrlKey",
    Meta:"metaKey",
    Shift:"shiftKey"}
  ;
  function bw(t){
    var a=this.nativeEvent;
    return a.getModifierState?a.getModifierState(t):(t=yw[t])?!!a[t]:!1}
  function Cu(){
    return bw}
  var vw=v({
    }
  ,
  Zi,
  {
    key:function(t){
      if(t.key){
        var a=gw[t.key]||t.key;
        if(a!=="Unidentified")return a}
      return t.type==="keypress"?(t=Eo(t),
      t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?xw[t.keyCode]||"Unidentified":""}
    ,
    code:0,
    location:0,
    ctrlKey:0,
    shiftKey:0,
    altKey:0,
    metaKey:0,
    repeat:0,
    locale:0,
    getModifierState:Cu,
    charCode:function(t){
      return t.type==="keypress"?Eo(t):0}
    ,
    keyCode:function(t){
      return t.type==="keydown"||t.type==="keyup"?t.keyCode:0}
    ,
    which:function(t){
      return t.type==="keypress"?Eo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}
    }
  ),
  ww=Rt(vw),
  Sw=v({
    }
  ,
  Bo,
  {
    pointerId:0,
    width:0,
    height:0,
    pressure:0,
    tangentialPressure:0,
    tiltX:0,
    tiltY:0,
    twist:0,
    pointerType:0,
    isPrimary:0}
  ),
  hp=Rt(Sw),
  _w=v({
    }
  ,
  Zi,
  {
    touches:0,
    targetTouches:0,
    changedTouches:0,
    altKey:0,
    metaKey:0,
    ctrlKey:0,
    shiftKey:0,
    getModifierState:Cu}
  ),
  Cw=Rt(_w),
  Lw=v({
    }
  ,
  tr,
  {
    propertyName:0,
    elapsedTime:0,
    pseudoElement:0}
  ),
  zw=Rt(Lw),
  Ew=v({
    }
  ,
  Bo,
  {
    deltaX:function(t){
      return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0}
    ,
    deltaY:function(t){
      return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0}
    ,
    deltaZ:0,
    deltaMode:0}
  ),
  Tw=Rt(Ew),
  Mw=v({
    }
  ,
  tr,
  {
    newState:0,
    oldState:0}
  ),
  Bw=Rt(Mw),
  Dw=[9,
  13,
  27,
  32],
  Lu=Rn&&"CompositionEvent"in window,
  Ki=null;
  Rn&&"documentMode"in document&&(Ki=document.documentMode);
  var Aw=Rn&&"TextEvent"in window&&!Ki,
  mp=Rn&&(!Lu||Ki&&8<Ki&&11>=Ki),
  pp=" ",
  gp=!1;
  function xp(t,
  a){
    switch(t){
      case"keyup":return Dw.indexOf(a.keyCode)!==-1;
      case"keydown":return a.keyCode!==229;
      case"keypress":case"mousedown":case"focusout":return!0;
      default:return!1}
    }
  function yp(t){
    return t=t.detail,
    typeof t=="object"&&"data"in t?t.data:null}
  var Ur=!1;
  function Nw(t,
  a){
    switch(t){
      case"compositionend":return yp(a);
      case"keypress":return a.which!==32?null:(gp=!0,
      pp);
      case"textInput":return t=a.data,
      t===pp&&gp?null:t;
      default:return null}
    }
  function jw(t,
  a){
    if(Ur)return t==="compositionend"||!Lu&&xp(t,
    a)?(t=cp(),
    zo=vu=ma=null,
    Ur=!1,
    t):null;
    switch(t){
      case"paste":return null;
      case"keypress":if(!(a.ctrlKey||a.altKey||a.metaKey)||a.ctrlKey&&a.altKey){
        if(a.char&&1<a.char.length)return a.char;
        if(a.which)return String.fromCharCode(a.which)}
      return null;
      case"compositionend":return mp&&a.locale!=="ko"?null:a.data;
      default:return null}
    }
  var kw={
    color:!0,
    date:!0,
    datetime:!0,
    "datetime-local":!0,
    email:!0,
    month:!0,
    number:!0,
    password:!0,
    range:!0,
    search:!0,
    tel:!0,
    text:!0,
    time:!0,
    url:!0,
    week:!0}
  ;
  function bp(t){
    var a=t&&t.nodeName&&t.nodeName.toLowerCase();
    return a==="input"?!!kw[t.type]:a==="textarea"}
  function vp(t,
  a,
  i,
  o){
    Hr?Or?Or.push(o):Or=[o]:Hr=o,
    a=bl(a,
    "onChange"),
    0<a.length&&(i=new Mo("onChange",
    "change",
    null,
    i,
    o),
    t.push({
      event:i,
      listeners:a}
    ))}
  var Xi=null,
  $i=null;
  function Rw(t){
    nx(t,
    0)}
  function Do(t){
    var a=Pi(t);
    if(tp(a))return t}
  function wp(t,
  a){
    if(t==="change")return a}
  var Sp=!1;
  if(Rn){
    var zu;
    if(Rn){
      var Eu="oninput"in document;
      if(!Eu){
        var _p=document.createElement("div");
        _p.setAttribute("oninput",
        "return;"),
        Eu=typeof _p.oninput=="function"}
      zu=Eu}
    else zu=!1;
    Sp=zu&&(!document.documentMode||9<document.documentMode)}
  function Cp(){
    Xi&&(Xi.detachEvent("onpropertychange",
    Lp),
    $i=Xi=null)}
  function Lp(t){
    if(t.propertyName==="value"&&Do($i)){
      var a=[];
      vp(a,
      $i,
      t,
      xu(t)),
      lp(Rw,
      a)}
    }
  function Gw(t,
  a,
  i){
    t==="focusin"?(Cp(),
    Xi=a,
    $i=i,
    Xi.attachEvent("onpropertychange",
    Lp)):t==="focusout"&&Cp()}
  function Hw(t){
    if(t==="selectionchange"||t==="keyup"||t==="keydown")return Do($i)}
  function Ow(t,
  a){
    if(t==="click")return Do(a)}
  function Uw(t,
  a){
    if(t==="input"||t==="change")return Do(a)}
  function Iw(t,
  a){
    return t===a&&(t!==0||1/t===1/a)||t!==t&&a!==a}
  var Zt=typeof Object.is=="function"?Object.is:Iw;
  function Fi(t,
  a){
    if(Zt(t,
    a))return!0;
    if(typeof t!="object"||t===null||typeof a!="object"||a===null)return!1;
    var i=Object.keys(t),
    o=Object.keys(a);
    if(i.length!==o.length)return!1;
    for(o=0;
    o<i.length;
    o++){
      var u=i[o];
      if(!Ja.call(a,
      u)||!Zt(t[u],
      a[u]))return!1}
    return!0}
  function zp(t){
    for(;
    t&&t.firstChild;
    )t=t.firstChild;
    return t}
  function Ep(t,
  a){
    var i=zp(t);
    t=0;
    for(var o;
    i;
    ){
      if(i.nodeType===3){
        if(o=t+i.textContent.length,
        t<=a&&o>=a)return{
          node:i,
          offset:a-t}
        ;
        t=o}
      e:{
        for(;
        i;
        ){
          if(i.nextSibling){
            i=i.nextSibling;
            break e}
          i=i.parentNode}
        i=void 0}
      i=zp(i)}
    }
  function Tp(t,
  a){
    return t&&a?t===a?!0:t&&t.nodeType===3?!1:a&&a.nodeType===3?Tp(t,
    a.parentNode):"contains"in t?t.contains(a):t.compareDocumentPosition?!!(t.compareDocumentPosition(a)&16):!1:!1}
  function Mp(t){
    t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;
    for(var a=Co(t.document);
    a instanceof t.HTMLIFrameElement;
    ){
      try{
        var i=typeof a.contentWindow.location.href=="string"}
      catch{
        i=!1}
      if(i)t=a.contentWindow;
      else break;
      a=Co(t.document)}
    return a}
  function Tu(t){
    var a=t&&t.nodeName&&t.nodeName.toLowerCase();
    return a&&(a==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||a==="textarea"||t.contentEditable==="true")}
  var Yw=Rn&&"documentMode"in document&&11>=document.documentMode,
  Ir=null,
  Mu=null,
  Ji=null,
  Bu=!1;
  function Bp(t,
  a,
  i){
    var o=i.window===i?i.document:i.nodeType===9?i:i.ownerDocument;
    Bu||Ir==null||Ir!==Co(o)||(o=Ir,
    "selectionStart"in o&&Tu(o)?o={
      start:o.selectionStart,
      end:o.selectionEnd}
    :(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),
    o={
      anchorNode:o.anchorNode,
      anchorOffset:o.anchorOffset,
      focusNode:o.focusNode,
      focusOffset:o.focusOffset}
    ),
    Ji&&Fi(Ji,
    o)||(Ji=o,
    o=bl(Mu,
    "onSelect"),
    0<o.length&&(a=new Mo("onSelect",
    "select",
    null,
    a,
    i),
    t.push({
      event:a,
      listeners:o}
    ),
    a.target=Ir)))}
  function nr(t,
  a){
    var i={
      }
    ;
    return i[t.toLowerCase()]=a.toLowerCase(),
    i["Webkit"+t]="webkit"+a,
    i["Moz"+t]="moz"+a,
    i}
  var Yr={
    animationend:nr("Animation",
    "AnimationEnd"),
    animationiteration:nr("Animation",
    "AnimationIteration"),
    animationstart:nr("Animation",
    "AnimationStart"),
    transitionrun:nr("Transition",
    "TransitionRun"),
    transitionstart:nr("Transition",
    "TransitionStart"),
    transitioncancel:nr("Transition",
    "TransitionCancel"),
    transitionend:nr("Transition",
    "TransitionEnd")}
  ,
  Du={
    }
  ,
  Dp={
    }
  ;
  Rn&&(Dp=document.createElement("div").style,
  "AnimationEvent"in window||(delete Yr.animationend.animation,
  delete Yr.animationiteration.animation,
  delete Yr.animationstart.animation),
  "TransitionEvent"in window||delete Yr.transitionend.transition);
  function ar(t){
    if(Du[t])return Du[t];
    if(!Yr[t])return t;
    var a=Yr[t],
    i;
    for(i in a)if(a.hasOwnProperty(i)&&i in Dp)return Du[t]=a[i];
    return t}
  var Ap=ar("animationend"),
  Np=ar("animationiteration"),
  jp=ar("animationstart"),
  Pw=ar("transitionrun"),
  qw=ar("transitionstart"),
  Vw=ar("transitioncancel"),
  kp=ar("transitionend"),
  Rp=new Map,
  Au="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  Au.push("scrollEnd");
  function gn(t,
  a){
    Rp.set(t,
    a),
    er(a,
    [t])}
  var Ao=typeof reportError=="function"?reportError:function(t){
    if(typeof window=="object"&&typeof window.ErrorEvent=="function"){
      var a=new window.ErrorEvent("error",
      {
        bubbles:!0,
        cancelable:!0,
        message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),
        error:t}
      );
      if(!window.dispatchEvent(a))return}
    else if(typeof process=="object"&&typeof process.emit=="function"){
      process.emit("uncaughtException",
      t);
      return}
    }
  ,
  an=[],
  Pr=0,
  Nu=0;
  function No(){
    for(var t=Pr,
    a=Nu=Pr=0;
    a<t;
    ){
      var i=an[a];
      an[a++]=null;
      var o=an[a];
      an[a++]=null;
      var u=an[a];
      an[a++]=null;
      var h=an[a];
      if(an[a++]=null,
      o!==null&&u!==null){
        var y=o.pending;
        y===null?u.next=u:(u.next=y.next,
        y.next=u),
        o.pending=u}
      h!==0&&Gp(i,
      u,
      h)}
    }
  function jo(t,
  a,
  i,
  o){
    an[Pr++]=t,
    an[Pr++]=a,
    an[Pr++]=i,
    an[Pr++]=o,
    Nu|=o,
    t.lanes|=o,
    t=t.alternate,
    t!==null&&(t.lanes|=o)}
  function ju(t,
  a,
  i,
  o){
    return jo(t,
    a,
    i,
    o),
    ko(t)}
  function rr(t,
  a){
    return jo(t,
    null,
    null,
    a),
    ko(t)}
  function Gp(t,
  a,
  i){
    t.lanes|=i;
    var o=t.alternate;
    o!==null&&(o.lanes|=i);
    for(var u=!1,
    h=t.return;
    h!==null;
    )h.childLanes|=i,
    o=h.alternate,
    o!==null&&(o.childLanes|=i),
    h.tag===22&&(t=h.stateNode,
    t===null||t._visibility&1||(u=!0)),
    t=h,
    h=h.return;
    return t.tag===3?(h=t.stateNode,
    u&&a!==null&&(u=31-Vt(i),
    t=h.hiddenUpdates,
    o=t[u],
    o===null?t[u]=[a]:o.push(a),
    a.lane=i|536870912),
    h):null}
  function ko(t){
    if(50<vs)throw vs=0,
    Pd=null,
    Error(s(185));
    for(var a=t.return;
    a!==null;
    )t=a,
    a=t.return;
    return t.tag===3?t.stateNode:null}
  var qr={
    }
  ;
  function Zw(t,
  a,
  i,
  o){
    this.tag=t,
    this.key=i,
    this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,
    this.index=0,
    this.refCleanup=this.ref=null,
    this.pendingProps=a,
    this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,
    this.mode=o,
    this.subtreeFlags=this.flags=0,
    this.deletions=null,
    this.childLanes=this.lanes=0,
    this.alternate=null}
  function Wt(t,
  a,
  i,
  o){
    return new Zw(t,
    a,
    i,
    o)}
  function ku(t){
    return t=t.prototype,
    !(!t||!t.isReactComponent)}
  function Gn(t,
  a){
    var i=t.alternate;
    return i===null?(i=Wt(t.tag,
    a,
    t.key,
    t.mode),
    i.elementType=t.elementType,
    i.type=t.type,
    i.stateNode=t.stateNode,
    i.alternate=t,
    t.alternate=i):(i.pendingProps=a,
    i.type=t.type,
    i.flags=0,
    i.subtreeFlags=0,
    i.deletions=null),
    i.flags=t.flags&65011712,
    i.childLanes=t.childLanes,
    i.lanes=t.lanes,
    i.child=t.child,
    i.memoizedProps=t.memoizedProps,
    i.memoizedState=t.memoizedState,
    i.updateQueue=t.updateQueue,
    a=t.dependencies,
    i.dependencies=a===null?null:{
      lanes:a.lanes,
      firstContext:a.firstContext}
    ,
    i.sibling=t.sibling,
    i.index=t.index,
    i.ref=t.ref,
    i.refCleanup=t.refCleanup,
    i}
  function Hp(t,
  a){
    t.flags&=65011714;
    var i=t.alternate;
    return i===null?(t.childLanes=0,
    t.lanes=a,
    t.child=null,
    t.subtreeFlags=0,
    t.memoizedProps=null,
    t.memoizedState=null,
    t.updateQueue=null,
    t.dependencies=null,
    t.stateNode=null):(t.childLanes=i.childLanes,
    t.lanes=i.lanes,
    t.child=i.child,
    t.subtreeFlags=0,
    t.deletions=null,
    t.memoizedProps=i.memoizedProps,
    t.memoizedState=i.memoizedState,
    t.updateQueue=i.updateQueue,
    t.type=i.type,
    a=i.dependencies,
    t.dependencies=a===null?null:{
      lanes:a.lanes,
      firstContext:a.firstContext}
    ),
    t}
  function Ro(t,
  a,
  i,
  o,
  u,
  h){
    var y=0;
    if(o=t,
    typeof t=="function")ku(t)&&(y=1);
    else if(typeof t=="string")y=FS(t,
    i,
    ne.current)?26:t==="html"||t==="head"||t==="body"?27:5;
    else e:switch(t){
      case F:return t=Wt(31,
      i,
      a,
      u),
      t.elementType=F,
      t.lanes=h,
      t;
      case M:return ir(i.children,
      u,
      h,
      a);
      case E:y=8,
      u|=24;
      break;
      case A:return t=Wt(12,
      i,
      a,
      u|2),
      t.elementType=A,
      t.lanes=h,
      t;
      case V:return t=Wt(13,
      i,
      a,
      u),
      t.elementType=V,
      t.lanes=h,
      t;
      case I:return t=Wt(19,
      i,
      a,
      u),
      t.elementType=I,
      t.lanes=h,
      t;
      default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){
        case R:y=10;
        break e;
        case D:y=9;
        break e;
        case Z:y=11;
        break e;
        case q:y=14;
        break e;
        case Q:y=16,
        o=null;
        break e}
      y=29,
      i=Error(s(130,
      t===null?"null":typeof t,
      "")),
      o=null}
    return a=Wt(y,
    i,
    a,
    u),
    a.elementType=t,
    a.type=o,
    a.lanes=h,
    a}
  function ir(t,
  a,
  i,
  o){
    return t=Wt(7,
    t,
    o,
    a),
    t.lanes=i,
    t}
  function Ru(t,
  a,
  i){
    return t=Wt(6,
    t,
    null,
    a),
    t.lanes=i,
    t}
  function Op(t){
    var a=Wt(18,
    null,
    null,
    0);
    return a.stateNode=t,
    a}
  function Gu(t,
  a,
  i){
    return a=Wt(4,
    t.children!==null?t.children:[],
    t.key,
    a),
    a.lanes=i,
    a.stateNode={
      containerInfo:t.containerInfo,
      pendingChildren:null,
      implementation:t.implementation}
    ,
    a}
  var Up=new WeakMap;
  function rn(t,
  a){
    if(typeof t=="object"&&t!==null){
      var i=Up.get(t);
      return i!==void 0?i:(a={
        value:t,
        source:a,
        stack:Fa(a)}
      ,
      Up.set(t,
      a),
      a)}
    return{
      value:t,
      source:a,
      stack:Fa(a)}
    }
  var Vr=[],
  Zr=0,
  Go=null,
  Qi=0,
  sn=[],
  on=0,
  pa=null,
  Ln=1,
  zn="";
  function Hn(t,
  a){
    Vr[Zr++]=Qi,
    Vr[Zr++]=Go,
    Go=t,
    Qi=a}
  function Ip(t,
  a,
  i){
    sn[on++]=Ln,
    sn[on++]=zn,
    sn[on++]=pa,
    pa=t;
    var o=Ln;
    t=zn;
    var u=32-Vt(o)-1;
    o&=~(1<<u),
    i+=1;
    var h=32-Vt(a)+u;
    if(30<h){
      var y=u-u%5;
      h=(o&(1<<y)-1).toString(32),
      o>>=y,
      u-=y,
      Ln=1<<32-Vt(a)+u|i<<u|o,
      zn=h+t}
    else Ln=1<<h|i<<u|o,
    zn=t}
  function Hu(t){
    t.return!==null&&(Hn(t,
    1),
    Ip(t,
    1,
    0))}
  function Ou(t){
    for(;
    t===Go;
    )Go=Vr[--Zr],
    Vr[Zr]=null,
    Qi=Vr[--Zr],
    Vr[Zr]=null;
    for(;
    t===pa;
    )pa=sn[--on],
    sn[on]=null,
    zn=sn[--on],
    sn[on]=null,
    Ln=sn[--on],
    sn[on]=null}
  function Yp(t,
  a){
    sn[on++]=Ln,
    sn[on++]=zn,
    sn[on++]=pa,
    Ln=a.id,
    zn=a.overflow,
    pa=t}
  var wt=null,
  Fe=null,
  Ae=!1,
  ga=null,
  ln=!1,
  Uu=Error(s(519));
  function xa(t){
    var a=Error(s(418,
    1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",
    ""));
    throw es(rn(a,
    t)),
    Uu}
  function Pp(t){
    var a=t.stateNode,
    i=t.type,
    o=t.memoizedProps;
    switch(a[vt]=t,
    a[kt]=o,
    i){
      case"dialog":ze("cancel",
      a),
      ze("close",
      a);
      break;
      case"iframe":case"object":case"embed":ze("load",
      a);
      break;
      case"video":case"audio":for(i=0;
      i<Ss.length;
      i++)ze(Ss[i],
      a);
      break;
      case"source":ze("error",
      a);
      break;
      case"img":case"image":case"link":ze("error",
      a),
      ze("load",
      a);
      break;
      case"details":ze("toggle",
      a);
      break;
      case"input":ze("invalid",
      a),
      np(a,
      o.value,
      o.defaultValue,
      o.checked,
      o.defaultChecked,
      o.type,
      o.name,
      !0);
      break;
      case"select":ze("invalid",
      a);
      break;
      case"textarea":ze("invalid",
      a),
      rp(a,
      o.value,
      o.defaultValue,
      o.children)}
    i=o.children,
    typeof i!="string"&&typeof i!="number"&&typeof i!="bigint"||a.textContent===""+i||o.suppressHydrationWarning===!0||sx(a.textContent,
    i)?(o.popover!=null&&(ze("beforetoggle",
    a),
    ze("toggle",
    a)),
    o.onScroll!=null&&ze("scroll",
    a),
    o.onScrollEnd!=null&&ze("scrollend",
    a),
    o.onClick!=null&&(a.onclick=kn),
    a=!0):a=!1,
    a||xa(t,
    !0)}
  function qp(t){
    for(wt=t.return;
    wt;
    )switch(wt.tag){
      case 5:case 31:case 13:ln=!1;
      return;
      case 27:case 3:ln=!0;
      return;
      default:wt=wt.return}
    }
  function Wr(t){
    if(t!==wt)return!1;
    if(!Ae)return qp(t),
    Ae=!0,
    !1;
    var a=t.tag,
    i;
    if((i=a!==3&&a!==27)&&((i=a===5)&&(i=t.type,
    i=!(i!=="form"&&i!=="button")||rf(t.type,
    t.memoizedProps)),
    i=!i),
    i&&Fe&&xa(t),
    qp(t),
    a===13){
      if(t=t.memoizedState,
      t=t!==null?t.dehydrated:null,
      !t)throw Error(s(317));
      Fe=px(t)}
    else if(a===31){
      if(t=t.memoizedState,
      t=t!==null?t.dehydrated:null,
      !t)throw Error(s(317));
      Fe=px(t)}
    else a===27?(a=Fe,
    Da(t.type)?(t=uf,
    uf=null,
    Fe=t):Fe=a):Fe=wt?un(t.stateNode.nextSibling):null;
    return!0}
  function sr(){
    Fe=wt=null,
    Ae=!1}
  function Iu(){
    var t=ga;
    return t!==null&&(Ut===null?Ut=t:Ut.push.apply(Ut,
    t),
    ga=null),
    t}
  function es(t){
    ga===null?ga=[t]:ga.push(t)}
  var Yu=z(null),
  or=null,
  On=null;
  function ya(t,
  a,
  i){
    J(Yu,
    a._currentValue),
    a._currentValue=i}
  function Un(t){
    t._currentValue=Yu.current,
    U(Yu)}
  function Pu(t,
  a,
  i){
    for(;
    t!==null;
    ){
      var o=t.alternate;
      if((t.childLanes&a)!==a?(t.childLanes|=a,
      o!==null&&(o.childLanes|=a)):o!==null&&(o.childLanes&a)!==a&&(o.childLanes|=a),
      t===i)break;
      t=t.return}
    }
  function qu(t,
  a,
  i,
  o){
    var u=t.child;
    for(u!==null&&(u.return=t);
    u!==null;
    ){
      var h=u.dependencies;
      if(h!==null){
        var y=u.child;
        h=h.firstContext;
        e:for(;
        h!==null;
        ){
          var S=h;
          h=u;
          for(var T=0;
          T<a.length;
          T++)if(S.context===a[T]){
            h.lanes|=i,
            S=h.alternate,
            S!==null&&(S.lanes|=i),
            Pu(h.return,
            i,
            t),
            o||(y=null);
            break e}
          h=S.next}
        }
      else if(u.tag===18){
        if(y=u.return,
        y===null)throw Error(s(341));
        y.lanes|=i,
        h=y.alternate,
        h!==null&&(h.lanes|=i),
        Pu(y,
        i,
        t),
        y=null}
      else y=u.child;
      if(y!==null)y.return=u;
      else for(y=u;
      y!==null;
      ){
        if(y===t){
          y=null;
          break}
        if(u=y.sibling,
        u!==null){
          u.return=y.return,
          y=u;
          break}
        y=y.return}
      u=y}
    }
  function Kr(t,
  a,
  i,
  o){
    t=null;
    for(var u=a,
    h=!1;
    u!==null;
    ){
      if(!h){
        if((u.flags&524288)!==0)h=!0;
        else if((u.flags&262144)!==0)break}
      if(u.tag===10){
        var y=u.alternate;
        if(y===null)throw Error(s(387));
        if(y=y.memoizedProps,
        y!==null){
          var S=u.type;
          Zt(u.pendingProps.value,
          y.value)||(t!==null?t.push(S):t=[S])}
        }
      else if(u===ve.current){
        if(y=u.alternate,
        y===null)throw Error(s(387));
        y.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(Es):t=[Es])}
      u=u.return}
    t!==null&&qu(a,
    t,
    i,
    o),
    a.flags|=262144}
  function Ho(t){
    for(t=t.firstContext;
    t!==null;
    ){
      if(!Zt(t.context._currentValue,
      t.memoizedValue))return!0;
      t=t.next}
    return!1}
  function lr(t){
    or=t,
    On=null,
    t=t.dependencies,
    t!==null&&(t.firstContext=null)}
  function St(t){
    return Vp(or,
    t)}
  function Oo(t,
  a){
    return or===null&&lr(t),
    Vp(t,
    a)}
  function Vp(t,
  a){
    var i=a._currentValue;
    if(a={
      context:a,
      memoizedValue:i,
      next:null}
    ,
    On===null){
      if(t===null)throw Error(s(308));
      On=a,
      t.dependencies={
        lanes:0,
        firstContext:a}
      ,
      t.flags|=524288}
    else On=On.next=a;
    return i}
  var Ww=typeof AbortController<"u"?AbortController:function(){
    var t=[],
    a=this.signal={
      aborted:!1,
      addEventListener:function(i,
      o){
        t.push(o)}
      }
    ;
    this.abort=function(){
      a.aborted=!0,
      t.forEach(function(i){
        return i()}
      )}
    }
  ,
  Kw=e.unstable_scheduleCallback,
  Xw=e.unstable_NormalPriority,
  ct={
    $$typeof:R,
    Consumer:null,
    Provider:null,
    _currentValue:null,
    _currentValue2:null,
    _threadCount:0}
  ;
  function Vu(){
    return{
      controller:new Ww,
      data:new Map,
      refCount:0}
    }
  function ts(t){
    t.refCount--,
    t.refCount===0&&Kw(Xw,
    function(){
      t.controller.abort()}
    )}
  var ns=null,
  Zu=0,
  Xr=0,
  $r=null;
  function $w(t,
  a){
    if(ns===null){
      var i=ns=[];
      Zu=0,
      Xr=Xd(),
      $r={
        status:"pending",
        value:void 0,
        then:function(o){
          i.push(o)}
        }
      }
    return Zu++,
    a.then(Zp,
    Zp),
    a}
  function Zp(){
    if(--Zu===0&&ns!==null){
      $r!==null&&($r.status="fulfilled");
      var t=ns;
      ns=null,
      Xr=0,
      $r=null;
      for(var a=0;
      a<t.length;
      a++)(0,
      t[a])()}
    }
  function Fw(t,
  a){
    var i=[],
    o={
      status:"pending",
      value:null,
      reason:null,
      then:function(u){
        i.push(u)}
      }
    ;
    return t.then(function(){
      o.status="fulfilled",
      o.value=a;
      for(var u=0;
      u<i.length;
      u++)(0,
      i[u])(a)}
    ,
    function(u){
      for(o.status="rejected",
      o.reason=u,
      u=0;
      u<i.length;
      u++)(0,
      i[u])(void 0)}
    ),
    o}
  var Wp=k.S;
  k.S=function(t,
  a){
    B0=xe(),
    typeof a=="object"&&a!==null&&typeof a.then=="function"&&$w(t,
    a),
    Wp!==null&&Wp(t,
    a)}
  ;
  var cr=z(null);
  function Wu(){
    var t=cr.current;
    return t!==null?t:Ke.pooledCache}
  function Uo(t,
  a){
    a===null?J(cr,
    cr.current):J(cr,
    a.pool)}
  function Kp(){
    var t=Wu();
    return t===null?null:{
      parent:ct._currentValue,
      pool:t}
    }
  var Fr=Error(s(460)),
  Ku=Error(s(474)),
  Io=Error(s(542)),
  Yo={
    then:function(){
      }
    }
  ;
  function Xp(t){
    return t=t.status,
    t==="fulfilled"||t==="rejected"}
  function $p(t,
  a,
  i){
    switch(i=t[i],
    i===void 0?t.push(a):i!==a&&(a.then(kn,
    kn),
    a=i),
    a.status){
      case"fulfilled":return a.value;
      case"rejected":throw t=a.reason,
      Jp(t),
      t;
      default:if(typeof a.status=="string")a.then(kn,
      kn);
      else{
        if(t=Ke,
        t!==null&&100<t.shellSuspendCounter)throw Error(s(482));
        t=a,
        t.status="pending",
        t.then(function(o){
          if(a.status==="pending"){
            var u=a;
            u.status="fulfilled",
            u.value=o}
          }
        ,
        function(o){
          if(a.status==="pending"){
            var u=a;
            u.status="rejected",
            u.reason=o}
          }
        )}
      switch(a.status){
        case"fulfilled":return a.value;
        case"rejected":throw t=a.reason,
        Jp(t),
        t}
      throw dr=a,
      Fr}
    }
  function ur(t){
    try{
      var a=t._init;
      return a(t._payload)}
    catch(i){
      throw i!==null&&typeof i=="object"&&typeof i.then=="function"?(dr=i,
      Fr):i}
    }
  var dr=null;
  function Fp(){
    if(dr===null)throw Error(s(459));
    var t=dr;
    return dr=null,
    t}
  function Jp(t){
    if(t===Fr||t===Io)throw Error(s(483))}
  var Jr=null,
  as=0;
  function Po(t){
    var a=as;
    return as+=1,
    Jr===null&&(Jr=[]),
    $p(Jr,
    t,
    a)}
  function rs(t,
  a){
    a=a.props.ref,
    t.ref=a!==void 0?a:null}
  function qo(t,
  a){
    throw a.$$typeof===w?Error(s(525)):(t=Object.prototype.toString.call(a),
    Error(s(31,
    t==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":t)))}
  function Qp(t){
    function a(N,
    B){
      if(t){
        var G=N.deletions;
        G===null?(N.deletions=[B],
        N.flags|=16):G.push(B)}
      }
    function i(N,
    B){
      if(!t)return null;
      for(;
      B!==null;
      )a(N,
      B),
      B=B.sibling;
      return null}
    function o(N){
      for(var B=new Map;
      N!==null;
      )N.key!==null?B.set(N.key,
      N):B.set(N.index,
      N),
      N=N.sibling;
      return B}
    function u(N,
    B){
      return N=Gn(N,
      B),
      N.index=0,
      N.sibling=null,
      N}
    function h(N,
    B,
    G){
      return N.index=G,
      t?(G=N.alternate,
      G!==null?(G=G.index,
      G<B?(N.flags|=67108866,
      B):G):(N.flags|=67108866,
      B)):(N.flags|=1048576,
      B)}
    function y(N){
      return t&&N.alternate===null&&(N.flags|=67108866),
      N}
    function S(N,
    B,
    G,
    K){
      return B===null||B.tag!==6?(B=Ru(G,
      N.mode,
      K),
      B.return=N,
      B):(B=u(B,
      G),
      B.return=N,
      B)}
    function T(N,
    B,
    G,
    K){
      var le=G.type;
      return le===M?W(N,
      B,
      G.props.children,
      K,
      G.key):B!==null&&(B.elementType===le||typeof le=="object"&&le!==null&&le.$$typeof===Q&&ur(le)===B.type)?(B=u(B,
      G.props),
      rs(B,
      G),
      B.return=N,
      B):(B=Ro(G.type,
      G.key,
      G.props,
      null,
      N.mode,
      K),
      rs(B,
      G),
      B.return=N,
      B)}
    function H(N,
    B,
    G,
    K){
      return B===null||B.tag!==4||B.stateNode.containerInfo!==G.containerInfo||B.stateNode.implementation!==G.implementation?(B=Gu(G,
      N.mode,
      K),
      B.return=N,
      B):(B=u(B,
      G.children||[]),
      B.return=N,
      B)}
    function W(N,
    B,
    G,
    K,
    le){
      return B===null||B.tag!==7?(B=ir(G,
      N.mode,
      K,
      le),
      B.return=N,
      B):(B=u(B,
      G),
      B.return=N,
      B)}
    function X(N,
    B,
    G){
      if(typeof B=="string"&&B!==""||typeof B=="number"||typeof B=="bigint")return B=Ru(""+B,
      N.mode,
      G),
      B.return=N,
      B;
      if(typeof B=="object"&&B!==null){
        switch(B.$$typeof){
          case _:return G=Ro(B.type,
          B.key,
          B.props,
          null,
          N.mode,
          G),
          rs(G,
          B),
          G.return=N,
          G;
          case L:return B=Gu(B,
          N.mode,
          G),
          B.return=N,
          B;
          case Q:return B=ur(B),
          X(N,
          B,
          G)}
        if(Ge(B)||de(B))return B=ir(B,
        N.mode,
        G,
        null),
        B.return=N,
        B;
        if(typeof B.then=="function")return X(N,
        Po(B),
        G);
        if(B.$$typeof===R)return X(N,
        Oo(N,
        B),
        G);
        qo(N,
        B)}
      return null}
    function O(N,
    B,
    G,
    K){
      var le=B!==null?B.key:null;
      if(typeof G=="string"&&G!==""||typeof G=="number"||typeof G=="bigint")return le!==null?null:S(N,
      B,
      ""+G,
      K);
      if(typeof G=="object"&&G!==null){
        switch(G.$$typeof){
          case _:return G.key===le?T(N,
          B,
          G,
          K):null;
          case L:return G.key===le?H(N,
          B,
          G,
          K):null;
          case Q:return G=ur(G),
          O(N,
          B,
          G,
          K)}
        if(Ge(G)||de(G))return le!==null?null:W(N,
        B,
        G,
        K,
        null);
        if(typeof G.then=="function")return O(N,
        B,
        Po(G),
        K);
        if(G.$$typeof===R)return O(N,
        B,
        Oo(N,
        G),
        K);
        qo(N,
        G)}
      return null}
    function P(N,
    B,
    G,
    K,
    le){
      if(typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint")return N=N.get(G)||null,
      S(B,
      N,
      ""+K,
      le);
      if(typeof K=="object"&&K!==null){
        switch(K.$$typeof){
          case _:return N=N.get(K.key===null?G:K.key)||null,
          T(B,
          N,
          K,
          le);
          case L:return N=N.get(K.key===null?G:K.key)||null,
          H(B,
          N,
          K,
          le);
          case Q:return K=ur(K),
          P(N,
          B,
          G,
          K,
          le)}
        if(Ge(K)||de(K))return N=N.get(G)||null,
        W(B,
        N,
        K,
        le,
        null);
        if(typeof K.then=="function")return P(N,
        B,
        G,
        Po(K),
        le);
        if(K.$$typeof===R)return P(N,
        B,
        G,
        Oo(B,
        K),
        le);
        qo(B,
        K)}
      return null}
    function ae(N,
    B,
    G,
    K){
      for(var le=null,
      He=null,
      oe=B,
      be=B=0,
      Me=null;
      oe!==null&&be<G.length;
      be++){
        oe.index>be?(Me=oe,
        oe=null):Me=oe.sibling;
        var Oe=O(N,
        oe,
        G[be],
        K);
        if(Oe===null){
          oe===null&&(oe=Me);
          break}
        t&&oe&&Oe.alternate===null&&a(N,
        oe),
        B=h(Oe,
        B,
        be),
        He===null?le=Oe:He.sibling=Oe,
        He=Oe,
        oe=Me}
      if(be===G.length)return i(N,
      oe),
      Ae&&Hn(N,
      be),
      le;
      if(oe===null){
        for(;
        be<G.length;
        be++)oe=X(N,
        G[be],
        K),
        oe!==null&&(B=h(oe,
        B,
        be),
        He===null?le=oe:He.sibling=oe,
        He=oe);
        return Ae&&Hn(N,
        be),
        le}
      for(oe=o(oe);
      be<G.length;
      be++)Me=P(oe,
      N,
      be,
      G[be],
      K),
      Me!==null&&(t&&Me.alternate!==null&&oe.delete(Me.key===null?be:Me.key),
      B=h(Me,
      B,
      be),
      He===null?le=Me:He.sibling=Me,
      He=Me);
      return t&&oe.forEach(function(Ra){
        return a(N,
        Ra)}
      ),
      Ae&&Hn(N,
      be),
      le}
    function ue(N,
    B,
    G,
    K){
      if(G==null)throw Error(s(151));
      for(var le=null,
      He=null,
      oe=B,
      be=B=0,
      Me=null,
      Oe=G.next();
      oe!==null&&!Oe.done;
      be++,
      Oe=G.next()){
        oe.index>be?(Me=oe,
        oe=null):Me=oe.sibling;
        var Ra=O(N,
        oe,
        Oe.value,
        K);
        if(Ra===null){
          oe===null&&(oe=Me);
          break}
        t&&oe&&Ra.alternate===null&&a(N,
        oe),
        B=h(Ra,
        B,
        be),
        He===null?le=Ra:He.sibling=Ra,
        He=Ra,
        oe=Me}
      if(Oe.done)return i(N,
      oe),
      Ae&&Hn(N,
      be),
      le;
      if(oe===null){
        for(;
        !Oe.done;
        be++,
        Oe=G.next())Oe=X(N,
        Oe.value,
        K),
        Oe!==null&&(B=h(Oe,
        B,
        be),
        He===null?le=Oe:He.sibling=Oe,
        He=Oe);
        return Ae&&Hn(N,
        be),
        le}
      for(oe=o(oe);
      !Oe.done;
      be++,
      Oe=G.next())Oe=P(oe,
      N,
      be,
      Oe.value,
      K),
      Oe!==null&&(t&&Oe.alternate!==null&&oe.delete(Oe.key===null?be:Oe.key),
      B=h(Oe,
      B,
      be),
      He===null?le=Oe:He.sibling=Oe,
      He=Oe);
      return t&&oe.forEach(function(l_){
        return a(N,
        l_)}
      ),
      Ae&&Hn(N,
      be),
      le}
    function We(N,
    B,
    G,
    K){
      if(typeof G=="object"&&G!==null&&G.type===M&&G.key===null&&(G=G.props.children),
      typeof G=="object"&&G!==null){
        switch(G.$$typeof){
          case _:e:{
            for(var le=G.key;
            B!==null;
            ){
              if(B.key===le){
                if(le=G.type,
                le===M){
                  if(B.tag===7){
                    i(N,
                    B.sibling),
                    K=u(B,
                    G.props.children),
                    K.return=N,
                    N=K;
                    break e}
                  }
                else if(B.elementType===le||typeof le=="object"&&le!==null&&le.$$typeof===Q&&ur(le)===B.type){
                  i(N,
                  B.sibling),
                  K=u(B,
                  G.props),
                  rs(K,
                  G),
                  K.return=N,
                  N=K;
                  break e}
                i(N,
                B);
                break}
              else a(N,
              B);
              B=B.sibling}
            G.type===M?(K=ir(G.props.children,
            N.mode,
            K,
            G.key),
            K.return=N,
            N=K):(K=Ro(G.type,
            G.key,
            G.props,
            null,
            N.mode,
            K),
            rs(K,
            G),
            K.return=N,
            N=K)}
          return y(N);
          case L:e:{
            for(le=G.key;
            B!==null;
            ){
              if(B.key===le)if(B.tag===4&&B.stateNode.containerInfo===G.containerInfo&&B.stateNode.implementation===G.implementation){
                i(N,
                B.sibling),
                K=u(B,
                G.children||[]),
                K.return=N,
                N=K;
                break e}
              else{
                i(N,
                B);
                break}
              else a(N,
              B);
              B=B.sibling}
            K=Gu(G,
            N.mode,
            K),
            K.return=N,
            N=K}
          return y(N);
          case Q:return G=ur(G),
          We(N,
          B,
          G,
          K)}
        if(Ge(G))return ae(N,
        B,
        G,
        K);
        if(de(G)){
          if(le=de(G),
          typeof le!="function")throw Error(s(150));
          return G=le.call(G),
          ue(N,
          B,
          G,
          K)}
        if(typeof G.then=="function")return We(N,
        B,
        Po(G),
        K);
        if(G.$$typeof===R)return We(N,
        B,
        Oo(N,
        G),
        K);
        qo(N,
        G)}
      return typeof G=="string"&&G!==""||typeof G=="number"||typeof G=="bigint"?(G=""+G,
      B!==null&&B.tag===6?(i(N,
      B.sibling),
      K=u(B,
      G),
      K.return=N,
      N=K):(i(N,
      B),
      K=Ru(G,
      N.mode,
      K),
      K.return=N,
      N=K),
      y(N)):i(N,
      B)}
    return function(N,
    B,
    G,
    K){
      try{
        as=0;
        var le=We(N,
        B,
        G,
        K);
        return Jr=null,
        le}
      catch(oe){
        if(oe===Fr||oe===Io)throw oe;
        var He=Wt(29,
        oe,
        null,
        N.mode);
        return He.lanes=K,
        He.return=N,
        He}
      finally{
        }
      }
    }
  var fr=Qp(!0),
  eg=Qp(!1),
  ba=!1;
  function Xu(t){
    t.updateQueue={
      baseState:t.memoizedState,
      firstBaseUpdate:null,
      lastBaseUpdate:null,
      shared:{
        pending:null,
        lanes:0,
        hiddenCallbacks:null}
      ,
      callbacks:null}
    }
  function $u(t,
  a){
    t=t.updateQueue,
    a.updateQueue===t&&(a.updateQueue={
      baseState:t.baseState,
      firstBaseUpdate:t.firstBaseUpdate,
      lastBaseUpdate:t.lastBaseUpdate,
      shared:t.shared,
      callbacks:null}
    )}
  function va(t){
    return{
      lane:t,
      tag:0,
      payload:null,
      callback:null,
      next:null}
    }
  function wa(t,
  a,
  i){
    var o=t.updateQueue;
    if(o===null)return null;
    if(o=o.shared,
    (Ie&2)!==0){
      var u=o.pending;
      return u===null?a.next=a:(a.next=u.next,
      u.next=a),
      o.pending=a,
      a=ko(t),
      Gp(t,
      null,
      i),
      a}
    return jo(t,
    o,
    a,
    i),
    ko(t)}
  function is(t,
  a,
  i){
    if(a=a.updateQueue,
    a!==null&&(a=a.shared,
    (i&4194048)!==0)){
      var o=a.lanes;
      o&=t.pendingLanes,
      i|=o,
      a.lanes=i,
      Vm(t,
      i)}
    }
  function Fu(t,
  a){
    var i=t.updateQueue,
    o=t.alternate;
    if(o!==null&&(o=o.updateQueue,
    i===o)){
      var u=null,
      h=null;
      if(i=i.firstBaseUpdate,
      i!==null){
        do{
          var y={
            lane:i.lane,
            tag:i.tag,
            payload:i.payload,
            callback:null,
            next:null}
          ;
          h===null?u=h=y:h=h.next=y,
          i=i.next}
        while(i!==null);
        h===null?u=h=a:h=h.next=a}
      else u=h=a;
      i={
        baseState:o.baseState,
        firstBaseUpdate:u,
        lastBaseUpdate:h,
        shared:o.shared,
        callbacks:o.callbacks}
      ,
      t.updateQueue=i;
      return}
    t=i.lastBaseUpdate,
    t===null?i.firstBaseUpdate=a:t.next=a,
    i.lastBaseUpdate=a}
  var Ju=!1;
  function ss(){
    if(Ju){
      var t=$r;
      if(t!==null)throw t}
    }
  function os(t,
  a,
  i,
  o){
    Ju=!1;
    var u=t.updateQueue;
    ba=!1;
    var h=u.firstBaseUpdate,
    y=u.lastBaseUpdate,
    S=u.shared.pending;
    if(S!==null){
      u.shared.pending=null;
      var T=S,
      H=T.next;
      T.next=null,
      y===null?h=H:y.next=H,
      y=T;
      var W=t.alternate;
      W!==null&&(W=W.updateQueue,
      S=W.lastBaseUpdate,
      S!==y&&(S===null?W.firstBaseUpdate=H:S.next=H,
      W.lastBaseUpdate=T))}
    if(h!==null){
      var X=u.baseState;
      y=0,
      W=H=T=null,
      S=h;
      do{
        var O=S.lane&-536870913,
        P=O!==S.lane;
        if(P?(Te&O)===O:(o&O)===O){
          O!==0&&O===Xr&&(Ju=!0),
          W!==null&&(W=W.next={
            lane:0,
            tag:S.tag,
            payload:S.payload,
            callback:null,
            next:null}
          );
          e:{
            var ae=t,
            ue=S;
            O=a;
            var We=i;
            switch(ue.tag){
              case 1:if(ae=ue.payload,
              typeof ae=="function"){
                X=ae.call(We,
                X,
                O);
                break e}
              X=ae;
              break e;
              case 3:ae.flags=ae.flags&-65537|128;
              case 0:if(ae=ue.payload,
              O=typeof ae=="function"?ae.call(We,
              X,
              O):ae,
              O==null)break e;
              X=v({
                }
              ,
              X,
              O);
              break e;
              case 2:ba=!0}
            }
          O=S.callback,
          O!==null&&(t.flags|=64,
          P&&(t.flags|=8192),
          P=u.callbacks,
          P===null?u.callbacks=[O]:P.push(O))}
        else P={
          lane:O,
          tag:S.tag,
          payload:S.payload,
          callback:S.callback,
          next:null}
        ,
        W===null?(H=W=P,
        T=X):W=W.next=P,
        y|=O;
        if(S=S.next,
        S===null){
          if(S=u.shared.pending,
          S===null)break;
          P=S,
          S=P.next,
          P.next=null,
          u.lastBaseUpdate=P,
          u.shared.pending=null}
        }
      while(!0);
      W===null&&(T=X),
      u.baseState=T,
      u.firstBaseUpdate=H,
      u.lastBaseUpdate=W,
      h===null&&(u.shared.lanes=0),
      za|=y,
      t.lanes=y,
      t.memoizedState=X}
    }
  function tg(t,
  a){
    if(typeof t!="function")throw Error(s(191,
    t));
    t.call(a)}
  function ng(t,
  a){
    var i=t.callbacks;
    if(i!==null)for(t.callbacks=null,
    t=0;
    t<i.length;
    t++)tg(i[t],
    a)}
  var Qr=z(null),
  Vo=z(0);
  function ag(t,
  a){
    t=Xn,
    J(Vo,
    t),
    J(Qr,
    a),
    Xn=t|a.baseLanes}
  function Qu(){
    J(Vo,
    Xn),
    J(Qr,
    Qr.current)}
  function ed(){
    Xn=Vo.current,
    U(Qr),
    U(Vo)}
  var Kt=z(null),
  cn=null;
  function Sa(t){
    var a=t.alternate;
    J(st,
    st.current&1),
    J(Kt,
    t),
    cn===null&&(a===null||Qr.current!==null||a.memoizedState!==null)&&(cn=t)}
  function td(t){
    J(st,
    st.current),
    J(Kt,
    t),
    cn===null&&(cn=t)}
  function rg(t){
    t.tag===22?(J(st,
    st.current),
    J(Kt,
    t),
    cn===null&&(cn=t)):_a()}
  function _a(){
    J(st,
    st.current),
    J(Kt,
    Kt.current)}
  function Xt(t){
    U(Kt),
    cn===t&&(cn=null),
    U(st)}
  var st=z(0);
  function Zo(t){
    for(var a=t;
    a!==null;
    ){
      if(a.tag===13){
        var i=a.memoizedState;
        if(i!==null&&(i=i.dehydrated,
        i===null||lf(i)||cf(i)))return a}
      else if(a.tag===19&&(a.memoizedProps.revealOrder==="forwards"||a.memoizedProps.revealOrder==="backwards"||a.memoizedProps.revealOrder==="unstable_legacy-backwards"||a.memoizedProps.revealOrder==="together")){
        if((a.flags&128)!==0)return a}
      else if(a.child!==null){
        a.child.return=a,
        a=a.child;
        continue}
      if(a===t)break;
      for(;
      a.sibling===null;
      ){
        if(a.return===null||a.return===t)return null;
        a=a.return}
      a.sibling.return=a.return,
      a=a.sibling}
    return null}
  var In=0,
  ye=null,
  Ve=null,
  ut=null,
  Wo=!1,
  ei=!1,
  hr=!1,
  Ko=0,
  ls=0,
  ti=null,
  Jw=0;
  function nt(){
    throw Error(s(321))}
  function nd(t,
  a){
    if(a===null)return!1;
    for(var i=0;
    i<a.length&&i<t.length;
    i++)if(!Zt(t[i],
    a[i]))return!1;
    return!0}
  function ad(t,
  a,
  i,
  o,
  u,
  h){
    return In=h,
    ye=a,
    a.memoizedState=null,
    a.updateQueue=null,
    a.lanes=0,
    k.H=t===null||t.memoizedState===null?Ig:yd,
    hr=!1,
    h=i(o,
    u),
    hr=!1,
    ei&&(h=sg(a,
    i,
    o,
    u)),
    ig(t),
    h}
  function ig(t){
    k.H=ds;
    var a=Ve!==null&&Ve.next!==null;
    if(In=0,
    ut=Ve=ye=null,
    Wo=!1,
    ls=0,
    ti=null,
    a)throw Error(s(300));
    t===null||dt||(t=t.dependencies,
    t!==null&&Ho(t)&&(dt=!0))}
  function sg(t,
  a,
  i,
  o){
    ye=t;
    var u=0;
    do{
      if(ei&&(ti=null),
      ls=0,
      ei=!1,
      25<=u)throw Error(s(301));
      if(u+=1,
      ut=Ve=null,
      t.updateQueue!=null){
        var h=t.updateQueue;
        h.lastEffect=null,
        h.events=null,
        h.stores=null,
        h.memoCache!=null&&(h.memoCache.index=0)}
      k.H=Yg,
      h=a(i,
      o)}
    while(ei);
    return h}
  function Qw(){
    var t=k.H,
    a=t.useState()[0];
    return a=typeof a.then=="function"?cs(a):a,
    t=t.useState()[0],
    (Ve!==null?Ve.memoizedState:null)!==t&&(ye.flags|=1024),
    a}
  function rd(){
    var t=Ko!==0;
    return Ko=0,
    t}
  function id(t,
  a,
  i){
    a.updateQueue=t.updateQueue,
    a.flags&=-2053,
    t.lanes&=~i}
  function sd(t){
    if(Wo){
      for(t=t.memoizedState;
      t!==null;
      ){
        var a=t.queue;
        a!==null&&(a.pending=null),
        t=t.next}
      Wo=!1}
    In=0,
    ut=Ve=ye=null,
    ei=!1,
    ls=Ko=0,
    ti=null}
  function Dt(){
    var t={
      memoizedState:null,
      baseState:null,
      baseQueue:null,
      queue:null,
      next:null}
    ;
    return ut===null?ye.memoizedState=ut=t:ut=ut.next=t,
    ut}
  function ot(){
    if(Ve===null){
      var t=ye.alternate;
      t=t!==null?t.memoizedState:null}
    else t=Ve.next;
    var a=ut===null?ye.memoizedState:ut.next;
    if(a!==null)ut=a,
    Ve=t;
    else{
      if(t===null)throw ye.alternate===null?Error(s(467)):Error(s(310));
      Ve=t,
      t={
        memoizedState:Ve.memoizedState,
        baseState:Ve.baseState,
        baseQueue:Ve.baseQueue,
        queue:Ve.queue,
        next:null}
      ,
      ut===null?ye.memoizedState=ut=t:ut=ut.next=t}
    return ut}
  function Xo(){
    return{
      lastEffect:null,
      events:null,
      stores:null,
      memoCache:null}
    }
  function cs(t){
    var a=ls;
    return ls+=1,
    ti===null&&(ti=[]),
    t=$p(ti,
    t,
    a),
    a=ye,
    (ut===null?a.memoizedState:ut.next)===null&&(a=a.alternate,
    k.H=a===null||a.memoizedState===null?Ig:yd),
    t}
  function $o(t){
    if(t!==null&&typeof t=="object"){
      if(typeof t.then=="function")return cs(t);
      if(t.$$typeof===R)return St(t)}
    throw Error(s(438,
    String(t)))}
  function od(t){
    var a=null,
    i=ye.updateQueue;
    if(i!==null&&(a=i.memoCache),
    a==null){
      var o=ye.alternate;
      o!==null&&(o=o.updateQueue,
      o!==null&&(o=o.memoCache,
      o!=null&&(a={
        data:o.data.map(function(u){
          return u.slice()}
        ),
        index:0}
      )))}
    if(a==null&&(a={
      data:[],
      index:0}
    ),
    i===null&&(i=Xo(),
    ye.updateQueue=i),
    i.memoCache=a,
    i=a.data[a.index],
    i===void 0)for(i=a.data[a.index]=Array(t),
    o=0;
    o<t;
    o++)i[o]=te;
    return a.index++,
    i}
  function Yn(t,
  a){
    return typeof a=="function"?a(t):a}
  function Fo(t){
    var a=ot();
    return ld(a,
    Ve,
    t)}
  function ld(t,
  a,
  i){
    var o=t.queue;
    if(o===null)throw Error(s(311));
    o.lastRenderedReducer=i;
    var u=t.baseQueue,
    h=o.pending;
    if(h!==null){
      if(u!==null){
        var y=u.next;
        u.next=h.next,
        h.next=y}
      a.baseQueue=u=h,
      o.pending=null}
    if(h=t.baseState,
    u===null)t.memoizedState=h;
    else{
      a=u.next;
      var S=y=null,
      T=null,
      H=a,
      W=!1;
      do{
        var X=H.lane&-536870913;
        if(X!==H.lane?(Te&X)===X:(In&X)===X){
          var O=H.revertLane;
          if(O===0)T!==null&&(T=T.next={
            lane:0,
            revertLane:0,
            gesture:null,
            action:H.action,
            hasEagerState:H.hasEagerState,
            eagerState:H.eagerState,
            next:null}
          ),
          X===Xr&&(W=!0);
          else if((In&O)===O){
            H=H.next,
            O===Xr&&(W=!0);
            continue}
          else X={
            lane:0,
            revertLane:H.revertLane,
            gesture:null,
            action:H.action,
            hasEagerState:H.hasEagerState,
            eagerState:H.eagerState,
            next:null}
          ,
          T===null?(S=T=X,
          y=h):T=T.next=X,
          ye.lanes|=O,
          za|=O;
          X=H.action,
          hr&&i(h,
          X),
          h=H.hasEagerState?H.eagerState:i(h,
          X)}
        else O={
          lane:X,
          revertLane:H.revertLane,
          gesture:H.gesture,
          action:H.action,
          hasEagerState:H.hasEagerState,
          eagerState:H.eagerState,
          next:null}
        ,
        T===null?(S=T=O,
        y=h):T=T.next=O,
        ye.lanes|=X,
        za|=X;
        H=H.next}
      while(H!==null&&H!==a);
      if(T===null?y=h:T.next=S,
      !Zt(h,
      t.memoizedState)&&(dt=!0,
      W&&(i=$r,
      i!==null)))throw i;
      t.memoizedState=h,
      t.baseState=y,
      t.baseQueue=T,
      o.lastRenderedState=h}
    return u===null&&(o.lanes=0),
    [t.memoizedState,
    o.dispatch]}
  function cd(t){
    var a=ot(),
    i=a.queue;
    if(i===null)throw Error(s(311));
    i.lastRenderedReducer=t;
    var o=i.dispatch,
    u=i.pending,
    h=a.memoizedState;
    if(u!==null){
      i.pending=null;
      var y=u=u.next;
      do h=t(h,
      y.action),
      y=y.next;
      while(y!==u);
      Zt(h,
      a.memoizedState)||(dt=!0),
      a.memoizedState=h,
      a.baseQueue===null&&(a.baseState=h),
      i.lastRenderedState=h}
    return[h,
    o]}
  function og(t,
  a,
  i){
    var o=ye,
    u=ot(),
    h=Ae;
    if(h){
      if(i===void 0)throw Error(s(407));
      i=i()}
    else i=a();
    var y=!Zt((Ve||u).memoizedState,
    i);
    if(y&&(u.memoizedState=i,
    dt=!0),
    u=u.queue,
    fd(ug.bind(null,
    o,
    u,
    t),
    [t]),
    u.getSnapshot!==a||y||ut!==null&&ut.memoizedState.tag&1){
      if(o.flags|=2048,
      ni(9,
      {
        destroy:void 0}
      ,
      cg.bind(null,
      o,
      u,
      i,
      a),
      null),
      Ke===null)throw Error(s(349));
      h||(In&127)!==0||lg(o,
      a,
      i)}
    return i}
  function lg(t,
  a,
  i){
    t.flags|=16384,
    t={
      getSnapshot:a,
      value:i}
    ,
    a=ye.updateQueue,
    a===null?(a=Xo(),
    ye.updateQueue=a,
    a.stores=[t]):(i=a.stores,
    i===null?a.stores=[t]:i.push(t))}
  function cg(t,
  a,
  i,
  o){
    a.value=i,
    a.getSnapshot=o,
    dg(a)&&fg(t)}
  function ug(t,
  a,
  i){
    return i(function(){
      dg(a)&&fg(t)}
    )}
  function dg(t){
    var a=t.getSnapshot;
    t=t.value;
    try{
      var i=a();
      return!Zt(t,
      i)}
    catch{
      return!0}
    }
  function fg(t){
    var a=rr(t,
    2);
    a!==null&&It(a,
    t,
    2)}
  function ud(t){
    var a=Dt();
    if(typeof t=="function"){
      var i=t;
      if(t=i(),
      hr){
        fa(!0);
        try{
          i()}
        finally{
          fa(!1)}
        }
      }
    return a.memoizedState=a.baseState=t,
    a.queue={
      pending:null,
      lanes:0,
      dispatch:null,
      lastRenderedReducer:Yn,
      lastRenderedState:t}
    ,
    a}
  function hg(t,
  a,
  i,
  o){
    return t.baseState=i,
    ld(t,
    Ve,
    typeof o=="function"?o:Yn)}
  function eS(t,
  a,
  i,
  o,
  u){
    if(el(t))throw Error(s(485));
    if(t=a.action,
    t!==null){
      var h={
        payload:u,
        action:t,
        next:null,
        isTransition:!0,
        status:"pending",
        value:null,
        reason:null,
        listeners:[],
        then:function(y){
          h.listeners.push(y)}
        }
      ;
      k.T!==null?i(!0):h.isTransition=!1,
      o(h),
      i=a.pending,
      i===null?(h.next=a.pending=h,
      mg(a,
      h)):(h.next=i.next,
      a.pending=i.next=h)}
    }
  function mg(t,
  a){
    var i=a.action,
    o=a.payload,
    u=t.state;
    if(a.isTransition){
      var h=k.T,
      y={
        }
      ;
      k.T=y;
      try{
        var S=i(u,
        o),
        T=k.S;
        T!==null&&T(y,
        S),
        pg(t,
        a,
        S)}
      catch(H){
        dd(t,
        a,
        H)}
      finally{
        h!==null&&y.types!==null&&(h.types=y.types),
        k.T=h}
      }
    else try{
      h=i(u,
      o),
      pg(t,
      a,
      h)}
    catch(H){
      dd(t,
      a,
      H)}
    }
  function pg(t,
  a,
  i){
    i!==null&&typeof i=="object"&&typeof i.then=="function"?i.then(function(o){
      gg(t,
      a,
      o)}
    ,
    function(o){
      return dd(t,
      a,
      o)}
    ):gg(t,
    a,
    i)}
  function gg(t,
  a,
  i){
    a.status="fulfilled",
    a.value=i,
    xg(a),
    t.state=i,
    a=t.pending,
    a!==null&&(i=a.next,
    i===a?t.pending=null:(i=i.next,
    a.next=i,
    mg(t,
    i)))}
  function dd(t,
  a,
  i){
    var o=t.pending;
    if(t.pending=null,
    o!==null){
      o=o.next;
      do a.status="rejected",
      a.reason=i,
      xg(a),
      a=a.next;
      while(a!==o)}
    t.action=null}
  function xg(t){
    t=t.listeners;
    for(var a=0;
    a<t.length;
    a++)(0,
    t[a])()}
  function yg(t,
  a){
    return a}
  function bg(t,
  a){
    if(Ae){
      var i=Ke.formState;
      if(i!==null){
        e:{
          var o=ye;
          if(Ae){
            if(Fe){
              t:{
                for(var u=Fe,
                h=ln;
                u.nodeType!==8;
                ){
                  if(!h){
                    u=null;
                    break t}
                  if(u=un(u.nextSibling),
                  u===null){
                    u=null;
                    break t}
                  }
                h=u.data,
                u=h==="F!"||h==="F"?u:null}
              if(u){
                Fe=un(u.nextSibling),
                o=u.data==="F!";
                break e}
              }
            xa(o)}
          o=!1}
        o&&(a=i[0])}
      }
    return i=Dt(),
    i.memoizedState=i.baseState=a,
    o={
      pending:null,
      lanes:0,
      dispatch:null,
      lastRenderedReducer:yg,
      lastRenderedState:a}
    ,
    i.queue=o,
    i=Hg.bind(null,
    ye,
    o),
    o.dispatch=i,
    o=ud(!1),
    h=xd.bind(null,
    ye,
    !1,
    o.queue),
    o=Dt(),
    u={
      state:a,
      dispatch:null,
      action:t,
      pending:null}
    ,
    o.queue=u,
    i=eS.bind(null,
    ye,
    u,
    h,
    i),
    u.dispatch=i,
    o.memoizedState=t,
    [a,
    i,
    !1]}
  function vg(t){
    var a=ot();
    return wg(a,
    Ve,
    t)}
  function wg(t,
  a,
  i){
    if(a=ld(t,
    a,
    yg)[0],
    t=Fo(Yn)[0],
    typeof a=="object"&&a!==null&&typeof a.then=="function")try{
      var o=cs(a)}
    catch(y){
      throw y===Fr?Io:y}
    else o=a;
    a=ot();
    var u=a.queue,
    h=u.dispatch;
    return i!==a.memoizedState&&(ye.flags|=2048,
    ni(9,
    {
      destroy:void 0}
    ,
    tS.bind(null,
    u,
    i),
    null)),
    [o,
    h,
    t]}
  function tS(t,
  a){
    t.action=a}
  function Sg(t){
    var a=ot(),
    i=Ve;
    if(i!==null)return wg(a,
    i,
    t);
    ot(),
    a=a.memoizedState,
    i=ot();
    var o=i.queue.dispatch;
    return i.memoizedState=t,
    [a,
    o,
    !1]}
  function ni(t,
  a,
  i,
  o){
    return t={
      tag:t,
      create:i,
      deps:o,
      inst:a,
      next:null}
    ,
    a=ye.updateQueue,
    a===null&&(a=Xo(),
    ye.updateQueue=a),
    i=a.lastEffect,
    i===null?a.lastEffect=t.next=t:(o=i.next,
    i.next=t,
    t.next=o,
    a.lastEffect=t),
    t}
  function _g(){
    return ot().memoizedState}
  function Jo(t,
  a,
  i,
  o){
    var u=Dt();
    ye.flags|=t,
    u.memoizedState=ni(1|a,
    {
      destroy:void 0}
    ,
    i,
    o===void 0?null:o)}
  function Qo(t,
  a,
  i,
  o){
    var u=ot();
    o=o===void 0?null:o;
    var h=u.memoizedState.inst;
    Ve!==null&&o!==null&&nd(o,
    Ve.memoizedState.deps)?u.memoizedState=ni(a,
    h,
    i,
    o):(ye.flags|=t,
    u.memoizedState=ni(1|a,
    h,
    i,
    o))}
  function Cg(t,
  a){
    Jo(8390656,
    8,
    t,
    a)}
  function fd(t,
  a){
    Qo(2048,
    8,
    t,
    a)}
  function nS(t){
    ye.flags|=4;
    var a=ye.updateQueue;
    if(a===null)a=Xo(),
    ye.updateQueue=a,
    a.events=[t];
    else{
      var i=a.events;
      i===null?a.events=[t]:i.push(t)}
    }
  function Lg(t){
    var a=ot().memoizedState;
    return nS({
      ref:a,
      nextImpl:t}
    ),
    function(){
      if((Ie&2)!==0)throw Error(s(440));
      return a.impl.apply(void 0,
      arguments)}
    }
  function zg(t,
  a){
    return Qo(4,
    2,
    t,
    a)}
  function Eg(t,
  a){
    return Qo(4,
    4,
    t,
    a)}
  function Tg(t,
  a){
    if(typeof a=="function"){
      t=t();
      var i=a(t);
      return function(){
        typeof i=="function"?i():a(null)}
      }
    if(a!=null)return t=t(),
    a.current=t,
    function(){
      a.current=null}
    }
  function Mg(t,
  a,
  i){
    i=i!=null?i.concat([t]):null,
    Qo(4,
    4,
    Tg.bind(null,
    a,
    t),
    i)}
  function hd(){
    }
  function Bg(t,
  a){
    var i=ot();
    a=a===void 0?null:a;
    var o=i.memoizedState;
    return a!==null&&nd(a,
    o[1])?o[0]:(i.memoizedState=[t,
    a],
    t)}
  function Dg(t,
  a){
    var i=ot();
    a=a===void 0?null:a;
    var o=i.memoizedState;
    if(a!==null&&nd(a,
    o[1]))return o[0];
    if(o=t(),
    hr){
      fa(!0);
      try{
        t()}
      finally{
        fa(!1)}
      }
    return i.memoizedState=[o,
    a],
    o}
  function md(t,
  a,
  i){
    return i===void 0||(In&1073741824)!==0&&(Te&261930)===0?t.memoizedState=a:(t.memoizedState=i,
    t=A0(),
    ye.lanes|=t,
    za|=t,
    i)}
  function Ag(t,
  a,
  i,
  o){
    return Zt(i,
    a)?i:Qr.current!==null?(t=md(t,
    i,
    o),
    Zt(t,
    a)||(dt=!0),
    t):(In&42)===0||(In&1073741824)!==0&&(Te&261930)===0?(dt=!0,
    t.memoizedState=i):(t=A0(),
    ye.lanes|=t,
    za|=t,
    a)}
  function Ng(t,
  a,
  i,
  o,
  u){
    var h=Y.p;
    Y.p=h!==0&&8>h?h:8;
    var y=k.T,
    S={
      }
    ;
    k.T=S,
    xd(t,
    !1,
    a,
    i);
    try{
      var T=u(),
      H=k.S;
      if(H!==null&&H(S,
      T),
      T!==null&&typeof T=="object"&&typeof T.then=="function"){
        var W=Fw(T,
        o);
        us(t,
        a,
        W,
        Jt(t))}
      else us(t,
      a,
      o,
      Jt(t))}
    catch(X){
      us(t,
      a,
      {
        then:function(){
          }
        ,
        status:"rejected",
        reason:X}
      ,
      Jt())}
    finally{
      Y.p=h,
      y!==null&&S.types!==null&&(y.types=S.types),
      k.T=y}
    }
  function aS(){
    }
  function pd(t,
  a,
  i,
  o){
    if(t.tag!==5)throw Error(s(476));
    var u=jg(t).queue;
    Ng(t,
    u,
    a,
    $,
    i===null?aS:function(){
      return kg(t),
      i(o)}
    )}
  function jg(t){
    var a=t.memoizedState;
    if(a!==null)return a;
    a={
      memoizedState:$,
      baseState:$,
      baseQueue:null,
      queue:{
        pending:null,
        lanes:0,
        dispatch:null,
        lastRenderedReducer:Yn,
        lastRenderedState:$}
      ,
      next:null}
    ;
    var i={
      }
    ;
    return a.next={
      memoizedState:i,
      baseState:i,
      baseQueue:null,
      queue:{
        pending:null,
        lanes:0,
        dispatch:null,
        lastRenderedReducer:Yn,
        lastRenderedState:i}
      ,
      next:null}
    ,
    t.memoizedState=a,
    t=t.alternate,
    t!==null&&(t.memoizedState=a),
    a}
  function kg(t){
    var a=jg(t);
    a.next===null&&(a=t.alternate.memoizedState),
    us(t,
    a.next.queue,
    {
      }
    ,
    Jt())}
  function gd(){
    return St(Es)}
  function Rg(){
    return ot().memoizedState}
  function Gg(){
    return ot().memoizedState}
  function rS(t){
    for(var a=t.return;
    a!==null;
    ){
      switch(a.tag){
        case 24:case 3:var i=Jt();
        t=va(i);
        var o=wa(a,
        t,
        i);
        o!==null&&(It(o,
        a,
        i),
        is(o,
        a,
        i)),
        a={
          cache:Vu()}
        ,
        t.payload=a;
        return}
      a=a.return}
    }
  function iS(t,
  a,
  i){
    var o=Jt();
    i={
      lane:o,
      revertLane:0,
      gesture:null,
      action:i,
      hasEagerState:!1,
      eagerState:null,
      next:null}
    ,
    el(t)?Og(a,
    i):(i=ju(t,
    a,
    i,
    o),
    i!==null&&(It(i,
    t,
    o),
    Ug(i,
    a,
    o)))}
  function Hg(t,
  a,
  i){
    var o=Jt();
    us(t,
    a,
    i,
    o)}
  function us(t,
  a,
  i,
  o){
    var u={
      lane:o,
      revertLane:0,
      gesture:null,
      action:i,
      hasEagerState:!1,
      eagerState:null,
      next:null}
    ;
    if(el(t))Og(a,
    u);
    else{
      var h=t.alternate;
      if(t.lanes===0&&(h===null||h.lanes===0)&&(h=a.lastRenderedReducer,
      h!==null))try{
        var y=a.lastRenderedState,
        S=h(y,
        i);
        if(u.hasEagerState=!0,
        u.eagerState=S,
        Zt(S,
        y))return jo(t,
        a,
        u,
        0),
        Ke===null&&No(),
        !1}
      catch{
        }
      finally{
        }
      if(i=ju(t,
      a,
      u,
      o),
      i!==null)return It(i,
      t,
      o),
      Ug(i,
      a,
      o),
      !0}
    return!1}
  function xd(t,
  a,
  i,
  o){
    if(o={
      lane:2,
      revertLane:Xd(),
      gesture:null,
      action:o,
      hasEagerState:!1,
      eagerState:null,
      next:null}
    ,
    el(t)){
      if(a)throw Error(s(479))}
    else a=ju(t,
    i,
    o,
    2),
    a!==null&&It(a,
    t,
    2)}
  function el(t){
    var a=t.alternate;
    return t===ye||a!==null&&a===ye}
  function Og(t,
  a){
    ei=Wo=!0;
    var i=t.pending;
    i===null?a.next=a:(a.next=i.next,
    i.next=a),
    t.pending=a}
  function Ug(t,
  a,
  i){
    if((i&4194048)!==0){
      var o=a.lanes;
      o&=t.pendingLanes,
      i|=o,
      a.lanes=i,
      Vm(t,
      i)}
    }
  var ds={
    readContext:St,
    use:$o,
    useCallback:nt,
    useContext:nt,
    useEffect:nt,
    useImperativeHandle:nt,
    useLayoutEffect:nt,
    useInsertionEffect:nt,
    useMemo:nt,
    useReducer:nt,
    useRef:nt,
    useState:nt,
    useDebugValue:nt,
    useDeferredValue:nt,
    useTransition:nt,
    useSyncExternalStore:nt,
    useId:nt,
    useHostTransitionStatus:nt,
    useFormState:nt,
    useActionState:nt,
    useOptimistic:nt,
    useMemoCache:nt,
    useCacheRefresh:nt}
  ;
  ds.useEffectEvent=nt;
  var Ig={
    readContext:St,
    use:$o,
    useCallback:function(t,
    a){
      return Dt().memoizedState=[t,
      a===void 0?null:a],
      t}
    ,
    useContext:St,
    useEffect:Cg,
    useImperativeHandle:function(t,
    a,
    i){
      i=i!=null?i.concat([t]):null,
      Jo(4194308,
      4,
      Tg.bind(null,
      a,
      t),
      i)}
    ,
    useLayoutEffect:function(t,
    a){
      return Jo(4194308,
      4,
      t,
      a)}
    ,
    useInsertionEffect:function(t,
    a){
      Jo(4,
      2,
      t,
      a)}
    ,
    useMemo:function(t,
    a){
      var i=Dt();
      a=a===void 0?null:a;
      var o=t();
      if(hr){
        fa(!0);
        try{
          t()}
        finally{
          fa(!1)}
        }
      return i.memoizedState=[o,
      a],
      o}
    ,
    useReducer:function(t,
    a,
    i){
      var o=Dt();
      if(i!==void 0){
        var u=i(a);
        if(hr){
          fa(!0);
          try{
            i(a)}
          finally{
            fa(!1)}
          }
        }
      else u=a;
      return o.memoizedState=o.baseState=u,
      t={
        pending:null,
        lanes:0,
        dispatch:null,
        lastRenderedReducer:t,
        lastRenderedState:u}
      ,
      o.queue=t,
      t=t.dispatch=iS.bind(null,
      ye,
      t),
      [o.memoizedState,
      t]}
    ,
    useRef:function(t){
      var a=Dt();
      return t={
        current:t}
      ,
      a.memoizedState=t}
    ,
    useState:function(t){
      t=ud(t);
      var a=t.queue,
      i=Hg.bind(null,
      ye,
      a);
      return a.dispatch=i,
      [t.memoizedState,
      i]}
    ,
    useDebugValue:hd,
    useDeferredValue:function(t,
    a){
      var i=Dt();
      return md(i,
      t,
      a)}
    ,
    useTransition:function(){
      var t=ud(!1);
      return t=Ng.bind(null,
      ye,
      t.queue,
      !0,
      !1),
      Dt().memoizedState=t,
      [!1,
      t]}
    ,
    useSyncExternalStore:function(t,
    a,
    i){
      var o=ye,
      u=Dt();
      if(Ae){
        if(i===void 0)throw Error(s(407));
        i=i()}
      else{
        if(i=a(),
        Ke===null)throw Error(s(349));
        (Te&127)!==0||lg(o,
        a,
        i)}
      u.memoizedState=i;
      var h={
        value:i,
        getSnapshot:a}
      ;
      return u.queue=h,
      Cg(ug.bind(null,
      o,
      h,
      t),
      [t]),
      o.flags|=2048,
      ni(9,
      {
        destroy:void 0}
      ,
      cg.bind(null,
      o,
      h,
      i,
      a),
      null),
      i}
    ,
    useId:function(){
      var t=Dt(),
      a=Ke.identifierPrefix;
      if(Ae){
        var i=zn,
        o=Ln;
        i=(o&~(1<<32-Vt(o)-1)).toString(32)+i,
        a="_"+a+"R_"+i,
        i=Ko++,
        0<i&&(a+="H"+i.toString(32)),
        a+="_"}
      else i=Jw++,
      a="_"+a+"r_"+i.toString(32)+"_";
      return t.memoizedState=a}
    ,
    useHostTransitionStatus:gd,
    useFormState:bg,
    useActionState:bg,
    useOptimistic:function(t){
      var a=Dt();
      a.memoizedState=a.baseState=t;
      var i={
        pending:null,
        lanes:0,
        dispatch:null,
        lastRenderedReducer:null,
        lastRenderedState:null}
      ;
      return a.queue=i,
      a=xd.bind(null,
      ye,
      !0,
      i),
      i.dispatch=a,
      [t,
      a]}
    ,
    useMemoCache:od,
    useCacheRefresh:function(){
      return Dt().memoizedState=rS.bind(null,
      ye)}
    ,
    useEffectEvent:function(t){
      var a=Dt(),
      i={
        impl:t}
      ;
      return a.memoizedState=i,
      function(){
        if((Ie&2)!==0)throw Error(s(440));
        return i.impl.apply(void 0,
        arguments)}
      }
    }
  ,
  yd={
    readContext:St,
    use:$o,
    useCallback:Bg,
    useContext:St,
    useEffect:fd,
    useImperativeHandle:Mg,
    useInsertionEffect:zg,
    useLayoutEffect:Eg,
    useMemo:Dg,
    useReducer:Fo,
    useRef:_g,
    useState:function(){
      return Fo(Yn)}
    ,
    useDebugValue:hd,
    useDeferredValue:function(t,
    a){
      var i=ot();
      return Ag(i,
      Ve.memoizedState,
      t,
      a)}
    ,
    useTransition:function(){
      var t=Fo(Yn)[0],
      a=ot().memoizedState;
      return[typeof t=="boolean"?t:cs(t),
      a]}
    ,
    useSyncExternalStore:og,
    useId:Rg,
    useHostTransitionStatus:gd,
    useFormState:vg,
    useActionState:vg,
    useOptimistic:function(t,
    a){
      var i=ot();
      return hg(i,
      Ve,
      t,
      a)}
    ,
    useMemoCache:od,
    useCacheRefresh:Gg}
  ;
  yd.useEffectEvent=Lg;
  var Yg={
    readContext:St,
    use:$o,
    useCallback:Bg,
    useContext:St,
    useEffect:fd,
    useImperativeHandle:Mg,
    useInsertionEffect:zg,
    useLayoutEffect:Eg,
    useMemo:Dg,
    useReducer:cd,
    useRef:_g,
    useState:function(){
      return cd(Yn)}
    ,
    useDebugValue:hd,
    useDeferredValue:function(t,
    a){
      var i=ot();
      return Ve===null?md(i,
      t,
      a):Ag(i,
      Ve.memoizedState,
      t,
      a)}
    ,
    useTransition:function(){
      var t=cd(Yn)[0],
      a=ot().memoizedState;
      return[typeof t=="boolean"?t:cs(t),
      a]}
    ,
    useSyncExternalStore:og,
    useId:Rg,
    useHostTransitionStatus:gd,
    useFormState:Sg,
    useActionState:Sg,
    useOptimistic:function(t,
    a){
      var i=ot();
      return Ve!==null?hg(i,
      Ve,
      t,
      a):(i.baseState=t,
      [t,
      i.queue.dispatch])}
    ,
    useMemoCache:od,
    useCacheRefresh:Gg}
  ;
  Yg.useEffectEvent=Lg;
  function bd(t,
  a,
  i,
  o){
    a=t.memoizedState,
    i=i(o,
    a),
    i=i==null?a:v({
      }
    ,
    a,
    i),
    t.memoizedState=i,
    t.lanes===0&&(t.updateQueue.baseState=i)}
  var vd={
    enqueueSetState:function(t,
    a,
    i){
      t=t._reactInternals;
      var o=Jt(),
      u=va(o);
      u.payload=a,
      i!=null&&(u.callback=i),
      a=wa(t,
      u,
      o),
      a!==null&&(It(a,
      t,
      o),
      is(a,
      t,
      o))}
    ,
    enqueueReplaceState:function(t,
    a,
    i){
      t=t._reactInternals;
      var o=Jt(),
      u=va(o);
      u.tag=1,
      u.payload=a,
      i!=null&&(u.callback=i),
      a=wa(t,
      u,
      o),
      a!==null&&(It(a,
      t,
      o),
      is(a,
      t,
      o))}
    ,
    enqueueForceUpdate:function(t,
    a){
      t=t._reactInternals;
      var i=Jt(),
      o=va(i);
      o.tag=2,
      a!=null&&(o.callback=a),
      a=wa(t,
      o,
      i),
      a!==null&&(It(a,
      t,
      i),
      is(a,
      t,
      i))}
    }
  ;
  function Pg(t,
  a,
  i,
  o,
  u,
  h,
  y){
    return t=t.stateNode,
    typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,
    h,
    y):a.prototype&&a.prototype.isPureReactComponent?!Fi(i,
    o)||!Fi(u,
    h):!0}
  function qg(t,
  a,
  i,
  o){
    t=a.state,
    typeof a.componentWillReceiveProps=="function"&&a.componentWillReceiveProps(i,
    o),
    typeof a.UNSAFE_componentWillReceiveProps=="function"&&a.UNSAFE_componentWillReceiveProps(i,
    o),
    a.state!==t&&vd.enqueueReplaceState(a,
    a.state,
    null)}
  function mr(t,
  a){
    var i=a;
    if("ref"in a){
      i={
        }
      ;
      for(var o in a)o!=="ref"&&(i[o]=a[o])}
    if(t=t.defaultProps){
      i===a&&(i=v({
        }
      ,
      i));
      for(var u in t)i[u]===void 0&&(i[u]=t[u])}
    return i}
  function Vg(t){
    Ao(t)}
  function Zg(t){
    }
  function Wg(t){
    Ao(t)}
  function tl(t,
  a){
    try{
      var i=t.onUncaughtError;
      i(a.value,
      {
        componentStack:a.stack}
      )}
    catch(o){
      setTimeout(function(){
        throw o}
      )}
    }
  function Kg(t,
  a,
  i){
    try{
      var o=t.onCaughtError;
      o(i.value,
      {
        componentStack:i.stack,
        errorBoundary:a.tag===1?a.stateNode:null}
      )}
    catch(u){
      setTimeout(function(){
        throw u}
      )}
    }
  function wd(t,
  a,
  i){
    return i=va(i),
    i.tag=3,
    i.payload={
      element:null}
    ,
    i.callback=function(){
      tl(t,
      a)}
    ,
    i}
  function Xg(t){
    return t=va(t),
    t.tag=3,
    t}
  function $g(t,
  a,
  i,
  o){
    var u=i.type.getDerivedStateFromError;
    if(typeof u=="function"){
      var h=o.value;
      t.payload=function(){
        return u(h)}
      ,
      t.callback=function(){
        Kg(a,
        i,
        o)}
      }
    var y=i.stateNode;
    y!==null&&typeof y.componentDidCatch=="function"&&(t.callback=function(){
      Kg(a,
      i,
      o),
      typeof u!="function"&&(Ea===null?Ea=new Set([this]):Ea.add(this));
      var S=o.stack;
      this.componentDidCatch(o.value,
      {
        componentStack:S!==null?S:""}
      )}
    )}
  function sS(t,
  a,
  i,
  o,
  u){
    if(i.flags|=32768,
    o!==null&&typeof o=="object"&&typeof o.then=="function"){
      if(a=i.alternate,
      a!==null&&Kr(a,
      i,
      u,
      !0),
      i=Kt.current,
      i!==null){
        switch(i.tag){
          case 31:case 13:return cn===null?hl():i.alternate===null&&at===0&&(at=3),
          i.flags&=-257,
          i.flags|=65536,
          i.lanes=u,
          o===Yo?i.flags|=16384:(a=i.updateQueue,
          a===null?i.updateQueue=new Set([o]):a.add(o),
          Zd(t,
          o,
          u)),
          !1;
          case 22:return i.flags|=65536,
          o===Yo?i.flags|=16384:(a=i.updateQueue,
          a===null?(a={
            transitions:null,
            markerInstances:null,
            retryQueue:new Set([o])}
          ,
          i.updateQueue=a):(i=a.retryQueue,
          i===null?a.retryQueue=new Set([o]):i.add(o)),
          Zd(t,
          o,
          u)),
          !1}
        throw Error(s(435,
        i.tag))}
      return Zd(t,
      o,
      u),
      hl(),
      !1}
    if(Ae)return a=Kt.current,
    a!==null?((a.flags&65536)===0&&(a.flags|=256),
    a.flags|=65536,
    a.lanes=u,
    o!==Uu&&(t=Error(s(422),
    {
      cause:o}
    ),
    es(rn(t,
    i)))):(o!==Uu&&(a=Error(s(423),
    {
      cause:o}
    ),
    es(rn(a,
    i))),
    t=t.current.alternate,
    t.flags|=65536,
    u&=-u,
    t.lanes|=u,
    o=rn(o,
    i),
    u=wd(t.stateNode,
    o,
    u),
    Fu(t,
    u),
    at!==4&&(at=2)),
    !1;
    var h=Error(s(520),
    {
      cause:o}
    );
    if(h=rn(h,
    i),
    bs===null?bs=[h]:bs.push(h),
    at!==4&&(at=2),
    a===null)return!0;
    o=rn(o,
    i),
    i=a;
    do{
      switch(i.tag){
        case 3:return i.flags|=65536,
        t=u&-u,
        i.lanes|=t,
        t=wd(i.stateNode,
        o,
        t),
        Fu(i,
        t),
        !1;
        case 1:if(a=i.type,
        h=i.stateNode,
        (i.flags&128)===0&&(typeof a.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(Ea===null||!Ea.has(h))))return i.flags|=65536,
        u&=-u,
        i.lanes|=u,
        u=Xg(u),
        $g(u,
        t,
        i,
        o),
        Fu(i,
        u),
        !1}
      i=i.return}
    while(i!==null);
    return!1}
  var Sd=Error(s(461)),
  dt=!1;
  function _t(t,
  a,
  i,
  o){
    a.child=t===null?eg(a,
    null,
    i,
    o):fr(a,
    t.child,
    i,
    o)}
  function Fg(t,
  a,
  i,
  o,
  u){
    i=i.render;
    var h=a.ref;
    if("ref"in o){
      var y={
        }
      ;
      for(var S in o)S!=="ref"&&(y[S]=o[S])}
    else y=o;
    return lr(a),
    o=ad(t,
    a,
    i,
    y,
    h,
    u),
    S=rd(),
    t!==null&&!dt?(id(t,
    a,
    u),
    Pn(t,
    a,
    u)):(Ae&&S&&Hu(a),
    a.flags|=1,
    _t(t,
    a,
    o,
    u),
    a.child)}
  function Jg(t,
  a,
  i,
  o,
  u){
    if(t===null){
      var h=i.type;
      return typeof h=="function"&&!ku(h)&&h.defaultProps===void 0&&i.compare===null?(a.tag=15,
      a.type=h,
      Qg(t,
      a,
      h,
      o,
      u)):(t=Ro(i.type,
      null,
      o,
      a,
      a.mode,
      u),
      t.ref=a.ref,
      t.return=a,
      a.child=t)}
    if(h=t.child,
    !Bd(t,
    u)){
      var y=h.memoizedProps;
      if(i=i.compare,
      i=i!==null?i:Fi,
      i(y,
      o)&&t.ref===a.ref)return Pn(t,
      a,
      u)}
    return a.flags|=1,
    t=Gn(h,
    o),
    t.ref=a.ref,
    t.return=a,
    a.child=t}
  function Qg(t,
  a,
  i,
  o,
  u){
    if(t!==null){
      var h=t.memoizedProps;
      if(Fi(h,
      o)&&t.ref===a.ref)if(dt=!1,
      a.pendingProps=o=h,
      Bd(t,
      u))(t.flags&131072)!==0&&(dt=!0);
      else return a.lanes=t.lanes,
      Pn(t,
      a,
      u)}
    return _d(t,
    a,
    i,
    o,
    u)}
  function e0(t,
  a,
  i,
  o){
    var u=o.children,
    h=t!==null?t.memoizedState:null;
    if(t===null&&a.stateNode===null&&(a.stateNode={
      _visibility:1,
      _pendingMarkers:null,
      _retryCache:null,
      _transitions:null}
    ),
    o.mode==="hidden"){
      if((a.flags&128)!==0){
        if(h=h!==null?h.baseLanes|i:i,
        t!==null){
          for(o=a.child=t.child,
          u=0;
          o!==null;
          )u=u|o.lanes|o.childLanes,
          o=o.sibling;
          o=u&~h}
        else o=0,
        a.child=null;
        return t0(t,
        a,
        h,
        i,
        o)}
      if((i&536870912)!==0)a.memoizedState={
        baseLanes:0,
        cachePool:null}
      ,
      t!==null&&Uo(a,
      h!==null?h.cachePool:null),
      h!==null?ag(a,
      h):Qu(),
      rg(a);
      else return o=a.lanes=536870912,
      t0(t,
      a,
      h!==null?h.baseLanes|i:i,
      i,
      o)}
    else h!==null?(Uo(a,
    h.cachePool),
    ag(a,
    h),
    _a(),
    a.memoizedState=null):(t!==null&&Uo(a,
    null),
    Qu(),
    _a());
    return _t(t,
    a,
    u,
    i),
    a.child}
  function fs(t,
  a){
    return t!==null&&t.tag===22||a.stateNode!==null||(a.stateNode={
      _visibility:1,
      _pendingMarkers:null,
      _retryCache:null,
      _transitions:null}
    ),
    a.sibling}
  function t0(t,
  a,
  i,
  o,
  u){
    var h=Wu();
    return h=h===null?null:{
      parent:ct._currentValue,
      pool:h}
    ,
    a.memoizedState={
      baseLanes:i,
      cachePool:h}
    ,
    t!==null&&Uo(a,
    null),
    Qu(),
    rg(a),
    t!==null&&Kr(t,
    a,
    o,
    !0),
    a.childLanes=u,
    null}
  function nl(t,
  a){
    return a=rl({
      mode:a.mode,
      children:a.children}
    ,
    t.mode),
    a.ref=t.ref,
    t.child=a,
    a.return=t,
    a}
  function n0(t,
  a,
  i){
    return fr(a,
    t.child,
    null,
    i),
    t=nl(a,
    a.pendingProps),
    t.flags|=2,
    Xt(a),
    a.memoizedState=null,
    t}
  function oS(t,
  a,
  i){
    var o=a.pendingProps,
    u=(a.flags&128)!==0;
    if(a.flags&=-129,
    t===null){
      if(Ae){
        if(o.mode==="hidden")return t=nl(a,
        o),
        a.lanes=536870912,
        fs(null,
        t);
        if(td(a),
        (t=Fe)?(t=mx(t,
        ln),
        t=t!==null&&t.data==="&"?t:null,
        t!==null&&(a.memoizedState={
          dehydrated:t,
          treeContext:pa!==null?{
            id:Ln,
            overflow:zn}
          :null,
          retryLane:536870912,
          hydrationErrors:null}
        ,
        i=Op(t),
        i.return=a,
        a.child=i,
        wt=a,
        Fe=null)):t=null,
        t===null)throw xa(a);
        return a.lanes=536870912,
        null}
      return nl(a,
      o)}
    var h=t.memoizedState;
    if(h!==null){
      var y=h.dehydrated;
      if(td(a),
      u)if(a.flags&256)a.flags&=-257,
      a=n0(t,
      a,
      i);
      else if(a.memoizedState!==null)a.child=t.child,
      a.flags|=128,
      a=null;
      else throw Error(s(558));
      else if(dt||Kr(t,
      a,
      i,
      !1),
      u=(i&t.childLanes)!==0,
      dt||u){
        if(o=Ke,
        o!==null&&(y=Zm(o,
        i),
        y!==0&&y!==h.retryLane))throw h.retryLane=y,
        rr(t,
        y),
        It(o,
        t,
        y),
        Sd;
        hl(),
        a=n0(t,
        a,
        i)}
      else t=h.treeContext,
      Fe=un(y.nextSibling),
      wt=a,
      Ae=!0,
      ga=null,
      ln=!1,
      t!==null&&Yp(a,
      t),
      a=nl(a,
      o),
      a.flags|=4096;
      return a}
    return t=Gn(t.child,
    {
      mode:o.mode,
      children:o.children}
    ),
    t.ref=a.ref,
    a.child=t,
    t.return=a,
    t}
  function al(t,
  a){
    var i=a.ref;
    if(i===null)t!==null&&t.ref!==null&&(a.flags|=4194816);
    else{
      if(typeof i!="function"&&typeof i!="object")throw Error(s(284));
      (t===null||t.ref!==i)&&(a.flags|=4194816)}
    }
  function _d(t,
  a,
  i,
  o,
  u){
    return lr(a),
    i=ad(t,
    a,
    i,
    o,
    void 0,
    u),
    o=rd(),
    t!==null&&!dt?(id(t,
    a,
    u),
    Pn(t,
    a,
    u)):(Ae&&o&&Hu(a),
    a.flags|=1,
    _t(t,
    a,
    i,
    u),
    a.child)}
  function a0(t,
  a,
  i,
  o,
  u,
  h){
    return lr(a),
    a.updateQueue=null,
    i=sg(a,
    o,
    i,
    u),
    ig(t),
    o=rd(),
    t!==null&&!dt?(id(t,
    a,
    h),
    Pn(t,
    a,
    h)):(Ae&&o&&Hu(a),
    a.flags|=1,
    _t(t,
    a,
    i,
    h),
    a.child)}
  function r0(t,
  a,
  i,
  o,
  u){
    if(lr(a),
    a.stateNode===null){
      var h=qr,
      y=i.contextType;
      typeof y=="object"&&y!==null&&(h=St(y)),
      h=new i(o,
      h),
      a.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,
      h.updater=vd,
      a.stateNode=h,
      h._reactInternals=a,
      h=a.stateNode,
      h.props=o,
      h.state=a.memoizedState,
      h.refs={
        }
      ,
      Xu(a),
      y=i.contextType,
      h.context=typeof y=="object"&&y!==null?St(y):qr,
      h.state=a.memoizedState,
      y=i.getDerivedStateFromProps,
      typeof y=="function"&&(bd(a,
      i,
      y,
      o),
      h.state=a.memoizedState),
      typeof i.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(y=h.state,
      typeof h.componentWillMount=="function"&&h.componentWillMount(),
      typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),
      y!==h.state&&vd.enqueueReplaceState(h,
      h.state,
      null),
      os(a,
      o,
      h,
      u),
      ss(),
      h.state=a.memoizedState),
      typeof h.componentDidMount=="function"&&(a.flags|=4194308),
      o=!0}
    else if(t===null){
      h=a.stateNode;
      var S=a.memoizedProps,
      T=mr(i,
      S);
      h.props=T;
      var H=h.context,
      W=i.contextType;
      y=qr,
      typeof W=="object"&&W!==null&&(y=St(W));
      var X=i.getDerivedStateFromProps;
      W=typeof X=="function"||typeof h.getSnapshotBeforeUpdate=="function",
      S=a.pendingProps!==S,
      W||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(S||H!==y)&&qg(a,
      h,
      o,
      y),
      ba=!1;
      var O=a.memoizedState;
      h.state=O,
      os(a,
      o,
      h,
      u),
      ss(),
      H=a.memoizedState,
      S||O!==H||ba?(typeof X=="function"&&(bd(a,
      i,
      X,
      o),
      H=a.memoizedState),
      (T=ba||Pg(a,
      i,
      T,
      o,
      O,
      H,
      y))?(W||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(typeof h.componentWillMount=="function"&&h.componentWillMount(),
      typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount()),
      typeof h.componentDidMount=="function"&&(a.flags|=4194308)):(typeof h.componentDidMount=="function"&&(a.flags|=4194308),
      a.memoizedProps=o,
      a.memoizedState=H),
      h.props=o,
      h.state=H,
      h.context=y,
      o=T):(typeof h.componentDidMount=="function"&&(a.flags|=4194308),
      o=!1)}
    else{
      h=a.stateNode,
      $u(t,
      a),
      y=a.memoizedProps,
      W=mr(i,
      y),
      h.props=W,
      X=a.pendingProps,
      O=h.context,
      H=i.contextType,
      T=qr,
      typeof H=="object"&&H!==null&&(T=St(H)),
      S=i.getDerivedStateFromProps,
      (H=typeof S=="function"||typeof h.getSnapshotBeforeUpdate=="function")||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(y!==X||O!==T)&&qg(a,
      h,
      o,
      T),
      ba=!1,
      O=a.memoizedState,
      h.state=O,
      os(a,
      o,
      h,
      u),
      ss();
      var P=a.memoizedState;
      y!==X||O!==P||ba||t!==null&&t.dependencies!==null&&Ho(t.dependencies)?(typeof S=="function"&&(bd(a,
      i,
      S,
      o),
      P=a.memoizedState),
      (W=ba||Pg(a,
      i,
      W,
      o,
      O,
      P,
      T)||t!==null&&t.dependencies!==null&&Ho(t.dependencies))?(H||typeof h.UNSAFE_componentWillUpdate!="function"&&typeof h.componentWillUpdate!="function"||(typeof h.componentWillUpdate=="function"&&h.componentWillUpdate(o,
      P,
      T),
      typeof h.UNSAFE_componentWillUpdate=="function"&&h.UNSAFE_componentWillUpdate(o,
      P,
      T)),
      typeof h.componentDidUpdate=="function"&&(a.flags|=4),
      typeof h.getSnapshotBeforeUpdate=="function"&&(a.flags|=1024)):(typeof h.componentDidUpdate!="function"||y===t.memoizedProps&&O===t.memoizedState||(a.flags|=4),
      typeof h.getSnapshotBeforeUpdate!="function"||y===t.memoizedProps&&O===t.memoizedState||(a.flags|=1024),
      a.memoizedProps=o,
      a.memoizedState=P),
      h.props=o,
      h.state=P,
      h.context=T,
      o=W):(typeof h.componentDidUpdate!="function"||y===t.memoizedProps&&O===t.memoizedState||(a.flags|=4),
      typeof h.getSnapshotBeforeUpdate!="function"||y===t.memoizedProps&&O===t.memoizedState||(a.flags|=1024),
      o=!1)}
    return h=o,
    al(t,
    a),
    o=(a.flags&128)!==0,
    h||o?(h=a.stateNode,
    i=o&&typeof i.getDerivedStateFromError!="function"?null:h.render(),
    a.flags|=1,
    t!==null&&o?(a.child=fr(a,
    t.child,
    null,
    u),
    a.child=fr(a,
    null,
    i,
    u)):_t(t,
    a,
    i,
    u),
    a.memoizedState=h.state,
    t=a.child):t=Pn(t,
    a,
    u),
    t}
  function i0(t,
  a,
  i,
  o){
    return sr(),
    a.flags|=256,
    _t(t,
    a,
    i,
    o),
    a.child}
  var Cd={
    dehydrated:null,
    treeContext:null,
    retryLane:0,
    hydrationErrors:null}
  ;
  function Ld(t){
    return{
      baseLanes:t,
      cachePool:Kp()}
    }
  function zd(t,
  a,
  i){
    return t=t!==null?t.childLanes&~i:0,
    a&&(t|=Ft),
    t}
  function s0(t,
  a,
  i){
    var o=a.pendingProps,
    u=!1,
    h=(a.flags&128)!==0,
    y;
    if((y=h)||(y=t!==null&&t.memoizedState===null?!1:(st.current&2)!==0),
    y&&(u=!0,
    a.flags&=-129),
    y=(a.flags&32)!==0,
    a.flags&=-33,
    t===null){
      if(Ae){
        if(u?Sa(a):_a(),
        (t=Fe)?(t=mx(t,
        ln),
        t=t!==null&&t.data!=="&"?t:null,
        t!==null&&(a.memoizedState={
          dehydrated:t,
          treeContext:pa!==null?{
            id:Ln,
            overflow:zn}
          :null,
          retryLane:536870912,
          hydrationErrors:null}
        ,
        i=Op(t),
        i.return=a,
        a.child=i,
        wt=a,
        Fe=null)):t=null,
        t===null)throw xa(a);
        return cf(t)?a.lanes=32:a.lanes=536870912,
        null}
      var S=o.children;
      return o=o.fallback,
      u?(_a(),
      u=a.mode,
      S=rl({
        mode:"hidden",
        children:S}
      ,
      u),
      o=ir(o,
      u,
      i,
      null),
      S.return=a,
      o.return=a,
      S.sibling=o,
      a.child=S,
      o=a.child,
      o.memoizedState=Ld(i),
      o.childLanes=zd(t,
      y,
      i),
      a.memoizedState=Cd,
      fs(null,
      o)):(Sa(a),
      Ed(a,
      S))}
    var T=t.memoizedState;
    if(T!==null&&(S=T.dehydrated,
    S!==null)){
      if(h)a.flags&256?(Sa(a),
      a.flags&=-257,
      a=Td(t,
      a,
      i)):a.memoizedState!==null?(_a(),
      a.child=t.child,
      a.flags|=128,
      a=null):(_a(),
      S=o.fallback,
      u=a.mode,
      o=rl({
        mode:"visible",
        children:o.children}
      ,
      u),
      S=ir(S,
      u,
      i,
      null),
      S.flags|=2,
      o.return=a,
      S.return=a,
      o.sibling=S,
      a.child=o,
      fr(a,
      t.child,
      null,
      i),
      o=a.child,
      o.memoizedState=Ld(i),
      o.childLanes=zd(t,
      y,
      i),
      a.memoizedState=Cd,
      a=fs(null,
      o));
      else if(Sa(a),
      cf(S)){
        if(y=S.nextSibling&&S.nextSibling.dataset,
        y)var H=y.dgst;
        y=H,
        o=Error(s(419)),
        o.stack="",
        o.digest=y,
        es({
          value:o,
          source:null,
          stack:null}
        ),
        a=Td(t,
        a,
        i)}
      else if(dt||Kr(t,
      a,
      i,
      !1),
      y=(i&t.childLanes)!==0,
      dt||y){
        if(y=Ke,
        y!==null&&(o=Zm(y,
        i),
        o!==0&&o!==T.retryLane))throw T.retryLane=o,
        rr(t,
        o),
        It(y,
        t,
        o),
        Sd;
        lf(S)||hl(),
        a=Td(t,
        a,
        i)}
      else lf(S)?(a.flags|=192,
      a.child=t.child,
      a=null):(t=T.treeContext,
      Fe=un(S.nextSibling),
      wt=a,
      Ae=!0,
      ga=null,
      ln=!1,
      t!==null&&Yp(a,
      t),
      a=Ed(a,
      o.children),
      a.flags|=4096);
      return a}
    return u?(_a(),
    S=o.fallback,
    u=a.mode,
    T=t.child,
    H=T.sibling,
    o=Gn(T,
    {
      mode:"hidden",
      children:o.children}
    ),
    o.subtreeFlags=T.subtreeFlags&65011712,
    H!==null?S=Gn(H,
    S):(S=ir(S,
    u,
    i,
    null),
    S.flags|=2),
    S.return=a,
    o.return=a,
    o.sibling=S,
    a.child=o,
    fs(null,
    o),
    o=a.child,
    S=t.child.memoizedState,
    S===null?S=Ld(i):(u=S.cachePool,
    u!==null?(T=ct._currentValue,
    u=u.parent!==T?{
      parent:T,
      pool:T}
    :u):u=Kp(),
    S={
      baseLanes:S.baseLanes|i,
      cachePool:u}
    ),
    o.memoizedState=S,
    o.childLanes=zd(t,
    y,
    i),
    a.memoizedState=Cd,
    fs(t.child,
    o)):(Sa(a),
    i=t.child,
    t=i.sibling,
    i=Gn(i,
    {
      mode:"visible",
      children:o.children}
    ),
    i.return=a,
    i.sibling=null,
    t!==null&&(y=a.deletions,
    y===null?(a.deletions=[t],
    a.flags|=16):y.push(t)),
    a.child=i,
    a.memoizedState=null,
    i)}
  function Ed(t,
  a){
    return a=rl({
      mode:"visible",
      children:a}
    ,
    t.mode),
    a.return=t,
    t.child=a}
  function rl(t,
  a){
    return t=Wt(22,
    t,
    null,
    a),
    t.lanes=0,
    t}
  function Td(t,
  a,
  i){
    return fr(a,
    t.child,
    null,
    i),
    t=Ed(a,
    a.pendingProps.children),
    t.flags|=2,
    a.memoizedState=null,
    t}
  function o0(t,
  a,
  i){
    t.lanes|=a;
    var o=t.alternate;
    o!==null&&(o.lanes|=a),
    Pu(t.return,
    a,
    i)}
  function Md(t,
  a,
  i,
  o,
  u,
  h){
    var y=t.memoizedState;
    y===null?t.memoizedState={
      isBackwards:a,
      rendering:null,
      renderingStartTime:0,
      last:o,
      tail:i,
      tailMode:u,
      treeForkCount:h}
    :(y.isBackwards=a,
    y.rendering=null,
    y.renderingStartTime=0,
    y.last=o,
    y.tail=i,
    y.tailMode=u,
    y.treeForkCount=h)}
  function l0(t,
  a,
  i){
    var o=a.pendingProps,
    u=o.revealOrder,
    h=o.tail;
    o=o.children;
    var y=st.current,
    S=(y&2)!==0;
    if(S?(y=y&1|2,
    a.flags|=128):y&=1,
    J(st,
    y),
    _t(t,
    a,
    o,
    i),
    o=Ae?Qi:0,
    !S&&t!==null&&(t.flags&128)!==0)e:for(t=a.child;
    t!==null;
    ){
      if(t.tag===13)t.memoizedState!==null&&o0(t,
      i,
      a);
      else if(t.tag===19)o0(t,
      i,
      a);
      else if(t.child!==null){
        t.child.return=t,
        t=t.child;
        continue}
      if(t===a)break e;
      for(;
      t.sibling===null;
      ){
        if(t.return===null||t.return===a)break e;
        t=t.return}
      t.sibling.return=t.return,
      t=t.sibling}
    switch(u){
      case"forwards":for(i=a.child,
      u=null;
      i!==null;
      )t=i.alternate,
      t!==null&&Zo(t)===null&&(u=i),
      i=i.sibling;
      i=u,
      i===null?(u=a.child,
      a.child=null):(u=i.sibling,
      i.sibling=null),
      Md(a,
      !1,
      u,
      i,
      h,
      o);
      break;
      case"backwards":case"unstable_legacy-backwards":for(i=null,
      u=a.child,
      a.child=null;
      u!==null;
      ){
        if(t=u.alternate,
        t!==null&&Zo(t)===null){
          a.child=u;
          break}
        t=u.sibling,
        u.sibling=i,
        i=u,
        u=t}
      Md(a,
      !0,
      i,
      null,
      h,
      o);
      break;
      case"together":Md(a,
      !1,
      null,
      null,
      void 0,
      o);
      break;
      default:a.memoizedState=null}
    return a.child}
  function Pn(t,
  a,
  i){
    if(t!==null&&(a.dependencies=t.dependencies),
    za|=a.lanes,
    (i&a.childLanes)===0)if(t!==null){
      if(Kr(t,
      a,
      i,
      !1),
      (i&a.childLanes)===0)return null}
    else return null;
    if(t!==null&&a.child!==t.child)throw Error(s(153));
    if(a.child!==null){
      for(t=a.child,
      i=Gn(t,
      t.pendingProps),
      a.child=i,
      i.return=a;
      t.sibling!==null;
      )t=t.sibling,
      i=i.sibling=Gn(t,
      t.pendingProps),
      i.return=a;
      i.sibling=null}
    return a.child}
  function Bd(t,
  a){
    return(t.lanes&a)!==0?!0:(t=t.dependencies,
    !!(t!==null&&Ho(t)))}
  function lS(t,
  a,
  i){
    switch(a.tag){
      case 3:ht(a,
      a.stateNode.containerInfo),
      ya(a,
      ct,
      t.memoizedState.cache),
      sr();
      break;
      case 27:case 5:Cn(a);
      break;
      case 4:ht(a,
      a.stateNode.containerInfo);
      break;
      case 10:ya(a,
      a.type,
      a.memoizedProps.value);
      break;
      case 31:if(a.memoizedState!==null)return a.flags|=128,
      td(a),
      null;
      break;
      case 13:var o=a.memoizedState;
      if(o!==null)return o.dehydrated!==null?(Sa(a),
      a.flags|=128,
      null):(i&a.child.childLanes)!==0?s0(t,
      a,
      i):(Sa(a),
      t=Pn(t,
      a,
      i),
      t!==null?t.sibling:null);
      Sa(a);
      break;
      case 19:var u=(t.flags&128)!==0;
      if(o=(i&a.childLanes)!==0,
      o||(Kr(t,
      a,
      i,
      !1),
      o=(i&a.childLanes)!==0),
      u){
        if(o)return l0(t,
        a,
        i);
        a.flags|=128}
      if(u=a.memoizedState,
      u!==null&&(u.rendering=null,
      u.tail=null,
      u.lastEffect=null),
      J(st,
      st.current),
      o)break;
      return null;
      case 22:return a.lanes=0,
      e0(t,
      a,
      i,
      a.pendingProps);
      case 24:ya(a,
      ct,
      t.memoizedState.cache)}
    return Pn(t,
    a,
    i)}
  function c0(t,
  a,
  i){
    if(t!==null)if(t.memoizedProps!==a.pendingProps)dt=!0;
    else{
      if(!Bd(t,
      i)&&(a.flags&128)===0)return dt=!1,
      lS(t,
      a,
      i);
      dt=(t.flags&131072)!==0}
    else dt=!1,
    Ae&&(a.flags&1048576)!==0&&Ip(a,
    Qi,
    a.index);
    switch(a.lanes=0,
    a.tag){
      case 16:e:{
        var o=a.pendingProps;
        if(t=ur(a.elementType),
        a.type=t,
        typeof t=="function")ku(t)?(o=mr(t,
        o),
        a.tag=1,
        a=r0(null,
        a,
        t,
        o,
        i)):(a.tag=0,
        a=_d(null,
        a,
        t,
        o,
        i));
        else{
          if(t!=null){
            var u=t.$$typeof;
            if(u===Z){
              a.tag=11,
              a=Fg(null,
              a,
              t,
              o,
              i);
              break e}
            else if(u===q){
              a.tag=14,
              a=Jg(null,
              a,
              t,
              o,
              i);
              break e}
            }
          throw a=De(t)||t,
          Error(s(306,
          a,
          ""))}
        }
      return a;
      case 0:return _d(t,
      a,
      a.type,
      a.pendingProps,
      i);
      case 1:return o=a.type,
      u=mr(o,
      a.pendingProps),
      r0(t,
      a,
      o,
      u,
      i);
      case 3:e:{
        if(ht(a,
        a.stateNode.containerInfo),
        t===null)throw Error(s(387));
        o=a.pendingProps;
        var h=a.memoizedState;
        u=h.element,
        $u(t,
        a),
        os(a,
        o,
        null,
        i);
        var y=a.memoizedState;
        if(o=y.cache,
        ya(a,
        ct,
        o),
        o!==h.cache&&qu(a,
        [ct],
        i,
        !0),
        ss(),
        o=y.element,
        h.isDehydrated)if(h={
          element:o,
          isDehydrated:!1,
          cache:y.cache}
        ,
        a.updateQueue.baseState=h,
        a.memoizedState=h,
        a.flags&256){
          a=i0(t,
          a,
          o,
          i);
          break e}
        else if(o!==u){
          u=rn(Error(s(424)),
          a),
          es(u),
          a=i0(t,
          a,
          o,
          i);
          break e}
        else{
          switch(t=a.stateNode.containerInfo,
          t.nodeType){
            case 9:t=t.body;
            break;
            default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}
          for(Fe=un(t.firstChild),
          wt=a,
          Ae=!0,
          ga=null,
          ln=!0,
          i=eg(a,
          null,
          o,
          i),
          a.child=i;
          i;
          )i.flags=i.flags&-3|4096,
          i=i.sibling}
        else{
          if(sr(),
          o===u){
            a=Pn(t,
            a,
            i);
            break e}
          _t(t,
          a,
          o,
          i)}
        a=a.child}
      return a;
      case 26:return al(t,
      a),
      t===null?(i=vx(a.type,
      null,
      a.pendingProps,
      null))?a.memoizedState=i:Ae||(i=a.type,
      t=a.pendingProps,
      o=vl(fe.current).createElement(i),
      o[vt]=a,
      o[kt]=t,
      Ct(o,
      i,
      t),
      gt(o),
      a.stateNode=o):a.memoizedState=vx(a.type,
      t.memoizedProps,
      a.pendingProps,
      t.memoizedState),
      null;
      case 27:return Cn(a),
      t===null&&Ae&&(o=a.stateNode=xx(a.type,
      a.pendingProps,
      fe.current),
      wt=a,
      ln=!0,
      u=Fe,
      Da(a.type)?(uf=u,
      Fe=un(o.firstChild)):Fe=u),
      _t(t,
      a,
      a.pendingProps.children,
      i),
      al(t,
      a),
      t===null&&(a.flags|=4194304),
      a.child;
      case 5:return t===null&&Ae&&((u=o=Fe)&&(o=HS(o,
      a.type,
      a.pendingProps,
      ln),
      o!==null?(a.stateNode=o,
      wt=a,
      Fe=un(o.firstChild),
      ln=!1,
      u=!0):u=!1),
      u||xa(a)),
      Cn(a),
      u=a.type,
      h=a.pendingProps,
      y=t!==null?t.memoizedProps:null,
      o=h.children,
      rf(u,
      h)?o=null:y!==null&&rf(u,
      y)&&(a.flags|=32),
      a.memoizedState!==null&&(u=ad(t,
      a,
      Qw,
      null,
      null,
      i),
      Es._currentValue=u),
      al(t,
      a),
      _t(t,
      a,
      o,
      i),
      a.child;
      case 6:return t===null&&Ae&&((t=i=Fe)&&(i=OS(i,
      a.pendingProps,
      ln),
      i!==null?(a.stateNode=i,
      wt=a,
      Fe=null,
      t=!0):t=!1),
      t||xa(a)),
      null;
      case 13:return s0(t,
      a,
      i);
      case 4:return ht(a,
      a.stateNode.containerInfo),
      o=a.pendingProps,
      t===null?a.child=fr(a,
      null,
      o,
      i):_t(t,
      a,
      o,
      i),
      a.child;
      case 11:return Fg(t,
      a,
      a.type,
      a.pendingProps,
      i);
      case 7:return _t(t,
      a,
      a.pendingProps,
      i),
      a.child;
      case 8:return _t(t,
      a,
      a.pendingProps.children,
      i),
      a.child;
      case 12:return _t(t,
      a,
      a.pendingProps.children,
      i),
      a.child;
      case 10:return o=a.pendingProps,
      ya(a,
      a.type,
      o.value),
      _t(t,
      a,
      o.children,
      i),
      a.child;
      case 9:return u=a.type._context,
      o=a.pendingProps.children,
      lr(a),
      u=St(u),
      o=o(u),
      a.flags|=1,
      _t(t,
      a,
      o,
      i),
      a.child;
      case 14:return Jg(t,
      a,
      a.type,
      a.pendingProps,
      i);
      case 15:return Qg(t,
      a,
      a.type,
      a.pendingProps,
      i);
      case 19:return l0(t,
      a,
      i);
      case 31:return oS(t,
      a,
      i);
      case 22:return e0(t,
      a,
      i,
      a.pendingProps);
      case 24:return lr(a),
      o=St(ct),
      t===null?(u=Wu(),
      u===null&&(u=Ke,
      h=Vu(),
      u.pooledCache=h,
      h.refCount++,
      h!==null&&(u.pooledCacheLanes|=i),
      u=h),
      a.memoizedState={
        parent:o,
        cache:u}
      ,
      Xu(a),
      ya(a,
      ct,
      u)):((t.lanes&i)!==0&&($u(t,
      a),
      os(a,
      null,
      null,
      i),
      ss()),
      u=t.memoizedState,
      h=a.memoizedState,
      u.parent!==o?(u={
        parent:o,
        cache:o}
      ,
      a.memoizedState=u,
      a.lanes===0&&(a.memoizedState=a.updateQueue.baseState=u),
      ya(a,
      ct,
      o)):(o=h.cache,
      ya(a,
      ct,
      o),
      o!==u.cache&&qu(a,
      [ct],
      i,
      !0))),
      _t(t,
      a,
      a.pendingProps.children,
      i),
      a.child;
      case 29:throw a.pendingProps}
    throw Error(s(156,
    a.tag))}
  function qn(t){
    t.flags|=4}
  function Dd(t,
  a,
  i,
  o,
  u){
    if((a=(t.mode&32)!==0)&&(a=!1),
    a){
      if(t.flags|=16777216,
      (u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;
      else if(R0())t.flags|=8192;
      else throw dr=Yo,
      Ku}
    else t.flags&=-16777217}
  function u0(t,
  a){
    if(a.type!=="stylesheet"||(a.state.loading&4)!==0)t.flags&=-16777217;
    else if(t.flags|=16777216,
    !Lx(a))if(R0())t.flags|=8192;
    else throw dr=Yo,
    Ku}
  function il(t,
  a){
    a!==null&&(t.flags|=4),
    t.flags&16384&&(a=t.tag!==22?Pm():536870912,
    t.lanes|=a,
    si|=a)}
  function hs(t,
  a){
    if(!Ae)switch(t.tailMode){
      case"hidden":a=t.tail;
      for(var i=null;
      a!==null;
      )a.alternate!==null&&(i=a),
      a=a.sibling;
      i===null?t.tail=null:i.sibling=null;
      break;
      case"collapsed":i=t.tail;
      for(var o=null;
      i!==null;
      )i.alternate!==null&&(o=i),
      i=i.sibling;
      o===null?a||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}
    }
  function Je(t){
    var a=t.alternate!==null&&t.alternate.child===t.child,
    i=0,
    o=0;
    if(a)for(var u=t.child;
    u!==null;
    )i|=u.lanes|u.childLanes,
    o|=u.subtreeFlags&65011712,
    o|=u.flags&65011712,
    u.return=t,
    u=u.sibling;
    else for(u=t.child;
    u!==null;
    )i|=u.lanes|u.childLanes,
    o|=u.subtreeFlags,
    o|=u.flags,
    u.return=t,
    u=u.sibling;
    return t.subtreeFlags|=o,
    t.childLanes=i,
    a}
  function cS(t,
  a,
  i){
    var o=a.pendingProps;
    switch(Ou(a),
    a.tag){
      case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Je(a),
      null;
      case 1:return Je(a),
      null;
      case 3:return i=a.stateNode,
      o=null,
      t!==null&&(o=t.memoizedState.cache),
      a.memoizedState.cache!==o&&(a.flags|=2048),
      Un(ct),
      Qe(),
      i.pendingContext&&(i.context=i.pendingContext,
      i.pendingContext=null),
      (t===null||t.child===null)&&(Wr(a)?qn(a):t===null||t.memoizedState.isDehydrated&&(a.flags&256)===0||(a.flags|=1024,
      Iu())),
      Je(a),
      null;
      case 26:var u=a.type,
      h=a.memoizedState;
      return t===null?(qn(a),
      h!==null?(Je(a),
      u0(a,
      h)):(Je(a),
      Dd(a,
      u,
      null,
      o,
      i))):h?h!==t.memoizedState?(qn(a),
      Je(a),
      u0(a,
      h)):(Je(a),
      a.flags&=-16777217):(t=t.memoizedProps,
      t!==o&&qn(a),
      Je(a),
      Dd(a,
      u,
      t,
      o,
      i)),
      null;
      case 27:if(Xa(a),
      i=fe.current,
      u=a.type,
      t!==null&&a.stateNode!=null)t.memoizedProps!==o&&qn(a);
      else{
        if(!o){
          if(a.stateNode===null)throw Error(s(166));
          return Je(a),
          null}
        t=ne.current,
        Wr(a)?Pp(a):(t=xx(u,
        o,
        i),
        a.stateNode=t,
        qn(a))}
      return Je(a),
      null;
      case 5:if(Xa(a),
      u=a.type,
      t!==null&&a.stateNode!=null)t.memoizedProps!==o&&qn(a);
      else{
        if(!o){
          if(a.stateNode===null)throw Error(s(166));
          return Je(a),
          null}
        if(h=ne.current,
        Wr(a))Pp(a);
        else{
          var y=vl(fe.current);
          switch(h){
            case 1:h=y.createElementNS("http://www.w3.org/2000/svg",
            u);
            break;
            case 2:h=y.createElementNS("http://www.w3.org/1998/Math/MathML",
            u);
            break;
            default:switch(u){
              case"svg":h=y.createElementNS("http://www.w3.org/2000/svg",
              u);
              break;
              case"math":h=y.createElementNS("http://www.w3.org/1998/Math/MathML",
              u);
              break;
              case"script":h=y.createElement("div"),
              h.innerHTML="<script><\/script>",
              h=h.removeChild(h.firstChild);
              break;
              case"select":h=typeof o.is=="string"?y.createElement("select",
              {
                is:o.is}
              ):y.createElement("select"),
              o.multiple?h.multiple=!0:o.size&&(h.size=o.size);
              break;
              default:h=typeof o.is=="string"?y.createElement(u,
              {
                is:o.is}
              ):y.createElement(u)}
            }
          h[vt]=a,
          h[kt]=o;
          e:for(y=a.child;
          y!==null;
          ){
            if(y.tag===5||y.tag===6)h.appendChild(y.stateNode);
            else if(y.tag!==4&&y.tag!==27&&y.child!==null){
              y.child.return=y,
              y=y.child;
              continue}
            if(y===a)break e;
            for(;
            y.sibling===null;
            ){
              if(y.return===null||y.return===a)break e;
              y=y.return}
            y.sibling.return=y.return,
            y=y.sibling}
          a.stateNode=h;
          e:switch(Ct(h,
          u,
          o),
          u){
            case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;
            break e;
            case"img":o=!0;
            break e;
            default:o=!1}
          o&&qn(a)}
        }
      return Je(a),
      Dd(a,
      a.type,
      t===null?null:t.memoizedProps,
      a.pendingProps,
      i),
      null;
      case 6:if(t&&a.stateNode!=null)t.memoizedProps!==o&&qn(a);
      else{
        if(typeof o!="string"&&a.stateNode===null)throw Error(s(166));
        if(t=fe.current,
        Wr(a)){
          if(t=a.stateNode,
          i=a.memoizedProps,
          o=null,
          u=wt,
          u!==null)switch(u.tag){
            case 27:case 5:o=u.memoizedProps}
          t[vt]=a,
          t=!!(t.nodeValue===i||o!==null&&o.suppressHydrationWarning===!0||sx(t.nodeValue,
          i)),
          t||xa(a,
          !0)}
        else t=vl(t).createTextNode(o),
        t[vt]=a,
        a.stateNode=t}
      return Je(a),
      null;
      case 31:if(i=a.memoizedState,
      t===null||t.memoizedState!==null){
        if(o=Wr(a),
        i!==null){
          if(t===null){
            if(!o)throw Error(s(318));
            if(t=a.memoizedState,
            t=t!==null?t.dehydrated:null,
            !t)throw Error(s(557));
            t[vt]=a}
          else sr(),
          (a.flags&128)===0&&(a.memoizedState=null),
          a.flags|=4;
          Je(a),
          t=!1}
        else i=Iu(),
        t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=i),
        t=!0;
        if(!t)return a.flags&256?(Xt(a),
        a):(Xt(a),
        null);
        if((a.flags&128)!==0)throw Error(s(558))}
      return Je(a),
      null;
      case 13:if(o=a.memoizedState,
      t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){
        if(u=Wr(a),
        o!==null&&o.dehydrated!==null){
          if(t===null){
            if(!u)throw Error(s(318));
            if(u=a.memoizedState,
            u=u!==null?u.dehydrated:null,
            !u)throw Error(s(317));
            u[vt]=a}
          else sr(),
          (a.flags&128)===0&&(a.memoizedState=null),
          a.flags|=4;
          Je(a),
          u=!1}
        else u=Iu(),
        t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),
        u=!0;
        if(!u)return a.flags&256?(Xt(a),
        a):(Xt(a),
        null)}
      return Xt(a),
      (a.flags&128)!==0?(a.lanes=i,
      a):(i=o!==null,
      t=t!==null&&t.memoizedState!==null,
      i&&(o=a.child,
      u=null,
      o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),
      h=null,
      o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(h=o.memoizedState.cachePool.pool),
      h!==u&&(o.flags|=2048)),
      i!==t&&i&&(a.child.flags|=8192),
      il(a,
      a.updateQueue),
      Je(a),
      null);
      case 4:return Qe(),
      t===null&&Qd(a.stateNode.containerInfo),
      Je(a),
      null;
      case 10:return Un(a.type),
      Je(a),
      null;
      case 19:if(U(st),
      o=a.memoizedState,
      o===null)return Je(a),
      null;
      if(u=(a.flags&128)!==0,
      h=o.rendering,
      h===null)if(u)hs(o,
      !1);
      else{
        if(at!==0||t!==null&&(t.flags&128)!==0)for(t=a.child;
        t!==null;
        ){
          if(h=Zo(t),
          h!==null){
            for(a.flags|=128,
            hs(o,
            !1),
            t=h.updateQueue,
            a.updateQueue=t,
            il(a,
            t),
            a.subtreeFlags=0,
            t=i,
            i=a.child;
            i!==null;
            )Hp(i,
            t),
            i=i.sibling;
            return J(st,
            st.current&1|2),
            Ae&&Hn(a,
            o.treeForkCount),
            a.child}
          t=t.sibling}
        o.tail!==null&&xe()>ul&&(a.flags|=128,
        u=!0,
        hs(o,
        !1),
        a.lanes=4194304)}
      else{
        if(!u)if(t=Zo(h),
        t!==null){
          if(a.flags|=128,
          u=!0,
          t=t.updateQueue,
          a.updateQueue=t,
          il(a,
          t),
          hs(o,
          !0),
          o.tail===null&&o.tailMode==="hidden"&&!h.alternate&&!Ae)return Je(a),
          null}
        else 2*xe()-o.renderingStartTime>ul&&i!==536870912&&(a.flags|=128,
        u=!0,
        hs(o,
        !1),
        a.lanes=4194304);
        o.isBackwards?(h.sibling=a.child,
        a.child=h):(t=o.last,
        t!==null?t.sibling=h:a.child=h,
        o.last=h)}
      return o.tail!==null?(t=o.tail,
      o.rendering=t,
      o.tail=t.sibling,
      o.renderingStartTime=xe(),
      t.sibling=null,
      i=st.current,
      J(st,
      u?i&1|2:i&1),
      Ae&&Hn(a,
      o.treeForkCount),
      t):(Je(a),
      null);
      case 22:case 23:return Xt(a),
      ed(),
      o=a.memoizedState!==null,
      t!==null?t.memoizedState!==null!==o&&(a.flags|=8192):o&&(a.flags|=8192),
      o?(i&536870912)!==0&&(a.flags&128)===0&&(Je(a),
      a.subtreeFlags&6&&(a.flags|=8192)):Je(a),
      i=a.updateQueue,
      i!==null&&il(a,
      i.retryQueue),
      i=null,
      t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),
      o=null,
      a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(o=a.memoizedState.cachePool.pool),
      o!==i&&(a.flags|=2048),
      t!==null&&U(cr),
      null;
      case 24:return i=null,
      t!==null&&(i=t.memoizedState.cache),
      a.memoizedState.cache!==i&&(a.flags|=2048),
      Un(ct),
      Je(a),
      null;
      case 25:return null;
      case 30:return null}
    throw Error(s(156,
    a.tag))}
  function uS(t,
  a){
    switch(Ou(a),
    a.tag){
      case 1:return t=a.flags,
      t&65536?(a.flags=t&-65537|128,
      a):null;
      case 3:return Un(ct),
      Qe(),
      t=a.flags,
      (t&65536)!==0&&(t&128)===0?(a.flags=t&-65537|128,
      a):null;
      case 26:case 27:case 5:return Xa(a),
      null;
      case 31:if(a.memoizedState!==null){
        if(Xt(a),
        a.alternate===null)throw Error(s(340));
        sr()}
      return t=a.flags,
      t&65536?(a.flags=t&-65537|128,
      a):null;
      case 13:if(Xt(a),
      t=a.memoizedState,
      t!==null&&t.dehydrated!==null){
        if(a.alternate===null)throw Error(s(340));
        sr()}
      return t=a.flags,
      t&65536?(a.flags=t&-65537|128,
      a):null;
      case 19:return U(st),
      null;
      case 4:return Qe(),
      null;
      case 10:return Un(a.type),
      null;
      case 22:case 23:return Xt(a),
      ed(),
      t!==null&&U(cr),
      t=a.flags,
      t&65536?(a.flags=t&-65537|128,
      a):null;
      case 24:return Un(ct),
      null;
      case 25:return null;
      default:return null}
    }
  function d0(t,
  a){
    switch(Ou(a),
    a.tag){
      case 3:Un(ct),
      Qe();
      break;
      case 26:case 27:case 5:Xa(a);
      break;
      case 4:Qe();
      break;
      case 31:a.memoizedState!==null&&Xt(a);
      break;
      case 13:Xt(a);
      break;
      case 19:U(st);
      break;
      case 10:Un(a.type);
      break;
      case 22:case 23:Xt(a),
      ed(),
      t!==null&&U(cr);
      break;
      case 24:Un(ct)}
    }
  function ms(t,
  a){
    try{
      var i=a.updateQueue,
      o=i!==null?i.lastEffect:null;
      if(o!==null){
        var u=o.next;
        i=u;
        do{
          if((i.tag&t)===t){
            o=void 0;
            var h=i.create,
            y=i.inst;
            o=h(),
            y.destroy=o}
          i=i.next}
        while(i!==u)}
      }
    catch(S){
      qe(a,
      a.return,
      S)}
    }
  function Ca(t,
  a,
  i){
    try{
      var o=a.updateQueue,
      u=o!==null?o.lastEffect:null;
      if(u!==null){
        var h=u.next;
        o=h;
        do{
          if((o.tag&t)===t){
            var y=o.inst,
            S=y.destroy;
            if(S!==void 0){
              y.destroy=void 0,
              u=a;
              var T=i,
              H=S;
              try{
                H()}
              catch(W){
                qe(u,
                T,
                W)}
              }
            }
          o=o.next}
        while(o!==h)}
      }
    catch(W){
      qe(a,
      a.return,
      W)}
    }
  function f0(t){
    var a=t.updateQueue;
    if(a!==null){
      var i=t.stateNode;
      try{
        ng(a,
        i)}
      catch(o){
        qe(t,
        t.return,
        o)}
      }
    }
  function h0(t,
  a,
  i){
    i.props=mr(t.type,
    t.memoizedProps),
    i.state=t.memoizedState;
    try{
      i.componentWillUnmount()}
    catch(o){
      qe(t,
      a,
      o)}
    }
  function ps(t,
  a){
    try{
      var i=t.ref;
      if(i!==null){
        switch(t.tag){
          case 26:case 27:case 5:var o=t.stateNode;
          break;
          case 30:o=t.stateNode;
          break;
          default:o=t.stateNode}
        typeof i=="function"?t.refCleanup=i(o):i.current=o}
      }
    catch(u){
      qe(t,
      a,
      u)}
    }
  function En(t,
  a){
    var i=t.ref,
    o=t.refCleanup;
    if(i!==null)if(typeof o=="function")try{
      o()}
    catch(u){
      qe(t,
      a,
      u)}
    finally{
      t.refCleanup=null,
      t=t.alternate,
      t!=null&&(t.refCleanup=null)}
    else if(typeof i=="function")try{
      i(null)}
    catch(u){
      qe(t,
      a,
      u)}
    else i.current=null}
  function m0(t){
    var a=t.type,
    i=t.memoizedProps,
    o=t.stateNode;
    try{
      e:switch(a){
        case"button":case"input":case"select":case"textarea":i.autoFocus&&o.focus();
        break e;
        case"img":i.src?o.src=i.src:i.srcSet&&(o.srcset=i.srcSet)}
      }
    catch(u){
      qe(t,
      t.return,
      u)}
    }
  function Ad(t,
  a,
  i){
    try{
      var o=t.stateNode;
      AS(o,
      t.type,
      i,
      a),
      o[kt]=a}
    catch(u){
      qe(t,
      t.return,
      u)}
    }
  function p0(t){
    return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Da(t.type)||t.tag===4}
  function Nd(t){
    e:for(;
    ;
    ){
      for(;
      t.sibling===null;
      ){
        if(t.return===null||p0(t.return))return null;
        t=t.return}
      for(t.sibling.return=t.return,
      t=t.sibling;
      t.tag!==5&&t.tag!==6&&t.tag!==18;
      ){
        if(t.tag===27&&Da(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;
        t.child.return=t,
        t=t.child}
      if(!(t.flags&2))return t.stateNode}
    }
  function jd(t,
  a,
  i){
    var o=t.tag;
    if(o===5||o===6)t=t.stateNode,
    a?(i.nodeType===9?i.body:i.nodeName==="HTML"?i.ownerDocument.body:i).insertBefore(t,
    a):(a=i.nodeType===9?i.body:i.nodeName==="HTML"?i.ownerDocument.body:i,
    a.appendChild(t),
    i=i._reactRootContainer,
    i!=null||a.onclick!==null||(a.onclick=kn));
    else if(o!==4&&(o===27&&Da(t.type)&&(i=t.stateNode,
    a=null),
    t=t.child,
    t!==null))for(jd(t,
    a,
    i),
    t=t.sibling;
    t!==null;
    )jd(t,
    a,
    i),
    t=t.sibling}
  function sl(t,
  a,
  i){
    var o=t.tag;
    if(o===5||o===6)t=t.stateNode,
    a?i.insertBefore(t,
    a):i.appendChild(t);
    else if(o!==4&&(o===27&&Da(t.type)&&(i=t.stateNode),
    t=t.child,
    t!==null))for(sl(t,
    a,
    i),
    t=t.sibling;
    t!==null;
    )sl(t,
    a,
    i),
    t=t.sibling}
  function g0(t){
    var a=t.stateNode,
    i=t.memoizedProps;
    try{
      for(var o=t.type,
      u=a.attributes;
      u.length;
      )a.removeAttributeNode(u[0]);
      Ct(a,
      o,
      i),
      a[vt]=t,
      a[kt]=i}
    catch(h){
      qe(t,
      t.return,
      h)}
    }
  var Vn=!1,
  ft=!1,
  kd=!1,
  x0=typeof WeakSet=="function"?WeakSet:Set,
  xt=null;
  function dS(t,
  a){
    if(t=t.containerInfo,
    nf=El,
    t=Mp(t),
    Tu(t)){
      if("selectionStart"in t)var i={
        start:t.selectionStart,
        end:t.selectionEnd}
      ;
      else e:{
        i=(i=t.ownerDocument)&&i.defaultView||window;
        var o=i.getSelection&&i.getSelection();
        if(o&&o.rangeCount!==0){
          i=o.anchorNode;
          var u=o.anchorOffset,
          h=o.focusNode;
          o=o.focusOffset;
          try{
            i.nodeType,
            h.nodeType}
          catch{
            i=null;
            break e}
          var y=0,
          S=-1,
          T=-1,
          H=0,
          W=0,
          X=t,
          O=null;
          t:for(;
          ;
          ){
            for(var P;
            X!==i||u!==0&&X.nodeType!==3||(S=y+u),
            X!==h||o!==0&&X.nodeType!==3||(T=y+o),
            X.nodeType===3&&(y+=X.nodeValue.length),
            (P=X.firstChild)!==null;
            )O=X,
            X=P;
            for(;
            ;
            ){
              if(X===t)break t;
              if(O===i&&++H===u&&(S=y),
              O===h&&++W===o&&(T=y),
              (P=X.nextSibling)!==null)break;
              X=O,
              O=X.parentNode}
            X=P}
          i=S===-1||T===-1?null:{
            start:S,
            end:T}
          }
        else i=null}
      i=i||{
        start:0,
        end:0}
      }
    else i=null;
    for(af={
      focusedElem:t,
      selectionRange:i}
    ,
    El=!1,
    xt=a;
    xt!==null;
    )if(a=xt,
    t=a.child,
    (a.subtreeFlags&1028)!==0&&t!==null)t.return=a,
    xt=t;
    else for(;
    xt!==null;
    ){
      switch(a=xt,
      h=a.alternate,
      t=a.flags,
      a.tag){
        case 0:if((t&4)!==0&&(t=a.updateQueue,
        t=t!==null?t.events:null,
        t!==null))for(i=0;
        i<t.length;
        i++)u=t[i],
        u.ref.impl=u.nextImpl;
        break;
        case 11:case 15:break;
        case 1:if((t&1024)!==0&&h!==null){
          t=void 0,
          i=a,
          u=h.memoizedProps,
          h=h.memoizedState,
          o=i.stateNode;
          try{
            var ae=mr(i.type,
            u);
            t=o.getSnapshotBeforeUpdate(ae,
            h),
            o.__reactInternalSnapshotBeforeUpdate=t}
          catch(ue){
            qe(i,
            i.return,
            ue)}
          }
        break;
        case 3:if((t&1024)!==0){
          if(t=a.stateNode.containerInfo,
          i=t.nodeType,
          i===9)of(t);
          else if(i===1)switch(t.nodeName){
            case"HEAD":case"HTML":case"BODY":of(t);
            break;
            default:t.textContent=""}
          }
        break;
        case 5:case 26:case 27:case 6:case 4:case 17:break;
        default:if((t&1024)!==0)throw Error(s(163))}
      if(t=a.sibling,
      t!==null){
        t.return=a.return,
        xt=t;
        break}
      xt=a.return}
    }
  function y0(t,
  a,
  i){
    var o=i.flags;
    switch(i.tag){
      case 0:case 11:case 15:Wn(t,
      i),
      o&4&&ms(5,
      i);
      break;
      case 1:if(Wn(t,
      i),
      o&4)if(t=i.stateNode,
      a===null)try{
        t.componentDidMount()}
      catch(y){
        qe(i,
        i.return,
        y)}
      else{
        var u=mr(i.type,
        a.memoizedProps);
        a=a.memoizedState;
        try{
          t.componentDidUpdate(u,
          a,
          t.__reactInternalSnapshotBeforeUpdate)}
        catch(y){
          qe(i,
          i.return,
          y)}
        }
      o&64&&f0(i),
      o&512&&ps(i,
      i.return);
      break;
      case 3:if(Wn(t,
      i),
      o&64&&(t=i.updateQueue,
      t!==null)){
        if(a=null,
        i.child!==null)switch(i.child.tag){
          case 27:case 5:a=i.child.stateNode;
          break;
          case 1:a=i.child.stateNode}
        try{
          ng(t,
          a)}
        catch(y){
          qe(i,
          i.return,
          y)}
        }
      break;
      case 27:a===null&&o&4&&g0(i);
      case 26:case 5:Wn(t,
      i),
      a===null&&o&4&&m0(i),
      o&512&&ps(i,
      i.return);
      break;
      case 12:Wn(t,
      i);
      break;
      case 31:Wn(t,
      i),
      o&4&&w0(t,
      i);
      break;
      case 13:Wn(t,
      i),
      o&4&&S0(t,
      i),
      o&64&&(t=i.memoizedState,
      t!==null&&(t=t.dehydrated,
      t!==null&&(i=vS.bind(null,
      i),
      US(t,
      i))));
      break;
      case 22:if(o=i.memoizedState!==null||Vn,
      !o){
        a=a!==null&&a.memoizedState!==null||ft,
        u=Vn;
        var h=ft;
        Vn=o,
        (ft=a)&&!h?Kn(t,
        i,
        (i.subtreeFlags&8772)!==0):Wn(t,
        i),
        Vn=u,
        ft=h}
      break;
      case 30:break;
      default:Wn(t,
      i)}
    }
  function b0(t){
    var a=t.alternate;
    a!==null&&(t.alternate=null,
    b0(a)),
    t.child=null,
    t.deletions=null,
    t.sibling=null,
    t.tag===5&&(a=t.stateNode,
    a!==null&&du(a)),
    t.stateNode=null,
    t.return=null,
    t.dependencies=null,
    t.memoizedProps=null,
    t.memoizedState=null,
    t.pendingProps=null,
    t.stateNode=null,
    t.updateQueue=null}
  var et=null,
  Gt=!1;
  function Zn(t,
  a,
  i){
    for(i=i.child;
    i!==null;
    )v0(t,
    a,
    i),
    i=i.sibling}
  function v0(t,
  a,
  i){
    if(qt&&typeof qt.onCommitFiberUnmount=="function")try{
      qt.onCommitFiberUnmount(Oi,
      i)}
    catch{
      }
    switch(i.tag){
      case 26:ft||En(i,
      a),
      Zn(t,
      a,
      i),
      i.memoizedState?i.memoizedState.count--:i.stateNode&&(i=i.stateNode,
      i.parentNode.removeChild(i));
      break;
      case 27:ft||En(i,
      a);
      var o=et,
      u=Gt;
      Da(i.type)&&(et=i.stateNode,
      Gt=!1),
      Zn(t,
      a,
      i),
      Cs(i.stateNode),
      et=o,
      Gt=u;
      break;
      case 5:ft||En(i,
      a);
      case 6:if(o=et,
      u=Gt,
      et=null,
      Zn(t,
      a,
      i),
      et=o,
      Gt=u,
      et!==null)if(Gt)try{
        (et.nodeType===9?et.body:et.nodeName==="HTML"?et.ownerDocument.body:et).removeChild(i.stateNode)}
      catch(h){
        qe(i,
        a,
        h)}
      else try{
        et.removeChild(i.stateNode)}
      catch(h){
        qe(i,
        a,
        h)}
      break;
      case 18:et!==null&&(Gt?(t=et,
      fx(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,
      i.stateNode),
      mi(t)):fx(et,
      i.stateNode));
      break;
      case 4:o=et,
      u=Gt,
      et=i.stateNode.containerInfo,
      Gt=!0,
      Zn(t,
      a,
      i),
      et=o,
      Gt=u;
      break;
      case 0:case 11:case 14:case 15:Ca(2,
      i,
      a),
      ft||Ca(4,
      i,
      a),
      Zn(t,
      a,
      i);
      break;
      case 1:ft||(En(i,
      a),
      o=i.stateNode,
      typeof o.componentWillUnmount=="function"&&h0(i,
      a,
      o)),
      Zn(t,
      a,
      i);
      break;
      case 21:Zn(t,
      a,
      i);
      break;
      case 22:ft=(o=ft)||i.memoizedState!==null,
      Zn(t,
      a,
      i),
      ft=o;
      break;
      default:Zn(t,
      a,
      i)}
    }
  function w0(t,
  a){
    if(a.memoizedState===null&&(t=a.alternate,
    t!==null&&(t=t.memoizedState,
    t!==null))){
      t=t.dehydrated;
      try{
        mi(t)}
      catch(i){
        qe(a,
        a.return,
        i)}
      }
    }
  function S0(t,
  a){
    if(a.memoizedState===null&&(t=a.alternate,
    t!==null&&(t=t.memoizedState,
    t!==null&&(t=t.dehydrated,
    t!==null))))try{
      mi(t)}
    catch(i){
      qe(a,
      a.return,
      i)}
    }
  function fS(t){
    switch(t.tag){
      case 31:case 13:case 19:var a=t.stateNode;
      return a===null&&(a=t.stateNode=new x0),
      a;
      case 22:return t=t.stateNode,
      a=t._retryCache,
      a===null&&(a=t._retryCache=new x0),
      a;
      default:throw Error(s(435,
      t.tag))}
    }
  function ol(t,
  a){
    var i=fS(t);
    a.forEach(function(o){
      if(!i.has(o)){
        i.add(o);
        var u=wS.bind(null,
        t,
        o);
        o.then(u,
        u)}
      }
    )}
  function Ht(t,
  a){
    var i=a.deletions;
    if(i!==null)for(var o=0;
    o<i.length;
    o++){
      var u=i[o],
      h=t,
      y=a,
      S=y;
      e:for(;
      S!==null;
      ){
        switch(S.tag){
          case 27:if(Da(S.type)){
            et=S.stateNode,
            Gt=!1;
            break e}
          break;
          case 5:et=S.stateNode,
          Gt=!1;
          break e;
          case 3:case 4:et=S.stateNode.containerInfo,
          Gt=!0;
          break e}
        S=S.return}
      if(et===null)throw Error(s(160));
      v0(h,
      y,
      u),
      et=null,
      Gt=!1,
      h=u.alternate,
      h!==null&&(h.return=null),
      u.return=null}
    if(a.subtreeFlags&13886)for(a=a.child;
    a!==null;
    )_0(a,
    t),
    a=a.sibling}
  var xn=null;
  function _0(t,
  a){
    var i=t.alternate,
    o=t.flags;
    switch(t.tag){
      case 0:case 11:case 14:case 15:Ht(a,
      t),
      Ot(t),
      o&4&&(Ca(3,
      t,
      t.return),
      ms(3,
      t),
      Ca(5,
      t,
      t.return));
      break;
      case 1:Ht(a,
      t),
      Ot(t),
      o&512&&(ft||i===null||En(i,
      i.return)),
      o&64&&Vn&&(t=t.updateQueue,
      t!==null&&(o=t.callbacks,
      o!==null&&(i=t.shared.hiddenCallbacks,
      t.shared.hiddenCallbacks=i===null?o:i.concat(o))));
      break;
      case 26:var u=xn;
      if(Ht(a,
      t),
      Ot(t),
      o&512&&(ft||i===null||En(i,
      i.return)),
      o&4){
        var h=i!==null?i.memoizedState:null;
        if(o=t.memoizedState,
        i===null)if(o===null)if(t.stateNode===null){
          e:{
            o=t.type,
            i=t.memoizedProps,
            u=u.ownerDocument||u;
            t:switch(o){
              case"title":h=u.getElementsByTagName("title")[0],
              (!h||h[Yi]||h[vt]||h.namespaceURI==="http://www.w3.org/2000/svg"||h.hasAttribute("itemprop"))&&(h=u.createElement(o),
              u.head.insertBefore(h,
              u.querySelector("head > title"))),
              Ct(h,
              o,
              i),
              h[vt]=t,
              gt(h),
              o=h;
              break e;
              case"link":var y=_x("link",
              "href",
              u).get(o+(i.href||""));
              if(y){
                for(var S=0;
                S<y.length;
                S++)if(h=y[S],
                h.getAttribute("href")===(i.href==null||i.href===""?null:i.href)&&h.getAttribute("rel")===(i.rel==null?null:i.rel)&&h.getAttribute("title")===(i.title==null?null:i.title)&&h.getAttribute("crossorigin")===(i.crossOrigin==null?null:i.crossOrigin)){
                  y.splice(S,
                  1);
                  break t}
                }
              h=u.createElement(o),
              Ct(h,
              o,
              i),
              u.head.appendChild(h);
              break;
              case"meta":if(y=_x("meta",
              "content",
              u).get(o+(i.content||""))){
                for(S=0;
                S<y.length;
                S++)if(h=y[S],
                h.getAttribute("content")===(i.content==null?null:""+i.content)&&h.getAttribute("name")===(i.name==null?null:i.name)&&h.getAttribute("property")===(i.property==null?null:i.property)&&h.getAttribute("http-equiv")===(i.httpEquiv==null?null:i.httpEquiv)&&h.getAttribute("charset")===(i.charSet==null?null:i.charSet)){
                  y.splice(S,
                  1);
                  break t}
                }
              h=u.createElement(o),
              Ct(h,
              o,
              i),
              u.head.appendChild(h);
              break;
              default:throw Error(s(468,
              o))}
            h[vt]=t,
            gt(h),
            o=h}
          t.stateNode=o}
        else Cx(u,
        t.type,
        t.stateNode);
        else t.stateNode=Sx(u,
        o,
        t.memoizedProps);
        else h!==o?(h===null?i.stateNode!==null&&(i=i.stateNode,
        i.parentNode.removeChild(i)):h.count--,
        o===null?Cx(u,
        t.type,
        t.stateNode):Sx(u,
        o,
        t.memoizedProps)):o===null&&t.stateNode!==null&&Ad(t,
        t.memoizedProps,
        i.memoizedProps)}
      break;
      case 27:Ht(a,
      t),
      Ot(t),
      o&512&&(ft||i===null||En(i,
      i.return)),
      i!==null&&o&4&&Ad(t,
      t.memoizedProps,
      i.memoizedProps);
      break;
      case 5:if(Ht(a,
      t),
      Ot(t),
      o&512&&(ft||i===null||En(i,
      i.return)),
      t.flags&32){
        u=t.stateNode;
        try{
          Gr(u,
          "")}
        catch(ae){
          qe(t,
          t.return,
          ae)}
        }
      o&4&&t.stateNode!=null&&(u=t.memoizedProps,
      Ad(t,
      u,
      i!==null?i.memoizedProps:u)),
      o&1024&&(kd=!0);
      break;
      case 6:if(Ht(a,
      t),
      Ot(t),
      o&4){
        if(t.stateNode===null)throw Error(s(162));
        o=t.memoizedProps,
        i=t.stateNode;
        try{
          i.nodeValue=o}
        catch(ae){
          qe(t,
          t.return,
          ae)}
        }
      break;
      case 3:if(_l=null,
      u=xn,
      xn=wl(a.containerInfo),
      Ht(a,
      t),
      xn=u,
      Ot(t),
      o&4&&i!==null&&i.memoizedState.isDehydrated)try{
        mi(a.containerInfo)}
      catch(ae){
        qe(t,
        t.return,
        ae)}
      kd&&(kd=!1,
      C0(t));
      break;
      case 4:o=xn,
      xn=wl(t.stateNode.containerInfo),
      Ht(a,
      t),
      Ot(t),
      xn=o;
      break;
      case 12:Ht(a,
      t),
      Ot(t);
      break;
      case 31:Ht(a,
      t),
      Ot(t),
      o&4&&(o=t.updateQueue,
      o!==null&&(t.updateQueue=null,
      ol(t,
      o)));
      break;
      case 13:Ht(a,
      t),
      Ot(t),
      t.child.flags&8192&&t.memoizedState!==null!=(i!==null&&i.memoizedState!==null)&&(cl=xe()),
      o&4&&(o=t.updateQueue,
      o!==null&&(t.updateQueue=null,
      ol(t,
      o)));
      break;
      case 22:u=t.memoizedState!==null;
      var T=i!==null&&i.memoizedState!==null,
      H=Vn,
      W=ft;
      if(Vn=H||u,
      ft=W||T,
      Ht(a,
      t),
      ft=W,
      Vn=H,
      Ot(t),
      o&8192)e:for(a=t.stateNode,
      a._visibility=u?a._visibility&-2:a._visibility|1,
      u&&(i===null||T||Vn||ft||pr(t)),
      i=null,
      a=t;
      ;
      ){
        if(a.tag===5||a.tag===26){
          if(i===null){
            T=i=a;
            try{
              if(h=T.stateNode,
              u)y=h.style,
              typeof y.setProperty=="function"?y.setProperty("display",
              "none",
              "important"):y.display="none";
              else{
                S=T.stateNode;
                var X=T.memoizedProps.style,
                O=X!=null&&X.hasOwnProperty("display")?X.display:null;
                S.style.display=O==null||typeof O=="boolean"?"":(""+O).trim()}
              }
            catch(ae){
              qe(T,
              T.return,
              ae)}
            }
          }
        else if(a.tag===6){
          if(i===null){
            T=a;
            try{
              T.stateNode.nodeValue=u?"":T.memoizedProps}
            catch(ae){
              qe(T,
              T.return,
              ae)}
            }
          }
        else if(a.tag===18){
          if(i===null){
            T=a;
            try{
              var P=T.stateNode;
              u?hx(P,
              !0):hx(T.stateNode,
              !1)}
            catch(ae){
              qe(T,
              T.return,
              ae)}
            }
          }
        else if((a.tag!==22&&a.tag!==23||a.memoizedState===null||a===t)&&a.child!==null){
          a.child.return=a,
          a=a.child;
          continue}
        if(a===t)break e;
        for(;
        a.sibling===null;
        ){
          if(a.return===null||a.return===t)break e;
          i===a&&(i=null),
          a=a.return}
        i===a&&(i=null),
        a.sibling.return=a.return,
        a=a.sibling}
      o&4&&(o=t.updateQueue,
      o!==null&&(i=o.retryQueue,
      i!==null&&(o.retryQueue=null,
      ol(t,
      i))));
      break;
      case 19:Ht(a,
      t),
      Ot(t),
      o&4&&(o=t.updateQueue,
      o!==null&&(t.updateQueue=null,
      ol(t,
      o)));
      break;
      case 30:break;
      case 21:break;
      default:Ht(a,
      t),
      Ot(t)}
    }
  function Ot(t){
    var a=t.flags;
    if(a&2){
      try{
        for(var i,
        o=t.return;
        o!==null;
        ){
          if(p0(o)){
            i=o;
            break}
          o=o.return}
        if(i==null)throw Error(s(160));
        switch(i.tag){
          case 27:var u=i.stateNode,
          h=Nd(t);
          sl(t,
          h,
          u);
          break;
          case 5:var y=i.stateNode;
          i.flags&32&&(Gr(y,
          ""),
          i.flags&=-33);
          var S=Nd(t);
          sl(t,
          S,
          y);
          break;
          case 3:case 4:var T=i.stateNode.containerInfo,
          H=Nd(t);
          jd(t,
          H,
          T);
          break;
          default:throw Error(s(161))}
        }
      catch(W){
        qe(t,
        t.return,
        W)}
      t.flags&=-3}
    a&4096&&(t.flags&=-4097)}
  function C0(t){
    if(t.subtreeFlags&1024)for(t=t.child;
    t!==null;
    ){
      var a=t;
      C0(a),
      a.tag===5&&a.flags&1024&&a.stateNode.reset(),
      t=t.sibling}
    }
  function Wn(t,
  a){
    if(a.subtreeFlags&8772)for(a=a.child;
    a!==null;
    )y0(t,
    a.alternate,
    a),
    a=a.sibling}
  function pr(t){
    for(t=t.child;
    t!==null;
    ){
      var a=t;
      switch(a.tag){
        case 0:case 11:case 14:case 15:Ca(4,
        a,
        a.return),
        pr(a);
        break;
        case 1:En(a,
        a.return);
        var i=a.stateNode;
        typeof i.componentWillUnmount=="function"&&h0(a,
        a.return,
        i),
        pr(a);
        break;
        case 27:Cs(a.stateNode);
        case 26:case 5:En(a,
        a.return),
        pr(a);
        break;
        case 22:a.memoizedState===null&&pr(a);
        break;
        case 30:pr(a);
        break;
        default:pr(a)}
      t=t.sibling}
    }
  function Kn(t,
  a,
  i){
    for(i=i&&(a.subtreeFlags&8772)!==0,
    a=a.child;
    a!==null;
    ){
      var o=a.alternate,
      u=t,
      h=a,
      y=h.flags;
      switch(h.tag){
        case 0:case 11:case 15:Kn(u,
        h,
        i),
        ms(4,
        h);
        break;
        case 1:if(Kn(u,
        h,
        i),
        o=h,
        u=o.stateNode,
        typeof u.componentDidMount=="function")try{
          u.componentDidMount()}
        catch(H){
          qe(o,
          o.return,
          H)}
        if(o=h,
        u=o.updateQueue,
        u!==null){
          var S=o.stateNode;
          try{
            var T=u.shared.hiddenCallbacks;
            if(T!==null)for(u.shared.hiddenCallbacks=null,
            u=0;
            u<T.length;
            u++)tg(T[u],
            S)}
          catch(H){
            qe(o,
            o.return,
            H)}
          }
        i&&y&64&&f0(h),
        ps(h,
        h.return);
        break;
        case 27:g0(h);
        case 26:case 5:Kn(u,
        h,
        i),
        i&&o===null&&y&4&&m0(h),
        ps(h,
        h.return);
        break;
        case 12:Kn(u,
        h,
        i);
        break;
        case 31:Kn(u,
        h,
        i),
        i&&y&4&&w0(u,
        h);
        break;
        case 13:Kn(u,
        h,
        i),
        i&&y&4&&S0(u,
        h);
        break;
        case 22:h.memoizedState===null&&Kn(u,
        h,
        i),
        ps(h,
        h.return);
        break;
        case 30:break;
        default:Kn(u,
        h,
        i)}
      a=a.sibling}
    }
  function Rd(t,
  a){
    var i=null;
    t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),
    t=null,
    a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(t=a.memoizedState.cachePool.pool),
    t!==i&&(t!=null&&t.refCount++,
    i!=null&&ts(i))}
  function Gd(t,
  a){
    t=null,
    a.alternate!==null&&(t=a.alternate.memoizedState.cache),
    a=a.memoizedState.cache,
    a!==t&&(a.refCount++,
    t!=null&&ts(t))}
  function yn(t,
  a,
  i,
  o){
    if(a.subtreeFlags&10256)for(a=a.child;
    a!==null;
    )L0(t,
    a,
    i,
    o),
    a=a.sibling}
  function L0(t,
  a,
  i,
  o){
    var u=a.flags;
    switch(a.tag){
      case 0:case 11:case 15:yn(t,
      a,
      i,
      o),
      u&2048&&ms(9,
      a);
      break;
      case 1:yn(t,
      a,
      i,
      o);
      break;
      case 3:yn(t,
      a,
      i,
      o),
      u&2048&&(t=null,
      a.alternate!==null&&(t=a.alternate.memoizedState.cache),
      a=a.memoizedState.cache,
      a!==t&&(a.refCount++,
      t!=null&&ts(t)));
      break;
      case 12:if(u&2048){
        yn(t,
        a,
        i,
        o),
        t=a.stateNode;
        try{
          var h=a.memoizedProps,
          y=h.id,
          S=h.onPostCommit;
          typeof S=="function"&&S(y,
          a.alternate===null?"mount":"update",
          t.passiveEffectDuration,
          -0)}
        catch(T){
          qe(a,
          a.return,
          T)}
        }
      else yn(t,
      a,
      i,
      o);
      break;
      case 31:yn(t,
      a,
      i,
      o);
      break;
      case 13:yn(t,
      a,
      i,
      o);
      break;
      case 23:break;
      case 22:h=a.stateNode,
      y=a.alternate,
      a.memoizedState!==null?h._visibility&2?yn(t,
      a,
      i,
      o):gs(t,
      a):h._visibility&2?yn(t,
      a,
      i,
      o):(h._visibility|=2,
      ai(t,
      a,
      i,
      o,
      (a.subtreeFlags&10256)!==0||!1)),
      u&2048&&Rd(y,
      a);
      break;
      case 24:yn(t,
      a,
      i,
      o),
      u&2048&&Gd(a.alternate,
      a);
      break;
      default:yn(t,
      a,
      i,
      o)}
    }
  function ai(t,
  a,
  i,
  o,
  u){
    for(u=u&&((a.subtreeFlags&10256)!==0||!1),
    a=a.child;
    a!==null;
    ){
      var h=t,
      y=a,
      S=i,
      T=o,
      H=y.flags;
      switch(y.tag){
        case 0:case 11:case 15:ai(h,
        y,
        S,
        T,
        u),
        ms(8,
        y);
        break;
        case 23:break;
        case 22:var W=y.stateNode;
        y.memoizedState!==null?W._visibility&2?ai(h,
        y,
        S,
        T,
        u):gs(h,
        y):(W._visibility|=2,
        ai(h,
        y,
        S,
        T,
        u)),
        u&&H&2048&&Rd(y.alternate,
        y);
        break;
        case 24:ai(h,
        y,
        S,
        T,
        u),
        u&&H&2048&&Gd(y.alternate,
        y);
        break;
        default:ai(h,
        y,
        S,
        T,
        u)}
      a=a.sibling}
    }
  function gs(t,
  a){
    if(a.subtreeFlags&10256)for(a=a.child;
    a!==null;
    ){
      var i=t,
      o=a,
      u=o.flags;
      switch(o.tag){
        case 22:gs(i,
        o),
        u&2048&&Rd(o.alternate,
        o);
        break;
        case 24:gs(i,
        o),
        u&2048&&Gd(o.alternate,
        o);
        break;
        default:gs(i,
        o)}
      a=a.sibling}
    }
  var xs=8192;
  function ri(t,
  a,
  i){
    if(t.subtreeFlags&xs)for(t=t.child;
    t!==null;
    )z0(t,
    a,
    i),
    t=t.sibling}
  function z0(t,
  a,
  i){
    switch(t.tag){
      case 26:ri(t,
      a,
      i),
      t.flags&xs&&t.memoizedState!==null&&JS(i,
      xn,
      t.memoizedState,
      t.memoizedProps);
      break;
      case 5:ri(t,
      a,
      i);
      break;
      case 3:case 4:var o=xn;
      xn=wl(t.stateNode.containerInfo),
      ri(t,
      a,
      i),
      xn=o;
      break;
      case 22:t.memoizedState===null&&(o=t.alternate,
      o!==null&&o.memoizedState!==null?(o=xs,
      xs=16777216,
      ri(t,
      a,
      i),
      xs=o):ri(t,
      a,
      i));
      break;
      default:ri(t,
      a,
      i)}
    }
  function E0(t){
    var a=t.alternate;
    if(a!==null&&(t=a.child,
    t!==null)){
      a.child=null;
      do a=t.sibling,
      t.sibling=null,
      t=a;
      while(t!==null)}
    }
  function ys(t){
    var a=t.deletions;
    if((t.flags&16)!==0){
      if(a!==null)for(var i=0;
      i<a.length;
      i++){
        var o=a[i];
        xt=o,
        M0(o,
        t)}
      E0(t)}
    if(t.subtreeFlags&10256)for(t=t.child;
    t!==null;
    )T0(t),
    t=t.sibling}
  function T0(t){
    switch(t.tag){
      case 0:case 11:case 15:ys(t),
      t.flags&2048&&Ca(9,
      t,
      t.return);
      break;
      case 3:ys(t);
      break;
      case 12:ys(t);
      break;
      case 22:var a=t.stateNode;
      t.memoizedState!==null&&a._visibility&2&&(t.return===null||t.return.tag!==13)?(a._visibility&=-3,
      ll(t)):ys(t);
      break;
      default:ys(t)}
    }
  function ll(t){
    var a=t.deletions;
    if((t.flags&16)!==0){
      if(a!==null)for(var i=0;
      i<a.length;
      i++){
        var o=a[i];
        xt=o,
        M0(o,
        t)}
      E0(t)}
    for(t=t.child;
    t!==null;
    ){
      switch(a=t,
      a.tag){
        case 0:case 11:case 15:Ca(8,
        a,
        a.return),
        ll(a);
        break;
        case 22:i=a.stateNode,
        i._visibility&2&&(i._visibility&=-3,
        ll(a));
        break;
        default:ll(a)}
      t=t.sibling}
    }
  function M0(t,
  a){
    for(;
    xt!==null;
    ){
      var i=xt;
      switch(i.tag){
        case 0:case 11:case 15:Ca(8,
        i,
        a);
        break;
        case 23:case 22:if(i.memoizedState!==null&&i.memoizedState.cachePool!==null){
          var o=i.memoizedState.cachePool.pool;
          o!=null&&o.refCount++}
        break;
        case 24:ts(i.memoizedState.cache)}
      if(o=i.child,
      o!==null)o.return=i,
      xt=o;
      else e:for(i=t;
      xt!==null;
      ){
        o=xt;
        var u=o.sibling,
        h=o.return;
        if(b0(o),
        o===i){
          xt=null;
          break e}
        if(u!==null){
          u.return=h,
          xt=u;
          break e}
        xt=h}
      }
    }
  var hS={
    getCacheForType:function(t){
      var a=St(ct),
      i=a.data.get(t);
      return i===void 0&&(i=t(),
      a.data.set(t,
      i)),
      i}
    ,
    cacheSignal:function(){
      return St(ct).controller.signal}
    }
  ,
  mS=typeof WeakMap=="function"?WeakMap:Map,
  Ie=0,
  Ke=null,
  Le=null,
  Te=0,
  Pe=0,
  $t=null,
  La=!1,
  ii=!1,
  Hd=!1,
  Xn=0,
  at=0,
  za=0,
  gr=0,
  Od=0,
  Ft=0,
  si=0,
  bs=null,
  Ut=null,
  Ud=!1,
  cl=0,
  B0=0,
  ul=1/0,
  dl=null,
  Ea=null,
  mt=0,
  Ta=null,
  oi=null,
  $n=0,
  Id=0,
  Yd=null,
  D0=null,
  vs=0,
  Pd=null;
  function Jt(){
    return(Ie&2)!==0&&Te!==0?Te&-Te:k.T!==null?Xd():Wm()}
  function A0(){
    if(Ft===0)if((Te&536870912)===0||Ae){
      var t=bo;
      bo<<=1,
      (bo&3932160)===0&&(bo=262144),
      Ft=t}
    else Ft=536870912;
    return t=Kt.current,
    t!==null&&(t.flags|=32),
    Ft}
  function It(t,
  a,
  i){
    (t===Ke&&(Pe===2||Pe===9)||t.cancelPendingCommit!==null)&&(li(t,
    0),
    Ma(t,
    Te,
    Ft,
    !1)),
    Ii(t,
    i),
    ((Ie&2)===0||t!==Ke)&&(t===Ke&&((Ie&2)===0&&(gr|=i),
    at===4&&Ma(t,
    Te,
    Ft,
    !1)),
    Tn(t))}
  function N0(t,
  a,
  i){
    if((Ie&6)!==0)throw Error(s(327));
    var o=!i&&(a&127)===0&&(a&t.expiredLanes)===0||Ui(t,
    a),
    u=o?xS(t,
    a):Vd(t,
    a,
    !0),
    h=o;
    do{
      if(u===0){
        ii&&!o&&Ma(t,
        a,
        0,
        !1);
        break}
      else{
        if(i=t.current.alternate,
        h&&!pS(i)){
          u=Vd(t,
          a,
          !1),
          h=!1;
          continue}
        if(u===2){
          if(h=a,
          t.errorRecoveryDisabledLanes&h)var y=0;
          else y=t.pendingLanes&-536870913,
          y=y!==0?y:y&536870912?536870912:0;
          if(y!==0){
            a=y;
            e:{
              var S=t;
              u=bs;
              var T=S.current.memoizedState.isDehydrated;
              if(T&&(li(S,
              y).flags|=256),
              y=Vd(S,
              y,
              !1),
              y!==2){
                if(Hd&&!T){
                  S.errorRecoveryDisabledLanes|=h,
                  gr|=h,
                  u=4;
                  break e}
                h=Ut,
                Ut=u,
                h!==null&&(Ut===null?Ut=h:Ut.push.apply(Ut,
                h))}
              u=y}
            if(h=!1,
            u!==2)continue}
          }
        if(u===1){
          li(t,
          0),
          Ma(t,
          a,
          0,
          !0);
          break}
        e:{
          switch(o=t,
          h=u,
          h){
            case 0:case 1:throw Error(s(345));
            case 4:if((a&4194048)!==a)break;
            case 6:Ma(o,
            a,
            Ft,
            !La);
            break e;
            case 2:Ut=null;
            break;
            case 3:case 5:break;
            default:throw Error(s(329))}
          if((a&62914560)===a&&(u=cl+300-xe(),
          10<u)){
            if(Ma(o,
            a,
            Ft,
            !La),
            wo(o,
            0,
            !0)!==0)break e;
            $n=a,
            o.timeoutHandle=ux(j0.bind(null,
            o,
            i,
            Ut,
            dl,
            Ud,
            a,
            Ft,
            gr,
            si,
            La,
            h,
            "Throttled",
            -0,
            0),
            u);
            break e}
          j0(o,
          i,
          Ut,
          dl,
          Ud,
          a,
          Ft,
          gr,
          si,
          La,
          h,
          null,
          -0,
          0)}
        }
      break}
    while(!0);
    Tn(t)}
  function j0(t,
  a,
  i,
  o,
  u,
  h,
  y,
  S,
  T,
  H,
  W,
  X,
  O,
  P){
    if(t.timeoutHandle=-1,
    X=a.subtreeFlags,
    X&8192||(X&16785408)===16785408){
      X={
        stylesheets:null,
        count:0,
        imgCount:0,
        imgBytes:0,
        suspenseyImages:[],
        waitingForImages:!0,
        waitingForViewTransition:!1,
        unsuspend:kn}
      ,
      z0(a,
      h,
      X);
      var ae=(h&62914560)===h?cl-xe():(h&4194048)===h?B0-xe():0;
      if(ae=QS(X,
      ae),
      ae!==null){
        $n=h,
        t.cancelPendingCommit=ae(Y0.bind(null,
        t,
        a,
        h,
        i,
        o,
        u,
        y,
        S,
        T,
        W,
        X,
        null,
        O,
        P)),
        Ma(t,
        h,
        y,
        !H);
        return}
      }
    Y0(t,
    a,
    h,
    i,
    o,
    u,
    y,
    S,
    T)}
  function pS(t){
    for(var a=t;
    ;
    ){
      var i=a.tag;
      if((i===0||i===11||i===15)&&a.flags&16384&&(i=a.updateQueue,
      i!==null&&(i=i.stores,
      i!==null)))for(var o=0;
      o<i.length;
      o++){
        var u=i[o],
        h=u.getSnapshot;
        u=u.value;
        try{
          if(!Zt(h(),
          u))return!1}
        catch{
          return!1}
        }
      if(i=a.child,
      a.subtreeFlags&16384&&i!==null)i.return=a,
      a=i;
      else{
        if(a===t)break;
        for(;
        a.sibling===null;
        ){
          if(a.return===null||a.return===t)return!0;
          a=a.return}
        a.sibling.return=a.return,
        a=a.sibling}
      }
    return!0}
  function Ma(t,
  a,
  i,
  o){
    a&=~Od,
    a&=~gr,
    t.suspendedLanes|=a,
    t.pingedLanes&=~a,
    o&&(t.warmLanes|=a),
    o=t.expirationTimes;
    for(var u=a;
    0<u;
    ){
      var h=31-Vt(u),
      y=1<<h;
      o[h]=-1,
      u&=~y}
    i!==0&&qm(t,
    i,
    a)}
  function fl(){
    return(Ie&6)===0?(ws(0),
    !1):!0}
  function qd(){
    if(Le!==null){
      if(Pe===0)var t=Le.return;
      else t=Le,
      On=or=null,
      sd(t),
      Jr=null,
      as=0,
      t=Le;
      for(;
      t!==null;
      )d0(t.alternate,
      t),
      t=t.return;
      Le=null}
    }
  function li(t,
  a){
    var i=t.timeoutHandle;
    i!==-1&&(t.timeoutHandle=-1,
    kS(i)),
    i=t.cancelPendingCommit,
    i!==null&&(t.cancelPendingCommit=null,
    i()),
    $n=0,
    qd(),
    Ke=t,
    Le=i=Gn(t.current,
    null),
    Te=a,
    Pe=0,
    $t=null,
    La=!1,
    ii=Ui(t,
    a),
    Hd=!1,
    si=Ft=Od=gr=za=at=0,
    Ut=bs=null,
    Ud=!1,
    (a&8)!==0&&(a|=a&32);
    var o=t.entangledLanes;
    if(o!==0)for(t=t.entanglements,
    o&=a;
    0<o;
    ){
      var u=31-Vt(o),
      h=1<<u;
      a|=t[u],
      o&=~h}
    return Xn=a,
    No(),
    i}
  function k0(t,
  a){
    ye=null,
    k.H=ds,
    a===Fr||a===Io?(a=Fp(),
    Pe=3):a===Ku?(a=Fp(),
    Pe=4):Pe=a===Sd?8:a!==null&&typeof a=="object"&&typeof a.then=="function"?6:1,
    $t=a,
    Le===null&&(at=1,
    tl(t,
    rn(a,
    t.current)))}
  function R0(){
    var t=Kt.current;
    return t===null?!0:(Te&4194048)===Te?cn===null:(Te&62914560)===Te||(Te&536870912)!==0?t===cn:!1}
  function G0(){
    var t=k.H;
    return k.H=ds,
    t===null?ds:t}
  function H0(){
    var t=k.A;
    return k.A=hS,
    t}
  function hl(){
    at=4,
    La||(Te&4194048)!==Te&&Kt.current!==null||(ii=!0),
    (za&134217727)===0&&(gr&134217727)===0||Ke===null||Ma(Ke,
    Te,
    Ft,
    !1)}
  function Vd(t,
  a,
  i){
    var o=Ie;
    Ie|=2;
    var u=G0(),
    h=H0();
    (Ke!==t||Te!==a)&&(dl=null,
    li(t,
    a)),
    a=!1;
    var y=at;
    e:do try{
      if(Pe!==0&&Le!==null){
        var S=Le,
        T=$t;
        switch(Pe){
          case 8:qd(),
          y=6;
          break e;
          case 3:case 2:case 9:case 6:Kt.current===null&&(a=!0);
          var H=Pe;
          if(Pe=0,
          $t=null,
          ci(t,
          S,
          T,
          H),
          i&&ii){
            y=0;
            break e}
          break;
          default:H=Pe,
          Pe=0,
          $t=null,
          ci(t,
          S,
          T,
          H)}
        }
      gS(),
      y=at;
      break}
    catch(W){
      k0(t,
      W)}
    while(!0);
    return a&&t.shellSuspendCounter++,
    On=or=null,
    Ie=o,
    k.H=u,
    k.A=h,
    Le===null&&(Ke=null,
    Te=0,
    No()),
    y}
  function gS(){
    for(;
    Le!==null;
    )O0(Le)}
  function xS(t,
  a){
    var i=Ie;
    Ie|=2;
    var o=G0(),
    u=H0();
    Ke!==t||Te!==a?(dl=null,
    ul=xe()+500,
    li(t,
    a)):ii=Ui(t,
    a);
    e:do try{
      if(Pe!==0&&Le!==null){
        a=Le;
        var h=$t;
        t:switch(Pe){
          case 1:Pe=0,
          $t=null,
          ci(t,
          a,
          h,
          1);
          break;
          case 2:case 9:if(Xp(h)){
            Pe=0,
            $t=null,
            U0(a);
            break}
          a=function(){
            Pe!==2&&Pe!==9||Ke!==t||(Pe=7),
            Tn(t)}
          ,
          h.then(a,
          a);
          break e;
          case 3:Pe=7;
          break e;
          case 4:Pe=5;
          break e;
          case 7:Xp(h)?(Pe=0,
          $t=null,
          U0(a)):(Pe=0,
          $t=null,
          ci(t,
          a,
          h,
          7));
          break;
          case 5:var y=null;
          switch(Le.tag){
            case 26:y=Le.memoizedState;
            case 5:case 27:var S=Le;
            if(y?Lx(y):S.stateNode.complete){
              Pe=0,
              $t=null;
              var T=S.sibling;
              if(T!==null)Le=T;
              else{
                var H=S.return;
                H!==null?(Le=H,
                ml(H)):Le=null}
              break t}
            }
          Pe=0,
          $t=null,
          ci(t,
          a,
          h,
          5);
          break;
          case 6:Pe=0,
          $t=null,
          ci(t,
          a,
          h,
          6);
          break;
          case 8:qd(),
          at=6;
          break e;
          default:throw Error(s(462))}
        }
      yS();
      break}
    catch(W){
      k0(t,
      W)}
    while(!0);
    return On=or=null,
    k.H=o,
    k.A=u,
    Ie=i,
    Le!==null?0:(Ke=null,
    Te=0,
    No(),
    at)}
  function yS(){
    for(;
    Le!==null&&!Ee();
    )O0(Le)}
  function O0(t){
    var a=c0(t.alternate,
    t,
    Xn);
    t.memoizedProps=t.pendingProps,
    a===null?ml(t):Le=a}
  function U0(t){
    var a=t,
    i=a.alternate;
    switch(a.tag){
      case 15:case 0:a=a0(i,
      a,
      a.pendingProps,
      a.type,
      void 0,
      Te);
      break;
      case 11:a=a0(i,
      a,
      a.pendingProps,
      a.type.render,
      a.ref,
      Te);
      break;
      case 5:sd(a);
      default:d0(i,
      a),
      a=Le=Hp(a,
      Xn),
      a=c0(i,
      a,
      Xn)}
    t.memoizedProps=t.pendingProps,
    a===null?ml(t):Le=a}
  function ci(t,
  a,
  i,
  o){
    On=or=null,
    sd(a),
    Jr=null,
    as=0;
    var u=a.return;
    try{
      if(sS(t,
      u,
      a,
      i,
      Te)){
        at=1,
        tl(t,
        rn(i,
        t.current)),
        Le=null;
        return}
      }
    catch(h){
      if(u!==null)throw Le=u,
      h;
      at=1,
      tl(t,
      rn(i,
      t.current)),
      Le=null;
      return}
    a.flags&32768?(Ae||o===1?t=!0:ii||(Te&536870912)!==0?t=!1:(La=t=!0,
    (o===2||o===9||o===3||o===6)&&(o=Kt.current,
    o!==null&&o.tag===13&&(o.flags|=16384))),
    I0(a,
    t)):ml(a)}
  function ml(t){
    var a=t;
    do{
      if((a.flags&32768)!==0){
        I0(a,
        La);
        return}
      t=a.return;
      var i=cS(a.alternate,
      a,
      Xn);
      if(i!==null){
        Le=i;
        return}
      if(a=a.sibling,
      a!==null){
        Le=a;
        return}
      Le=a=t}
    while(a!==null);
    at===0&&(at=5)}
  function I0(t,
  a){
    do{
      var i=uS(t.alternate,
      t);
      if(i!==null){
        i.flags&=32767,
        Le=i;
        return}
      if(i=t.return,
      i!==null&&(i.flags|=32768,
      i.subtreeFlags=0,
      i.deletions=null),
      !a&&(t=t.sibling,
      t!==null)){
        Le=t;
        return}
      Le=t=i}
    while(t!==null);
    at=6,
    Le=null}
  function Y0(t,
  a,
  i,
  o,
  u,
  h,
  y,
  S,
  T){
    t.cancelPendingCommit=null;
    do pl();
    while(mt!==0);
    if((Ie&6)!==0)throw Error(s(327));
    if(a!==null){
      if(a===t.current)throw Error(s(177));
      if(h=a.lanes|a.childLanes,
      h|=Nu,
      F1(t,
      i,
      h,
      y,
      S,
      T),
      t===Ke&&(Le=Ke=null,
      Te=0),
      oi=a,
      Ta=t,
      $n=i,
      Id=h,
      Yd=u,
      D0=o,
      (a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?(t.callbackNode=null,
      t.callbackPriority=0,
      SS(xo,
      function(){
        return W0(),
        null}
      )):(t.callbackNode=null,
      t.callbackPriority=0),
      o=(a.flags&13878)!==0,
      (a.subtreeFlags&13878)!==0||o){
        o=k.T,
        k.T=null,
        u=Y.p,
        Y.p=2,
        y=Ie,
        Ie|=4;
        try{
          dS(t,
          a,
          i)}
        finally{
          Ie=y,
          Y.p=u,
          k.T=o}
        }
      mt=1,
      P0(),
      q0(),
      V0()}
    }
  function P0(){
    if(mt===1){
      mt=0;
      var t=Ta,
      a=oi,
      i=(a.flags&13878)!==0;
      if((a.subtreeFlags&13878)!==0||i){
        i=k.T,
        k.T=null;
        var o=Y.p;
        Y.p=2;
        var u=Ie;
        Ie|=4;
        try{
          _0(a,
          t);
          var h=af,
          y=Mp(t.containerInfo),
          S=h.focusedElem,
          T=h.selectionRange;
          if(y!==S&&S&&S.ownerDocument&&Tp(S.ownerDocument.documentElement,
          S)){
            if(T!==null&&Tu(S)){
              var H=T.start,
              W=T.end;
              if(W===void 0&&(W=H),
              "selectionStart"in S)S.selectionStart=H,
              S.selectionEnd=Math.min(W,
              S.value.length);
              else{
                var X=S.ownerDocument||document,
                O=X&&X.defaultView||window;
                if(O.getSelection){
                  var P=O.getSelection(),
                  ae=S.textContent.length,
                  ue=Math.min(T.start,
                  ae),
                  We=T.end===void 0?ue:Math.min(T.end,
                  ae);
                  !P.extend&&ue>We&&(y=We,
                  We=ue,
                  ue=y);
                  var N=Ep(S,
                  ue),
                  B=Ep(S,
                  We);
                  if(N&&B&&(P.rangeCount!==1||P.anchorNode!==N.node||P.anchorOffset!==N.offset||P.focusNode!==B.node||P.focusOffset!==B.offset)){
                    var G=X.createRange();
                    G.setStart(N.node,
                    N.offset),
                    P.removeAllRanges(),
                    ue>We?(P.addRange(G),
                    P.extend(B.node,
                    B.offset)):(G.setEnd(B.node,
                    B.offset),
                    P.addRange(G))}
                  }
                }
              }
            for(X=[],
            P=S;
            P=P.parentNode;
            )P.nodeType===1&&X.push({
              element:P,
              left:P.scrollLeft,
              top:P.scrollTop}
            );
            for(typeof S.focus=="function"&&S.focus(),
            S=0;
            S<X.length;
            S++){
              var K=X[S];
              K.element.scrollLeft=K.left,
              K.element.scrollTop=K.top}
            }
          El=!!nf,
          af=nf=null}
        finally{
          Ie=u,
          Y.p=o,
          k.T=i}
        }
      t.current=a,
      mt=2}
    }
  function q0(){
    if(mt===2){
      mt=0;
      var t=Ta,
      a=oi,
      i=(a.flags&8772)!==0;
      if((a.subtreeFlags&8772)!==0||i){
        i=k.T,
        k.T=null;
        var o=Y.p;
        Y.p=2;
        var u=Ie;
        Ie|=4;
        try{
          y0(t,
          a.alternate,
          a)}
        finally{
          Ie=u,
          Y.p=o,
          k.T=i}
        }
      mt=3}
    }
  function V0(){
    if(mt===4||mt===3){
      mt=0,
      bt();
      var t=Ta,
      a=oi,
      i=$n,
      o=D0;
      (a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?mt=5:(mt=0,
      oi=Ta=null,
      Z0(t,
      t.pendingLanes));
      var u=t.pendingLanes;
      if(u===0&&(Ea=null),
      cu(i),
      a=a.stateNode,
      qt&&typeof qt.onCommitFiberRoot=="function")try{
        qt.onCommitFiberRoot(Oi,
        a,
        void 0,
        (a.current.flags&128)===128)}
      catch{
        }
      if(o!==null){
        a=k.T,
        u=Y.p,
        Y.p=2,
        k.T=null;
        try{
          for(var h=t.onRecoverableError,
          y=0;
          y<o.length;
          y++){
            var S=o[y];
            h(S.value,
            {
              componentStack:S.stack}
            )}
          }
        finally{
          k.T=a,
          Y.p=u}
        }
      ($n&3)!==0&&pl(),
      Tn(t),
      u=t.pendingLanes,
      (i&261930)!==0&&(u&42)!==0?t===Pd?vs++:(vs=0,
      Pd=t):vs=0,
      ws(0)}
    }
  function Z0(t,
  a){
    (t.pooledCacheLanes&=a)===0&&(a=t.pooledCache,
    a!=null&&(t.pooledCache=null,
    ts(a)))}
  function pl(){
    return P0(),
    q0(),
    V0(),
    W0()}
  function W0(){
    if(mt!==5)return!1;
    var t=Ta,
    a=Id;
    Id=0;
    var i=cu($n),
    o=k.T,
    u=Y.p;
    try{
      Y.p=32>i?32:i,
      k.T=null,
      i=Yd,
      Yd=null;
      var h=Ta,
      y=$n;
      if(mt=0,
      oi=Ta=null,
      $n=0,
      (Ie&6)!==0)throw Error(s(331));
      var S=Ie;
      if(Ie|=4,
      T0(h.current),
      L0(h,
      h.current,
      y,
      i),
      Ie=S,
      ws(0,
      !1),
      qt&&typeof qt.onPostCommitFiberRoot=="function")try{
        qt.onPostCommitFiberRoot(Oi,
        h)}
      catch{
        }
      return!0}
    finally{
      Y.p=u,
      k.T=o,
      Z0(t,
      a)}
    }
  function K0(t,
  a,
  i){
    a=rn(i,
    a),
    a=wd(t.stateNode,
    a,
    2),
    t=wa(t,
    a,
    2),
    t!==null&&(Ii(t,
    2),
    Tn(t))}
  function qe(t,
  a,
  i){
    if(t.tag===3)K0(t,
    t,
    i);
    else for(;
    a!==null;
    ){
      if(a.tag===3){
        K0(a,
        t,
        i);
        break}
      else if(a.tag===1){
        var o=a.stateNode;
        if(typeof a.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Ea===null||!Ea.has(o))){
          t=rn(i,
          t),
          i=Xg(2),
          o=wa(a,
          i,
          2),
          o!==null&&($g(i,
          o,
          a,
          t),
          Ii(o,
          2),
          Tn(o));
          break}
        }
      a=a.return}
    }
  function Zd(t,
  a,
  i){
    var o=t.pingCache;
    if(o===null){
      o=t.pingCache=new mS;
      var u=new Set;
      o.set(a,
      u)}
    else u=o.get(a),
    u===void 0&&(u=new Set,
    o.set(a,
    u));
    u.has(i)||(Hd=!0,
    u.add(i),
    t=bS.bind(null,
    t,
    a,
    i),
    a.then(t,
    t))}
  function bS(t,
  a,
  i){
    var o=t.pingCache;
    o!==null&&o.delete(a),
    t.pingedLanes|=t.suspendedLanes&i,
    t.warmLanes&=~i,
    Ke===t&&(Te&i)===i&&(at===4||at===3&&(Te&62914560)===Te&&300>xe()-cl?(Ie&2)===0&&li(t,
    0):Od|=i,
    si===Te&&(si=0)),
    Tn(t)}
  function X0(t,
  a){
    a===0&&(a=Pm()),
    t=rr(t,
    a),
    t!==null&&(Ii(t,
    a),
    Tn(t))}
  function vS(t){
    var a=t.memoizedState,
    i=0;
    a!==null&&(i=a.retryLane),
    X0(t,
    i)}
  function wS(t,
  a){
    var i=0;
    switch(t.tag){
      case 31:case 13:var o=t.stateNode,
      u=t.memoizedState;
      u!==null&&(i=u.retryLane);
      break;
      case 19:o=t.stateNode;
      break;
      case 22:o=t.stateNode._retryCache;
      break;
      default:throw Error(s(314))}
    o!==null&&o.delete(a),
    X0(t,
    i)}
  function SS(t,
  a){
    return Ne(t,
    a)}
  var gl=null,
  ui=null,
  Wd=!1,
  xl=!1,
  Kd=!1,
  Ba=0;
  function Tn(t){
    t!==ui&&t.next===null&&(ui===null?gl=ui=t:ui=ui.next=t),
    xl=!0,
    Wd||(Wd=!0,
    CS())}
  function ws(t,
  a){
    if(!Kd&&xl){
      Kd=!0;
      do for(var i=!1,
      o=gl;
      o!==null;
      ){
        if(t!==0){
          var u=o.pendingLanes;
          if(u===0)var h=0;
          else{
            var y=o.suspendedLanes,
            S=o.pingedLanes;
            h=(1<<31-Vt(42|t)+1)-1,
            h&=u&~(y&~S),
            h=h&201326741?h&201326741|1:h?h|2:0}
          h!==0&&(i=!0,
          Q0(o,
          h))}
        else h=Te,
        h=wo(o,
        o===Ke?h:0,
        o.cancelPendingCommit!==null||o.timeoutHandle!==-1),
        (h&3)===0||Ui(o,
        h)||(i=!0,
        Q0(o,
        h));
        o=o.next}
      while(i);
      Kd=!1}
    }
  function _S(){
    $0()}
  function $0(){
    xl=Wd=!1;
    var t=0;
    Ba!==0&&jS()&&(t=Ba);
    for(var a=xe(),
    i=null,
    o=gl;
    o!==null;
    ){
      var u=o.next,
      h=F0(o,
      a);
      h===0?(o.next=null,
      i===null?gl=u:i.next=u,
      u===null&&(ui=i)):(i=o,
      (t!==0||(h&3)!==0)&&(xl=!0)),
      o=u}
    mt!==0&&mt!==5||ws(t),
    Ba!==0&&(Ba=0)}
  function F0(t,
  a){
    for(var i=t.suspendedLanes,
    o=t.pingedLanes,
    u=t.expirationTimes,
    h=t.pendingLanes&-62914561;
    0<h;
    ){
      var y=31-Vt(h),
      S=1<<y,
      T=u[y];
      T===-1?((S&i)===0||(S&o)!==0)&&(u[y]=$1(S,
      a)):T<=a&&(t.expiredLanes|=S),
      h&=~S}
    if(a=Ke,
    i=Te,
    i=wo(t,
    t===a?i:0,
    t.cancelPendingCommit!==null||t.timeoutHandle!==-1),
    o=t.callbackNode,
    i===0||t===a&&(Pe===2||Pe===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&Bt(o),
    t.callbackNode=null,
    t.callbackPriority=0;
    if((i&3)===0||Ui(t,
    i)){
      if(a=i&-i,
      a===t.callbackPriority)return a;
      switch(o!==null&&Bt(o),
      cu(i)){
        case 2:case 8:i=Im;
        break;
        case 32:i=xo;
        break;
        case 268435456:i=Ym;
        break;
        default:i=xo}
      return o=J0.bind(null,
      t),
      i=Ne(i,
      o),
      t.callbackPriority=a,
      t.callbackNode=i,
      a}
    return o!==null&&o!==null&&Bt(o),
    t.callbackPriority=2,
    t.callbackNode=null,
    2}
  function J0(t,
  a){
    if(mt!==0&&mt!==5)return t.callbackNode=null,
    t.callbackPriority=0,
    null;
    var i=t.callbackNode;
    if(pl()&&t.callbackNode!==i)return null;
    var o=Te;
    return o=wo(t,
    t===Ke?o:0,
    t.cancelPendingCommit!==null||t.timeoutHandle!==-1),
    o===0?null:(N0(t,
    o,
    a),
    F0(t,
    xe()),
    t.callbackNode!=null&&t.callbackNode===i?J0.bind(null,
    t):null)}
  function Q0(t,
  a){
    if(pl())return null;
    N0(t,
    a,
    !0)}
  function CS(){
    RS(function(){
      (Ie&6)!==0?Ne(Um,
      _S):$0()}
    )}
  function Xd(){
    if(Ba===0){
      var t=Xr;
      t===0&&(t=yo,
      yo<<=1,
      (yo&261888)===0&&(yo=256)),
      Ba=t}
    return Ba}
  function ex(t){
    return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Lo(""+t)}
  function tx(t,
  a){
    var i=a.ownerDocument.createElement("input");
    return i.name=a.name,
    i.value=a.value,
    t.id&&i.setAttribute("form",
    t.id),
    a.parentNode.insertBefore(i,
    a),
    t=new FormData(t),
    i.parentNode.removeChild(i),
    t}
  function LS(t,
  a,
  i,
  o,
  u){
    if(a==="submit"&&i&&i.stateNode===u){
      var h=ex((u[kt]||null).action),
      y=o.submitter;
      y&&(a=(a=y[kt]||null)?ex(a.formAction):y.getAttribute("formAction"),
      a!==null&&(h=a,
      y=null));
      var S=new Mo("action",
      "action",
      null,
      o,
      u);
      t.push({
        event:S,
        listeners:[{
          instance:null,
          listener:function(){
            if(o.defaultPrevented){
              if(Ba!==0){
                var T=y?tx(u,
                y):new FormData(u);
                pd(i,
                {
                  pending:!0,
                  data:T,
                  method:u.method,
                  action:h}
                ,
                null,
                T)}
              }
            else typeof h=="function"&&(S.preventDefault(),
            T=y?tx(u,
            y):new FormData(u),
            pd(i,
            {
              pending:!0,
              data:T,
              method:u.method,
              action:h}
            ,
            h,
            T))}
          ,
          currentTarget:u}
        ]}
      )}
    }
  for(var $d=0;
  $d<Au.length;
  $d++){
    var Fd=Au[$d],
    zS=Fd.toLowerCase(),
    ES=Fd[0].toUpperCase()+Fd.slice(1);
    gn(zS,
    "on"+ES)}
  gn(Ap,
  "onAnimationEnd"),
  gn(Np,
  "onAnimationIteration"),
  gn(jp,
  "onAnimationStart"),
  gn("dblclick",
  "onDoubleClick"),
  gn("focusin",
  "onFocus"),
  gn("focusout",
  "onBlur"),
  gn(Pw,
  "onTransitionRun"),
  gn(qw,
  "onTransitionStart"),
  gn(Vw,
  "onTransitionCancel"),
  gn(kp,
  "onTransitionEnd"),
  kr("onMouseEnter",
  ["mouseout",
  "mouseover"]),
  kr("onMouseLeave",
  ["mouseout",
  "mouseover"]),
  kr("onPointerEnter",
  ["pointerout",
  "pointerover"]),
  kr("onPointerLeave",
  ["pointerout",
  "pointerover"]),
  er("onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")),
  er("onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),
  er("onBeforeInput",
  ["compositionend",
  "keypress",
  "textInput",
  "paste"]),
  er("onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")),
  er("onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")),
  er("onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var Ss="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
  TS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ss));
  function nx(t,
  a){
    a=(a&4)!==0;
    for(var i=0;
    i<t.length;
    i++){
      var o=t[i],
      u=o.event;
      o=o.listeners;
      e:{
        var h=void 0;
        if(a)for(var y=o.length-1;
        0<=y;
        y--){
          var S=o[y],
          T=S.instance,
          H=S.currentTarget;
          if(S=S.listener,
          T!==h&&u.isPropagationStopped())break e;
          h=S,
          u.currentTarget=H;
          try{
            h(u)}
          catch(W){
            Ao(W)}
          u.currentTarget=null,
          h=T}
        else for(y=0;
        y<o.length;
        y++){
          if(S=o[y],
          T=S.instance,
          H=S.currentTarget,
          S=S.listener,
          T!==h&&u.isPropagationStopped())break e;
          h=S,
          u.currentTarget=H;
          try{
            h(u)}
          catch(W){
            Ao(W)}
          u.currentTarget=null,
          h=T}
        }
      }
    }
  function ze(t,
  a){
    var i=a[uu];
    i===void 0&&(i=a[uu]=new Set);
    var o=t+"__bubble";
    i.has(o)||(ax(a,
    t,
    2,
    !1),
    i.add(o))}
  function Jd(t,
  a,
  i){
    var o=0;
    a&&(o|=4),
    ax(i,
    t,
    o,
    a)}
  var yl="_reactListening"+Math.random().toString(36).slice(2);
  function Qd(t){
    if(!t[yl]){
      t[yl]=!0,
      $m.forEach(function(i){
        i!=="selectionchange"&&(TS.has(i)||Jd(i,
        !1,
        t),
        Jd(i,
        !0,
        t))}
      );
      var a=t.nodeType===9?t:t.ownerDocument;
      a===null||a[yl]||(a[yl]=!0,
      Jd("selectionchange",
      !1,
      a))}
    }
  function ax(t,
  a,
  i,
  o){
    switch(Ax(a)){
      case 2:var u=n_;
      break;
      case 8:u=a_;
      break;
      default:u=pf}
    i=u.bind(null,
    a,
    i,
    t),
    u=void 0,
    !bu||a!=="touchstart"&&a!=="touchmove"&&a!=="wheel"||(u=!0),
    o?u!==void 0?t.addEventListener(a,
    i,
    {
      capture:!0,
      passive:u}
    ):t.addEventListener(a,
    i,
    !0):u!==void 0?t.addEventListener(a,
    i,
    {
      passive:u}
    ):t.addEventListener(a,
    i,
    !1)}
  function ef(t,
  a,
  i,
  o,
  u){
    var h=o;
    if((a&1)===0&&(a&2)===0&&o!==null)e:for(;
    ;
    ){
      if(o===null)return;
      var y=o.tag;
      if(y===3||y===4){
        var S=o.stateNode.containerInfo;
        if(S===u)break;
        if(y===4)for(y=o.return;
        y!==null;
        ){
          var T=y.tag;
          if((T===3||T===4)&&y.stateNode.containerInfo===u)return;
          y=y.return}
        for(;
        S!==null;
        ){
          if(y=Ar(S),
          y===null)return;
          if(T=y.tag,
          T===5||T===6||T===26||T===27){
            o=h=y;
            continue e}
          S=S.parentNode}
        }
      o=o.return}
    lp(function(){
      var H=h,
      W=xu(i),
      X=[];
      e:{
        var O=Rp.get(t);
        if(O!==void 0){
          var P=Mo,
          ae=t;
          switch(t){
            case"keypress":if(Eo(i)===0)break e;
            case"keydown":case"keyup":P=ww;
            break;
            case"focusin":ae="focus",
            P=_u;
            break;
            case"focusout":ae="blur",
            P=_u;
            break;
            case"beforeblur":case"afterblur":P=_u;
            break;
            case"click":if(i.button===2)break e;
            case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":P=dp;
            break;
            case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":P=cw;
            break;
            case"touchcancel":case"touchend":case"touchmove":case"touchstart":P=Cw;
            break;
            case Ap:case Np:case jp:P=fw;
            break;
            case kp:P=zw;
            break;
            case"scroll":case"scrollend":P=ow;
            break;
            case"wheel":P=Tw;
            break;
            case"copy":case"cut":case"paste":P=mw;
            break;
            case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":P=hp;
            break;
            case"toggle":case"beforetoggle":P=Bw}
          var ue=(a&4)!==0,
          We=!ue&&(t==="scroll"||t==="scrollend"),
          N=ue?O!==null?O+"Capture":null:O;
          ue=[];
          for(var B=H,
          G;
          B!==null;
          ){
            var K=B;
            if(G=K.stateNode,
            K=K.tag,
            K!==5&&K!==26&&K!==27||G===null||N===null||(K=qi(B,
            N),
            K!=null&&ue.push(_s(B,
            K,
            G))),
            We)break;
            B=B.return}
          0<ue.length&&(O=new P(O,
          ae,
          null,
          i,
          W),
          X.push({
            event:O,
            listeners:ue}
          ))}
        }
      if((a&7)===0){
        e:{
          if(O=t==="mouseover"||t==="pointerover",
          P=t==="mouseout"||t==="pointerout",
          O&&i!==gu&&(ae=i.relatedTarget||i.fromElement)&&(Ar(ae)||ae[Dr]))break e;
          if((P||O)&&(O=W.window===W?W:(O=W.ownerDocument)?O.defaultView||O.parentWindow:window,
          P?(ae=i.relatedTarget||i.toElement,
          P=H,
          ae=ae?Ar(ae):null,
          ae!==null&&(We=c(ae),
          ue=ae.tag,
          ae!==We||ue!==5&&ue!==27&&ue!==6)&&(ae=null)):(P=null,
          ae=H),
          P!==ae)){
            if(ue=dp,
            K="onMouseLeave",
            N="onMouseEnter",
            B="mouse",
            (t==="pointerout"||t==="pointerover")&&(ue=hp,
            K="onPointerLeave",
            N="onPointerEnter",
            B="pointer"),
            We=P==null?O:Pi(P),
            G=ae==null?O:Pi(ae),
            O=new ue(K,
            B+"leave",
            P,
            i,
            W),
            O.target=We,
            O.relatedTarget=G,
            K=null,
            Ar(W)===H&&(ue=new ue(N,
            B+"enter",
            ae,
            i,
            W),
            ue.target=G,
            ue.relatedTarget=We,
            K=ue),
            We=K,
            P&&ae)t:{
              for(ue=MS,
              N=P,
              B=ae,
              G=0,
              K=N;
              K;
              K=ue(K))G++;
              K=0;
              for(var le=B;
              le;
              le=ue(le))K++;
              for(;
              0<G-K;
              )N=ue(N),
              G--;
              for(;
              0<K-G;
              )B=ue(B),
              K--;
              for(;
              G--;
              ){
                if(N===B||B!==null&&N===B.alternate){
                  ue=N;
                  break t}
                N=ue(N),
                B=ue(B)}
              ue=null}
            else ue=null;
            P!==null&&rx(X,
            O,
            P,
            ue,
            !1),
            ae!==null&&We!==null&&rx(X,
            We,
            ae,
            ue,
            !0)}
          }
        e:{
          if(O=H?Pi(H):window,
          P=O.nodeName&&O.nodeName.toLowerCase(),
          P==="select"||P==="input"&&O.type==="file")var He=wp;
          else if(bp(O))if(Sp)He=Uw;
          else{
            He=Hw;
            var oe=Gw}
          else P=O.nodeName,
          !P||P.toLowerCase()!=="input"||O.type!=="checkbox"&&O.type!=="radio"?H&&pu(H.elementType)&&(He=wp):He=Ow;
          if(He&&(He=He(t,
          H))){
            vp(X,
            He,
            i,
            W);
            break e}
          oe&&oe(t,
          O,
          H),
          t==="focusout"&&H&&O.type==="number"&&H.memoizedProps.value!=null&&mu(O,
          "number",
          O.value)}
        switch(oe=H?Pi(H):window,
        t){
          case"focusin":(bp(oe)||oe.contentEditable==="true")&&(Ir=oe,
          Mu=H,
          Ji=null);
          break;
          case"focusout":Ji=Mu=Ir=null;
          break;
          case"mousedown":Bu=!0;
          break;
          case"contextmenu":case"mouseup":case"dragend":Bu=!1,
          Bp(X,
          i,
          W);
          break;
          case"selectionchange":if(Yw)break;
          case"keydown":case"keyup":Bp(X,
          i,
          W)}
        var be;
        if(Lu)e:{
          switch(t){
            case"compositionstart":var Me="onCompositionStart";
            break e;
            case"compositionend":Me="onCompositionEnd";
            break e;
            case"compositionupdate":Me="onCompositionUpdate";
            break e}
          Me=void 0}
        else Ur?xp(t,
        i)&&(Me="onCompositionEnd"):t==="keydown"&&i.keyCode===229&&(Me="onCompositionStart");
        Me&&(mp&&i.locale!=="ko"&&(Ur||Me!=="onCompositionStart"?Me==="onCompositionEnd"&&Ur&&(be=cp()):(ma=W,
        vu="value"in ma?ma.value:ma.textContent,
        Ur=!0)),
        oe=bl(H,
        Me),
        0<oe.length&&(Me=new fp(Me,
        t,
        null,
        i,
        W),
        X.push({
          event:Me,
          listeners:oe}
        ),
        be?Me.data=be:(be=yp(i),
        be!==null&&(Me.data=be)))),
        (be=Aw?Nw(t,
        i):jw(t,
        i))&&(Me=bl(H,
        "onBeforeInput"),
        0<Me.length&&(oe=new fp("onBeforeInput",
        "beforeinput",
        null,
        i,
        W),
        X.push({
          event:oe,
          listeners:Me}
        ),
        oe.data=be)),
        LS(X,
        t,
        H,
        i,
        W)}
      nx(X,
      a)}
    )}
  function _s(t,
  a,
  i){
    return{
      instance:t,
      listener:a,
      currentTarget:i}
    }
  function bl(t,
  a){
    for(var i=a+"Capture",
    o=[];
    t!==null;
    ){
      var u=t,
      h=u.stateNode;
      if(u=u.tag,
      u!==5&&u!==26&&u!==27||h===null||(u=qi(t,
      i),
      u!=null&&o.unshift(_s(t,
      u,
      h)),
      u=qi(t,
      a),
      u!=null&&o.push(_s(t,
      u,
      h))),
      t.tag===3)return o;
      t=t.return}
    return[]}
  function MS(t){
    if(t===null)return null;
    do t=t.return;
    while(t&&t.tag!==5&&t.tag!==27);
    return t||null}
  function rx(t,
  a,
  i,
  o,
  u){
    for(var h=a._reactName,
    y=[];
    i!==null&&i!==o;
    ){
      var S=i,
      T=S.alternate,
      H=S.stateNode;
      if(S=S.tag,
      T!==null&&T===o)break;
      S!==5&&S!==26&&S!==27||H===null||(T=H,
      u?(H=qi(i,
      h),
      H!=null&&y.unshift(_s(i,
      H,
      T))):u||(H=qi(i,
      h),
      H!=null&&y.push(_s(i,
      H,
      T)))),
      i=i.return}
    y.length!==0&&t.push({
      event:a,
      listeners:y}
    )}
  var BS=/\r\n?/g,
  DS=/\u0000|\uFFFD/g;
  function ix(t){
    return(typeof t=="string"?t:""+t).replace(BS,
    `
`).replace(DS,
    "")}
  function sx(t,
  a){
    return a=ix(a),
    ix(t)===a}
  function Ze(t,
  a,
  i,
  o,
  u,
  h){
    switch(i){
      case"children":typeof o=="string"?a==="body"||a==="textarea"&&o===""||Gr(t,
      o):(typeof o=="number"||typeof o=="bigint")&&a!=="body"&&Gr(t,
      ""+o);
      break;
      case"className":_o(t,
      "class",
      o);
      break;
      case"tabIndex":_o(t,
      "tabindex",
      o);
      break;
      case"dir":case"role":case"viewBox":case"width":case"height":_o(t,
      i,
      o);
      break;
      case"style":sp(t,
      o,
      h);
      break;
      case"data":if(a!=="object"){
        _o(t,
        "data",
        o);
        break}
      case"src":case"href":if(o===""&&(a!=="a"||i!=="href")){
        t.removeAttribute(i);
        break}
      if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){
        t.removeAttribute(i);
        break}
      o=Lo(""+o),
      t.setAttribute(i,
      o);
      break;
      case"action":case"formAction":if(typeof o=="function"){
        t.setAttribute(i,
        "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
        break}
      else typeof h=="function"&&(i==="formAction"?(a!=="input"&&Ze(t,
      a,
      "name",
      u.name,
      u,
      null),
      Ze(t,
      a,
      "formEncType",
      u.formEncType,
      u,
      null),
      Ze(t,
      a,
      "formMethod",
      u.formMethod,
      u,
      null),
      Ze(t,
      a,
      "formTarget",
      u.formTarget,
      u,
      null)):(Ze(t,
      a,
      "encType",
      u.encType,
      u,
      null),
      Ze(t,
      a,
      "method",
      u.method,
      u,
      null),
      Ze(t,
      a,
      "target",
      u.target,
      u,
      null)));
      if(o==null||typeof o=="symbol"||typeof o=="boolean"){
        t.removeAttribute(i);
        break}
      o=Lo(""+o),
      t.setAttribute(i,
      o);
      break;
      case"onClick":o!=null&&(t.onclick=kn);
      break;
      case"onScroll":o!=null&&ze("scroll",
      t);
      break;
      case"onScrollEnd":o!=null&&ze("scrollend",
      t);
      break;
      case"dangerouslySetInnerHTML":if(o!=null){
        if(typeof o!="object"||!("__html"in o))throw Error(s(61));
        if(i=o.__html,
        i!=null){
          if(u.children!=null)throw Error(s(60));
          t.innerHTML=i}
        }
      break;
      case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";
      break;
      case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";
      break;
      case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;
      case"autoFocus":break;
      case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){
        t.removeAttribute("xlink:href");
        break}
      i=Lo(""+o),
      t.setAttributeNS("http://www.w3.org/1999/xlink",
      "xlink:href",
      i);
      break;
      case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(i,
      ""+o):t.removeAttribute(i);
      break;
      case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(i,
      ""):t.removeAttribute(i);
      break;
      case"capture":case"download":o===!0?t.setAttribute(i,
      ""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(i,
      o):t.removeAttribute(i);
      break;
      case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(i,
      o):t.removeAttribute(i);
      break;
      case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(i):t.setAttribute(i,
      o);
      break;
      case"popover":ze("beforetoggle",
      t),
      ze("toggle",
      t),
      So(t,
      "popover",
      o);
      break;
      case"xlinkActuate":jn(t,
      "http://www.w3.org/1999/xlink",
      "xlink:actuate",
      o);
      break;
      case"xlinkArcrole":jn(t,
      "http://www.w3.org/1999/xlink",
      "xlink:arcrole",
      o);
      break;
      case"xlinkRole":jn(t,
      "http://www.w3.org/1999/xlink",
      "xlink:role",
      o);
      break;
      case"xlinkShow":jn(t,
      "http://www.w3.org/1999/xlink",
      "xlink:show",
      o);
      break;
      case"xlinkTitle":jn(t,
      "http://www.w3.org/1999/xlink",
      "xlink:title",
      o);
      break;
      case"xlinkType":jn(t,
      "http://www.w3.org/1999/xlink",
      "xlink:type",
      o);
      break;
      case"xmlBase":jn(t,
      "http://www.w3.org/XML/1998/namespace",
      "xml:base",
      o);
      break;
      case"xmlLang":jn(t,
      "http://www.w3.org/XML/1998/namespace",
      "xml:lang",
      o);
      break;
      case"xmlSpace":jn(t,
      "http://www.w3.org/XML/1998/namespace",
      "xml:space",
      o);
      break;
      case"is":So(t,
      "is",
      o);
      break;
      case"innerText":case"textContent":break;
      default:(!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(i=iw.get(i)||i,
      So(t,
      i,
      o))}
    }
  function tf(t,
  a,
  i,
  o,
  u,
  h){
    switch(i){
      case"style":sp(t,
      o,
      h);
      break;
      case"dangerouslySetInnerHTML":if(o!=null){
        if(typeof o!="object"||!("__html"in o))throw Error(s(61));
        if(i=o.__html,
        i!=null){
          if(u.children!=null)throw Error(s(60));
          t.innerHTML=i}
        }
      break;
      case"children":typeof o=="string"?Gr(t,
      o):(typeof o=="number"||typeof o=="bigint")&&Gr(t,
      ""+o);
      break;
      case"onScroll":o!=null&&ze("scroll",
      t);
      break;
      case"onScrollEnd":o!=null&&ze("scrollend",
      t);
      break;
      case"onClick":o!=null&&(t.onclick=kn);
      break;
      case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;
      case"innerText":case"textContent":break;
      default:if(!Fm.hasOwnProperty(i))e:{
        if(i[0]==="o"&&i[1]==="n"&&(u=i.endsWith("Capture"),
        a=i.slice(2,
        u?i.length-7:void 0),
        h=t[kt]||null,
        h=h!=null?h[i]:null,
        typeof h=="function"&&t.removeEventListener(a,
        h,
        u),
        typeof o=="function")){
          typeof h!="function"&&h!==null&&(i in t?t[i]=null:t.hasAttribute(i)&&t.removeAttribute(i)),
          t.addEventListener(a,
          o,
          u);
          break e}
        i in t?t[i]=o:o===!0?t.setAttribute(i,
        ""):So(t,
        i,
        o)}
      }
    }
  function Ct(t,
  a,
  i){
    switch(a){
      case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;
      case"img":ze("error",
      t),
      ze("load",
      t);
      var o=!1,
      u=!1,
      h;
      for(h in i)if(i.hasOwnProperty(h)){
        var y=i[h];
        if(y!=null)switch(h){
          case"src":o=!0;
          break;
          case"srcSet":u=!0;
          break;
          case"children":case"dangerouslySetInnerHTML":throw Error(s(137,
          a));
          default:Ze(t,
          a,
          h,
          y,
          i,
          null)}
        }
      u&&Ze(t,
      a,
      "srcSet",
      i.srcSet,
      i,
      null),
      o&&Ze(t,
      a,
      "src",
      i.src,
      i,
      null);
      return;
      case"input":ze("invalid",
      t);
      var S=h=y=u=null,
      T=null,
      H=null;
      for(o in i)if(i.hasOwnProperty(o)){
        var W=i[o];
        if(W!=null)switch(o){
          case"name":u=W;
          break;
          case"type":y=W;
          break;
          case"checked":T=W;
          break;
          case"defaultChecked":H=W;
          break;
          case"value":h=W;
          break;
          case"defaultValue":S=W;
          break;
          case"children":case"dangerouslySetInnerHTML":if(W!=null)throw Error(s(137,
          a));
          break;
          default:Ze(t,
          a,
          o,
          W,
          i,
          null)}
        }
      np(t,
      h,
      S,
      T,
      H,
      y,
      u,
      !1);
      return;
      case"select":ze("invalid",
      t),
      o=y=h=null;
      for(u in i)if(i.hasOwnProperty(u)&&(S=i[u],
      S!=null))switch(u){
        case"value":h=S;
        break;
        case"defaultValue":y=S;
        break;
        case"multiple":o=S;
        default:Ze(t,
        a,
        u,
        S,
        i,
        null)}
      a=h,
      i=y,
      t.multiple=!!o,
      a!=null?Rr(t,
      !!o,
      a,
      !1):i!=null&&Rr(t,
      !!o,
      i,
      !0);
      return;
      case"textarea":ze("invalid",
      t),
      h=u=o=null;
      for(y in i)if(i.hasOwnProperty(y)&&(S=i[y],
      S!=null))switch(y){
        case"value":o=S;
        break;
        case"defaultValue":u=S;
        break;
        case"children":h=S;
        break;
        case"dangerouslySetInnerHTML":if(S!=null)throw Error(s(91));
        break;
        default:Ze(t,
        a,
        y,
        S,
        i,
        null)}
      rp(t,
      o,
      u,
      h);
      return;
      case"option":for(T in i)if(i.hasOwnProperty(T)&&(o=i[T],
      o!=null))switch(T){
        case"selected":t.selected=o&&typeof o!="function"&&typeof o!="symbol";
        break;
        default:Ze(t,
        a,
        T,
        o,
        i,
        null)}
      return;
      case"dialog":ze("beforetoggle",
      t),
      ze("toggle",
      t),
      ze("cancel",
      t),
      ze("close",
      t);
      break;
      case"iframe":case"object":ze("load",
      t);
      break;
      case"video":case"audio":for(o=0;
      o<Ss.length;
      o++)ze(Ss[o],
      t);
      break;
      case"image":ze("error",
      t),
      ze("load",
      t);
      break;
      case"details":ze("toggle",
      t);
      break;
      case"embed":case"source":case"link":ze("error",
      t),
      ze("load",
      t);
      case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(H in i)if(i.hasOwnProperty(H)&&(o=i[H],
      o!=null))switch(H){
        case"children":case"dangerouslySetInnerHTML":throw Error(s(137,
        a));
        default:Ze(t,
        a,
        H,
        o,
        i,
        null)}
      return;
      default:if(pu(a)){
        for(W in i)i.hasOwnProperty(W)&&(o=i[W],
        o!==void 0&&tf(t,
        a,
        W,
        o,
        i,
        void 0));
        return}
      }
    for(S in i)i.hasOwnProperty(S)&&(o=i[S],
    o!=null&&Ze(t,
    a,
    S,
    o,
    i,
    null))}
  function AS(t,
  a,
  i,
  o){
    switch(a){
      case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;
      case"input":var u=null,
      h=null,
      y=null,
      S=null,
      T=null,
      H=null,
      W=null;
      for(P in i){
        var X=i[P];
        if(i.hasOwnProperty(P)&&X!=null)switch(P){
          case"checked":break;
          case"value":break;
          case"defaultValue":T=X;
          default:o.hasOwnProperty(P)||Ze(t,
          a,
          P,
          null,
          o,
          X)}
        }
      for(var O in o){
        var P=o[O];
        if(X=i[O],
        o.hasOwnProperty(O)&&(P!=null||X!=null))switch(O){
          case"type":h=P;
          break;
          case"name":u=P;
          break;
          case"checked":H=P;
          break;
          case"defaultChecked":W=P;
          break;
          case"value":y=P;
          break;
          case"defaultValue":S=P;
          break;
          case"children":case"dangerouslySetInnerHTML":if(P!=null)throw Error(s(137,
          a));
          break;
          default:P!==X&&Ze(t,
          a,
          O,
          P,
          o,
          X)}
        }
      hu(t,
      y,
      S,
      T,
      H,
      W,
      h,
      u);
      return;
      case"select":P=y=S=O=null;
      for(h in i)if(T=i[h],
      i.hasOwnProperty(h)&&T!=null)switch(h){
        case"value":break;
        case"multiple":P=T;
        default:o.hasOwnProperty(h)||Ze(t,
        a,
        h,
        null,
        o,
        T)}
      for(u in o)if(h=o[u],
      T=i[u],
      o.hasOwnProperty(u)&&(h!=null||T!=null))switch(u){
        case"value":O=h;
        break;
        case"defaultValue":S=h;
        break;
        case"multiple":y=h;
        default:h!==T&&Ze(t,
        a,
        u,
        h,
        o,
        T)}
      a=S,
      i=y,
      o=P,
      O!=null?Rr(t,
      !!i,
      O,
      !1):!!o!=!!i&&(a!=null?Rr(t,
      !!i,
      a,
      !0):Rr(t,
      !!i,
      i?[]:"",
      !1));
      return;
      case"textarea":P=O=null;
      for(S in i)if(u=i[S],
      i.hasOwnProperty(S)&&u!=null&&!o.hasOwnProperty(S))switch(S){
        case"value":break;
        case"children":break;
        default:Ze(t,
        a,
        S,
        null,
        o,
        u)}
      for(y in o)if(u=o[y],
      h=i[y],
      o.hasOwnProperty(y)&&(u!=null||h!=null))switch(y){
        case"value":O=u;
        break;
        case"defaultValue":P=u;
        break;
        case"children":break;
        case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));
        break;
        default:u!==h&&Ze(t,
        a,
        y,
        u,
        o,
        h)}
      ap(t,
      O,
      P);
      return;
      case"option":for(var ae in i)if(O=i[ae],
      i.hasOwnProperty(ae)&&O!=null&&!o.hasOwnProperty(ae))switch(ae){
        case"selected":t.selected=!1;
        break;
        default:Ze(t,
        a,
        ae,
        null,
        o,
        O)}
      for(T in o)if(O=o[T],
      P=i[T],
      o.hasOwnProperty(T)&&O!==P&&(O!=null||P!=null))switch(T){
        case"selected":t.selected=O&&typeof O!="function"&&typeof O!="symbol";
        break;
        default:Ze(t,
        a,
        T,
        O,
        o,
        P)}
      return;
      case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ue in i)O=i[ue],
      i.hasOwnProperty(ue)&&O!=null&&!o.hasOwnProperty(ue)&&Ze(t,
      a,
      ue,
      null,
      o,
      O);
      for(H in o)if(O=o[H],
      P=i[H],
      o.hasOwnProperty(H)&&O!==P&&(O!=null||P!=null))switch(H){
        case"children":case"dangerouslySetInnerHTML":if(O!=null)throw Error(s(137,
        a));
        break;
        default:Ze(t,
        a,
        H,
        O,
        o,
        P)}
      return;
      default:if(pu(a)){
        for(var We in i)O=i[We],
        i.hasOwnProperty(We)&&O!==void 0&&!o.hasOwnProperty(We)&&tf(t,
        a,
        We,
        void 0,
        o,
        O);
        for(W in o)O=o[W],
        P=i[W],
        !o.hasOwnProperty(W)||O===P||O===void 0&&P===void 0||tf(t,
        a,
        W,
        O,
        o,
        P);
        return}
      }
    for(var N in i)O=i[N],
    i.hasOwnProperty(N)&&O!=null&&!o.hasOwnProperty(N)&&Ze(t,
    a,
    N,
    null,
    o,
    O);
    for(X in o)O=o[X],
    P=i[X],
    !o.hasOwnProperty(X)||O===P||O==null&&P==null||Ze(t,
    a,
    X,
    O,
    o,
    P)}
  function ox(t){
    switch(t){
      case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;
      default:return!1}
    }
  function NS(){
    if(typeof performance.getEntriesByType=="function"){
      for(var t=0,
      a=0,
      i=performance.getEntriesByType("resource"),
      o=0;
      o<i.length;
      o++){
        var u=i[o],
        h=u.transferSize,
        y=u.initiatorType,
        S=u.duration;
        if(h&&S&&ox(y)){
          for(y=0,
          S=u.responseEnd,
          o+=1;
          o<i.length;
          o++){
            var T=i[o],
            H=T.startTime;
            if(H>S)break;
            var W=T.transferSize,
            X=T.initiatorType;
            W&&ox(X)&&(T=T.responseEnd,
            y+=W*(T<S?1:(S-H)/(T-H)))}
          if(--o,
          a+=8*(h+y)/(u.duration/1e3),
          t++,
          10<t)break}
        }
      if(0<t)return a/t/1e6}
    return navigator.connection&&(t=navigator.connection.downlink,
    typeof t=="number")?t:5}
  var nf=null,
  af=null;
  function vl(t){
    return t.nodeType===9?t:t.ownerDocument}
  function lx(t){
    switch(t){
      case"http://www.w3.org/2000/svg":return 1;
      case"http://www.w3.org/1998/Math/MathML":return 2;
      default:return 0}
    }
  function cx(t,
  a){
    if(t===0)switch(a){
      case"svg":return 1;
      case"math":return 2;
      default:return 0}
    return t===1&&a==="foreignObject"?0:t}
  function rf(t,
  a){
    return t==="textarea"||t==="noscript"||typeof a.children=="string"||typeof a.children=="number"||typeof a.children=="bigint"||typeof a.dangerouslySetInnerHTML=="object"&&a.dangerouslySetInnerHTML!==null&&a.dangerouslySetInnerHTML.__html!=null}
  var sf=null;
  function jS(){
    var t=window.event;
    return t&&t.type==="popstate"?t===sf?!1:(sf=t,
    !0):(sf=null,
    !1)}
  var ux=typeof setTimeout=="function"?setTimeout:void 0,
  kS=typeof clearTimeout=="function"?clearTimeout:void 0,
  dx=typeof Promise=="function"?Promise:void 0,
  RS=typeof queueMicrotask=="function"?queueMicrotask:typeof dx<"u"?function(t){
    return dx.resolve(null).then(t).catch(GS)}
  :ux;
  function GS(t){
    setTimeout(function(){
      throw t}
    )}
  function Da(t){
    return t==="head"}
  function fx(t,
  a){
    var i=a,
    o=0;
    do{
      var u=i.nextSibling;
      if(t.removeChild(i),
      u&&u.nodeType===8)if(i=u.data,
      i==="/$"||i==="/&"){
        if(o===0){
          t.removeChild(u),
          mi(a);
          return}
        o--}
      else if(i==="$"||i==="$?"||i==="$~"||i==="$!"||i==="&")o++;
      else if(i==="html")Cs(t.ownerDocument.documentElement);
      else if(i==="head"){
        i=t.ownerDocument.head,
        Cs(i);
        for(var h=i.firstChild;
        h;
        ){
          var y=h.nextSibling,
          S=h.nodeName;
          h[Yi]||S==="SCRIPT"||S==="STYLE"||S==="LINK"&&h.rel.toLowerCase()==="stylesheet"||i.removeChild(h),
          h=y}
        }
      else i==="body"&&Cs(t.ownerDocument.body);
      i=u}
    while(i);
    mi(a)}
  function hx(t,
  a){
    var i=t;
    t=0;
    do{
      var o=i.nextSibling;
      if(i.nodeType===1?a?(i._stashedDisplay=i.style.display,
      i.style.display="none"):(i.style.display=i._stashedDisplay||"",
      i.getAttribute("style")===""&&i.removeAttribute("style")):i.nodeType===3&&(a?(i._stashedText=i.nodeValue,
      i.nodeValue=""):i.nodeValue=i._stashedText||""),
      o&&o.nodeType===8)if(i=o.data,
      i==="/$"){
        if(t===0)break;
        t--}
      else i!=="$"&&i!=="$?"&&i!=="$~"&&i!=="$!"||t++;
      i=o}
    while(i)}
  function of(t){
    var a=t.firstChild;
    for(a&&a.nodeType===10&&(a=a.nextSibling);
    a;
    ){
      var i=a;
      switch(a=a.nextSibling,
      i.nodeName){
        case"HTML":case"HEAD":case"BODY":of(i),
        du(i);
        continue;
        case"SCRIPT":case"STYLE":continue;
        case"LINK":if(i.rel.toLowerCase()==="stylesheet")continue}
      t.removeChild(i)}
    }
  function HS(t,
  a,
  i,
  o){
    for(;
    t.nodeType===1;
    ){
      var u=i;
      if(t.nodeName.toLowerCase()!==a.toLowerCase()){
        if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}
      else if(o){
        if(!t[Yi])switch(a){
          case"meta":if(!t.hasAttribute("itemprop"))break;
          return t;
          case"link":if(h=t.getAttribute("rel"),
          h==="stylesheet"&&t.hasAttribute("data-precedence"))break;
          if(h!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;
          return t;
          case"style":if(t.hasAttribute("data-precedence"))break;
          return t;
          case"script":if(h=t.getAttribute("src"),
          (h!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&h&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;
          return t;
          default:return t}
        }
      else if(a==="input"&&t.type==="hidden"){
        var h=u.name==null?null:""+u.name;
        if(u.type==="hidden"&&t.getAttribute("name")===h)return t}
      else return t;
      if(t=un(t.nextSibling),
      t===null)break}
    return null}
  function OS(t,
  a,
  i){
    if(a==="")return null;
    for(;
    t.nodeType!==3;
    )if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!i||(t=un(t.nextSibling),
    t===null))return null;
    return t}
  function mx(t,
  a){
    for(;
    t.nodeType!==8;
    )if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=un(t.nextSibling),
    t===null))return null;
    return t}
  function lf(t){
    return t.data==="$?"||t.data==="$~"}
  function cf(t){
    return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}
  function US(t,
  a){
    var i=t.ownerDocument;
    if(t.data==="$~")t._reactRetry=a;
    else if(t.data!=="$?"||i.readyState!=="loading")a();
    else{
      var o=function(){
        a(),
        i.removeEventListener("DOMContentLoaded",
        o)}
      ;
      i.addEventListener("DOMContentLoaded",
      o),
      t._reactRetry=o}
    }
  function un(t){
    for(;
    t!=null;
    t=t.nextSibling){
      var a=t.nodeType;
      if(a===1||a===3)break;
      if(a===8){
        if(a=t.data,
        a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"||a==="F!"||a==="F")break;
        if(a==="/$"||a==="/&")return null}
      }
    return t}
  var uf=null;
  function px(t){
    t=t.nextSibling;
    for(var a=0;
    t;
    ){
      if(t.nodeType===8){
        var i=t.data;
        if(i==="/$"||i==="/&"){
          if(a===0)return un(t.nextSibling);
          a--}
        else i!=="$"&&i!=="$!"&&i!=="$?"&&i!=="$~"&&i!=="&"||a++}
      t=t.nextSibling}
    return null}
  function gx(t){
    t=t.previousSibling;
    for(var a=0;
    t;
    ){
      if(t.nodeType===8){
        var i=t.data;
        if(i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"){
          if(a===0)return t;
          a--}
        else i!=="/$"&&i!=="/&"||a++}
      t=t.previousSibling}
    return null}
  function xx(t,
  a,
  i){
    switch(a=vl(i),
    t){
      case"html":if(t=a.documentElement,
      !t)throw Error(s(452));
      return t;
      case"head":if(t=a.head,
      !t)throw Error(s(453));
      return t;
      case"body":if(t=a.body,
      !t)throw Error(s(454));
      return t;
      default:throw Error(s(451))}
    }
  function Cs(t){
    for(var a=t.attributes;
    a.length;
    )t.removeAttributeNode(a[0]);
    du(t)}
  var dn=new Map,
  yx=new Set;
  function wl(t){
    return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}
  var Fn=Y.d;
  Y.d={
    f:IS,
    r:YS,
    D:PS,
    C:qS,
    L:VS,
    m:ZS,
    X:KS,
    S:WS,
    M:XS}
  ;
  function IS(){
    var t=Fn.f(),
    a=fl();
    return t||a}
  function YS(t){
    var a=Nr(t);
    a!==null&&a.tag===5&&a.type==="form"?kg(a):Fn.r(t)}
  var di=typeof document>"u"?null:document;
  function bx(t,
  a,
  i){
    var o=di;
    if(o&&typeof a=="string"&&a){
      var u=nn(a);
      u='link[rel="'+t+'"][href="'+u+'"]',
      typeof i=="string"&&(u+='[crossorigin="'+i+'"]'),
      yx.has(u)||(yx.add(u),
      t={
        rel:t,
        crossOrigin:i,
        href:a}
      ,
      o.querySelector(u)===null&&(a=o.createElement("link"),
      Ct(a,
      "link",
      t),
      gt(a),
      o.head.appendChild(a)))}
    }
  function PS(t){
    Fn.D(t),
    bx("dns-prefetch",
    t,
    null)}
  function qS(t,
  a){
    Fn.C(t,
    a),
    bx("preconnect",
    t,
    a)}
  function VS(t,
  a,
  i){
    Fn.L(t,
    a,
    i);
    var o=di;
    if(o&&t&&a){
      var u='link[rel="preload"][as="'+nn(a)+'"]';
      a==="image"&&i&&i.imageSrcSet?(u+='[imagesrcset="'+nn(i.imageSrcSet)+'"]',
      typeof i.imageSizes=="string"&&(u+='[imagesizes="'+nn(i.imageSizes)+'"]')):u+='[href="'+nn(t)+'"]';
      var h=u;
      switch(a){
        case"style":h=fi(t);
        break;
        case"script":h=hi(t)}
      dn.has(h)||(t=v({
        rel:"preload",
        href:a==="image"&&i&&i.imageSrcSet?void 0:t,
        as:a}
      ,
      i),
      dn.set(h,
      t),
      o.querySelector(u)!==null||a==="style"&&o.querySelector(Ls(h))||a==="script"&&o.querySelector(zs(h))||(a=o.createElement("link"),
      Ct(a,
      "link",
      t),
      gt(a),
      o.head.appendChild(a)))}
    }
  function ZS(t,
  a){
    Fn.m(t,
    a);
    var i=di;
    if(i&&t){
      var o=a&&typeof a.as=="string"?a.as:"script",
      u='link[rel="modulepreload"][as="'+nn(o)+'"][href="'+nn(t)+'"]',
      h=u;
      switch(o){
        case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":h=hi(t)}
      if(!dn.has(h)&&(t=v({
        rel:"modulepreload",
        href:t}
      ,
      a),
      dn.set(h,
      t),
      i.querySelector(u)===null)){
        switch(o){
          case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(i.querySelector(zs(h)))return}
        o=i.createElement("link"),
        Ct(o,
        "link",
        t),
        gt(o),
        i.head.appendChild(o)}
      }
    }
  function WS(t,
  a,
  i){
    Fn.S(t,
    a,
    i);
    var o=di;
    if(o&&t){
      var u=jr(o).hoistableStyles,
      h=fi(t);
      a=a||"default";
      var y=u.get(h);
      if(!y){
        var S={
          loading:0,
          preload:null}
        ;
        if(y=o.querySelector(Ls(h)))S.loading=5;
        else{
          t=v({
            rel:"stylesheet",
            href:t,
            "data-precedence":a}
          ,
          i),
          (i=dn.get(h))&&df(t,
          i);
          var T=y=o.createElement("link");
          gt(T),
          Ct(T,
          "link",
          t),
          T._p=new Promise(function(H,
          W){
            T.onload=H,
            T.onerror=W}
          ),
          T.addEventListener("load",
          function(){
            S.loading|=1}
          ),
          T.addEventListener("error",
          function(){
            S.loading|=2}
          ),
          S.loading|=4,
          Sl(y,
          a,
          o)}
        y={
          type:"stylesheet",
          instance:y,
          count:1,
          state:S}
        ,
        u.set(h,
        y)}
      }
    }
  function KS(t,
  a){
    Fn.X(t,
    a);
    var i=di;
    if(i&&t){
      var o=jr(i).hoistableScripts,
      u=hi(t),
      h=o.get(u);
      h||(h=i.querySelector(zs(u)),
      h||(t=v({
        src:t,
        async:!0}
      ,
      a),
      (a=dn.get(u))&&ff(t,
      a),
      h=i.createElement("script"),
      gt(h),
      Ct(h,
      "link",
      t),
      i.head.appendChild(h)),
      h={
        type:"script",
        instance:h,
        count:1,
        state:null}
      ,
      o.set(u,
      h))}
    }
  function XS(t,
  a){
    Fn.M(t,
    a);
    var i=di;
    if(i&&t){
      var o=jr(i).hoistableScripts,
      u=hi(t),
      h=o.get(u);
      h||(h=i.querySelector(zs(u)),
      h||(t=v({
        src:t,
        async:!0,
        type:"module"}
      ,
      a),
      (a=dn.get(u))&&ff(t,
      a),
      h=i.createElement("script"),
      gt(h),
      Ct(h,
      "link",
      t),
      i.head.appendChild(h)),
      h={
        type:"script",
        instance:h,
        count:1,
        state:null}
      ,
      o.set(u,
      h))}
    }
  function vx(t,
  a,
  i,
  o){
    var u=(u=fe.current)?wl(u):null;
    if(!u)throw Error(s(446));
    switch(t){
      case"meta":case"title":return null;
      case"style":return typeof i.precedence=="string"&&typeof i.href=="string"?(a=fi(i.href),
      i=jr(u).hoistableStyles,
      o=i.get(a),
      o||(o={
        type:"style",
        instance:null,
        count:0,
        state:null}
      ,
      i.set(a,
      o)),
      o):{
        type:"void",
        instance:null,
        count:0,
        state:null}
      ;
      case"link":if(i.rel==="stylesheet"&&typeof i.href=="string"&&typeof i.precedence=="string"){
        t=fi(i.href);
        var h=jr(u).hoistableStyles,
        y=h.get(t);
        if(y||(u=u.ownerDocument||u,
        y={
          type:"stylesheet",
          instance:null,
          count:0,
          state:{
            loading:0,
            preload:null}
          }
        ,
        h.set(t,
        y),
        (h=u.querySelector(Ls(t)))&&!h._p&&(y.instance=h,
        y.state.loading=5),
        dn.has(t)||(i={
          rel:"preload",
          as:"style",
          href:i.href,
          crossOrigin:i.crossOrigin,
          integrity:i.integrity,
          media:i.media,
          hrefLang:i.hrefLang,
          referrerPolicy:i.referrerPolicy}
        ,
        dn.set(t,
        i),
        h||$S(u,
        t,
        i,
        y.state))),
        a&&o===null)throw Error(s(528,
        ""));
        return y}
      if(a&&o!==null)throw Error(s(529,
      ""));
      return null;
      case"script":return a=i.async,
      i=i.src,
      typeof i=="string"&&a&&typeof a!="function"&&typeof a!="symbol"?(a=hi(i),
      i=jr(u).hoistableScripts,
      o=i.get(a),
      o||(o={
        type:"script",
        instance:null,
        count:0,
        state:null}
      ,
      i.set(a,
      o)),
      o):{
        type:"void",
        instance:null,
        count:0,
        state:null}
      ;
      default:throw Error(s(444,
      t))}
    }
  function fi(t){
    return'href="'+nn(t)+'"'}
  function Ls(t){
    return'link[rel="stylesheet"]['+t+"]"}
  function wx(t){
    return v({
      }
    ,
    t,
    {
      "data-precedence":t.precedence,
      precedence:null}
    )}
  function $S(t,
  a,
  i,
  o){
    t.querySelector('link[rel="preload"][as="style"]['+a+"]")?o.loading=1:(a=t.createElement("link"),
    o.preload=a,
    a.addEventListener("load",
    function(){
      return o.loading|=1}
    ),
    a.addEventListener("error",
    function(){
      return o.loading|=2}
    ),
    Ct(a,
    "link",
    i),
    gt(a),
    t.head.appendChild(a))}
  function hi(t){
    return'[src="'+nn(t)+'"]'}
  function zs(t){
    return"script[async]"+t}
  function Sx(t,
  a,
  i){
    if(a.count++,
    a.instance===null)switch(a.type){
      case"style":var o=t.querySelector('style[data-href~="'+nn(i.href)+'"]');
      if(o)return a.instance=o,
      gt(o),
      o;
      var u=v({
        }
      ,
      i,
      {
        "data-href":i.href,
        "data-precedence":i.precedence,
        href:null,
        precedence:null}
      );
      return o=(t.ownerDocument||t).createElement("style"),
      gt(o),
      Ct(o,
      "style",
      u),
      Sl(o,
      i.precedence,
      t),
      a.instance=o;
      case"stylesheet":u=fi(i.href);
      var h=t.querySelector(Ls(u));
      if(h)return a.state.loading|=4,
      a.instance=h,
      gt(h),
      h;
      o=wx(i),
      (u=dn.get(u))&&df(o,
      u),
      h=(t.ownerDocument||t).createElement("link"),
      gt(h);
      var y=h;
      return y._p=new Promise(function(S,
      T){
        y.onload=S,
        y.onerror=T}
      ),
      Ct(h,
      "link",
      o),
      a.state.loading|=4,
      Sl(h,
      i.precedence,
      t),
      a.instance=h;
      case"script":return h=hi(i.src),
      (u=t.querySelector(zs(h)))?(a.instance=u,
      gt(u),
      u):(o=i,
      (u=dn.get(h))&&(o=v({
        }
      ,
      i),
      ff(o,
      u)),
      t=t.ownerDocument||t,
      u=t.createElement("script"),
      gt(u),
      Ct(u,
      "link",
      o),
      t.head.appendChild(u),
      a.instance=u);
      case"void":return null;
      default:throw Error(s(443,
      a.type))}
    else a.type==="stylesheet"&&(a.state.loading&4)===0&&(o=a.instance,
    a.state.loading|=4,
    Sl(o,
    i.precedence,
    t));
    return a.instance}
  function Sl(t,
  a,
  i){
    for(var o=i.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),
    u=o.length?o[o.length-1]:null,
    h=u,
    y=0;
    y<o.length;
    y++){
      var S=o[y];
      if(S.dataset.precedence===a)h=S;
      else if(h!==u)break}
    h?h.parentNode.insertBefore(t,
    h.nextSibling):(a=i.nodeType===9?i.head:i,
    a.insertBefore(t,
    a.firstChild))}
  function df(t,
  a){
    t.crossOrigin==null&&(t.crossOrigin=a.crossOrigin),
    t.referrerPolicy==null&&(t.referrerPolicy=a.referrerPolicy),
    t.title==null&&(t.title=a.title)}
  function ff(t,
  a){
    t.crossOrigin==null&&(t.crossOrigin=a.crossOrigin),
    t.referrerPolicy==null&&(t.referrerPolicy=a.referrerPolicy),
    t.integrity==null&&(t.integrity=a.integrity)}
  var _l=null;
  function _x(t,
  a,
  i){
    if(_l===null){
      var o=new Map,
      u=_l=new Map;
      u.set(i,
      o)}
    else u=_l,
    o=u.get(i),
    o||(o=new Map,
    u.set(i,
    o));
    if(o.has(t))return o;
    for(o.set(t,
    null),
    i=i.getElementsByTagName(t),
    u=0;
    u<i.length;
    u++){
      var h=i[u];
      if(!(h[Yi]||h[vt]||t==="link"&&h.getAttribute("rel")==="stylesheet")&&h.namespaceURI!=="http://www.w3.org/2000/svg"){
        var y=h.getAttribute(a)||"";
        y=t+y;
        var S=o.get(y);
        S?S.push(h):o.set(y,
        [h])}
      }
    return o}
  function Cx(t,
  a,
  i){
    t=t.ownerDocument||t,
    t.head.insertBefore(i,
    a==="title"?t.querySelector("head > title"):null)}
  function FS(t,
  a,
  i){
    if(i===1||a.itemProp!=null)return!1;
    switch(t){
      case"meta":case"title":return!0;
      case"style":if(typeof a.precedence!="string"||typeof a.href!="string"||a.href==="")break;
      return!0;
      case"link":if(typeof a.rel!="string"||typeof a.href!="string"||a.href===""||a.onLoad||a.onError)break;
      switch(a.rel){
        case"stylesheet":return t=a.disabled,
        typeof a.precedence=="string"&&t==null;
        default:return!0}
      case"script":if(a.async&&typeof a.async!="function"&&typeof a.async!="symbol"&&!a.onLoad&&!a.onError&&a.src&&typeof a.src=="string")return!0}
    return!1}
  function Lx(t){
    return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}
  function JS(t,
  a,
  i,
  o){
    if(i.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(i.state.loading&4)===0){
      if(i.instance===null){
        var u=fi(o.href),
        h=a.querySelector(Ls(u));
        if(h){
          a=h._p,
          a!==null&&typeof a=="object"&&typeof a.then=="function"&&(t.count++,
          t=Cl.bind(t),
          a.then(t,
          t)),
          i.state.loading|=4,
          i.instance=h,
          gt(h);
          return}
        h=a.ownerDocument||a,
        o=wx(o),
        (u=dn.get(u))&&df(o,
        u),
        h=h.createElement("link"),
        gt(h);
        var y=h;
        y._p=new Promise(function(S,
        T){
          y.onload=S,
          y.onerror=T}
        ),
        Ct(h,
        "link",
        o),
        i.instance=h}
      t.stylesheets===null&&(t.stylesheets=new Map),
      t.stylesheets.set(i,
      a),
      (a=i.state.preload)&&(i.state.loading&3)===0&&(t.count++,
      i=Cl.bind(t),
      a.addEventListener("load",
      i),
      a.addEventListener("error",
      i))}
    }
  var hf=0;
  function QS(t,
  a){
    return t.stylesheets&&t.count===0&&zl(t,
    t.stylesheets),
    0<t.count||0<t.imgCount?function(i){
      var o=setTimeout(function(){
        if(t.stylesheets&&zl(t,
        t.stylesheets),
        t.unsuspend){
          var h=t.unsuspend;
          t.unsuspend=null,
          h()}
        }
      ,
      6e4+a);
      0<t.imgBytes&&hf===0&&(hf=62500*NS());
      var u=setTimeout(function(){
        if(t.waitingForImages=!1,
        t.count===0&&(t.stylesheets&&zl(t,
        t.stylesheets),
        t.unsuspend)){
          var h=t.unsuspend;
          t.unsuspend=null,
          h()}
        }
      ,
      (t.imgBytes>hf?50:800)+a);
      return t.unsuspend=i,
      function(){
        t.unsuspend=null,
        clearTimeout(o),
        clearTimeout(u)}
      }
    :null}
  function Cl(){
    if(this.count--,
    this.count===0&&(this.imgCount===0||!this.waitingForImages)){
      if(this.stylesheets)zl(this,
      this.stylesheets);
      else if(this.unsuspend){
        var t=this.unsuspend;
        this.unsuspend=null,
        t()}
      }
    }
  var Ll=null;
  function zl(t,
  a){
    t.stylesheets=null,
    t.unsuspend!==null&&(t.count++,
    Ll=new Map,
    a.forEach(e_,
    t),
    Ll=null,
    Cl.call(t))}
  function e_(t,
  a){
    if(!(a.state.loading&4)){
      var i=Ll.get(t);
      if(i)var o=i.get(null);
      else{
        i=new Map,
        Ll.set(t,
        i);
        for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),
        h=0;
        h<u.length;
        h++){
          var y=u[h];
          (y.nodeName==="LINK"||y.getAttribute("media")!=="not all")&&(i.set(y.dataset.precedence,
          y),
          o=y)}
        o&&i.set(null,
        o)}
      u=a.instance,
      y=u.getAttribute("data-precedence"),
      h=i.get(y)||o,
      h===o&&i.set(null,
      u),
      i.set(y,
      u),
      this.count++,
      o=Cl.bind(this),
      u.addEventListener("load",
      o),
      u.addEventListener("error",
      o),
      h?h.parentNode.insertBefore(u,
      h.nextSibling):(t=t.nodeType===9?t.head:t,
      t.insertBefore(u,
      t.firstChild)),
      a.state.loading|=4}
    }
  var Es={
    $$typeof:R,
    Provider:null,
    Consumer:null,
    _currentValue:$,
    _currentValue2:$,
    _threadCount:0}
  ;
  function t_(t,
  a,
  i,
  o,
  u,
  h,
  y,
  S,
  T){
    this.tag=1,
    this.containerInfo=t,
    this.pingCache=this.current=this.pendingChildren=null,
    this.timeoutHandle=-1,
    this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,
    this.callbackPriority=0,
    this.expirationTimes=ou(-1),
    this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,
    this.entanglements=ou(0),
    this.hiddenUpdates=ou(null),
    this.identifierPrefix=o,
    this.onUncaughtError=u,
    this.onCaughtError=h,
    this.onRecoverableError=y,
    this.pooledCache=null,
    this.pooledCacheLanes=0,
    this.formState=T,
    this.incompleteTransitions=new Map}
  function zx(t,
  a,
  i,
  o,
  u,
  h,
  y,
  S,
  T,
  H,
  W,
  X){
    return t=new t_(t,
    a,
    i,
    y,
    T,
    H,
    W,
    X,
    S),
    a=1,
    h===!0&&(a|=24),
    h=Wt(3,
    null,
    null,
    a),
    t.current=h,
    h.stateNode=t,
    a=Vu(),
    a.refCount++,
    t.pooledCache=a,
    a.refCount++,
    h.memoizedState={
      element:o,
      isDehydrated:i,
      cache:a}
    ,
    Xu(h),
    t}
  function Ex(t){
    return t?(t=qr,
    t):qr}
  function Tx(t,
  a,
  i,
  o,
  u,
  h){
    u=Ex(u),
    o.context===null?o.context=u:o.pendingContext=u,
    o=va(a),
    o.payload={
      element:i}
    ,
    h=h===void 0?null:h,
    h!==null&&(o.callback=h),
    i=wa(t,
    o,
    a),
    i!==null&&(It(i,
    t,
    a),
    is(i,
    t,
    a))}
  function Mx(t,
  a){
    if(t=t.memoizedState,
    t!==null&&t.dehydrated!==null){
      var i=t.retryLane;
      t.retryLane=i!==0&&i<a?i:a}
    }
  function mf(t,
  a){
    Mx(t,
    a),
    (t=t.alternate)&&Mx(t,
    a)}
  function Bx(t){
    if(t.tag===13||t.tag===31){
      var a=rr(t,
      67108864);
      a!==null&&It(a,
      t,
      67108864),
      mf(t,
      67108864)}
    }
  function Dx(t){
    if(t.tag===13||t.tag===31){
      var a=Jt();
      a=lu(a);
      var i=rr(t,
      a);
      i!==null&&It(i,
      t,
      a),
      mf(t,
      a)}
    }
  var El=!0;
  function n_(t,
  a,
  i,
  o){
    var u=k.T;
    k.T=null;
    var h=Y.p;
    try{
      Y.p=2,
      pf(t,
      a,
      i,
      o)}
    finally{
      Y.p=h,
      k.T=u}
    }
  function a_(t,
  a,
  i,
  o){
    var u=k.T;
    k.T=null;
    var h=Y.p;
    try{
      Y.p=8,
      pf(t,
      a,
      i,
      o)}
    finally{
      Y.p=h,
      k.T=u}
    }
  function pf(t,
  a,
  i,
  o){
    if(El){
      var u=gf(o);
      if(u===null)ef(t,
      a,
      o,
      Tl,
      i),
      Nx(t,
      o);
      else if(i_(u,
      t,
      a,
      i,
      o))o.stopPropagation();
      else if(Nx(t,
      o),
      a&4&&-1<r_.indexOf(t)){
        for(;
        u!==null;
        ){
          var h=Nr(u);
          if(h!==null)switch(h.tag){
            case 3:if(h=h.stateNode,
            h.current.memoizedState.isDehydrated){
              var y=Qa(h.pendingLanes);
              if(y!==0){
                var S=h;
                for(S.pendingLanes|=2,
                S.entangledLanes|=2;
                y;
                ){
                  var T=1<<31-Vt(y);
                  S.entanglements[1]|=T,
                  y&=~T}
                Tn(h),
                (Ie&6)===0&&(ul=xe()+500,
                ws(0))}
              }
            break;
            case 31:case 13:S=rr(h,
            2),
            S!==null&&It(S,
            h,
            2),
            fl(),
            mf(h,
            2)}
          if(h=gf(o),
          h===null&&ef(t,
          a,
          o,
          Tl,
          i),
          h===u)break;
          u=h}
        u!==null&&o.stopPropagation()}
      else ef(t,
      a,
      o,
      null,
      i)}
    }
  function gf(t){
    return t=xu(t),
    xf(t)}
  var Tl=null;
  function xf(t){
    if(Tl=null,
    t=Ar(t),
    t!==null){
      var a=c(t);
      if(a===null)t=null;
      else{
        var i=a.tag;
        if(i===13){
          if(t=f(a),
          t!==null)return t;
          t=null}
        else if(i===31){
          if(t=g(a),
          t!==null)return t;
          t=null}
        else if(i===3){
          if(a.stateNode.current.memoizedState.isDehydrated)return a.tag===3?a.stateNode.containerInfo:null;
          t=null}
        else a!==t&&(t=null)}
      }
    return Tl=t,
    null}
  function Ax(t){
    switch(t){
      case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;
      case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;
      case"message":switch(Hi()){
        case Um:return 2;
        case Im:return 8;
        case xo:case q1:return 32;
        case Ym:return 268435456;
        default:return 32}
      default:return 32}
    }
  var yf=!1,
  Aa=null,
  Na=null,
  ja=null,
  Ts=new Map,
  Ms=new Map,
  ka=[],
  r_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
  function Nx(t,
  a){
    switch(t){
      case"focusin":case"focusout":Aa=null;
      break;
      case"dragenter":case"dragleave":Na=null;
      break;
      case"mouseover":case"mouseout":ja=null;
      break;
      case"pointerover":case"pointerout":Ts.delete(a.pointerId);
      break;
      case"gotpointercapture":case"lostpointercapture":Ms.delete(a.pointerId)}
    }
  function Bs(t,
  a,
  i,
  o,
  u,
  h){
    return t===null||t.nativeEvent!==h?(t={
      blockedOn:a,
      domEventName:i,
      eventSystemFlags:o,
      nativeEvent:h,
      targetContainers:[u]}
    ,
    a!==null&&(a=Nr(a),
    a!==null&&Bx(a)),
    t):(t.eventSystemFlags|=o,
    a=t.targetContainers,
    u!==null&&a.indexOf(u)===-1&&a.push(u),
    t)}
  function i_(t,
  a,
  i,
  o,
  u){
    switch(a){
      case"focusin":return Aa=Bs(Aa,
      t,
      a,
      i,
      o,
      u),
      !0;
      case"dragenter":return Na=Bs(Na,
      t,
      a,
      i,
      o,
      u),
      !0;
      case"mouseover":return ja=Bs(ja,
      t,
      a,
      i,
      o,
      u),
      !0;
      case"pointerover":var h=u.pointerId;
      return Ts.set(h,
      Bs(Ts.get(h)||null,
      t,
      a,
      i,
      o,
      u)),
      !0;
      case"gotpointercapture":return h=u.pointerId,
      Ms.set(h,
      Bs(Ms.get(h)||null,
      t,
      a,
      i,
      o,
      u)),
      !0}
    return!1}
  function jx(t){
    var a=Ar(t.target);
    if(a!==null){
      var i=c(a);
      if(i!==null){
        if(a=i.tag,
        a===13){
          if(a=f(i),
          a!==null){
            t.blockedOn=a,
            Km(t.priority,
            function(){
              Dx(i)}
            );
            return}
          }
        else if(a===31){
          if(a=g(i),
          a!==null){
            t.blockedOn=a,
            Km(t.priority,
            function(){
              Dx(i)}
            );
            return}
          }
        else if(a===3&&i.stateNode.current.memoizedState.isDehydrated){
          t.blockedOn=i.tag===3?i.stateNode.containerInfo:null;
          return}
        }
      }
    t.blockedOn=null}
  function Ml(t){
    if(t.blockedOn!==null)return!1;
    for(var a=t.targetContainers;
    0<a.length;
    ){
      var i=gf(t.nativeEvent);
      if(i===null){
        i=t.nativeEvent;
        var o=new i.constructor(i.type,
        i);
        gu=o,
        i.target.dispatchEvent(o),
        gu=null}
      else return a=Nr(i),
      a!==null&&Bx(a),
      t.blockedOn=i,
      !1;
      a.shift()}
    return!0}
  function kx(t,
  a,
  i){
    Ml(t)&&i.delete(a)}
  function s_(){
    yf=!1,
    Aa!==null&&Ml(Aa)&&(Aa=null),
    Na!==null&&Ml(Na)&&(Na=null),
    ja!==null&&Ml(ja)&&(ja=null),
    Ts.forEach(kx),
    Ms.forEach(kx)}
  function Bl(t,
  a){
    t.blockedOn===a&&(t.blockedOn=null,
    yf||(yf=!0,
    e.unstable_scheduleCallback(e.unstable_NormalPriority,
    s_)))}
  var Dl=null;
  function Rx(t){
    Dl!==t&&(Dl=t,
    e.unstable_scheduleCallback(e.unstable_NormalPriority,
    function(){
      Dl===t&&(Dl=null);
      for(var a=0;
      a<t.length;
      a+=3){
        var i=t[a],
        o=t[a+1],
        u=t[a+2];
        if(typeof o!="function"){
          if(xf(o||i)===null)continue;
          break}
        var h=Nr(i);
        h!==null&&(t.splice(a,
        3),
        a-=3,
        pd(h,
        {
          pending:!0,
          data:u,
          method:i.method,
          action:o}
        ,
        o,
        u))}
      }
    ))}
  function mi(t){
    function a(T){
      return Bl(T,
      t)}
    Aa!==null&&Bl(Aa,
    t),
    Na!==null&&Bl(Na,
    t),
    ja!==null&&Bl(ja,
    t),
    Ts.forEach(a),
    Ms.forEach(a);
    for(var i=0;
    i<ka.length;
    i++){
      var o=ka[i];
      o.blockedOn===t&&(o.blockedOn=null)}
    for(;
    0<ka.length&&(i=ka[0],
    i.blockedOn===null);
    )jx(i),
    i.blockedOn===null&&ka.shift();
    if(i=(t.ownerDocument||t).$$reactFormReplay,
    i!=null)for(o=0;
    o<i.length;
    o+=3){
      var u=i[o],
      h=i[o+1],
      y=u[kt]||null;
      if(typeof h=="function")y||Rx(i);
      else if(y){
        var S=null;
        if(h&&h.hasAttribute("formAction")){
          if(u=h,
          y=h[kt]||null)S=y.formAction;
          else if(xf(u)!==null)continue}
        else S=y.action;
        typeof S=="function"?i[o+1]=S:(i.splice(o,
        3),
        o-=3),
        Rx(i)}
      }
    }
  function Gx(){
    function t(h){
      h.canIntercept&&h.info==="react-transition"&&h.intercept({
        handler:function(){
          return new Promise(function(y){
            return u=y}
          )}
        ,
        focusReset:"manual",
        scroll:"manual"}
      )}
    function a(){
      u!==null&&(u(),
      u=null),
      o||setTimeout(i,
      20)}
    function i(){
      if(!o&&!navigation.transition){
        var h=navigation.currentEntry;
        h&&h.url!=null&&navigation.navigate(h.url,
        {
          state:h.getState(),
          info:"react-transition",
          history:"replace"}
        )}
      }
    if(typeof navigation=="object"){
      var o=!1,
      u=null;
      return navigation.addEventListener("navigate",
      t),
      navigation.addEventListener("navigatesuccess",
      a),
      navigation.addEventListener("navigateerror",
      a),
      setTimeout(i,
      100),
      function(){
        o=!0,
        navigation.removeEventListener("navigate",
        t),
        navigation.removeEventListener("navigatesuccess",
        a),
        navigation.removeEventListener("navigateerror",
        a),
        u!==null&&(u(),
        u=null)}
      }
    }
  function bf(t){
    this._internalRoot=t}
  Al.prototype.render=bf.prototype.render=function(t){
    var a=this._internalRoot;
    if(a===null)throw Error(s(409));
    var i=a.current,
    o=Jt();
    Tx(i,
    o,
    t,
    a,
    null,
    null)}
  ,
  Al.prototype.unmount=bf.prototype.unmount=function(){
    var t=this._internalRoot;
    if(t!==null){
      this._internalRoot=null;
      var a=t.containerInfo;
      Tx(t.current,
      2,
      null,
      t,
      null,
      null),
      fl(),
      a[Dr]=null}
    }
  ;
  function Al(t){
    this._internalRoot=t}
  Al.prototype.unstable_scheduleHydration=function(t){
    if(t){
      var a=Wm();
      t={
        blockedOn:null,
        target:t,
        priority:a}
      ;
      for(var i=0;
      i<ka.length&&a!==0&&a<ka[i].priority;
      i++);
      ka.splice(i,
      0,
      t),
      i===0&&jx(t)}
    }
  ;
  var Hx=n.version;
  if(Hx!=="19.2.0")throw Error(s(527,
  Hx,
  "19.2.0"));
  Y.findDOMNode=function(t){
    var a=t._reactInternals;
    if(a===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),
    Error(s(268,
    t)));
    return t=x(a),
    t=t!==null?b(t):null,
    t=t===null?null:t.stateNode,
    t}
  ;
  var o_={
    bundleType:0,
    version:"19.2.0",
    rendererPackageName:"react-dom",
    currentDispatcherRef:k,
    reconcilerVersion:"19.2.0"}
  ;
  if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){
    var Nl=__REACT_DEVTOOLS_GLOBAL_HOOK__;
    if(!Nl.isDisabled&&Nl.supportsFiber)try{
      Oi=Nl.inject(o_),
      qt=Nl}
    catch{
      }
    }
  return As.createRoot=function(t,
  a){
    if(!l(t))throw Error(s(299));
    var i=!1,
    o="",
    u=Vg,
    h=Zg,
    y=Wg;
    return a!=null&&(a.unstable_strictMode===!0&&(i=!0),
    a.identifierPrefix!==void 0&&(o=a.identifierPrefix),
    a.onUncaughtError!==void 0&&(u=a.onUncaughtError),
    a.onCaughtError!==void 0&&(h=a.onCaughtError),
    a.onRecoverableError!==void 0&&(y=a.onRecoverableError)),
    a=zx(t,
    1,
    !1,
    null,
    null,
    i,
    o,
    null,
    u,
    h,
    y,
    Gx),
    t[Dr]=a.current,
    Qd(t),
    new bf(a)}
  ,
  As.hydrateRoot=function(t,
  a,
  i){
    if(!l(t))throw Error(s(299));
    var o=!1,
    u="",
    h=Vg,
    y=Zg,
    S=Wg,
    T=null;
    return i!=null&&(i.unstable_strictMode===!0&&(o=!0),
    i.identifierPrefix!==void 0&&(u=i.identifierPrefix),
    i.onUncaughtError!==void 0&&(h=i.onUncaughtError),
    i.onCaughtError!==void 0&&(y=i.onCaughtError),
    i.onRecoverableError!==void 0&&(S=i.onRecoverableError),
    i.formState!==void 0&&(T=i.formState)),
    a=zx(t,
    1,
    !0,
    a,
    i??null,
    o,
    u,
    T,
    h,
    y,
    S,
    Gx),
    a.context=Ex(null),
    i=a.current,
    o=Jt(),
    o=lu(o),
    u=va(o),
    u.callback=null,
    wa(i,
    u,
    o),
    i=o,
    a.current.lanes=i,
    Ii(a,
    i),
    Tn(a),
    t[Dr]=a.current,
    Qd(t),
    new Al(a)}
  ,
  As.version="19.2.0",
  As}
var Kx;
function x_(){
  if(Kx)return Sf.exports;
  Kx=1;
  function e(){
    if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}
    catch{
      }
    }
  return e(),
  Sf.exports=g_(),
  Sf.exports}
var y_=x_();
const b_=Vh(y_);
/**
 * react-router v7.9.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Xx="popstate";
function v_(e={
  }
){
  function n(l,
  c){
    let{
      pathname:f="/",
      search:g="",
      hash:p=""}
    =zr(l.location.hash.substring(1));
    return!f.startsWith("/")&&!f.startsWith(".")&&(f="/"+f),
    ah("",
    {
      pathname:f,
      search:g,
      hash:p}
    ,
    c.state&&c.state.usr||null,
    c.state&&c.state.key||"default")}
  function r(l,
  c){
    let f=l.document.querySelector("base"),
    g="";
    if(f&&f.getAttribute("href")){
      let p=l.location.href,
      x=p.indexOf("#");
      g=x===-1?p:p.slice(0,
      x)}
    return g+"#"+(typeof c=="string"?c:qs(c))}
  function s(l,
  c){
    mn(l.pathname.charAt(0)==="/",
    `relative pathnames are not supported in hash history.push(${JSON.stringify(c)})`)}
  return S_(n,
  r,
  s,
  e)}
function tt(e,
n){
  if(e===!1||e===null||typeof e>"u")throw new Error(n)}
function mn(e,
n){
  if(!e)try{
    throw new Error(n)}
  catch{
    }
  }
function w_(){
  return Math.random().toString(36).substring(2,
  10)}
function $x(e,
n){
  return{
    usr:e.state,
    key:e.key,
    idx:n}
  }
function ah(e,
n,
r=null,
s){
  return{
    pathname:typeof e=="string"?e:e.pathname,
    search:"",
    hash:"",
    ...typeof n=="string"?zr(n):n,
    state:r,
    key:n&&n.key||s||w_()}
  }
function qs({
  pathname:e="/",
  search:n="",
  hash:r=""}
){
  return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),
  r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),
  e}
function zr(e){
  let n={
    }
  ;
  if(e){
    let r=e.indexOf("#");
    r>=0&&(n.hash=e.substring(r),
    e=e.substring(0,
    r));
    let s=e.indexOf("?");
    s>=0&&(n.search=e.substring(s),
    e=e.substring(0,
    s)),
    e&&(n.pathname=e)}
  return n}
function S_(e,
n,
r,
s={
  }
){
  let{
    window:l=document.defaultView,
    v5Compat:c=!1}
  =s,
  f=l.history,
  g="POP",
  p=null,
  x=b();
  x==null&&(x=0,
  f.replaceState({
    ...f.state,
    idx:x}
  ,
  ""));
  function b(){
    return(f.state||{
      idx:null}
    ).idx}
  function v(){
    g="POP";
    let E=b(),
    A=E==null?null:E-x;
    x=E,
    p&&p({
      action:g,
      location:M.location,
      delta:A}
    )}
  function w(E,
  A){
    g="PUSH";
    let D=ah(M.location,
    E,
    A);
    r&&r(D,
    E),
    x=b()+1;
    let R=$x(D,
    x),
    Z=M.createHref(D);
    try{
      f.pushState(R,
      "",
      Z)}
    catch(V){
      if(V instanceof DOMException&&V.name==="DataCloneError")throw V;
      l.location.assign(Z)}
    c&&p&&p({
      action:g,
      location:M.location,
      delta:1}
    )}
  function _(E,
  A){
    g="REPLACE";
    let D=ah(M.location,
    E,
    A);
    r&&r(D,
    E),
    x=b();
    let R=$x(D,
    x),
    Z=M.createHref(D);
    f.replaceState(R,
    "",
    Z),
    c&&p&&p({
      action:g,
      location:M.location,
      delta:0}
    )}
  function L(E){
    return __(E)}
  let M={
    get action(){
      return g}
    ,
    get location(){
      return e(l,
      f)}
    ,
    listen(E){
      if(p)throw new Error("A history only accepts one active listener");
      return l.addEventListener(Xx,
      v),
      p=E,
      ()=>{
        l.removeEventListener(Xx,
        v),
        p=null}
      }
    ,
    createHref(E){
      return n(l,
      E)}
    ,
    createURL:L,
    encodeLocation(E){
      let A=L(E);
      return{
        pathname:A.pathname,
        search:A.search,
        hash:A.hash}
      }
    ,
    push:w,
    replace:_,
    go(E){
      return f.go(E)}
    }
  ;
  return M}
function __(e,
n=!1){
  let r="http://localhost";
  typeof window<"u"&&(r=window.location.origin!=="null"?window.location.origin:window.location.href),
  tt(r,
  "No window.location.(origin|href) available to create URL");
  let s=typeof e=="string"?e:qs(e);
  return s=s.replace(/ $/,
  "%20"),
  !n&&s.startsWith("//")&&(s=r+s),
  new URL(s,
  r)}
function Pb(e,
n,
r="/"){
  return C_(e,
  n,
  r,
  !1)}
function C_(e,
n,
r,
s){
  let l=typeof n=="string"?zr(n):n,
  c=sa(l.pathname||"/",
  r);
  if(c==null)return null;
  let f=qb(e);
  L_(f);
  let g=null;
  for(let p=0;
  g==null&&p<f.length;
  ++p){
    let x=R_(c);
    g=j_(f[p],
    x,
    s)}
  return g}
function qb(e,
n=[],
r=[],
s="",
l=!1){
  let c=(f,
  g,
  p=l,
  x)=>{
    let b={
      relativePath:x===void 0?f.path||"":x,
      caseSensitive:f.caseSensitive===!0,
      childrenIndex:g,
      route:f}
    ;
    if(b.relativePath.startsWith("/")){
      if(!b.relativePath.startsWith(s)&&p)return;
      tt(b.relativePath.startsWith(s),
      `Absolute route path "${b.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),
      b.relativePath=b.relativePath.slice(s.length)}
    let v=na([s,
    b.relativePath]),
    w=r.concat(b);
    f.children&&f.children.length>0&&(tt(f.index!==!0,
    `Index routes must not have child routes. Please remove all child routes from route path "${v}".`),
    qb(f.children,
    n,
    w,
    v,
    p)),
    !(f.path==null&&!f.index)&&n.push({
      path:v,
      score:A_(v,
      f.index),
      routesMeta:w}
    )}
  ;
  return e.forEach((f,
  g)=>{
    if(f.path===""||!f.path?.includes("?"))c(f,
    g);
    else for(let p of Vb(f.path))c(f,
    g,
    !0,
    p)}
  ),
  n}
function Vb(e){
  let n=e.split("/");
  if(n.length===0)return[];
  let[r,
  ...s]=n,
  l=r.endsWith("?"),
  c=r.replace(/\?$/,
  "");
  if(s.length===0)return l?[c,
  ""]:[c];
  let f=Vb(s.join("/")),
  g=[];
  return g.push(...f.map(p=>p===""?c:[c,
  p].join("/"))),
  l&&g.push(...f),
  g.map(p=>e.startsWith("/")&&p===""?"/":p)}
function L_(e){
  e.sort((n,
  r)=>n.score!==r.score?r.score-n.score:N_(n.routesMeta.map(s=>s.childrenIndex),
  r.routesMeta.map(s=>s.childrenIndex)))}
var z_=/^:[\w-]+$/,
E_=3,
T_=2,
M_=1,
B_=10,
D_=-2,
Fx=e=>e==="*";
function A_(e,
n){
  let r=e.split("/"),
  s=r.length;
  return r.some(Fx)&&(s+=D_),
  n&&(s+=T_),
  r.filter(l=>!Fx(l)).reduce((l,
  c)=>l+(z_.test(c)?E_:c===""?M_:B_),
  s)}
function N_(e,
n){
  return e.length===n.length&&e.slice(0,
  -1).every((s,
  l)=>s===n[l])?e[e.length-1]-n[n.length-1]:0}
function j_(e,
n,
r=!1){
  let{
    routesMeta:s}
  =e,
  l={
    }
  ,
  c="/",
  f=[];
  for(let g=0;
  g<s.length;
  ++g){
    let p=s[g],
    x=g===s.length-1,
    b=c==="/"?n:n.slice(c.length)||"/",
    v=sc({
      path:p.relativePath,
      caseSensitive:p.caseSensitive,
      end:x}
    ,
    b),
    w=p.route;
    if(!v&&x&&r&&!s[s.length-1].route.index&&(v=sc({
      path:p.relativePath,
      caseSensitive:p.caseSensitive,
      end:!1}
    ,
    b)),
    !v)return null;
    Object.assign(l,
    v.params),
    f.push({
      params:l,
      pathname:na([c,
      v.pathname]),
      pathnameBase:U_(na([c,
      v.pathnameBase])),
      route:w}
    ),
    v.pathnameBase!=="/"&&(c=na([c,
    v.pathnameBase]))}
  return f}
function sc(e,
n){
  typeof e=="string"&&(e={
    path:e,
    caseSensitive:!1,
    end:!0}
  );
  let[r,
  s]=k_(e.path,
  e.caseSensitive,
  e.end),
  l=n.match(r);
  if(!l)return null;
  let c=l[0],
  f=c.replace(/(.)\/+$/,
  "$1"),
  g=l.slice(1);
  return{
    params:s.reduce((x,
    {
      paramName:b,
      isOptional:v}
    ,
    w)=>{
      if(b==="*"){
        let L=g[w]||"";
        f=c.slice(0,
        c.length-L.length).replace(/(.)\/+$/,
        "$1")}
      const _=g[w];
      return v&&!_?x[b]=void 0:x[b]=(_||"").replace(/%2F/g,
      "/"),
      x}
    ,
    {
      }
    ),
    pathname:c,
    pathnameBase:f,
    pattern:e}
  }
function k_(e,
n=!1,
r=!0){
  mn(e==="*"||!e.endsWith("*")||e.endsWith("/*"),
  `Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);
  let s=[],
  l="^"+e.replace(/\/*\*?$/,
  "").replace(/^\/*/,
  "/").replace(/[\\.*+^${}|()[\]]/g,
  "\\$&").replace(/\/:([\w-]+)(\?)?/g,
  (f,
  g,
  p)=>(s.push({
    paramName:g,
    isOptional:p!=null}
  ),
  p?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,
  "(/$1)?$2");
  return e.endsWith("*")?(s.push({
    paramName:"*"}
  ),
  l+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?l+="\\/*$":e!==""&&e!=="/"&&(l+="(?:(?=\\/|$))"),
  [new RegExp(l,
  n?void 0:"i"),
  s]}
function R_(e){
  try{
    return e.split("/").map(n=>decodeURIComponent(n).replace(/\//g,
    "%2F")).join("/")}
  catch(n){
    return mn(!1,
    `The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${n}).`),
    e}
  }
function sa(e,
n){
  if(n==="/")return e;
  if(!e.toLowerCase().startsWith(n.toLowerCase()))return null;
  let r=n.endsWith("/")?n.length-1:n.length,
  s=e.charAt(r);
  return s&&s!=="/"?null:e.slice(r)||"/"}
function G_(e,
n="/"){
  let{
    pathname:r,
    search:s="",
    hash:l=""}
  =typeof e=="string"?zr(e):e;
  return{
    pathname:r?r.startsWith("/")?r:H_(r,
    n):n,
    search:I_(s),
    hash:Y_(l)}
  }
function H_(e,
n){
  let r=n.replace(/\/+$/,
  "").split("/");
  return e.split("/").forEach(l=>{
    l===".."?r.length>1&&r.pop():l!=="."&&r.push(l)}
  ),
  r.length>1?r.join("/"):"/"}
function zf(e,
n,
r,
s){
  return`Cannot include a '${e}' character in a manually specified \`to.${n}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${r}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}
function O_(e){
  return e.filter((n,
  r)=>r===0||n.route.path&&n.route.path.length>0)}
function Wh(e){
  let n=O_(e);
  return n.map((r,
  s)=>s===n.length-1?r.pathname:r.pathnameBase)}
function Kh(e,
n,
r,
s=!1){
  let l;
  typeof e=="string"?l=zr(e):(l={
    ...e}
  ,
  tt(!l.pathname||!l.pathname.includes("?"),
  zf("?",
  "pathname",
  "search",
  l)),
  tt(!l.pathname||!l.pathname.includes("#"),
  zf("#",
  "pathname",
  "hash",
  l)),
  tt(!l.search||!l.search.includes("#"),
  zf("#",
  "search",
  "hash",
  l)));
  let c=e===""||l.pathname==="",
  f=c?"/":l.pathname,
  g;
  if(f==null)g=r;
  else{
    let v=n.length-1;
    if(!s&&f.startsWith("..")){
      let w=f.split("/");
      for(;
      w[0]==="..";
      )w.shift(),
      v-=1;
      l.pathname=w.join("/")}
    g=v>=0?n[v]:"/"}
  let p=G_(l,
  g),
  x=f&&f!=="/"&&f.endsWith("/"),
  b=(c||f===".")&&r.endsWith("/");
  return!p.pathname.endsWith("/")&&(x||b)&&(p.pathname+="/"),
  p}
var na=e=>e.join("/").replace(/\/\/+/g,
"/"),
U_=e=>e.replace(/\/+$/,
"").replace(/^\/*/,
"/"),
I_=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,
Y_=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;
function P_(e){
  return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}
var Zb=["POST",
"PUT",
"PATCH",
"DELETE"];
new Set(Zb);
var q_=["GET",
...Zb];
new Set(q_);
var Di=C.createContext(null);
Di.displayName="DataRouter";
var Hc=C.createContext(null);
Hc.displayName="DataRouterState";
C.createContext(!1);
var Wb=C.createContext({
  isTransitioning:!1}
);
Wb.displayName="ViewTransition";
var V_=C.createContext(new Map);
V_.displayName="Fetchers";
var Z_=C.createContext(null);
Z_.displayName="Await";
var _n=C.createContext(null);
_n.displayName="Navigation";
var Qs=C.createContext(null);
Qs.displayName="Location";
var Dn=C.createContext({
  outlet:null,
  matches:[],
  isDataRoute:!1}
);
Dn.displayName="Route";
var Xh=C.createContext(null);
Xh.displayName="RouteError";
function W_(e,
{
  relative:n}
={
  }
){
  tt(Ai(),
  "useHref() may be used only in the context of a <Router> component.");
  let{
    basename:r,
    navigator:s}
  =C.useContext(_n),
  {
    hash:l,
    pathname:c,
    search:f}
  =eo(e,
  {
    relative:n}
  ),
  g=c;
  return r!=="/"&&(g=c==="/"?r:na([r,
  c])),
  s.createHref({
    pathname:g,
    search:f,
    hash:l}
  )}
function Ai(){
  return C.useContext(Qs)!=null}
function da(){
  return tt(Ai(),
  "useLocation() may be used only in the context of a <Router> component."),
  C.useContext(Qs).location}
var Kb="You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function Xb(e){
  C.useContext(_n).static||C.useLayoutEffect(e)}
function Ni(){
  let{
    isDataRoute:e}
  =C.useContext(Dn);
  return e?sC():K_()}
function K_(){
  tt(Ai(),
  "useNavigate() may be used only in the context of a <Router> component.");
  let e=C.useContext(Di),
  {
    basename:n,
    navigator:r}
  =C.useContext(_n),
  {
    matches:s}
  =C.useContext(Dn),
  {
    pathname:l}
  =da(),
  c=JSON.stringify(Wh(s)),
  f=C.useRef(!1);
  return Xb(()=>{
    f.current=!0}
  ),
  C.useCallback((p,
  x={
    }
  )=>{
    if(mn(f.current,
    Kb),
    !f.current)return;
    if(typeof p=="number"){
      r.go(p);
      return}
    let b=Kh(p,
    JSON.parse(c),
    l,
    x.relative==="path");
    e==null&&n!=="/"&&(b.pathname=b.pathname==="/"?n:na([n,
    b.pathname])),
    (x.replace?r.replace:r.push)(b,
    x.state,
    x)}
  ,
  [n,
  r,
  c,
  l,
  e])}
C.createContext(null);
function eo(e,
{
  relative:n}
={
  }
){
  let{
    matches:r}
  =C.useContext(Dn),
  {
    pathname:s}
  =da(),
  l=JSON.stringify(Wh(r));
  return C.useMemo(()=>Kh(e,
  JSON.parse(l),
  s,
  n==="path"),
  [e,
  l,
  s,
  n])}
function X_(e,
n){
  return $b(e,
  n)}
function $b(e,
n,
r,
s,
l){
  tt(Ai(),
  "useRoutes() may be used only in the context of a <Router> component.");
  let{
    navigator:c}
  =C.useContext(_n),
  {
    matches:f}
  =C.useContext(Dn),
  g=f[f.length-1],
  p=g?g.params:{
    }
  ,
  x=g?g.pathname:"/",
  b=g?g.pathnameBase:"/",
  v=g&&g.route;
  {
    let D=v&&v.path||"";
    Fb(x,
    !v||D.endsWith("*")||D.endsWith("*?"),
    `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${x}" (under <Route path="${D}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${D}"> to <Route path="${D==="/"?"*":`${D}/*`}">.`)}
  let w=da(),
  _;
  if(n){
    let D=typeof n=="string"?zr(n):n;
    tt(b==="/"||D.pathname?.startsWith(b),
    `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${b}" but pathname "${D.pathname}" was given in the \`location\` prop.`),
    _=D}
  else _=w;
  let L=_.pathname||"/",
  M=L;
  if(b!=="/"){
    let D=b.replace(/^\//,
    "").split("/");
    M="/"+L.replace(/^\//,
    "").split("/").slice(D.length).join("/")}
  let E=Pb(e,
  {
    pathname:M}
  );
  mn(v||E!=null,
  `No routes matched location "${_.pathname}${_.search}${_.hash}" `),
  mn(E==null||E[E.length-1].route.element!==void 0||E[E.length-1].route.Component!==void 0||E[E.length-1].route.lazy!==void 0,
  `Matched leaf route at location "${_.pathname}${_.search}${_.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);
  let A=eC(E&&E.map(D=>Object.assign({
    }
  ,
  D,
  {
    params:Object.assign({
      }
    ,
    p,
    D.params),
    pathname:na([b,
    c.encodeLocation?c.encodeLocation(D.pathname.replace(/\?/g,
    "%3F").replace(/#/g,
    "%23")).pathname:D.pathname]),
    pathnameBase:D.pathnameBase==="/"?b:na([b,
    c.encodeLocation?c.encodeLocation(D.pathnameBase.replace(/\?/g,
    "%3F").replace(/#/g,
    "%23")).pathname:D.pathnameBase])}
  )),
  f,
  r,
  s,
  l);
  return n&&A?C.createElement(Qs.Provider,
  {
    value:{
      location:{
        pathname:"/",
        search:"",
        hash:"",
        state:null,
        key:"default",
        ..._}
      ,
      navigationType:"POP"}
    }
  ,
  A):A}
function $_(){
  let e=iC(),
  n=P_(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),
  r=e instanceof Error?e.stack:null,
  s="rgba(200,200,200, 0.5)",
  l={
    padding:"0.5rem",
    backgroundColor:s}
  ,
  c={
    padding:"2px 4px",
    backgroundColor:s}
  ,
  f=null;
  return f=C.createElement(C.Fragment,
  null,
  C.createElement("p",
  null,
  "💿 Hey developer 👋"),
  C.createElement("p",
  null,
  "You can provide a way better UX than this when your app throws errors by providing your own ",
  C.createElement("code",
  {
    style:c}
  ,
  "ErrorBoundary"),
  " or",
  " ",
  C.createElement("code",
  {
    style:c}
  ,
  "errorElement"),
  " prop on your route.")),
  C.createElement(C.Fragment,
  null,
  C.createElement("h2",
  null,
  "Unexpected Application Error!"),
  C.createElement("h3",
  {
    style:{
      fontStyle:"italic"}
    }
  ,
  n),
  r?C.createElement("pre",
  {
    style:l}
  ,
  r):null,
  f)}
var F_=C.createElement($_,
null),
J_=class extends C.Component{
  constructor(e){
    super(e),
    this.state={
      location:e.location,
      revalidation:e.revalidation,
      error:e.error}
    }
  static getDerivedStateFromError(e){
    return{
      error:e}
    }
  static getDerivedStateFromProps(e,
  n){
    return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{
      error:e.error,
      location:e.location,
      revalidation:e.revalidation}
    :{
      error:e.error!==void 0?e.error:n.error,
      location:n.location,
      revalidation:e.revalidation||n.revalidation}
    }
  componentDidCatch(e,
  n){
    this.props.unstable_onError&&this.props.unstable_onError(e,
    n)}
  render(){
    return this.state.error!==void 0?C.createElement(Dn.Provider,
    {
      value:this.props.routeContext}
    ,
    C.createElement(Xh.Provider,
    {
      value:this.state.error,
      children:this.props.component}
    )):this.props.children}
  }
;
function Q_({
  routeContext:e,
  match:n,
  children:r}
){
  let s=C.useContext(Di);
  return s&&s.static&&s.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=n.route.id),
  C.createElement(Dn.Provider,
  {
    value:e}
  ,
  r)}
function eC(e,
n=[],
r=null,
s=null,
l=null){
  if(e==null){
    if(!r)return null;
    if(r.errors)e=r.matches;
    else if(n.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;
    else return null}
  let c=e,
  f=r?.errors;
  if(f!=null){
    let x=c.findIndex(b=>b.route.id&&f?.[b.route.id]!==void 0);
    tt(x>=0,
    `Could not find a matching route for errors on route IDs: ${Object.keys(f).join(",")}`),
    c=c.slice(0,
    Math.min(c.length,
    x+1))}
  let g=!1,
  p=-1;
  if(r)for(let x=0;
  x<c.length;
  x++){
    let b=c[x];
    if((b.route.HydrateFallback||b.route.hydrateFallbackElement)&&(p=x),
    b.route.id){
      let{
        loaderData:v,
        errors:w}
      =r,
      _=b.route.loader&&!v.hasOwnProperty(b.route.id)&&(!w||w[b.route.id]===void 0);
      if(b.route.lazy||_){
        g=!0,
        p>=0?c=c.slice(0,
        p+1):c=[c[0]];
        break}
      }
    }
  return c.reduceRight((x,
  b,
  v)=>{
    let w,
    _=!1,
    L=null,
    M=null;
    r&&(w=f&&b.route.id?f[b.route.id]:void 0,
    L=b.route.errorElement||F_,
    g&&(p<0&&v===0?(Fb("route-fallback",
    !1,
    "No `HydrateFallback` element provided to render during initial hydration"),
    _=!0,
    M=null):p===v&&(_=!0,
    M=b.route.hydrateFallbackElement||null)));
    let E=n.concat(c.slice(0,
    v+1)),
    A=()=>{
      let D;
      return w?D=L:_?D=M:b.route.Component?D=C.createElement(b.route.Component,
      null):b.route.element?D=b.route.element:D=x,
      C.createElement(Q_,
      {
        match:b,
        routeContext:{
          outlet:x,
          matches:E,
          isDataRoute:r!=null}
        ,
        children:D}
      )}
    ;
    return r&&(b.route.ErrorBoundary||b.route.errorElement||v===0)?C.createElement(J_,
    {
      location:r.location,
      revalidation:r.revalidation,
      component:L,
      error:w,
      children:A(),
      routeContext:{
        outlet:null,
        matches:E,
        isDataRoute:!0}
      ,
      unstable_onError:s}
    ):A()}
  ,
  null)}
function $h(e){
  return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}
function tC(e){
  let n=C.useContext(Di);
  return tt(n,
  $h(e)),
  n}
function nC(e){
  let n=C.useContext(Hc);
  return tt(n,
  $h(e)),
  n}
function aC(e){
  let n=C.useContext(Dn);
  return tt(n,
  $h(e)),
  n}
function Fh(e){
  let n=aC(e),
  r=n.matches[n.matches.length-1];
  return tt(r.route.id,
  `${e} can only be used on routes that contain a unique "id"`),
  r.route.id}
function rC(){
  return Fh("useRouteId")}
function iC(){
  let e=C.useContext(Xh),
  n=nC("useRouteError"),
  r=Fh("useRouteError");
  return e!==void 0?e:n.errors?.[r]}
function sC(){
  let{
    router:e}
  =tC("useNavigate"),
  n=Fh("useNavigate"),
  r=C.useRef(!1);
  return Xb(()=>{
    r.current=!0}
  ),
  C.useCallback(async(l,
  c={
    }
  )=>{
    mn(r.current,
    Kb),
    r.current&&(typeof l=="number"?e.navigate(l):await e.navigate(l,
    {
      fromRouteId:n,
      ...c}
    ))}
  ,
  [e,
  n])}
var Jx={
  }
;
function Fb(e,
n,
r){
  !n&&!Jx[e]&&(Jx[e]=!0,
  mn(!1,
  r))}
C.memo(oC);
function oC({
  routes:e,
  future:n,
  state:r,
  unstable_onError:s}
){
  return $b(e,
  void 0,
  r,
  s,
  n)}
function lC({
  to:e,
  replace:n,
  state:r,
  relative:s}
){
  tt(Ai(),
  "<Navigate> may be used only in the context of a <Router> component.");
  let{
    static:l}
  =C.useContext(_n);
  mn(!l,
  "<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");
  let{
    matches:c}
  =C.useContext(Dn),
  {
    pathname:f}
  =da(),
  g=Ni(),
  p=Kh(e,
  Wh(c),
  f,
  s==="path"),
  x=JSON.stringify(p);
  return C.useEffect(()=>{
    g(JSON.parse(x),
    {
      replace:n,
      state:r,
      relative:s}
    )}
  ,
  [g,
  x,
  s,
  n,
  r]),
  null}
function Jn(e){
  tt(!1,
  "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}
function cC({
  basename:e="/",
  children:n=null,
  location:r,
  navigationType:s="POP",
  navigator:l,
  static:c=!1}
){
  tt(!Ai(),
  "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");
  let f=e.replace(/^\/*/,
  "/"),
  g=C.useMemo(()=>({
    basename:f,
    navigator:l,
    static:c,
    future:{
      }
    }
  ),
  [f,
  l,
  c]);
  typeof r=="string"&&(r=zr(r));
  let{
    pathname:p="/",
    search:x="",
    hash:b="",
    state:v=null,
    key:w="default"}
  =r,
  _=C.useMemo(()=>{
    let L=sa(p,
    f);
    return L==null?null:{
      location:{
        pathname:L,
        search:x,
        hash:b,
        state:v,
        key:w}
      ,
      navigationType:s}
    }
  ,
  [f,
  p,
  x,
  b,
  v,
  w,
  s]);
  return mn(_!=null,
  `<Router basename="${f}"> is not able to match the URL "${p}${x}${b}" because it does not start with the basename, so the <Router> won't render anything.`),
  _==null?null:C.createElement(_n.Provider,
  {
    value:g}
  ,
  C.createElement(Qs.Provider,
  {
    children:n,
    value:_}
  ))}
function uC({
  children:e,
  location:n}
){
  return X_(rh(e),
  n)}
function rh(e,
n=[]){
  let r=[];
  return C.Children.forEach(e,
  (s,
  l)=>{
    if(!C.isValidElement(s))return;
    let c=[...n,
    l];
    if(s.type===C.Fragment){
      r.push.apply(r,
      rh(s.props.children,
      c));
      return}
    tt(s.type===Jn,
    `[${typeof s.type=="string"?s.type:s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),
    tt(!s.props.index||!s.props.children,
    "An index route cannot have child routes.");
    let f={
      id:s.props.id||c.join("-"),
      caseSensitive:s.props.caseSensitive,
      element:s.props.element,
      Component:s.props.Component,
      index:s.props.index,
      path:s.props.path,
      middleware:s.props.middleware,
      loader:s.props.loader,
      action:s.props.action,
      hydrateFallbackElement:s.props.hydrateFallbackElement,
      HydrateFallback:s.props.HydrateFallback,
      errorElement:s.props.errorElement,
      ErrorBoundary:s.props.ErrorBoundary,
      hasErrorBoundary:s.props.hasErrorBoundary===!0||s.props.ErrorBoundary!=null||s.props.errorElement!=null,
      shouldRevalidate:s.props.shouldRevalidate,
      handle:s.props.handle,
      lazy:s.props.lazy}
    ;
    s.props.children&&(f.children=rh(s.props.children,
    c)),
    r.push(f)}
  ),
  r}
var Ql="get",
ec="application/x-www-form-urlencoded";
function Oc(e){
  return e!=null&&typeof e.tagName=="string"}
function dC(e){
  return Oc(e)&&e.tagName.toLowerCase()==="button"}
function fC(e){
  return Oc(e)&&e.tagName.toLowerCase()==="form"}
function hC(e){
  return Oc(e)&&e.tagName.toLowerCase()==="input"}
function mC(e){
  return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}
function pC(e,
n){
  return e.button===0&&(!n||n==="_self")&&!mC(e)}
var jl=null;
function gC(){
  if(jl===null)try{
    new FormData(document.createElement("form"),
    0),
    jl=!1}
  catch{
    jl=!0}
  return jl}
var xC=new Set(["application/x-www-form-urlencoded",
"multipart/form-data",
"text/plain"]);
function Ef(e){
  return e!=null&&!xC.has(e)?(mn(!1,
  `"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${ec}"`),
  null):e}
function yC(e,
n){
  let r,
  s,
  l,
  c,
  f;
  if(fC(e)){
    let g=e.getAttribute("action");
    s=g?sa(g,
    n):null,
    r=e.getAttribute("method")||Ql,
    l=Ef(e.getAttribute("enctype"))||ec,
    c=new FormData(e)}
  else if(dC(e)||hC(e)&&(e.type==="submit"||e.type==="image")){
    let g=e.form;
    if(g==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
    let p=e.getAttribute("formaction")||g.getAttribute("action");
    if(s=p?sa(p,
    n):null,
    r=e.getAttribute("formmethod")||g.getAttribute("method")||Ql,
    l=Ef(e.getAttribute("formenctype"))||Ef(g.getAttribute("enctype"))||ec,
    c=new FormData(g,
    e),
    !gC()){
      let{
        name:x,
        type:b,
        value:v}
      =e;
      if(b==="image"){
        let w=x?`${x}.`:"";
        c.append(`${w}x`,
        "0"),
        c.append(`${w}y`,
        "0")}
      else x&&c.append(x,
      v)}
    }
  else{
    if(Oc(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');
    r=Ql,
    s=null,
    l=ec,
    f=e}
  return c&&l==="text/plain"&&(f=c,
  c=void 0),
  {
    action:s,
    method:r.toLowerCase(),
    encType:l,
    formData:c,
    body:f}
  }
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function Jh(e,
n){
  if(e===!1||e===null||typeof e>"u")throw new Error(n)}
function bC(e,
n,
r){
  let s=typeof e=="string"?new URL(e,
  typeof window>"u"?"server://singlefetch/":window.location.origin):e;
  return s.pathname==="/"?s.pathname=`_root.${r}`:n&&sa(s.pathname,
  n)==="/"?s.pathname=`${n.replace(/\/$/,"")}/_root.${r}`:s.pathname=`${s.pathname.replace(/\/$/,"")}.${r}`,
  s}
async function vC(e,
n){
  if(e.id in n)return n[e.id];
  try{
    let r=await import(e.module);
    return n[e.id]=r,
    r}
  catch{
    return window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,
    window.location.reload(),
    new Promise(()=>{
      }
    )}
  }
function wC(e){
  return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}
async function SC(e,
n,
r){
  let s=await Promise.all(e.map(async l=>{
    let c=n.routes[l.route.id];
    if(c){
      let f=await vC(c,
      r);
      return f.links?f.links():[]}
    return[]}
  ));
  return zC(s.flat(1).filter(wC).filter(l=>l.rel==="stylesheet"||l.rel==="preload").map(l=>l.rel==="stylesheet"?{
    ...l,
    rel:"prefetch",
    as:"style"}
  :{
    ...l,
    rel:"prefetch"}
  ))}
function Qx(e,
n,
r,
s,
l,
c){
  let f=(p,
  x)=>r[x]?p.route.id!==r[x].route.id:!0,
  g=(p,
  x)=>r[x].pathname!==p.pathname||r[x].route.path?.endsWith("*")&&r[x].params["*"]!==p.params["*"];
  return c==="assets"?n.filter((p,
  x)=>f(p,
  x)||g(p,
  x)):c==="data"?n.filter((p,
  x)=>{
    let b=s.routes[p.route.id];
    if(!b||!b.hasLoader)return!1;
    if(f(p,
    x)||g(p,
    x))return!0;
    if(p.route.shouldRevalidate){
      let v=p.route.shouldRevalidate({
        currentUrl:new URL(l.pathname+l.search+l.hash,
        window.origin),
        currentParams:r[0]?.params||{
          }
        ,
        nextUrl:new URL(e,
        window.origin),
        nextParams:p.params,
        defaultShouldRevalidate:!0}
      );
      if(typeof v=="boolean")return v}
    return!0}
  ):[]}
function _C(e,
n,
{
  includeHydrateFallback:r}
={
  }
){
  return CC(e.map(s=>{
    let l=n.routes[s.route.id];
    if(!l)return[];
    let c=[l.module];
    return l.clientActionModule&&(c=c.concat(l.clientActionModule)),
    l.clientLoaderModule&&(c=c.concat(l.clientLoaderModule)),
    r&&l.hydrateFallbackModule&&(c=c.concat(l.hydrateFallbackModule)),
    l.imports&&(c=c.concat(l.imports)),
    c}
  ).flat(1))}
function CC(e){
  return[...new Set(e)]}
function LC(e){
  let n={
    }
  ,
  r=Object.keys(e).sort();
  for(let s of r)n[s]=e[s];
  return n}
function zC(e,
n){
  let r=new Set;
  return new Set(n),
  e.reduce((s,
  l)=>{
    let c=JSON.stringify(LC(l));
    return r.has(c)||(r.add(c),
    s.push({
      key:c,
      link:l}
    )),
    s}
  ,
  [])}
function Jb(){
  let e=C.useContext(Di);
  return Jh(e,
  "You must render this element inside a <DataRouterContext.Provider> element"),
  e}
function EC(){
  let e=C.useContext(Hc);
  return Jh(e,
  "You must render this element inside a <DataRouterStateContext.Provider> element"),
  e}
var Qh=C.createContext(void 0);
Qh.displayName="FrameworkContext";
function Qb(){
  let e=C.useContext(Qh);
  return Jh(e,
  "You must render this element inside a <HydratedRouter> element"),
  e}
function TC(e,
n){
  let r=C.useContext(Qh),
  [s,
  l]=C.useState(!1),
  [c,
  f]=C.useState(!1),
  {
    onFocus:g,
    onBlur:p,
    onMouseEnter:x,
    onMouseLeave:b,
    onTouchStart:v}
  =n,
  w=C.useRef(null);
  C.useEffect(()=>{
    if(e==="render"&&f(!0),
    e==="viewport"){
      let M=A=>{
        A.forEach(D=>{
          f(D.isIntersecting)}
        )}
      ,
      E=new IntersectionObserver(M,
      {
        threshold:.5}
      );
      return w.current&&E.observe(w.current),
      ()=>{
        E.disconnect()}
      }
    }
  ,
  [e]),
  C.useEffect(()=>{
    if(s){
      let M=setTimeout(()=>{
        f(!0)}
      ,
      100);
      return()=>{
        clearTimeout(M)}
      }
    }
  ,
  [s]);
  let _=()=>{
    l(!0)}
  ,
  L=()=>{
    l(!1),
    f(!1)}
  ;
  return r?e!=="intent"?[c,
  w,
  {
    }
  ]:[c,
  w,
  {
    onFocus:Ns(g,
    _),
    onBlur:Ns(p,
    L),
    onMouseEnter:Ns(x,
    _),
    onMouseLeave:Ns(b,
    L),
    onTouchStart:Ns(v,
    _)}
  ]:[!1,
  w,
  {
    }
  ]}
function Ns(e,
n){
  return r=>{
    e&&e(r),
    r.defaultPrevented||n(r)}
  }
function MC({
  page:e,
  ...n}
){
  let{
    router:r}
  =Jb(),
  s=C.useMemo(()=>Pb(r.routes,
  e,
  r.basename),
  [r.routes,
  e,
  r.basename]);
  return s?C.createElement(DC,
  {
    page:e,
    matches:s,
    ...n}
  ):null}
function BC(e){
  let{
    manifest:n,
    routeModules:r}
  =Qb(),
  [s,
  l]=C.useState([]);
  return C.useEffect(()=>{
    let c=!1;
    return SC(e,
    n,
    r).then(f=>{
      c||l(f)}
    ),
    ()=>{
      c=!0}
    }
  ,
  [e,
  n,
  r]),
  s}
function DC({
  page:e,
  matches:n,
  ...r}
){
  let s=da(),
  {
    manifest:l,
    routeModules:c}
  =Qb(),
  {
    basename:f}
  =Jb(),
  {
    loaderData:g,
    matches:p}
  =EC(),
  x=C.useMemo(()=>Qx(e,
  n,
  p,
  l,
  s,
  "data"),
  [e,
  n,
  p,
  l,
  s]),
  b=C.useMemo(()=>Qx(e,
  n,
  p,
  l,
  s,
  "assets"),
  [e,
  n,
  p,
  l,
  s]),
  v=C.useMemo(()=>{
    if(e===s.pathname+s.search+s.hash)return[];
    let L=new Set,
    M=!1;
    if(n.forEach(A=>{
      let D=l.routes[A.route.id];
      !D||!D.hasLoader||(!x.some(R=>R.route.id===A.route.id)&&A.route.id in g&&c[A.route.id]?.shouldRevalidate||D.hasClientLoader?M=!0:L.add(A.route.id))}
    ),
    L.size===0)return[];
    let E=bC(e,
    f,
    "data");
    return M&&L.size>0&&E.searchParams.set("_routes",
    n.filter(A=>L.has(A.route.id)).map(A=>A.route.id).join(",")),
    [E.pathname+E.search]}
  ,
  [f,
  g,
  s,
  l,
  x,
  n,
  e,
  c]),
  w=C.useMemo(()=>_C(b,
  l),
  [b,
  l]),
  _=BC(b);
  return C.createElement(C.Fragment,
  null,
  v.map(L=>C.createElement("link",
  {
    key:L,
    rel:"prefetch",
    as:"fetch",
    href:L,
    ...r}
  )),
  w.map(L=>C.createElement("link",
  {
    key:L,
    rel:"modulepreload",
    href:L,
    ...r}
  )),
  _.map(({
    key:L,
    link:M}
  )=>C.createElement("link",
  {
    key:L,
    nonce:r.nonce,
    ...M}
  )))}
function AC(...e){
  return n=>{
    e.forEach(r=>{
      typeof r=="function"?r(n):r!=null&&(r.current=n)}
    )}
  }
var ev=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";
try{
  ev&&(window.__reactRouterVersion="7.9.4")}
catch{
  }
function NC({
  basename:e,
  children:n,
  window:r}
){
  let s=C.useRef();
  s.current==null&&(s.current=v_({
    window:r,
    v5Compat:!0}
  ));
  let l=s.current,
  [c,
  f]=C.useState({
    action:l.action,
    location:l.location}
  ),
  g=C.useCallback(p=>{
    C.startTransition(()=>f(p))}
  ,
  [f]);
  return C.useLayoutEffect(()=>l.listen(g),
  [l,
  g]),
  C.createElement(cC,
  {
    basename:e,
    children:n,
    location:c.location,
    navigationType:c.action,
    navigator:l}
  )}
var tv=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
nv=C.forwardRef(function({
  onClick:n,
  discover:r="render",
  prefetch:s="none",
  relative:l,
  reloadDocument:c,
  replace:f,
  state:g,
  target:p,
  to:x,
  preventScrollReset:b,
  viewTransition:v,
  ...w}
,
_){
  let{
    basename:L}
  =C.useContext(_n),
  M=typeof x=="string"&&tv.test(x),
  E,
  A=!1;
  if(typeof x=="string"&&M&&(E=x,
  ev))try{
    let F=new URL(window.location.href),
    te=x.startsWith("//")?new URL(F.protocol+x):new URL(x),
    ie=sa(te.pathname,
    L);
    te.origin===F.origin&&ie!=null?x=ie+te.search+te.hash:A=!0}
  catch{
    mn(!1,
    `<Link to="${x}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}
  let D=W_(x,
  {
    relative:l}
  ),
  [R,
  Z,
  V]=TC(s,
  w),
  I=GC(x,
  {
    replace:f,
    state:g,
    target:p,
    preventScrollReset:b,
    relative:l,
    viewTransition:v}
  );
  function q(F){
    n&&n(F),
    F.defaultPrevented||I(F)}
  let Q=C.createElement("a",
  {
    ...w,
    ...V,
    href:E||D,
    onClick:A||c?n:q,
    ref:AC(_,
    Z),
    target:p,
    "data-discover":!M&&r==="render"?"true":void 0}
  );
  return R&&!M?C.createElement(C.Fragment,
  null,
  Q,
  C.createElement(MC,
  {
    page:D}
  )):Q}
);
nv.displayName="Link";
var jC=C.forwardRef(function({
  "aria-current":n="page",
  caseSensitive:r=!1,
  className:s="",
  end:l=!1,
  style:c,
  to:f,
  viewTransition:g,
  children:p,
  ...x}
,
b){
  let v=eo(f,
  {
    relative:x.relative}
  ),
  w=da(),
  _=C.useContext(Hc),
  {
    navigator:L,
    basename:M}
  =C.useContext(_n),
  E=_!=null&&YC(v)&&g===!0,
  A=L.encodeLocation?L.encodeLocation(v).pathname:v.pathname,
  D=w.pathname,
  R=_&&_.navigation&&_.navigation.location?_.navigation.location.pathname:null;
  r||(D=D.toLowerCase(),
  R=R?R.toLowerCase():null,
  A=A.toLowerCase()),
  R&&M&&(R=sa(R,
  M)||R);
  const Z=A!=="/"&&A.endsWith("/")?A.length-1:A.length;
  let V=D===A||!l&&D.startsWith(A)&&D.charAt(Z)==="/",
  I=R!=null&&(R===A||!l&&R.startsWith(A)&&R.charAt(A.length)==="/"),
  q={
    isActive:V,
    isPending:I,
    isTransitioning:E}
  ,
  Q=V?n:void 0,
  F;
  typeof s=="function"?F=s(q):F=[s,
  V?"active":null,
  I?"pending":null,
  E?"transitioning":null].filter(Boolean).join(" ");
  let te=typeof c=="function"?c(q):c;
  return C.createElement(nv,
  {
    ...x,
    "aria-current":Q,
    className:F,
    ref:b,
    style:te,
    to:f,
    viewTransition:g}
  ,
  typeof p=="function"?p(q):p)}
);
jC.displayName="NavLink";
var kC=C.forwardRef(({
  discover:e="render",
  fetcherKey:n,
  navigate:r,
  reloadDocument:s,
  replace:l,
  state:c,
  method:f=Ql,
  action:g,
  onSubmit:p,
  relative:x,
  preventScrollReset:b,
  viewTransition:v,
  ...w}
,
_)=>{
  let L=UC(),
  M=IC(g,
  {
    relative:x}
  ),
  E=f.toLowerCase()==="get"?"get":"post",
  A=typeof g=="string"&&tv.test(g),
  D=R=>{
    if(p&&p(R),
    R.defaultPrevented)return;
    R.preventDefault();
    let Z=R.nativeEvent.submitter,
    V=Z?.getAttribute("formmethod")||f;
    L(Z||R.currentTarget,
    {
      fetcherKey:n,
      method:V,
      navigate:r,
      replace:l,
      state:c,
      relative:x,
      preventScrollReset:b,
      viewTransition:v}
    )}
  ;
  return C.createElement("form",
  {
    ref:_,
    method:E,
    action:M,
    onSubmit:s?p:D,
    ...w,
    "data-discover":!A&&e==="render"?"true":void 0}
  )}
);
kC.displayName="Form";
function RC(e){
  return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}
function av(e){
  let n=C.useContext(Di);
  return tt(n,
  RC(e)),
  n}
function GC(e,
{
  target:n,
  replace:r,
  state:s,
  preventScrollReset:l,
  relative:c,
  viewTransition:f}
={
  }
){
  let g=Ni(),
  p=da(),
  x=eo(e,
  {
    relative:c}
  );
  return C.useCallback(b=>{
    if(pC(b,
    n)){
      b.preventDefault();
      let v=r!==void 0?r:qs(p)===qs(x);
      g(e,
      {
        replace:v,
        state:s,
        preventScrollReset:l,
        relative:c,
        viewTransition:f}
      )}
    }
  ,
  [p,
  g,
  x,
  r,
  s,
  n,
  e,
  l,
  c,
  f])}
var HC=0,
OC=()=>`__${String(++HC)}__`;
function UC(){
  let{
    router:e}
  =av("useSubmit"),
  {
    basename:n}
  =C.useContext(_n),
  r=rC();
  return C.useCallback(async(s,
  l={
    }
  )=>{
    let{
      action:c,
      method:f,
      encType:g,
      formData:p,
      body:x}
    =yC(s,
    n);
    if(l.navigate===!1){
      let b=l.fetcherKey||OC();
      await e.fetch(b,
      r,
      l.action||c,
      {
        preventScrollReset:l.preventScrollReset,
        formData:p,
        body:x,
        formMethod:l.method||f,
        formEncType:l.encType||g,
        flushSync:l.flushSync}
      )}
    else await e.navigate(l.action||c,
    {
      preventScrollReset:l.preventScrollReset,
      formData:p,
      body:x,
      formMethod:l.method||f,
      formEncType:l.encType||g,
      replace:l.replace,
      state:l.state,
      fromRouteId:r,
      flushSync:l.flushSync,
      viewTransition:l.viewTransition}
    )}
  ,
  [e,
  n,
  r])}
function IC(e,
{
  relative:n}
={
  }
){
  let{
    basename:r}
  =C.useContext(_n),
  s=C.useContext(Dn);
  tt(s,
  "useFormAction must be used inside a RouteContext");
  let[l]=s.matches.slice(-1),
  c={
    ...eo(e||".",
    {
      relative:n}
    )}
  ,
  f=da();
  if(e==null){
    c.search=f.search;
    let g=new URLSearchParams(c.search),
    p=g.getAll("index");
    if(p.some(b=>b==="")){
      g.delete("index"),
      p.filter(v=>v).forEach(v=>g.append("index",
      v));
      let b=g.toString();
      c.search=b?`?${b}`:""}
    }
  return(!e||e===".")&&l.route.index&&(c.search=c.search?c.search.replace(/^\?/,
  "?index&"):"?index"),
  r!=="/"&&(c.pathname=c.pathname==="/"?r:na([r,
  c.pathname])),
  qs(c)}
function YC(e,
{
  relative:n}
={
  }
){
  let r=C.useContext(Wb);
  tt(r!=null,
  "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");
  let{
    basename:s}
  =av("useViewTransitionState"),
  l=eo(e,
  {
    relative:n}
  );
  if(!r.isTransitioning)return!1;
  let c=sa(r.currentLocation.pathname,
  s)||r.currentLocation.pathname,
  f=sa(r.nextLocation.pathname,
  s)||r.nextLocation.pathname;
  return sc(l.pathname,
  f)!=null||sc(l.pathname,
  c)!=null}
/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PC=e=>e.replace(/([a-z0-9])([A-Z])/g,
"$1-$2").toLowerCase(),
qC=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,
(n,
r,
s)=>s?s.toUpperCase():r.toLowerCase()),
ey=e=>{
  const n=qC(e);
  return n.charAt(0).toUpperCase()+n.slice(1)}
,
rv=(...e)=>e.filter((n,
r,
s)=>!!n&&n.trim()!==""&&s.indexOf(n)===r).join(" ").trim(),
VC=e=>{
  for(const n in e)if(n.startsWith("aria-")||n==="role"||n==="title")return!0}
;
/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var ZC={
  xmlns:"http://www.w3.org/2000/svg",
  width:24,
  height:24,
  viewBox:"0 0 24 24",
  fill:"none",
  stroke:"currentColor",
  strokeWidth:2,
  strokeLinecap:"round",
  strokeLinejoin:"round"}
;
/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ih=C.forwardRef(({
  color:e="currentColor",
  size:n=24,
  strokeWidth:r=2,
  absoluteStrokeWidth:s,
  className:l="",
  children:c,
  iconNode:f,
  ...g}
,
p)=>C.createElement("svg",
{
  ref:p,
  ...ZC,
  width:n,
  height:n,
  stroke:e,
  strokeWidth:s?Number(r)*24/Number(n):r,
  className:rv("lucide",
  l),
  ...!c&&!VC(g)&&{
    "aria-hidden":"true"}
  ,
  ...g}
,
[...f.map(([x,
b])=>C.createElement(x,
b)),
...Array.isArray(c)?c:[c]]));
/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Se=(e,
n)=>{
  const r=C.forwardRef(({
    className:s,
    ...l}
  ,
  c)=>C.createElement(ih,
  {
    ref:c,
    iconNode:n,
    className:rv(`lucide-${PC(ey(e))}`,
    `lucide-${e}`,
    s),
    ...l}
  ));
  return r.displayName=ey(e),
  r}
;
/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WC=[["path",
{
  d:"M20 6 9 17l-5-5",
  key:"1gmf2c"}
]],
KC=Se("check",
WC);
/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XC=[["path",
{
  d:"m15 18-6-6 6-6",
  key:"1wnfg3"}
]],
$C=Se("chevron-left",
XC);
/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FC=[["path",
{
  d:"m9 18 6-6-6-6",
  key:"mthhwq"}
]],
JC=Se("chevron-right",
FC);
/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QC=[["circle",
{
  cx:"12",
  cy:"12",
  r:"10",
  key:"1mglay"}
],
["line",
{
  x1:"12",
  x2:"12",
  y1:"8",
  y2:"12",
  key:"1pkeuh"}
],
["line",
{
  x1:"12",
  x2:"12.01",
  y1:"16",
  y2:"16",
  key:"4dfq90"}
]],
e3=Se("circle-alert",
QC);
/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t3=[["path",
{
  d:"M21.801 10A10 10 0 1 1 17 3.335",
  key:"yps3ct"}
],
["path",
{
  d:"m9 11 3 3L22 4",
  key:"1pflzl"}
]],
kl=Se("circle-check-big",
t3);
/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n3=[["circle",
{
  cx:"12",
  cy:"12",
  r:"10",
  key:"1mglay"}
],
["path",
{
  d:"M8 12h8",
  key:"1wcyev"}
],
["path",
{
  d:"M12 8v8",
  key:"napkw2"}
]],
ty=Se("circle-plus",
n3);
/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a3=[["ellipse",
{
  cx:"12",
  cy:"5",
  rx:"9",
  ry:"3",
  key:"msslwz"}
],
["path",
{
  d:"M3 5V19A9 3 0 0 0 21 19V5",
  key:"1wlel7"}
],
["path",
{
  d:"M3 12A9 3 0 0 0 21 12",
  key:"mv7ke4"}
]],
r3=Se("database",
a3);
/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i3=[["path",
{
  d:"M12 15V3",
  key:"m9g1x1"}
],
["path",
{
  d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",
  key:"ih7n3h"}
],
["path",
{
  d:"m7 10 5 5 5-5",
  key:"brsn70"}
]],
ny=Se("download",
i3);
/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s3=[["path",
{
  d:"M15 3h6v6",
  key:"1q9fwt"}
],
["path",
{
  d:"M10 14 21 3",
  key:"gplh6r"}
],
["path",
{
  d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
  key:"a6xqqp"}
]],
o3=Se("external-link",
s3);
/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l3=[["line",
{
  x1:"6",
  x2:"10",
  y1:"12",
  y2:"12",
  key:"161bw2"}
],
["line",
{
  x1:"8",
  x2:"8",
  y1:"10",
  y2:"14",
  key:"1i6ji0"}
],
["line",
{
  x1:"15",
  x2:"15.01",
  y1:"13",
  y2:"13",
  key:"dqpgro"}
],
["line",
{
  x1:"18",
  x2:"18.01",
  y1:"11",
  y2:"11",
  key:"meh2c"}
],
["rect",
{
  width:"20",
  height:"12",
  x:"2",
  y:"6",
  rx:"2",
  key:"9lu3g6"}
]],
c3=Se("gamepad",
l3);
/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u3=[["circle",
{
  cx:"12",
  cy:"12",
  r:"10",
  key:"1mglay"}
],
["path",
{
  d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",
  key:"13o1zl"}
],
["path",
{
  d:"M2 12h20",
  key:"9i4pu4"}
]],
d3=Se("globe",
u3);
/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f3=[["path",
{
  d:"M2 21V3",
  key:"1bzk4w"}
],
["path",
{
  d:"M2 5h18a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2.26",
  key:"1d64pi"}
],
["path",
{
  d:"M7 17v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-3",
  key:"5hbqbf"}
],
["circle",
{
  cx:"16",
  cy:"11",
  r:"2",
  key:"qt15rb"}
],
["circle",
{
  cx:"8",
  cy:"11",
  r:"2",
  key:"ssideg"}
]],
h3=Se("gpu",
f3);
/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m3=[["path",
{
  d:"M12 2v8",
  key:"1q4o3n"}
],
["path",
{
  d:"m16 6-4 4-4-4",
  key:"6wukr"}
],
["rect",
{
  width:"20",
  height:"8",
  x:"2",
  y:"14",
  rx:"2",
  key:"w68u3i"}
],
["path",
{
  d:"M6 18h.01",
  key:"uhywen"}
],
["path",
{
  d:"M10 18h.01",
  key:"h775k"}
]],
p3=Se("hard-drive-download",
m3);
/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g3=[["path",
{
  d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",
  key:"5wwlr5"}
],
["path",
{
  d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
  key:"1d0kgt"}
]],
x3=Se("house",
g3);
/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y3=[["path",
{
  d:"m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4",
  key:"g0fldk"}
],
["path",
{
  d:"m21 2-9.6 9.6",
  key:"1j0ho8"}
],
["circle",
{
  cx:"7.5",
  cy:"15.5",
  r:"5.5",
  key:"yqb3hr"}
]],
ay=Se("key",
y3);
/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b3=[["path",
{
  d:"M21 12a9 9 0 1 1-6.219-8.56",
  key:"13zald"}
]],
br=Se("loader-circle",
b3);
/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v3=[["rect",
{
  width:"18",
  height:"11",
  x:"3",
  y:"11",
  rx:"2",
  ry:"2",
  key:"1w4ew1"}
],
["path",
{
  d:"M7 11V7a5 5 0 0 1 10 0v4",
  key:"fwvmzm"}
]],
w3=Se("lock",
v3);
/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S3=[["path",
{
  d:"m10 17 5-5-5-5",
  key:"1bsop3"}
],
["path",
{
  d:"M15 12H3",
  key:"6jk70r"}
],
["path",
{
  d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4",
  key:"u53s6r"}
]],
iv=Se("log-in",
S3);
/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _3=[["path",
{
  d:"M5 12h14",
  key:"1ays0h"}
]],
C3=Se("minus",
_3);
/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L3=[["rect",
{
  width:"20",
  height:"14",
  x:"2",
  y:"3",
  rx:"2",
  key:"48i651"}
],
["line",
{
  x1:"8",
  x2:"16",
  y1:"21",
  y2:"21",
  key:"1svkeh"}
],
["line",
{
  x1:"12",
  x2:"12",
  y1:"17",
  y2:"21",
  key:"vw1qmm"}
]],
sv=Se("monitor",
L3);
/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z3=[["rect",
{
  x:"16",
  y:"16",
  width:"6",
  height:"6",
  rx:"1",
  key:"4q2zg0"}
],
["rect",
{
  x:"2",
  y:"16",
  width:"6",
  height:"6",
  rx:"1",
  key:"8cvhb9"}
],
["rect",
{
  x:"9",
  y:"2",
  width:"6",
  height:"6",
  rx:"1",
  key:"1egb70"}
],
["path",
{
  d:"M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3",
  key:"1jsf9p"}
],
["path",
{
  d:"M12 12V8",
  key:"2874zd"}
]],
E3=Se("network",
z3);
/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T3=[["path",
{
  d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",
  key:"1a0edw"}
],
["path",
{
  d:"M12 22V12",
  key:"d0xqtd"}
],
["polyline",
{
  points:"3.29 7 12 12 20.71 7",
  key:"ousv84"}
],
["path",
{
  d:"m7.5 4.27 9 5.15",
  key:"1c824w"}
]],
M3=Se("package",
T3);
/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B3=[["path",
{
  d:"m14.622 17.897-10.68-2.913",
  key:"vj2p1u"}
],
["path",
{
  d:"M18.376 2.622a1 1 0 1 1 3.002 3.002L17.36 9.643a.5.5 0 0 0 0 .707l.944.944a2.41 2.41 0 0 1 0 3.408l-.944.944a.5.5 0 0 1-.707 0L8.354 7.348a.5.5 0 0 1 0-.707l.944-.944a2.41 2.41 0 0 1 3.408 0l.944.944a.5.5 0 0 0 .707 0z",
  key:"18tc5c"}
],
["path",
{
  d:"M9 8c-1.804 2.71-3.97 3.46-6.583 3.948a.507.507 0 0 0-.302.819l7.32 8.883a1 1 0 0 0 1.185.204C12.735 20.405 16 16.792 16 15",
  key:"ytzfxy"}
]],
D3=Se("paintbrush",
B3);
/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A3=[["path",
{
  d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",
  key:"v9h5vc"}
],
["path",
{
  d:"M21 3v5h-5",
  key:"1q7to0"}
],
["path",
{
  d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",
  key:"3uifl3"}
],
["path",
{
  d:"M8 16H3v5",
  key:"1cv678"}
]],
oc=Se("refresh-cw",
A3);
/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N3=[["path",
{
  d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",
  key:"m3kijz"}
],
["path",
{
  d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",
  key:"1fmvmk"}
],
["path",
{
  d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",
  key:"1f8sc4"}
],
["path",
{
  d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",
  key:"qeys4"}
]],
j3=Se("rocket",
N3);
/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k3=[["path",
{
  d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",
  key:"1357e3"}
],
["path",
{
  d:"M3 3v5h5",
  key:"1xhq8a"}
]],
R3=Se("rotate-ccw",
k3);
/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G3=[["path",
{
  d:"m21 21-4.34-4.34",
  key:"14j7rj"}
],
["circle",
{
  cx:"11",
  cy:"11",
  r:"8",
  key:"4ej97u"}
]],
lc=Se("search",
G3);
/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H3=[["path",
{
  d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",
  key:"1i5ecw"}
],
["circle",
{
  cx:"12",
  cy:"12",
  r:"3",
  key:"1v7zrd"}
]],
ov=Se("settings",
H3);
/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O3=[["path",
{
  d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
  key:"oel41y"}
],
["path",
{
  d:"M12 8v4",
  key:"1got3b"}
],
["path",
{
  d:"M12 16h.01",
  key:"1drbdi"}
]],
lv=Se("shield-alert",
O3);
/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U3=[["path",
{
  d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
  key:"oel41y"}
]],
Gs=Se("shield",
U3);
/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I3=[["path",
{
  d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",
  key:"1s2grr"}
],
["path",
{
  d:"M20 2v4",
  key:"1rf3ol"}
],
["path",
{
  d:"M22 4h-4",
  key:"gwowj6"}
],
["circle",
{
  cx:"4",
  cy:"20",
  r:"2",
  key:"6kqj1y"}
]],
cv=Se("sparkles",
I3);
/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y3=[["rect",
{
  width:"18",
  height:"18",
  x:"3",
  y:"3",
  rx:"2",
  key:"afitv7"}
]],
P3=Se("square",
Y3);
/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q3=[["path",
{
  d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
  key:"r04s7s"}
]],
V3=Se("star",
q3);
/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z3=[["path",
{
  d:"M10 11v6",
  key:"nco0om"}
],
["path",
{
  d:"M14 11v6",
  key:"outv1u"}
],
["path",
{
  d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",
  key:"miytrc"}
],
["path",
{
  d:"M3 6h18",
  key:"d0wm0j"}
],
["path",
{
  d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",
  key:"e791ji"}
]],
W3=Se("trash-2",
Z3);
/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K3=[["path",
{
  d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",
  key:"miytrc"}
],
["path",
{
  d:"M3 6h18",
  key:"d0wm0j"}
],
["path",
{
  d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",
  key:"e791ji"}
]],
uv=Se("trash",
K3);
/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X3=[["path",
{
  d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
  key:"wmoenq"}
],
["path",
{
  d:"M12 9v4",
  key:"juzpu7"}
],
["path",
{
  d:"M12 17h.01",
  key:"p32p05"}
]],
$3=Se("triangle-alert",
X3);
/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F3=[["path",
{
  d:"M12 3v12",
  key:"1x0j5s"}
],
["path",
{
  d:"m17 8-5-5-5 5",
  key:"7q97r8"}
],
["path",
{
  d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",
  key:"ih7n3h"}
]],
J3=Se("upload",
F3);
/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q3=[["path",
{
  d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z",
  key:"1ngwbx"}
]],
eL=Se("wrench",
Q3);
/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tL=[["path",
{
  d:"M18 6 6 18",
  key:"1bl5f8"}
],
["path",
{
  d:"m6 6 12 12",
  key:"d8bk6v"}
]],
nL=Se("x",
tL);
/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aL=[["path",
{
  d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
  key:"1xq2db"}
]],
cc=Se("zap",
aL);
(function(e,
n){
  for(var r=fn,
  s=e();
  ;
  )try{
    var l=-parseInt(r(195))/1+-parseInt(r(198))/2+-parseInt(r(197))/3+-parseInt(r(196))/4+parseInt(r(204))/5*(parseInt(r(206))/6)+parseInt(r(202))/7+parseInt(r(203))/8;
    if(l===n)break;
    s.push(s.shift())}
  catch{
    s.push(s.shift())}
  }
)(uc,
172637);
function rL(){
  window.electron.ipcRenderer.send("window-minimize")}
function iL(){
  window.electron.ipcRenderer.send("window-maximize")}
function fn(e,
n){
  e=e-195;
  var r=uc(),
  s=r[e];
  if(fn.icVkJq===void 0){
    var l=function(p){
      for(var x="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=",
      b="",
      v="",
      w=0,
      _,
      L,
      M=0;
      L=p.charAt(M++);
      ~L&&(_=w%4?_*64+L:L,
      w++%4)?b+=String.fromCharCode(255&_>>(-2*w&6)):0)L=x.indexOf(L);
      for(var E=0,
      A=b.length;
      E<A;
      E++)v+="%"+("00"+b.charCodeAt(E).toString(16)).slice(-2);
      return decodeURIComponent(v)}
    ;
    fn.WBzamO=l,
    fn.dcYyEl={
      }
    ,
    fn.icVkJq=!0}
  var c=r[0],
  f=e+c,
  g=fn.dcYyEl[f];
  return g?s=g:(s=fn.WBzamO(s),
  fn.dcYyEl[f]=s),
  s}
function sL(){
  window.electron.ipcRenderer.send("window-close")}
async function Ue({
  channel,
  payload}
) {
  
 const response = await window.electron.ipcRenderer.invoke(channel,
  payload);
  
 if (response && (response.success === false || response.ok === false)) {
    
   throw new Error(response.error || response.message || 'Operação indisponível nesta versão local.');
    
 }
  
 return response;
  
}
function uc(){
  var e=["C2vUza",
  "mJyYoezdt3Hgva",
  "mtm0nduXtKnrvuP4",
  "mtaZnJi5mLnlveXowG",
  "ndiZmdi3AMvvBePm",
  "otG1mdzkrfjny0e",
  "AxbJuMvUzgvYzxi",
  "zwXLy3rYB24",
  "D2LUzg93lw1PBMLTAxPL",
  "ndm0odq3wxb6uLfh",
  "mZi2otGWoez1uMLcyW",
  "mZi2mhfxCMLYra"];
  return uc=function(){
    return e}
  ,
  uc()}
const ry=""+new URL("cbnboost-logo.svg",
import.meta.url).href,
oL=""+new URL("cbnboost-logo.svg",
import.meta.url).href,
dv=C.createContext(),
em=()=>{
  const e=C.useContext(dv);
  if(!e)throw new Error("useLanguage must be used within a LanguageProvider");
  return e}
,
lL=({
  children:e}
)=>{
  const[n,
  r]=C.useState(()=>localStorage.getItem("cbnboost:language")||"pt");
  C.useEffect(()=>{
    localStorage.setItem("cbnboost:language",
    n)}
  ,
  [n]);
  const s=l=>{
    r(l)}
  ;
  return m.jsx(dv.Provider,
  {
    value:{
      language:n,
      changeLanguage:s}
    ,
    children:e}
  )}
;
const Rl={
  en:{
    home:"Dashboard",
    tweaks:"Optimizations",
    clean:"Cleaner",
    backup:"Restore Points",
    apps:"Apps",
    settings:"Settings",
    search:"Search",
    loading:"Loading...",
    refresh:"Refresh",
    delete:"Delete",
    deleteAll:"Delete All",
    cancel:"Cancel",
    save:"Save",
    create:"Create",
    restore:"Restore",
    install:"Install",
    uninstall:"Uninstall",
    apply:"Apply",
    revert:"Revert",
    active:"Active",
    inactive:"Inactive",
    enabled:"Enabled",
    disabled:"Disabled",
    expand:"Expand",
    collapse:"Collapse",
    new:"NEW",
    updated:"UPDATED",
    installed:"INSTALLED",
    selected:"Selected",
    tweak:"tweak",
    failed:"Failed",
    unknown:"Unknown",
    unknownApp:"Unknown App",
    clearSelection:"Clear Selection",
    apps:"Apps",
    lookingToDebloat:"Looking to debloat Windows? Check out the",
    tweaksSection:"Tweaks section",
    loadingApps:"Loading apps...",
    friend:"friend",
    greetings:{
      hi:"Hi",
      hello:"Hello",
      hey:"Hey",
      greetings:"Greetings",
      yo:"Yo",
      howdy:"Howdy",
      whatsUp:"What's up",
      goodToSeeYou:"Good to see you",
      welcomeBack:"Welcome Back",
      ahoy:"Ahoy",
      goodMorning:"Good morning",
      goodAfternoon:"Good afternoon",
      goodEvening:"Good evening"}
    ,
    welcomeBack:"Welcome back",
    systemOverview:"System Overview",
    quickActions:"Quick Actions",
    recentActivity:"Recent Activity",
    optimizeTweaks:"Optimize with Tweaks",
    cleanSystem:"Clean Your System",
    createBackup:"Create Backup",
    browseApps:"Browse Apps",
    tweaksTitle:"System Tweaks",
    tweaksSubtitle:"Optimize your Windows system",
    availableTweaks:"Available Tweaks",
    activeTweaks:"Active Tweaks",
    searchTweaks:"Search tweaks...",
    allCategories:"All Categories",
    applyTweak:"Apply Tweak",
    revertTweak:"Revert",
    performanceTweaks:"Performance Tweaks",
    optimizeSystemWith:"Optimize your system with",
    availableTweaksCount:"available tweaks",
    searchTweaksPlaceholder:"Search for tweaks...",
    applying:"Applying",
    unapplying:"Unapplying",
    appliedTweak:"Applied tweak",
    unappliedTweak:"Unapplied tweak",
    requiresGPU:"This tweak requires a dedicated GPU",
    requiresNvidia:"This tweak requires an NVIDIA GPU",
    recommended:"Recommended",
    viewDocumentation:"View Documentation",
    noTweaksFound:"No tweaks found",
    tryAdjustingFilters:"Try adjusting your search or filters",
    newIn:"New in",
    updatedIn:"Updated in",
    all:"All",
    performance:"Performance",
    gpu:"GPU",
    privacy:"Privacy",
    network:"Network",
    appearance:"Appearance",
    gaming:"Gaming",
    general:"General",
    appsTitle:"Application Manager",
    appsSubtitle:"Install and manage applications",
    totalApps:"Total Apps",
    installedApps:"Installed",
    selectedApps:"Selected",
    searchApps:"Search applications...",
    installSelected:"Install",
    uninstallSelected:"Uninstall",
    selectAll:"Select All",
    deselectAll:"Deselect All",
    exportApps:"Export",
    importApps:"Import",
    operationCompleted:"Operation completed successfully!",
    operationError:"There was an error during the operation. Please try again.",
    couldNotVerifyApps:"Could not verify installed apps.",
    invalidImportFile:"Invalid import file format",
    failedToParseJSON:"Failed to parse JSON file",
    importedAppsTitle:"Imported Applications",
    selectAppsToInstall:"Select the applications you want to install",
    installing:"Installing",
    uninstalling:"Uninstalling",
    of:"of",
    thisMayTakeMoments:"This may take a few moments",
    browseAndManage:"Browse and manage",
    applications:"applications",
    appManager:"App Manager",
    wantToAddMoreApps:"Want to add more apps?",
    contributeOnGitHub:"Contribute on GitHub",
    browsers:"Browsers",
    communication:"Communication",
    multimedia:"Multimedia",
    games:"Games",
    development:"Development",
    utilities:"Utilities",
    productivity:"Productivity",
    restorePointsTitle:"Restore Points",
    restorePointsSubtitle:"Create and manage system restore points",
    points:"Points",
    quickCreate:"Quick Create",
    customCreate:"Custom Create",
    noRestorePoints:"No Restore Points Yet",
    noRestorePointsDesc:"Create your first restore point to preserve your system state.",
    createFirstRestore:"Create Your First Restore Point",
    quickActionsTitle:"Quick Actions",
    quickActionsDesc:"Create or manage your restore points",
    loadingRestorePoints:"Loading restore points...",
    noMatchesFound:"No Matches Found",
    adjustSearchTerms:"Try adjusting your search terms or clear the search to see all restore points.",
    restorePointCreated:"Restore point created!",
    failedToCreate:"Failed to create restore point.",
    systemRestoreStarted:"System restore started. Your PC may restart.",
    failedToRestore:"Failed to start system restore.",
    enterRestorePointName:"Please enter a name for the restore point.",
    allRestorePointsDeleted:"All restore points deleted successfully.",
    settingsTitle:"Settings",
    settingsSubtitle:"Customize your CBN Boost experience",
    appearance:"Appearance",
    theme:"Theme",
    chooseTheme:"Choose your preferred color theme",
    integrations:"Integrations",
    systemTray:"System Tray Icon",
    systemTrayDesc:"Keep CBN Boost running in the background",
    requiresRestart:"Requires restart",
    profile:"Profile",
    displayName:"Display Name",
    personalizeExp:"Personalize your CBN Boost experience",
    resetToSystem:"Reset to System Name",
    system:"System",
    softwareUpdates:"Software Updates",
    checkUpdatesDesc:"Check for the latest version of CBN Boost",
    checkForUpdates:"Check for Updates",
    checking:"Checking...",
    privacy:"Privacy & Data",
    analyticsTracking:"Analytics & Tracking",
    disableAnalytics:"Disable PostHog analytics",
    clearCache:"Clear Cache",
    clearCacheDesc:"Remove temporary files and logs",
    openLogs:"Open Logs",
    legacyBackups:"Legacy Backups",
    legacyBackupsDesc:"Remove old backup files from",
    deleteBackups:"Delete Backups",
    version:"Version",
    themeSystem:"System",
    themeDark:"Dark",
    themeLight:"Light",
    themePurple:"Purple",
    themeGray:"Gray",
    themeClassic:"Classic",
    youAreUpToDate:"You're up to date",
    cacheCleared:"CBN Boost cache cleared successfully!",
    enterYourName:"Enter your name",
    nameResetToSystem:"Name reset to system user",
    deleteLegacyBackupsTitle:"Delete Legacy Backups",
    deleteLegacyBackupsMessage:"Are you sure you want to delete all legacy registry backups? This will permanently remove the C:\\CBN Boost\\Backup folder and all its contents.",
    whatYouGet:"What You'll Get:",
    performanceBoost:"Performance Boost",
    advancedTweaks:"Advanced Tweaks",
    allSet:"You're All Set! 🎉",
    whatsIncluded:"What's Included:",
    fullAccess:"Full access to all optimization tweaks",
    advancedCleaning:"Advanced system cleaning tools",
    prioritySupport:"Priority support and updates",
    cleanTitle:"System Cleanup",
    cleanSubtitle:"Free up disk space and optimize performance",
    lastCleaned:"Last cleaned",
    notCleanedYet:"Not cleaned yet",
    cleaning:"Cleaning...",
    cleanSelected:"Clean Selected",
    running:"Running",
    completed:"completed",
    cleared:"cleared",
    failedToFetchScript:"Failed to fetch cleanup script",
    cleanupTemp:"Clean Temporary Files",
    cleanupTempDesc:"Remove system and user temporary files.",
    cleanupPrefetch:"Clean Prefetch Files",
    cleanupPrefetchDesc:"Delete files from the Windows Prefetch folder.",
    cleanupRecycleBin:"Empty Recycle Bin (Dangerous)",
    cleanupRecycleBinDesc:"Permanently remove files from the Recycle Bin.",
    cleanupWindowsUpdate:"Clean Windows Update Cache",
    cleanupWindowsUpdateDesc:"Remove Windows Update downloaded installation files.",
    cleanupThumbnails:"Clear Thumbnail Cache",
    cleanupThumbnailsDesc:"Remove cached thumbnail images used by File Explorer.",
    youreAllSet:"You're All Set! 🎉",
    whatsIncluded:"What's Included:",
    prioritySupport:"Priority support",
    regularUpdates:"Regular updates and improvements",
    networkError:"Network error. Please check your connection.",
    whatYoullGet:"What You'll Get:",
    performanceBoost:"Performance Boost",
    advancedTweaks:"Advanced Tweaks",
    loggedOutSuccessfully:"Logged out successfully",
    loadingSystemInfo:"Loading system information...",
    useWhileLoading:"You may use other parts of CBN Boost while this loads",
    systemOverviewMetrics:"System Overview & Performance Metrics",
    optimizeYourPC:"Optimize Your PC",
    applyPerformanceTweaks:"Apply performance tweaks and boost your system speed",
    openTweaks:"Open Tweaks",
    processor:"Processor",
    cores:"Cores",
    graphics:"Graphics",
    memory:"Memory",
    storage:"Storage",
    updating:"Updating...",
    operatingSystem:"Operating System",
    systemInformation:"System Information",
    os:"OS",
    osVersion:"Version",
    diskModel:"Disk Model",
    optimizationStatus:"Optimization Status",
    tweaksSummary:"Tweaks Summary",
    availableTweaks:"Available Tweaks",
    optimizationLevel:"Optimization Level",
    unknown:"Unknown",
    gpuNotFound:"GPU not found",
    unknownGpu:"Unknown GPU",
    unknownStorage:"Unknown Storage",
    notAvailable:"N/A",
    applying:"Applying",
    unapplying:"Unapplying",
    appliedTweak:"Applied tweak",
    unappliedTweak:"Unapplied tweak",
    requiresGPU:"Requires a dedicated GPU",
    requiresNvidia:"Requires an NVIDIA GPU",
    incompatible:"Incompatible",
    featured:"Featured",
    recommended:"Recommended",
    viewDetails:"View Details",
    closeDetails:"Close",
    categories:"Categories",
    all:"All",
    performanceTweaks:"Performance Tweaks",
    optimizeSystemWith:"Optimize your system with",
    availableTweaksCount:"available tweaks",
    searchTweaksPlaceholder:"Search tweaks by name or description...",
    performance:"Performance",
    privacy:"Privacy",
    gaming:"Gaming",
    network:"Network",
    appearance:"Appearance",
    gpu:"GPU",
    system:"System",
    english:"English",
    spanish:"Español",
    portuguese:"Português",
    tweakTitles:{
      "align-taskbar-left":"Align Taskbar Left",
      "debloat-windows":"Debloat Windows",
      "detailed-bsod":"Detailed BSOD",
      "disable-background-ms-store-apps":"Disable Background MS Store apps",
      "disable-copilot":"Disable Copilot",
      "disable-core-isolation":"Disable Core Isolation",
      "disable-defender-rtp":"Disable Defender RTP",
      "disable-dynamic-ticking":"Disable Dynamic Ticking",
      "disable-fast-startup":"Disable Fast Startup",
      "disable-gamebar":"Disable Gamebar",
      "disable-hibernation":"Disable Hibernation",
      "disable-location-tracking":"Disable Location Tracking",
      "disable-lockscreen-tips":"Disable Lockscreen Tips",
      "disable-mouse-acceleration":"Disable Mouse Acceleration",
      "disable-wifi-sense":"Disable Wifi Sense",
      "enable-dark-mode":"Enable Dark Mode",
      "enable-end-task-right-click":"Enable End Task With Right Click",
      "enable-game-mode":"Enable Game Mode",
      "enable-hags":"Enable HAGS",
      "enable-hpet":"Enable HPET (High Precision Event Timer)",
      "enable-optimization-for-windowed-games":"Enable Optimization For Windowed Games",
      "menu-show-delay-zero":"Menu Show Delay Zero",
      "optimize-network-settings":"Optimize Network Settings",
      "optimize-nvidia-settings":"Optimize Nvidia Settings",
      "remove-gaming-apps":"Remove Gaming Apps",
      "remove-onedrive":"Remove OneDrive",
      "revert-context-menu":"Revert Context Menu",
      "run-disk-cleanup":"Run Disk Cleanup",
      "set-powershell7-default":"Set PowerShell 7 as Default",
      "set-services-to-manual":"Set Services to Manual",
      "set-time-utc":"Set Time To UTC",
      "set-win32-priority-separation":"Set Win32 Priority Separation",
      "ultimate-performance-plan":"Ultimate Performance Power Plan"}
    ,
    tweakDescriptions:{
      "debloat-windows":"Run the CBN Boost debloat: choose which built-in apps to keep and remove the rest to reduce bloatware.",
      "disable-copilot":"Removes Microsoft's Copilot feature. (will fail if copilot is not installed)",
      "disable-defender-rtp":"Disables Defender Real-time Protection",
      "optimize-nvidia-settings":"Changes Nvidia Control Panel settings to improve gaming performance",
      "disable-gamebar":"Disables the Xbox Game Bar overlay",
      "enable-game-mode":"Enables Windows Game Mode for better gaming performance",
      "optimize-network-settings":"Optimizes network settings for reduced latency and improved performance",
      "disable-hibernation":"Disables hibernation and deletes hiberfil.sys to free up disk space",
      "disable-fast-startup":"Disables Fast Startup which can cause issues with dual boot and hardware",
      "ultimate-performance-plan":"Enables the Ultimate Performance power plan",
      "enable-hags":"Enables Hardware Accelerated GPU Scheduling for better performance",
      "disable-mouse-acceleration":"Disables mouse acceleration for more precise cursor movement",
      "enable-dark-mode":"Enables Windows dark mode",
      "revert-context-menu":"Reverts Windows 11 context menu to Windows 10 style",
      "disable-location-tracking":"Disables Windows location tracking",
      "disable-wifi-sense":"Disables WiFi Sense feature",
      "remove-onedrive":"Completely removes OneDrive from your system",
      "align-taskbar-left":"Aligns the taskbar icons to the left (Windows 11)",
      "detailed-bsod":"Shows detailed information on Blue Screen of Death",
      "disable-background-ms-store-apps":"Prevents Microsoft Store apps from running in background",
      "disable-core-isolation":"Disables Core Isolation (Memory Integrity)",
      "disable-dynamic-ticking":"Disables dynamic tick for better performance",
      "disable-lockscreen-tips":"Disables lock screen tips and tricks",
      "enable-end-task-right-click":"Adds \"End Task\" option to taskbar right-click menu",
      "enable-hpet":"Enables High Precision Event Timer",
      "enable-optimization-for-windowed-games":"Enables optimizations for windowed games",
      "menu-show-delay-zero":"Removes delay when opening menus",
      "remove-gaming-apps":"Removes pre-installed gaming apps",
      "run-disk-cleanup":"Runs Windows Disk Cleanup utility",
      "set-powershell7-default":"Sets PowerShell 7 as default shell",
      "set-services-to-manual":"Sets unnecessary Windows services to manual start",
      "set-time-utc":"Sets system time to UTC",
      "set-win32-priority-separation":"Optimizes CPU priority for better performance"}
    ,
    confirmRestart:"Confirm Restart",
    restartComputerNow:"Are you sure you want to restart your computer now?",
    restart:"Restart",
    restartNow:"Restart Now",
    welcomeToCBNBoost:"Welcome to CBN Boost",
    firstTimeMessage:"It looks like this is your first time here.",
    createRestorePointQuestion:"Would you like to create a restore point before you start?",
    byClickingYes:"By clicking",
    yes:"Yes",
    cbnBoostWillCreate:", CBN Boost can create a restore point before you apply adjustments.",
    yesRecommended:"Yes (Recommended)",
    noNotRecommended:"No (Not Recommended)",
    cbnBoostVersion:"CBN Boost Version:",
    errorFetchingVersion:"Error fetching version",
    creatingRestorePoint:"Creating restore point... Please wait before applying tweaks.",
    restorePointCreated:"Restore point created!",
    failedToCreateRestorePoint:"Failed to create restore point.",
    disclaimerTitle:"Disclaimer",
    disclaimerText:"CBN Boost and its team are not responsible for any damage, security issues, or data loss resulting from the use of this software. No FPS increase is guaranteed. Use at your own risk.",
    dontShowAgain:"Don't show this notice again",
    tweakWarnings:{
      "disable-hibernation":"Not Recommended for laptops!",
      "enable-hpet":"May increase input latency on some systems",
      "disable-gamebar":"Do not enable this if you have a X3D CPU",
      "disable-dynamic-ticking":"May increase power consumption"}
    ,
    tweakModals:{
      "remove-onedrive":"This will remove OneDrive from your system. You can reinstall it later if needed. This also moves OneDrive files to your home folder.",
      "debloat-windows":"This runs the CBN Boost Debloat script. You'll choose which built-in apps to keep; unchecked apps are removed for the current user and from provisioned packages. We recommend creating a restore point first.",
      "disable-gamebar":"Do not enable this if you have a X3D CPU (Example: AMD Ryzen 7 9800X3D) as it allocates the 3D V-Cache cores to the running game. Disabling Game Bar stops this.",
      "disable-mouse-acceleration":"This overrides the default mouse acceleration settings in Windows.",
      "set-powershell7-default":"This tweak will change your Windows Terminal default profile from Windows PowerShell 5 to PowerShell 7. PowerShell 7 will be installed automatically if it is not already present.",
      "remove-gaming-apps":"You can reinstall these apps in the Microsoft Store. Look for: 'Xbox Game Bar' and 'Xbox App'",
      "optimize-nvidia-settings":"You can revert these changes in the Nvidia Control Panel (be sure to open Nvidia Control Panel at least once)."}
    ,
    thisFeature:"this feature"}
  ,
  es:{
    home:"Panel",
    tweaks:"Optimizaciones",
    clean:"Limpieza",
    backup:"Restauración",
    apps:"Apps",
    settings:"Configuración",
    search:"Buscar",
    loading:"Cargando...",
    refresh:"Actualizar",
    delete:"Eliminar",
    deleteAll:"Eliminar Todo",
    cancel:"Cancelar",
    save:"Guardar",
    create:"Crear",
    restore:"Restaurar",
    install:"Instalar",
    uninstall:"Desinstalar",
    apply:"Aplicar",
    revert:"Revertir",
    active:"Activo",
    inactive:"Inactivo",
    enabled:"Activado",
    disabled:"Desactivado",
    expand:"Expandir",
    collapse:"Contraer",
    new:"NUEVO",
    updated:"ACTUALIZADO",
    installed:"INSTALADO",
    selected:"Seleccionado",
    tweak:"ajuste",
    failed:"Falló",
    unknown:"Desconocido",
    unknownApp:"Aplicación Desconocida",
    clearSelection:"Limpiar Selección",
    apps:"Apps",
    lookingToDebloat:"¿Buscas eliminar bloatware de Windows? Visita la sección de",
    tweaksSection:"Ajustes",
    loadingApps:"Cargando apps...",
    friend:"amigo",
    greetings:{
      hi:"Hola",
      hello:"Hola",
      hey:"Ey",
      greetings:"Saludos",
      yo:"Qué tal",
      howdy:"Qué onda",
      whatsUp:"Qué pasa",
      goodToSeeYou:"Qué bueno verte",
      welcomeBack:"Bienvenido de vuelta",
      ahoy:"¡Hola!",
      goodMorning:"Buenos días",
      goodAfternoon:"Buenas tardes",
      goodEvening:"Buenas noches"}
    ,
    welcomeBack:"Bienvenido de nuevo",
    systemOverview:"Vista General del Sistema",
    quickActions:"Acciones Rápidas",
    recentActivity:"Actividad Reciente",
    optimizeTweaks:"Optimizar con Ajustes",
    cleanSystem:"Limpiar tu Sistema",
    createBackup:"Crear Respaldo",
    browseApps:"Explorar Apps",
    tweaksTitle:"Ajustes del Sistema",
    tweaksSubtitle:"Optimiza tu sistema Windows",
    availableTweaks:"Ajustes Disponibles",
    activeTweaks:"Ajustes Activos",
    searchTweaks:"Buscar ajustes...",
    allCategories:"Todas las Categorías",
    applyTweak:"Aplicar Ajuste",
    revertTweak:"Revertir",
    performanceTweaks:"Ajustes de Rendimiento",
    optimizeSystemWith:"Optimiza tu sistema con",
    availableTweaksCount:"ajustes disponibles",
    searchTweaksPlaceholder:"Buscar ajustes...",
    applying:"Aplicando",
    unapplying:"Revirtiendo",
    appliedTweak:"Ajuste aplicado",
    unappliedTweak:"Ajuste revertido",
    requiresGPU:"Este ajuste requiere una GPU dedicada",
    requiresNvidia:"Este ajuste requiere una GPU NVIDIA",
    recommended:"Recomendado",
    viewDocumentation:"Ver Documentación",
    noTweaksFound:"No se encontraron ajustes",
    tryAdjustingFilters:"Intenta ajustar tu búsqueda o filtros",
    newIn:"Nuevo en",
    updatedIn:"Actualizado en",
    all:"Todos",
    performance:"Rendimiento",
    gpu:"GPU",
    privacy:"Privacidad",
    network:"Red",
    appearance:"Apariencia",
    gaming:"Juegos",
    general:"General",
    appsTitle:"Gestor de Aplicaciones",
    appsSubtitle:"Instala y gestiona aplicaciones",
    totalApps:"Apps Totales",
    installedApps:"Instaladas",
    selectedApps:"Seleccionadas",
    searchApps:"Buscar aplicaciones...",
    installSelected:"Instalar",
    uninstallSelected:"Desinstalar",
    selectAll:"Seleccionar Todo",
    deselectAll:"Deseleccionar Todo",
    exportApps:"Exportar",
    importApps:"Importar",
    operationCompleted:"¡Operación completada con éxito!",
    operationError:"Hubo un error durante la operación. Por favor, inténtalo de nuevo.",
    couldNotVerifyApps:"No se pudieron verificar las aplicaciones instaladas.",
    invalidImportFile:"Formato de archivo de importación inválido",
    failedToParseJSON:"Error al analizar el archivo JSON",
    importedAppsTitle:"Aplicaciones Importadas",
    selectAppsToInstall:"Selecciona las aplicaciones que deseas instalar",
    installing:"Instalando",
    uninstalling:"Desinstalando",
    of:"de",
    thisMayTakeMoments:"Esto puede tomar unos momentos",
    browseAndManage:"Explora y gestiona",
    applications:"aplicaciones",
    appManager:"Gestor de Apps",
    wantToAddMoreApps:"¿Quieres añadir más apps?",
    contributeOnGitHub:"Contribuye en GitHub",
    browsers:"Navegadores",
    communication:"Comunicación",
    multimedia:"Multimedia",
    games:"Juegos",
    development:"Desarrollo",
    utilities:"Utilidades",
    productivity:"Productividad",
    restorePointsTitle:"Puntos de Restauración",
    restorePointsSubtitle:"Crea y gestiona puntos de restauración del sistema",
    points:"Puntos",
    quickCreate:"Crear Rápido",
    customCreate:"Crear Personalizado",
    noRestorePoints:"Sin Puntos de Restauración",
    noRestorePointsDesc:"Crea tu primer punto de restauración para preservar el estado del sistema.",
    createFirstRestore:"Crear Tu Primer Punto de Restauración",
    quickActionsTitle:"Acciones Rápidas",
    quickActionsDesc:"Crea o gestiona tus puntos de restauración",
    loadingRestorePoints:"Cargando puntos de restauración...",
    noMatchesFound:"No Se Encontraron Coincidencias",
    adjustSearchTerms:"Intenta ajustar tus términos de búsqueda o limpia la búsqueda para ver todos los puntos de restauración.",
    restorePointCreated:"¡Punto de restauración creado!",
    failedToCreate:"Error al crear punto de restauración.",
    systemRestoreStarted:"Restauración del sistema iniciada. Tu PC puede reiniciarse.",
    failedToRestore:"Error al iniciar restauración del sistema.",
    enterRestorePointName:"Por favor ingresa un nombre para el punto de restauración.",
    allRestorePointsDeleted:"Todos los puntos de restauración eliminados con éxito.",
    settingsTitle:"Configuración",
    settingsSubtitle:"Personaliza tu experiencia con CBN Boost",
    appearance:"Apariencia",
    theme:"Tema",
    chooseTheme:"Elige tu tema de color preferido",
    integrations:"Integraciones",
    systemTray:"Icono de Bandeja del Sistema",
    systemTrayDesc:"Mantén CBN Boost ejecutándose en segundo plano",
    requiresRestart:"Requiere reinicio",
    profile:"Perfil",
    displayName:"Nombre para Mostrar",
    personalizeExp:"Personaliza tu experiencia con CBN Boost",
    resetToSystem:"Restablecer a Nombre del Sistema",
    system:"Sistema",
    softwareUpdates:"Actualizaciones de Software",
    checkUpdatesDesc:"Busca la última versión de CBN Boost",
    checkForUpdates:"Buscar Actualizaciones",
    checking:"Buscando...",
    privacy:"Privacidad y Datos",
    analyticsTracking:"Análisis y Seguimiento",
    disableAnalytics:"Desactivar análisis de PostHog",
    clearCache:"Limpiar Caché",
    clearCacheDesc:"Eliminar archivos temporales y registros",
    openLogs:"Abrir Registros",
    legacyBackups:"Respaldos Antiguos",
    legacyBackupsDesc:"Eliminar archivos de respaldo antiguos de",
    deleteBackups:"Eliminar Respaldos",
    version:"Versión",
    themeSystem:"Sistema",
    themeDark:"Oscuro",
    themeLight:"Claro",
    themePurple:"Púrpura",
    themeGray:"Gris",
    themeClassic:"Clásico",
    youAreUpToDate:"Estás al día",
    cacheCleared:"¡Caché de CBN Boost limpiada con éxito!",
    enterYourName:"Ingresa tu nombre",
    nameResetToSystem:"Nombre restablecido al usuario del sistema",
    deleteLegacyBackupsTitle:"Eliminar Respaldos Antiguos",
    deleteLegacyBackupsMessage:"¿Estás seguro de que deseas eliminar todos los respaldos antiguos del registro? Esto eliminará permanentemente la carpeta C:\\CBN Boost\\Backup y todo su contenido.",
    whatYouGet:"Lo Que Obtendrás:",
    performanceBoost:"Mejora de Rendimiento",
    advancedTweaks:"Ajustes Avanzados",
    allSet:"¡Todo Listo! 🎉",
    whatsIncluded:"Qué Incluye:",
    fullAccess:"Acceso completo a todos los ajustes de optimización",
    advancedCleaning:"Herramientas avanzadas de limpieza del sistema",
    prioritySupport:"Soporte prioritario y actualizaciones",
    cleanTitle:"Limpieza del Sistema",
    cleanSubtitle:"Libera espacio en disco y optimiza el rendimiento",
    lastCleaned:"Última limpieza",
    notCleanedYet:"Aún no se ha limpiado",
    cleaning:"Limpiando...",
    cleanSelected:"Limpiar Seleccionados",
    running:"Ejecutando",
    completed:"completado",
    cleared:"liberado",
    failedToFetchScript:"Error al obtener script de limpieza",
    cleanupTemp:"Limpiar Archivos Temporales",
    cleanupTempDesc:"Eliminar archivos temporales del sistema y del usuario.",
    cleanupPrefetch:"Limpiar Archivos Prefetch",
    cleanupPrefetchDesc:"Eliminar archivos de la carpeta Prefetch de Windows.",
    cleanupRecycleBin:"Vaciar Papelera de Reciclaje (Peligroso)",
    cleanupRecycleBinDesc:"Eliminar permanentemente archivos de la Papelera de Reciclaje.",
    cleanupWindowsUpdate:"Limpiar Caché de Windows Update",
    cleanupWindowsUpdateDesc:"Eliminar archivos de instalación descargados de Windows Update.",
    cleanupThumbnails:"Limpiar Caché de Miniaturas",
    cleanupThumbnailsDesc:"Eliminar imágenes en miniatura almacenadas en caché usadas por el Explorador de Archivos.",
    youreAllSet:"¡Todo Listo! 🎉",
    whatsIncluded:"Qué Incluye:",
    prioritySupport:"Soporte prioritario",
    regularUpdates:"Actualizaciones y mejoras regulares",
    networkError:"Error de red. Por favor verifica tu conexión.",
    whatYoullGet:"Lo Que Obtendrás:",
    performanceBoost:"Mejora de Rendimiento",
    advancedTweaks:"Ajustes Avanzados",
    loggedOutSuccessfully:"Sesión cerrada exitosamente",
    loadingSystemInfo:"Cargando información del sistema...",
    useWhileLoading:"Puedes usar otras partes de CBN Boost mientras esto carga",
    systemOverviewMetrics:"Resumen del Sistema y Métricas de Rendimiento",
    optimizeYourPC:"Optimiza tu PC",
    applyPerformanceTweaks:"Aplica ajustes de rendimiento y mejora la velocidad de tu sistema",
    openTweaks:"Abrir Ajustes",
    processor:"Procesador",
    cores:"Núcleos",
    graphics:"Gráficos",
    memory:"Memoria",
    storage:"Almacenamiento",
    updating:"Actualizando...",
    operatingSystem:"Sistema Operativo",
    systemInformation:"Información del Sistema",
    os:"SO",
    osVersion:"Versión",
    diskModel:"Modelo de Disco",
    optimizationStatus:"Estado de Optimización",
    tweaksSummary:"Resumen de Ajustes",
    availableTweaks:"Ajustes Disponibles",
    optimizationLevel:"Nivel de Optimización",
    unknown:"Desconocido",
    gpuNotFound:"GPU no encontrada",
    unknownGpu:"GPU Desconocida",
    unknownStorage:"Almacenamiento Desconocido",
    notAvailable:"N/D",
    applying:"Aplicando",
    unapplying:"Revirtiendo",
    appliedTweak:"Ajuste aplicado",
    unappliedTweak:"Ajuste revertido",
    requiresGPU:"Requiere una GPU dedicada",
    requiresNvidia:"Requiere una GPU NVIDIA",
    incompatible:"Incompatible",
    featured:"Destacado",
    recommended:"Recomendado",
    viewDetails:"Ver Detalles",
    closeDetails:"Cerrar",
    categories:"Categorías",
    all:"Todos",
    performanceTweaks:"Ajustes de Rendimiento",
    optimizeSystemWith:"Optimiza tu sistema con",
    availableTweaksCount:"ajustes disponibles",
    searchTweaksPlaceholder:"Buscar ajustes por nombre o descripción...",
    performance:"Rendimiento",
    privacy:"Privacidad",
    gaming:"Gaming",
    network:"Red",
    appearance:"Apariencia",
    gpu:"GPU",
    system:"Sistema",
    english:"English",
    spanish:"Español",
    portuguese:"Português",
    tweakTitles:{
      "align-taskbar-left":"Alinear Barra de Tareas a la Izquierda",
      "debloat-windows":"Limpiar Windows",
      "detailed-bsod":"BSOD Detallado",
      "disable-background-ms-store-apps":"Desactivar Apps de MS Store en Segundo Plano",
      "disable-copilot":"Desactivar Copilot",
      "disable-core-isolation":"Desactivar Aislamiento del Núcleo",
      "disable-defender-rtp":"Desactivar Protección en Tiempo Real de Defender",
      "disable-dynamic-ticking":"Desactivar Ticking Dinámico",
      "disable-fast-startup":"Desactivar Inicio Rápido",
      "disable-gamebar":"Desactivar Barra de Juegos",
      "disable-hibernation":"Desactivar Hibernación",
      "disable-location-tracking":"Desactivar Rastreo de Ubicación",
      "disable-lockscreen-tips":"Desactivar Consejos de Pantalla de Bloqueo",
      "disable-mouse-acceleration":"Desactivar Aceleración del Mouse",
      "disable-wifi-sense":"Desactivar Wifi Sense",
      "enable-dark-mode":"Activar Modo Oscuro",
      "enable-end-task-right-click":"Habilitar Finalizar Tarea con Click Derecho",
      "enable-game-mode":"Activar Modo de Juego",
      "enable-hags":"Activar HAGS",
      "enable-hpet":"Activar HPET (Temporizador de Eventos de Alta Precisión)",
      "enable-optimization-for-windowed-games":"Activar Optimización para Juegos en Ventana",
      "menu-show-delay-zero":"Eliminar Retraso de Menús",
      "optimize-network-settings":"Optimizar Configuración de Red",
      "optimize-nvidia-settings":"Optimizar Configuración de Nvidia",
      "remove-gaming-apps":"Eliminar Apps de Juegos",
      "remove-onedrive":"Eliminar OneDrive",
      "revert-context-menu":"Revertir Menú Contextual",
      "run-disk-cleanup":"Ejecutar Limpieza de Disco",
      "set-powershell7-default":"Establecer PowerShell 7 como Predeterminado",
      "set-services-to-manual":"Establecer Servicios en Manual",
      "set-time-utc":"Establecer Hora en UTC",
      "set-win32-priority-separation":"Configurar Separación de Prioridad Win32",
      "ultimate-performance-plan":"Plan de Energía de Rendimiento Máximo"}
    ,
    tweakDescriptions:{
      "debloat-windows":"Ejecuta la limpieza de CBN Boost: elige qué apps integradas mantener y elimina el resto para reducir el bloatware.",
      "disable-copilot":"Elimina la función Copilot de Microsoft. (fallará si copilot no está instalado)",
      "disable-defender-rtp":"Desactiva la Protección en Tiempo Real de Defender",
      "optimize-nvidia-settings":"Cambia la configuración del Panel de Control de Nvidia para mejorar el rendimiento en juegos",
      "disable-gamebar":"Desactiva la superposición de la Barra de Juegos de Xbox",
      "enable-game-mode":"Activa el Modo de Juego de Windows para mejor rendimiento en juegos",
      "optimize-network-settings":"Optimiza la configuración de red para reducir latencia y mejorar el rendimiento",
      "disable-hibernation":"Desactiva la hibernación y elimina hiberfil.sys para liberar espacio en disco",
      "disable-fast-startup":"Desactiva el Inicio Rápido que puede causar problemas con arranque dual y hardware",
      "ultimate-performance-plan":"Activa el plan de energía de Rendimiento Máximo",
      "enable-hags":"Activa la Programación de GPU Acelerada por Hardware para mejor rendimiento",
      "disable-mouse-acceleration":"Desactiva la aceleración del mouse para un movimiento del cursor más preciso",
      "enable-dark-mode":"Activa el modo oscuro de Windows",
      "revert-context-menu":"Revierte el menú contextual de Windows 11 al estilo de Windows 10",
      "disable-location-tracking":"Desactiva el seguimiento de ubicación de Windows",
      "disable-wifi-sense":"Desactiva la función WiFi Sense",
      "remove-onedrive":"Elimina completamente OneDrive de tu sistema",
      "align-taskbar-left":"Alinea los iconos de la barra de tareas a la izquierda (Windows 11)",
      "detailed-bsod":"Muestra información detallada en la Pantalla Azul de la Muerte",
      "disable-background-ms-store-apps":"Evita que las aplicaciones de Microsoft Store se ejecuten en segundo plano",
      "disable-core-isolation":"Desactiva el Aislamiento del Núcleo (Integridad de Memoria)",
      "disable-dynamic-ticking":"Desactiva el tictac dinámico para mejor rendimiento",
      "disable-lockscreen-tips":"Desactiva los consejos y trucos de la pantalla de bloqueo",
      "enable-end-task-right-click":"Añade la opción \"Finalizar Tarea\" al menú contextual de la barra de tareas",
      "enable-hpet":"Activa el Temporizador de Eventos de Alta Precisión",
      "enable-optimization-for-windowed-games":"Activa optimizaciones para juegos en ventana",
      "menu-show-delay-zero":"Elimina el retraso al abrir menús",
      "remove-gaming-apps":"Elimina aplicaciones de juegos preinstaladas",
      "run-disk-cleanup":"Ejecuta la utilidad de Limpieza de Disco de Windows",
      "set-powershell7-default":"Establece PowerShell 7 como shell predeterminado",
      "set-services-to-manual":"Establece servicios innecesarios de Windows en inicio manual",
      "set-time-utc":"Establece la hora del sistema en UTC",
      "set-win32-priority-separation":"Optimiza la prioridad de CPU para mejor rendimiento"}
    ,
    confirmRestart:"Confirmar Reinicio",
    restartComputerNow:"¿Estás seguro de que quieres reiniciar tu computadora ahora?",
    restart:"Reiniciar",
    restartNow:"Reiniciar Ahora",
    welcomeToCBNBoost:"Bienvenido a CBN Boost",
    firstTimeMessage:"Parece que esta es tu primera vez aquí.",
    createRestorePointQuestion:"¿Te gustaría crear un punto de restauración antes de comenzar?",
    byClickingYes:"Al hacer clic en",
    yes:"Sí",
    cbnBoostWillCreate:", CBN Boost puede crear un punto de restauración antes de aplicar los ajustes.",
    yesRecommended:"Sí (Recomendado)",
    noNotRecommended:"No (No Recomendado)",
    cbnBoostVersion:"Versión de CBN Boost:",
    errorFetchingVersion:"Error al obtener la versión",
    creatingRestorePoint:"Creando punto de restauración... Por favor espera antes de aplicar ajustes.",
    restorePointCreated:"¡Punto de restauración creado!",
    failedToCreateRestorePoint:"Error al crear punto de restauración.",
    disclaimerTitle:"Aviso legal",
    disclaimerText:"CBN Boost y su equipo no se responsabilizan por daños, problemas de seguridad o pérdida de datos derivados del uso de este software. No se garantiza un aumento de FPS. Úsalo bajo tu propio riesgo.",
    dontShowAgain:"No volver a mostrar este aviso",
    tweakWarnings:{
      "disable-hibernation":"¡No recomendado para portátiles!",
      "enable-hpet":"Puede aumentar la latencia de entrada en algunos sistemas",
      "disable-gamebar":"No habilites esto si tienes una CPU X3D",
      "disable-dynamic-ticking":"Puede aumentar el consumo de energía"}
    ,
    tweakModals:{
      "remove-onedrive":"Esto eliminará OneDrive de tu sistema. Puedes reinstalarlo más tarde si es necesario. Esto también mueve los archivos de OneDrive a tu carpeta personal.",
      "debloat-windows":"Esto ejecuta el script de limpieza de CBN Boost. Podrás elegir qué apps integradas mantener; las no seleccionadas se eliminan del usuario actual y de los paquetes aprovisionados. Recomendamos crear un punto de restauración antes.",
      "disable-gamebar":"No habilites esto si tienes una CPU X3D (Ejemplo: AMD Ryzen 7 9800X3D) ya que asigna los núcleos de caché 3D V-Cache al juego en ejecución. Deshabilitar Game Bar detiene esto.",
      "disable-mouse-acceleration":"Esto anula la configuración predeterminada de aceleración del mouse en Windows.",
      "set-powershell7-default":"Este ajuste cambiará el perfil predeterminado de Windows Terminal de Windows PowerShell 5 a PowerShell 7. PowerShell 7 se instalará automáticamente si aún no está presente.",
      "remove-gaming-apps":"Puedes reinstalar estas aplicaciones en Microsoft Store. Busca: 'Xbox Game Bar' y 'Xbox App'",
      "optimize-nvidia-settings":"Puedes revertir estos cambios en el Panel de Control de Nvidia (asegúrate de abrir el Panel de Control de Nvidia al menos una vez)."}
    ,
    tweakModals:{
      "remove-onedrive":"Esto eliminará OneDrive de tu sistema. Puedes reinstalarlo más tarde si es necesario. También mueve los archivos de OneDrive a tu carpeta personal.",
      "debloat-windows":"Esto ejecuta el script de limpieza de CBN Boost. Podrás elegir qué apps integradas mantener; las no seleccionadas se eliminan del usuario actual y de los paquetes aprovisionados. Recomendamos crear un punto de restauración antes.",
      "disable-gamebar":"No habilites esto si tienes una CPU X3D (Ejemplo: AMD Ryzen 7 9800X3D) ya que asigna los núcleos de caché 3D V-Cache al juego en ejecución. Deshabilitar Game Bar detiene esto.",
      "disable-mouse-acceleration":"Esto anula la configuración predeterminada de aceleración del mouse en Windows.",
      "set-powershell7-default":"Este ajuste cambiará el perfil predeterminado de Windows Terminal de Windows PowerShell 5 a PowerShell 7. PowerShell 7 se instalará automáticamente si aún no está presente.",
      "remove-gaming-apps":"Puedes reinstalar estas aplicaciones en Microsoft Store. Busca: 'Xbox Game Bar' y 'Xbox App'",
      "optimize-nvidia-settings":"Puedes revertir estos cambios en el Panel de Control de Nvidia (asegúrate de abrir el Panel de Control de Nvidia al menos una vez)."}
    ,
    thisFeature:"esta función"}
  ,
  pt:{
    home:"Painel",
    tweaks:"Otimizações",
    clean:"Limpeza",
    backup:"Restauração",
    apps:"Apps",
    settings:"Configurações",
    search:"Pesquisar",
    loading:"Carregando...",
    refresh:"Atualizar",
    delete:"Excluir",
    deleteAll:"Excluir Tudo",
    cancel:"Cancelar",
    save:"Salvar",
    create:"Criar",
    restore:"Restaurar",
    install:"Instalar",
    uninstall:"Desinstalar",
    apply:"Aplicar",
    revert:"Reverter",
    active:"Ativo",
    inactive:"Inativo",
    enabled:"Ativado",
    disabled:"Desativado",
    expand:"Expandir",
    collapse:"Recolher",
    new:"NOVO",
    updated:"ATUALIZADO",
    installed:"INSTALADO",
    selected:"Selecionado",
    tweak:"ajuste",
    failed:"Falhou",
    unknown:"Desconhecido",
    unknownApp:"Aplicativo Desconhecido",
    clearSelection:"Limpar Seleção",
    apps:"Apps",
    lookingToDebloat:"Quer remover bloatware do Windows? Confira a seção de",
    tweaksSection:"Ajustes",
    loadingApps:"Carregando apps...",
    friend:"amigo",
    greetings:{
      hi:"Oi",
      hello:"Olá",
      hey:"Ei",
      greetings:"Saudações",
      yo:"E aí",
      howdy:"Fala",
      whatsUp:"Beleza",
      goodToSeeYou:"Que bom te ver",
      welcomeBack:"Bem-vindo de volta",
      ahoy:"Opa",
      goodMorning:"Bom dia",
      goodAfternoon:"Boa tarde",
      goodEvening:"Boa noite"}
    ,
    welcomeBack:"Bem-vindo de volta",
    systemOverview:"Visão Geral do Sistema",
    quickActions:"Ações Rápidas",
    recentActivity:"Atividade Recente",
    optimizeTweaks:"Otimizar com Ajustes",
    cleanSystem:"Limpar seu Sistema",
    createBackup:"Criar Backup",
    browseApps:"Explorar Apps",
    tweaksTitle:"Ajustes do Sistema",
    tweaksSubtitle:"Otimize seu sistema Windows",
    availableTweaks:"Ajustes Disponíveis",
    activeTweaks:"Ajustes Ativos",
    searchTweaks:"Buscar ajustes...",
    allCategories:"Todas as Categorias",
    applyTweak:"Aplicar Ajuste",
    revertTweak:"Reverter",
    performanceTweaks:"Ajustes de Desempenho",
    optimizeSystemWith:"Otimize seu sistema com",
    availableTweaksCount:"ajustes disponíveis",
    searchTweaksPlaceholder:"Buscar ajustes...",
    applying:"Aplicando",
    unapplying:"Revertendo",
    appliedTweak:"Ajuste aplicado",
    unappliedTweak:"Ajuste revertido",
    requiresGPU:"Este ajuste requer uma GPU dedicada",
    requiresNvidia:"Este ajuste requer uma GPU NVIDIA",
    recommended:"Recomendado",
    viewDocumentation:"Ver Documentação",
    noTweaksFound:"Nenhum ajuste encontrado",
    tryAdjustingFilters:"Tente ajustar sua busca ou filtros",
    newIn:"Novo em",
    updatedIn:"Atualizado em",
    all:"Todos",
    performance:"Desempenho",
    gpu:"GPU",
    privacy:"Privacidade",
    network:"Rede",
    appearance:"Aparência",
    gaming:"Jogos",
    general:"Geral",
    appsTitle:"Gerenciador de Aplicativos",
    appsSubtitle:"Instale e gerencie aplicativos",
    totalApps:"Apps Totais",
    installedApps:"Instalados",
    selectedApps:"Selecionados",
    searchApps:"Buscar aplicativos...",
    installSelected:"Instalar",
    uninstallSelected:"Desinstalar",
    selectAll:"Selecionar Tudo",
    deselectAll:"Desmarcar Tudo",
    exportApps:"Exportar",
    importApps:"Importar",
    operationCompleted:"Operação concluída com sucesso!",
    operationError:"Ocorreu um erro durante a operação. Por favor, tente novamente.",
    couldNotVerifyApps:"Não foi possível verificar os aplicativos instalados.",
    invalidImportFile:"Formato de arquivo de importação inválido",
    failedToParseJSON:"Falha ao analisar o arquivo JSON",
    importedAppsTitle:"Aplicativos Importados",
    selectAppsToInstall:"Selecione os aplicativos que deseja instalar",
    installing:"Instalando",
    uninstalling:"Desinstalando",
    of:"de",
    thisMayTakeMoments:"Isso pode levar alguns momentos",
    browseAndManage:"Navegue e gerencie",
    applications:"aplicativos",
    appManager:"Gerenciador de Apps",
    wantToAddMoreApps:"Quer adicionar mais apps?",
    contributeOnGitHub:"Contribua no GitHub",
    browsers:"Navegadores",
    communication:"Comunicação",
    multimedia:"Multimídia",
    games:"Jogos",
    development:"Desenvolvimento",
    utilities:"Utilitários",
    productivity:"Produtividade",
    restorePointsTitle:"Pontos de Restauração",
    restorePointsSubtitle:"Crie e gerencie pontos de restauração do sistema",
    points:"Pontos",
    quickCreate:"Criar Rápido",
    customCreate:"Criar Personalizado",
    noRestorePoints:"Sem Pontos de Restauração",
    noRestorePointsDesc:"Crie seu primeiro ponto de restauração para preservar o estado do sistema.",
    createFirstRestore:"Criar Seu Primeiro Ponto de Restauração",
    quickActionsTitle:"Ações Rápidas",
    quickActionsDesc:"Crie ou gerencie seus pontos de restauração",
    loadingRestorePoints:"Carregando pontos de restauração...",
    noMatchesFound:"Nenhuma Correspondência Encontrada",
    adjustSearchTerms:"Tente ajustar seus termos de busca ou limpe a pesquisa para ver todos os pontos de restauração.",
    restorePointCreated:"Ponto de restauração criado!",
    failedToCreate:"Falha ao criar ponto de restauração.",
    systemRestoreStarted:"Restauração do sistema iniciada. Seu PC pode reiniciar.",
    failedToRestore:"Falha ao iniciar restauração do sistema.",
    enterRestorePointName:"Por favor, insira um nome para o ponto de restauração.",
    allRestorePointsDeleted:"Todos os pontos de restauração foram excluídos com sucesso.",
    noRestorePoints:"Sem Pontos de Restauração",
    noRestorePointsDesc:"Crie seu primeiro ponto de restauração para preservar o estado do sistema.",
    createFirstRestore:"Criar Seu Primeiro Ponto de Restauração",
    quickActionsTitle:"Ações Rápidas",
    quickActionsDesc:"Crie ou gerencie seus pontos de restauração",
    settingsTitle:"Configurações",
    settingsSubtitle:"Personalize sua experiência com CBN Boost",
    appearance:"Aparência",
    theme:"Tema",
    chooseTheme:"Escolha seu tema de cor preferido",
    integrations:"Integrações",
    systemTray:"Ícone da Bandeja do Sistema",
    systemTrayDesc:"Mantenha o CBN Boost em execução em segundo plano",
    requiresRestart:"Requer reinicialização",
    profile:"Perfil",
    displayName:"Nome de Exibição",
    personalizeExp:"Personalize sua experiência com CBN Boost",
    resetToSystem:"Redefinir para Nome do Sistema",
    system:"Sistema",
    softwareUpdates:"Atualizações de Software",
    checkUpdatesDesc:"Verifique a versão mais recente do CBN Boost",
    checkForUpdates:"Verificar Atualizações",
    checking:"Verificando...",
    privacy:"Privacidade e Dados",
    analyticsTracking:"Análise e Rastreamento",
    disableAnalytics:"Desativar análise do PostHog",
    clearCache:"Limpar Cache",
    clearCacheDesc:"Remover arquivos temporários e logs",
    openLogs:"Abrir Logs",
    legacyBackups:"Backups Antigos",
    legacyBackupsDesc:"Remover arquivos de backup antigos de",
    deleteBackups:"Excluir Backups",
    version:"Versão",
    themeSystem:"Sistema",
    themeDark:"Escuro",
    themeLight:"Claro",
    themePurple:"Roxo",
    themeGray:"Cinza",
    themeClassic:"Clássico",
    youAreUpToDate:"Você está atualizado",
    cacheCleared:"Cache do CBN Boost limpa com sucesso!",
    enterYourName:"Digite seu nome",
    nameResetToSystem:"Nome redefinido para o usuário do sistema",
    deleteLegacyBackupsTitle:"Excluir Backups Antigos",
    deleteLegacyBackupsMessage:"Tem certeza de que deseja excluir todos os backups antigos do registro? Isso removerá permanentemente a pasta C:\\CBN Boost\\Backup e todo o seu conteúdo.",
    whatYouGet:"O Que Você Receberá:",
    performanceBoost:"Aumento de Desempenho",
    advancedTweaks:"Ajustes Avançados",
    allSet:"Tudo Pronto! 🎉",
    whatsIncluded:"O Que Está Incluído:",
    fullAccess:"Acesso completo a todos os ajustes de otimização",
    advancedCleaning:"Ferramentas avançadas de limpeza do sistema",
    prioritySupport:"Suporte prioritário e atualizações",
    cleanTitle:"Limpeza do Sistema",
    cleanSubtitle:"Libere espaço em disco e otimize o desempenho",
    lastCleaned:"Última limpeza",
    notCleanedYet:"Ainda não foi limpo",
    cleaning:"Limpando...",
    cleanSelected:"Limpar Selecionados",
    running:"Executando",
    completed:"concluído",
    cleared:"liberado",
    failedToFetchScript:"Falha ao obter script de limpeza",
    cleanupTemp:"Limpar Arquivos Temporários",
    cleanupTempDesc:"Remover arquivos temporários do sistema e do usuário.",
    cleanupPrefetch:"Limpar Arquivos Prefetch",
    cleanupPrefetchDesc:"Excluir arquivos da pasta Prefetch do Windows.",
    cleanupRecycleBin:"Esvaziar Lixeira (Perigoso)",
    cleanupRecycleBinDesc:"Remover permanentemente arquivos da Lixeira.",
    cleanupWindowsUpdate:"Limpar Cache do Windows Update",
    cleanupWindowsUpdateDesc:"Remover arquivos de instalação baixados do Windows Update.",
    cleanupThumbnails:"Limpar Cache de Miniaturas",
    cleanupThumbnailsDesc:"Remover imagens em miniatura armazenadas em cache usadas pelo Explorador de Arquivos.",
    youreAllSet:"Tudo Pronto! 🎉",
    whatsIncluded:"O Que Está Incluído:",
    prioritySupport:"Suporte prioritário",
    regularUpdates:"Atualizações e melhorias regulares",
    networkError:"Erro de rede. Por favor, verifique sua conexão.",
    whatYoullGet:"O Que Você Receberá:",
    performanceBoost:"Melhoria de Desempenho",
    advancedTweaks:"Ajustes Avançados",
    loggedOutSuccessfully:"Sessão encerrada com sucesso",
    loadingSystemInfo:"Carregando informações do sistema...",
    useWhileLoading:"Você pode usar outras partes do CBN Boost enquanto isso carrega",
    systemOverviewMetrics:"Visão Geral do Sistema e Métricas de Desempenho",
    optimizeYourPC:"Otimize seu PC",
    applyPerformanceTweaks:"Aplique ajustes de desempenho e aumente a velocidade do seu sistema",
    openTweaks:"Abrir Ajustes",
    processor:"Processador",
    cores:"Núcleos",
    graphics:"Gráficos",
    memory:"Memória",
    storage:"Armazenamento",
    updating:"Atualizando...",
    operatingSystem:"Sistema Operacional",
    systemInformation:"Informações do Sistema",
    os:"SO",
    osVersion:"Versão",
    diskModel:"Modelo do Disco",
    optimizationStatus:"Status de Otimização",
    tweaksSummary:"Resumo de Ajustes",
    availableTweaks:"Ajustes Disponíveis",
    optimizationLevel:"Nível de Otimização",
    unknown:"Desconhecido",
    gpuNotFound:"GPU não encontrada",
    unknownGpu:"GPU Desconhecida",
    unknownStorage:"Armazenamento Desconhecido",
    notAvailable:"N/D",
    applying:"Aplicando",
    unapplying:"Revertendo",
    appliedTweak:"Ajuste aplicado",
    unappliedTweak:"Ajuste revertido",
    requiresGPU:"Requer uma GPU dedicada",
    requiresNvidia:"Requer uma GPU NVIDIA",
    incompatible:"Incompatível",
    featured:"Destaque",
    recommended:"Recomendado",
    viewDetails:"Ver Detalhes",
    closeDetails:"Fechar",
    categories:"Categorias",
    all:"Todos",
    performanceTweaks:"Ajustes de Desempenho",
    optimizeSystemWith:"Otimize seu sistema com",
    availableTweaksCount:"ajustes disponíveis",
    searchTweaksPlaceholder:"Buscar ajustes por nome ou descrição...",
    performance:"Desempenho",
    privacy:"Privacidade",
    gaming:"Gaming",
    network:"Rede",
    appearance:"Aparência",
    gpu:"GPU",
    system:"Sistema",
    english:"English",
    spanish:"Español",
    portuguese:"Português",
    tweakTitles:{
      "align-taskbar-left":"Alinhar Barra de Tarefas à Esquerda",
      "debloat-windows":"Limpar Windows",
      "detailed-bsod":"BSOD Detalhado",
      "disable-background-ms-store-apps":"Desativar Apps da MS Store em Segundo Plano",
      "disable-copilot":"Desativar Copilot",
      "disable-core-isolation":"Desativar Isolamento do Núcleo",
      "disable-defender-rtp":"Desativar Proteção em Tempo Real do Defender",
      "disable-dynamic-ticking":"Desativar Ticking Dinâmico",
      "disable-fast-startup":"Desativar Inicialização Rápida",
      "disable-gamebar":"Desativar Barra de Jogos",
      "disable-hibernation":"Desativar Hibernação",
      "disable-location-tracking":"Desativar Rastreamento de Localização",
      "disable-lockscreen-tips":"Desativar Dicas da Tela de Bloqueio",
      "disable-mouse-acceleration":"Desativar Aceleração do Mouse",
      "disable-wifi-sense":"Desativar Wifi Sense",
      "enable-dark-mode":"Ativar Modo Escuro",
      "enable-end-task-right-click":"Habilitar Finalizar Tarefa com Botão Direito",
      "enable-game-mode":"Ativar Modo de Jogo",
      "enable-hags":"Ativar HAGS",
      "enable-hpet":"Ativar HPET (Temporizador de Eventos de Alta Precisão)",
      "enable-optimization-for-windowed-games":"Ativar Otimização para Jogos em Janela",
      "menu-show-delay-zero":"Eliminar Atraso de Menus",
      "optimize-network-settings":"Otimizar Configurações de Rede",
      "optimize-nvidia-settings":"Otimizar Configurações da Nvidia",
      "remove-gaming-apps":"Remover Apps de Jogos",
      "remove-onedrive":"Remover OneDrive",
      "revert-context-menu":"Reverter Menu de Contexto",
      "run-disk-cleanup":"Executar Limpeza de Disco",
      "set-powershell7-default":"Definir PowerShell 7 como Padrão",
      "set-services-to-manual":"Definir Serviços como Manual",
      "set-time-utc":"Definir Hora em UTC",
      "set-win32-priority-separation":"Configurar Separação de Prioridade Win32",
      "ultimate-performance-plan":"Plano de Energia de Desempenho Máximo"}
    ,
    tweakDescriptions:{
      "debloat-windows":"Executa a limpeza do CBN Boost: escolha quais apps nativos manter e remova o restante para reduzir o bloatware.",
      "disable-copilot":"Remove o recurso Copilot da Microsoft. (falhará se o copilot não estiver instalado)",
      "disable-defender-rtp":"Desativa a Proteção em Tempo Real do Defender",
      "optimize-nvidia-settings":"Altera as configurações do Painel de Controle da Nvidia para melhorar o desempenho em jogos",
      "disable-gamebar":"Desativa a sobreposição da Barra de Jogos do Xbox",
      "enable-game-mode":"Ativa o Modo de Jogo do Windows para melhor desempenho em jogos",
      "optimize-network-settings":"Otimiza as configurações de rede para reduzir latência e melhorar o desempenho",
      "disable-hibernation":"Desativa a hibernação e exclui hiberfil.sys para liberar espaço em disco",
      "disable-fast-startup":"Desativa a Inicialização Rápida que pode causar problemas com dual boot e hardware",
      "ultimate-performance-plan":"Ativa o plano de energia de Desempenho Máximo",
      "enable-hags":"Ativa o Agendamento de GPU Acelerado por Hardware para melhor desempenho",
      "disable-mouse-acceleration":"Desativa a aceleração do mouse para um movimento do cursor mais preciso",
      "enable-dark-mode":"Ativa o modo escuro do Windows",
      "revert-context-menu":"Reverte o menu de contexto do Windows 11 para o estilo do Windows 10",
      "disable-location-tracking":"Desativa o rastreamento de localização do Windows",
      "disable-wifi-sense":"Desativa o recurso WiFi Sense",
      "remove-onedrive":"Remove completamente o OneDrive do seu sistema",
      "align-taskbar-left":"Alinha os ícones da barra de tarefas à esquerda (Windows 11)",
      "detailed-bsod":"Mostra informações detalhadas na Tela Azul da Morte",
      "disable-background-ms-store-apps":"Impede que aplicativos da Microsoft Store sejam executados em segundo plano",
      "disable-core-isolation":"Desativa o Isolamento do Núcleo (Integridade de Memória)",
      "disable-dynamic-ticking":"Desativa o tique dinâmico para melhor desempenho",
      "disable-lockscreen-tips":"Desativa dicas e truques da tela de bloqueio",
      "enable-end-task-right-click":"Adiciona a opção \"Finalizar Tarefa\" ao menu de contexto da barra de tarefas",
      "enable-hpet":"Ativa o Temporizador de Eventos de Alta Precisão",
      "enable-optimization-for-windowed-games":"Ativa otimizações para jogos em janela",
      "menu-show-delay-zero":"Remove o atraso ao abrir menus",
      "remove-gaming-apps":"Remove aplicativos de jogos pré-instalados",
      "run-disk-cleanup":"Executa o utilitário de Limpeza de Disco do Windows",
      "set-powershell7-default":"Define o PowerShell 7 como shell padrão",
      "set-services-to-manual":"Define serviços desnecessários do Windows para inicialização manual",
      "set-time-utc":"Define o horário do sistema para UTC",
      "set-win32-priority-separation":"Otimiza a prioridade da CPU para melhor desempenho"}
    ,
    confirmRestart:"Confirmar Reinício",
    restartComputerNow:"Tem certeza de que deseja reiniciar seu computador agora?",
    restart:"Reiniciar",
    restartNow:"Reiniciar Agora",
    welcomeToCBNBoost:"Bem-vindo ao CBN Boost",
    firstTimeMessage:"Parece que esta é sua primeira vez aqui.",
    createRestorePointQuestion:"Gostaria de criar um ponto de restauração antes de começar?",
    byClickingYes:"Ao clicar em",
    yes:"Sim",
    cbnBoostWillCreate:", o CBN Boost pode criar um ponto de restauração antes de aplicar os ajustes.",
    yesRecommended:"Sim (Recomendado)",
    noNotRecommended:"Não (Não Recomendado)",
    cbnBoostVersion:"Versão do CBN Boost:",
    errorFetchingVersion:"Erro ao buscar versão",
    creatingRestorePoint:"Criando ponto de restauração... Por favor aguarde antes de aplicar ajustes.",
    restorePointCreated:"Ponto de restauração criado!",
    failedToCreateRestorePoint:"Falha ao criar ponto de restauração.",
    disclaimerTitle:"Aviso",
    disclaimerText:"O CBN Boost e sua equipe/empresa não se responsabilizam por danos, problemas de segurança ou perda de dados decorrentes do uso deste software. Não há garantia de aumento de FPS. Use por sua conta e risco.",
    dontShowAgain:"Não mostrar este aviso novamente",
    tweakWarnings:{
      "disable-hibernation":"Não recomendado para laptops!",
      "enable-hpet":"Pode aumentar a latência de entrada em alguns sistemas",
      "disable-gamebar":"Não habilite isso se você tem uma CPU X3D",
      "disable-dynamic-ticking":"Pode aumentar o consumo de energia"}
    ,
    tweakModals:{
      "remove-onedrive":"Isso removerá o OneDrive do seu sistema. Você pode reinstalá-lo mais tarde, se necessário. Isso também move os arquivos do OneDrive para sua pasta pessoal.",
      "debloat-windows":"Isso executa o script de limpeza do CBN Boost. Você escolhe quais apps nativos manter; os desmarcados são removidos do usuário atual e dos pacotes provisionados. Recomendamos criar um ponto de restauração antes.",
      "disable-gamebar":"Não habilite isso se você tem uma CPU X3D (Exemplo: AMD Ryzen 7 9800X3D) pois ela atribui os núcleos de cache 3D V-Cache ao jogo em execução. Desabilitar o Game Bar impede isso.",
      "disable-mouse-acceleration":"Isso substitui a configuração padrão de aceleração do mouse no Windows.",
      "set-powershell7-default":"Este ajuste mudará o perfil padrão do Windows Terminal do Windows PowerShell 5 para o PowerShell 7. O PowerShell 7 será instalado automaticamente se ainda não estiver presente.",
      "remove-gaming-apps":"Você pode reinstalar esses aplicativos na Microsoft Store. Procure por: 'Xbox Game Bar' e 'Xbox App'",
      "optimize-nvidia-settings":"Você pode reverter essas alterações no Painel de Controle da Nvidia (certifique-se de abrir o Painel de Controle da Nvidia pelo menos uma vez)."}
    ,
    thisFeature:"este recurso"}
  }
;
const zt=(language,key,options={})=>{
  const lookup=values=>key.split('.').reduce((current,part)=>current?.[part],values);
  const value=lookup(Rl[language])??lookup(Rl.en);
  if(value===undefined||value===null)return options.defaultValue??key;
  if(typeof value!=='string')return value;
  return value.replace(/\{\{(\w+)\}\}/g,(match,name)=>options[name]!==undefined?String(options[name]):match);
},
iy=()=>m.jsxs("svg",
{
  viewBox:"0 0 36 36",
  className:"w-5 h-5 inline-block",
  children:[m.jsx("path",
  {
    fill:"#009B3A",
    d:"M32 5H4a4 4 0 0 0-4 4v18a4 4 0 0 0 4 4h28a4 4 0 0 0 4-4V9a4 4 0 0 0-4-4z"}
  ),
  m.jsx("path",
  {
    fill:"#FEDF00",
    d:"M18 7l11.5 11L18 29 6.5 18z"}
  ),
  m.jsx("circle",
  {
    fill:"#002776",
    cx:"18",
    cy:"18",
    r:"6"}
  ),
  m.jsx("path",
  {
    fill:"#FFF",
    d:"M12 18.08c1.5.83 5.58 3.1 12 .05 0 0-3.22-2.13-6-2.13-2.78 0-6 2.08-6 2.08z"}
  )]}
),
cL=()=>m.jsxs("svg",
{
  viewBox:"0 0 36 36",
  className:"w-5 h-5 inline-block",
  children:[m.jsx("path",
  {
    fill:"#B22234",
    d:"M32 5H4a4 4 0 0 0-4 4v2h36V9a4 4 0 0 0-4-4z"}
  ),
  m.jsx("path",
  {
    fill:"#FFF",
    d:"M0 11h36v2H0zm0 4h36v2H0zm0 4h36v2H0zm0 4h36v2H0z"}
  ),
  m.jsx("path",
  {
    fill:"#B22234",
    d:"M0 23h36v4a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4z"}
  ),
  m.jsx("path",
  {
    fill:"#3C3B6E",
    d:"M18 5H4a4 4 0 0 0-4 4v10h18z"}
  ),
  m.jsxs("g",
  {
    fill:"#FFF",
    children:[m.jsx("circle",
    {
      cx:"3",
      cy:"7",
      r:".5"}
    ),
    m.jsx("circle",
    {
      cx:"6",
      cy:"7",
      r:".5"}
    ),
    m.jsx("circle",
    {
      cx:"9",
      cy:"7",
      r:".5"}
    ),
    m.jsx("circle",
    {
      cx:"12",
      cy:"7",
      r:".5"}
    ),
    m.jsx("circle",
    {
      cx:"15",
      cy:"7",
      r:".5"}
    ),
    m.jsx("circle",
    {
      cx:"4.5",
      cy:"9",
      r:".5"}
    ),
    m.jsx("circle",
    {
      cx:"7.5",
      cy:"9",
      r:".5"}
    ),
    m.jsx("circle",
    {
      cx:"10.5",
      cy:"9",
      r:".5"}
    ),
    m.jsx("circle",
    {
      cx:"13.5",
      cy:"9",
      r:".5"}
    ),
    m.jsx("circle",
    {
      cx:"3",
      cy:"11",
      r:".5"}
    ),
    m.jsx("circle",
    {
      cx:"6",
      cy:"11",
      r:".5"}
    ),
    m.jsx("circle",
    {
      cx:"9",
      cy:"11",
      r:".5"}
    ),
    m.jsx("circle",
    {
      cx:"12",
      cy:"11",
      r:".5"}
    ),
    m.jsx("circle",
    {
      cx:"15",
      cy:"11",
      r:".5"}
    ),
    m.jsx("circle",
    {
      cx:"4.5",
      cy:"13",
      r:".5"}
    ),
    m.jsx("circle",
    {
      cx:"7.5",
      cy:"13",
      r:".5"}
    ),
    m.jsx("circle",
    {
      cx:"10.5",
      cy:"13",
      r:".5"}
    ),
    m.jsx("circle",
    {
      cx:"13.5",
      cy:"13",
      r:".5"}
    ),
    m.jsx("circle",
    {
      cx:"3",
      cy:"15",
      r:".5"}
    ),
    m.jsx("circle",
    {
      cx:"6",
      cy:"15",
      r:".5"}
    ),
    m.jsx("circle",
    {
      cx:"9",
      cy:"15",
      r:".5"}
    ),
    m.jsx("circle",
    {
      cx:"12",
      cy:"15",
      r:".5"}
    ),
    m.jsx("circle",
    {
      cx:"15",
      cy:"15",
      r:".5"}
    ),
    m.jsx("circle",
    {
      cx:"4.5",
      cy:"17",
      r:".5"}
    ),
    m.jsx("circle",
    {
      cx:"7.5",
      cy:"17",
      r:".5"}
    ),
    m.jsx("circle",
    {
      cx:"10.5",
      cy:"17",
      r:".5"}
    ),
    m.jsx("circle",
    {
      cx:"13.5",
      cy:"17",
      r:".5"}
    )]}
  )]}
),
uL=()=>m.jsxs("svg",
{
  viewBox:"0 0 36 36",
  className:"w-5 h-5 inline-block",
  children:[m.jsx("path",
  {
    fill:"#C60B1E",
    d:"M32 5H4a4 4 0 0 0-4 4v4h36V9a4 4 0 0 0-4-4z"}
  ),
  m.jsx("path",
  {
    fill:"#FFC400",
    d:"M0 13h36v10H0z"}
  ),
  m.jsx("path",
  {
    fill:"#C60B1E",
    d:"M0 23h36v4a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4z"}
  ),
  m.jsxs("g",
  {
    fill:"#FFC400",
    children:[m.jsx("rect",
    {
      x:"10",
      y:"15",
      width:"4",
      height:"6",
      rx:"1"}
    ),
    m.jsx("circle",
    {
      cx:"12",
      cy:"17",
      r:"1",
      fill:"#C60B1E"}
    )]}
  )]}
),
sy=e=>{
  switch(e){
    case"en":return m.jsx(cL,
    {
      }
    );
    case"es":return m.jsx(uL,
    {
      }
    );
    case"pt":return m.jsx(iy,
    {
      }
    );
    default:return m.jsx(iy,
    {
      }
    )}
  }
;
function dL(){
  const[e,
  n]=C.useState(ry),
  [r,
  s]=C.useState(!1),
  {
    language:l,
    changeLanguage:c}
  =em();
  C.useEffect(()=>{
    const x=()=>{
      const v=document.body,
      w=v.classList.contains("dark"),
      _=v.classList.contains("purple"),
      L=v.classList.contains("gray"),
      M=v.classList.contains("classic");
      n(w||_||L||M?oL:ry)}
    ;
    x();
    const b=new MutationObserver(x);
    return b.observe(document.body,
    {
      attributes:!0,
      attributeFilter:["class"]}
    ),
    ()=>b.disconnect()}
  ,
  []);
  const f=[{
    code:"en",
    name:"English"}
  ,
  {
    code:"es",
    name:"Español"}
  ,
  {
    code:"pt",
    name:"Português"}
  ],
  g=f.find(x=>x.code===l)||f[0],
  p=x=>{
    c(x),
    s(!1)}
  ;
  return m.jsxs("div",
  {
    style:{
      WebkitAppRegion:"drag"}
    ,
    className:"h-[50px] fixed top-0 left-0 right-0 flex justify-between items-center pl-0 bg-cbnboost-bg z-[60]",
    children:[m.jsx("div",
    {
      className:"flex items-center gap-3 h-full pr-4 -ml-2 pointer-events-none",
      children:m.jsx("img",
      {
        src:e,
        alt:"CBN Boost",
        className:"h-10 w-52 object-contain",
        style:{
          filter:"brightness(1.1) contrast(1.2)"}
        }
      )}
    ),
    m.jsxs("div",
    {
      className:"flex",
      style:{
        WebkitAppRegion:"no-drag"}
      ,
      children:[m.jsxs("div",
      {
        className:"relative",
        children:[m.jsxs("button",
        {
          onClick:()=>s(!r),
          className:"h-[50px] px-3 inline-flex items-center justify-center gap-2 text-cbnboost-text-secondary hover:bg-cbnboost-accent transition-colors",
          title:"Change Language",
          children:[m.jsx(d3,
          {
            size:16}
          ),
          sy(g.code)]}
        ),
        r&&m.jsxs(m.Fragment,
        {
          children:[m.jsx("div",
          {
            className:"fixed inset-0 z-40",
            onClick:()=>s(!1)}
          ),
          m.jsx("div",
          {
            className:"absolute right-0 top-[50px] z-50 w-48 bg-cbnboost-card border border-cbnboost-border rounded-lg shadow-2xl overflow-hidden",
            children:f.map(x=>m.jsxs("button",
            {
              onClick:()=>p(x.code),
              className:`w-full px-4 py-3 flex items-center gap-3 hover:bg-cbnboost-accent transition-colors ${l===x.code?"bg-cbnboost-primary/10 text-cbnboost-primary":"text-cbnboost-text"}`,
              children:[sy(x.code),
              m.jsx("span",
              {
                className:"text-sm font-medium",
                children:x.name}
              ),
              l===x.code&&m.jsx("svg",
              {
                className:"w-4 h-4 ml-auto text-cbnboost-primary",
                fill:"currentColor",
                viewBox:"0 0 20 20",
                children:m.jsx("path",
                {
                  fillRule:"evenodd",
                  d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
                  clipRule:"evenodd"}
                )}
              )]}
            ,
            x.code))}
          )]}
        )]}
      ),
      m.jsx("button",
      {
        onClick:rL,
        className:"h-[50px] w-12 inline-flex items-center justify-center text-cbnboost-text-secondary hover:bg-cbnboost-accent transition-colors",
        children:m.jsx(C3,
        {
          size:16}
        )}
      ),
      m.jsx("button",
      {
        onClick:iL,
        className:"h-[50px] w-12 inline-flex items-center justify-center text-cbnboost-text-secondary hover:bg-cbnboost-accent transition-colors",
        children:m.jsx(P3,
        {
          size:14}
        )}
      ),
      m.jsx("button",
      {
        onClick:sL,
        className:"h-[50px] w-12 inline-flex items-center justify-center text-cbnboost-text-secondary hover:bg-red-600 hover:text-white transition-colors",
        children:m.jsx(nL,
        {
          size:16}
        )}
      )]}
    )]}
  )}
function fv(e){
  var n,
  r,
  s="";
  if(typeof e=="string"||typeof e=="number")s+=e;
  else if(typeof e=="object")if(Array.isArray(e)){
    var l=e.length;
    for(n=0;
    n<l;
    n++)e[n]&&(r=fv(e[n]))&&(s&&(s+=" "),
    s+=r)}
  else for(r in e)e[r]&&(s&&(s+=" "),
  s+=r);
  return s}
function Et(){
  for(var e,
  n,
  r=0,
  s="",
  l=arguments.length;
  r<l;
  r++)(e=arguments[r])&&(n=fv(e))&&(s&&(s+=" "),
  s+=n);
  return s}
const oy=e=>{
  let n;
  const r=new Set,
  s=(x,
  b)=>{
    const v=typeof x=="function"?x(n):x;
    if(!Object.is(v,
    n)){
      const w=n;
      n=b??(typeof v!="object"||v===null)?v:Object.assign({
        }
      ,
      n,
      v),
      r.forEach(_=>_(n,
      w))}
    }
  ,
  l=()=>n,
  g={
    setState:s,
    getState:l,
    getInitialState:()=>p,
    subscribe:x=>(r.add(x),
    ()=>r.delete(x))}
  ,
  p=n=e(s,
  l,
  g);
  return g}
,
fL=(e=>e?oy(e):oy),
hL=e=>e;
function mL(e,
n=hL){
  const r=ke.useSyncExternalStore(e.subscribe,
  ke.useCallback(()=>n(e.getState()),
  [e,
  n]),
  ke.useCallback(()=>n(e.getInitialState()),
  [e,
  n]));
  return ke.useDebugValue(r),
  r}
const ly=e=>{
  const n=fL(e),
  r=s=>mL(n,
  s);
  return Object.assign(r,
  n),
  r}
,
tm=(e=>e?ly(e):ly);
function Ga(e,
n){
  e=e-347;
  const r=fc();
  let s=r[e];
  if(Ga.BXzAQK===void 0){
    var l=function(p){
      const x="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
      let b="",
      v="";
      for(let w=0,
      _,
      L,
      M=0;
      L=p.charAt(M++);
      ~L&&(_=w%4?_*64+L:L,
      w++%4)?b+=String.fromCharCode(255&_>>(-2*w&6)):0)L=x.indexOf(L);
      for(let w=0,
      _=b.length;
      w<_;
      w++)v+="%"+("00"+b.charCodeAt(w).toString(16)).slice(-2);
      return decodeURIComponent(v)}
    ;
    Ga.PpCybB=l,
    Ga.YpVXjr={
      }
    ,
    Ga.BXzAQK=!0}
  const c=r[0],
  f=e+c,
  g=Ga.YpVXjr[f];
  return g?s=g:(s=Ga.PpCybB(s),
  Ga.YpVXjr[f]=s),
  s}
function fc(){
  const e=["nJiXodGWANnyzuPO",
  "ndm1ody1ogfnr3DryG",
  "mtu1mZCYneH4A3PHAW",
  "mtyYnZiYmeLwr0TKrG",
  "og9Kz3DhAG",
  "nJaZEvn2yK1U",
  "nte4ndy2tgT4sNjm",
  "odu0mZGWzxzlswXk",
  "mtG5otC2EwLMu0TL"];
  return fc=function(){
    return e}
  ,
  fc()}
(function(e,
n){
  const r=Ga,
  s=e();
  for(;
  ;
  )try{
    if(-parseInt(r(351))/1+-parseInt(r(352))/2+parseInt(r(347))/3+-parseInt(r(349))/4*(-parseInt(r(354))/5)+-parseInt(r(355))/6+-parseInt(r(348))/7+-parseInt(r(353))/8*(-parseInt(r(350))/9)===n)break;
    s.push(s.shift())}
  catch{
    s.push(s.shift())}
  }
)(fc,
453150);
const hv=tm(e=>({
  needsRestart:!1,
  setNeedsRestart:n=>e(()=>({
    needsRestart:n}
  )),
  resetRestartState:()=>e(()=>({
    needsRestart:!1}
  ))}
));
(function(e,
n){
  const r=Ha,
  s=e();
  for(;
  ;
  )try{
    if(parseInt(r(435))/1+parseInt(r(439))/2*(-parseInt(r(442))/3)+-parseInt(r(436))/4+parseInt(r(433))/5*(-parseInt(r(432))/6)+parseInt(r(438))/7*(parseInt(r(437))/8)+-parseInt(r(440))/9*(parseInt(r(441))/10)+parseInt(r(434))/11===n)break;
    s.push(s.shift())}
  catch{
    s.push(s.shift())}
  }
)(hc,
813830);
function hc(){
  const e=["oxrWzLjRua",
  "mZmYmdeYmeP4rKH2va",
  "mZy0odK5vxrkswzc",
  "ndqYntyXmK9MBKfuua",
  "nwzqBeLjqW",
  "mJe1mdmZnJfivxblqKG",
  "nduWmZGXD0fWt2vH",
  "ndG1oti4ogTWqLj6CG",
  "mtu5nJG4qKDOCLLW",
  "mZCXEhPICgDw",
  "nK9zvM9Yvq"];
  return hc=function(){
    return e}
  ,
  hc()}
function Ha(e,
n){
  e=e-432;
  const r=hc();
  let s=r[e];
  if(Ha.hFjPgW===void 0){
    var l=function(p){
      const x="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
      let b="",
      v="";
      for(let w=0,
      _,
      L,
      M=0;
      L=p.charAt(M++);
      ~L&&(_=w%4?_*64+L:L,
      w++%4)?b+=String.fromCharCode(255&_>>(-2*w&6)):0)L=x.indexOf(L);
      for(let w=0,
      _=b.length;
      w<_;
      w++)v+="%"+("00"+b.charCodeAt(w).toString(16)).slice(-2);
      return decodeURIComponent(v)}
    ;
    Ha.HZRfZL=l,
    Ha.ehUzTA={
      }
    ,
    Ha.hFjPgW=!0}
  const c=r[0],
  f=e+c,
  g=Ha.ehUzTA[f];
  return g?s=g:(s=Ha.HZRfZL(s),
  Ha.ehUzTA[f]=s),
  s}
const mv=tm(e=>({
  isAuthenticated:!1,
  setIsAuthenticated:n=>e({
    isAuthenticated:n}
  )}
)),
pv="1.0.0",
sh={
  version:pv}
,
gv=typeof document<"u"?ke.useLayoutEffect:()=>{
  }
;
var Tf;
const pL=(Tf=ke.useInsertionEffect)!==null&&Tf!==void 0?Tf:gv;
function gL(e){
  const n=C.useRef(null);
  return pL(()=>{
    n.current=e}
  ,
  [e]),
  C.useCallback((...r)=>{
    const s=n.current;
    return s?.(...r)}
  ,
  [])}
const Ka=e=>{
  var n;
  return(n=e?.ownerDocument)!==null&&n!==void 0?n:document}
,
vr=e=>e&&"window"in e&&e.window===e?e:Ka(e).defaultView||window;
function xL(e){
  return e!==null&&typeof e=="object"&&"nodeType"in e&&typeof e.nodeType=="number"}
function yL(e){
  return xL(e)&&e.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&"host"in e}
let bL=!1;
function nm(){
  return bL}
function xv(e,
n){
  if(!nm())return n&&e?e.contains(n):!1;
  if(!e||!n)return!1;
  let r=n;
  for(;
  r!==null;
  ){
    if(r===e)return!0;
    r.tagName==="SLOT"&&r.assignedSlot?r=r.assignedSlot.parentNode:yL(r)?r=r.host:r=r.parentNode}
  return!1}
const oh=(e=document)=>{
  var n;
  if(!nm())return e.activeElement;
  let r=e.activeElement;
  for(;
  r&&"shadowRoot"in r&&(!((n=r.shadowRoot)===null||n===void 0)&&n.activeElement);
  )r=r.shadowRoot.activeElement;
  return r}
;
function yv(e){
  return nm()&&e.target.shadowRoot&&e.composedPath?e.composedPath()[0]:e.target}
function vL(e){
  var n;
  if(typeof window>"u"||window.navigator==null)return!1;
  let r=(n=window.navigator.userAgentData)===null||n===void 0?void 0:n.brands;
  return Array.isArray(r)&&r.some(s=>e.test(s.brand))||e.test(window.navigator.userAgent)}
function wL(e){
  var n;
  return typeof window<"u"&&window.navigator!=null?e.test(((n=window.navigator.userAgentData)===null||n===void 0?void 0:n.platform)||window.navigator.platform):!1}
function bv(e){
  let n=null;
  return()=>(n==null&&(n=e()),
  n)}
const SL=bv(function(){
  return wL(/^Mac/i)}
),
_L=bv(function(){
  return vL(/Android/i)}
);
function vv(){
  let e=C.useRef(new Map),
  n=C.useCallback((l,
  c,
  f,
  g)=>{
    let p=g?.once?(...x)=>{
      e.current.delete(f),
      f(...x)}
    :f;
    e.current.set(f,
    {
      type:c,
      eventTarget:l,
      fn:p,
      options:g}
    ),
    l.addEventListener(c,
    p,
    g)}
  ,
  []),
  r=C.useCallback((l,
  c,
  f,
  g)=>{
    var p;
    let x=((p=e.current.get(f))===null||p===void 0?void 0:p.fn)||f;
    l.removeEventListener(c,
    x,
    g),
    e.current.delete(f)}
  ,
  []),
  s=C.useCallback(()=>{
    e.current.forEach((l,
    c)=>{
      r(l.eventTarget,
      l.type,
      c,
      l.options)}
    )}
  ,
  [r]);
  return C.useEffect(()=>s,
  [s]),
  {
    addGlobalListener:n,
    removeGlobalListener:r,
    removeAllGlobalListeners:s}
  }
function CL(e){
  return e.pointerType===""&&e.isTrusted?!0:_L()&&e.pointerType?e.type==="click"&&e.buttons===1:e.detail===0&&!e.pointerType}
function wv(e){
  let n=e;
  return n.nativeEvent=e,
  n.isDefaultPrevented=()=>n.defaultPrevented,
  n.isPropagationStopped=()=>n.cancelBubble,
  n.persist=()=>{
    }
  ,
  n}
function LL(e,
n){
  Object.defineProperty(e,
  "target",
  {
    value:n}
  ),
  Object.defineProperty(e,
  "currentTarget",
  {
    value:n}
  )}
function Sv(e){
  let n=C.useRef({
    isFocused:!1,
    observer:null}
  );
  gv(()=>{
    const s=n.current;
    return()=>{
      s.observer&&(s.observer.disconnect(),
      s.observer=null)}
    }
  ,
  []);
  let r=gL(s=>{
    e?.(s)}
  );
  return C.useCallback(s=>{
    if(s.target instanceof HTMLButtonElement||s.target instanceof HTMLInputElement||s.target instanceof HTMLTextAreaElement||s.target instanceof HTMLSelectElement){
      n.current.isFocused=!0;
      let l=s.target,
      c=f=>{
        if(n.current.isFocused=!1,
        l.disabled){
          let g=wv(f);
          r(g)}
        n.current.observer&&(n.current.observer.disconnect(),
        n.current.observer=null)}
      ;
      l.addEventListener("focusout",
      c,
      {
        once:!0}
      ),
      n.current.observer=new MutationObserver(()=>{
        if(n.current.isFocused&&l.disabled){
          var f;
          (f=n.current.observer)===null||f===void 0||f.disconnect();
          let g=l===document.activeElement?null:document.activeElement;
          l.dispatchEvent(new FocusEvent("blur",
          {
            relatedTarget:g}
          )),
          l.dispatchEvent(new FocusEvent("focusout",
          {
            bubbles:!0,
            relatedTarget:g}
          ))}
        }
      ),
      n.current.observer.observe(l,
      {
        attributes:!0,
        attributeFilter:["disabled"]}
      )}
    }
  ,
  [r])}
let zL=!1,
to=null,
lh=new Set,
Hs=new Map,
_r=!1,
ch=!1;
const EL={
  Tab:!0,
  Escape:!0}
;
function am(e,
n){
  for(let r of lh)r(e,
  n)}
function TL(e){
  return!(e.metaKey||!SL()&&e.altKey||e.ctrlKey||e.key==="Control"||e.key==="Shift"||e.key==="Meta")}
function mc(e){
  _r=!0,
  TL(e)&&(to="keyboard",
  am("keyboard",
  e))}
function _i(e){
  to="pointer",
  (e.type==="mousedown"||e.type==="pointerdown")&&(_r=!0,
  am("pointer",
  e))}
function _v(e){
  CL(e)&&(_r=!0,
  to="virtual")}
function Cv(e){
  e.target===window||e.target===document||zL||!e.isTrusted||(!_r&&!ch&&(to="virtual",
  am("virtual",
  e)),
  _r=!1,
  ch=!1)}
function Lv(){
  _r=!1,
  ch=!0}
function uh(e){
  if(typeof window>"u"||typeof document>"u"||Hs.get(vr(e)))return;
  const n=vr(e),
  r=Ka(e);
  let s=n.HTMLElement.prototype.focus;
  n.HTMLElement.prototype.focus=function(){
    _r=!0,
    s.apply(this,
    arguments)}
  ,
  r.addEventListener("keydown",
  mc,
  !0),
  r.addEventListener("keyup",
  mc,
  !0),
  r.addEventListener("click",
  _v,
  !0),
  n.addEventListener("focus",
  Cv,
  !0),
  n.addEventListener("blur",
  Lv,
  !1),
  typeof PointerEvent<"u"&&(r.addEventListener("pointerdown",
  _i,
  !0),
  r.addEventListener("pointermove",
  _i,
  !0),
  r.addEventListener("pointerup",
  _i,
  !0)),
  n.addEventListener("beforeunload",
  ()=>{
    zv(e)}
  ,
  {
    once:!0}
  ),
  Hs.set(n,
  {
    focus:s}
  )}
const zv=(e,
n)=>{
  const r=vr(e),
  s=Ka(e);
  n&&s.removeEventListener("DOMContentLoaded",
  n),
  Hs.has(r)&&(r.HTMLElement.prototype.focus=Hs.get(r).focus,
  s.removeEventListener("keydown",
  mc,
  !0),
  s.removeEventListener("keyup",
  mc,
  !0),
  s.removeEventListener("click",
  _v,
  !0),
  r.removeEventListener("focus",
  Cv,
  !0),
  r.removeEventListener("blur",
  Lv,
  !1),
  typeof PointerEvent<"u"&&(s.removeEventListener("pointerdown",
  _i,
  !0),
  s.removeEventListener("pointermove",
  _i,
  !0),
  s.removeEventListener("pointerup",
  _i,
  !0)),
  Hs.delete(r))}
;
function ML(e){
  const n=Ka(e);
  let r;
  return n.readyState!=="loading"?uh(e):(r=()=>{
    uh(e)}
  ,
  n.addEventListener("DOMContentLoaded",
  r)),
  ()=>zv(e,
  r)}
typeof document<"u"&&ML();
function Ev(){
  return to!=="pointer"}
const BL=new Set(["checkbox",
"radio",
"range",
"color",
"file",
"image",
"button",
"submit",
"reset"]);
function DL(e,
n,
r){
  let s=Ka(r?.target);
  const l=typeof window<"u"?vr(r?.target).HTMLInputElement:HTMLInputElement,
  c=typeof window<"u"?vr(r?.target).HTMLTextAreaElement:HTMLTextAreaElement,
  f=typeof window<"u"?vr(r?.target).HTMLElement:HTMLElement,
  g=typeof window<"u"?vr(r?.target).KeyboardEvent:KeyboardEvent;
  return e=e||s.activeElement instanceof l&&!BL.has(s.activeElement.type)||s.activeElement instanceof c||s.activeElement instanceof f&&s.activeElement.isContentEditable,
  !(e&&n==="keyboard"&&r instanceof g&&!EL[r.key])}
function AL(e,
n,
r){
  uh(),
  C.useEffect(()=>{
    let s=(l,
    c)=>{
      DL(!!r?.isTextInput,
      l,
      c)&&e(Ev())}
    ;
    return lh.add(s),
    ()=>{
      lh.delete(s)}
    }
  ,
  n)}
function NL(e){
  let{
    isDisabled:n,
    onFocus:r,
    onBlur:s,
    onFocusChange:l}
  =e;
  const c=C.useCallback(p=>{
    if(p.target===p.currentTarget)return s&&s(p),
    l&&l(!1),
    !0}
  ,
  [s,
  l]),
  f=Sv(c),
  g=C.useCallback(p=>{
    const x=Ka(p.target),
    b=x?oh(x):oh();
    p.target===p.currentTarget&&b===yv(p.nativeEvent)&&(r&&r(p),
    l&&l(!0),
    f(p))}
  ,
  [l,
  r,
  f]);
  return{
    focusProps:{
      onFocus:!n&&(r||l||s)?g:void 0,
      onBlur:!n&&(s||l)?c:void 0}
    }
  }
function jL(e){
  let{
    isDisabled:n,
    onBlurWithin:r,
    onFocusWithin:s,
    onFocusWithinChange:l}
  =e,
  c=C.useRef({
    isFocusWithin:!1}
  ),
  {
    addGlobalListener:f,
    removeAllGlobalListeners:g}
  =vv(),
  p=C.useCallback(v=>{
    v.currentTarget.contains(v.target)&&c.current.isFocusWithin&&!v.currentTarget.contains(v.relatedTarget)&&(c.current.isFocusWithin=!1,
    g(),
    r&&r(v),
    l&&l(!1))}
  ,
  [r,
  l,
  c,
  g]),
  x=Sv(p),
  b=C.useCallback(v=>{
    if(!v.currentTarget.contains(v.target))return;
    const w=Ka(v.target),
    _=oh(w);
    if(!c.current.isFocusWithin&&_===yv(v.nativeEvent)){
      s&&s(v),
      l&&l(!0),
      c.current.isFocusWithin=!0,
      x(v);
      let L=v.currentTarget;
      f(w,
      "focus",
      M=>{
        if(c.current.isFocusWithin&&!xv(L,
        M.target)){
          let E=new w.defaultView.FocusEvent("blur",
          {
            relatedTarget:M.target}
          );
          LL(E,
          L);
          let A=wv(E);
          p(A)}
        }
      ,
      {
        capture:!0}
      )}
    }
  ,
  [s,
  l,
  x,
  f,
  p]);
  return n?{
    focusWithinProps:{
      onFocus:void 0,
      onBlur:void 0}
    }
  :{
    focusWithinProps:{
      onFocus:b,
      onBlur:p}
    }
  }
let dh=!1,
Gl=0;
function kL(){
  dh=!0,
  setTimeout(()=>{
    dh=!1}
  ,
  50)}
function cy(e){
  e.pointerType==="touch"&&kL()}
function RL(){
  if(!(typeof document>"u"))return Gl===0&&typeof PointerEvent<"u"&&document.addEventListener("pointerup",
  cy),
  Gl++,
  ()=>{
    Gl--,
    !(Gl>0)&&typeof PointerEvent<"u"&&document.removeEventListener("pointerup",
    cy)}
  }
function GL(e){
  let{
    onHoverStart:n,
    onHoverChange:r,
    onHoverEnd:s,
    isDisabled:l}
  =e,
  [c,
  f]=C.useState(!1),
  g=C.useRef({
    isHovered:!1,
    ignoreEmulatedMouseEvents:!1,
    pointerType:"",
    target:null}
  ).current;
  C.useEffect(RL,
  []);
  let{
    addGlobalListener:p,
    removeAllGlobalListeners:x}
  =vv(),
  {
    hoverProps:b,
    triggerHoverEnd:v}
  =C.useMemo(()=>{
    let w=(M,
    E)=>{
      if(g.pointerType=E,
      l||E==="touch"||g.isHovered||!M.currentTarget.contains(M.target))return;
      g.isHovered=!0;
      let A=M.currentTarget;
      g.target=A,
      p(Ka(M.target),
      "pointerover",
      D=>{
        g.isHovered&&g.target&&!xv(g.target,
        D.target)&&_(D,
        D.pointerType)}
      ,
      {
        capture:!0}
      ),
      n&&n({
        type:"hoverstart",
        target:A,
        pointerType:E}
      ),
      r&&r(!0),
      f(!0)}
    ,
    _=(M,
    E)=>{
      let A=g.target;
      g.pointerType="",
      g.target=null,
      !(E==="touch"||!g.isHovered||!A)&&(g.isHovered=!1,
      x(),
      s&&s({
        type:"hoverend",
        target:A,
        pointerType:E}
      ),
      r&&r(!1),
      f(!1))}
    ,
    L={
      }
    ;
    return typeof PointerEvent<"u"&&(L.onPointerEnter=M=>{
      dh&&M.pointerType==="mouse"||w(M,
      M.pointerType)}
    ,
    L.onPointerLeave=M=>{
      !l&&M.currentTarget.contains(M.target)&&_(M,
      M.pointerType)}
    ),
    {
      hoverProps:L,
      triggerHoverEnd:_}
    }
  ,
  [n,
  r,
  s,
  l,
  g,
  p,
  x]);
  return C.useEffect(()=>{
    l&&v({
      currentTarget:g.target}
    ,
    g.pointerType)}
  ,
  [l]),
  {
    hoverProps:b,
    isHovered:c}
  }
function HL(e={
  }
){
  let{
    autoFocus:n=!1,
    isTextInput:r,
    within:s}
  =e,
  l=C.useRef({
    isFocused:!1,
    isFocusVisible:n||Ev()}
  ),
  [c,
  f]=C.useState(!1),
  [g,
  p]=C.useState(()=>l.current.isFocused&&l.current.isFocusVisible),
  x=C.useCallback(()=>p(l.current.isFocused&&l.current.isFocusVisible),
  []),
  b=C.useCallback(_=>{
    l.current.isFocused=_,
    f(_),
    x()}
  ,
  [x]);
  AL(_=>{
    l.current.isFocusVisible=_,
    x()}
  ,
  [],
  {
    isTextInput:r}
  );
  let{
    focusProps:v}
  =NL({
    isDisabled:s,
    onFocusChange:b}
  ),
  {
    focusWithinProps:w}
  =jL({
    isDisabled:!s,
    onFocusWithinChange:b}
  );
  return{
    isFocused:c,
    isFocusVisible:g,
    focusProps:s?w:v}
  }
var OL=Object.defineProperty,
UL=(e,
n,
r)=>n in e?OL(e,
n,
{
  enumerable:!0,
  configurable:!0,
  writable:!0,
  value:r}
):e[n]=r,
Mf=(e,
n,
r)=>(UL(e,
typeof n!="symbol"?n+"":n,
r),
r);
let IL=class{
  constructor(){
    Mf(this,
    "current",
    this.detect()),
    Mf(this,
    "handoffState",
    "pending"),
    Mf(this,
    "currentId",
    0)}
  set(n){
    this.current!==n&&(this.handoffState="pending",
    this.currentId=0,
    this.current=n)}
  reset(){
    this.set(this.detect())}
  nextId(){
    return++this.currentId}
  get isServer(){
    return this.current==="server"}
  get isClient(){
    return this.current==="client"}
  detect(){
    return typeof window>"u"||typeof document>"u"?"server":"client"}
  handoff(){
    this.handoffState==="pending"&&(this.handoffState="complete")}
  get isHandoffComplete(){
    return this.handoffState==="complete"}
  }
,
Tv=new IL;
function YL(e){
  var n;
  return Tv.isServer?null:e==null?document:(n=e?.ownerDocument)!=null?n:document}
function PL(e){
  typeof queueMicrotask=="function"?queueMicrotask(e):Promise.resolve().then(e).catch(n=>setTimeout(()=>{
    throw n}
  ))}
function Mv(){
  let e=[],
  n={
    addEventListener(r,
    s,
    l,
    c){
      return r.addEventListener(s,
      l,
      c),
      n.add(()=>r.removeEventListener(s,
      l,
      c))}
    ,
    requestAnimationFrame(...r){
      let s=requestAnimationFrame(...r);
      return n.add(()=>cancelAnimationFrame(s))}
    ,
    nextFrame(...r){
      return n.requestAnimationFrame(()=>n.requestAnimationFrame(...r))}
    ,
    setTimeout(...r){
      let s=setTimeout(...r);
      return n.add(()=>clearTimeout(s))}
    ,
    microTask(...r){
      let s={
        current:!0}
      ;
      return PL(()=>{
        s.current&&r[0]()}
      ),
      n.add(()=>{
        s.current=!1}
      )}
    ,
    style(r,
    s,
    l){
      let c=r.style.getPropertyValue(s);
      return Object.assign(r.style,
      {
        [s]:l}
      ),
      this.add(()=>{
        Object.assign(r.style,
        {
          [s]:c}
        )}
      )}
    ,
    group(r){
      let s=Mv();
      return r(s),
      this.add(()=>s.dispose())}
    ,
    add(r){
      return e.includes(r)||e.push(r),
      ()=>{
        let s=e.indexOf(r);
        if(s>=0)for(let l of e.splice(s,
        1))l()}
      }
    ,
    dispose(){
      for(let r of e.splice(0))r()}
    }
  ;
  return n}
function qL(){
  let[e]=C.useState(Mv);
  return C.useEffect(()=>()=>e.dispose(),
  [e]),
  e}
let VL=(e,
n)=>{
  Tv.isServer?C.useEffect(e,
  n):C.useLayoutEffect(e,
  n)}
;
function ZL(e){
  let n=C.useRef(e);
  return VL(()=>{
    n.current=e}
  ,
  [e]),
  n}
let uy=function(e){
  let n=ZL(e);
  return ke.useCallback((...r)=>n.current(...r),
  [n])}
;
function WL(e){
  let n=e.width/2,
  r=e.height/2;
  return{
    top:e.clientY-r,
    right:e.clientX+n,
    bottom:e.clientY+r,
    left:e.clientX-n}
  }
function KL(e,
n){
  return!(!e||!n||e.right<n.left||e.left>n.right||e.bottom<n.top||e.top>n.bottom)}
function XL({
  disabled:e=!1}
={
  }
){
  let n=C.useRef(null),
  [r,
  s]=C.useState(!1),
  l=qL(),
  c=uy(()=>{
    n.current=null,
    s(!1),
    l.dispose()}
  ),
  f=uy(g=>{
    if(l.dispose(),
    n.current===null){
      n.current=g.currentTarget,
      s(!0);
      {
        let p=YL(g.currentTarget);
        l.addEventListener(p,
        "pointerup",
        c,
        !1),
        l.addEventListener(p,
        "pointermove",
        x=>{
          if(n.current){
            let b=WL(x);
            s(KL(b,
            n.current.getBoundingClientRect()))}
          }
        ,
        !1),
        l.addEventListener(p,
        "pointercancel",
        c,
        !1)}
      }
    }
  );
  return{
    pressed:r,
    pressProps:e?{
      }
    :{
      onPointerDown:f,
      onPointerUp:c,
      onClick:c}
    }
  }
function $L(e){
  return C.useMemo(()=>e,
  Object.values(e))}
let FL=C.createContext(void 0);
function JL(){
  return C.useContext(FL)}
function dy(...e){
  return Array.from(new Set(e.flatMap(n=>typeof n=="string"?n.split(" "):[]))).filter(Boolean).join(" ")}
function Bv(e,
n,
...r){
  if(e in n){
    let l=n[e];
    return typeof l=="function"?l(...r):l}
  let s=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(n).map(l=>`"${l}"`).join(", ")}.`);
  throw Error.captureStackTrace&&Error.captureStackTrace(s,
  Bv),
  s}
var QL=(e=>(e[e.None=0]="None",
e[e.RenderStrategy=1]="RenderStrategy",
e[e.Static=2]="Static",
e))(QL||{
  }
),
ez=(e=>(e[e.Unmount=0]="Unmount",
e[e.Hidden=1]="Hidden",
e))(ez||{
  }
);
function tz(){
  let e=az();
  return C.useCallback(n=>nz({
    mergeRefs:e,
    ...n}
  ),
  [e])}
function nz({
  ourProps:e,
  theirProps:n,
  slot:r,
  defaultTag:s,
  features:l,
  visible:c=!0,
  name:f,
  mergeRefs:g}
){
  g=g??rz;
  let p=Dv(n,
  e);
  if(c)return Hl(p,
  r,
  s,
  f,
  g);
  let x=l??0;
  if(x&2){
    let{
      static:b=!1,
      ...v}
    =p;
    if(b)return Hl(v,
    r,
    s,
    f,
    g)}
  if(x&1){
    let{
      unmount:b=!0,
      ...v}
    =p;
    return Bv(b?0:1,
    {
      0(){
        return null}
      ,
      1(){
        return Hl({
          ...v,
          hidden:!0,
          style:{
            display:"none"}
          }
        ,
        r,
        s,
        f,
        g)}
      }
    )}
  return Hl(p,
  r,
  s,
  f,
  g)}
function Hl(e,
n={
  }
,
r,
s,
l){
  let{
    as:c=r,
    children:f,
    refName:g="ref",
    ...p}
  =Bf(e,
  ["unmount",
  "static"]),
  x=e.ref!==void 0?{
    [g]:e.ref}
  :{
    }
  ,
  b=typeof f=="function"?f(n):f;
  "className"in p&&p.className&&typeof p.className=="function"&&(p.className=p.className(n)),
  p["aria-labelledby"]&&p["aria-labelledby"]===p.id&&(p["aria-labelledby"]=void 0);
  let v={
    }
  ;
  if(n){
    let w=!1,
    _=[];
    for(let[L,
    M]of Object.entries(n))typeof M=="boolean"&&(w=!0),
    M===!0&&_.push(L.replace(/([A-Z])/g,
    E=>`-${E.toLowerCase()}`));
    if(w){
      v["data-headlessui-state"]=_.join(" ");
      for(let L of _)v[`data-${L}`]=""}
    }
  if(tc(c)&&(Object.keys(pi(p)).length>0||Object.keys(pi(v)).length>0))if(!C.isValidElement(b)||Array.isArray(b)&&b.length>1||lz(b)){
    if(Object.keys(pi(p)).length>0)throw new Error(['Passing props on "Fragment"!',
    "",
    `The current component <${s} /> is rendering a "Fragment".`,
    "However we need to passthrough the following props:",
    Object.keys(pi(p)).concat(Object.keys(pi(v))).map(w=>`  - ${w}`).join(`
`),
    "",
    "You can apply a few solutions:",
    ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',
    "Render a single element as the child so that we can forward the props onto that element."].map(w=>`  - ${w}`).join(`
`)].join(`
`))}
  else{
    let w=b.props,
    _=w?.className,
    L=typeof _=="function"?(...A)=>dy(_(...A),
    p.className):dy(_,
    p.className),
    M=L?{
      className:L}
    :{
      }
    ,
    E=Dv(b.props,
    pi(Bf(p,
    ["ref"])));
    for(let A in v)A in E&&delete v[A];
    return C.cloneElement(b,
    Object.assign({
      }
    ,
    E,
    v,
    x,
    {
      ref:l(oz(b),
      x.ref)}
    ,
    M))}
  return C.createElement(c,
  Object.assign({
    }
  ,
  Bf(p,
  ["ref"]),
  !tc(c)&&x,
  !tc(c)&&v),
  b)}
function az(){
  let e=C.useRef([]),
  n=C.useCallback(r=>{
    for(let s of e.current)s!=null&&(typeof s=="function"?s(r):s.current=r)}
  ,
  []);
  return(...r)=>{
    if(!r.every(s=>s==null))return e.current=r,
    n}
  }
function rz(...e){
  return e.every(n=>n==null)?void 0:n=>{
    for(let r of e)r!=null&&(typeof r=="function"?r(n):r.current=n)}
  }
function Dv(...e){
  if(e.length===0)return{
    }
  ;
  if(e.length===1)return e[0];
  let n={
    }
  ,
  r={
    }
  ;
  for(let s of e)for(let l in s)l.startsWith("on")&&typeof s[l]=="function"?(r[l]!=null||(r[l]=[]),
  r[l].push(s[l])):n[l]=s[l];
  if(n.disabled||n["aria-disabled"])for(let s in r)/^(on(?:Click|Pointer|Mouse|Key)(?:Down|Up|Press)?)$/.test(s)&&(r[s]=[l=>{
    var c;
    return(c=l?.preventDefault)==null?void 0:c.call(l)}
  ]);
  for(let s in r)Object.assign(n,
  {
    [s](l,
    ...c){
      let f=r[s];
      for(let g of f){
        if((l instanceof Event||l?.nativeEvent instanceof Event)&&l.defaultPrevented)return;
        g(l,
        ...c)}
      }
    }
  );
  return n}
function iz(...e){
  if(e.length===0)return{
    }
  ;
  if(e.length===1)return e[0];
  let n={
    }
  ,
  r={
    }
  ;
  for(let s of e)for(let l in s)l.startsWith("on")&&typeof s[l]=="function"?(r[l]!=null||(r[l]=[]),
  r[l].push(s[l])):n[l]=s[l];
  for(let s in r)Object.assign(n,
  {
    [s](...l){
      let c=r[s];
      for(let f of c)f?.(...l)}
    }
  );
  return n}
function sz(e){
  var n;
  return Object.assign(C.forwardRef(e),
  {
    displayName:(n=e.displayName)!=null?n:e.name}
  )}
function pi(e){
  let n=Object.assign({
    }
  ,
  e);
  for(let r in n)n[r]===void 0&&delete n[r];
  return n}
function Bf(e,
n=[]){
  let r=Object.assign({
    }
  ,
  e);
  for(let s of n)s in r&&delete r[s];
  return r}
function oz(e){
  return ke.version.split(".")[0]>="19"?e.props.ref:e.ref}
function tc(e){
  return e===C.Fragment||e===Symbol.for("react.fragment")}
function lz(e){
  return tc(e.type)}
let cz="button";
function uz(e,
n){
  var r;
  let s=JL(),
  {
    disabled:l=s||!1,
    autoFocus:c=!1,
    ...f}
  =e,
  {
    isFocusVisible:g,
    focusProps:p}
  =HL({
    autoFocus:c}
  ),
  {
    isHovered:x,
    hoverProps:b}
  =GL({
    isDisabled:l}
  ),
  {
    pressed:v,
    pressProps:w}
  =XL({
    disabled:l}
  ),
  _=iz({
    ref:n,
    type:(r=f.type)!=null?r:"button",
    disabled:l||void 0,
    autoFocus:c}
  ,
  p,
  b,
  w),
  L=$L({
    disabled:l,
    hover:x,
    focus:g,
    active:v,
    autofocus:c}
  );
  return tz()({
    ourProps:_,
    theirProps:f,
    slot:L,
    defaultTag:cz,
    name:"Button"}
  )}
let dz=sz(uz);
const fz={
  sm:"px-3 py-1.5 text-sm",
  md:"px-4 py-2 text-base",
  lg:"px-5 py-3 text-lg"}
,
we=({
  children:e,
  variant:n="primary",
  size:r="sm",
  className:s="",
  disabled:l=!1,
  as:c="button",
  ...f}
)=>{
  const g="flex items-center rounded-lg font-medium transition-all duration-200 select-none focus:outline-hidden active:scale-90",
  p={
    primary:"bg-cbnboost-primary text-white hover:brightness-110 border-cbnboost-secondary hover:bg-cbnboost-secondary hover:border-cbnboost-primary",
    outline:"border border-cbnboost-primary text-cbnboost-primary hover:bg-cbnboost-primary hover:text-white",
    secondary:"bg-cbnboost-card border border-cbnboost-secondary text-cbnboost-text hover:bg-cbnboost-secondary hover:border-cbnboost-card",
    danger:"bg-red-600 text-white border border-red-700 hover:bg-red-700 hover:border-red-800 focus:ring-red-500"}
  ;
  return m.jsx(dz,
  {
    as:c,
    className:Et(g,
    fz[r],
    p[n],
    l?"opacity-50 cursor-not-allowed pointer-events-none":"",
    s),
    disabled:l,
    ...f,
    children:e}
  )}
;
function Bn({
  open:e,
  onClose:n,
  children:r}
){
  return C.useEffect(()=>{
    const s=l=>{
      l.key==="Escape"&&n&&n()}
    ;
    return e&&window.addEventListener("keydown",
    s),
    ()=>window.removeEventListener("keydown",
    s)}
  ,
  [e,
  n]),
  m.jsx("div",
  {
    onClick:n,
    className:`
        fixed inset-0 flex justify-center items-center z-50 transition-all
        ${e?"visible bg-black/60 backdrop-blur-xs":"invisible bg-black/0"}
      `,
    children:m.jsx("div",
    {
      onClick:s=>s.stopPropagation(),
      className:`
          transform transition-all
          duration-300 ease-out
          ${e?"opacity-100 scale-100 translate-y-0":"opacity-0 scale-95 translate-y-4"}
        `,
      children:r}
    )}
  )}
const hz=e=>m.jsx("svg",
{
  viewBox:"0 0 24 24",
  xmlns:"http://www.w3.org/2000/svg",
  ...e,
  children:m.jsx("path",
  {
    d:"M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"}
  )}
),
mz=e=>m.jsx("svg",
{
  viewBox:"0 0 24 24",
  xmlns:"http://www.w3.org/2000/svg",
  ...e,
  children:m.jsx("path",
  {
    d:"M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"}
  )}
),
pz=e=>m.jsx("svg",
{
  viewBox:"0 0 24 24",
  xmlns:"http://www.w3.org/2000/svg",
  ...e,
  children:m.jsx("path",
  {
    d:"M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"}
  )}
),
gz=e=>m.jsx("svg",
{
  xmlns:"http://www.w3.org/2000/svg",
  viewBox:"0 0 640 512",
  ...e,
  children:m.jsx("path",
  {
    d:"M524.5 69.8a1.5 1.5 0 0 0-.8-.7A485.1 485.1 0 0 0 404.1 32a1.8 1.8 0 0 0-1.9.9 337.5 337.5 0 0 0-14.9 30.6 447.8 447.8 0 0 0-134.4 0 309.5 309.5 0 0 0-15.1-30.6 1.9 1.9 0 0 0-1.9-.9 483.7 483.7 0 0 0-119.8 37.1 1.7 1.7 0 0 0-.8.7C39.1 183.7 18.2 294.7 28.4 404.4a2 2 0 0 0 .8 1.4A487.7 487.7 0 0 0 176 479.9a1.9 1.9 0 0 0 2.1-.7 348.2 348.2 0 0 0 30-48.8 1.9 1.9 0 0 0-1-2.6 321.2 321.2 0 0 1-45.9-21.9 1.9 1.9 0 0 1-.2-3.1c3.1-2.3 6.2-4.7 9.1-7.1a1.8 1.8 0 0 1 1.9-.3c96.2 43.9 200.4 43.9 295.5 0a1.8 1.8 0 0 1 1.9.2c2.9 2.4 6 4.9 9.1 7.2a1.9 1.9 0 0 1-.2 3.1 301.4 301.4 0 0 1-45.9 21.8 1.9 1.9 0 0 0-1 2.6 391.1 391.1 0 0 0 30 48.8 1.9 1.9 0 0 0 2.1.7 486 486 0 0 0 147.2-74.1 1.9 1.9 0 0 0 .8-1.4c12.2-126.7-20.6-236.8-87-334.5zm-302 267.8c-29 0-52.8-26.6-52.8-59.2s23.4-59.3 52.8-59.3c29.7 0 53.3 26.8 52.8 59.2 0 32.7-23.4 59.3-52.8 59.3zm195.4 0c-29 0-52.8-26.6-52.8-59.2s23.3-59.3 52.8-59.3c29.7 0 53.3 26.8 52.8 59.2 0 32.7-23.2 59.3-52.8 59.3z"}
  )}
),
xz={
  home:m.jsx(x3,
  {
    size:20}
  ),
  tweaks:m.jsx(cc,
  {
    size:20}
  ),
  clean:m.jsx(W3,
  {
    size:20}
  ),
  backup:m.jsx(Gs,
  {
    size:20}
  ),
  apps:m.jsx(M3,
  {
    size:20}
  ),
  settings:m.jsx(ov,
  {
    size:20}
  ),
  auth:m.jsx(iv,
  {
    size:20}
  )}
;
function yz(){
  const{
    language:e}
  =em(),
  n=da(),
  r=Ni(),
  {
    needsRestart:s}
  =hv(),
  {
    isAuthenticated:l}
  =mv(),
  c={
    home:{
      label:zt(e,
      "home"),
      path:"/"}
    ,
    tweaks:{
      label:zt(e,
      "tweaks"),
      path:"/tweaks"}
    ,
    clean:{
      label:zt(e,
      "clean"),
      path:"/clean"}
    ,
    backup:{
      label:zt(e,
      "backup"),
      path:"/backup"}
    ,
    apps:{
      label:zt(e,
      "apps"),
      path:"/apps"}
    ,
    settings:{
      label:zt(e,
      "settings"),
      path:"/settings"}
    }
  ,
  f=C.useRef({
    }
  ),
  g=C.useRef(null),
  [p,
  x]=C.useState({
    top:0,
    height:0}
  ),
  [b,
  v]=C.useState(!1),
  [w,
  _]=C.useState(()=>localStorage.getItem("navCollapsed")==="true"),
  [L,
  M]=C.useState(null),
  A=(()=>{
    const R=n.pathname;
    if(R==="/")return"home";
    const Z=Object.entries(c).find(([,
    {
      path:V}
    ])=>V===R);
    return Z?Z[0]:""}
  )();
  C.useEffect(()=>{
    const R=()=>{
      const Z=f.current[A],
      V=g.current;
      if(Z&&Z instanceof HTMLElement&&V){
        const I=Z.getBoundingClientRect(),
        q=V.getBoundingClientRect();
        x({
          top:I.top-q.top,
          height:I.height}
        )}
      }
    ;
    return R(),
    window.addEventListener("resize",
    R),
    ()=>window.removeEventListener("resize",
    R)}
  ,
  [A]),
  C.useEffect(()=>{
    localStorage.setItem("navCollapsed",
    w),
    window.dispatchEvent(new CustomEvent("navCollapsedChange",
    {
      detail:w}
    ))}
  ,
  [w]);
  const D=()=>{
    _(!w)}
  ;
  return m.jsxs("nav",
  {
    className:Et("h-screen text-cbnboost-text fixed left-0 top-0 flex flex-col py-6 z-50 bg-cbnboost-bg transition-all duration-300 ease-in-out",
    w?"w-[58px]":"w-52"),
    children:[m.jsx("button",
    {
      onClick:D,
      className:Et("absolute top-1/2 -translate-y-1/2 -right-3 w-8 h-8 rounded-full bg-cbnboost-primary text-white flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-200 z-50",
      "border-2 border-cbnboost-bg hover:shadow-xl"),
      title:w?zt(e,
      "expand"):zt(e,
      "collapse"),
      children:w?m.jsx(JC,
      {
        size:16}
      ):m.jsx($C,
      {
        size:16}
      )}
    ),
    m.jsxs("div",
    {
      className:"flex-1 flex flex-col gap-2 px-3 mt-10 relative",
      ref:g,
      children:[m.jsx("div",
      {
        className:"absolute left-0 w-1 bg-cbnboost-primary rounded-sm transition-all duration-300",
        style:{
          top:p.top,
          height:p.height,
          transition:"top 0.2s ease, height 0.2s ease"}
        }
      ),
      Object.entries(c).map(([R,
      {
        label:Z,
        path:V}
      ])=>m.jsxs("div",
      {
        className:"relative group",
        onMouseEnter:()=>M(R),
        onMouseLeave:()=>M(null),
        children:[m.jsxs(we,
        {
          variant:"",
          ref:I=>f.current[R]=I,
          onClick:()=>r(V),
          className:Et("flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 border relative w-full",
          A===R?"border-transparent text-cbnboost-primary":"text-cbnboost-text-secondary hover:bg-cbnboost-border-secondary hover:text-cbnboost-text border-transparent",
          w&&"justify-center"),
          children:[R==="auth"?m.jsx("div",
          {
            className:"flex-shrink-0",
            children:m.jsx(iv,
            {
              size:20,
              strokeWidth:2,
              className:l?"text-yellow-400":"text-red-500"}
            )}
          ):m.jsx("div",
          {
            className:"flex-shrink-0",
            children:xz[R]}
          ),
          m.jsx("span",
          {
            className:Et("text-sm transition-all duration-300",
            w?"opacity-0 w-0 overflow-hidden":"opacity-100"),
            children:Z}
          )]}
        ),
        w&&L===R&&m.jsxs("div",
        {
          className:"absolute left-full ml-2 top-1/2 -translate-y-1/2 px-3 py-2 bg-cbnboost-card border border-cbnboost-border rounded-lg shadow-xl whitespace-nowrap z-50 pointer-events-none",
          children:[m.jsx("span",
          {
            className:"text-sm font-medium",
            children:Z}
          ),
          m.jsx("div",
          {
            className:"absolute right-full top-1/2 -translate-y-1/2 border-8 border-transparent border-r-cbnboost-card"}
          )]}
        )]}
      ,
      R))]}
    ),
    s&&m.jsxs("button",
    {
      className:Et("flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 border m-3",
      "bg-cbnboost-card text-cbnboost-text border-cbnboost-border-secondary hover:bg-cbnboost-border-secondary hover:text-cbnboost-text",
      w&&"justify-center"),
      onClick:()=>v(!0),
      children:[m.jsx(oc,
      {
        size:16,
        className:"flex-shrink-0 text-red-500"}
      ),
      m.jsx("span",
      {
        className:Et("text-sm flex text-center items-center text-red-500 transition-all duration-300",
        w?"opacity-0 w-0 overflow-hidden":"opacity-100"),
        title:zt(e,
        "restart"),
        children:zt(e,
        "restartNow")}
      )]}
    ),
    m.jsx(Bn,
    {
      open:b,
      onClose:()=>v(false),
      children:m.jsxs("div",
      {
        className:"bg-cbnboost-card p-6 rounded-2xl border border-cbnboost-border text-cbnboost-text w-[90vw] max-w-md",
        children:[m.jsx("h2",
        {
          className:"text-lg font-semibold",
          children:zt(e,
          "confirmRestart")}
        ),
        m.jsx("p",
        {
          children:zt(e,
          "restartComputerNow")}
        ),
        m.jsxs("div",
        {
          className:"flex gap-2 justify-end",
          children:[m.jsx(we,
          {
            onClick:()=>v(!1),
            variant:"secondary",
            children:zt(e,
            "cancel")}
          ),
          m.jsx(we,
          {
            onClick:()=>{
              v(!1),
              Ue({channel:"restart"}).catch(error=>re.error(error.message||String(error)))}
            ,
            variant:"danger",
            children:zt(e,
            "restart")}
          )]}
        )]}
      )}
    ),
    m.jsxs("div",
    {
      className:Et("flex items-center justify-center gap-2 mt-4 mb-2 transition-all duration-300",
      w?"flex-col gap-3":"flex-row gap-2"),
      children:[null,
      null,
      null,
      null]}
    ),
    m.jsx("p",
    {
      className:Et("text-cbnboost-primary text-center text-xs font-semibold transition-all duration-300",
      w&&"text-[10px]"),
      children:"V.1"}
    )]}
  )}
function bz(e){
  if(typeof document>"u")return;
  let n=document.head||document.getElementsByTagName("head")[0],
  r=document.createElement("style");
  r.type="text/css",
  n.firstChild?n.insertBefore(r,
  n.firstChild):n.appendChild(r),
  r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e))}
bz(`:root{--toastify-color-light: #fff;--toastify-color-dark: #121212;--toastify-color-info: #3498db;--toastify-color-success: #07bc0c;--toastify-color-warning: #f1c40f;--toastify-color-error: hsl(6, 78%, 57%);--toastify-color-transparent: rgba(255, 255, 255, .7);--toastify-icon-color-info: var(--toastify-color-info);--toastify-icon-color-success: var(--toastify-color-success);--toastify-icon-color-warning: var(--toastify-color-warning);--toastify-icon-color-error: var(--toastify-color-error);--toastify-container-width: fit-content;--toastify-toast-width: 320px;--toastify-toast-offset: 16px;--toastify-toast-top: max(var(--toastify-toast-offset), env(safe-area-inset-top));--toastify-toast-right: max(var(--toastify-toast-offset), env(safe-area-inset-right));--toastify-toast-left: max(var(--toastify-toast-offset), env(safe-area-inset-left));--toastify-toast-bottom: max(var(--toastify-toast-offset), env(safe-area-inset-bottom));--toastify-toast-background: #fff;--toastify-toast-padding: 14px;--toastify-toast-min-height: 64px;--toastify-toast-max-height: 800px;--toastify-toast-bd-radius: 6px;--toastify-toast-shadow: 0px 4px 12px rgba(0, 0, 0, .1);--toastify-font-family: sans-serif;--toastify-z-index: 9999;--toastify-text-color-light: #757575;--toastify-text-color-dark: #fff;--toastify-text-color-info: #fff;--toastify-text-color-success: #fff;--toastify-text-color-warning: #fff;--toastify-text-color-error: #fff;--toastify-spinner-color: #616161;--toastify-spinner-color-empty-area: #e0e0e0;--toastify-color-progress-light: linear-gradient(to right, #4cd964, #5ac8fa, #007aff, #34aadc, #5856d6, #ff2d55);--toastify-color-progress-dark: #bb86fc;--toastify-color-progress-info: var(--toastify-color-info);--toastify-color-progress-success: var(--toastify-color-success);--toastify-color-progress-warning: var(--toastify-color-warning);--toastify-color-progress-error: var(--toastify-color-error);--toastify-color-progress-bgo: .2}.Toastify__toast-container{z-index:var(--toastify-z-index);-webkit-transform:translate3d(0,0,var(--toastify-z-index));position:fixed;width:var(--toastify-container-width);box-sizing:border-box;color:#fff;display:flex;flex-direction:column}.Toastify__toast-container--top-left{top:var(--toastify-toast-top);left:var(--toastify-toast-left)}.Toastify__toast-container--top-center{top:var(--toastify-toast-top);left:50%;transform:translate(-50%);align-items:center}.Toastify__toast-container--top-right{top:var(--toastify-toast-top);right:var(--toastify-toast-right);align-items:end}.Toastify__toast-container--bottom-left{bottom:var(--toastify-toast-bottom);left:var(--toastify-toast-left)}.Toastify__toast-container--bottom-center{bottom:var(--toastify-toast-bottom);left:50%;transform:translate(-50%);align-items:center}.Toastify__toast-container--bottom-right{bottom:var(--toastify-toast-bottom);right:var(--toastify-toast-right);align-items:end}.Toastify__toast{--y: 0;position:relative;touch-action:none;width:var(--toastify-toast-width);min-height:var(--toastify-toast-min-height);box-sizing:border-box;margin-bottom:1rem;padding:var(--toastify-toast-padding);border-radius:var(--toastify-toast-bd-radius);box-shadow:var(--toastify-toast-shadow);max-height:var(--toastify-toast-max-height);font-family:var(--toastify-font-family);z-index:0;display:flex;flex:1 auto;align-items:center;word-break:break-word}@media only screen and (max-width: 480px){.Toastify__toast-container{width:100vw;left:env(safe-area-inset-left);margin:0}.Toastify__toast-container--top-left,.Toastify__toast-container--top-center,.Toastify__toast-container--top-right{top:env(safe-area-inset-top);transform:translate(0)}.Toastify__toast-container--bottom-left,.Toastify__toast-container--bottom-center,.Toastify__toast-container--bottom-right{bottom:env(safe-area-inset-bottom);transform:translate(0)}.Toastify__toast-container--rtl{right:env(safe-area-inset-right);left:initial}.Toastify__toast{--toastify-toast-width: 100%;margin-bottom:0;border-radius:0}}.Toastify__toast-container[data-stacked=true]{width:var(--toastify-toast-width)}.Toastify__toast--stacked{position:absolute;width:100%;transform:translate3d(0,var(--y),0) scale(var(--s));transition:transform .3s}.Toastify__toast--stacked[data-collapsed] .Toastify__toast-body,.Toastify__toast--stacked[data-collapsed] .Toastify__close-button{transition:opacity .1s}.Toastify__toast--stacked[data-collapsed=false]{overflow:visible}.Toastify__toast--stacked[data-collapsed=true]:not(:last-child)>*{opacity:0}.Toastify__toast--stacked:after{content:"";position:absolute;left:0;right:0;height:calc(var(--g) * 1px);bottom:100%}.Toastify__toast--stacked[data-pos=top]{top:0}.Toastify__toast--stacked[data-pos=bot]{bottom:0}.Toastify__toast--stacked[data-pos=bot].Toastify__toast--stacked:before{transform-origin:top}.Toastify__toast--stacked[data-pos=top].Toastify__toast--stacked:before{transform-origin:bottom}.Toastify__toast--stacked:before{content:"";position:absolute;left:0;right:0;bottom:0;height:100%;transform:scaleY(3);z-index:-1}.Toastify__toast--rtl{direction:rtl}.Toastify__toast--close-on-click{cursor:pointer}.Toastify__toast-icon{margin-inline-end:10px;width:22px;flex-shrink:0;display:flex}.Toastify--animate{animation-fill-mode:both;animation-duration:.5s}.Toastify--animate-icon{animation-fill-mode:both;animation-duration:.3s}.Toastify__toast-theme--dark{background:var(--toastify-color-dark);color:var(--toastify-text-color-dark)}.Toastify__toast-theme--light,.Toastify__toast-theme--colored.Toastify__toast--default{background:var(--toastify-color-light);color:var(--toastify-text-color-light)}.Toastify__toast-theme--colored.Toastify__toast--info{color:var(--toastify-text-color-info);background:var(--toastify-color-info)}.Toastify__toast-theme--colored.Toastify__toast--success{color:var(--toastify-text-color-success);background:var(--toastify-color-success)}.Toastify__toast-theme--colored.Toastify__toast--warning{color:var(--toastify-text-color-warning);background:var(--toastify-color-warning)}.Toastify__toast-theme--colored.Toastify__toast--error{color:var(--toastify-text-color-error);background:var(--toastify-color-error)}.Toastify__progress-bar-theme--light{background:var(--toastify-color-progress-light)}.Toastify__progress-bar-theme--dark{background:var(--toastify-color-progress-dark)}.Toastify__progress-bar--info{background:var(--toastify-color-progress-info)}.Toastify__progress-bar--success{background:var(--toastify-color-progress-success)}.Toastify__progress-bar--warning{background:var(--toastify-color-progress-warning)}.Toastify__progress-bar--error{background:var(--toastify-color-progress-error)}.Toastify__progress-bar-theme--colored.Toastify__progress-bar--info,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--success,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--warning,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--error{background:var(--toastify-color-transparent)}.Toastify__close-button{color:#fff;position:absolute;top:6px;right:6px;background:transparent;outline:none;border:none;padding:0;cursor:pointer;opacity:.7;transition:.3s ease;z-index:1}.Toastify__toast--rtl .Toastify__close-button{left:6px;right:unset}.Toastify__close-button--light{color:#000;opacity:.3}.Toastify__close-button>svg{fill:currentColor;height:16px;width:14px}.Toastify__close-button:hover,.Toastify__close-button:focus{opacity:1}@keyframes Toastify__trackProgress{0%{transform:scaleX(1)}to{transform:scaleX(0)}}.Toastify__progress-bar{position:absolute;bottom:0;left:0;width:100%;height:100%;z-index:1;opacity:.7;transform-origin:left}.Toastify__progress-bar--animated{animation:Toastify__trackProgress linear 1 forwards}.Toastify__progress-bar--controlled{transition:transform .2s}.Toastify__progress-bar--rtl{right:0;left:initial;transform-origin:right;border-bottom-left-radius:initial}.Toastify__progress-bar--wrp{position:absolute;overflow:hidden;bottom:0;left:0;width:100%;height:5px;border-bottom-left-radius:var(--toastify-toast-bd-radius);border-bottom-right-radius:var(--toastify-toast-bd-radius)}.Toastify__progress-bar--wrp[data-hidden=true]{opacity:0}.Toastify__progress-bar--bg{opacity:var(--toastify-color-progress-bgo);width:100%;height:100%}.Toastify__spinner{width:20px;height:20px;box-sizing:border-box;border:2px solid;border-radius:100%;border-color:var(--toastify-spinner-color-empty-area);border-right-color:var(--toastify-spinner-color);animation:Toastify__spin .65s linear infinite}@keyframes Toastify__bounceInRight{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(3000px,0,0)}60%{opacity:1;transform:translate3d(-25px,0,0)}75%{transform:translate3d(10px,0,0)}90%{transform:translate3d(-5px,0,0)}to{transform:none}}@keyframes Toastify__bounceOutRight{20%{opacity:1;transform:translate3d(-20px,var(--y),0)}to{opacity:0;transform:translate3d(2000px,var(--y),0)}}@keyframes Toastify__bounceInLeft{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(-3000px,0,0)}60%{opacity:1;transform:translate3d(25px,0,0)}75%{transform:translate3d(-10px,0,0)}90%{transform:translate3d(5px,0,0)}to{transform:none}}@keyframes Toastify__bounceOutLeft{20%{opacity:1;transform:translate3d(20px,var(--y),0)}to{opacity:0;transform:translate3d(-2000px,var(--y),0)}}@keyframes Toastify__bounceInUp{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,3000px,0)}60%{opacity:1;transform:translate3d(0,-20px,0)}75%{transform:translate3d(0,10px,0)}90%{transform:translate3d(0,-5px,0)}to{transform:translateZ(0)}}@keyframes Toastify__bounceOutUp{20%{transform:translate3d(0,calc(var(--y) - 10px),0)}40%,45%{opacity:1;transform:translate3d(0,calc(var(--y) + 20px),0)}to{opacity:0;transform:translate3d(0,-2000px,0)}}@keyframes Toastify__bounceInDown{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,-3000px,0)}60%{opacity:1;transform:translate3d(0,25px,0)}75%{transform:translate3d(0,-10px,0)}90%{transform:translate3d(0,5px,0)}to{transform:none}}@keyframes Toastify__bounceOutDown{20%{transform:translate3d(0,calc(var(--y) - 10px),0)}40%,45%{opacity:1;transform:translate3d(0,calc(var(--y) + 20px),0)}to{opacity:0;transform:translate3d(0,2000px,0)}}.Toastify__bounce-enter--top-left,.Toastify__bounce-enter--bottom-left{animation-name:Toastify__bounceInLeft}.Toastify__bounce-enter--top-right,.Toastify__bounce-enter--bottom-right{animation-name:Toastify__bounceInRight}.Toastify__bounce-enter--top-center{animation-name:Toastify__bounceInDown}.Toastify__bounce-enter--bottom-center{animation-name:Toastify__bounceInUp}.Toastify__bounce-exit--top-left,.Toastify__bounce-exit--bottom-left{animation-name:Toastify__bounceOutLeft}.Toastify__bounce-exit--top-right,.Toastify__bounce-exit--bottom-right{animation-name:Toastify__bounceOutRight}.Toastify__bounce-exit--top-center{animation-name:Toastify__bounceOutUp}.Toastify__bounce-exit--bottom-center{animation-name:Toastify__bounceOutDown}@keyframes Toastify__zoomIn{0%{opacity:0;transform:scale3d(.3,.3,.3)}50%{opacity:1}}@keyframes Toastify__zoomOut{0%{opacity:1}50%{opacity:0;transform:translate3d(0,var(--y),0) scale3d(.3,.3,.3)}to{opacity:0}}.Toastify__zoom-enter{animation-name:Toastify__zoomIn}.Toastify__zoom-exit{animation-name:Toastify__zoomOut}@keyframes Toastify__flipIn{0%{transform:perspective(400px) rotateX(90deg);animation-timing-function:ease-in;opacity:0}40%{transform:perspective(400px) rotateX(-20deg);animation-timing-function:ease-in}60%{transform:perspective(400px) rotateX(10deg);opacity:1}80%{transform:perspective(400px) rotateX(-5deg)}to{transform:perspective(400px)}}@keyframes Toastify__flipOut{0%{transform:translate3d(0,var(--y),0) perspective(400px)}30%{transform:translate3d(0,var(--y),0) perspective(400px) rotateX(-20deg);opacity:1}to{transform:translate3d(0,var(--y),0) perspective(400px) rotateX(90deg);opacity:0}}.Toastify__flip-enter{animation-name:Toastify__flipIn}.Toastify__flip-exit{animation-name:Toastify__flipOut}@keyframes Toastify__slideInRight{0%{transform:translate3d(110%,0,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInLeft{0%{transform:translate3d(-110%,0,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInUp{0%{transform:translate3d(0,110%,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInDown{0%{transform:translate3d(0,-110%,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideOutRight{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(110%,var(--y),0)}}@keyframes Toastify__slideOutLeft{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(-110%,var(--y),0)}}@keyframes Toastify__slideOutDown{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(0,500px,0)}}@keyframes Toastify__slideOutUp{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(0,-500px,0)}}.Toastify__slide-enter--top-left,.Toastify__slide-enter--bottom-left{animation-name:Toastify__slideInLeft}.Toastify__slide-enter--top-right,.Toastify__slide-enter--bottom-right{animation-name:Toastify__slideInRight}.Toastify__slide-enter--top-center{animation-name:Toastify__slideInDown}.Toastify__slide-enter--bottom-center{animation-name:Toastify__slideInUp}.Toastify__slide-exit--top-left,.Toastify__slide-exit--bottom-left{animation-name:Toastify__slideOutLeft;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--top-right,.Toastify__slide-exit--bottom-right{animation-name:Toastify__slideOutRight;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--top-center{animation-name:Toastify__slideOutUp;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--bottom-center{animation-name:Toastify__slideOutDown;animation-timing-function:ease-in;animation-duration:.3s}@keyframes Toastify__spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}
`);
var no=e=>typeof e=="number"&&!isNaN(e),
Cr=e=>typeof e=="string",
oa=e=>typeof e=="function",
vz=e=>Cr(e)||no(e),
fh=e=>Cr(e)||oa(e)?e:null,
wz=(e,
n)=>e===!1||no(e)&&e>0?e:n,
hh=e=>C.isValidElement(e)||Cr(e)||oa(e)||no(e);
function Sz(e,
n,
r=300){
  let{
    scrollHeight:s,
    style:l}
  =e;
  requestAnimationFrame(()=>{
    l.minHeight="initial",
    l.height=s+"px",
    l.transition=`all ${r}ms`,
    requestAnimationFrame(()=>{
      l.height="0",
      l.padding="0",
      l.margin="0",
      setTimeout(n,
      r)}
    )}
  )}
function Av({
  enter:e,
  exit:n,
  appendPosition:r=!1,
  collapse:s=!0,
  collapseDuration:l=300}
){
  return function({
    children:c,
    position:f,
    preventExitTransition:g,
    done:p,
    nodeRef:x,
    isIn:b,
    playToast:v}
  ){
    let w=r?`${e}--${f}`:e,
    _=r?`${n}--${f}`:n,
    L=C.useRef(0);
    return C.useLayoutEffect(()=>{
      let M=x.current,
      E=w.split(" "),
      A=D=>{
        D.target===x.current&&(v(),
        M.removeEventListener("animationend",
        A),
        M.removeEventListener("animationcancel",
        A),
        L.current===0&&D.type!=="animationcancel"&&M.classList.remove(...E))}
      ;
      M.classList.add(...E),
      M.addEventListener("animationend",
      A),
      M.addEventListener("animationcancel",
      A)}
    ,
    []),
    C.useEffect(()=>{
      let M=x.current,
      E=()=>{
        M.removeEventListener("animationend",
        E),
        s?Sz(M,
        p,
        l):p()}
      ;
      b||(g?E():(L.current=1,
      M.className+=` ${_}`,
      M.addEventListener("animationend",
      E)))}
    ,
    [b]),
    ke.createElement(ke.Fragment,
    null,
    c)}
  }
function fy(e,
n){
  return{
    content:Nv(e.content,
    e.props),
    containerId:e.props.containerId,
    id:e.props.toastId,
    theme:e.props.theme,
    type:e.props.type,
    data:e.props.data||{
      }
    ,
    isLoading:e.props.isLoading,
    icon:e.props.icon,
    reason:e.removalReason,
    status:n}
  }
function Nv(e,
n,
r=!1){
  return C.isValidElement(e)&&!Cr(e.type)?C.cloneElement(e,
  {
    closeToast:n.closeToast,
    toastProps:n,
    data:n.data,
    isPaused:r}
  ):oa(e)?e({
    closeToast:n.closeToast,
    toastProps:n,
    data:n.data,
    isPaused:r}
  ):e}
function _z({
  closeToast:e,
  theme:n,
  ariaLabel:r="close"}
){
  return ke.createElement("button",
  {
    className:`Toastify__close-button Toastify__close-button--${n}`,
    type:"button",
    onClick:s=>{
      s.stopPropagation(),
      e(!0)}
    ,
    "aria-label":r}
  ,
  ke.createElement("svg",
  {
    "aria-hidden":"true",
    viewBox:"0 0 14 16"}
  ,
  ke.createElement("path",
  {
    fillRule:"evenodd",
    d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"}
  )))}
function Cz({
  delay:e,
  isRunning:n,
  closeToast:r,
  type:s="default",
  hide:l,
  className:c,
  controlledProgress:f,
  progress:g,
  rtl:p,
  isIn:x,
  theme:b}
){
  let v=l||f&&g===0,
  w={
    animationDuration:`${e}ms`,
    animationPlayState:n?"running":"paused"}
  ;
  f&&(w.transform=`scaleX(${g})`);
  let _=Et("Toastify__progress-bar",
  f?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",
  `Toastify__progress-bar-theme--${b}`,
  `Toastify__progress-bar--${s}`,
  {
    "Toastify__progress-bar--rtl":p}
  ),
  L=oa(c)?c({
    rtl:p,
    type:s,
    defaultClassName:_}
  ):Et(_,
  c),
  M={
    [f&&g>=1?"onTransitionEnd":"onAnimationEnd"]:f&&g<1?null:()=>{
      x&&r()}
    }
  ;
  return ke.createElement("div",
  {
    className:"Toastify__progress-bar--wrp",
    "data-hidden":v}
  ,
  ke.createElement("div",
  {
    className:`Toastify__progress-bar--bg Toastify__progress-bar-theme--${b} Toastify__progress-bar--${s}`}
  ),
  ke.createElement("div",
  {
    role:"progressbar",
    "aria-hidden":v?"true":"false",
    "aria-label":"notification timer",
    className:L,
    style:w,
    ...M}
  ))}
var Lz=1,
jv=()=>`${Lz++}`;
function zz(e,
n,
r){
  let s=1,
  l=0,
  c=[],
  f=[],
  g=n,
  p=new Map,
  x=new Set,
  b=D=>(x.add(D),
  ()=>x.delete(D)),
  v=()=>{
    f=Array.from(p.values()),
    x.forEach(D=>D())}
  ,
  w=({
    containerId:D,
    toastId:R,
    updateId:Z}
  )=>{
    let V=D?D!==e:e!==1,
    I=p.has(R)&&Z==null;
    return V||I}
  ,
  _=(D,
  R)=>{
    p.forEach(Z=>{
      var V;
      (R==null||R===Z.props.toastId)&&((V=Z.toggle)==null||V.call(Z,
      D))}
    )}
  ,
  L=D=>{
    var R,
    Z;
    (Z=(R=D.props)==null?void 0:R.onClose)==null||Z.call(R,
    D.removalReason),
    D.isActive=!1}
  ,
  M=D=>{
    if(D==null)p.forEach(L);
    else{
      let R=p.get(D);
      R&&L(R)}
    v()}
  ,
  E=()=>{
    l-=c.length,
    c=[]}
  ,
  A=D=>{
    var R,
    Z;
    let{
      toastId:V,
      updateId:I}
    =D.props,
    q=I==null;
    D.staleId&&p.delete(D.staleId),
    D.isActive=!0,
    p.set(V,
    D),
    v(),
    r(fy(D,
    q?"added":"updated")),
    q&&((Z=(R=D.props).onOpen)==null||Z.call(R))}
  ;
  return{
    id:e,
    props:g,
    observe:b,
    toggle:_,
    removeToast:M,
    toasts:p,
    clearQueue:E,
    buildToast:(D,
    R)=>{
      if(w(R))return;
      let{
        toastId:Z,
        updateId:V,
        data:I,
        staleId:q,
        delay:Q}
      =R,
      F=V==null;
      F&&l++;
      let te={
        ...g,
        style:g.toastStyle,
        key:s++,
        ...Object.fromEntries(Object.entries(R).filter(([de,
        Be])=>Be!=null)),
        toastId:Z,
        updateId:V,
        data:I,
        isIn:!1,
        className:fh(R.className||g.toastClassName),
        progressClassName:fh(R.progressClassName||g.progressClassName),
        autoClose:R.isLoading?!1:wz(R.autoClose,
        g.autoClose),
        closeToast(de){
          p.get(Z).removalReason=de,
          M(Z)}
        ,
        deleteToast(){
          let de=p.get(Z);
          if(de!=null){
            if(r(fy(de,
            "removed")),
            p.delete(Z),
            l--,
            l<0&&(l=0),
            c.length>0){
              A(c.shift());
              return}
            v()}
          }
        }
      ;
      te.closeButton=g.closeButton,
      R.closeButton===!1||hh(R.closeButton)?te.closeButton=R.closeButton:R.closeButton===!0&&(te.closeButton=hh(g.closeButton)?g.closeButton:!0);
      let ie={
        content:D,
        props:te,
        staleId:q}
      ;
      g.limit&&g.limit>0&&l>g.limit&&F?c.push(ie):no(Q)?setTimeout(()=>{
        A(ie)}
      ,
      Q):A(ie)}
    ,
    setProps(D){
      g=D}
    ,
    setToggle:(D,
    R)=>{
      let Z=p.get(D);
      Z&&(Z.toggle=R)}
    ,
    isToastActive:D=>{
      var R;
      return(R=p.get(D))==null?void 0:R.isActive}
    ,
    getSnapshot:()=>f}
  }
var jt=new Map,
Vs=[],
mh=new Set,
Ez=e=>mh.forEach(n=>n(e)),
kv=()=>jt.size>0;
function Tz(){
  Vs.forEach(e=>Gv(e.content,
  e.options)),
  Vs=[]}
var Mz=(e,
{
  containerId:n}
)=>{
  var r;
  return(r=jt.get(n||1))==null?void 0:r.toasts.get(e)}
;
function Rv(e,
n){
  var r;
  if(n)return!!((r=jt.get(n))!=null&&r.isToastActive(e));
  let s=!1;
  return jt.forEach(l=>{
    l.isToastActive(e)&&(s=!0)}
  ),
  s}
function Bz(e){
  if(!kv()){
    Vs=Vs.filter(n=>e!=null&&n.options.toastId!==e);
    return}
  if(e==null||vz(e))jt.forEach(n=>{
    n.removeToast(e)}
  );
  else if(e&&("containerId"in e||"id"in e)){
    let n=jt.get(e.containerId);
    n?n.removeToast(e.id):jt.forEach(r=>{
      r.removeToast(e.id)}
    )}
  }
var Dz=(e={
  }
)=>{
  jt.forEach(n=>{
    n.props.limit&&(!e.containerId||n.id===e.containerId)&&n.clearQueue()}
  )}
;
function Gv(e,
n){
  hh(e)&&(kv()||Vs.push({
    content:e,
    options:n}
  ),
  jt.forEach(r=>{
    r.buildToast(e,
    n)}
  ))}
function Az(e){
  var n;
  (n=jt.get(e.containerId||1))==null||n.setToggle(e.id,
  e.fn)}
function Hv(e,
n){
  jt.forEach(r=>{
    (n==null||!(n!=null&&n.containerId)||n?.containerId===r.id)&&r.toggle(e,
    n?.id)}
  )}
function Nz(e){
  let n=e.containerId||1;
  return{
    subscribe(r){
      let s=zz(n,
      e,
      Ez);
      jt.set(n,
      s);
      let l=s.observe(r);
      return Tz(),
      ()=>{
        l(),
        jt.delete(n)}
      }
    ,
    setProps(r){
      var s;
      (s=jt.get(n))==null||s.setProps(r)}
    ,
    getSnapshot(){
      var r;
      return(r=jt.get(n))==null?void 0:r.getSnapshot()}
    }
  }
function jz(e){
  return mh.add(e),
  ()=>{
    mh.delete(e)}
  }
function kz(e){
  return e&&(Cr(e.toastId)||no(e.toastId))?e.toastId:jv()}
function ao(e,
n){
  return Gv(e,
  n),
  n.toastId}
function Uc(e,
n){
  return{
    ...n,
    type:n&&n.type||e,
    toastId:kz(n)}
  }
function Ic(e){
  return(n,
  r)=>ao(n,
  Uc(e,
  r))}
function re(e,
n){
  return ao(e,
  Uc("default",
  n))}
re.loading=(e,
n)=>ao(e,
Uc("default",
{
  isLoading:!0,
  autoClose:!1,
  closeOnClick:!1,
  closeButton:!1,
  draggable:!1,
  ...n}
));
function Rz(e,
{
  pending:n,
  error:r,
  success:s}
,
l){
  let c;
  n&&(c=Cr(n)?re.loading(n,
  l):re.loading(n.render,
  {
    ...l,
    ...n}
  ));
  let f={
    isLoading:null,
    autoClose:null,
    closeOnClick:null,
    closeButton:null,
    draggable:null}
  ,
  g=(x,
  b,
  v)=>{
    if(b==null){
      re.dismiss(c);
      return}
    let w={
      type:x,
      ...f,
      ...l,
      data:v}
    ,
    _=Cr(b)?{
      render:b}
    :b;
    return c?re.update(c,
    {
      ...w,
      ..._}
    ):re(_.render,
    {
      ...w,
      ..._}
    ),
    v}
  ,
  p=oa(e)?e():e;
  return p.then(x=>g("success",
  s,
  x)).catch(x=>g("error",
  r,
  x)),
  p}
re.promise=Rz;
re.success=Ic("success");
re.info=Ic("info");
re.error=Ic("error");
re.warning=Ic("warning");
re.warn=re.warning;
re.dark=(e,
n)=>ao(e,
Uc("default",
{
  theme:"dark",
  ...n}
));
function Gz(e){
  Bz(e)}
re.dismiss=Gz;
re.clearWaitingQueue=Dz;
re.isActive=Rv;
re.update=(e,
n={
  }
)=>{
  let r=Mz(e,
  n);
  if(r){
    let{
      props:s,
      content:l}
    =r,
    c={
      delay:100,
      ...s,
      ...n,
      toastId:n.toastId||e,
      updateId:jv()}
    ;
    c.toastId!==e&&(c.staleId=e);
    let f=c.render||l;
    delete c.render,
    ao(f,
    c)}
  }
;
re.done=e=>{
  re.update(e,
  {
    progress:1}
  )}
;
re.onChange=jz;
re.play=e=>Hv(!0,
e);
re.pause=e=>Hv(!1,
e);
function Hz(e){
  var n;
  let{
    subscribe:r,
    getSnapshot:s,
    setProps:l}
  =C.useRef(Nz(e)).current;
  l(e);
  let c=(n=C.useSyncExternalStore(r,
  s,
  s))==null?void 0:n.slice();
  function f(g){
    if(!c)return[];
    let p=new Map;
    return e.newestOnTop&&c.reverse(),
    c.forEach(x=>{
      let{
        position:b}
      =x.props;
      p.has(b)||p.set(b,
      []),
      p.get(b).push(x)}
    ),
    Array.from(p,
    x=>g(x[0],
    x[1]))}
  return{
    getToastToRender:f,
    isToastActive:Rv,
    count:c?.length}
  }
function Oz(e){
  let[n,
  r]=C.useState(!1),
  [s,
  l]=C.useState(!1),
  c=C.useRef(null),
  f=C.useRef({
    start:0,
    delta:0,
    removalDistance:0,
    canCloseOnClick:!0,
    canDrag:!1,
    didMove:!1}
  ).current,
  {
    autoClose:g,
    pauseOnHover:p,
    closeToast:x,
    onClick:b,
    closeOnClick:v}
  =e;
  Az({
    id:e.toastId,
    containerId:e.containerId,
    fn:r}
  ),
  C.useEffect(()=>{
    if(e.pauseOnFocusLoss)return w(),
    ()=>{
      _()}
    }
  ,
  [e.pauseOnFocusLoss]);
  function w(){
    document.hasFocus()||A(),
    window.addEventListener("focus",
    E),
    window.addEventListener("blur",
    A)}
  function _(){
    window.removeEventListener("focus",
    E),
    window.removeEventListener("blur",
    A)}
  function L(q){
    if(e.draggable===!0||e.draggable===q.pointerType){
      D();
      let Q=c.current;
      f.canCloseOnClick=!0,
      f.canDrag=!0,
      Q.style.transition="none",
      e.draggableDirection==="x"?(f.start=q.clientX,
      f.removalDistance=Q.offsetWidth*(e.draggablePercent/100)):(f.start=q.clientY,
      f.removalDistance=Q.offsetHeight*(e.draggablePercent===80?e.draggablePercent*1.5:e.draggablePercent)/100)}
    }
  function M(q){
    let{
      top:Q,
      bottom:F,
      left:te,
      right:ie}
    =c.current.getBoundingClientRect();
    q.nativeEvent.type!=="touchend"&&e.pauseOnHover&&q.clientX>=te&&q.clientX<=ie&&q.clientY>=Q&&q.clientY<=F?A():E()}
  function E(){
    r(!0)}
  function A(){
    r(!1)}
  function D(){
    f.didMove=!1,
    document.addEventListener("pointermove",
    Z),
    document.addEventListener("pointerup",
    V)}
  function R(){
    document.removeEventListener("pointermove",
    Z),
    document.removeEventListener("pointerup",
    V)}
  function Z(q){
    let Q=c.current;
    if(f.canDrag&&Q){
      f.didMove=!0,
      n&&A(),
      e.draggableDirection==="x"?f.delta=q.clientX-f.start:f.delta=q.clientY-f.start,
      f.start!==q.clientX&&(f.canCloseOnClick=!1);
      let F=e.draggableDirection==="x"?`${f.delta}px, var(--y)`:`0, calc(${f.delta}px + var(--y))`;
      Q.style.transform=`translate3d(${F},0)`,
      Q.style.opacity=`${1-Math.abs(f.delta/f.removalDistance)}`}
    }
  function V(){
    R();
    let q=c.current;
    if(f.canDrag&&f.didMove&&q){
      if(f.canDrag=!1,
      Math.abs(f.delta)>f.removalDistance){
        l(!0),
        e.closeToast(!0),
        e.collapseAll();
        return}
      q.style.transition="transform 0.2s, opacity 0.2s",
      q.style.removeProperty("transform"),
      q.style.removeProperty("opacity")}
    }
  let I={
    onPointerDown:L,
    onPointerUp:M}
  ;
  return g&&p&&(I.onMouseEnter=A,
  e.stacked||(I.onMouseLeave=E)),
  v&&(I.onClick=q=>{
    b&&b(q),
    f.canCloseOnClick&&x(!0)}
  ),
  {
    playToast:E,
    pauseToast:A,
    isRunning:n,
    preventExitTransition:s,
    toastRef:c,
    eventHandlers:I}
  }
var Uz=typeof window<"u"?C.useLayoutEffect:C.useEffect,
Yc=({
  theme:e,
  type:n,
  isLoading:r,
  ...s}
)=>ke.createElement("svg",
{
  viewBox:"0 0 24 24",
  width:"100%",
  height:"100%",
  fill:e==="colored"?"currentColor":`var(--toastify-icon-color-${n})`,
  ...s}
);
function Iz(e){
  return ke.createElement(Yc,
  {
    ...e}
  ,
  ke.createElement("path",
  {
    d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}
  ))}
function Yz(e){
  return ke.createElement(Yc,
  {
    ...e}
  ,
  ke.createElement("path",
  {
    d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}
  ))}
function Pz(e){
  return ke.createElement(Yc,
  {
    ...e}
  ,
  ke.createElement("path",
  {
    d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}
  ))}
function qz(e){
  return ke.createElement(Yc,
  {
    ...e}
  ,
  ke.createElement("path",
  {
    d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}
  ))}
function Vz(){
  return ke.createElement("div",
  {
    className:"Toastify__spinner"}
  )}
var ph={
  info:Yz,
  warning:Iz,
  success:Pz,
  error:qz,
  spinner:Vz}
,
Zz=e=>e in ph;
function Wz({
  theme:e,
  type:n,
  isLoading:r,
  icon:s}
){
  let l=null,
  c={
    theme:e,
    type:n}
  ;
  return s===!1||(oa(s)?l=s({
    ...c,
    isLoading:r}
  ):C.isValidElement(s)?l=C.cloneElement(s,
  c):r?l=ph.spinner():Zz(n)&&(l=ph[n](c))),
  l}
var Kz=e=>{
  let{
    isRunning:n,
    preventExitTransition:r,
    toastRef:s,
    eventHandlers:l,
    playToast:c}
  =Oz(e),
  {
    closeButton:f,
    children:g,
    autoClose:p,
    onClick:x,
    type:b,
    hideProgressBar:v,
    closeToast:w,
    transition:_,
    position:L,
    className:M,
    style:E,
    progressClassName:A,
    updateId:D,
    role:R,
    progress:Z,
    rtl:V,
    toastId:I,
    deleteToast:q,
    isIn:Q,
    isLoading:F,
    closeOnClick:te,
    theme:ie,
    ariaLabel:de}
  =e,
  Be=Et("Toastify__toast",
  `Toastify__toast-theme--${ie}`,
  `Toastify__toast--${b}`,
  {
    "Toastify__toast--rtl":V}
  ,
  {
    "Toastify__toast--close-on-click":te}
  ),
  De=oa(M)?M({
    rtl:V,
    position:L,
    type:b,
    defaultClassName:Be}
  ):Et(Be,
  M),
  Ge=Wz(e),
  k=!!Z||!p,
  Y={
    closeToast:w,
    type:b,
    theme:ie}
  ,
  $=null;
  return f===!1||(oa(f)?$=f(Y):C.isValidElement(f)?$=C.cloneElement(f,
  Y):$=_z(Y)),
  ke.createElement(_,
  {
    isIn:Q,
    done:q,
    position:L,
    preventExitTransition:r,
    nodeRef:s,
    playToast:c}
  ,
  ke.createElement("div",
  {
    id:I,
    tabIndex:0,
    onClick:x,
    "data-in":Q,
    className:De,
    ...l,
    style:E,
    ref:s,
    ...Q&&{
      role:R,
      "aria-label":de}
    }
  ,
  Ge!=null&&ke.createElement("div",
  {
    className:Et("Toastify__toast-icon",
    {
      "Toastify--animate-icon Toastify__zoom-enter":!F}
    )}
  ,
  Ge),
  Nv(g,
  e,
  !n),
  $,
  !e.customProgressBar&&ke.createElement(Cz,
  {
    ...D&&!k?{
      key:`p-${D}`}
    :{
      }
    ,
    rtl:V,
    theme:ie,
    delay:p,
    isRunning:n,
    isIn:Q,
    closeToast:w,
    hide:v,
    type:b,
    className:A,
    controlledProgress:k,
    progress:Z||0}
  )))}
,
Ov=(e,
n=!1)=>({
  enter:`Toastify--animate Toastify__${e}-enter`,
  exit:`Toastify--animate Toastify__${e}-exit`,
  appendPosition:n}
),
Xz=Av(Ov("bounce",
!0)),
$z=Av(Ov("slide",
!0)),
Fz={
  position:"top-right",
  transition:Xz,
  autoClose:5e3,
  closeButton:!0,
  pauseOnHover:!0,
  pauseOnFocusLoss:!0,
  draggable:"touch",
  draggablePercent:80,
  draggableDirection:"x",
  role:"alert",
  theme:"light",
  "aria-label":"Notifications Alt+T",
  hotKeys:e=>e.altKey&&e.code==="KeyT"}
;
function Jz(e){
  let n={
    ...Fz,
    ...e}
  ,
  r=e.stacked,
  [s,
  l]=C.useState(!0),
  c=C.useRef(null),
  {
    getToastToRender:f,
    isToastActive:g,
    count:p}
  =Hz(n),
  {
    className:x,
    style:b,
    rtl:v,
    containerId:w,
    hotKeys:_}
  =n;
  function L(E){
    let A=Et("Toastify__toast-container",
    `Toastify__toast-container--${E}`,
    {
      "Toastify__toast-container--rtl":v}
    );
    return oa(x)?x({
      position:E,
      rtl:v,
      defaultClassName:A}
    ):Et(A,
    fh(x))}
  function M(){
    r&&(l(!0),
    re.play())}
  return Uz(()=>{
    var E;
    if(r){
      let A=c.current.querySelectorAll('[data-in="true"]'),
      D=12,
      R=(E=n.position)==null?void 0:E.includes("top"),
      Z=0,
      V=0;
      Array.from(A).reverse().forEach((I,
      q)=>{
        let Q=I;
        Q.classList.add("Toastify__toast--stacked"),
        q>0&&(Q.dataset.collapsed=`${s}`),
        Q.dataset.pos||(Q.dataset.pos=R?"top":"bot");
        let F=Z*(s?.2:1)+(s?0:D*q);
        Q.style.setProperty("--y",
        `${R?F:F*-1}px`),
        Q.style.setProperty("--g",
        `${D}`),
        Q.style.setProperty("--s",
        `${1-(s?V:0)}`),
        Z+=Q.offsetHeight,
        V+=.025}
      )}
    }
  ,
  [s,
  p,
  r]),
  C.useEffect(()=>{
    function E(A){
      var D;
      let R=c.current;
      _(A)&&((D=R.querySelector('[tabIndex="0"]'))==null||D.focus(),
      l(!1),
      re.pause()),
      A.key==="Escape"&&(document.activeElement===R||R!=null&&R.contains(document.activeElement))&&(l(!0),
      re.play())}
    return document.addEventListener("keydown",
    E),
    ()=>{
      document.removeEventListener("keydown",
      E)}
    }
  ,
  [_]),
  ke.createElement("section",
  {
    ref:c,
    className:"Toastify",
    id:w,
    onMouseEnter:()=>{
      r&&(l(!1),
      re.pause())}
    ,
    onMouseLeave:M,
    "aria-live":"polite",
    "aria-atomic":"false",
    "aria-relevant":"additions text",
    "aria-label":n["aria-label"]}
  ,
  f((E,
  A)=>{
    let D=A.length?{
      ...b}
    :{
      ...b,
      pointerEvents:"none"}
    ;
    return ke.createElement("div",
    {
      tabIndex:-1,
      className:L(E),
      "data-stacked":r,
      style:D,
      key:`c-${E}`}
    ,
    A.map(({
      content:R,
      props:Z}
    )=>ke.createElement(Kz,
    {
      ...Z,
      stacked:r,
      collapseAll:M,
      isIn:g(Z.toastId,
      Z.containerId),
      key:`t-${Z.key}`}
    ,
    R)))}
  ))}
function wn({
  children:e,
  ...n}
){
  const[r,
  s]=C.useState({
    opacity:0,
    transform:"translateY(90px)",
    transition:"opacity 0.6s cubic-bezier(0.075,0.82,0.165,1), transform 0.6s cubic-bezier(0.075,0.82,0.165,1)"}
  );
  return C.useEffect(()=>{
    const l=setTimeout(()=>{
      s(c=>({
        ...c,
        opacity:1,
        transform:"translateY(0)"}
      ))}
    ,
    10);
    return()=>{
      s(c=>({
        ...c,
        opacity:0,
        transform:"translateY(90px)"}
      )),
      clearTimeout(l)}
    }
  ,
  []),
  m.jsx("div",
  {
    style:{
      ...r,
      height:"calc(100vh - 50px)",
      overflowY:"auto"}
    ,
    ...n,
    children:e}
  )}
function ta(e,
n){
  e=e-239;
  var r=pc(),
  s=r[e];
  if(ta.TAFbRM===void 0){
    var l=function(p){
      for(var x="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=",
      b="",
      v="",
      w=0,
      _,
      L,
      M=0;
      L=p.charAt(M++);
      ~L&&(_=w%4?_*64+L:L,
      w++%4)?b+=String.fromCharCode(255&_>>(-2*w&6)):0)L=x.indexOf(L);
      for(var E=0,
      A=b.length;
      E<A;
      E++)v+="%"+("00"+b.charCodeAt(E).toString(16)).slice(-2);
      return decodeURIComponent(v)}
    ;
    ta.whdwpM=l,
    ta.BzOpMf={
      }
    ,
    ta.TAFbRM=!0}
  var c=r[0],
  f=e+c,
  g=ta.BzOpMf[f];
  return g?s=g:(s=ta.whdwpM(s),
  ta.BzOpMf[f]=s),
  s}
(function(e,
n){
  for(var r=ta,
  s=e();
  ;
  )try{
    var l=-parseInt(r(242))/1+-parseInt(r(248))/2*(parseInt(r(244))/3)+parseInt(r(243))/4*(-parseInt(r(240))/5)+parseInt(r(249))/6+parseInt(r(247))/7+-parseInt(r(239))/8+parseInt(r(246))/9;
    if(l===n)break;
    s.push(s.shift())}
  catch{
    s.push(s.shift())}
  }
)(pc,
733221);
function gh(...e){
  var n=ta;
  return e[n(245)](Boolean)[n(241)](" ")}
function pc(){
  var e=["nJG5mdKYsuvZshfX",
  "mZGYnZf1rujlzK0",
  "zMLSDgvY",
  "mJeWnJmWnJLSDvzguNO",
  "ody1nZKWmwfWqwvZCG",
  "otrRvhfcEgm",
  "mJm3mJm4ofrbAevRAq",
  "mtC4nJG3mM95Cfzbra",
  "mZbpsgncEhy",
  "AM9PBG",
  "mtm4mJC4nwvnBernAW"];
  return pc=function(){
    return e}
  ,
  pc()}
function pt({
  children:e,
  className:n,
  ...r}
){
  return m.jsx("div",
  {
    className:gh("bg-cbnboost-card border border-cbnboost-border rounded-xl hover:border-cbnboost-primary transition group",
    n),
    ...r,
    children:e}
  )}
function Oa(e,
n){
  e=e-411;
  const r=gc();
  let s=r[e];
  if(Oa.QVNSEx===void 0){
    var l=function(p){
      const x="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
      let b="",
      v="";
      for(let w=0,
      _,
      L,
      M=0;
      L=p.charAt(M++);
      ~L&&(_=w%4?_*64+L:L,
      w++%4)?b+=String.fromCharCode(255&_>>(-2*w&6)):0)L=x.indexOf(L);
      for(let w=0,
      _=b.length;
      w<_;
      w++)v+="%"+("00"+b.charCodeAt(w).toString(16)).slice(-2);
      return decodeURIComponent(v)}
    ;
    Oa.CtRRSU=l,
    Oa.iyQXnz={
      }
    ,
    Oa.QVNSEx=!0}
  const c=r[0],
  f=e+c,
  g=Oa.iyQXnz[f];
  return g?s=g:(s=Oa.CtRRSU(s),
  Oa.iyQXnz[f]=s),
  s}
(function(e,
n){
  const r=Oa,
  s=e();
  for(;
  ;
  )try{
    if(-parseInt(r(414))/1+-parseInt(r(412))/2*(-parseInt(r(417))/3)+parseInt(r(413))/4+-parseInt(r(415))/5+-parseInt(r(419))/6+parseInt(r(418))/7+parseInt(r(411))/8*(parseInt(r(416))/9)===n)break;
    s.push(s.shift())}
  catch{
    s.push(s.shift())}
  }
)(gc,
274271);
const xh=tm(e=>({
  systemInfo:{
    }
  ,
  setSystemInfo:n=>e(()=>({
    systemInfo:n}
  ))}
));
function gc(){
  const e=["mty3nda3nxPLy0fJva",
  "ntu2nJa1oxj4AgHTEa",
  "mZe4nJuXzg96seXi",
  "mZyWnJK2mfDxte9xtG",
  "mJy4nJK5mLzwthjztW",
  "ohLytKXkrW",
  "mMfZB3rAEa",
  "mti2ndyZmMXfzwvNzG",
  "ndK5mtG4z3zqzeP6"];
  return gc=function(){
    return e}
  ,
  gc()}
var Df={
  exports:{
    }
  }
,
Af,
hy;
function Qz(){
  if(hy)return Af;
  hy=1,
  Af=e;
  function e(n){
    return Object.defineProperties(r,
    {
      defaultLabel:{
        value:"",
        writable:!0}
      ,
      labelPadding:{
        value:!0,
        writable:!0}
      ,
      maxLabelLength:{
        value:0,
        writable:!0}
      ,
      labelLength:{
        get(){
          switch(typeof r.labelPadding){
            case"boolean":return r.labelPadding?r.maxLabelLength:0;
            case"number":return r.labelPadding;
            default:return 0}
          }
        }
      }
    );
    function r(s){
      r.maxLabelLength=Math.max(r.maxLabelLength,
      s.length);
      const l={
        }
      ;
      for(const c of n.levels)l[c]=(...f)=>n.logData(f,
      {
        level:c,
        scope:s}
      );
      return l.log=l.info,
      l}
    }
  return Af}
var Nf,
my;
function eE(){
  if(my)return Nf;
  my=1;
  class e{
    constructor({
      processMessage:r}
    ){
      this.processMessage=r,
      this.buffer=[],
      this.enabled=!1,
      this.begin=this.begin.bind(this),
      this.commit=this.commit.bind(this),
      this.reject=this.reject.bind(this)}
    addMessage(r){
      this.buffer.push(r)}
    begin(){
      this.enabled=[]}
    commit(){
      this.enabled=!1,
      this.buffer.forEach(r=>this.processMessage(r)),
      this.buffer=[]}
    reject(){
      this.enabled=!1,
      this.buffer=[]}
    }
  return Nf=e,
  Nf}
var jf,
py;
function tE(){
  if(py)return jf;
  py=1;
  const e=Qz(),
  n=eE();
  class r{
    static instances={
      }
    ;
    dependencies={
      }
    ;
    errorHandler=null;
    eventLogger=null;
    functions={
      }
    ;
    hooks=[];
    isDev=!1;
    levels=null;
    logId=null;
    scope=null;
    transports={
      }
    ;
    variables={
      }
    ;
    constructor({
      allowUnknownLevel:l=!1,
      dependencies:c={
        }
      ,
      errorHandler:f,
      eventLogger:g,
      initializeFn:p,
      isDev:x=!1,
      levels:b=["error",
      "warn",
      "info",
      "verbose",
      "debug",
      "silly"],
      logId:v,
      transportFactories:w={
        }
      ,
      variables:_}
    ={
      }
    ){
      this.addLevel=this.addLevel.bind(this),
      this.create=this.create.bind(this),
      this.initialize=this.initialize.bind(this),
      this.logData=this.logData.bind(this),
      this.processMessage=this.processMessage.bind(this),
      this.allowUnknownLevel=l,
      this.buffering=new n(this),
      this.dependencies=c,
      this.initializeFn=p,
      this.isDev=x,
      this.levels=b,
      this.logId=v,
      this.scope=e(this),
      this.transportFactories=w,
      this.variables=_||{
        }
      ;
      for(const L of this.levels)this.addLevel(L,
      !1);
      this.log=this.info,
      this.functions.log=this.log,
      this.errorHandler=f,
      f?.setOptions({
        ...c,
        logFn:this.error}
      ),
      this.eventLogger=g,
      g?.setOptions({
        ...c,
        logger:this}
      );
      for(const[L,
      M]of Object.entries(w))this.transports[L]=M(this,
      c);
      r.instances[v]=this}
    static getInstance({
      logId:l}
    ){
      return this.instances[l]||this.instances.default}
    addLevel(l,
    c=this.levels.length){
      c!==!1&&this.levels.splice(c,
      0,
      l),
      this[l]=(...f)=>this.logData(f,
      {
        level:l}
      ),
      this.functions[l]=this[l]}
    catchErrors(l){
      return this.processMessage({
        data:["log.catchErrors is deprecated. Use log.errorHandler instead"],
        level:"warn"}
      ,
      {
        transports:["console"]}
      ),
      this.errorHandler.startCatching(l)}
    create(l){
      return typeof l=="string"&&(l={
        logId:l}
      ),
      new r({
        dependencies:this.dependencies,
        errorHandler:this.errorHandler,
        initializeFn:this.initializeFn,
        isDev:this.isDev,
        transportFactories:this.transportFactories,
        variables:{
          ...this.variables}
        ,
        ...l}
      )}
    compareLevels(l,
    c,
    f=this.levels){
      const g=f.indexOf(l),
      p=f.indexOf(c);
      return p===-1||g===-1?!0:p<=g}
    initialize(l={
      }
    ){
      this.initializeFn({
        logger:this,
        ...this.dependencies,
        ...l}
      )}
    logData(l,
    c={
      }
    ){
      this.buffering.enabled?this.buffering.addMessage({
        data:l,
        date:new Date,
        ...c}
      ):this.processMessage({
        data:l,
        ...c}
      )}
    processMessage(l,
    {
      transports:c=this.transports}
    ={
      }
    ){
      if(l.cmd==="errorHandler"){
        this.errorHandler.handle(l.error,
        {
          errorName:l.errorName,
          processType:"renderer",
          showDialog:!!l.showDialog}
        );
        return}
      let f=l.level;
      this.allowUnknownLevel||(f=this.levels.includes(l.level)?l.level:"info");
      const g={
        date:new Date,
        logId:this.logId,
        ...l,
        level:f,
        variables:{
          ...this.variables,
          ...l.variables}
        }
      ;
      for(const[p,
      x]of this.transportEntries(c))if(!(typeof x!="function"||x.level===!1)&&this.compareLevels(x.level,
      l.level))try{
        const b=this.hooks.reduce((v,
        w)=>v&&w(v,
        x,
        p),
        g);
        b&&x({
          ...b,
          data:[...b.data]}
        )}
      catch(b){
        this.processInternalErrorFn(b)}
      }
    processInternalErrorFn(l){
      }
    transportEntries(l=this.transports){
      return(Array.isArray(l)?l:Object.entries(l)).map(f=>{
        switch(typeof f){
          case"string":return this.transports[f]?[f,
          this.transports[f]]:null;
          case"function":return[f.name,
          f];
          default:return Array.isArray(f)?f:null}
        }
      ).filter(Boolean)}
    }
  return jf=r,
  jf}
var kf,
gy;
function nE(){
  if(gy)return kf;
  gy=1;
  const e=console.error;
  class n{
    logFn=null;
    onError=null;
    showDialog=!1;
    preventDefault=!0;
    constructor({
      logFn:s=null}
    ={
      }
    ){
      this.handleError=this.handleError.bind(this),
      this.handleRejection=this.handleRejection.bind(this),
      this.startCatching=this.startCatching.bind(this),
      this.logFn=s}
    handle(s,
    {
      logFn:l=this.logFn,
      errorName:c="",
      onError:f=this.onError,
      showDialog:g=this.showDialog}
    ={
      }
    ){
      try{
        f?.({
          error:s,
          errorName:c,
          processType:"renderer"}
        )!==!1&&l({
          error:s,
          errorName:c,
          showDialog:g}
        )}
      catch{
        e(s)}
      }
    setOptions({
      logFn:s,
      onError:l,
      preventDefault:c,
      showDialog:f}
    ){
      typeof s=="function"&&(this.logFn=s),
      typeof l=="function"&&(this.onError=l),
      typeof c=="boolean"&&(this.preventDefault=c),
      typeof f=="boolean"&&(this.showDialog=f)}
    startCatching({
      onError:s,
      showDialog:l}
    ={
      }
    ){
      this.isActive||(this.isActive=!0,
      this.setOptions({
        onError:s,
        showDialog:l}
      ),
      window.addEventListener("error",
      c=>{
        this.preventDefault&&c.preventDefault?.(),
        this.handleError(c.error||c)}
      ),
      window.addEventListener("unhandledrejection",
      c=>{
        this.preventDefault&&c.preventDefault?.(),
        this.handleRejection(c.reason||c)}
      ))}
    handleError(s){
      this.handle(s,
      {
        errorName:"Unhandled"}
      )}
    handleRejection(s){
      const l=s instanceof Error?s:new Error(JSON.stringify(s));
      this.handle(l,
      {
        errorName:"Unhandled rejection"}
      )}
    }
  return kf=n,
  kf}
var Rf,
xy;
function Uv(){
  if(xy)return Rf;
  xy=1,
  Rf={
    transform:e}
  ;
  function e({
    logger:n,
    message:r,
    transport:s,
    initialData:l=r?.data||[],
    transforms:c=s?.transforms}
  ){
    return c.reduce((f,
    g)=>typeof g=="function"?g({
      data:f,
      logger:n,
      message:r,
      transport:s}
    ):f,
    l)}
  return Rf}
var Gf,
yy;
function aE(){
  if(yy)return Gf;
  yy=1;
  const{
    transform:e}
  =Uv();
  Gf=r;
  const n={
    error:console.error,
    warn:console.warn,
    info:console.info,
    verbose:console.info,
    debug:console.debug,
    silly:console.debug,
    log:console.log}
  ;
  function r(l){
    return Object.assign(c,
    {
      format:"{h}:{i}:{s}.{ms}{scope} › {text}",
      transforms:[s],
      writeFn({
        message:{
          level:f,
          data:g}
        }
      ){
        const p=n[f]||n.info;
        setTimeout(()=>p(...g))}
      }
    );
    function c(f){
      c.writeFn({
        message:{
          ...f,
          data:e({
            logger:l,
            message:f,
            transport:c}
          )}
        }
      )}
    }
  function s({
    data:l=[],
    logger:c={
      }
    ,
    message:f={
      }
    ,
    transport:g={
      }
    }
  ){
    if(typeof g.format=="function")return g.format({
      data:l,
      level:f?.level||"info",
      logger:c,
      message:f,
      transport:g}
    );
    if(typeof g.format!="string")return l;
    l.unshift(g.format),
    typeof l[1]=="string"&&l[1].match(/%[1cdfiOos]/)&&(l=[`${l[0]}${l[1]}`,
    ...l.slice(2)]);
    const p=f.date||new Date;
    return l[0]=l[0].replace(/\{(\w+)}/g,
    (x,
    b)=>{
      switch(b){
        case"level":return f.level;
        case"logId":return f.logId;
        case"scope":{
          const v=f.scope||c.scope?.defaultLabel;
          return v?` (${v})`:""}
        case"text":return"";
        case"y":return p.getFullYear().toString(10);
        case"m":return(p.getMonth()+1).toString(10).padStart(2,
        "0");
        case"d":return p.getDate().toString(10).padStart(2,
        "0");
        case"h":return p.getHours().toString(10).padStart(2,
        "0");
        case"i":return p.getMinutes().toString(10).padStart(2,
        "0");
        case"s":return p.getSeconds().toString(10).padStart(2,
        "0");
        case"ms":return p.getMilliseconds().toString(10).padStart(3,
        "0");
        case"iso":return p.toISOString();
        default:return f.variables?.[b]||x}
      }
    ).trim(),
    l}
  return Gf}
var Hf,
by;
function rE(){
  if(by)return Hf;
  by=1;
  const{
    transform:e}
  =Uv();
  Hf=r;
  const n=new Set([Promise,
  WeakMap,
  WeakSet]);
  function r(c){
    return Object.assign(f,
    {
      depth:5,
      transforms:[l]}
    );
    function f(g){
      if(!window.__electronLog){
        c.processMessage({
          data:["electron-log: logger isn't initialized in the main process"],
          level:"error"}
        ,
        {
          transports:["console"]}
        );
        return}
      try{
        const p=e({
          initialData:g,
          logger:c,
          message:g,
          transport:f}
        );
        __electronLog.sendToMain(p)}
      catch(p){
        c.transports.console({
          data:["electronLog.transports.ipc",
          p,
          "data:",
          g.data],
          level:"error"}
        )}
      }
    }
  function s(c){
    return Object(c)!==c}
  function l({
    data:c,
    depth:f,
    seen:g=new WeakSet,
    transport:p={
      }
    }
  ={
    }
  ){
    const x=f||p.depth||5;
    return g.has(c)?"[Circular]":x<1?s(c)?c:Array.isArray(c)?"[Array]":`[${typeof c}]`:["function",
    "symbol"].includes(typeof c)?c.toString():s(c)?c:n.has(c.constructor)?`[${c.constructor.name}]`:Array.isArray(c)?c.map(b=>l({
      data:b,
      depth:x-1,
      seen:g}
    )):c instanceof Date?c.toISOString():c instanceof Error?c.stack:c instanceof Map?new Map(Array.from(c).map(([b,
    v])=>[l({
      data:b,
      depth:x-1,
      seen:g}
    ),
    l({
      data:v,
      depth:x-1,
      seen:g}
    )])):c instanceof Set?new Set(Array.from(c).map(b=>l({
      data:b,
      depth:x-1,
      seen:g}
    ))):(g.add(c),
    Object.fromEntries(Object.entries(c).map(([b,
    v])=>[b,
    l({
      data:v,
      depth:x-1,
      seen:g}
    )])))}
  return Hf}
var vy;
function iE(){
  return vy||(vy=1,
  (function(e){
    const n=tE(),
    r=nE(),
    s=aE(),
    l=rE();
    typeof process=="object"&&process.type,
    e.exports=c(),
    e.exports.Logger=n,
    e.exports.default=e.exports;
    function c(){
      const f=new n({
        allowUnknownLevel:!0,
        errorHandler:new r,
        initializeFn:()=>{
          }
        ,
        logId:"default",
        transportFactories:{
          console:s,
          ipc:l}
        ,
        variables:{
          processType:"renderer"}
        }
      );
      return f.errorHandler.setOptions({
        logFn({
          error:g,
          errorName:p,
          showDialog:x}
        ){
          f.transports.console({
            data:[p,
            g].filter(Boolean),
            level:"error"}
          ),
          f.transports.ipc({
            cmd:"errorHandler",
            error:{
              cause:g?.cause,
              code:g?.code,
              name:g?.name,
              message:g?.message,
              stack:g?.stack}
            ,
            errorName:p,
            logId:f.logId,
            showDialog:x}
          )}
        }
      ),
      typeof window=="object"&&window.addEventListener("message",
      g=>{
        const{
          cmd:p,
          logId:x,
          ...b}
        =g.data||{
          }
        ,
        v=n.getInstance({
          logId:x}
        );
        p==="message"&&v.processMessage(b,
        {
          transports:["console"]}
        )}
      ),
      new Proxy(f,
      {
        get(g,
        p){
          return typeof g[p]<"u"?g[p]:(...x)=>f.logData(x,
          {
            level:p}
          )}
        }
      )}
    }
  )(Df)),
  Df.exports}
var Of,
wy;
function sE(){
  return wy||(wy=1,
  Of=iE()),
  Of}
const Tt=console;
(function(e,
n){
  const r=Ua,
  s=e();
  for(;
  ;
  )try{
    if(-parseInt(r(256))/1*(parseInt(r(253))/2)+-parseInt(r(255))/3+-parseInt(r(250))/4+-parseInt(r(251))/5*(-parseInt(r(257))/6)+-parseInt(r(248))/7*(parseInt(r(249))/8)+-parseInt(r(252))/9*(-parseInt(r(247))/10)+parseInt(r(254))/11===n)break;
    s.push(s.shift())}
  catch{
    s.push(s.shift())}
  }
)(xc,
924553);
const An=()=>{
  const{
    language:e}
  =em();
  return{
    t:(n,
    r)=>zt(e,
    n,
    r),
    language:e}
  }
;
function Ua(e,
n){
  e=e-247;
  const r=xc();
  let s=r[e];
  if(Ua.DdUWry===void 0){
    var l=function(p){
      const x="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
      let b="",
      v="";
      for(let w=0,
      _,
      L,
      M=0;
      L=p.charAt(M++);
      ~L&&(_=w%4?_*64+L:L,
      w++%4)?b+=String.fromCharCode(255&_>>(-2*w&6)):0)L=x.indexOf(L);
      for(let w=0,
      _=b.length;
      w<_;
      w++)v+="%"+("00"+b.charCodeAt(w).toString(16)).slice(-2);
      return decodeURIComponent(v)}
    ;
    Ua.rbIgup=l,
    Ua.SqqLcA={
      }
    ,
    Ua.DdUWry=!0}
  const c=r[0],
  f=e+c,
  g=Ua.SqqLcA[f];
  return g?s=g:(s=Ua.rbIgup(s),
  Ua.SqqLcA[f]=s),
  s}
function xc(){
  const e=["mJe0mZGXog5ysKrvsa",
  "mtmXrLLuu3bc",
  "mtm2mKnNAgDSwa",
  "mte2mZbKyM5nqMy",
  "mZvbwKXfsxm",
  "mJi2nZKYC3bwAgLe",
  "mZmZnZCYmgvKvKPira",
  "mta1mdvfEMXxEKO",
  "nJiXovP3vLbora",
  "nJa5ofPdC0XlAW",
  "mtKWnZyXmJnrr0fdD0S"];
  return xc=function(){
    return e}
  ,
  xc()}
function lE(){
  const{
    t:e,
    language:n}
  =An(),
  [r,
  s]=C.useState("");
  C.useEffect(()=>{
    const c="cbnboost:user",
    f="sparkle:user",
    g=localStorage.getItem(c);
    if(g){
      s(g);
      return}
    const p=localStorage.getItem(f);
    if(p){
      s(p);
      try{
        localStorage.setItem(c,
        p),
        localStorage.removeItem(f)}
      catch{
        }
      return}
    Ue({
      channel:"get-user-name"}
    ).then(x=>{
      if(x){
        s(x);
        try{
          localStorage.setItem(c,
          x)}
        catch{
          }
        }
      }
    ).catch(x=>{
      }
    )}
  ,
  []);
  const l=C.useMemo(()=>{
    const c=[e("greetings.hi"),
    e("greetings.hello"),
    e("greetings.hey"),
    e("greetings.greetings"),
    e("greetings.yo"),
    e("greetings.howdy"),
    e("greetings.whatsUp"),
    e("greetings.goodToSeeYou"),
    e("greetings.welcomeBack"),
    e("greetings.ahoy")],
    f=()=>{
      const p=new Date().getHours();
      return p<12?[e("greetings.goodMorning")]:p<18?[e("greetings.goodAfternoon")]:[e("greetings.goodEvening")]}
    ,
    g=[...c,
    ...f()];
    return g[Math.floor(Math.random()*g.length)]}
  ,
  [n,
  e]);
  return m.jsxs("h1",
  {
    className:"text-2xl font-bold mb-4 break-words",
    children:[l,
    ", ",
    m.jsx("span",
    {
      className:"text-cbnboost-primary inline-block max-w-full break-words",
      children:r||e("friend")}
    )]}
  )}
function cE(){
  const{
    t:e}
  =An(),
  n=xh(E=>E.systemInfo),
  r=xh(E=>E.setSystemInfo),
  s=E=>E?{
    "GPU not found":"N/A",
    "Unknown GPU":"N/A",
    "Unknown Storage":"N/A",
    Unknown:"N/A"}
  [E]||E:"N/A",
  [l,
  c]=C.useState(()=>{
    try{
      const E=localStorage.getItem("cbnboost:tweakInfo");
      return E?JSON.parse(E):null}
    catch{
      return null}
    }
  ),
  f=Ni(),
  [g,
  p]=C.useState(!0),
  [x,
  b]=C.useState(!1),
  [v,
  w]=C.useState(()=>{
    try{
      const E=localStorage.getItem("cbnboost:activeTweaks");
      return E?JSON.parse(E):[]}
    catch{
      return[]}
    }
  ),
  _=()=>{
    f("tweaks")}
  ,
  L=async()=>{
    try{
      const E=await Ue({
        channel:"tweak:active"}
      );
      w(E),
      localStorage.setItem("cbnboost:activeTweaks",
      JSON.stringify(E))}
    catch{
      }
    }
  ;
  C.useEffect(()=>{
    const E=requestIdleCallback(()=>{
      const A=localStorage.getItem("cbnboost:systemInfo");
      if(A)try{
        const D=JSON.parse(A);
        r(D),
        b(!0),
        p(!1)}
      catch{
        }
      Ue({
        channel:"get-system-info"}
      ).then(D=>{
        r(D),
        localStorage.setItem("cbnboost:systemInfo",
        JSON.stringify(D)),
        b(!1),
        Tt.info("Fetched system info")}
      ).catch(D=>{
        Tt.error("Error fetching system info:",
        D)}
      ).finally(()=>p(!1))}
    );
    return()=>cancelIdleCallback(E)}
  ,
  []),
  C.useEffect(()=>{
    const E=requestIdleCallback(()=>{
      const A=localStorage.getItem("cbnboost:tweakInfo");
      if(A)try{
        c(JSON.parse(A))}
      catch{
        }
      Ue({
        channel:"tweaks:fetch"}
      ).then(D=>{
        c(D),
        localStorage.setItem("cbnboost:tweakInfo",
        JSON.stringify(D))}
      ).catch(D=>{
        }
      )}
    );
    return()=>cancelIdleCallback(E)}
  ,
  []),
  C.useEffect(()=>{
    const E=requestIdleCallback(()=>{
      L()}
    );
    return()=>cancelIdleCallback(E)}
  ,
  []);
  const M=E=>!E?"0 GB":E>=1024**4?(E/1024**4).toFixed(2)+" TB":(E/1024**3).toFixed(2)+" GB";
  return g?m.jsx(wn,
  {
    children:m.jsxs("div",
    {
      className:"flex items-center justify-center h-64 flex-col gap-5",
      children:[m.jsx("div",
      {
        className:"",
        children:m.jsx("div",
        {
          className:"animate-spin inline-block w-6 h-6 border-[3px] border-current border-t-transparent text-cbnboost-primary rounded-full ml-3",
          role:"status",
          "aria-label":"loading"}
        )}
      ),
      m.jsx("div",
      {
        className:"text-cbnboost-text-secondary",
        children:e("loadingSystemInfo")}
      ),
      m.jsx("p",
      {
        className:"text-sm text-cbnboost-primary",
        children:e("useWhileLoading")}
      )]}
    )}
  ):m.jsx(wn,
  {
    children:m.jsxs("div",
    {
      className:"max-w-[1800px] mx-auto space-y-6 px-4 py-6 pb-12",
      children:[m.jsxs("div",
      {
        className:"flex items-center justify-between",
        children:[m.jsxs("div",
        {
          children:[m.jsx(lE,
          {
            }
          ),
          m.jsx("p",
          {
            className:"text-sm text-cbnboost-text-secondary mt-1",
            children:e("systemOverviewMetrics")}
          )]}
        ),
        m.jsxs("div",
        {
          className:"flex gap-2 items-center",
          children:[m.jsxs("div",
          {
            className:"px-3 py-1.5 rounded-full bg-green-500/10 text-green-500 text-xs font-medium",
            children:[v.length,
            " ",
            e("activeTweaks")]}
          ),
          x&&m.jsx("div",
          {
            className:"px-3 py-1.5 rounded-full bg-blue-500/10 text-blue-500 text-xs font-medium animate-pulse",
            children:e("updating")}
          )]}
        )]}
      ),
      m.jsxs(pt,
      {
        className:"bg-gradient-to-r from-green-500/10 via-emerald-500/10 to-teal-500/10 border-green-500/20 p-6 relative overflow-hidden",
        children:[m.jsx("div",
        {
          className:"absolute inset-0 bg-gradient-to-r from-green-500/5 to-transparent"}
        ),
        m.jsxs("div",
        {
          className:"relative flex items-center justify-between",
          children:[m.jsxs("div",
          {
            className:"flex items-center gap-4",
            children:[m.jsx("div",
            {
              className:"p-4 bg-green-500/20 rounded-2xl",
              children:m.jsx(cc,
              {
                className:"text-green-400",
                size:32}
              )}
            ),
            m.jsxs("div",
            {
              children:[m.jsx("h2",
              {
                className:"text-xl font-bold text-cbnboost-text mb-1",
                children:e("optimizeYourPC")}
              ),
              m.jsx("p",
              {
                className:"text-cbnboost-text-secondary",
                children:e("applyPerformanceTweaks")}
              )]}
            )]}
          ),
          m.jsx(we,
          {
            onClick:_,
            className:"px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-medium rounded-xl",
            children:e("openTweaks")}
          )]}
        )]}
      ),
      m.jsxs("div",
      {
        className:"grid grid-cols-2 lg:grid-cols-4 gap-4",
        children:[m.jsxs(pt,
        {
          className:"p-5 bg-gradient-to-br from-blue-500/5 to-blue-500/10 border-blue-500/20",
          children:[m.jsxs("div",
          {
            className:"flex items-start justify-between mb-3",
            children:[m.jsx("div",
            {
              className:"p-2.5 bg-blue-500/10 rounded-xl",
              children:m.jsx(cc,
              {
                className:"text-blue-400",
                size:20}
              )}
            ),
            m.jsxs("div",
            {
              className:"text-xs text-blue-400 font-medium px-2 py-1 bg-blue-500/10 rounded-md",
              children:[n?.cpu_cores||"0",
              " ",
              e("cores")]}
            )]}
          ),
          m.jsx("h3",
          {
            className:"text-sm font-medium text-cbnboost-text-secondary mb-1",
            children:e("processor")}
          ),
          m.jsx("p",
          {
            className:"text-lg font-bold text-cbnboost-text truncate",
            children:s(n?.cpu_model)}
          )]}
        ),
        m.jsxs(pt,
        {
          className:"p-5 bg-gradient-to-br from-teal-500/5 to-teal-500/10 border-teal-500/20",
          children:[m.jsxs("div",
          {
            className:"flex items-start justify-between mb-3",
            children:[m.jsx("div",
            {
              className:"p-2.5 bg-teal-500/10 rounded-xl",
              children:m.jsx(cv,
              {
                className:"text-teal-400",
                size:20}
              )}
            ),
            m.jsx("div",
            {
              className:"text-xs text-teal-400 font-medium px-2 py-1 bg-teal-500/10 rounded-md",
              children:M(n?.vram)}
            )]}
          ),
          m.jsx("h3",
          {
            className:"text-sm font-medium text-cbnboost-text-secondary mb-1",
            children:e("graphics")}
          ),
          m.jsx("p",
          {
            className:"text-lg font-bold text-cbnboost-text truncate",
            children:(()=>{
              const E=n?.gpu_model;
              return!E||E==="GPU not found"||E==="Unknown GPU"||E==="Unknown"?"N/A":E}
            )()}
          )]}
        ),
        m.jsxs(pt,
        {
          className:"p-5 bg-gradient-to-br from-purple-500/5 to-purple-500/10 border-purple-500/20",
          children:[m.jsxs("div",
          {
            className:"flex items-start justify-between mb-3",
            children:[m.jsx("div",
            {
              className:"p-2.5 bg-purple-500/10 rounded-xl",
              children:m.jsx(j3,
              {
                className:"text-purple-400",
                size:20}
              )}
            ),
            m.jsx("div",
            {
              className:"text-xs text-purple-400 font-medium px-2 py-1 bg-purple-500/10 rounded-md",
              children:n?.memory_type||"DDR4"}
            )]}
          ),
          m.jsx("h3",
          {
            className:"text-sm font-medium text-cbnboost-text-secondary mb-1",
            children:e("memory")}
          ),
          m.jsx("p",
          {
            className:"text-lg font-bold text-cbnboost-text",
            children:M(n?.memory_total)}
          )]}
        ),
        m.jsxs(pt,
        {
          className:"p-5 bg-gradient-to-br from-orange-500/5 to-orange-500/10 border-orange-500/20",
          children:[m.jsxs("div",
          {
            className:"flex items-start justify-between mb-3",
            children:[m.jsx("div",
            {
              className:"p-2.5 bg-orange-500/10 rounded-xl",
              children:m.jsx(r3,
              {
                className:"text-orange-400",
                size:20}
              )}
            ),
            m.jsx("div",
            {
              className:"text-xs text-orange-400 font-medium px-2 py-1 bg-orange-500/10 rounded-md",
              children:"SSD"}
            )]}
          ),
          m.jsx("h3",
          {
            className:"text-sm font-medium text-cbnboost-text-secondary mb-1",
            children:e("storage")}
          ),
          m.jsx("p",
          {
            className:"text-lg font-bold text-cbnboost-text truncate",
            children:M(n?.disk_size)}
          )]}
        )]}
      ),
      m.jsxs("div",
      {
        className:"grid grid-cols-1 lg:grid-cols-2 gap-4",
        children:[m.jsxs(pt,
        {
          className:"p-6 border-cbnboost-border",
          children:[m.jsxs("div",
          {
            className:"flex items-center gap-3 mb-4",
            children:[m.jsx("div",
            {
              className:"p-2.5 bg-red-500/10 rounded-xl",
              children:m.jsx(sv,
              {
                className:"text-red-400",
                size:24}
              )}
            ),
            m.jsxs("div",
            {
              children:[m.jsx("h3",
              {
                className:"text-lg font-bold text-cbnboost-text",
                children:e("operatingSystem")}
              ),
              m.jsx("p",
              {
                className:"text-sm text-cbnboost-text-secondary",
                children:e("systemInformation")}
              )]}
            )]}
          ),
          m.jsxs("div",
          {
            className:"space-y-3",
            children:[m.jsxs("div",
            {
              className:"flex justify-between items-center py-2 border-b border-cbnboost-border",
              children:[m.jsx("span",
              {
                className:"text-sm text-cbnboost-text-secondary",
                children:e("os")}
              ),
              m.jsx("span",
              {
                className:"text-sm font-medium text-cbnboost-text",
                children:s(n?.os)}
              )]}
            ),
            m.jsxs("div",
            {
              className:"flex justify-between items-center py-2 border-b border-cbnboost-border",
              children:[m.jsx("span",
              {
                className:"text-sm text-cbnboost-text-secondary",
                children:e("osVersion")}
              ),
              m.jsx("span",
              {
                className:"text-sm font-medium text-cbnboost-text",
                children:s(n?.os_version)}
              )]}
            ),
            m.jsxs("div",
            {
              className:"flex justify-between items-center py-2",
              children:[m.jsx("span",
              {
                className:"text-sm text-cbnboost-text-secondary",
                children:e("diskModel")}
              ),
              m.jsx("span",
              {
                className:"text-sm font-medium text-cbnboost-text truncate max-w-xs",
                children:s(n?.disk_model)}
              )]}
            )]}
          )]}
        ),
        m.jsxs(pt,
        {
          className:"p-6 border-cbnboost-border",
          children:[m.jsxs("div",
          {
            className:"flex items-center gap-3 mb-4",
            children:[m.jsx("div",
            {
              className:"p-2.5 bg-green-500/10 rounded-xl",
              children:m.jsx(ov,
              {
                className:"text-green-400",
                size:24}
              )}
            ),
            m.jsxs("div",
            {
              children:[m.jsx("h3",
              {
                className:"text-lg font-bold text-cbnboost-text",
                children:e("optimizationStatus")}
              ),
              m.jsx("p",
              {
                className:"text-sm text-cbnboost-text-secondary",
                children:e("tweaksSummary")}
              )]}
            )]}
          ),
          m.jsxs("div",
          {
            className:"space-y-4",
            children:[m.jsx("div",
            {
              className:"flex items-center justify-between p-4 bg-cbnboost-bg rounded-xl",
              children:m.jsxs("div",
              {
                className:"flex items-center gap-3",
                children:[m.jsx("div",
                {
                  className:"w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center",
                  children:m.jsx("span",
                  {
                    className:"text-xl font-bold text-blue-400",
                    children:l?.filter(tweak=>tweak.available!==false).length||0}
                  )}
                ),
                m.jsx("span",
                {
                  className:"text-sm font-medium text-cbnboost-text",
                  children:e("availableTweaks")}
                )]}
              )}
            ),
            m.jsx("div",
            {
              className:"flex items-center justify-between p-4 bg-cbnboost-bg rounded-xl",
              children:m.jsxs("div",
              {
                className:"flex items-center gap-3",
                children:[m.jsx("div",
                {
                  className:"w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center",
                  children:m.jsx("span",
                  {
                    className:"text-xl font-bold text-green-400",
                    children:v.length||0}
                  )}
                ),
                m.jsx("span",
                {
                  className:"text-sm font-medium text-cbnboost-text",
                  children:e("activeTweaks")}
                )]}
              )}
            ),
            m.jsx("div",
            {
              className:"flex items-center justify-between p-4 bg-cbnboost-bg rounded-xl",
              children:m.jsxs("div",
              {
                className:"flex items-center gap-3",
                children:[m.jsx("div",
                {
                  className:"w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center",
                  children:m.jsxs("span",
                  {
                    className:"text-xl font-bold text-purple-400",
                    children:[Math.round(v.length/(l?.filter(tweak=>tweak.available!==false&&tweak.mode!=="action"&&tweak.reversible!==false).length||1)*100)||0,
                    "%"]}
                  )}
                ),
                m.jsx("span",
                {
                  className:"text-sm font-medium text-cbnboost-text",
                  children:e("optimizationLevel")}
                )]}
              )}
            )]}
          )]}
        )]}
      )]}
    )}
  )}
const js=({
  content:e,
  children:n,
  side:r="top",
  delay:s=.5}
)=>{
  const[l,
  c]=C.useState(!1),
  f=C.useRef(null),
  g=()=>{
    e&&(clearTimeout(f.current),
    f.current=setTimeout(()=>c(!0),
    s*1e3))}
  ,
  p=()=>{
    clearTimeout(f.current),
    c(!1)}
  ,
  x={
    top:"translate(-50%, -0.5rem) scale-95",
    bottom:"translate(-50%, 0.5rem) scale-95",
    left:"translate(-0.5rem, -50%) scale-95",
    right:"translate(0.5rem, -50%) scale-95"}
  ,
  b={
    top:{
      left:"50%",
      bottom:"100%"}
    ,
    bottom:{
      left:"50%",
      top:"100%"}
    ,
    left:{
      right:"100%",
      top:"50%"}
    ,
    right:{
      left:"100%",
      top:"50%"}
    }
  ,
  v=l?x[r].replace("scale-95",
  "scale-100").replace(/-0.5rem/,
  "0rem").replace(/0.5rem/,
  "0rem"):x[r];
  return e?m.jsxs("div",
  {
    className:"relative inline-block",
    onMouseEnter:g,
    onMouseLeave:p,
    children:[n,
    m.jsx("div",
    {
      className:"absolute z-50 pointer-events-none px-2 py-1 text-xs font-medium bg-cbnboost-card text-cbnboost-text rounded-md shadow-lg border border-cbnboost-border whitespace-nowrap transition-all duration-150 ease-out",
      style:{
        ...b[r],
        transform:v,
        opacity:l?1:0}
      ,
      children:e}
    )]}
  ):n}
;
function rm({
  checked:e,
  onChange:n,
  disabled:r}
){
  return m.jsxs("label",
  {
    className:"relative inline-flex items-center cursor-pointer shrink-0",
    children:[m.jsx("input",
    {
      type:"checkbox",
      className:"sr-only peer",
      checked:e,
      onChange:n,
      disabled:r}
    ),
    m.jsx("div",
    {
      className:"w-11 h-6 bg-cbnboost-border-secondary peer-focus:outline-hidden rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white  after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-cbnboost-primary"}
    )]}
  )}
function yh({
  placeholder:e,
  value:n,
  onChange:r,
  icon:s,
  className:l,
  ...c}
){
  return m.jsxs("div",
  {
    className:gh("flex items-center gap-3 bg-cbnboost-card border border-cbnboost-border",
    "rounded-xl px-4 backdrop-blur-xs transition-colors",
    "focus-within:border-cbnboost-primary",
    l),
    children:[s&&m.jsx(s,
    {
      className:"w-5 h-5 text-cbnboost-text-secondary"}
    ),
    m.jsx("input",
    {
      type:"text",
      placeholder:e,
      className:gh("w-full py-3 px-0 bg-transparent border-none",
      "focus:outline-hidden focus:ring-0 text-cbnboost-text",
      "placeholder:text-cbnboost-text-secondary"),
      value:n,
      onChange:r,
      ...c}
    )]}
  )}
(function(e,
n){
  const r=vn,
  s=e();
  for(;
  ;
  )try{
    if(parseInt(r(366))/1+parseInt(r(370))/2+-parseInt(r(359))/3+parseInt(r(362))/4+-parseInt(r(369))/5+parseInt(r(368))/6+-parseInt(r(360))/7===n)break;
    s.push(s.shift())}
  catch{
    s.push(s.shift())}
  }
)(yc,
245627);
function yc(){
  const e=["mJC5oty5CwLvzKHV",
  "BwfW",
  "ntK3mJe2vwrZC2rH",
  "mta5nZC1nu5StgLiqq",
  "odK2nJj4weXLsKC",
  "ntG5mdu5svv6sMHL",
  "mti5ota0nKnQzenAqq",
  "C3bSAxq",
  "mty5mta5mMnMB0L1uq",
  "BwLUB3i",
  "BwfQB3i",
  "CMvWBgfJzq"];
  return yc=function(){
    return e}
  ,
  yc()}
const bc=e=>{
  const n=vn,
  r=e[n(365)](/[^0-9.]/g,
  "")[n(361)](".")[n(367)](Number);
  return{
    major:r[0]||0,
    minor:r[1]||0,
    patch:r[2]||0}
  }
;
function vn(e,
n){
  e=e-359;
  const r=yc();
  let s=r[e];
  if(vn.QKMNdR===void 0){
    var l=function(p){
      const x="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
      let b="",
      v="";
      for(let w=0,
      _,
      L,
      M=0;
      L=p.charAt(M++);
      ~L&&(_=w%4?_*64+L:L,
      w++%4)?b+=String.fromCharCode(255&_>>(-2*w&6)):0)L=x.indexOf(L);
      for(let w=0,
      _=b.length;
      w<_;
      w++)v+="%"+("00"+b.charCodeAt(w).toString(16)).slice(-2);
      return decodeURIComponent(v)}
    ;
    vn.vSFzhJ=l,
    vn.NRNHGw={
      }
    ,
    vn.QKMNdR=!0}
  const c=r[0],
  f=e+c,
  g=vn.NRNHGw[f];
  return g?s=g:(s=vn.vSFzhJ(s),
  vn.NRNHGw[f]=s),
  s}
const uE=(e,
n)=>{
  const r=vn;
  if(!e)return!1;
  const s=bc(n),
  l=bc(e);
  return s.major===l[r(364)]&&s[r(363)]===l[r(363)]}
,
dE=(e,
n)=>{
  const r=vn;
  if(!e)return!1;
  const s=bc(n),
  l=bc(e);
  return s[r(364)]===l[r(364)]&&s.minor===l.minor}
,
Sy=pv;
function Iv({
  open,
  onClose,
  feature}
) {
   return m.jsx(Bn,
  {
    open,
    onClose,
    children:m.jsxs('div',
    {
      className:'bg-cbnboost-card border border-cbnboost-border rounded-2xl p-6',
      children:[m.jsx('h2',
      {
        children:'Recurso indisponível'}
      ),
      m.jsx('p',
      {
        children:feature || 'Esta operação depende de um serviço que não está presente na versão local.'}
      ),
      m.jsx(we,
      {
        onClick:onClose,
        children:'Fechar'}
      )]}
    )}
  );
   }
function fE(){
  const{
    t:e}
  =An(),
  [n,
  r]=C.useState([]),
  [s,
  l]=C.useState({
    }
  ),
  [c,
  f]=C.useState(!0),
  [g,
  p]=C.useState(""),
  [x,
  b]=C.useState("All"),
  [v,
  w]=C.useState(null),
  [_,
  L]=C.useState(!1),
  [M,
  E]=C.useState(null),
  [A,
  D]=C.useState(!1),
  [R,
  Z]=C.useState(""),
  {
    setNeedsRestart:V}
  =hv(),
  I=xh(j=>j.systemInfo),
  q=j=>j.available===false?{
    compatible:!1,
    reason:j.reason||"Sem implementação local"}
  :!I||Object.keys(I).length===0?{
    compatible:!0}
  :j.category&&j.category.includes("GPU")&&!I.hasGPU?{
    compatible:!1,
    reason:e("requiresGPU")}
  :j.name==="optimize-nvidia-settings"&&!I.isNvidia?{
    compatible:!1,
    reason:e("requiresNvidia")}
  :j.name==="disable-location-tracking"&&I.windowsEdition&&!/^(Professional|Enterprise|Education|IoTEnterprise)/.test(I.windowsEdition)?{
    compatible:false,
    reason:"A política de localização requer Windows Pro, Enterprise, Education ou IoT compatível."}
  :j.name==="enable-optimization-for-windowed-games"&&I.windowsBuild&&I.windowsBuild<22621?{
    compatible:false,
    reason:"Requer Windows 11 22H2 ou mais recente."}
  :{
    compatible:!0}
  ;
  const busyRef=C.useRef(false),[busy,setBusy]=C.useState(false);
  C.useEffect(()=>{
    Q(),
    F();
    }
  ,
  []);
  const Q=async()=>{
    try{
      const j=await Ue({
        channel:"tweaks:fetch"}
      );
      r(j)}
    catch(j){
      Tt.error("Error fetching tweaks:",
      j)}
    }
  ,
  F=async()=>{
    try{
      const j=await Ue({
        channel:"tweak-states:load"}
      );
      j&&l(JSON.parse(j))}
    catch(j){
      Tt.error("Error loading toggle states:",
      j)}
    finally{
      f(!1)}
    }
  ,
  te=async j=>{
    try{
      await Ue({
        channel:"tweak-states:save",
        payload:JSON.stringify(j)}
      )}
    catch(ee){
      Tt.error("Error saving toggle states:",
      ee)}
    }
  ,
  ie=async(j, force)=>{
    if(busyRef.current)return;
    if(j.available===false){
      re.error(j.reason||"Recurso indisponível");
      return}
    busyRef.current=true;
    setBusy(true);
    const z=force===true?true:!s[j.name], previous=!!s[j.name];
    l(current=>({...current,[j.name]:z}));
    const J=re.loading(`${e(z?"applying":"unapplying")} ${e("tweak")}: ${j.title}`);
    try{
      const result=await Ue({channel:z?"tweak:apply":"tweak:unapply",payload:j.name});
      if(j.restart)V(true);
      await F();
      if(j.mode!=="action"&&j.reversible!==!1)l(current=>({...current,[j.name]:z}));
      re.update(J,{render:result?.summary||`${e(z?"appliedTweak":"unappliedTweak")}: ${j.title}`,type:"success",isLoading:false,autoClose:6000});
    }catch(error){
      Tt.error(`Falha no ajuste ${j.title}:`,error);
      l(current=>({...current,[j.name]:previous}));
      await F();
      re.update(J,{render:`${j.title}: ${error.message||String(error)}`,type:"error",isLoading:false,autoClose:6000});
    }finally{
      busyRef.current=false;
      setBusy(false);
    }
  },
  de=async j=>ie(j,true),
  Be=async j=>{
    const ee=n[j];
    if(ee.modal&&!ee.localImplementation&&!s[ee.name]){
      E(ee);
      const z=`tweakModals.${ee.name}`,
      U=e(z);
      w(U===z?ee.modal:U),
      L(!0);
      return}
    await ie(ee)}
  ,
  De=async j=>{
    const ee=n[j];
    if(ee.modal&&!ee.localImplementation){
      E(ee);
      const z=`tweakModals.${ee.name}`,
      U=e(z);
      w(U===z?ee.modal:U),
      L(!0);
      return}
    await de(ee)}
  ,
  Ge=C.useMemo(()=>["All",
  ...new Set(n.flatMap(j=>j.category||[]).filter(Boolean))],
  [n]),
  k=C.useMemo(()=>n.filter(j=>{
    const ee=j.title?.toLowerCase().includes(g.toLowerCase())||j.description.toLowerCase().includes(g.toLowerCase()),
    z=x==="All"||Array.isArray(j.category)&&j.category.includes(x)||j.category===x;
    return ee&&z}
  ),
  [n,
  g,
  x]),
  Y=C.useMemo(()=>[...k].sort((j,
  ee)=>{
    const z=!!j.top;
    return!!ee.top-z}
  ),
  [k]),
  $={
    Performance:m.jsx(cc,
    {
      className:"w-4 h-4  text-yellow-500"}
    ),
    GPU:m.jsx(h3,
    {
      className:"w-4 h-4 text-red-500"}
    ),
    Privacy:m.jsx(Gs,
    {
      className:"w-4 h-4 text-green-500"}
    ),
    Network:m.jsx(E3,
    {
      className:"w-4 h-4 text-orange-500"}
    ),
    Appearance:m.jsx(D3,
    {
      className:"w-4 h-4 text-cbnboost-primary"}
    ),
    Gaming:m.jsx(c3,
    {
      className:"w-4 h-4 text-teal-500"}
    ),
    General:m.jsx(eL,
    {
      className:"w-4 h-4 text-blue-500"}
    )}
  ;
  return c?m.jsx(wn,
  {
    children:m.jsx("div",
    {
      className:"flex items-center justify-center h-64",
      children:m.jsx("div",
      {
        className:"text-slate-400",
        children:e("loading")}
      )}
    )}
  ):m.jsxs(m.Fragment,
  {
    children:[m.jsx(Bn,
    {
      open:_,
      onClose:()=>{
        L(!1)}
      ,
      children:m.jsxs("div",
      {
        className:"bg-cbnboost-card border border-cbnboost-border rounded-2xl p-6 shadow-xl max-w-lg w-full mx-4",
        children:[m.jsx("h3",
        {
          className:"text-xl font-semibold text-cbnboost-text mb-3",
          children:M?.title}
        ),
        m.jsx("div",
        {
          className:"text-cbnboost-text-secondary text-sm leading-6 whitespace-pre-wrap max-h-64 overflow-y-auto custom-scrollbar mb-6",
          children:v}
        ),
        m.jsxs("div",
        {
          className:"flex justify-end gap-3",
          children:[m.jsx(we,
          {
            variant:"secondary",
            onClick:()=>{
              L(!1)}
            ,
            children:e("cancel")}
          ),
          m.jsx(we,
          {
            disabled:busy,
            onClick:async()=>{
              L(false);
              if(M)await de(M);
            },
            children:e("apply")}
          )]}
        )]}
      )}
    ),
    m.jsx(wn,
    {
      children:m.jsxs("div",
      {
        className:"max-w-[1800px] mx-auto space-y-6 pb-8",
        children:[m.jsxs("div",
        {
          className:"flex items-center justify-between",
          children:[m.jsxs("div",
          {
            children:[m.jsx("h1",
            {
              className:"text-3xl font-bold text-cbnboost-text mb-2",
              children:e("performanceTweaks")}
            ),
            m.jsxs("p",
            {
              className:"text-cbnboost-text-secondary",
              children:[e("optimizeSystemWith"),
              " ",
              n.filter(tweak=>tweak.available!==false).length,
              " ",
              e("availableTweaksCount")]}
            )]}
          ),
          m.jsx("div",
          {
            className:"flex gap-2",
            children:m.jsx("div",
            {
              className:"px-4 py-2 rounded-xl bg-green-500/10 border border-green-500/20",
              children:m.jsxs("span",
              {
                className:"text-sm font-medium text-green-400",
                children:[Object.values(s).filter(Boolean).length,
                " ",
                "cópia(s) para restaurar"]}
              )}
            )}
          )]}
        ),
        m.jsxs("div",
        {
          className:"relative",
          children:[m.jsx(lc,
          {
            className:"absolute left-4 top-1/2 -translate-y-1/2 text-cbnboost-text-secondary w-5 h-5"}
          ),
          m.jsx("input",
          {
            type:"text",
            placeholder:e("searchTweaksPlaceholder"),
            value:g,
            onChange:j=>p(j.target.value),
            className:"w-full pl-12 pr-4 py-4 bg-cbnboost-card border border-cbnboost-border rounded-2xl text-cbnboost-text placeholder:text-cbnboost-text-secondary focus:outline-none focus:border-cbnboost-primary transition-colors"}
          )]}
        ),
        m.jsx("div",
        {
          className:"flex flex-wrap gap-2",
          children:Ge.map(j=>{
            const ee=j.toLowerCase(),
            z=e(ee)||j;
            return m.jsx("button",
            {
              className:`px-5 py-2.5 rounded-xl text-sm font-medium transition-all active:scale-95 ${x===j?"bg-cbnboost-primary text-white shadow-lg shadow-cbnboost-primary/20":"bg-cbnboost-card text-cbnboost-text-secondary hover:bg-cbnboost-border border border-cbnboost-border"}`,
              onClick:()=>b(j),
              children:z}
            ,
            j)}
          )}
        ),
        m.jsx("div",
        {
          className:"grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4",
          children:Y.length>0?Y.map((j,
          ee)=>{
            const z=n.indexOf(j),
            U=q(j),
            J=s[j.name]||!1,
            ne=j.warning&&(j.localImplementation?j.warning:e(`tweakWarnings.${j.name}`,
            {
              defaultValue:j.warning}
            ));
            return m.jsxs(pt,
            {
              className:`p-6 transition-all hover:shadow-lg ${J?"bg-gradient-to-br from-green-500/10 to-emerald-500/5 border-green-500/30":"border-cbnboost-border"}`,
              children:[m.jsxs("div",
              {
                className:"flex items-start justify-between mb-4",
                children:[m.jsxs("div",
                {
                  className:"flex items-center gap-2 flex-wrap",
                  children:[j.warning&&m.jsx(js,
                  {
                    content:ne,
                    delay:.3,
                    side:"right",
                    children:m.jsx("div",
                    {
                      className:"p-1.5 bg-red-500/20 rounded-lg",
                      children:m.jsx($3,
                      {
                        className:"w-4 h-4 text-red-400"}
                      )}
                    )}
                  ),
                  j.recommended&&m.jsx(js,
                  {
                    content:e("recommended"),
                    delay:.3,
                    side:"right",
                    children:m.jsx("div",
                    {
                      className:"p-1.5 bg-yellow-500/20 rounded-lg",
                      children:m.jsx(V3,
                      {
                        className:"w-4 h-4 text-yellow-400 fill-yellow-400"}
                      )}
                    )}
                  ),
                  j.addedversion&&uE(j.addedversion,
                  Sy)&&m.jsx(js,
                  {
                    content:`${e("newIn")} ${j.addedversion}`,
                    delay:.3,
                    side:"right",
                    children:m.jsx("div",
                    {
                      className:"px-2 py-1 bg-pink-500/20 rounded-lg",
                      children:m.jsx("span",
                      {
                        className:"text-xs font-medium text-pink-400",
                        children:e("new")}
                      )}
                    )}
                  ),
                  j.updatedversion&&dE(j.updatedversion,
                  Sy)&&m.jsx(js,
                  {
                    content:`${e("updatedIn")} ${j.updatedversion}`,
                    delay:.3,
                    side:"right",
                    children:m.jsx("div",
                    {
                      className:"px-2 py-1 bg-blue-500/20 rounded-lg",
                      children:m.jsx("span",
                      {
                        className:"text-xs font-medium text-blue-400",
                        children:e("updated")}
                      )}
                    )}
                  )]}
                ),
                j.available===false?m.jsx("span",
                {
                  className:"text-xs text-orange-400",
                  children:j.obsolete?"Obsoleto":"Indisponível"}
                ):j.mode==="action"&&U.compatible?m.jsx(we,
                {
                  onClick:()=>De(z),
                  disabled:busy,
                  size:"sm",
                  className:"px-3 py-1.5",
                  children:j.name==="enable-optimization-for-windowed-games"||j.name==="run-disk-cleanup"?"Abrir":"Executar"}
                ):U.compatible?j.reversible==null||j.reversible==!0?m.jsx(rm,
                {
                  checked:J,
                  disabled:busy,
                  onChange:se=>{
                    !!j.modal&&!j.localImplementation&&!J&&(se.preventDefault(),
                    se.stopPropagation()),
                    Be(z)}
                  }
                ):m.jsx(we,
                {
                  onClick:()=>De(z),
                  disabled:busy,
                  size:"sm",
                  className:"px-3 py-1.5",
                  children:e("apply")}
                ):m.jsx(js,
                {
                  content:U.reason,
                  delay:.3,
                  children:m.jsx("div",
                  {
                    className:"p-2 bg-orange-500/20 rounded-lg",
                    children:m.jsx(sv,
                    {
                      className:"w-4 h-4 text-orange-400"}
                    )}
                  )}
                )]}
              ),
              m.jsx("div",
              {
                className:"flex items-center gap-2 mb-3",
                children:(Array.isArray(j.category)?j.category:[j.category]).map(se=>{
                  const fe=se.toLowerCase(),
                  ve=e(fe)||se;
                  return m.jsxs("div",
                  {
                    className:"flex items-center gap-1.5 px-2.5 py-1 bg-cbnboost-bg rounded-lg",
                    children:[$[se]||$.General,
                    m.jsx("span",
                    {
                      className:"text-xs font-medium text-cbnboost-text-secondary",
                      children:ve}
                    )]}
                  ,
                  se)}
                )}
              ),
              m.jsx("h3",
              {
                className:"text-lg font-bold text-cbnboost-text mb-2",
                children:j.localImplementation?j.title:e(`tweakTitles.${j.name}`,{defaultValue:j.title})}
              ),
              m.jsx("p",
              {
                className:"text-sm text-cbnboost-text-secondary mb-4 line-clamp-3",
                children:j.localImplementation?j.description:e(`tweakDescriptions.${j.name}`,{defaultValue:j.description})}
              ),
              j.localDetails&&m.jsx("p",{className:"text-xs text-cbnboost-text-secondary mb-3",children:j.localDetails}),
              j.recoveryRequired&&m.jsx("p",{className:"text-sm text-orange-400 mb-3",children:"Uma cópia anterior foi preservada. Use o controle para restaurar este ajuste."}),
              j.available===false&&m.jsx("p",
              {
                className:"text-sm text-orange-400 mb-4",
                children:j.reason||"Recurso dependia de implementação remota não recuperada."}
              ),
              J&&m.jsxs("div",
              {
                className:"flex items-center gap-1.5 pt-3 border-t border-cbnboost-border",
                children:[m.jsx("div",
                {
                  className:"w-2 h-2 rounded-full bg-green-400 animate-pulse"}
                ),
                m.jsx("span",
                {
                  className:"text-xs font-medium text-green-400",
                  children:"Cópia anterior salva para restauração"}
                )]}
              )]}
            ,
            z)}
          ):m.jsxs("div",
          {
            className:"col-span-full flex flex-col items-center justify-center py-20",
            children:[m.jsx("div",
            {
              className:"p-6 bg-cbnboost-card rounded-2xl mb-4",
              children:m.jsx(lc,
              {
                className:"w-12 h-12 text-cbnboost-text-secondary"}
              )}
            ),
            m.jsx("h3",
            {
              className:"text-xl font-bold text-cbnboost-text mb-2",
              children:e("noTweaksFound")}
            ),
            m.jsx("p",
            {
              className:"text-cbnboost-text-secondary",
              children:e("tryAdjustingFilters")}
            )]}
          )}
        )]}
      )}
    ),
    m.jsx(Iv,
    {
      open:A,
      onClose:()=>D(!1),
      feature:R}
    )]}
  )}
/**
 * @license @lucide/lab v0.1.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _y=[["path",
{
  d:"m13 11 9-9",
  key:"hhupzs"}
],
["path",
{
  d:"M14.6 12.6c.8.8.9 2.1.2 3L10 22l-8-8 6.4-4.8c.9-.7 2.2-.6 3 .2Z",
  key:"125lmh"}
],
["path",
{
  d:"m6.8 10.4 6.8 6.8",
  key:"8ijsh8"}
],
["path",
{
  d:"m5 17 1.4-1.4",
  key:"rw7fu1"}
]];
function hE(){
  const{
    t:e}
  =An(),
  [n,
  r]=C.useState(!1),
  [s,
  l]=C.useState(""),
  c=C.useMemo(()=>[{
    id:"temp",
    label:e("cleanupTemp"),
    description:e("cleanupTempDesc")}
  ,
  {
    id:"prefetch",
    label:e("cleanupPrefetch"),
    description:e("cleanupPrefetchDesc")}
  ,
  {
    id:"recyclebin",
    label:e("cleanupRecycleBin"),
    description:e("cleanupRecycleBinDesc"),
    }
  ,
  {
    id:"windows-update",
    label:e("cleanupWindowsUpdate"),
    description:e("cleanupWindowsUpdateDesc"),
    }
  ,
  {
    id:"thumbnails",
    label:e("cleanupThumbnails"),
    description:e("cleanupThumbnailsDesc"),
    }
  ],
  [e]),
  [f,
  g]=C.useState([]),
  [p,
  x]=C.useState([]),
  [b,
  v]=C.useState(localStorage.getItem("last-clean")||"Not cleaned yet."),
  [w,
  _]=C.useState(!1),
  [L,
  M]=C.useState({
    }
  ),
  E=R=>{
    g(Z=>Z.includes(R)?Z.filter(V=>V!==R):[...Z,
    R])}
  ,
  A=R=>{
    if(R===0||!R)return"0 B";
    const Z=["B",
    "KB",
    "MB",
    "GB",
    "TB"],
    V=Math.floor(Math.log(R)/Math.log(1024));
    return`${(R/Math.pow(1024,V)).toFixed(2)} ${Z[V]}`}
  ;
  async function D(){
    _(!0),
    x([]),
    M({
      }
    );
    let R=!1,
    Z={
      }
    ;
    for(const V of c){
      if(!f.includes(V.id))continue;
      x(q=>[...q,
      V.id]);
      const I=re.loading(`${e("running")} ${V.label}...`);
      try{
        const q=await Ue({
          channel:"cleanup:fetch-script",
          payload:V.id}
        );
        if(!q.success)throw new Error(q.error||e("failedToFetchScript"));
        const F=(await Ue({
          channel:"run-powershell",
          payload:{
            script:q.script,
            name:`cleanup-${V.id}`}
          }
        ))?.output||"0",
        te=parseInt(F.trim(),
        10)||0;
        Z[V.id]=te,
        re.update(I,
        {
          render:`${V.label} ${e("completed")}! ${A(te)} ${e("cleared")}.`,
          type:"success",
          isLoading:!1,
          autoClose:3e3}
        ),
        R=!0}
      catch(q){
        const Q=q?.message||String(q);
        if(Q.includes("AUTH_REQUIRED")){
          const F=Q.split(":")[1]||"Cleanup";
          re.dismiss(I),
          l(F),
          r(!0)}
        else re.update(I,
        {
          render:`${e("failed")}: ${q.message||q}`,
          type:"error",
          isLoading:!1,
          autoClose:4e3}
        );
        Tt.error(`Failed to run ${V.id} cleanup: ${q.message||q}`)}
      }
    if(R){
      const V=new Date().toLocaleString();
      v(V),
      localStorage.setItem("last-clean",
      V),
      M(Z)}
    x([]),
    _(!1)}
  return m.jsxs(wn,
  {
    children:[m.jsxs("div",
    {
      className:"flex flex-col gap-6",
      children:[m.jsxs(pt,
      {
        className:"flex items-center gap-4 p-4",
        children:[m.jsx("div",
        {
          className:"flex items-center justify-center p-3 rounded-xl bg-teal-500/10",
          children:m.jsx(ih,
          {
            iconNode:_y,
            className:"text-teal-500",
            size:28}
          )}
        ),
        m.jsxs("div",
        {
          className:"flex-1",
          children:[m.jsx("h2",
          {
            className:"text-2xl font-bold text-cbnboost-text mb-1",
            children:e("cleanTitle")}
          ),
          m.jsxs("p",
          {
            className:"text-sm text-cbnboost-text-secondary",
            children:[e("lastCleaned"),
            ": ",
            m.jsx("span",
            {
              className:"font-medium",
              children:b==="Not cleaned yet."?e("notCleanedYet"):b}
            )]}
          )]}
        )]}
      ),
      m.jsx(pt,
      {
        className:"flex flex-col divide-y divide-cbnboost-border p-0",
        children:c.map(({
          id:R,
          label:Z,
          description:V}
        ,
        I)=>{
          const q=f.includes(R);
          return m.jsxs("div",
          {
            className:`relative flex items-center justify-between px-6 py-4 ${I===0?"rounded-t-xl":""} ${I===c.length-1?"rounded-b-xl":""} group`,
            children:[m.jsxs("div",
            {
              className:"flex flex-col flex-1 min-w-0",
              children:[m.jsx("span",
              {
                className:"text-base font-semibold text-cbnboost-text truncate",
                children:Z}
              ),
              m.jsxs("span",
              {
                className:"text-xs text-cbnboost-text-secondary mt-0.5 truncate",
                children:[V,
                L[R]?` (${A(L[R])} cleared)`:""]}
              )]}
            ),
            m.jsx("div",
            {
              className:"ml-4 flex items-center",
              children:m.jsx(rm,
              {
                checked:q,
                onChange:()=>E(R),
                disabled:w}
              )}
            ),
            p.includes(R)&&m.jsx("div",
            {
              className:"absolute inset-0 flex items-center justify-center z-10 rounded-xl",
              children:m.jsxs("div",
              {
                className:"flex items-center gap-2 px-4 py-2 rounded-lg bg-cbnboost-border border border-cbnboost-border-secondary",
                children:[m.jsx(oc,
                {
                  className:"animate-spin text-teal-500",
                  size:18}
                ),
                m.jsx("span",
                {
                  className:"text-sm font-medium text-teal-600",
                  children:e("cleaning")}
                )]}
              )}
            )]}
          ,
          R)}
        )}
      ),
      m.jsx("div",
      {
        className:"flex justify-end mt-2",
        children:m.jsx(we,
        {
          onClick:D,
          disabled:w||f.length===0,
          size:"md",
          variant:"primary",
          className:"min-w-[180px] flex items-center justify-center gap-2 text-base font-semibold",
          children:w?m.jsxs(m.Fragment,
          {
            children:[m.jsx(oc,
            {
              className:"animate-spin",
              size:18}
            ),
            m.jsx("span",
            {
              children:e("cleaning")}
            )]}
          ):m.jsxs(m.Fragment,
          {
            children:[m.jsx(ih,
            {
              iconNode:_y,
              size:18}
            ),
            m.jsx("span",
            {
              children:e("cleanSelected")}
            )]}
          )}
        )}
      )]}
    ),
    m.jsx(Iv,
    {
      open:n,
      onClose:()=>r(!1),
      feature:s}
    )]}
  )}
const mE=JSON.parse("[{\"name\":\"Firefox\",\"id\":\"Mozilla.Firefox\",\"category\":\"browsers\",\"info\":{\"en\":\"A fast, private and secure web browser.\",\"es\":\"Un navegador web rápido, privado y seguro.\",\"pt\":\"Um navegador web rápido, privado e seguro.\"},\"link\":\"https://www.mozilla.org/en-US/firefox/new/\"},{\"name\":\"Google Chrome\",\"id\":\"Google.Chrome\",\"category\":\"browsers\",\"info\":{\"en\":\"The most popular web browser.\",\"es\":\"El navegador web más popular.\",\"pt\":\"O navegador web mais popular.\"},\"link\":\"https://www.google.com/chrome/\"},{\"name\":\"Discord\",\"id\":\"Discord.Discord\",\"category\":\"communication\",\"info\":{\"en\":\"Discord is a communication app that lets you chat with your friends.\",\"es\":\"Discord es una app de comunicación que te permite chatear con tus amigos.\",\"pt\":\"Discord é um aplicativo de comunicação que permite conversar com seus amigos.\"},\"link\":\"https://discord.com/\"},{\"name\":\"Spotify (may not work)\",\"id\":\"Spotify.Spotify\",\"warning\":\"This app may not install properly as CBN Boost runs as admin. However uninstalling will continue to work as normal.\",\"category\":\"multimedia\",\"info\":{\"en\":\"Listen to music and podcasts.\",\"es\":\"Escucha música y podcasts.\",\"pt\":\"Ouça música e podcasts.\"},\"link\":\"https://www.spotify.com/\"},{\"name\":\"Steam\",\"id\":\"Valve.Steam\",\"category\":\"games\",\"info\":{\"en\":\"A digital distribution platform for video games.\",\"es\":\"Una plataforma de distribución digital para videojuegos.\",\"pt\":\"Uma plataforma de distribuição digital para videogames.\"},\"link\":\"https://store.steampowered.com/\"},{\"name\":\"Epic Games Launcher\",\"id\":\"EpicGames.EpicGamesLauncher\",\"category\":\"games\",\"info\":{\"en\":\"A Games Store\",\"es\":\"Una tienda de juegos\",\"pt\":\"Uma loja de jogos\"},\"link\":\"https://www.epicgames.com/\"},{\"name\":\"EA App\",\"id\":\"ElectronicArts.EADesktop\",\"category\":\"games\",\"info\":{\"en\":\"A Games Store\",\"es\":\"Una tienda de juegos\",\"pt\":\"Uma loja de jogos\"},\"link\":\"https://www.ea.com/\"},{\"name\":\"BattleNet\",\"id\":\"Blizzard.BattleNet\",\"category\":\"games\",\"info\":{\"en\":\"A Games Store\",\"es\":\"Una tienda de juegos\",\"pt\":\"Uma loja de jogos\"},\"link\":\"https://us.shop.battle.net/\"},{\"name\":\"Visual Studio Code\",\"id\":\"Microsoft.VisualStudioCode\",\"category\":\"development\",\"info\":{\"en\":\"A code editor that runs on your computer.\",\"es\":\"Un editor de código que se ejecuta en tu computadora.\",\"pt\":\"Um editor de código que roda no seu computador.\"},\"link\":\"https://code.visualstudio.com/\"},{\"name\":\"Visual Studio Code Insiders\",\"id\":\"Microsoft.VisualStudioCode.Insiders\",\"category\":\"development\",\"info\":{\"en\":\"A code editor that runs on your computer.\",\"es\":\"Un editor de código que se ejecuta en tu computadora.\",\"pt\":\"Um editor de código que roda no seu computador.\"},\"link\":\"https://code.visualstudio.com/insiders/\"},{\"name\":\"Visual Studio\",\"id\":\"Microsoft.VisualStudio.2022\",\"category\":\"development\",\"info\":{\"en\":\"A code editor that runs on your computer.\",\"es\":\"Un editor de código que se ejecuta en tu computadora.\",\"pt\":\"Um editor de código que roda no seu computador.\"},\"link\":\"https://visualstudio.microsoft.com/\"},{\"name\":\"Notepad++\",\"id\":\"Notepad++.Notepad++\",\"category\":\"development\",\"info\":{\"en\":\"A code editor that runs on your computer.\",\"es\":\"Un editor de código que se ejecuta en tu computadora.\",\"pt\":\"Um editor de código que roda no seu computador.\"},\"link\":\"https://notepad-plus-plus.org/\"},{\"name\":\"Sublime Text\",\"id\":\"Sublime.Text\",\"category\":\"development\",\"info\":{\"en\":\"A code editor that runs on your computer.\",\"es\":\"Un editor de código que se ejecuta en tu computadora.\",\"pt\":\"Um editor de código que roda no seu computador.\"},\"link\":\"https://www.sublimetext.com/\"},{\"name\":\"Brave\",\"id\":\"Brave.Brave\",\"category\":\"browsers\",\"info\":{\"en\":\"A fast, private and secure web browser.\",\"es\":\"Un navegador web rápido, privado y seguro.\",\"pt\":\"Um navegador web rápido, privado e seguro.\"},\"link\":\"https://brave.com/\"},{\"name\":\"Opera\",\"id\":\"Opera.Opera\",\"category\":\"browsers\",\"info\":{\"en\":\"A fast, private and secure web browser.\",\"es\":\"Un navegador web rápido, privado y seguro.\",\"pt\":\"Um navegador web rápido, privado e seguro.\"},\"link\":\"https://www.opera.com/\"},{\"name\":\"Opera GX\",\"id\":\"Opera.OperaGX\",\"category\":\"browsers\",\"info\":{\"en\":\"A fast, private and secure web browser for gamers.\",\"es\":\"Un navegador web rápido, privado y seguro para gamers.\",\"pt\":\"Um navegador web rápido, privado e seguro para gamers.\"},\"link\":\"https://www.opera.com/gx\"},{\"name\":\"Vivaldi\",\"id\":\"Vivaldi.Vivaldi\",\"category\":\"browsers\",\"info\":{\"en\":\"A fast, private and secure web browser.\",\"es\":\"Un navegador web rápido, privado y seguro.\",\"pt\":\"Um navegador web rápido, privado e seguro.\"},\"link\":\"https://vivaldi.com/\"},{\"name\":\"Zoom\",\"id\":\"Zoom.Zoom\",\"category\":\"communication\",\"info\":{\"en\":\"A video conferencing app.\",\"es\":\"Una aplicación de videoconferencia.\",\"pt\":\"Um aplicativo de videoconferência.\"},\"link\":\"https://zoom.us/\"},{\"name\":\"Mircosoft Teams\",\"id\":\"Microsoft.Teams\",\"category\":\"communication\",\"info\":{\"en\":\"A Microsoft video conferencing app.\",\"es\":\"Una aplicación de videoconferencia de Microsoft.\",\"pt\":\"Um aplicativo de videoconferência da Microsoft.\"},\"link\":\"https://www.microsoft.com/en-us/microsoft-teams/group-chat-software\"},{\"name\":\"Telegram Desktop\",\"id\":\"Telegram.TelegramDesktop\",\"category\":\"communication\",\"info\":{\"en\":\"A messaging app.\",\"es\":\"Una aplicación de mensajería.\",\"pt\":\"Um aplicativo de mensagens.\"},\"link\":\"https://telegram.org/\"},{\"name\":\"7-Zip\",\"id\":\"7Zip.7Zip\",\"category\":\"utilities\",\"info\":{\"en\":\"A file archiver.\",\"es\":\"Un archivador de archivos.\",\"pt\":\"Um arquivador de arquivos.\"},\"link\":\"https://www.7-zip.org/\"},{\"name\":\"Git\",\"id\":\"Git.Git\",\"category\":\"development\",\"info\":{\"en\":\"A version control system.\",\"es\":\"Un sistema de control de versiones.\",\"pt\":\"Um sistema de controle de versão.\"},\"link\":\"https://git-scm.com/\"},{\"name\":\"GitHub Desktop\",\"id\":\"GitHub.GitHubDesktop\",\"category\":\"development\",\"info\":{\"en\":\"A Git client for desktop.\",\"es\":\"Un cliente de Git para escritorio.\",\"pt\":\"Um cliente Git para desktop.\"},\"link\":\"https://desktop.github.com/\"},{\"name\":\"Logitech GHUB\",\"id\":\"Logitech.GHUB\",\"category\":\"peripherals\",\"info\":{\"en\":\"App to Manage your logitech peripherals.\",\"es\":\"Aplicación para gestionar tus periféricos logitech.\",\"pt\":\"Aplicativo para gerenciar seus periféricos logitech.\"},\"link\":\"https://www.logitechg.com/en-us/software/ghub\"},{\"name\":\"Python 3.9\",\"id\":\"Python.Python.3.9\",\"category\":\"development\",\"info\":{\"en\":\"Python programming language (v3.9)\",\"es\":\"Lenguaje de programación Python (v3.9)\",\"pt\":\"Linguagem de programação Python (v3.9)\"},\"link\":\"https://www.python.org\"},{\"name\":\"Node.js\",\"id\":\"OpenJS.NodeJS\",\"category\":\"development\",\"info\":{\"en\":\"JavaScript runtime.\",\"es\":\"Entorno de ejecución de JavaScript.\",\"pt\":\"Runtime de JavaScript.\"},\"link\":\"https://nodejs.org/\"},{\"name\":\"Postman\",\"id\":\"Postman.Postman\",\"category\":\"development\",\"info\":{\"en\":\"API testing tool.\",\"es\":\"Herramienta de prueba de APIs.\",\"pt\":\"Ferramenta de teste de APIs.\"},\"link\":\"https://www.postman.com/\"},{\"name\":\"Docker Desktop\",\"id\":\"Docker.DockerDesktop\",\"category\":\"development\",\"info\":{\"en\":\"Container platform.\",\"es\":\"Plataforma de contenedores.\",\"pt\":\"Plataforma de contêineres.\"},\"link\":\"https://www.docker.com/products/docker-desktop\"},{\"name\":\"Slack\",\"id\":\"SlackTechnologies.Slack\",\"category\":\"communication\",\"info\":{\"en\":\"A messaging app for teams.\",\"es\":\"Una aplicación de mensajería para equipos.\",\"pt\":\"Um aplicativo de mensagens para equipes.\"},\"link\":\"https://slack.com/\"},{\"name\":\"RustDesk\",\"id\":\"RustDesk.RustDesk\",\"category\":\"utilities\",\"info\":{\"en\":\"Remote desktop software.\",\"es\":\"Software de escritorio remoto.\",\"pt\":\"Software de acesso remoto.\"},\"link\":\"https://rustdesk.com/\"},{\"name\":\"Everything Search\",\"id\":\"voidtools.Everything\",\"category\":\"utilities\",\"info\":{\"en\":\"A file search tool.\",\"es\":\"Una herramienta de búsqueda de archivos.\",\"pt\":\"Uma ferramenta de busca de arquivos.\"}},{\"name\":\"VLC\",\"id\":\"VideoLAN.VLC\",\"category\":\"multimedia\",\"info\":{\"en\":\"Media player.\",\"es\":\"Reproductor multimedia.\",\"pt\":\"Reprodutor de mídia.\"},\"link\":\"https://vlc.media/\"},{\"name\":\"Audacity\",\"id\":\"Audacity.Audacity\",\"category\":\"multimedia\",\"info\":{\"en\":\"Audio editor.\",\"es\":\"Editor de audio.\",\"pt\":\"Editor de áudio.\"},\"link\":\"https://www.audacityteam.org/\"},{\"name\":\"OBS Studio\",\"id\":\"OBSProject.OBSStudio\",\"category\":\"multimedia\",\"info\":{\"en\":\"Screen recording and streaming.\",\"es\":\"Grabación de pantalla y transmisión.\",\"pt\":\"Gravação de tela e transmissão.\"},\"link\":\"https://obsproject.com/\"},{\"name\":\"MSI Afterburner\",\"id\":\"Guru3D.Afterburner\",\"category\":\"utilities\",\"info\":{\"en\":\"GPU overclocking tool.\",\"es\":\"Herramienta de overclocking de GPU.\",\"pt\":\"Ferramenta de overclocking de GPU.\"},\"link\":\"https://www.msi.com/Landing/afterburner\"},{\"name\":\"Fan Control\",\"id\":\"Rem0o.FanControl\",\"category\":\"utilities\",\"info\":{\"en\":\"Fan speed control software.\",\"es\":\"Software de control de velocidad de ventiladores.\",\"pt\":\"Software de controle de velocidade de ventiladores.\"},\"link\":\"https://getfancontrol.com/\"},{\"name\":\"WinRAR\",\"id\":\"RARLab.WinRAR\",\"category\":\"utilities\",\"info\":{\"en\":\"A file archiver.\",\"es\":\"Un archivador de archivos.\",\"pt\":\"Um arquivador de arquivos.\"},\"link\":\"https://www.win-rar.com/\"},{\"name\":\"Parsec\",\"id\":\"Parsec.Parsec\",\"category\":\"utilities\",\"info\":{\"en\":\"Low latency game streaming.\",\"es\":\"Transmisión de juegos de baja latencia.\",\"pt\":\"Streaming de jogos de baixa latência.\"},\"link\":\"https://parsec.app/\"},{\"name\":\"OpenRGB\",\"id\":\"OpenRGB.OpenRGB\",\"category\":\"utilities\",\"info\":{\"en\":\"RGB lighting control.\",\"es\":\"Control de iluminación RGB.\",\"pt\":\"Controle de iluminação RGB.\"},\"link\":\"https://openrgb.org/\"},{\"name\":\"Rust\",\"id\":\"Rustlang.Rust.MSVC\",\"category\":\"development\",\"info\":{\"en\":\"Programming language.\",\"es\":\"Lenguaje de programación.\",\"pt\":\"Linguagem de programação.\"},\"link\":\"https://www.rust-lang.org/\"},{\"name\":\"Notion\",\"id\":\"Notion.Notion\",\"category\":\"productivity\",\"info\":{\"en\":\"Note-taking and organization app.\",\"es\":\"Aplicación de notas y organización.\",\"pt\":\"Aplicativo de anotações e organização.\"},\"link\":\"https://www.notion.so/\"},{\"name\":\"Dropbox\",\"id\":\"Dropbox.Dropbox\",\"category\":\"productivity\",\"info\":{\"en\":\"Cloud storage service.\",\"es\":\"Servicio de almacenamiento en la nube.\",\"pt\":\"Serviço de armazenamento na nuvem.\"},\"link\":\"https://www.dropbox.com/\"},{\"name\":\"Microsoft Office\",\"id\":\"Microsoft.Office\",\"category\":\"productivity\",\"info\":{\"en\":\"Office suite.\",\"es\":\"Suite de oficina.\",\"pt\":\"Suite de escritório.\"},\"link\":\"https://www.office.com/\"},{\"name\":\"Surfshark VPN\",\"id\":\"Surfshark.Surfshark\",\"category\":\"VPN\",\"info\":{\"en\":\"VPN service.\",\"es\":\"Servicio VPN.\",\"pt\":\"Serviço VPN.\"},\"link\":\"https://surfshark.com/\"},{\"name\":\"Windscribe\",\"id\":\"Windscribe.Windscribe\",\"category\":\"VPN\",\"info\":{\"en\":\"VPN service.\",\"es\":\"Servicio VPN.\",\"pt\":\"Serviço VPN.\"},\"link\":\"https://windscribe.com/\"},{\"name\":\"Proton VPN\",\"id\":\"Proton.ProtonVPN\",\"category\":\"VPN\",\"info\":{\"en\":\"VPN service.\",\"es\":\"Servicio VPN.\",\"pt\":\"Serviço VPN.\"},\"link\":\"https://protonvpn.com/\"},{\"name\":\"Express VPN\",\"id\":\"ExpressVPN.ExpressVPN\",\"category\":\"VPN\",\"info\":{\"en\":\"VPN service.\",\"es\":\"Servicio VPN.\",\"pt\":\"Serviço VPN.\"},\"link\":\"https://www.expressvpn.com/\"},{\"name\":\"Private Internet Access\",\"id\":\"PrivateInternetAccess.PrivateInternetAccess\",\"category\":\"VPN\",\"info\":{\"en\":\"VPN service.\",\"es\":\"Servicio VPN.\",\"pt\":\"Serviço VPN.\"},\"link\":\"https://www.privateinternetaccess.com/\"},{\"name\":\"NordVPN\",\"id\":\"NordSecurity.NordVPN\",\"category\":\"VPN\",\"info\":{\"en\":\"VPN service.\",\"es\":\"Servicio VPN.\",\"pt\":\"Serviço VPN.\"},\"link\":\"https://nordvpn.com/cybersecurity-site/\"},{\"name\":\"IPVanish\",\"id\":\"IPVanish.IPVanish\",\"category\":\"VPN\",\"info\":{\"en\":\"VPN service.\",\"es\":\"Servicio VPN.\",\"pt\":\"Serviço VPN.\"},\"link\":\"https://www.ipvanish.com/\"},{\"name\":\"Mullvad VPN\",\"id\":\"MullvadVPN.MullvadVPN\",\"category\":\"VPN\",\"info\":{\"en\":\"VPN service.\",\"es\":\"Servicio VPN.\",\"pt\":\"Serviço VPN.\"},\"link\":\"https://mullvad.net/\"},{\"name\":\"GPU-Z\",\"id\":\"TechPowerUp.GPU-Z\",\"category\":\"utilities\",\"info\":{\"en\":\"GPU information tool.\",\"es\":\"Herramienta de información de GPU.\",\"pt\":\"Ferramenta de informação de GPU.\"},\"link\":\"https://www.techpowerup.com/gpuz/\"},{\"name\":\"HWMonitor\",\"id\":\"CPUID.HWMonitor\",\"category\":\"utilities\",\"info\":{\"en\":\"Hardware monitoring tool.\",\"es\":\"Herramienta de monitoreo de hardware.\",\"pt\":\"Ferramenta de monitoramento de hardware.\"},\"link\":\"https://www.cpuid.com/softwares/hwmonitor.html\"},{\"name\":\"Neovim\",\"id\":\"Neovim.Neovim\",\"category\":\"development\",\"info\":{\"en\":\"A text editor.\",\"es\":\"Un editor de texto.\",\"pt\":\"Um editor de texto.\"},\"link\":\"https://neovim.io/\"},{\"name\":\"PowerToys\",\"id\":\"Microsoft.PowerToys\",\"category\":\"utilities\",\"info\":{\"en\":\"Windows system utilities.\",\"es\":\"Utilidades del sistema Windows.\",\"pt\":\"Utilitários do sistema Windows.\"},\"link\":\"https://learn.microsoft.com/en-us/windows/powertoys/\"},{\"name\":\"PuTTY\",\"id\":\"PuTTY.PuTTY\",\"category\":\"utilities\",\"info\":{\"en\":\"SSH client.\",\"es\":\"Cliente SSH.\",\"pt\":\"Cliente SSH.\"},\"link\":\"https://www.putty.org/\"},{\"name\":\"Virtual Desktop Streamer\",\"id\":\"VirtualDesktop.Streamer\",\"category\":\"games\",\"info\":{\"en\":\"VR streaming software.\",\"es\":\"Software de transmisión VR.\",\"pt\":\"Software de streaming VR.\"},\"link\":\"https://www.vrdesktop.net/\"},{\"name\":\"Cemu\",\"id\":\"Cemu.Cemu\",\"category\":\"games\",\"info\":{\"en\":\"A Wii U emulator.\",\"es\":\"Un emulador de Wii U.\",\"pt\":\"Um emulador de Wii U.\"},\"link\":\"https://cemu.info/\"},{\"name\":\"Tor Browser\",\"id\":\"TorProject.TorBrowser\",\"category\":\"browsers\",\"info\":{\"en\":\"A browser for anonymous browsing.\",\"es\":\"Un navegador para navegación anónima.\",\"pt\":\"Um navegador para navegação anônima.\"},\"link\":\"https://www.torproject.org/\"},{\"name\":\"Display Driver Uninstaller\",\"id\":\"Wagnardsoft.DisplayDriverUninstaller\",\"category\":\"utilities\",\"info\":{\"en\":\"GPU driver removal tool.\",\"es\":\"Herramienta de eliminación de drivers de GPU.\",\"pt\":\"Ferramenta de remoção de drivers de GPU.\"},\"link\":\"https://www.guru3d.com/download/display-driver-uninstaller-download/\"},{\"name\":\"SignalRgb\",\"id\":\"WhirlwindFX.SignalRgb\",\"category\":\"utilities\",\"info\":{\"en\":\"RGB lighting control.\",\"es\":\"Control de iluminación RGB.\",\"pt\":\"Controle de iluminação RGB.\"},\"link\":\"https://signalrgb.com/\"},{\"name\":\"Flow Launcher\",\"id\":\"Flow-Launcher.Flow-Launcher\",\"category\":\"utilities\",\"info\":{\"en\":\"Application launcher.\",\"es\":\"Lanzador de aplicaciones.\",\"pt\":\"Lançador de aplicativos.\"},\"link\":\"https://www.flowlauncher.com/\"},{\"name\":\"AnyDesk\",\"id\":\"AnyDesk.AnyDesk\",\"category\":\"utilities\",\"info\":{\"en\":\"Remote desktop software.\",\"es\":\"Software de escritorio remoto.\",\"pt\":\"Software de acesso remoto.\"},\"link\":\"https://anydesk.com/en\"},{\"name\":\"WizTree\",\"id\":\"AntibodySoftware.WizTree\",\"category\":\"utilities\",\"info\":{\"en\":\"Disk space analyzer.\",\"es\":\"Analizador de espacio en disco.\",\"pt\":\"Analisador de espaço em disco.\"},\"link\":\"https://diskanalyzer.com/\"},{\"name\":\"qBittorrent\",\"id\":\"qBittorrent.qBittorrent\",\"category\":\"utilities\",\"info\":{\"en\":\"Torrent client.\",\"es\":\"Cliente de torrent.\",\"pt\":\"Cliente de torrent.\"},\"link\":\"https://www.qbittorrent.org/\"},{\"name\":\"Bitwarden\",\"id\":\"Bitwarden.Bitwarden\",\"category\":\"utilities\",\"info\":{\"en\":\"Password manager.\",\"es\":\"Gestor de contraseñas.\",\"pt\":\"Gerenciador de senhas.\"},\"link\":\"https://bitwarden.com/\"},{\"name\":\"Wireshark\",\"id\":\"WiresharkFoundation.Wireshark\",\"category\":\"utilities\",\"info\":{\"en\":\"Network protocol analyzer.\",\"es\":\"Analizador de protocolos de red.\",\"pt\":\"Analisador de protocolo de rede.\"},\"link\":\"https://www.wireshark.org/\"},{\"name\":\"Sunshine\",\"id\":\"LizardByte.Sunshine\",\"category\":\"games\",\"info\":{\"en\":\"Game streaming host.\",\"es\":\"Host de transmisión de juegos.\",\"pt\":\"Host de streaming de jogos.\"},\"link\":\"https://app.lizardbyte.dev/Sunshine/\"},{\"name\":\"Moonlight\",\"id\":\"MoonlightGameStreamingProject.Moonlight\",\"category\":\"games\",\"info\":{\"en\":\"Game streaming client.\",\"es\":\"Cliente de transmisión de juegos.\",\"pt\":\"Cliente de streaming de jogos.\"},\"link\":\"https://moonlight-stream.org/\"},{\"name\":\"Playnite\",\"id\":\"Playnite.Playnite\",\"category\":\"games\",\"info\":{\"en\":\"A game library manager.\",\"es\":\"Un gestor de biblioteca de juegos.\",\"pt\":\"Um gerenciador de biblioteca de jogos.\"},\"link\":\"https://playnite.link/\"},{\"name\":\"Bloxstrap\",\"id\":\"pizzaboxer.Bloxstrap\",\"category\":\"games\",\"info\":{\"en\":\"A Roblox launcher.\",\"es\":\"Un lanzador de Roblox.\",\"pt\":\"Um launcher de Roblox.\"},\"link\":\"https://bloxstraplabs.com/\"},{\"name\":\"Go\",\"id\":\"GoLang.Go\",\"category\":\"development\",\"info\":{\"en\":\"Programming language.\",\"es\":\"Lenguaje de programación.\",\"pt\":\"Linguagem de programação.\"},\"link\":\"https://go.dev/\"},{\"name\":\"Bulk Crap Uninstaller\",\"id\":\"Klocman.BulkCrapUninstaller\",\"category\":\"utilities\",\"info\":{\"en\":\"Bulk program uninstaller.\",\"es\":\"Desinstalador masivo de programas.\",\"pt\":\"Desinstalador em massa de programas.\"},\"link\":\"https://www.bcuninstaller.com/\"},{\"name\":\"Windhawk\",\"id\":\"RamenSoftware.Windhawk\",\"category\":\"utilities\",\"info\":{\"en\":\"Windows customization tool.\",\"es\":\"Herramienta de personalización de Windows.\",\"pt\":\"Ferramenta de personalização do Windows.\"},\"link\":\"https://windhawk.net/\"},{\"name\":\"Bulk Rename Utility\",\"id\":\"TGRMNSoftware.BulkRenameUtility\",\"category\":\"utilities\",\"info\":{\"en\":\"File renaming tool.\",\"es\":\"Herramienta de renombrado de archivos.\",\"pt\":\"Ferramenta de renomeação de arquivos.\"},\"link\":\"https://www.bulkrenameutility.co.uk/\"},{\"name\":\"GIMP\",\"id\":\"GIMP.GIMP.2\",\"category\":\"utilities\",\"info\":{\"en\":\"Image editor.\",\"es\":\"Editor de imágenes.\",\"pt\":\"Editor de imagens.\"},\"link\":\"https://www.gimp.org/\"},{\"name\":\"Guilded\",\"id\":\"Guilded.Guilded\",\"category\":\"communication\",\"info\":{\"en\":\"A communication platform for communities.\",\"es\":\"Una plataforma de comunicación para comunidades.\",\"pt\":\"Uma plataforma de comunicação para comunidades.\"},\"link\":\"https://www.guilded.gg/\"},{\"name\":\"Zen Browser\",\"id\":\"Zen-Team.Zen-Browser\",\"category\":\"browsers\",\"info\":{\"en\":\"A fast and private web browser.\",\"es\":\"Un navegador web rápido y privado.\",\"pt\":\"Um navegador web rápido e privado.\"},\"link\":\"https://zen-browser.app/\"},{\"name\":\"Lively Wallpaper\",\"id\":\"rocksdanister.LivelyWallpaper\",\"category\":\"utilities\",\"info\":{\"en\":\"Animated wallpaper app.\",\"es\":\"Aplicación de fondos de pantalla animados.\",\"pt\":\"Aplicativo de papel de parede animado.\"},\"link\":\"https://rocksdanister.github.io/lively/\"},{\"name\":\"File-Converter\",\"id\":\"AdrienAllard.FileConverter\",\"category\":\"utilities\",\"info\":{\"en\":\"File format converter.\",\"es\":\"Convertidor de formato de archivos.\",\"pt\":\"Conversor de formato de arquivos.\"},\"link\":\"https://file-converter.io/\"},{\"name\":\"JDownloader 2\",\"id\":\"AppWork.JDownloader\",\"category\":\"utilities\",\"info\":{\"en\":\"Download manager.\",\"es\":\"Gestor de descargas.\",\"pt\":\"Gerenciador de downloads.\"},\"link\":\"https://jdownloader.org/jdownloader2\"},{\"name\":\"Files\",\"id\":\"FilesCommunity.Files\",\"category\":\"utilities\",\"info\":{\"en\":\"Modern file manager.\",\"es\":\"Gestor de archivos moderno.\",\"pt\":\"Gerenciador de arquivos moderno.\"},\"link\":\"https://files.community/\"},{\"name\":\"FxSound\",\"id\":\"FxSound.FxSound\",\"category\":\"multimedia\",\"info\":{\"en\":\"Audio enhancement software.\",\"es\":\"Software de mejora de audio.\",\"pt\":\"Software de aprimoramento de áudio.\"},\"link\":\"https://www.fxsound.com/\"},{\"name\":\"Blender\",\"id\":\"BlenderFoundation.Blender\",\"category\":\"multimedia\",\"info\":{\"en\":\"A 3D creation suite.\",\"es\":\"Un suite de creación 3D.\",\"pt\":\"Um suite de criação 3D.\"},\"link\":\"https://www.blender.org/\"},{\"name\":\"GeForce NOW\",\"id\":\"NVIDIA.GeForceNOW\",\"category\":\"games\",\"info\":{\"en\":\"Cloud gaming service.\",\"es\":\"Servicio de juegos en la nube.\",\"pt\":\"Serviço de jogos na nuvem.\"},\"link\":\"https://www.nvidia.com/en-us/geforce-now/\"},{\"name\":\"Twinkle Tray\",\"id\":\"xanderfrangos.twinkletray\",\"category\":\"utilities\",\"info\":{\"en\":\"Brightness control tool.\",\"es\":\"Herramienta de control de brillo.\",\"pt\":\"Ferramenta de controle de brilho.\"},\"link\":\"https://twinkletray.com/\"},{\"name\":\"SuperF4\",\"id\":\"StefanSundin.Superf4\",\"category\":\"utilities\",\"info\":{\"en\":\"Force close applications.\",\"es\":\"Forzar cierre de aplicaciones.\",\"pt\":\"Forçar fechamento de aplicativos.\"},\"link\":\"https://stefansundin.github.io/superf4/\"},{\"name\":\"Revo Uninstaller\",\"id\":\"RevoUninstaller.RevoUninstaller\",\"category\":\"utilities\",\"info\":{\"en\":\"Advanced uninstaller.\",\"es\":\"Desinstalador avanzado.\",\"pt\":\"Desinstalador avançado.\"},\"link\":\"https://www.revouninstaller.com/products/revo-uninstaller-free/\"},{\"name\":\"Unity Hub\",\"id\":\"Unity.UnityHub\",\"category\":\"development\",\"info\":{\"en\":\"Game engine.\",\"es\":\"Motor de juegos.\",\"pt\":\"Motor de jogos.\"},\"link\":\"https://unity.com/products/unity-hub\"},{\"name\":\"Oh My Posh\",\"id\":\"JanDeDobbeleer.OhMyPosh\",\"category\":\"development\",\"info\":{\"en\":\"Terminal prompt customization.\",\"es\":\"Personalización de prompt de terminal.\",\"pt\":\"Personalização de prompt de terminal.\"},\"link\":\"https://ohmyposh.dev/\"},{\"name\":\"Vesktop\",\"id\":\"Vencord.Vesktop\",\"category\":\"communication\",\"info\":{\"en\":\"An alternative Discord client.\",\"es\":\"Un cliente alternativo de Discord.\",\"pt\":\"Um cliente alternativo do Discord.\"},\"link\":\"https://vencord.dev/\"},{\"name\":\"Prism Launcher\",\"id\":\"PrismLauncher.PrismLauncher\",\"category\":\"games\",\"info\":{\"en\":\"A Minecraft launcher.\",\"es\":\"Un lanzador de Minecraft.\",\"pt\":\"Um launcher de Minecraft.\"},\"link\":\"https://prismlauncher.org/\"},{\"name\":\"Free Download Manager\",\"id\":\"SoftDeluxe.FreeDownloadManager\",\"category\":\"utilities\",\"info\":{\"en\":\"Download manager.\",\"es\":\"Gestor de descargas.\",\"pt\":\"Gerenciador de downloads.\"},\"link\":\"https://www.freedownloadmanager.org/\"},{\"name\":\"Oracle VirtualBox\",\"id\":\"Oracle.VirtualBox\",\"category\":\"utilities\",\"info\":{\"en\":\"Virtualization software.\",\"es\":\"Software de virtualización.\",\"pt\":\"Software de virtualização.\"},\"link\":\"https://www.virtualbox.org/\"},{\"name\":\"TeamViewer\",\"id\":\"TeamViewer.TeamViewer\",\"category\":\"utilities\",\"info\":{\"en\":\"Remote desktop software.\",\"es\":\"Software de escritorio remoto.\",\"pt\":\"Software de acesso remoto.\"},\"link\":\"https://www.teamviewer.com/en-ca/\"},{\"name\":\"Ungoogled Chromium\",\"id\":\"eloston.ungoogled-chromium\",\"category\":\"browsers\",\"info\":{\"en\":\"A web browser without Google integration.\",\"es\":\"Un navegador web sin integración de Google.\",\"pt\":\"Um navegador web sem integração do Google.\"},\"link\":\"https://github.com/ungoogled-software/ungoogled-chromium\"},{\"name\":\"LibreWolf\",\"id\":\"LibreWolf.LibreWolf\",\"category\":\"browsers\",\"info\":{\"en\":\"A privacy-focused web browser.\",\"es\":\"Un navegador web enfocado en la privacidad.\",\"pt\":\"Um navegador web focado em privacidade.\"},\"link\":\"https://librewolf.net/\"},{\"name\":\"ShareX\",\"id\":\"ShareX.ShareX\",\"category\":\"multimedia\",\"info\":{\"en\":\"Screenshot and screen recording tool.\",\"es\":\"Herramienta de captura de pantalla y grabación.\",\"pt\":\"Ferramenta de captura de tela e gravação.\"},\"link\":\"https://github.com/ShareX/ShareX\"},{\"name\":\"Fastfetch\",\"id\":\"Fastfetch-cli.Fastfetch\",\"category\":\"utilities\",\"info\":{\"en\":\"System information tool.\",\"es\":\"Herramienta de información del sistema.\",\"pt\":\"Ferramenta de informação do sistema.\"},\"link\":\"https://github.com/fastfetch-cli/fastfetch\"},{\"name\":\"ZeroTier One\",\"id\":\"ZeroTier.ZeroTierOne\",\"category\":\"utilities\",\"info\":{\"en\":\"Network virtualization.\",\"es\":\"Virtualización de red.\",\"pt\":\"Virtualização de rede.\"},\"link\":\"https://www.zerotier.com/\"},{\"name\":\"WinMerge\",\"id\":\"WinMerge.WinMerge\",\"category\":\"utilities\",\"info\":{\"en\":\"File comparison tool.\",\"es\":\"Herramienta de comparación de archivos.\",\"pt\":\"Ferramenta de comparação de arquivos.\"},\"link\":\"https://winmerge.org/\"},{\"name\":\"AIMP\",\"id\":\"AIMP.AIMP\",\"category\":\"multimedia\",\"info\":{\"en\":\"Audio player.\",\"es\":\"Reproductor de audio.\",\"pt\":\"Reprodutor de áudio.\"},\"link\":\"https://www.aimp.ru/\"},{\"name\":\"CopyQ\",\"id\":\"hluk.copyq\",\"category\":\"utilities\",\"info\":{\"en\":\"Clipboard manager.\",\"es\":\"Gestor de portapapeles.\",\"pt\":\"Gerenciador de área de transferência.\"},\"link\":\"https://hluk.github.io/CopyQ/\"},{\"name\":\"Krita\",\"id\":\"KDE.Krita\",\"category\":\"multimedia\",\"info\":{\"en\":\"Digital painting application.\",\"es\":\"Aplicación de pintura digital.\",\"pt\":\"Aplicativo de pintura digital.\"},\"link\":\"https://krita.org/en/\"},{\"name\":\"Paint.NET\",\"id\":\"dotPDN.PaintDotNet\",\"category\":\"multimedia\",\"info\":{\"en\":\"Image editor.\",\"es\":\"Editor de imágenes.\",\"pt\":\"Editor de imagens.\"},\"link\":\"https://www.getpaint.net/\"},{\"name\":\"IrfanView\",\"id\":\"IrfanSkiljan.IrfanView\",\"category\":\"multimedia\",\"info\":{\"en\":\"Image viewer.\",\"es\":\"Visor de imágenes.\",\"pt\":\"Visualizador de imagens.\"},\"link\":\"https://www.irfanview.com/\"},{\"name\":\"AB Download Manager\",\"id\":\"ABDownloadManager.ABDownloadManager\",\"category\":\"utilities\",\"info\":{\"en\":\"Download manager.\",\"es\":\"Gestor de descargas.\",\"pt\":\"Gerenciador de downloads.\"},\"link\":\"https://abdownloadmanager.com/\"},{\"name\":\"Total Commander\",\"id\":\"Ghisler.TotalCommander\",\"category\":\"utilities\",\"info\":{\"en\":\"File manager.\",\"es\":\"Gestor de archivos.\",\"pt\":\"Gerenciador de arquivos.\"},\"link\":\"https://www.ghisler.com/\"},{\"name\":\"Python 3.10\",\"id\":\"Python.Python.3.10\",\"category\":\"development\",\"info\":{\"en\":\"Python programming language (v3.10)\",\"es\":\"Lenguaje de programación Python (v3.10)\",\"pt\":\"Linguagem de programação Python (v3.10)\"},\"link\":\"https://www.python.org\"},{\"name\":\"Python 3.11\",\"id\":\"Python.Python.3.11\",\"category\":\"development\",\"info\":{\"en\":\"Python programming language (v3.11)\",\"es\":\"Lenguaje de programación Python (v3.11)\",\"pt\":\"Linguagem de programação Python (v3.11)\"},\"link\":\"https://www.python.org\"},{\"name\":\"Python 3.12\",\"id\":\"Python.Python.3.12\",\"category\":\"development\",\"info\":{\"en\":\"Python programming language (v3.12)\",\"es\":\"Lenguaje de programación Python (v3.12)\",\"pt\":\"Linguagem de programação Python (v3.12)\"},\"link\":\"https://www.python.org\"},{\"name\":\"Python 3.13\",\"id\":\"Python.Python.3.13\",\"category\":\"development\",\"info\":{\"en\":\"Python programming language (v3.13)\",\"es\":\"Lenguaje de programación Python (v3.13)\",\"pt\":\"Linguagem de programação Python (v3.13)\"},\"link\":\"https://www.python.org\"}]"),
pE={
  apps:mE}
;
function Cy({
  label:e,
  checked:n,
  onChange:r,
  onClick:s}
){
  const l=C.useId();
  return m.jsxs("label",
  {
    htmlFor:l,
    onClick:s,
    className:"flex items-center gap-2 cursor-pointer select-none text-slate-200",
    children:[m.jsx("input",
    {
      id:l,
      type:"checkbox",
      checked:n,
      onChange:r,
      className:"peer hidden",
      "aria-checked":n}
    ),
    m.jsx("div",
    {
      className:"h-5 w-5 rounded-md border-2 border-cbnboost-border flex items-center justify-center transition-colors peer-checked:bg-cbnboost-primary peer-checked:border-cbnboost-border",
      children:n&&m.jsx(KC,
      {
        className:"h-3.5 w-3.5 text-white"}
      )}
    ),
    m.jsx("span",
    {
      className:"text-sm",
      children:e}
    )]}
  )}
function gE(){
  const{
    t:e,
    language:n}
  =An(),
  [r,
  s]=C.useState(""),
  [l,
  c]=C.useState([]),
  [f,
  g]=C.useState(""),
  [p,
  x]=C.useState(""),
  [b,
  v]=C.useState(0),
  [w,
  _]=C.useState([]),
  [L,
  M]=C.useState(0),
  [E,
  A]=C.useState(!1),
  [D,
  R]=C.useState([]),
  [Z,
  V]=C.useState(D),
  [I,
  q]=C.useState([]),
  Q=Y=>Y?.link||null,
  F=Ni(),
  te=I.filter(Y=>Y.name.toLowerCase().includes(r.toLowerCase())),
  ie=()=>{
    const Y=new Blob([JSON.stringify(l,
    null,
    2)],
    {
      type:"application/json"}
    ),
    $=URL.createObjectURL(Y),
    j=document.createElement("a");
    j.href=$,
    j.download="cbnboost-apps.json",
    j.click(),
    URL.revokeObjectURL($)}
  ,
  de=Y=>{
    const $=Y.target.files[0];
    if(!$)return;
    const j=new FileReader;
    j.onload=ee=>{
      try{
        const z=JSON.parse(ee.target.result);
        Array.isArray(z)&&(R(z),
        V(z),
        A(!0))}
      catch{
        }
      finally{
        Y.target.value=""}
      }
    ,
    j.readAsText($)}
  ,
  Be=C.useMemo(()=>te.reduce((Y,
  $)=>(Y[$.category]||(Y[$.category]=[]),
  Y[$.category].push($),
  Y),
  {
    }
  ),
  [te]),
  De=()=>{
    return Ue({
      channel:"handle-apps",
      payload:{
        action:"check-installed",
        apps:I.map(Y=>Y.id)}
      }
    ).catch(error=>re.error(error.message||String(error)))}
  ,
  Ge=Y=>{
    c($=>$.includes(Y)?$.filter(j=>j!==Y):[...$,
    Y])}
  ;
  C.useEffect(()=>{
    (async()=>{
      try{
        q(pE.apps||[])}
      catch{
        q([])}
      }
    )();
    const $=requestIdleCallback(()=>{
      try{
        const ee=window.localStorage.getItem("installedApps");
        ee&&_(JSON.parse(ee))}
      catch{
        }
      }
    );
    const j={
      "install-progress":(ee,
      z)=>{
        x(z),
        M(U=>U+1)}
      ,
      "install-complete":()=>{
        g(""),
        x(""),
        M(0),
        v(0),
        re.success(e("operationCompleted")),
        De()}
      ,
      "install-error":(ee,
      z)=>{
        g(!1),
        x(""),
        re.error(typeof z==="string"?z:z?.error||"Falha na operação")}
      ,
      "installed-apps-checked":(ee,
      {
        success:z,
        installed:U,
        error:J}
      )=>{
        if(z){
          _(U);
          try{
            window.localStorage.setItem("installedApps",
            JSON.stringify(U))}
          catch{
            }
          }else re.error(J||"Falha ao verificar aplicativos instalados");
        }
      }
    ;
    return Object.entries(j).forEach(([ee,
    z])=>{
      window.electron.ipcRenderer.on(ee,
      z)}
    ),
    ()=>{
      cancelIdleCallback($),
      Object.entries(j).forEach(([ee,callback])=>{
        window.electron.ipcRenderer.removeListener(ee,callback)}
      )}
    }
  ,
  []);
  C.useEffect(()=>{if(I.length)De()},[I]);
  const k=async(Y,
  $=l)=>{
    const j=e(Y==="install"?"installing":"uninstalling");
    g(Y);
    try{
      if($.length===0){g("");return;}
      v($.flat().length); M(0);
      await Ue({
        channel:"handle-apps",
        payload:{
          action:Y,
          apps:$}
        }
      )}
    catch(ee){
      g(!1),
      x(""),
      re.error(ee.message||"Falha na operação"),
      Tt.error(`Error ${j.toLowerCase()} apps:`,
      ee)}
    }
  ;
  return m.jsxs(m.Fragment,
  {
    children:[m.jsx(Bn,
    {
      open:E,
      onClose:()=>A(!1),
      children:m.jsxs("div",
      {
        className:"bg-cbnboost-card border border-cbnboost-border rounded-2xl p-6 shadow-xl max-w-lg w-full mx-4",
        children:[m.jsxs("h3",
        {
          className:"text-xl font-semibold text-cbnboost-text mb-3",
          children:[e("importedAppsTitle"),
          " (",
          D.length,
          ")"]}
        ),
        m.jsx("div",
        {
          className:"text-cbnboost-text-secondary text-sm leading-6 whitespace-pre-wrap max-h-64 overflow-y-auto custom-scrollbar mb-6",
          children:D.length>0?m.jsx("ul",
          {
            className:"space-y-2 max-h-60 overflow-y-auto custom-scrollbar",
            children:D.map(Y=>{
              const $=I.find(j=>j.id===Y);
              return m.jsxs("li",
              {
                className:"flex items-center gap-2 text-cbnboost-text",
                children:[m.jsx(Cy,
                {
                  checked:Z.includes(Y),
                  onChange:j=>{
                    const ee=j.target.checked;
                    V(z=>ee?z.includes(Y)?z:[...z,
                    Y]:z.filter(U=>U!==Y))}
                  }
                ),
                $?$.name:`${e("unknownApp")} (${Y})`]}
              ,
              Y)}
            )}
          ):m.jsx("p",
          {
            className:"text-cbnboost-text-secondary italic",
            children:e("selectAppsToInstall")}
          )}
        ),
        m.jsxs("div",
        {
          className:"flex justify-end gap-3",
          children:[m.jsx(we,
          {
            variant:"secondary",
            onClick:()=>A(!1),
            children:e("cancel")}
          ),
          m.jsx(we,
          {
            disabled:Z.length===0,
            onClick:()=>{
              c(Z),
              A(!1),
              k("install",
              Z)}
            ,
            children:e("installSelected")}
          )]}
        )]}
      )}
    ),
    m.jsx(Bn,
    {
      open:!!f,
      onClose:()=>{
        }
      ,
      children:m.jsx("div",
      {
        className:"bg-cbnboost-card border border-cbnboost-border rounded-2xl p-6 shadow-xl",
        children:m.jsxs("div",
        {
          className:"flex items-center gap-4",
          children:[m.jsx("div",
          {
            className:"relative",
            children:m.jsx("div",
            {
              className:"w-10 h-10 border-4 border-cbnboost-primary/30 rounded-full animate-spin border-t-cbnboost-primary border-cbnboost-accent"}
            )}
          ),
          m.jsxs("div",
          {
            children:[m.jsxs("h3",
            {
              className:"text-lg font-medium text-cbnboost-text",
              children:[e(f==="install"?"installing":"uninstalling"),
              " ",
              p||e("apps"),
              m.jsx("p",
              {
                className:"text-sm text-cbnboost-text-secondary  mt-1 mb-1",
                children:b>0&&` (${L} ${e("of")} ${b})`}
              )]}
            ),
            m.jsx("p",
            {
              className:"text-sm text-cbnboost-text-secondary",
              children:e("thisMayTakeMoments")}
            )]}
          )]}
        )}
      )}
    ),
    m.jsx(wn,
    {
      children:m.jsxs("div",
      {
        className:"max-w-[1800px] mx-auto space-y-6",
        children:[m.jsx("div",
        {
          className:"flex flex-col gap-6",
          children:m.jsxs("div",
          {
            className:"flex items-start justify-between",
            children:[m.jsxs("div",
            {
              children:[m.jsx("h1",
              {
                className:"text-3xl font-bold text-cbnboost-text mb-2",
                children:e("appManager")}
              ),
              m.jsxs("p",
              {
                className:"text-cbnboost-text-secondary",
                children:[e("browseAndManage"),
                " ",
                I.length,
                " ",
                e("applications")]}
              )]}
            ),
            m.jsxs("div",
            {
              className:"flex gap-2",
              children:[m.jsx("div",
              {
                className:"px-4 py-2 rounded-lg bg-cbnboost-accent border border-cbnboost-border",
                children:m.jsxs("div",
                {
                  className:"flex items-center gap-2",
                  children:[m.jsx("div",
                  {
                    className:"w-2 h-2 bg-cbnboost-primary rounded-full"}
                  ),
                  m.jsxs("span",
                  {
                    className:"text-sm font-medium text-cbnboost-text",
                    children:[w.length,
                    " ",
                    e("installedApps")]}
                  )]}
                )}
              ),
              l.length>0&&m.jsx("div",
              {
                className:"px-4 py-2 rounded-lg bg-cbnboost-primary/10 border border-cbnboost-primary/30 animate-in fade-in duration-200",
                children:m.jsxs("div",
                {
                  className:"flex items-center gap-2",
                  children:[m.jsx("div",
                  {
                    className:"w-2 h-2 bg-cbnboost-primary rounded-full animate-pulse"}
                  ),
                  m.jsxs("span",
                  {
                    className:"text-sm font-medium text-cbnboost-primary",
                    children:[l.length,
                    " ",
                    e("selected")]}
                  )]}
                )}
              )]}
            )]}
          )}
        ),
        m.jsxs("div",
        {
          className:"relative group",
          children:[m.jsx(lc,
          {
            className:"absolute left-4 top-1/2 -translate-y-1/2 text-cbnboost-text-secondary w-5 h-5 transition-colors group-focus-within:text-cbnboost-primary"}
          ),
          m.jsx("input",
          {
            type:"text",
            placeholder:`${e("search")} ${I.length} ${e("apps")}...`,
            value:r,
            onChange:Y=>s(Y.target.value),
            className:"w-full pl-12 pr-4 py-4 bg-cbnboost-card border border-cbnboost-border rounded-xl text-cbnboost-text placeholder:text-cbnboost-text-secondary focus:outline-none focus:border-cbnboost-primary focus:shadow-lg focus:shadow-cbnboost-primary/5 transition-all"}
          ),
          r&&m.jsx("button",
          {
            onClick:()=>s(""),
            className:"absolute right-4 top-1/2 -translate-y-1/2 text-cbnboost-text-secondary hover:text-cbnboost-text transition-colors",
            children:m.jsx("svg",
            {
              className:"w-5 h-5",
              fill:"none",
              stroke:"currentColor",
              viewBox:"0 0 24 24",
              children:m.jsx("path",
              {
                strokeLinecap:"round",
                strokeLinejoin:"round",
                strokeWidth:2,
                d:"M6 18L18 6M6 6l12 12"}
              )}
            )}
          )]}
        ),
        m.jsxs("div",
        {
          className:"flex flex-wrap items-center gap-2",
          children:[m.jsxs(we,
          {
            className:"flex items-center gap-2 px-4 py-2.5 bg-green-500 hover:bg-green-600 transition-all hover:scale-105 active:scale-95",
            disabled:l.length===0||f,
            onClick:()=>k("install"),
            children:[m.jsx(ny,
            {
              className:"w-4 h-4"}
            ),
            m.jsx("span",
            {
              children:e("install")}
            ),
            l.length>0&&m.jsx("span",
            {
              className:"ml-1 px-2 py-0.5 bg-white/20 rounded-full text-xs font-bold",
              children:l.length}
            )]}
          ),
          m.jsxs(we,
          {
            className:"flex items-center gap-2 px-4 py-2.5 transition-all hover:scale-105 active:scale-95",
            variant:"danger",
            disabled:l.length===0||f,
            onClick:()=>k("uninstall"),
            children:[m.jsx(uv,
            {
              className:"w-4 h-4"}
            ),
            m.jsx("span",
            {
              children:e("uninstall")}
            ),
            l.length>0&&m.jsx("span",
            {
              className:"ml-1 px-2 py-0.5 bg-white/20 rounded-full text-xs font-bold",
              children:l.length}
            )]}
          ),
          m.jsx("div",
          {
            className:"h-8 w-px bg-cbnboost-border mx-1"}
          ),
          m.jsxs(we,
          {
            className:"flex items-center gap-2 px-4 py-2.5 transition-all hover:scale-105 active:scale-95",
            variant:"secondary",
            onClick:ie,
            disabled:l.length===0,
            children:[m.jsx(ny,
            {
              className:"w-4 h-4"}
            ),
            e("exportApps")]}
          ),
          m.jsxs("label",
          {
            className:"flex items-center gap-2 px-4 py-2.5 bg-cbnboost-card border border-cbnboost-border rounded-lg font-medium text-sm text-cbnboost-text cursor-pointer hover:bg-cbnboost-accent transition-all hover:scale-105 active:scale-95",
            children:[m.jsx(J3,
            {
              className:"w-4 h-4"}
            ),
            e("importApps"),
            m.jsx("input",
            {
              type:"file",
              accept:"application/json",
              className:"hidden",
              onChange:de}
            )]}
          ),
          l.length>0&&m.jsx(we,
          {
            className:"flex items-center gap-2 px-4 py-2.5 ml-auto transition-all hover:scale-105 active:scale-95",
            variant:"ghost",
            onClick:()=>c([]),
            children:e("clearSelection")}
          )]}
        ),
        m.jsx("div",
        {
          className:"p-4 bg-cbnboost-card border border-cbnboost-border rounded-xl",
          children:m.jsxs("p",
          {
            className:"text-sm text-cbnboost-text",
            children:["💡 ",
            e("lookingToDebloat"),
            " ",
            m.jsx("button",
            {
              onClick:()=>F("/tweaks"),
              className:"text-cbnboost-primary hover:underline font-semibold",
              children:e("tweaksSection")}
            )]}
          )}
        ),
        m.jsx("div",
        {
          className:"space-y-8",
          children:m.jsx(C.Suspense,
          {
            fallback:m.jsxs("div",
            {
              className:"flex flex-col items-center justify-center py-20 gap-4",
              children:[m.jsx("div",
              {
                className:"w-12 h-12 border-4 border-cbnboost-border border-t-cbnboost-primary rounded-full animate-spin"}
              ),
              m.jsx("p",
              {
                className:"text-cbnboost-text-secondary",
                children:e("loadingApps")}
              )]}
            ),
            children:Object.entries(Be).map(([Y,
            $])=>m.jsxs("div",
            {
              className:"space-y-4",
              children:[m.jsxs("div",
              {
                className:"flex items-center justify-between pb-3 border-b border-cbnboost-border",
                children:[m.jsx("h2",
                {
                  className:"text-2xl font-bold text-cbnboost-text capitalize",
                  children:e(Y)||Y}
                ),
                m.jsx("div",
                {
                  className:"px-3 py-1.5 bg-cbnboost-accent rounded-lg",
                  children:m.jsx("span",
                  {
                    className:"text-sm font-medium text-cbnboost-text",
                    children:$.length}
                  )}
                )]}
              ),
              m.jsx("div",
              {
                className:"grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4",
                children:$.map(j=>{
                  const ee=w.includes(j.id),
                  z=l.includes(j.id);
                  return m.jsx(pt,
                  {
                    onClick:()=>Ge(j.id),
                    className:`group p-5 cursor-pointer transition-all duration-200 hover:scale-[1.02] hover:shadow-xl ${z?"bg-cbnboost-primary/10 border-cbnboost-primary shadow-lg shadow-cbnboost-primary/5":"border-cbnboost-border hover:border-cbnboost-primary/40"}`,
                    children:m.jsxs("div",
                    {
                      className:"flex items-start gap-4",
                      children:[m.jsx("div",
                      {
                        onClick:U=>U.stopPropagation(),
                        className:"pt-0.5",
                        children:m.jsx(Cy,
                        {
                          checked:z,
                          onChange:()=>Ge(j.id)}
                        )}
                      ),
                      m.jsx("div",
                      {
                        className:"flex-1 min-w-0",
                        children:m.jsxs("div",
                        {
                          className:"flex items-start gap-3",
                          children:[m.jsx("div",
                          {
                            className:"w-14 h-14 rounded-xl overflow-hidden bg-cbnboost-accent flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110",
                            children:j.icon&&!/^https?:/i.test(j.icon)?m.jsx("img",
                            {
                              src:j.icon,
                              alt:j.name,
                              className:"w-11 h-11 object-contain"}
                            ):m.jsx("div",
                            {
                              className:"w-11 h-11 bg-cbnboost-primary/20 rounded-lg flex items-center justify-center",
                              children:m.jsx("span",
                              {
                                className:"text-cbnboost-primary font-bold text-xl",
                                children:j.name.charAt(0)}
                              )}
                            )}
                          ),
                          m.jsxs("div",
                          {
                            className:"flex-1 min-w-0",
                            children:[m.jsxs("div",
                            {
                              className:"flex items-start justify-between gap-2 mb-1",
                              children:[m.jsx("h3",
                              {
                                className:"text-base font-bold text-cbnboost-text truncate group-hover:text-cbnboost-primary transition-colors",
                                children:j.name}
                              ),
                              m.jsxs("div",
                              {
                                className:"flex items-center gap-2 flex-shrink-0",
                                children:[m.jsx("button",
                                {
                                  disabled:!j.link,
                                  onClick:U=>{
                                    U.stopPropagation();
                                    try{
                                      const J=Q(j);
                                      window.electron.shell.openExternal(J).catch(error=>re.error(error.message||String(error)))}
                                    catch{
                                      }
                                    }
                                  ,
                                  className:"px-2 py-1 text-xs font-medium rounded-md border border-cbnboost-border bg-cbnboost-card text-cbnboost-text hover:bg-cbnboost-accent transition-colors",
                                  children:"Link"}
                                ),
                                ee&&m.jsx("div",
                                {
                                  className:"px-2.5 py-1 bg-green-500/15 border border-green-500/30 rounded-md",
                                  children:m.jsx("span",
                                  {
                                    className:"text-xs font-semibold text-green-400 uppercase tracking-wide",
                                    children:e("installed")}
                                  )}
                                )]}
                              )]}
                            ),
                            j.info&&m.jsx("p",
                            {
                              className:"text-sm text-cbnboost-text-secondary line-clamp-2 mb-2 leading-relaxed",
                              children:typeof j.info=="object"?j.info[n]||j.info.en:j.info}
                            ),
                            m.jsx("p",
                            {
                              className:"text-xs text-cbnboost-text-secondary/60 font-mono bg-cbnboost-accent/50 px-2 py-1 rounded inline-block",
                              children:j.id}
                            )]}
                          )]}
                        )}
                      )]}
                    )}
                  ,
                  j.id)}
                )}
              )]}
            ,
            Y))}
          )}
        ),
        m.jsx("div",
        {
          className:"text-center py-8 border-t border-cbnboost-border",
          children:m.jsxs("p",
          {
            className:"text-sm text-cbnboost-text-secondary",
            children:[e("wantToAddMoreApps"),
            " ",
            null]}
          )}
        )]}
      )}
    )]}
  )}
function xE() {
  
 const {
    language,
    changeLanguage}
  =em();
  
 const [name,
  setName]=C.useState(()=>localStorage.getItem('cbnboost:user')||'');
  
 const [status,
  setStatus]=C.useState('');
  
 const run=async(channel)=>{
    try{
      await Ue({
        channel}
      );
      setStatus('Operação concluída.')}
    catch(error){
      setStatus(error.message)}
    }
  ;
  
 return m.jsx(wn,
  {
    children:m.jsxs('div',
    {
      className:'space-y-6',
      children:[
  m.jsx('h1',
      {
        className:'text-3xl font-bold',
        children:'Configurações'}
      ),
      
  m.jsx('p',
      {
        className:'text-cbnboost-text-secondary',
        children:'CBN Boost · execução local, sem conta ou chave de ativação.'}
      ),
      
  m.jsxs(pt,
      {
        className:'p-6 space-y-4',
        children:[m.jsx('h2',
        {
          className:'text-xl font-bold',
          children:'Preferências'}
        ),
        m.jsx('label',
        {
          children:'Nome de exibição'}
        ),
        m.jsx(yh,
        {
          value:name,
          placeholder:'Seu nome',
          onChange:event=>{
            setName(event.target.value);
            localStorage.setItem('cbnboost:user',
            event.target.value)}
          }
        ),
        m.jsx('label',
        {
          children:'Idioma'}
        ),
        m.jsx('select',
        {
          value:language,
          onChange:event=>changeLanguage(event.target.value),
          className:'bg-cbnboost-card border border-cbnboost-border rounded-xl p-3',
          children:[m.jsx('option',
          {
            value:'pt',
            children:'Português'}
          ),
          m.jsx('option',
          {
            value:'en',
            children:'English'}
          ),
          m.jsx('option',
          {
            value:'es',
            children:'Español'}
          )]}
        )]}
      ),
      
  m.jsxs(pt,
      {
        className:'p-6 space-y-4',
        children:[m.jsx('h2',
        {
          className:'text-xl font-bold',
          children:'Manutenção'}
        ),
        m.jsxs('div',
        {
          className:'flex gap-3',
          children:[m.jsx(we,
          {
            onClick:async()=>{
              try{
                await Ue({
                  channel:'clear-cbnboost-cache'}
                );
                localStorage.removeItem('cbnboost:systemInfo');
                localStorage.removeItem('cbnboost:tweakInfo');
                setStatus('Cache limpo.')}
              catch(error){
                setStatus(error.message)}
              }
            ,
            children:'Limpar cache'}
          ),
          m.jsx(we,
          {
            onClick:()=>run('open-log-folder'),
            children:'Abrir logs'}
          )]}
        ),
        m.jsx('p',
        {
          role:'status',
          children:status}
        )]}
      ),
      
  m.jsxs(pt,
      {
        className:'p-6 space-y-3',
        children:[m.jsx('h2',
        {
          className:'text-xl font-bold',
          children:'Sobre o CBN Boost'}
        ),
        m.jsx('p',
        {
          children:'Versão local 1.0.0. As operações disponíveis usam as implementações locais incluídas no projeto.'}
        ),
        m.jsx('p',
        {
          children:'Os ajustes disponíveis podem ser aplicados e restaurados pelo aplicativo. A instalação de aplicativos requer conexão com a internet.'}
        )]}
      )
 ]}
    )}
  );
  
}
function cbnRestoreDate(value){
  const text=String(value||""),serialized=/^\/Date\((-?\d+)(?:[+-]\d+)?\)\/$/.exec(text);
  if(serialized)return new Date(Number(serialized[1]));
  if(/^\d{14}/.test(text))return new Date(`${text.slice(0,4)}-${text.slice(4,6)}-${text.slice(6,8)}T${text.slice(8,10)}:${text.slice(10,12)}:${text.slice(12,14)}`);
  return new Date(text);
}
function yE(){
  const{
    t:e}
  =An(),
  [n,
  r]=C.useState([]),
  [s,
  l]=C.useState(!0),
  [c,
  f]=C.useState(!1),
  [g,
  p]=C.useState(""),
  [x,
  b]=C.useState({
    isOpen:!1,
    type:null,
    restorePoint:null}
  ),
  [v,
  w]=C.useState(!1),
  [_,
  L]=C.useState(""),
  M=async()=>{
    l(!0);
    try{
      const I=await Ue({
        channel:"get-restore-points"}
      );
      if(I.success&&Array.isArray(I.points)){
        const q=I.points.sort((first,second)=>cbnRestoreDate(second.CreationTime)-cbnRestoreDate(first.CreationTime));
        r(q)}
      else Tt.error("Failed to load restore points:",
      I)}
    catch(I){
      Tt.error("Failed to load restore points:",I);
      re.error(I.message||String(I));}
    finally{
      l(!1)}
    }
  ;
  C.useEffect(()=>{
    M()}
  ,
  []);
  const E=async()=>{
    f(!0);
    try{
      await Ue({
        channel:"create-cbnboost-restore-point"}
      ),
      re.success("Restore point created!"),
      await M()}
    catch(I){
      Tt.error("Failed to create restore point:",I);
      re.error(I.message||String(I));}
    f(!1)}
  ,
  A=I=>{
    b({
      isOpen:!0,
      type:"restore",
      restorePoint:I}
    )}
  ,
  D=async()=>{
    f(!0);
    try{
      await Ue({
        channel:"restore-restore-point",
        payload:x.restorePoint.SequenceNumber}
      ),
      re.success("System restore started. Your PC may restart.")}
    catch(I){
      Tt.error("Failed to start system restore:",I);
      re.error(I.message||String(I));}
    f(!1),
    b({
      isOpen:!1,
      type:null,
      restorePoint:null}
    )}
  ,
  R=async()=>{
    f(!0);
    try{
      if(!_.trim()){
        f(!1);
        return}
      await Ue({
        channel:"create-restore-point",
        payload:_}
      ),
      re.success("Restore point created!"),
      w(!1),
      L(""),
      await M()}
    catch(I){
      Tt.error("Failed to create restore point:",I);
      re.error(I.message||String(I));}
    f(!1)}
  ,
  Z=async()=>{
    f(true);
    try{
      await Ue({channel:"delete-all-restore-points"});
      re.success(e("operationCompleted"));
      await M();
    }catch(error){
      re.error(error.message||String(error));
    }finally{f(false);}
  },
  V=n.filter(I=>(I.Description||"").toLowerCase().includes(g.toLowerCase()));
  return m.jsxs(m.Fragment,
  {
    children:[m.jsx(wn,
    {
      children:m.jsxs("div",
      {
        className:"min-h-screen w-full pb-16 overflow-y-auto",
        children:[m.jsx("div",
        {
          className:"mb-8",
          children:m.jsxs("div",
          {
            className:"flex items-center justify-between mb-4",
            children:[m.jsxs("div",
            {
              children:[m.jsx("h1",
              {
                className:"text-3xl font-bold text-cbnboost-text mb-2",
                children:e("restorePointsTitle")}
              ),
              m.jsx("p",
              {
                className:"text-cbnboost-text-secondary",
                children:e("restorePointsSubtitle")}
              )]}
            ),
            m.jsx("div",
            {
              className:"flex items-center gap-2",
              children:m.jsxs("span",
              {
                className:"px-3 py-1.5 rounded-full text-xs font-medium bg-gradient-to-r from-blue-500/10 to-cyan-500/10 text-blue-400 border border-blue-500/20",
                children:[V.length,
                " ",
                e("points")]}
              )}
            )]}
          )}
        ),
        m.jsx("div",
        {
          className:"mb-6 p-6 bg-gradient-to-r from-cbnboost-primary/5 to-transparent rounded-xl border border-cbnboost-border",
          children:m.jsxs("div",
          {
            className:"flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4",
            children:[m.jsxs("div",
            {
              className:"flex items-center gap-4 flex-1",
              children:[m.jsx("div",
              {
                className:"w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center border border-blue-500/30 flex-shrink-0",
                children:m.jsx(Gs,
                {
                  className:"w-6 h-6 text-blue-400"}
                )}
              ),
              m.jsxs("div",
              {
                className:"flex-1",
                children:[m.jsx("h3",
                {
                  className:"text-base font-semibold text-cbnboost-text mb-1",
                  children:e("quickActionsTitle")}
                ),
                m.jsx("p",
                {
                  className:"text-sm text-cbnboost-text-secondary",
                  children:e("quickActionsDesc")}
                )]}
              )]}
            ),
            m.jsxs("div",
            {
              className:"flex flex-wrap gap-2 w-full lg:w-auto",
              children:[m.jsxs(we,
              {
                variant:"primary",
                onClick:E,
                className:"flex items-center gap-2 flex-1 lg:flex-initial",
                disabled:s||c,
                children:[c?m.jsx(br,
                {
                  size:16,
                  className:"animate-spin"}
                ):m.jsx(ty,
                {
                  size:16}
                ),
                e("quickCreate")]}
              ),
              m.jsx(we,
              {
                variant:"secondary",
                onClick:()=>w(!0),
                disabled:s||c,
                className:"flex-1 lg:flex-initial",
                children:e("customCreate")}
              ),
              m.jsx(we,
              {
                variant:"secondary",
                onClick:M,
                className:"flex items-center gap-2",
                disabled:s||c,
                children:m.jsx(oc,
                {
                  size:16,
                  className:s?"animate-spin":""}
                )}
              ),
              m.jsx(we,
              {
                variant:"danger",
                onClick:Z,
                disabled:s||c||n.length===0,
                className:"flex items-center gap-2",
                children:m.jsx(uv,
                {
                  size:16}
                )}
              )]}
            )]}
          )}
        ),
        m.jsx("div",
        {
          className:"mb-6",
          children:m.jsx("div",
          {
            className:"relative max-w-xl",
            children:m.jsx(yh,
            {
              type:"text",
              placeholder:e("search")+"...",
              value:g,
              onChange:I=>p(I.target.value),
              icon:lc,
              className:"w-full"}
            )}
          )}
        ),
        s?m.jsxs("div",
        {
          className:"flex flex-col items-center justify-center py-24",
          children:[m.jsx(br,
          {
            size:48,
            className:"text-cbnboost-primary animate-spin mb-4"}
          ),
          m.jsx("p",
          {
            className:"text-cbnboost-text-secondary",
            children:e("loadingRestorePoints")}
          )]}
        ):V.length===0?m.jsxs("div",
        {
          className:"flex flex-col items-center justify-center py-20 text-center bg-cbnboost-card border-2 border-dashed border-cbnboost-border rounded-2xl",
          children:[m.jsx("div",
          {
            className:"w-20 h-20 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl flex items-center justify-center mb-6 ring-4 ring-blue-500/10",
            children:m.jsx(Gs,
            {
              size:32,
              className:"text-blue-400"}
            )}
          ),
          m.jsx("h3",
          {
            className:"text-xl font-semibold mb-3 text-cbnboost-text",
            children:e(g?"noMatchesFound":"noRestorePoints")}
          ),
          m.jsx("p",
          {
            className:"text-cbnboost-text-secondary max-w-md mb-6 leading-relaxed",
            children:e(g?"adjustSearchTerms":"noRestorePointsDesc")}
          ),
          !g&&m.jsxs(we,
          {
            variant:"primary",
            onClick:E,
            disabled:c,
            className:"flex items-center gap-2 px-6",
            children:[m.jsx(ty,
            {
              size:18}
            ),
            e("createFirstRestore")]}
          )]}
        ):m.jsx("div",
        {
          className:"space-y-3",
          children:V.map((I,
          q)=>m.jsx("div",
          {
            className:"group bg-cbnboost-card border border-cbnboost-border rounded-xl p-6 hover:border-cbnboost-primary/30 transition-all duration-200 hover:shadow-lg hover:shadow-cbnboost-primary/5",
            children:m.jsxs("div",
            {
              className:"flex items-center justify-between gap-4",
              children:[m.jsxs("div",
              {
                className:"flex items-center gap-4 flex-1 min-w-0",
                children:[m.jsx("div",
                {
                  className:"w-12 h-12 rounded-lg bg-gradient-to-br from-cbnboost-primary/20 to-purple-500/20 flex items-center justify-center flex-shrink-0 border border-cbnboost-primary/30",
                  children:m.jsx(Gs,
                  {
                    size:20,
                    className:"text-cbnboost-primary"}
                  )}
                ),
                m.jsxs("div",
                {
                  className:"flex-1 min-w-0",
                  children:[m.jsx("h3",
                  {
                    className:"text-base font-semibold text-cbnboost-text mb-1 truncate",
                    children:I.Description}
                  ),
                  m.jsxs("div",
                  {
                    className:"flex items-center gap-3 text-sm text-cbnboost-text-secondary",
                    children:[m.jsxs("span",
                    {
                      className:"flex items-center gap-1.5",
                      children:[m.jsx("svg",
                      {
                        className:"w-4 h-4",
                        fill:"none",
                        stroke:"currentColor",
                        viewBox:"0 0 24 24",
                        children:m.jsx("path",
                        {
                          strokeLinecap:"round",
                          strokeLinejoin:"round",
                          strokeWidth:2,
                          d:"M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"}
                        )}
                      ),
                      cbnRestoreDate(I.CreationTime).toLocaleString()]}
                    ),
                    m.jsxs("span",
                    {
                      className:"flex items-center gap-1.5",
                      children:[m.jsx("svg",
                      {
                        className:"w-4 h-4",
                        fill:"none",
                        stroke:"currentColor",
                        viewBox:"0 0 24 24",
                        children:m.jsx("path",
                        {
                          strokeLinecap:"round",
                          strokeLinejoin:"round",
                          strokeWidth:2,
                          d:"M7 20l4-16m2 16l4-16M6 9h14M4 15h14"}
                        )}
                      ),
                      "Seq: ",
                      I.SequenceNumber]}
                    )]}
                  )]}
                )]}
              ),
              m.jsxs(we,
              {
                variant:"secondary",
                onClick:()=>A(I),
                disabled:c,
                className:"flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity",
                children:[m.jsx(R3,
                {
                  size:16}
                ),
                "Restore"]}
              )]}
            )}
          ,
          q))}
        )]}
      )}
    ),
    m.jsx(Bn,
    {
      open:x.isOpen,
      onClose:()=>!c&&b({
        isOpen:!1,
        type:null,
        restorePoint:null}
      ),
      children:x.type==="restore"&&x.restorePoint&&m.jsxs("div",
      {
        className:"bg-cbnboost-card border border-cbnboost-border rounded-2xl p-6 shadow-xl max-w-lg w-full mx-4 pb-0",
        children:[m.jsx("h3",
        {
          className:"text-lg font-medium text-cbnboost-text",
          children:"Restore System"}
        ),
        m.jsxs("div",
        {
          className:"p-4 pr-0",
          children:[m.jsxs("p",
          {
            className:"text-cbnboost-text-secondary mb-4",
            children:["Are you sure you want to restore your system to",
            " ",
            m.jsxs("span",
            {
              className:"font-bold",
              children:['"',
              x.restorePoint.Description,
              '"?']}
            ),
            " Your PC will restart shortly. and the restore point will be applied. ",
            m.jsx("br",
            {
              }
            ),
            " ",
            m.jsx("br",
            {
              }
            ),
            "Your files will not be affected, but recently installed applications and settings may be lost.",
            m.jsx("br",
            {
              }
            ),
            " ",
            m.jsx("br",
            {
              }
            ),
            "This will revert all changes CBN Boost has made to your system since this restore point was created."]}
          ),
          m.jsxs("div",
          {
            className:"flex justify-end gap-3",
            children:[m.jsx(we,
            {
              variant:"secondary",
              onClick:()=>!c&&b({
                isOpen:!1,
                type:null,
                restorePoint:null}
              ),
              disabled:c,
              children:"Cancel"}
            ),
            m.jsx(we,
            {
              variant:"primary",
              onClick:D,
              disabled:c,
              children:c?m.jsx(br,
              {
                size:16,
                className:"animate-spin"}
              ):"Restore"}
            )]}
          )]}
        )]}
      )}
    ),
    m.jsx(Bn,
    {
      open:v,
      onClose:()=>!c&&w(!1),
      children:m.jsxs("div",
      {
        className:"bg-cbnboost-card border border-cbnboost-border rounded-2xl p-6 shadow-xl max-w-lg w-full mx-4 pb-0",
        children:[m.jsx("h3",
        {
          className:"text-lg font-medium text-cbnboost-text",
          children:"Create Custom Restore Point"}
        ),
        m.jsxs("div",
        {
          className:"p-4 space-y-4",
          children:[m.jsx("input",
          {
            type:"text",
            value:_,
            onChange:I=>L(I.target.value),
            placeholder:"Enter restore point name",
            className:"w-full px-3 py-2 bg-cbnboost-card border border-cbnboost-border rounded-lg text-cbnboost-text placeholder-cbnboost-text-secondary focus:outline-hidden focus:ring-2 focus:ring-cbnboost-primary focus:border-transparent transition-colors",
            disabled:c}
          ),
          m.jsxs("div",
          {
            className:"flex justify-end gap-3",
            children:[m.jsx(we,
            {
              variant:"secondary",
              onClick:()=>!c&&w(!1),
              disabled:c,
              children:"Cancel"}
            ),
            m.jsx(we,
            {
              variant:"primary",
              onClick:R,
              disabled:c||!_.trim(),
              children:c?m.jsx(br,
              {
                size:16,
                className:"animate-spin"}
              ):"Create"}
            )]}
          ),
          m.jsx("p",
          {
            className:"text-xs text-center text-cbnboost-text-muted",
            children:"This may take a while depending on your hardware"}
          )]}
        )]}
      )}
    )]}
  )}
function wE(){
  const{
    t:e}
  =An(),
  [n,
  r]=C.useState(!1),
  [s,
  l]=C.useState(typeof localStorage<"u"&&localStorage.getItem("suppressFirstTimeModal")==="true");
  C.useEffect(()=>{
    const g=localStorage.getItem("firstTime"),
    p=localStorage.getItem("suppressFirstTimeModal")==="true";
    let x=(!g||g==="true")&&!p;
    if(import.meta?.env?.MODE==="development"&&localStorage.getItem("forceFirstTimeModal")==="true"&&(x=!0,
    localStorage.removeItem("forceFirstTimeModal")),
    x){
      const b=setTimeout(()=>r(!0),
      20);
      return()=>clearTimeout(b)}
    }
  ,
  []);
  const c=async()=>{
    localStorage.setItem("firstTime",
    "false"),
    s&&localStorage.setItem("suppressFirstTimeModal",
    "true"),
    r(!1);
    const g=re.info(e("creatingRestorePoint"),
    {
      autoClose:!1,
      isLoading:!0,
      closeOnClick:!1,
      draggable:!1}
    );
    try{
      await Ue({
        channel:"create-cbnboost-restore-point"}
      ),
      re.update(g,
      {
        render:e("restorePointCreated"),
        type:"success",
        isLoading:!1,
        autoClose:3e3}
      )}
    catch(error){
      re.update(g,{
        render:`${e("failedToCreateRestorePoint")} ${error.message||String(error)}`,
        type:"error",isLoading:false,autoClose:6000
      });
    }
  },
  f=()=>{
    localStorage.setItem("firstTime",
    "false"),
    s&&localStorage.setItem("suppressFirstTimeModal",
    "true"),
    r(!1)}
  ;
  return m.jsx(Bn,
  {
    open:n,
    children:m.jsxs("div",
    {
      className:"bg-cbnboost-card border border-cbnboost-border rounded-2xl p-0 shadow-2xl max-w-2xl w-full mx-4 overflow-hidden",
      children:[m.jsxs("div",
      {
        className:"bg-gradient-to-br from-cbnboost-primary/15 to-purple-500/10 px-8 py-6 border-b border-cbnboost-border",
        children:[m.jsx("h1",
        {
          className:"text-2xl sm:text-3xl font-bold text-cbnboost-text mb-1",
          children:e("welcomeToCBNBoost")}
        ),
        m.jsx("p",
        {
          className:"text-cbnboost-text-secondary",
          children:e("firstTimeMessage")}
        )]}
      ),
      m.jsxs("div",
      {
        className:"p-6 sm:p-8 text-cbnboost-text",
        children:[m.jsxs("div",
        {
          className:"flex items-start gap-4 p-4 rounded-xl border border-cbnboost-border/80 bg-white/2.5 dark:bg-black/10",
          children:[m.jsx("div",
          {
            className:"shrink-0 rounded-lg bg-cbnboost-primary/10 p-2",
            children:m.jsx(p3,
            {
              className:"h-5 w-5 text-cbnboost-primary"}
            )}
          ),
          m.jsxs("div",
          {
            className:"text-sm sm:text-base",
            children:[m.jsx("p",
            {
              className:"text-cbnboost-text mb-1 font-medium",
              children:e("createRestorePointQuestion")}
            ),
            m.jsxs("p",
            {
              className:"text-cbnboost-text-secondary",
              children:[e("byClickingYes"),
              " ",
              m.jsx("strong",
              {
                children:e("yes")}
              ),
              e("cbnBoostWillCreate")]}
            )]}
          )]}
        ),
        m.jsxs("div",
        {
          className:"mt-5 flex items-start gap-3 p-4 rounded-xl border border-red-500/30 bg-red-500/5",
          children:[m.jsx(lv,
          {
            className:"h-5 w-5 text-red-500 shrink-0 mt-0.5"}
          ),
          m.jsxs("div",
          {
            className:"text-xs sm:text-sm leading-relaxed",
            children:[m.jsx("p",
            {
              className:"font-semibold text-red-600 dark:text-red-400 mb-1",
              children:e("disclaimerTitle")}
            ),
            m.jsx("p",
            {
              className:"text-cbnboost-text-secondary",
              children:e("disclaimerText")}
            ),
            m.jsxs("label",
            {
              className:"mt-3 inline-flex items-center gap-2 cursor-pointer select-none text-cbnboost-text-secondary",
              children:[m.jsx("input",
              {
                type:"checkbox",
                className:"accent-cbnboost-primary cursor-pointer",
                checked:s,
                onChange:g=>l(g.target.checked)}
              ),
              e("dontShowAgain")]}
            )]}
          )]}
        ),
        m.jsxs("div",
        {
          className:"mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4 w-full justify-end",
          children:[m.jsx(we,
          {
            onClick:f,
            variant:"danger",
            children:e("noNotRecommended")}
          ),
          m.jsx(we,
          {
            onClick:c,
            children:e("yesRecommended")}
          )]}
        ),
        m.jsxs("div",
        {
          className:"mt-6 text-xs sm:text-sm text-cbnboost-text-secondary",
          children:[m.jsx("span",
          {
            className:"font-semibold",
            children:e("cbnBoostVersion")}
          ),
          " ",
          sh?.version]}
        )]}
      )]}
    )}
  )}
function _E(){
  const[e,
  n]=C.useState(()=>localStorage.getItem("navCollapsed")==="true");
  return C.useEffect(()=>{
    const r=s=>{
      n(s.detail)}
    ;
    return window.addEventListener("navCollapsedChange",
    r),
    ()=>window.removeEventListener("navCollapsedChange",
    r)}
  ,
  []),
  C.useEffect(()=>{
    document.body.classList.remove("light",
    "purple",
    "dark",
    "gray",
    "classic"),
    document.body.classList.add("dark"),
    document.body.setAttribute("data-theme",
    "dark");
    try{
      localStorage.setItem("theme",
      "dark")}
    catch{
      }
    }
  ,
  []),
  m.jsx(lL,
  {
    children:m.jsxs("div",
    {
      className:"flex flex-col h-screen bg-cbnboost-bg text-cbnboost-text overflow-hidden",
      children:[m.jsx(wE,
      {
        }
      ),
      m.jsx(dL,
      {
        }
      ),
      m.jsx(yz,
      {
        }
      ),
      m.jsx("div",
      {
        className:"flex flex-1 pt-[50px] relative",
        children:m.jsx("main",
        {
          className:`flex-1 p-6 rounded-tl-2xl border-t border-l border-cbnboost-border transition-all duration-300 ${e?"ml-[58px]":"ml-52"}`,
          children:m.jsxs(uC,
          {
            children:[m.jsx(Jn,
            {
              path:"/",
              element:m.jsx(cE,
              {
                }
              )}
            ),
            m.jsx(Jn,
            {
              path:"/tweaks",
              element:m.jsx(fE,
              {
                }
              )}
            ),
            m.jsx(Jn,
            {
              path:"/clean",
              element:m.jsx(hE,
              {
                }
              )}
            ),
            m.jsx(Jn,
            {
              path:"/backup",
              element:m.jsx(yE,
              {
                }
              )}
            ),
            m.jsx(Jn,
            {
              path:"/apps",
              element:m.jsx(gE,
              {
                }
              )}
            ),
            m.jsx(Jn,
            {
              path:"/settings",
              element:m.jsx(xE,
              {
                }
              )}
            ),
            m.jsx(Jn,
            {
              path:"*",
              element:m.jsx(lC,
              {
                to:"/",
                replace:!0}
              )}
            )]}
          )}
        )}
      ),
      m.jsx(Jz,
      {
        stacked:!0,
        limit:5,
        position:"bottom-right",
        theme:"dark",
        transition:$z,
        hideProgressBar:!0,
        pauseOnFocusLoss:!1}
      )]}
    )}
  )}

b_.createRoot(document.getElementById("root")).render(m.jsx(ke.StrictMode,
{
  children:m.jsx(NC,
  {
    children:m.jsx(_E,
    {
      }
    )}
  )}
));

