export const cleanFileName = (file) => {
    return file.name.length > 15 ?
      file.name.slice(0, 15) + "..." + file.type.split('/')[1] :
      file.name
  }
