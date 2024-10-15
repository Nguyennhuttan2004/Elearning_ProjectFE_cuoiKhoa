import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Card, Spin, Alert, Tooltip } from "antd";
import { BookOutlined, TeamOutlined } from '@ant-design/icons';
import { getAllDanhMucApi } from "../../redux/danhMucSlice";

const Categories = () => {
  const dispatch = useDispatch();
  const { listDanhMuc, status, error } = useSelector((state) => state.danhMucSlice);

  useEffect(() => {
    dispatch(getAllDanhMucApi());
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
        description={error || "Không thể tải danh mục. Vui lòng thử lại sau."}
        type="error"
        showIcon
      />
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Danh mục khóa học</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {listDanhMuc.map(({ maDanhMuc, tenDanhMuc }) => (
          <Link key={maDanhMuc} to={`/courses?category=${maDanhMuc}`}>
            <Card
              hoverable
              className="h-full flex flex-col justify-between shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="p-6">
                <div className="text-4xl text-blue-500 mb-4">
                  <BookOutlined />
                </div>
                <h2 className="text-xl font-semibold mb-2">{tenDanhMuc}</h2>
                <p className="text-gray-600">Mã danh mục: {maDanhMuc}</p>
              </div>
              <div className="bg-gray-100 p-4 flex justify-between items-center">
                <Tooltip title="Số khóa học">
                  <span className="flex items-center text-gray-600">
                    <TeamOutlined className="mr-2" /> 
                    {/* Thay số này bằng số khóa học thực tế nếu có */}
                    10+ khóa học
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

export default Categories;