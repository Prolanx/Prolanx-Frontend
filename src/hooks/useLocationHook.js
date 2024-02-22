import { useEffect, useState } from "react";
import { europeanCountryCodes as countryCodes } from "../constants/shortName.data";

const useLocationHook = () => {
  const [isForeign, setIsForeign] = useState(false);
  const [currentCode, setCurrentCode] = useState(null)
  const apiKey = "AIzaSyAhzN_cQftXS9njpZkZtCawVi1HQ4ixhzY";

  // Define a function to get the current LONG-LAT
  const getCurrentLocation = (apiKey) => {
    const url = `https://www.googleapis.com/geolocation/v1/geolocate?key=${apiKey}`;
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        const latitude = data.location.lat;
        const longitude = data.location.lng;
        getAddress(latitude, longitude);
      })
      .catch((error) => {
        console.error("Error getting current location:", error);
      });
  };

  //   DEFINE A METHOD TO GET THE ADDRESS USING THE LONG-LAT
  const getAddress = (lat, lng) => {
    const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${apiKey}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const results = data.results;
        if (results.length > 0) {
          const addressComponents = results[0].address_components;
          let countryName = "";
          let countryShortName = "";
          // Loop through address components to find the country
          addressComponents.forEach((component) => {
            if (component.types.includes("country")) {
              countryName = component.long_name;
              countryShortName = component.short_name;
            }
          });
          setCurrentCode(countryShortName);
        } else {
          console.error("No results found for the coordinates.");
        }
      })
      .catch((error) => {
        console.error("Error fetching country:", error);
      });
  };


  const validateLocalty = (code, whiteList) => {
    const isExist = whiteList.includes(code) ? true : false;
    setIsForeign(isExist)
  }




  useEffect(()=> {
    validateLocalty(currentCode, countryCodes)
  }, [currentCode])

  
  useEffect(()=> {
    console.log("watching isForeign state ", isForeign)
  }, [isForeign])
  useEffect(() => {
    getCurrentLocation(apiKey);
  }, []);
};

export default useLocationHook;
