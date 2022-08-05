import React from "react";
import "./AdmissionForm.css";

const AdmissionForm = () => {
  return (
    <form method="POST" className="form">
      <div className="page">
        <div className="page-header">
          <h1>College Admission Form</h1>
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
                      className="check_box"
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
                      className="check_box"
                      value={"Computer Network Technician"}
                    />
                    <span className="option-text">
                      Computer Network Technician
                    </span>
                  </label>
                </div>
              </div>
              <div className="input-row">
                <div className="choice">
                  <label className="choice1">
                    <input
                      type="checkbox"
                      className="check_box"
                      value={"General Electrician"}
                    />
                    <span className="option-text">General Electrician</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="control">
              <label className="label">Full Name of Applicant</label>
              <div className="input-row">
                <input
                  className="applicant_box"
                  type="text"
                  placeholder="First"
                />

                <input
                  className="applicant_box margin1"
                  type="text"
                  placeholder="Middle"
                />

                <input
                  className="applicant_box margin1"
                  type="text"
                  placeholder="Last"
                />
              </div>
            </div>
          </div>
          <div className="container">
            <div className="control">
              <label className="label">Parent / Guardian's Name</label>
              <div className="input-row">
                <input
                  className="applicant_box"
                  type="text"
                  placeholder="First"
                />
                <input
                  className="applicant_box margin1"
                  type="text"
                  placeholder="Middle"
                />
                <input
                  className="applicant_box margin1"
                  type="text"
                  placeholder="Last"
                />
              </div>
            </div>
          </div>
          <div className="container">
            <div className="control">
              <label className="label">Parent / Guardian's Occupation</label>
              <div className="input-row">
                <input className="long_inputfield" type="text" />
              </div>
            </div>
          </div>
          <div className="container">
            <div className="control">
              <label className="label">Date of birth</label>
              <div className="input-row">
                <input
                  className="long_inputfield"
                  type="date"
                  placeholder="MM/DD/YYYY"
                />
              </div>
            </div>
          </div>
          <div className="container">
            <div className="control">
              <label className="label">Permanent Address</label>
              <div className="input-row">
                <input
                  className="long_inputfield"
                  type="text"
                  placeholder="Street Address"
                />
              </div>
              <div className="input-row">
                <input
                  className="address_half"
                  type="text"
                  placeholder="City"
                />
                <input
                  className="address_half margin2"
                  type="text"
                  placeholder="State"
                />
              </div>
              <div className="input-row">
                <input
                  className="address_half"
                  type="text"
                  placeholder="Postal/ Zip Code"
                />
                <input
                  className="address_half margin2"
                  type="text"
                  placeholder="Country"
                />
              </div>
            </div>
          </div>
          <div className="container">
            <div className="control">
              <label className="label">Applicant's Phone</label>
              <div className="input-row">
                <input
                  className="long_inputfield"
                  type="text"
                  placeholder="### ### ####"
                />
              </div>
            </div>
          </div>
          <div className="container">
            <div className="control">
              <label className="label">Parent / Guardian's Phone</label>
              <div className="input-row">
                <input
                  className="long_inputfield"
                  type="text"
                  placeholder="### ### ####"
                />
              </div>
            </div>
          </div>
          <div className="container">
            <div className="control">
              <label className="label">Academic Qualifications</label>
              <div className="input-row">
                <textarea className="academic"></textarea>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="control">
              <label className="label">Applicant's Signature</label>
              <div className="input-row">
                {/* <input className="signature" /> */}
                <canvas className="signature"></canvas>
                <div className="text-baseline"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="page-footer">
          <div className="control">
            <button className="submit" type="submit">
              SUBMIT THE COLLEGE ADMISSION FORM
            </button>
            <div class="abuse-disclaimer">
              Never submit sensitive information such as passwords.
              <b>
                <a href="google.com" target={"_blank"}>
                  Report abuse
                </a>
              </b>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default AdmissionForm;
