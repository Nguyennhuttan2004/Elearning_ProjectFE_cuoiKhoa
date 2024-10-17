import { http } from "./config";

export const congViecService = {
  layCongViecTheoTen: (maKhoaHoc) => {
    return http.get(`https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${maKhoaHoc}`);
  },
};
