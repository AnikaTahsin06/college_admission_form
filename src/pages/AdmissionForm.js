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
        <div className="page-body">
          <div className="container">
            <div className="control">
              <label className="label">Program Applied for:</label>
              <div className="input-row">
                <div className="choice">
                  <label className="choice">
                    <input
                      type="checkbox"
                      className="i123-input"
                      value={"Computer Hardware Technician"}
                    />
                    <span className="option-text">
                      Computer Hardware Technician
                    </span>
                  </label>
                </div>
              </div>
              <div className="input-row">
                <div className="choice">
                  <label className="choice">
                    <input
                      type="checkbox"
                      className="i123-input"
                      value={"Computer Hardware Technician2"}
                    />
                    <span className="option-text">
                      Computer Hardware Technician2
                    </span>
                  </label>
                </div>
              </div>
              <div className="input-row">
                <div className="choice">
                  <label className="choice">
                    <input
                      type="checkbox"
                      className="i123-input"
                      value={"Computer Hardware Technician3"}
                    />
                    <span className="option-text">
                      Computer Hardware Technician3
                    </span>
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="control">
              <label className="label">Full Name of Applicant</label>
              <div className="input-row">
                <input className="i123-input" type="text" placeholder="First" />
                <input
                  className="i123-input"
                  type="text"
                  placeholder="Middle"
                />
                <input className="i123-input" type="text" placeholder="Last" />
              </div>
            </div>
          </div>
          <div className="container">
            <div className="control">
              <label className="label">Parent / Guardian's Name</label>
              <div className="input-row">
                <input className="i123-input" type="text" placeholder="First" />
                <input
                  className="i123-input"
                  type="text"
                  placeholder="Middle"
                />
                <input className="i123-input" type="text" placeholder="Last" />
              </div>
            </div>
          </div>
          <div className="container">
            <div className="control">
              <label className="label">Parent / Guardian's Occupation</label>
              <div className="input-row">
                <div className="input-container">
                  <input className="i123input" type="text" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default AdmissionForm;
