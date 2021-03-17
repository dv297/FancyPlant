const createExpoWebpackConfigAsync = require("@expo/webpack-config");

module.exports = async function createWebpackConfig(env, argv) {
  const config = await createExpoWebpackConfigAsync(
    {
      ...env,
      babel: {
        dangerouslyAddModulePathsToTranspile: [
          "@codler/react-native-keyboard-aware-scroll-view",
        ],
      },
    },
    argv
  );
  return config;
};
