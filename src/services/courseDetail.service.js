import axios from "axios";
import { Upload } from "antd";
import { http } from "./config";

export const courseDetailService = {
   
  getCourseDetail: async (maKhoaHoc) => {
    const response = await axios.get(`https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${maKhoaHoc}`);
    return response.data;
},

    
  };
export default courseDetailService;