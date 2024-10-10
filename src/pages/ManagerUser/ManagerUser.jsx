import React, { useContext, useEffect } from 'react';
import { Space, Table, Tag } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { getValueUserApi } from '../../redux/nguoiDungSlice';
import { nguoiDungService } from '../../services/nguoiDung.service';
import { NotificationContext } from '../../App';


// Thực hiện tạo một service dùng quản lí các api về người dùng
// Cấu hình một phương thức dùng để xoá người dùng trong hệ thống (khi gọi tới phương thức cần truyền id của người dùng đang muốn xoá)
// Sau khi đã cấu hình phương thức, quay trở lại component manageruser và xử lí tạo sự kiện click tương tác với nút xoá dùng để xoá người dùng

const ManagerUser = () => {
  const {handleNotification } = useContext(NotificationContext)
  const dispatch = useDispatch()
  const { listUsers } = useSelector(state => state.nguoiDungSlice)
  console.log(listUsers)
  useEffect(() => {
    dispatch(getValueUserApi())
  }, [])
  const columns = [
    {
      title: 'Tai Khoan',
      dataIndex: 'taiKhoan',
      key: 'taiKhoan',
    },
    {
      title: 'Ho ten',
      dataIndex: 'hoTen',
      key: 'hoTen',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'sdt ',
      dataIndex: 'soDt',
      key: 'soDt',
    },
    {
      title: "Ma loai nguoi dung",
      dataIndex: "maLoaiNguoiDung",
      render: (text) => {
        console.log(text)
        return <Tag color={text == "HV" ? "blue" : "cyan"} >{text  == "HV" ? "Hoc Vien" : "Giang vien"}</Tag>
      }
    },
    // USER ADMIN
    
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle" className='space-x-3'>
          <button onClick={() => {
            nguoiDungService.deleteUSer(record.id).then((res) => {
              console.log(res)
              handleNotification(res.data.message,"success")
              dispatch(getValueUserApi())
            }).catch((err) => {
              console.log(err)
              handleNotification(err.response.data.message || err.response.data.content , "error")
              dispatch(getValueUserApi())
            })
          }} className='bg-red-500 text-white py-2 px-5 rounded-md hover:bg-red-500/90 duration-300'>Xoá</button>
          <button className='bg-yellow-500 text-white py-2 px-5 rounded-md hover:bg-yellow-500/90 duration-300'>Sửa</button>
        </Space>
      ),
    },
  ];
  return <Table columns={columns} dataSource={listUsers} />
};
export default ManagerUser;