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
      name: "",
      email: "",
      password: "",
      phone: "",
      birthday: "",
      gender: "",
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
            navigate("/dang-nhap")
          }, 2000)
        })
        .catch((err) => {
          console.log(err);
          handleNotification(err.response.data.content, "error")
        });
    },
    validationSchema: yup.object({
      name: yup
        .string()
        .required(notiValidation.empty)
        .matches(/^[A-Za-zÀ-ỹà-ỹ\s]+$/, "Vui lòng nhập tên không chứa số"),
      email: yup
        .string()
        .required(notiValidation.empty)
        .email(notiValidation.email),
      password: yup
        .string()
        .required(notiValidation.empty)
        .matches(
          /^(?=.*[A-Z])(?=.*\d).+$/,
          "Vui lòng nhập ít nhất 1 chữ cái viết hoa và số"
        ),
      phone: yup
        .string()
        .required(notiValidation.empty)
        .matches(/^(0|\+84)[3|5|7|8|9][0-9]{8}$/, "Vui lòng nhập đúng sdt"),
      birthday: yup.string().required(notiValidation.empty),
      gender: yup.string().required(notiValidation.empty),
    }),
  });
  return (
    <div className="flex items-center justify-center flex-col h-full">
      <h1>Form đăng ký</h1>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-wrap">
          {/* name  */}
          <InputCustom
            onChange={handleChange}
            value={values.name}
            contentLabel={"Họ tên"}
            name="name"
            placeHolder="Vui lòng nhập tên"
            classWrapper="w-1/2 p-3"
            onBlur={handleBlur}
            touched={touched.name}
            error={errors.name}
          />
          {/* email  */}
          <InputCustom
            onChange={handleChange}
            value={values.email}
            contentLabel={"Email"}
            name="email"
            placeHolder="Vui lòng nhập email"
            classWrapper="w-1/2 p-3"
            onBlur={handleBlur}
            touched={touched.email}
            error={errors.email}
          />
          {/* password  */}
          <InputCustom
            onChange={handleChange}
            value={values.password}
            contentLabel={"Mật khẩu"}
            name="password"
            placeHolder="Vui lòng nhập mật khẩu"
            classWrapper="w-full p-3"
            type="password"
            onBlur={handleBlur}
            touched={touched.password}
            error={errors.password}
          />
          {/* phone  */}
          <InputCustom
            onChange={handleChange}
            value={values.phone}
            contentLabel="Số điện thoại"
            name={"phone"}
            placeHolder="Vui lòng nhập SDT"
            classWrapper="w-1/3 p-3"
            onBlur={handleBlur}
            touched={touched.phone}
            error={errors.phone}
          />
          <div className="w-1/3 p-3">
            <label className="block mb-2 text-sm font-medium text-gray-900 ">
              Ngày sinh
            </label>
            <DatePicker
              className="w-full"
              format="DD-MM-YYYY"
              onChange={(dayjs, dateString) => {
                setFieldValue("birthday", dateString);
              }}
            />
            {errors.birthday && touched.birthday ? (
              <p className="text-red-500">{errors.birthday}</p>
            ) : null}
          </div>
          <div className="w-1/3 p-3">
            <label className="block mb-2 text-sm font-medium text-gray-900 ">
              Giới tính
            </label>
            <select
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              name="gender"
              value={values.gender}
              onChange={handleChange}
            >
              <option value="">Vui lòng chọn giới tính</option>
              <option value="Nam">Nam</option>
              <option value="Nữ">Nữ</option>
            </select>
            {errors.gender && touched.gender ? (
              <p className="text-red-500">{errors.gender}</p>
            ) : null}
          </div>
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
