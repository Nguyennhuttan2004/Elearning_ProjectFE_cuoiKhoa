import React, { useContext } from "react";
import InputCustom from "../Input/InputCustom";
import { DatePicker } from "antd";
import { useFormik } from "formik";
import * as yup from "yup";
import { notiValidation } from "../../common/notiValidation";
import { authService } from "../../services/auth.service";
import { NotificationContext } from "../../App";
import { useNavigate } from "react-router-dom";
const FormRegister = () => {
  const { handleNotification } = useContext(NotificationContext)
  const navigate = useNavigate()
  // let validationRegister = yup.object({
  //   name: yup.string().required(notiValidation.empty).matches(/^[A-Za-zÀ-ỹà-ỹ]+$/, "Vui lòng nhập tên không chứa số"),
  //   email: yup.string().required(notiValidation.empty).email(notiValidation.email),
  //   password: "",
  //   phone: "",
  //   birthday: "",
  //   gender: ""
  // })

  // let validationLogin = yup.object({
  //   name: yup.string().required(notiValidation.empty).matches(/^[A-Za-zÀ-ỹà-ỹ]+$/, "Vui lòng nhập tên không chứa số"),
  //   email: yup.string().required(notiValidation.empty).email(notiValidation.email),

  // })
  // NV1, thực hiện bóc tách ra các thuộc tính values, errors, handleChange,handleBlur,handleSubmit,touched để setup vào các field của form (done)
  // NV2, thực hiện khai báo các initialValues sẽ có cho formik và thực hiện kiểm tra nhập dữ liệu vào xem onsubmit có lấy được dữ liệu tất cả form hay không
  // NV3, thực hiện xử lí validation cho các field của form đang có (validation tuỳ ý)
  const {
    values,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    touched,
    setFieldValue,
  } = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
      hoTen: "",
      soDT: "",
      maNhom: "GP01",
      email: "",
    },
    onSubmit: (values) => {
      console.log(values);
      // values.gender = values.gender == "Nam" ? true : false
      authService
        .signUp({ ...values, gender: values.gender == "Nam" ? true : false })
        .then((res) => {
          console.log(res);
          // B1. Thực hiện thông báo cho người dùng
          handleNotification("Chúc mừng tạo tài khoản thành công, bạn sẽ được chuyển hướng về đăng nhập", "success")
          setTimeout(() => {
            navigate("/login")
          }, 2000)
        })
        .catch((err) => {
          console.log(err);
          handleNotification(err.response.data.content, "error")
        });
    },
    validationSchema: yup.object({
      hoTen: yup
        .string()
        .required(notiValidation.empty)
        .matches(/^[A-Za-zÀ-ỹà-ỹ\s]+$/, "Vui lòng nhập tên không chứa số"),
      email: yup
        .string()
        .required(notiValidation.empty)
        .email(notiValidation.email),
      matKhau: yup
        .string()
        .required(notiValidation.empty)
        .matches(
          /^(?=.*[A-Z])(?=.*\d).+$/,
          "Vui lòng nhập ít nhất 1 chữ cái viết hoa và số"
        ),
      soDT: yup
        .string()
        .required(notiValidation.empty)
        .matches(/^(0|\+84)[3|5|7|8|9][0-9]{8}$/, "Vui lòng nhập đúng sdt"),
      taiKhoan: yup
      .string()
      .required(notiValidation.empty)
      .matches(/^[a-zA-Z0-9_]{5,15}$/, "Vui lòng nhập ký tự chữ cái (a-z), chữ số (0-9), dấu gạch dưới (_), và độ dài từ 5 đến 15 ký tự"),
     
      
    }),
  });
  return (
    <div className="flex items-center justify-center flex-col h-full">
      <h1 className="font-bold text-4xl mb-10">Form đăng ký</h1>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-wrap">
          {/* name  */}
          <InputCustom
            onChange={handleChange}
            value={values.hoTen}
            contentLabel={"Họ tên"}
            name={"hoTen"}
            placeHolder="Vui lòng nhập tên"
            classWrapper="w-1/2 p-3"
            onBlur={handleBlur}
            touched={touched.hoTen}
            error={errors.hoTen}
          />
          {/* email  */}
          <InputCustom
            onChange={handleChange}
            value={values.email}
            contentLabel={"Email"}
            name={"email"}
            placeHolder="Vui lòng nhập email"
            classWrapper="w-1/2 p-3"
            onBlur={handleBlur}
            touched={touched.email}
            error={errors.email}
          />
          {/* password  */}
          <InputCustom
            onChange={handleChange}
            value={values.matKhau}
            contentLabel={"Mật khẩu"}
            name={"matKhau"}
            placeHolder="Vui lòng nhập mật khẩu"
            classWrapper="w-full p-3"
            type="password"
            onBlur={handleBlur}
            touched={touched.matKhau}
            error={errors.matKhau}
          />
          {/* phone  */}
          <InputCustom
            onChange={handleChange}
            value={values.soDT}
            contentLabel="Số điện thoại"
            name={"soDT"}
            placeHolder="Vui lòng nhập SDT"
            classWrapper="w-1/3 p-3"
            onBlur={handleBlur}
            touched={touched.soDT}
            error={errors.soDT}
          />

          <InputCustom
            onChange={handleChange}
            value={values.taiKhoan}
            contentLabel="Tai khoan"
            name={"taiKhoan"}
            placeHolder="Vui lòng nhập Tai Khoan"
            classWrapper="w-1/3 p-3"
            onBlur={handleBlur}
            touched={touched.taiKhoan}
            error={errors.taiKhoan}
          />
       
          
         
          <div className="w-full p-3">
            <button
              type="submit"
              className="py-3 px-6 bg-black text-white rounded-md w-full"
            >
              Đăng ký
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FormRegister;
