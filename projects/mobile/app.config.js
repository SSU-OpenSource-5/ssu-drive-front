require("dotenv").config();
const versionInfo = require("./versionInfo");

const config = {
  APP_MODE: process.env.APP_MODE,
};

/** @type { { expo: import("expo/config").ExpoConfig } } */
module.exports = {
  expo: {
    name: "SSUDrive",
    slug: "ssu-drive",
    owner: "aube",
    version: versionInfo.VERSION,
    orientation: "default",
    icon: "./assets/icon.png",
    runtimeVersion: versionInfo.RUNTIME_VERSION,
    splash: {
      image: "./assets/splash.png",
      resizeMode: "contain",
      backgroundColor: "#050626",
    },
    updates: {
      fallbackToCacheTimeout: 0,
      checkAutomatically: "ON_ERROR_RECOVERY",
      url: "https://u.expo.dev/35d62ee9-99f5-4334-8816-bb6a91a067de",
    },
    assetBundlePatterns: ["**/*"],
    plugins: [
      [
        "@react-native-seoul/kakao-login",
        {
          kakaoAppKey: process.env.KAKAO_APP_KEY,
          kotlinVersion: "1.6.10",
        },
      ],
    ],
    ios: {
      supportsTablet: false,
      // bundleIdentifier: 'com.planit-study',
      buildNumber: `${versionInfo.BUILD_NUMBER}`,
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
        backgroundColor: "#FFFFFF",
      },
      versionCode: versionInfo.BUILD_NUMBER,
      // package: 'com.ctu.planitstudy',
    },
    web: {
      favicon: "./assets/favicon.png",
    },
    extra: {
      ...config,
      eas: {
        projectId: "35d62ee9-99f5-4334-8816-bb6a91a067de",
      },
    },
  },
};
