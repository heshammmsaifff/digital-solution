import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg custom-navbar px-4 shadow-sm sticky-top"
      data-aos="fade-down"
      data-aos-duration="500"
    >
      <a className="navbar-brand fw-bold">
        <div className="d-flex flex-column">
          <span style={{ color: "#00c6a7" }}>Digital Solutions</span>
          <small>مواقع - تطبيقات - دعم فني</small>
        </div>
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <Link className="nav-link" to="/plans">
            باقات الأسعار
          </Link>
          <Link className="nav-link" to="/faq">
            الأسئلة الشائعة
          </Link>
          <li className="nav-item">
            <a className="nav-link" href="#services">
              خدماتنا
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#contact">
              تواصل معنا
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#whyus">
              ليه تختارنا ؟
            </a>
          </li>
          <Link className="nav-link" to="/">
            الرئيسية
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
