import React, { useEffect, useState } from "react";
import { Avatar, message } from "antd";
import { UserOutlined } from "@ant-design/icons"; // Thêm dòng này
import axios from "axios";

const UserInfo = () => {
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get('https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThongTinNguoiDung'); 
        setUserData(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
        message.error("Không thể tải thông tin người dùng.");
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="user-info-container">
      <h1 className="text-2xl font-bold">Thông tin người dùng</h1>
      <div className="user-info">
        <Avatar size={64} icon={<UserOutlined />} />
        <div className="info-details">
          <h2 className="text-xl">{userData.name}</h2>
          <p>Email: {userData.email}</p>
          <p>Số điện thoại: {userData.phone}</p>
          <p>Địa chỉ: {userData.address || "Chưa có thông tin"}</p>
          <p>Ngày sinh: {userData.birthDate || "Chưa có thông tin"}</p>
        </div>
      </div>
      <button className="edit-button">Chỉnh sửa thông tin</button>
    </div>
  );
};

export default UserInfo;