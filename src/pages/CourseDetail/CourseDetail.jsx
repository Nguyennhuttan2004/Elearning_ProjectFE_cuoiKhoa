// src/pages/CourseDetail/CourseDetail.jsx
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Card,
  Row,
  Col,
  Typography,
  Tag,
  Button,
  Rate,
  Divider,
  List,
  Avatar,
  Space,
} from "antd";
import {
  UserOutlined,
  ClockCircleOutlined,
  BookOutlined,
  VideoCameraOutlined,
  DollarOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";
import { getCourseDetailApi } from "../../redux/courseDetailSlice";
import "./CourseDetail.css";

const { Title, Paragraph } = Typography;

const CourseDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { courseDetail } = useSelector((state) => state.courseDetailSlice);

  useEffect(() => {
    console.log(courseDetail)
      dispatch(getCourseDetailApi(id));
  }, [id]);

  return (
    <div>
      {courseDetail ? (<div className="course-detail-container"> 
      <Row gutter={[32, 32]}>
        <Col xs={24} lg={16}>
          <Card
            className="course-main-card"
            cover={
              <img
                alt={courseDetail.tenKhoaHoc}
                src={courseDetail.hinhAnh}
                className="course-image"
              />
            }
          >
            <Title level={2} className="course-title">
              {courseDetail.tenKhoaHoc}
            </Title>
            <Space className="course-meta" size={[0, 8]} wrap>
              <Tag icon={<UserOutlined />} color="blue">
                {courseDetail.nguoiTao?.hoTen}
              </Tag>
              <Tag icon={<ClockCircleOutlined />} color="green">
                {courseDetail.luotXem} lượt xem
              </Tag>
              <Rate disabled defaultValue={4.5} />
            </Space>
            <Paragraph className="course-description">
              {courseDetail.moTa}
            </Paragraph>
            <Divider />
            <Title level={4}>Nội dung khóa học</Title>
            <List
              itemLayout="horizontal"
              dataSource={courseDetail.noiDung || []}
              renderItem={(item) => (
                <List.Item>
                  <List.Item.Meta
                    avatar={<Avatar icon={<BookOutlined />} />}
                    title={item.tenBaiHoc}
                    description={item.moTa || "Mô tả ngắn về nội dung bài học"}
                  />
                </List.Item>
              )}
            />
          </Card>
        </Col>
        <Col xs={24} lg={8}>
          <Card className="course-info-card">
            <Title level={3}>Thông tin khóa học</Title>
            <ul className="course-info-list">
              <li>
                <CheckCircleOutlined /> <strong>Danh mục:</strong>{" "}
                {courseDetail.danhMucKhoaHoc?.tenDanhMucKhoaHoc}
              </li>
              <li>
                <CheckCircleOutlined /> <strong>Số học viên:</strong>{" "}
                {courseDetail.soLuongHocVien}
              </li>
              <li>
                <CheckCircleOutlined /> <strong>Ngày tạo:</strong>{" "}
                {courseDetail.ngayTao
                  ? courseDetail.ngayTao
                  : "Không có thông tin"}
              </li>
              <li>
                <CheckCircleOutlined /> <strong>Giá:</strong> <DollarOutlined />{" "}
                {courseDetail.giaKhoaHoc || "Miễn phí"}
              </li>
            </ul>
            <Button
              type="primary"
              size="large"
              block
              icon={<VideoCameraOutlined />}
              className="enroll-button bg-[#4682b4] text-white px-4 py-2 rounded-md hover:bg-[#36648B]"
            >
              Đăng ký học
            </Button>
          </Card>
        </Col>
      </Row>
       </div>) :  <div className="loading">Loading...</div> }
    
    </div>
  );
};

export default CourseDetail;
