import { http } from "./config";

export const authService = {
  signUp: (data) => {
    return http.post("/QuanLyNguoiDung/DangKy", data);
  },
  signIn: (data) => {
    return http.post("/QuanLyNguoiDung/DangNhap", data);
  },
};
