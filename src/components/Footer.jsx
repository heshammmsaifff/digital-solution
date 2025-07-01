import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer
      className="footer-section py-3 text-center text-white"
      data-aos="fade-up"
      data-aos-duration="600"
    >
      <div className="container">
        <p className="mb-1">
          &copy; {new Date().getFullYear()} Sprint Code. جميع الحقوق محفوظة.
        </p>
        <p className="small">تصميم وتطوير بواسطة فريقنا المحترف</p>
      </div>
    </footer>
  );
};

export default Footer;
