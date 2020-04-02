import { useEffect, useState } from 'react';
import { BackHandler } from "react-native";
import { DeviceConfigs } from "../configs";

const useBackHandler = (callback) => {
  let now = Date.now();
  const [lastBackPressed, setLastBackPressed] = useState(now);

  useEffect(() => {

    const handleBackPress = () => {
      // const routes = navigation.getRootState().routes || [];
      // if (routes.length <= 1) {
      //   if (lastBackPressed && lastBackPressed + 2000 >= Date.now()) {
      //     return false;
      //   }
      //   now = Date.now();
      //   setLastBackPressed(now);
      //   callback && callback(now);
      //   return true;
      // }
    }

    if (DeviceConfigs.platform == "android") {
      BackHandler.addEventListener('hardwareBackPress', handleBackPress);
    }
    
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackPress);
    }
  }, [lastBackPressed]);
}

export default useBackHandler;