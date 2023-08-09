import React, { useState} from "react";


function OtpValidate() {
  const [otpValues, setOtpValues] = useState(Array(5).fill(""));

  const handleInputChange = (index, value) => {
    if (value.match(/^\d*$/)) {
      const newOtpValues = [...otpValues];
      newOtpValues[index] = value;
      setOtpValues(newOtpValues);

      if (value !== "" && index < otpValues.length - 1) {
        const nextInput = document.getElementById(`otp-${index + 1}`);
        if (nextInput) {
          nextInput.focus();
        }
      }
    }
  };

  return (
    <div className="contain">
      <div className="logo">
        <img src="./com.jackumeme1.png" alt="logo" />
        <h2 className="logo-text ">Jack Umeme</h2>
      </div>

      <div>
        <div className="auth-msg">
          <p>Please enter the verification code sent to this phone number</p>
        </div>
        <form className="signup-group">
        <div className="otp">
            {otpValues.map((value, index) => (
              <input
                key={index}
                id={`otp-${index}`}
                className="form-control otp-styles mb-4 d-inline"
                type="text"
                maxLength="1"
                value={value}
                onChange={(e) => handleInputChange(index, e.target.value)}
              />
            ))}
            <div className="otp-actions">
              <p1>Re-send Code</p1>
              <span style={{ position: "relative", left: "65px" }}>
                Change Phone Number
              </span>
            </div>
          </div>

          <button
            className="btn d-block mx-auto  phone-confirm-btn  "
            type="submit"
          >
            Send Code
          </button>
        </form>
      </div>
    </div>
  );
}

export default OtpValidate;