import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  PhoneOutlined,
  MailOutlined,
  EnvironmentOutlined,
  RightOutlined,
  FacebookOutlined,
  LinkedinOutlined,
  TwitterOutlined,
  InstagramOutlined,
  UpOutlined
} from "@ant-design/icons";
import './footer.css';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <footer>
      <div className="container">
        <div className="footer_content">
          <div className="footer_item">
            <h4>Contact Us</h4>
            <ul className="footer_contact">
              <li>
                <PhoneOutlined />
                <a href="tel:0123456789">0123456789</a>
              </li>
              <li>
                <MailOutlined />
                <a href="mailto:info@example.com">info@example.com</a>
              </li>
              <li>
                <EnvironmentOutlined />
                <span>Nhóm 2</span>
              </li>
            </ul>
          </div>
          <div className="footer_item">
            <h4>Quick Links</h4>
            <ul>
              {["Home", "Courses", "About Us", "Contact"].map((link, index) => (
                <li key={index}>
                  <Link to="#"><RightOutlined /> {link}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer_item">
            <h4>Our Services</h4>
            <ul>
              {["Online Courses", "Certification", "Career Guidance", "24/7 Support"].map((service, index) => (
                <li key={index}>
                  <Link to="#"><RightOutlined /> {service}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer_item">
            <h4>Newsletter</h4>
            <p>Subscribe to our newsletter for updates</p>
            <div className="newsletter_form">
              <input type="email" placeholder="Your email" />
              <button type="submit">Subscribe</button>
            </div>
            <div className="social_icons">
              <Link to="#"><FacebookOutlined /></Link>
              <Link to="#"><LinkedinOutlined /></Link>
              <Link to="#"><TwitterOutlined /></Link>
              <Link to="#"><InstagramOutlined /></Link>
            </div>
          </div>
        </div>
      </div>
      <div className="footer_copyright">
        <div className="container">
          <p>
            © 2024 ELearning Platform. All Rights Reserved | Designed by
            <Link to="#"> Nhóm 2</Link>
          </p>
        </div>
      </div>
      {isVisible && (
        <div id="scrolltop" onClick={scrollToTop}>
          <button className="back_to_top" aria-label="Scroll to top">
            <UpOutlined />
          </button>
        </div>
      )}
    </footer>
  );
};

export default Footer;