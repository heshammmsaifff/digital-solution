import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <nav
      className="navbar navbar-expand-lg custom-navbar px-4 shadow-sm sticky-top"
      data-aos="fade-down"
      data-aos-duration="500"
    >
      <Link className="navbar-brand fw-bold" to="/">
        <div className="d-flex flex-column">
          <span style={{ color: "#00c6a7" }}>Sprint Code</span>
          <small>مواقع - تطبيقات - دعم فني</small>
        </div>
      </Link>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav me-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              الرئيسية
            </Link>
          </li>
        </ul>

        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/plans">
              باقات الأسعار
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/faq">
              الأسئلة الشائعة
            </Link>
          </li>

          {isHome && (
            <>
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
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
