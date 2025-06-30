import React from "react";
import "./FAQ.css";

const questions = [
  {
    question: "إزاي أبدأ تنفيذ مشروع معاكم؟",
    answer:
      "كل اللي عليك تبعتلنا فكرتك أو احتياجاتك من خلال واتساب أو الفورم، وهنرد عليك بخطة واضحة وسعر مناسب.",
  },
  {
    question: "الموقع بياخد وقت قد إيه؟",
    answer:
      "المواقع التعريفية بتسلم خلال 3 إلى 5 أيام، ولو في طلبات مخصصة ممكن تاخد وقت أطول حسب التفاصيل.",
  },
  {
    question: "هل الأسعار ثابتة؟",
    answer:
      "عندنا باقات ثابتة، لكن لو في متطلبات خاصة بنحدد السعر حسب كل مشروع.",
  },
  {
    question: "هل الموقع بيشتغل على الموبايل؟",
    answer:
      "أكيد! كل المواقع اللي بنشتغل عليها بتكون متجاوبة وبتشتغل على كل الأجهزة.",
  },
];

const FAQ = () => {
  return (
    <section className="faq-section py-5" id="faq">
      <div className="container">
        <h2 className="text-center mb-4" data-aos="fade-up">
          الأسئلة الشائعة
        </h2>
        <div className="accordion" id="faqAccordion">
          {questions.map((q, index) => (
            <div
              className="accordion-item mb-3"
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#faq${index}`}
                >
                  {q.question}
                </button>
              </h2>
              <div
                id={`faq${index}`}
                className="accordion-collapse collapse"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">{q.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
