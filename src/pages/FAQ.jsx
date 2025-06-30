import React from "react";
import FAQComponent from "../components/FAQ";
import { Link } from "react-router-dom";

const FAQ = () => {
  return (
    <main>
      <FAQComponent />
      <div className="text-center mt-5 mb-4">
        <Link to="/" className="btn btn-outline-dark">
          الرجوع إلى الصفحة الرئيسية
        </Link>
      </div>
    </main>
  );
};

export default FAQ;
