import React from "react";
import "./ContactModal.css";

const ContactModal = ({ show, onClose }) => {
  if (!show) return null;

  return (
    <div className="custom-modal-backdrop">
      <div className="custom-modal-box">
        <h5>اختر وسيلة التواصل</h5>
        <div className="d-flex flex-column gap-3">
          <a
            href="https://wa.me/+201092141964"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-success"
          >
            واتساب
          </a>
          <a
            href="mailto:heshamsaif856@gmail.com"
            className="btn btn-outline-primary"
          >
            إيميل
          </a>
          <button className="btn btn-secondary" onClick={onClose}>
            ❌
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
