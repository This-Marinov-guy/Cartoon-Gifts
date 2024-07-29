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