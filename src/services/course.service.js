import axios from "axios";
import { Upload } from "antd";
import { http } from "./config";

export const courseService = {
   
    getAllCourse: async () => {
      const response = await axios.get(
        `https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP08`,
        {}
      );
      return response.data;
    },
  };