import axios from "axios";
import { Upload } from "antd";
import { http } from "./config";

export const courseService = {
    getAllCourse: async (page = 1, pageSize = 10) => { 
      const response = await axios.get(
        `https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc_PhanTrang?page=${page}&pageSize=${pageSize}&MaNhom=GP01`
      );
      return response.data;
    },
};