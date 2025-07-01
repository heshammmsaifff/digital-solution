import React from "react";
import "./ProjectSteps.css";

const steps = [
  {
    icon: "bi-chat-dots-fill",
    title: "1. تواصل معنا",
    desc: "من خلال الواتساب أو الإيميل",
  },
  {
    icon: "bi-lightbulb-fill",
    title: "2. احكيلنا فكرتك",
    desc: "قلنا نوع المشروع واحتياجاتك بالتفصيل",
  },
  {
    icon: "bi-currency-dollar",
    title: "3. هنجهزلك عرض سعر",
    desc: "بنختار لك الخطة الأنسب والمدة المحددة",
  },
  {
    icon: "bi-rocket-takeoff-fill",
    title: "4. نبدأ التنفيذ",
    desc: "بنشتغل على فكرتك ونبعتلك تحديثات مستمرة",
  },
];

const ProjectSteps = () => {
  return (
    <section className="project-steps-section py-5" id="project-steps">
      <div className="container">
        <h2 className="text-center mb-5" data-aos="fade-up">
          ابدأ مشروعك في خطوات بسيطة
        </h2>

        {/* الخطوات */}
        <div className="row mb-5 justify-content-center" dir="rtl">
          {steps.map((step, index) => (
            <div
              className="col-md-6 col-lg-3 mb-4 d-flex align-items-stretch"
              key={index}
            >
              <div
                className="step-item w-100 text-center"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="step-icon mb-3">
                  <i className={`bi ${step.icon}`}></i>
                </div>
                <h5 dir="rtl">{step.title}</h5>
                <p dir="rtl" className="text-muted">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* البيانات المطلوبة */}
        <div
          className="bg-white rounded p-4 shadow-sm"
          dir="rtl"
          data-aos="fade-up"
        >
          <h5 className="mb-3 fw-bold">قبل ما نبدأ، جهز البيانات دي:</h5>
          <ul className="list-unstyled text-muted mb-0">
            <li> اسم النشاط أو الشركة</li>
            <li> نوع الخدمة المطلوبة (موقع، تطبيق، منيو...)</li>
            <li> الفئة المستهدفة والجمهور</li>
            <li> محتوى أو صور (لو متوفرة)</li>
            <li> روابط أو أمثلة مشابهة (اختياري)</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ProjectSteps;
