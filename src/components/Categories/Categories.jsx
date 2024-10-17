import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card } from "antd";
import { BookOutlined } from "@ant-design/icons";
import { getAllDanhMucApi, getCoursesByCategoryApi } from "../../redux/danhMucSlice";

const Categories = () => {
  const dispatch = useDispatch();
  const { listDanhMuc } = useSelector((state) => state.danhMucSlice);
  const [courses, setCourses] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleClick = async (category) => {
    setSelectedCategory(category);
    const result = await dispatch(getCoursesByCategoryApi(category));
    if (result.payload && Array.isArray(result.payload)) {
      setCourses(result.payload);
    } else {
      console.error( result.payload);
    }
  };

  useEffect(() => {
    dispatch(getAllDanhMucApi());
  }, [dispatch]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center text-[#4682b4]">
        Danh mục khóa học
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {listDanhMuc.map(({ maDanhMuc, tenDanhMuc }) => (
          <div
            onClick={() => handleClick(maDanhMuc)}
            key={maDanhMuc}
            className="transition-transform transform hover:scale-105"
          >
            <Card
              hoverable
              className="h-full flex flex-col justify-between shadow-lg transition-all duration-300 hover:shadow-xl"
              style={{ borderRadius: '10px', overflow: 'hidden' }}
            >
              <div className="p-6">
                
                <h2 className="text-xl font-semibold mb-2">{tenDanhMuc}</h2>
                <p className="text-gray-600">Mã danh mục: {maDanhMuc}</p>
              </div>
              <div className="bg-gray-100 p-4 flex justify-between items-center">
                <span className="text-blue-600 font-semibold">Xem chi tiết</span>
              </div>
            </Card>
          </div>
        ))}
      </div>

      {selectedCategory && courses.length > 0 && (
        <div className="mt-8">
          <h2 className="text-2xl font-bold">Khóa học trong danh mục: {selectedCategory}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {courses.map(course => (
              <Card key={course.maKhoaHoc} title={course.tenKhoaHoc}>
                <p><strong>Mô tả:</strong> {course.moTa}</p>
                <p><strong>Giá:</strong> {course.gia}</p>
                <p><strong>Thời gian:</strong> {course.thoiGian}</p>
                <p><strong>Giảng viên:</strong> {course.giangVien}</p>
                <img src={course.hinhAnh} alt={course.tenKhoaHoc} className="w-full h-32 object-cover" />
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Categories;