import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import axios from 'axios';

const ListJobPage = () => {
  const [searchParam] = useSearchParams();
  const [courseInfo, setCourseInfo] = useState(null); 
  const [error, setError] = useState(null); 

  useEffect(() => {
    const tenKhoaHoc = searchParam.get("tenKhoaHoc"); 
    const fetchCourseInfo = async () => {
      try {
        const response = await axios.get(`https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?tenKhoaHoc=${tenKhoaHoc}`);
        setCourseInfo(response.data); 
        setError(null); 
      } catch (error) {
        console.error("Error fetching course information:", error);
        setError("Không thể lấy thông tin khóa học. Vui lòng thử lại."); 
      }
    };
    if (tenKhoaHoc) { 
      fetchCourseInfo(); 
    }
  }, [searchParam]); 

  const renderCourseInfo = () => {
    if (!courseInfo) return null; 
    return (
      <div className='course-info'>
        <h2>{courseInfo.tenKhoaHoc}</h2>
        <img src={courseInfo.hinhAnh} alt={courseInfo.tenKhoaHoc} />
        <p>{courseInfo.moTa}</p>
        <span>Giá: ${courseInfo.giaTien}</span>
      </div>
    );
  }

  return (
    <div className='container'>
      {error && <div className="error-message">{error}</div>} 
      {renderCourseInfo()} 
    </div>
  )
}

export default ListJobPage;