import React from "react";
import "./Services.css";

const servicesList = [
  {
    icon: "fas fa-globe",
    title: "مواقع إلكترونية",
    description: "تصميم وتطوير مواقع احترافية للأفراد والشركات",
  },
  {
    icon: "fas fa-building",
    title: "مواقع شركات",
    description:
      "بروفايلات شركات كاملة مع صفحات متعددة وتكامل مع واتساب أو البريد",
  },
  {
    icon: "fas fa-user",
    title: "مواقع تعريفية لفريلانسرز ومصورين",
    description: "عرض خدماتك وأعمالك بشكل جذاب على موقع شخصي متجاوب",
  },

  {
    icon: "fas fa-utensils",
    title: "منيو إلكتروني تفاعلي",
    description:
      "تحويل منيو الكافيه أو المطعم لموقع تفاعلي بواجهة بسيطة وكود QR",
  },
  {
    icon: "fas fa-file-code",
    title: "تحويل PDF أو صور لمواقع",
    description:
      "نحوّل ملفاتك الثابتة إلى مواقع تفاعلية جذابة قابلة للتصفح على كل الأجهزة",
  },
  {
    icon: "fas fa-id-card",
    title: "سير ذاتية ومواقع شخصية",
    description: " تصميم CV ديناميكي أونلاين يعرض خبراتك ومشاريعك بشكل احترافي",
  },
  {
    icon: "fas fa-headset",
    title: "دعم فني للشركات",
    description: "حلول سريعة للمشاكل التقنية ودعم مستمر للمواقع والتطبيقات",
  },
];

const Services = () => {
  return (
    <section id="services" className="services-section py-5">
      <div className="container text-center">
        <h2 className="mb-4">خدماتنا</h2>
        <p
          className="text-muted mb-5"
          style={{ maxWidth: "600px", margin: "0 auto" }}
          dir="rtl"
        >
          في Sprint Code، بنقدملك حلول برمجية متكاملة تناسب احتياجاتك، سواء كنت
          شركة، فريلانسر، أو صاحب مشروع ناشئ. اختار من بين خدمات متنوعة تم
          تصميمها بعناية لتناسب مجالك.
        </p>

        <div className="row">
          {servicesList.map((service, index) => (
            <div
              className="col-md-6 col-lg-4 mb-4"
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <div className="card service-card h-100 shadow-sm text-center">
                <div className="card-body">
                  <i className={`${service.icon} fa-2x mb-3 text-primary`}></i>
                  <h5 dir="rtl" className="card-title fw-bold">
                    {service.title}
                  </h5>
                  <p dir="rtl" className="card-text">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
