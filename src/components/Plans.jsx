import React, { useState } from "react";
import "./Plans.css";
import ContactModal from "./ContactModal";

const plans = [
  {
    title: "باقة البداية",
    price: "1500 جنيه",
    features: [
      "موقع تعريفي 3 صفحات",
      "تصميم متجاوب",
      "تسليم خلال 5 أيام",
      "دومين مجاني (سنة)",
    ],
  },
  {
    title: "باقة الشركات",
    price: "2500 جنيه",
    features: [
      "بروفايل شركة متكامل",
      "تواصل مباشر على واتساب",
      "إيميل رسمي",
      "استضافة مجانية 3 شهور",
    ],
  },
  {
    title: "باقة التطبيقات",
    price: "ابتداءً من 4000 جنيه",
    features: [
      "تطبيق Android / iOS",
      "واجهة عربية وإنجليزية",
      "دعم فني 3 شهور",
      "رفع على Google Play",
    ],
  },
];

const Plans = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <section className="plans-section py-5" id="plans">
      <div className="container text-center">
        <h2 className="mb-4" data-aos="fade-up">
          باقات الأسعار
        </h2>
        <div className="row">
          {plans.map((plan, index) => (
            <div
              className="col-md-4 mb-4"
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <div className="card plan-card h-100 p-4 shadow-sm">
                <h5 className="fw-bold">{plan.title}</h5>
                <h4 className="text-primary">{plan.price}</h4>
                <ul className="list-unstyled mt-3 mb-4 text-start">
                  {plan.features.map((f, i) => (
                    <li key={i}>✔ {f}</li>
                  ))}
                </ul>
                <button
                  className="btn btn-outline-primary mt-auto"
                  onClick={() => setShowModal(true)}
                >
                  احجز الآن
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ContactModal show={showModal} onClose={() => setShowModal(false)} />
    </section>
  );
};

export default Plans;
