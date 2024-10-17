import React, { useContext } from "react";
import { useLottie } from "lottie-react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { Input, Button, Form, Typography, Divider } from "antd";
import { UserOutlined, LockOutlined, GoogleOutlined, FacebookOutlined } from "@ant-design/icons";
import signInAnimation from "./../../assets/animation/signInAnimation.json";
import { authService } from './../../services/auth.service';
import { setValueUser } from "../../redux/authSlice";
import { NotificationContext } from "../../App";
import { notiValidation } from "../../common/notiValidation";

const { Title, Text } = Typography;

const setLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { handleNotification } = useContext(NotificationContext);
  
  const options = {
    animationData: signInAnimation,
    loop: true,
  };
  const { View } = useLottie(options);

  const formik = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
    },
    onSubmit: async (values) => {
      try {
        const result = await authService.signIn(values);
        setLocalStorage("user", result.data.content);
        dispatch(setValueUser(result.data.content));
        handleNotification("Đăng nhập thành công, bạn sẽ được chuyển hướng về trang chủ", "success");
        
        // Chuyển hướng ngay lập tức
        navigate("/");
      } catch (error) {
        // Hiển thị thông báo lỗi nếu thông tin đăng nhập không đúng
        handleNotification("Tài khoản hoặc mật khẩu không đúng. Vui lòng thử lại.", "error");
      }
    },
    validationSchema: yup.object({
      taiKhoan: yup
        .string()
        .required(notiValidation.empty)
        .matches(/^[a-zA-Z0-9_]{5,15}$/, "Tài khoản phải có 5-15 ký tự, chỉ bao gồm chữ cái, số và dấu gạch dưới"),
      matKhau: yup
        .string()
        .required("Vui lòng không bỏ trống")
        .min(6, "Mật khẩu phải có ít nhất 6 ký tự")
        .max(20, "Mật khẩu không được quá 20 ký tự"),
    }),
  });

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-lg">
        <div>
          <div className="w-full h-40 mb-36">{View}</div>
          <Title level={2} className="text-center">Đăng nhập vào tài khoản</Title>
          <Text className="block text-center text-gray-600">Chào mừng bạn trở lại! Vui lòng nhập thông tin đăng nhập.</Text>
        </div>
        <Form onFinish={formik.handleSubmit} className="mt-8 space-y-6">
          <Form.Item
            validateStatus={formik.errors.taiKhoan && formik.touched.taiKhoan ? "error" : ""}
            help={formik.touched.taiKhoan && formik.errors.taiKhoan}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Tài khoản"
              name={"taiKhoan"}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.taiKhoan}
            />
          </Form.Item>
          <Form.Item
            validateStatus={formik.errors.matKhau && formik.touched.matKhau ? "error" : ""}
            help={formik.touched.matKhau && formik.errors.matKhau}
          >
            <Input.Password
              prefix={<LockOutlined className="site-form-item-icon" />}
              placeholder="Mật khẩu"
              name={"matKhau"}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.matKhau}
            />
          </Form.Item>
          <Button type="primary" htmlType="submit" className="w-full" size="large">
            Đăng nhập
          </Button>
        </Form>
        <Divider plain>Hoặc đăng nhập với</Divider>
        <div className="flex justify-center space-x-4">
          <Button icon={<GoogleOutlined />} size="large">
            Google
          </Button>
          <Button icon={<FacebookOutlined />} size="large">
            Facebook
          </Button>
        </div>
        <div className="text-center mt-4">
          <Text className="text-gray-600">Chưa có tài khoản? </Text>
          <Link to="/register" className="text-blue-600 hover:text-blue-800">
            Đăng ký ngay
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;