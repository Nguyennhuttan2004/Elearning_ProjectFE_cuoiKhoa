import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { courseService } from "../services/course.service";

export const getAllCourseApi = createAsyncThunk(
  "courses/getAllCourse",
  async ({ page = 1, pageSize = 10 }) => {
    const result = await courseService.getAllCourse(page, pageSize);
    console.log(result);
    return result;
  }
);

const initialState = {
  listCourses: [],
  listCategories: [],
  currentPage: 1,
  totalPages: 10,
};

const courseSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    setPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllCourseApi.fulfilled, (state, action) => {
      console.log(action);
      state.listCourses = action.payload.items; 
      state.totalPages = action.payload.totalPages; 
    });
    builder.addCase(getAllCourseApi.pending, (state) => {
      console.log("Tôi đang chờ xử lí");
    });
    builder.addCase(getAllCourseApi.rejected, (state, action) => {
      console.log("Tôi bị lỗi", action.error.message);
      state.error = action.error.message; 
    });
  },
});

export const { setPage } = courseSlice.actions;

export default courseSlice.reducer;