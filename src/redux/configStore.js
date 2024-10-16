import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import nguoiDungSlice from "./nguoiDungSlice";
import courseSlice from "./courseSlice"
import danhMucSlice from "./danhMucSlice"
import courseDetailSlice from "./courseDetailSlice"
export const store = configureStore({
  reducer: {
    authSlice,
    nguoiDungSlice,
    courseSlice,
    danhMucSlice,
    courseDetailSlice
  },
});
