export const setLocalStorage = (key, value) => {
  const localString = JSON.stringify(value);
  localStorage.setItem(key, localString);
};

export const getLocalStorage = (key) => {
  const dataLocal = localStorage.getItem(key)
  // Em check user luu gi trong do
  console.log(key)
  console.log(dataLocal)
  if (dataLocal) {
    try {
      return JSON.parse(dataLocal);
    } catch (error) {
      console.error("Lỗi phân tích JSON:", error);
      return null; 
    }
  }
  return null;
};