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
        <br />
        <br />
        <a
          data-aos="zoom-in"
          href="https://www.facebook.com/people/Sprint-Code-%D8%A8%D8%B1%D9%85%D8%AC%D8%A9-%D9%88-%D8%AA%D8%B5%D9%85%D9%8A%D9%85-%D9%85%D9%88%D8%A7%D9%82%D8%B9/61578134993287/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary btn-lg"
        >
          تابعنا على فيسبوك
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
