import React from "react";
import "./Hero.css";
import heroImg from "../assets/hero-illustration.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <header className="hero-section py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 text-white text-center text-md-start">
            <h1
              data-aos="fade-right"
              className="display-5 fw-bold mb-3"
              dir="rtl"
            >
              حلول برمجية مبتكرة ومناسبة لاحتياجاتك
            </h1>
            <p data-aos="fade-left" className="lead mb-4" dir="rtl">
              بنقدملك خدمات تصميم مواقع وتطبيقات بشكل احترافي وسريع. سواء كنت
              صاحب مشروع، مطعم، فريلانسر، أو شركة متوسطة – إحنا جاهزين نساعدك.
            </p>

            <ul className="hero-points list-unstyled mb-4">
              <li data-aos="zoom-in">✅ مواقع وتطبيقات سريعة واحترافية</li>
              <li data-aos="zoom-in">✅ أسعار مرنة تناسب كل الميزانيات</li>
              <li data-aos="zoom-in">✅ استلم شغلك في وقت قياسي</li>
            </ul>
            <div className="d-flex flex-column flex-md-row gap-3 justify-content-center justify-content-md-start">
              <Link
                data-aos="fade-up"
                to="/faq"
                className="btn btn-outline-light btn-lg"
              >
                الأسئلة الشائعة
              </Link>
              <Link
                data-aos="fade-up"
                to="/plans"
                className="btn btn-outline-light btn-lg"
              >
                باقات الأسعار
              </Link>
            </div>
            <br />

            <a
              data-aos="fade-up"
              href="#contact"
              className="btn btn-primary btn-lg"
            >
              احجز استشارتك مجانًا
            </a>
          </div>

          <div className="col-md-6 text-center mt-4 mt-md-0" data-aos="zoom-in">
            <img
              src={heroImg}
              alt="خدمات برمجية"
              className="img-fluid hero-img"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
