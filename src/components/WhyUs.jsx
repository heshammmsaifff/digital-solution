import React from "react";
import "./WhyUs.css";

const WhyUs = () => {
  return (
    <section className="whyus-section py-5" id="whyus">
      <div className="container text-center">
        <h2 className="mb-4" data-aos="fade-up">
          ليه تختارنا؟
        </h2>
        <p
          className="text-muted mb-5"
          style={{ maxWidth: "600px", margin: "0 auto" }}
          dir="rtl"
        >
          لأننا بنفهم السوق، ونشتغل على تفاصيل مشروعك كأنه مشروعنا. السرعة،
          الاحترافية، والدعم الفني المستمر هما اللي بيميزونا عن غيرنا.
        </p>

        <div className="row justify-content-center">
          <div
            className="col-md-4 mb-4"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <div className="whyus-card p-4 shadow-sm">
              <i className="fas fa-bolt fa-2x mb-3 text-primary"></i>
              <h5 dir="rtl">سرعة التنفيذ</h5>
              <p dir="rtl">نسلم موقعك في وقت قياسي بدون ما نضحّي بالجودة.</p>
            </div>
          </div>

          <div
            className="col-md-4 mb-4"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <div className="whyus-card p-4 shadow-sm">
              <i className="fas fa-mobile-alt fa-2x mb-3 text-success"></i>
              <h5 dir="rtl">تصميم متجاوب</h5>
              <p dir="rtl">
                موقعك هيشتغل بشكل ممتاز على الموبايل والتابلت والكمبيوتر.
              </p>
            </div>
          </div>

          <div
            className="col-md-4 mb-4"
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            <div className="whyus-card p-4 shadow-sm">
              <i className="fas fa-headset fa-2x mb-3 text-danger"></i>
              <h5 dir="rtl">دعم فني سريع</h5>
              <p dir="rtl">أي مشكلة بتتحل فورًا من خلال قنوات تواصل مباشرة.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
