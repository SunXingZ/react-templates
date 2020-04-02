import { useState, useEffect } from "react";
import Geolocation from '@react-native-community/geolocation';

const useGeolocation = () => {
  const [position, setPosition] = useState({});

  useEffect(() => {
    let watchID = null;

    const onGetPositionSuccess = (val) => {
      setPosition(val);
    };

    const onGetPositionError = () => { };

    Geolocation.requestAuthorization();

    Geolocation.getCurrentPosition(onGetPositionSuccess, onGetPositionError, {
      maximumAge: 0
    });

    Geolocation.watchPosition(onGetPositionSuccess, onGetPositionError, {
      maximumAge: 0
    });

    return () => {
      Geolocation.clearWatch(watchID);
    }
  }, []);

  return position;
}

export default useGeolocation;