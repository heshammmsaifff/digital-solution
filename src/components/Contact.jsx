// src/components/Contact.jsx

import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section id="contact" className="contact-section py-5">
      <div className="container text-center">
        <h2 className="mb-4" data-aos="zoom-out">
          تواصل معنا
        </h2>
        <p
          className="mb-4 text-muted custom-text"
          dir="rtl"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          جاهزين نسمع فكرتك أو نساعدك تبدأ مشروعك الجديد. ابعتلنا رسالة أو كلمنا
          مباشرة.
        </p>

        <a
          data-aos="zoom-in"
          href="https://wa.me/+201092141964"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-success btn-lg"
        >
          تواصل عبر واتساب
        </a>

        <div className="mt-4">
          <p className="small text-muted" dir="rtl" data-aos="fade-in">
            أو راسلنا على: heshamsaif856@gmail.com
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
