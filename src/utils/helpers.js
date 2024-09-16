import axios from "axios";
import { clarity } from 'react-microsoft-clarity';
import Resizer from 'react-image-file-resizer';
import { LANGUAGES } from "./defines";
import setLanguage from 'next-translate/setLanguage'

export const isProd = () => {
  return process.env.NODE_ENV === 'production'
}

export const cleanFileName = (file) => {
  return file.name.length > 15 ?
    file.name.slice(0, 15) + "..." + file.type.split('/')[1] :
    file.name
}

export const createFileName = (index) => {
  return `${index}.jpg`
}

export const resizeFile = (file, width = 800, height = 800, format = 'JPG') =>
  new Promise((resolve) => {
    Resizer.imageFileResizer(
      file,
      width,
      height,
      format,
      100,
      0,
      (uri) => {
        resolve(uri);
      },
      "blob"
    );
  });

export const getJsonString = (str) => {
  try {
    const parsed = JSON.parse(str);

    return parsed;
  } catch (e) {
    return false;
  }
}
export const clarityTrack = () => {
  if (!isProd()) {
    return;
  }

  clarity.init(process.env.NEXT_PUBLIC_CLARITY_TAG);
  clarity.consent();

  if (clarity.hasStarted()) {
    console.log('Track with Clarity');
    // clarity.identify('USER_ID', { userProperty: 'value' });
  }
}

export const getGeoInfo = async () => {
  if (!isProd()) {
    return
  }

  try {
    const response = await axios.get('https://ipapi.co/json/');
    return response.data;
  } catch (error) {
    console.log(error);
    return;
  }
};

export const fetchLanguage = async (withUpdate = true) => {
  let storedLanguage;

  if (localStorage.getItem("language")) {
    storedLanguage = localStorage.getItem("language")
  } else {
    const geoLocation = await getGeoInfo();

    if (geoLocation) {
      const country = geoLocation.country.toLowerCase();

      if (LANGUAGES.map(language => language.value).includes(country)) {
        storedLanguage = country
      }
    }
  }
  if (withUpdate) {
    await setLanguage(storedLanguage);
  } else {
    return storedLanguage;
  }
}

export const debounce = (func, delay) => {
  let timeoutId;
  return function (...args) {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}