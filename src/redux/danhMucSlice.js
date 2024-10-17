import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { danhMucService } from "../services/danhMuc.service";

export const getAllDanhMucApi = createAsyncThunk(
  "danhMuc/getAllDanhMuc",
  async () => {
    const result = await danhMucService.getAllDanhMuc();
    console.log(result);
    return result;
  }
);


export const getCoursesByCategoryApi = createAsyncThunk(
  "courses/getCoursesByCategory",
  async (category) => {
    const result = await danhMucService.getCoursesByCategory(category);
    console.log("Kết quả từ API:", result); // Log kết quả
    return result; 
  }
);

const initialState = {
  listDanhMuc: [],
  categoriesName: ""
};

const danhMucSlice = createSlice({
  name: "danhMuc",
  initialState,
  reducers: {
     setCategories: (state, action) =>{
      state.categoriesName = action.payload 
     }
  },
  extraReducers: (builder) => {
    builder.addCase(getAllDanhMucApi.fulfilled, (state, action) => {
      console.log(action);
      state.listDanhMuc = action.payload;
    });
    builder.addCase(getCoursesByCategoryApi.fulfilled, (state, action) => {
      console.log(action);
      state.listDanhMuc = action.payload;
    });
    builder.addCase(getAllDanhMucApi.pending, (state, action) => {
      console.log("Tôi đang chờ xử lí");
    });
    builder.addCase(getAllDanhMucApi.rejected, (state, action) => {
      console.log("Tôi bị lỗi");
    });
  },
});

export const {} = danhMucSlice.actions;

export default danhMucSlice.reducer;
