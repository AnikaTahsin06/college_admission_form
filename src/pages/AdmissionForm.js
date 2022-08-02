import React from "react";
import "./AdmissionForm.css";

const AdmissionForm = () => {
  return (
    <form method="POST" className="form">
      <div className="page">
        <div className="page-header">
          <h1>College Admission Form</h1>
          <br />
          <span>
            If you'd like to apply to our college, please fill in this College
            Admission Form and we will contact you as soon as possible.
          </span>
          <hr />
        </div>
      </div>
    </form>
  );
};

export default AdmissionForm;
