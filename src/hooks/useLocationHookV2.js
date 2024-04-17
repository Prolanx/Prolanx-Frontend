import { useEffect, useState } from "react";
import { europeanCountryCodes as countryCodes } from "../constants/shortName.data";

const useLocationHook = () => {
  const [isLocal, setIsLocal] = useState(false);
  const disableLocal = () => setIsLocal(false);
  const [currentCode, setCurrentCode] = useState(null);

  // Check if the browser supports Geolocation
  const getLocation = () => {
    if (navigator.geolocation) {
      // Get the current position
      navigator.geolocation.getCurrentPosition(
        (position) => {
          // Access the latitude and longitude from the position object
          var latitude = position.coords.latitude;
          var longitude = position.coords.longitude;
          // Do something with the latitude and longitude, for example:
          console.log("Latitude: " + latitude + ", Longitude: " + longitude);
        //   alert("latitude ", latitude);

          reverse(latitude, longitude)
        },
        (error) => {
          console.log("geo locator error", error.message);
          const message = "User denied Geolocation";
          disableLocal();
        }
      );
    } else {
      // If Geolocation is not supported by the browser
      disableLocal();
      console.log("Geolocation is not supported by this browser.");
    }
  };


  const validateLocalty = (code, whiteList) => {
    const isInclude = whiteList.includes(code) ? true : false;
    setIsLocal(!isInclude);
  };


  const reverse = (lat, long)=> {
    const api = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${long}`

    fetch(api)
    .then(response => response.json())
    .then(data => {
      // Extract the country from the respons
        console.log("geo code data  ", data)
        validateLocalty(data.countryCode, countryCodes)
   
    })
    .catch(error => {
      console.error("Error fetching geo code:", error);
    });
  }
  useEffect(() => {
    getLocation()
  }, []);
  useEffect(() => {
    console.log("watching isLocal state ", isLocal);
  }, [isLocal]);



  return {
    isLocal
  }
};



export default useLocationHook;
