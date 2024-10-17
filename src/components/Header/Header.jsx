import React, { useState } from "react"; 
import axios from "axios"; 
import { Link, useNavigate } from "react-router-dom"; // Thêm useNavigate
import { DownOutlined, UserOutlined } from "@ant-design/icons";
import { Dropdown, Space, Button, Avatar } from "antd";
import "./header.scss";
import LinkCustom from "../LinkCustom/LinkCustom";
import FormSearchProduct from "../FormSearchProduct/FormSearchProduct";

const Header = () => {
  const [searchTerm, setSearchTerm] = useState(""); 
  const navigate = useNavigate(); 

  const handleSearch = async () => {
    const maKhoaHoc = searchTerm; 
    if (!maKhoaHoc) {
      console.error("Mã khóa học không được định nghĩa.");
      return; 
    }

    navigate(`/list-job?tenKhoaHoc=${tenKhoaHoc}`);
  };

  const categories = [
    { key: "1", label: "Phát triển web" },
    { key: "2", label: "Thiết kế đồ họa" },
    { key: "3", label: "Marketing số" },
    { key: "4", label: "Kinh doanh" },
  ];

  return (
    <header className="bg-white shadow-md py-4">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <Link to="/" className="text-4xl font-bold text-[#4682b4]">
              ELearning
            </Link>
            <Dropdown
              menu={{ items: categories }}
              trigger={["click"]}
            >
              <Button>
                <Space>
                  Danh mục
                  <DownOutlined />
                </Space>
              </Button>
            </Dropdown>
            <FormSearchProduct 
              searchTerm={searchTerm} 
              setSearchTerm={setSearchTerm} 
              onSearch={handleSearch} 
            />
          </div>
          <nav className="flex items-center space-x-6">
            <LinkCustom
              content="Đăng nhập"
              to="/login"
              className="text-[#4682b4] hover:text-[#36648B]"
            />
            <LinkCustom
              content="Đăng ký"
              to="/register"
              className="bg-[#4682b4] text-white px-4 py-2 rounded-md hover:bg-[#36648B]"
            />
            <Avatar icon={<UserOutlined />} />
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;