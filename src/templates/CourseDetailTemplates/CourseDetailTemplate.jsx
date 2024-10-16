import React from 'react'
import CourseDetail from '../../pages/CourseDetail/CourseDetail'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import { Outlet } from 'react-router-dom'

const CourseDetailTemplate = () => {
  return (
    <>
    <Header />
    <main>
    <Outlet />
    </main>
    {/* Course Detail goi 2 lan nen useEffect se chay 2 lan */}
    <Footer />
    </>
  )
}

export default CourseDetailTemplate