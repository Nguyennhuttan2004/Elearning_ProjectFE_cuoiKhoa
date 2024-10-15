import axios from "axios";


export const danhMucService = {
   
    getAllDanhMuc: async () => {
      const response = await axios.get(
        `https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhMucKhoaHoc`,
        {}
      );
      return response.data;
    },
  };