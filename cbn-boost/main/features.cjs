'use strict';
const {createAppFeatures, selectWindowsPackages} = require('./app-features.cjs');
const {createPlatformFeatures} = require('./platform-features.cjs');
const {createNvidiaFeature} = require('./nvidia-feature.cjs');
function createFeatureHandlers(context) {
  const selectPackages = context.selectPackages || (options => selectWindowsPackages(context.runPowerShell, options));
  const config = {...context,selectPackages};
  return {
    ...createAppFeatures(config).handlers,
    ...createPlatformFeatures(config),
    'optimize-nvidia-settings': createNvidiaFeature(config),
  };
}
module.exports = {createFeatureHandlers};
