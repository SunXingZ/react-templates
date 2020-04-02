import { Platform, Dimensions, PixelRatio, StatusBar, PermissionsAndroid } from "react-native";
import DeviceInfo from "react-native-device-info";

const isDebug = __DEV__;
const appName = DeviceInfo.getApplicationName();
const appVersion = DeviceInfo.getReadableVersion();
const deviceId = DeviceInfo.getDeviceId();
const deviceModel = `${DeviceInfo.getModel()} - ${DeviceInfo.getSystemName()} ${DeviceInfo.getSystemVersion()}`;
const firstInstallTime = DeviceInfo.getFirstInstallTime();
const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;
const platform = Platform.OS;
const isIphoneX = platform === "ios" && (deviceHeight === 812 || deviceWidth === 812);
const isIphoneXsMax = platform === "ios" && (deviceHeight === 896 || deviceWidth === 896);
const screenScale = parseInt(Dimensions.get("screen").height) / parseInt(Dimensions.get("screen").width);
const baseStatusBarHeight = 20;
const baseNavBarHeight = 44;
const baseAndroidStatusBarHeight = Math.sign(StatusBar.currentHeight) == 1 ? StatusBar.currentHeight : 40;
const isAndroidFullScreen = platform == "android" && screenScale > 2;
const isNotchScreen = isIphoneX || isIphoneXsMax || isAndroidFullScreen;

const iphoneStatusBar = (isIphoneX == false && isIphoneXsMax == false) ? baseStatusBarHeight : 0;
const iphoneXStatusBar = isIphoneX ? baseStatusBarHeight : 0;
const iphoneXsMaxStatusBar = isIphoneXsMax ? baseNavBarHeight : 0;
const statusBarHeight = platform == "ios" ? (iphoneStatusBar + iphoneXStatusBar + iphoneXsMaxStatusBar) : (isAndroidFullScreen ? baseAndroidStatusBarHeight : baseStatusBarHeight);

const iphoneNavBar = (isIphoneX == false && isIphoneXsMax == false) ? baseStatusBarHeight + baseNavBarHeight : 0;
const iphoneXNavBar = isIphoneX ? baseStatusBarHeight + baseNavBarHeight : 0;
const iphoneXsMaxNavBar = isIphoneXsMax ? baseNavBarHeight * 2 : 0;
const navBarHeight = platform == "ios" ? (iphoneNavBar + iphoneXNavBar + iphoneXsMaxNavBar) : (isAndroidFullScreen ? baseAndroidStatusBarHeight + baseNavBarHeight : baseStatusBarHeight + baseNavBarHeight);

const checkAndroidPermission = async (permission) => {
    return await PermissionsAndroid.check(permission).then((response) => response).catch((error) => false);
}

const requestAndroidPermission = async (permission) => {
    let hasPermission = await checkAndroidPermission(permission);
    if (!hasPermission) {
        hasPermission = await PermissionsAndroid.requestPermission(permission).then((response) => response).catch((error) => false);
    }
    return hasPermission;
}

const requestMultipleAndroidPermission = async (permissionArray) => {
    return await PermissionsAndroid.requestMultiple(permissionArray).then((response) => response).catch((error) => false);
}

export {
    isDebug,
    isIphoneX,
    isIphoneXsMax,
    isNotchScreen,
    firstInstallTime,
    appName,
    appVersion,
    deviceId,
    deviceModel,
    deviceHeight,
    deviceWidth,
    platform,
    statusBarHeight,
    navBarHeight,
    PixelRatio,
    checkAndroidPermission,
    requestAndroidPermission,
    requestMultipleAndroidPermission
}