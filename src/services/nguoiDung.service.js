import { Upload } from "antd";
import { http } from "./config";
import axios from "axios";

export const nguoiDungService = {
  // getAllUsers: () => {
  //   return http.get("/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01");
  // },
  fetchUsers: async () => {
    const response = await axios.get(
      `https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01
`,
      {}
    );
    return response.data;
  },
  deleteUSer: (id) => {
    return http.delete(`/users?id=${id}`);
  },
  createUser: (data) => {
    return http.post("/users", data);
  },
  uploadAvatar: (token, data) => {
    return http.post("/users/upload-avatar", data, {
      headers: {
        token,
      },
    });
  },
};
