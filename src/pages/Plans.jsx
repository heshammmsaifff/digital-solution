import React from "react";
import PlansComponent from "../components/Plans";
import { Link } from "react-router-dom";

const Plans = () => {
  return (
    <main>
      <PlansComponent />
      <div className="text-center mt-5 mb-4">
        <Link to="/" className="btn btn-outline-dark">
          الرجوع إلى الصفحة الرئيسية
        </Link>
      </div>
    </main>
  );
};

export default Plans;
