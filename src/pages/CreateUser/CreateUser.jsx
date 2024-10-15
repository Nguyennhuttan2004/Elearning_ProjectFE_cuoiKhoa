import React, { useEffect, useState } from "react";
import InputCustom from "../../components/Input/InputCustom";
import { Select, Space } from "antd";
import { skillService } from "../../services/skill.service";
import { nguoiDungService } from "../../services/nguoiDung.service";
import { useSelector } from "react-redux";

const CreateUser = () => {
  const [listSkill, setListSkill] = useState([]);
  const [userValue, setUserValue] = useState({
    taiKhoan: "",
    matKhau: "",
    hoTen: "",
    soDT: "",
    maNhom: "",
    email: "",
    skill: [],
    certification: [],
  });
  const [step, setStep] = useState(0);
  const [isActive, setIsActive] = useState(true);

  // useState upload hình ảnh
  const [uploadImage, setUploadImage] = useState(null)

  // useState kiểm tra dung lượng của hình ảnh 
  const [errorImage, setErrorImage] = useState("")

  const { user } = useSelector(state => state.authSlice)
  console.log(user)
  const handleChangeValue = (event) => {
    const { name, value } = event.target; // email
    setUserValue({ ...userValue, [name]: value });
  };

  const handleSubmitFormCreateUser = (event) => {
    event.preventDefault();
    console.log(userValue);
    nguoiDungService
      .createUser(userValue)
      .then((res) => {
        console.log(res);
        // đẩy người tạo tới trang upload hình ảnh để thêm hình vào
        // setStep(step + 1);
        setIsActive(false)
        // Sử dụng useContext để lấy phương thức thông báo thành công
      })
      .catch((err) => {
        console.log(err);
        // Sử dụng useContext để lấy phương thức thông báo lỗi hiển thị
      });
  };

  const handleSubmitAvatar = (event) => {
    event.preventDefault()
    let formData = new FormData()
    if (uploadImage) {
      formData.append("formFile", uploadImage.image)
      nguoiDungService.uploadAvatar(user.token, formData).then((res) => {
        console.log(res)
      }).catch((err) => {
        console.log(err)
      })
    }
  }

  const renderLayoutForm = () => {
    switch (step) {
      case 0:
        return (
          <form onSubmit={handleSubmitFormCreateUser} className="space-y-3">
            <InputCustom
              contentLabel="Name"
              onChange={handleChangeValue}
              name="name"
            />
            <InputCustom
              contentLabel="Email"
              onChange={handleChangeValue}
              name="email"
            />
            <InputCustom
              contentLabel="Phone"
              onChange={handleChangeValue}
              name="phone"
            />
            <InputCustom
              contentLabel="Password"
              type="password"
              onChange={handleChangeValue}
              name="password"
            />
            <div>
              <label
                htmlFor=""
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Ngày sinh
              </label>
              <input
                value={userValue.birthday.split("-").reverse().join("-")}
                type="date"
                onChange={(event) => {
                  // const arrDate = event.target.value.split("-").reverse().join("-")
                  // mm/dd/yyyy
                  // yyyy/mm/dd
                  // dd/mm/yyyy

                  // yyyy/mm/dd

                  // 2024-08-20

                  const [year, month, day] = event.target.value.split("-");
                  // 15-08-2024
                  let valueDate = `${day}-${month}-${year}`;
                  console.log(`${day}-${month}-${year}`);
                  setUserValue({ ...userValue, birthday: valueDate });
                }}
              />
            </div>
            <div>
              <label
                htmlFor="countries"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Gender
              </label>
              <select
                name="gender"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                onChange={handleChangeValue}
              >
                <option value={true}>Nam</option>
                <option value={false}>Nữ</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="countries"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Role
              </label>
              <select
                name="role"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                onChange={handleChangeValue}
              >
                <option value="ADMIN">Admin</option>
                <option value="USER">User</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="countries"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Chọn Skill
              </label>
              <Select
                mode="multiple"
                allowClear
                style={{
                  width: "100%",
                }}
                placeholder="Please select"
                options={listSkill}
                onChange={(value) => {
                  console.log(value);
                  setUserValue({ ...userValue, skill: value });
                }}
              />
            </div>
            <div>
              <label
                htmlFor="countries"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Chọn Certification
              </label>
              <Select
                mode="tags"
                allowClear
                style={{
                  width: "100%",
                }}
                placeholder="Please select"
                tokenSeparators={[","]}
                onChange={(value) => {
                  console.log(value);
                  setUserValue({ ...userValue, certification: value });
                }}
              />
            </div>
            <div>
              <button
                type="submit"
                className="px-5 py-2 bg-black text-white rounded-md"
              >
                Tạo người dùng
              </button>
            </div>
          </form>
        );
      case 1:
        return <div>
          <form onSubmit={handleSubmitAvatar} className="space-y-2">
            <h2>Upload hình ảnh cho người dùng</h2>
            <div>
              <label
                htmlFor=""
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Hinh anh
              </label>
              <input accept="image/png, image/jpeg" type="file" onChange={(event) => {
                console.log(event.target.files[0])
                const image = event.target.files[0]
                if (image) {
                  // kiểm tra dung lượng hình, nếu lớn hơn 10MB thì thông báo lỗi và không nhận hình ảnh
                  if (image.size > 4 * 1024 * 1024) {
                    setErrorImage("Hình vượt quá dung lượng cho phép")
                    return
                  }
                  const imageUrl = URL.createObjectURL(image)
                  console.log(imageUrl)
                  setUploadImage({ image, imageUrl })
                  setErrorImage("")
                }
              }}
              />
            </div>
            <p className="text-red-500">{errorImage}</p>
            <img src={uploadImage?.imageUrl} alt="" className="w-32" />
            <button type="submit" className="py-2 px-5 bg-green-600 text-white rounded-md">Upload hình ảnh</button>
          </form>
        </div>;
    }
  };

  useEffect(() => {
    skillService
      .getAllSkill()
      .then((res) => {
        console.log(res);
        const newListSkill = res.data.content.map((skill, index) => {
          return {
            label: skill.tenSkill,
            value: skill.tenSkill,
          };
        });
        setListSkill(newListSkill);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h2 className="font-semibold text-3xl mb-5">
        Form tạo người dùng trong hệ thống
      </h2>
      {renderLayoutForm()}

      <button
        disabled={isActive}
        onClick={() => {
          setStep(step + 1);
        }}
        className={`py-2 px-5 bg-black text-white rounded mt-5 ${isActive ? "cursor-not-allowed bg-black/70" : ""
          }`}
      >
        Chuyển tới bước tiếp theo
      </button>
    </div>
  );
};

export default CreateUser;
