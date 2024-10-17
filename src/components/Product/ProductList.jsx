import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Image, Card, Avatar, Tooltip, Pagination } from "antd";
import { EyeOutlined, UserOutlined } from '@ant-design/icons';
import { getAllCourseApi, setPage } from "../../redux/courseSlice";
import './ProductList.css'; // Import file CSS tùy chỉnh

const ProductList = () => {
  const dispatch = useDispatch();
  const { listCourses, totalPages, currentPage } = useSelector((state) => state.courseSlice);
  
  useEffect(() => {
    dispatch(getAllCourseApi({ page: currentPage, pageSize: 10 })); // Fetch courses with pagination
  }, [dispatch, currentPage]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center text-[#4682b4]">Danh sách khóa học</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {listCourses.map(({ maKhoaHoc, hinhAnh, tenKhoaHoc, nguoiTao, luotXem }) => (
          <Link key={maKhoaHoc} to={`/course/${maKhoaHoc}`}>
            <Card
              hoverable
              cover={
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={hinhAnh}
                    alt={tenKhoaHoc}
                    fill={true}
                    className="object-cover w-full h-full transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                    <h2 className="text-white text-lg font-semibold truncate">{tenKhoaHoc}</h2>
                  </div>
                </div>
              }
              className="h-full flex flex-col"
            >
              <Card.Meta
                avatar={<Avatar icon={<UserOutlined />} />}
                title={nguoiTao.hoTen}
                description={nguoiTao.tenLoaiNguoiDung}
              />
              <div className="mt-4 flex justify-between items-center">
                <Tooltip title="Lượt xem">
                  <span className="flex items-center text-gray-600">
                    <EyeOutlined className="mr-1" /> {luotXem}
                  </span>
                </Tooltip>
                <span className="text-blue-600 font-semibold">Xem chi tiết</span>
              </div>
            </Card>
          </Link>
        ))}
      </div>
      <div className="pagination-container">
        <Pagination
          current={currentPage}
          total={totalPages * 10} // Assuming pageSize is 10
          onChange={(page) => {
            dispatch(setPage(page)); // Update current page
          }}
          showSizeChanger={false} // Ẩn tùy chọn thay đổi kích thước
          itemRender={(current, type, originalElement) => {
            if (type === 'prev') {
              return <button className="pagination-button">«</button>;
            }
            if (type === 'next') {
              return <button className="pagination-button">»</button>;
            }
            return originalElement;
          }}
        />
      </div>
    </div>
  );
};

export default ProductList;