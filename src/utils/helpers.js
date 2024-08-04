import { clarity } from 'react-microsoft-clarity';

export const isProd = () => {
  return process.env.NODE_ENV === 'production'
}

export const cleanFileName = (file) => {
  return file.name.length > 15 ?
    file.name.slice(0, 15) + "..." + file.type.split('/')[1] :
    file.name
}

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