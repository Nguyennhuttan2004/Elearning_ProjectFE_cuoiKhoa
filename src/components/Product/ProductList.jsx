import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Image, Spin, Alert, Card, Avatar, Tooltip } from "antd";
import { EyeOutlined, UserOutlined } from '@ant-design/icons';
import { getAllCourseApi } from "../../redux/courseSlice";

const ProductList = () => {
  const dispatch = useDispatch();
  const { listCourses, status, error } = useSelector((state) => state.courseSlice);

  const   getRandomImages = (idx) => {

    for (let i = 1; i <= listCourses.length; i++) {
        const randomId = Math.floor(Math.random() * listCourses.length) + 1; 
        return `https://picsum.photos/id/${randomId}/300/200`; 
    }
  }

  useEffect(() => {
    dispatch(getAllCourseApi());
  }, [dispatch]);

  if (status === 'loading') {
    return (
      <div className="flex justify-center items-center h-64">
        <Spin size="large" />
      </div>
    );
  }

  if (status === 'failed') {
    return (
      <Alert
        message="Lỗi"
        description={error || "Không thể tải danh sách khóa học. Vui lòng thử lại sau."}
        type="error"
        showIcon
      />
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center text-[#4682b4]">Danh sách khóa học</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {listCourses.map(({ maKhoaHoc, hinhAnh, tenKhoaHoc, nguoiTao, luotXem },index) => (
          <Link key={maKhoaHoc} to={`/course/${maKhoaHoc}`}>
            <Card
              hoverable
              cover={
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={hinhAnh}
                    alt={tenKhoaHoc}
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
    </div>
  );
};

export default ProductList;