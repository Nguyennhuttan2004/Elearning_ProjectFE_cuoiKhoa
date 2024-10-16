import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { courseDetailService } from "../services/courseDetail.service";

export const getCourseDetailApi = createAsyncThunk(
  "courseDetail/getCourseDetail",
  async (id) => { 
    const result = await courseDetailService.getCourseDetail(id); 
    console.log(result);
    return result;
  }
);

const initialState = {
  courseDetail: null, 
};

const courseDetailSlice = createSlice({
  name: "courseDetail",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCourseDetailApi.fulfilled, (state, action) => {
      console.log(action);
      state.courseDetail = action.payload;
    });
    builder.addCase(getCourseDetailApi.pending, (state) => {
      console.log("Tôi đang chờ xử lí");
    });
    builder.addCase(getCourseDetailApi.rejected, (state) => {
      console.log("Tôi bị lỗi");
    });
  },
});

export const {} = courseDetailSlice.actions;

export default courseDetailSlice.reducer;