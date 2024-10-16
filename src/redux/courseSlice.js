import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { courseService } from "../services/course.service";

export const getAllCourseApi = createAsyncThunk(
  "courses/getAllCourse",
  async () => {
    const result = await courseService.getAllCourse();
    console.log(result);
    return result;
  }
);

const initialState = {
  listCourses: [],
  listCategories: []
};

const courseSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder.addCase(getAllCourseApi.fulfilled, (state, action) => {
      console.log(action);
      state.listCourses = action.payload;
    });
    builder.addCase(getAllCourseApi.pending, (state, action) => {
      console.log("Tôi đang chờ xử lí");
    });
    builder.addCase(getAllCourseApi.rejected, (state, action) => {
      console.log("Tôi bị lỗi");
    });
  },
});

export const {} = courseSlice.actions;

export default courseSlice.reducer;
