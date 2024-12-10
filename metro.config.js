// Learn more https://docs.expo.dev/guides/customizing-metro/
const { getDefaultConfig } = require("expo/metro-config");

module.exports = (async () => {
  let defaultConfig = await getDefaultConfig(__dirname);
  
  defaultConfig.resolver.resolverMainFields = [
    "sbmodern",
    ...defaultConfig.resolver.resolverMainFields.filter((field) => field !== "sbmodern"),
  ];

  return defaultConfig;
})();
