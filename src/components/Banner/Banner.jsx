import React from 'react'
import banner from "../../assets/images/avatar.jpg"
import '../Banner/banner.css'
const Banner = () => {
  return (
    <section className="banner">
  <div className="container">
    <div className="banner_content">
      <div className="banner_content_text">
        <h1 className="text-center wow animate__animated animate__fadeInUp">ELearning</h1>
        <p className="text-center wow animate__animated animate__fadeInUp animate__delay-2s">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut,
          eligendi!
        </p>
      </div>
      <div className="banner_content_image">
        <img src={banner} alt />
      </div>
    </div>
  </div>
</section>

  )
}

export default Banner