// export const setLocalStorage = (key, value) => {
//   const localString = JSON.stringify(value);
//   localStorage.setItem(key, localString);
// };
  
// export const getLocalStorage = (key) => {
//   const data = localStorage.getItem(key);
//   console.log(data)
//   if (data) {
//     try {
//       return JSON.parse(data);
//     } catch (error) {
//       console.error("Lỗi phân tích JSON:", error);
//       return null; 
//     }
//   }
//   return null; 
// };