import React, { useState } from "react";
import "./Components.css";

function SignUp() {
  const [newPhone, setNewPhone] = useState("");

  return (
    <div className="contain">
      <div className="logo">
        <img src="./com.jackumeme1.png" alt="logo" />
        <h2 className="logo-text ">Jack Umeme</h2>
      </div>
        {/* cshine.bs@gmail.com */}
      <div>
        <form className="signup-group">
          <label>Phone Number</label>
          <input className="form-control input-styles mb-4 " type="text"/>
          
          <div className="auth-msg"><p>A verification code will be sent to this phone number</p></div>
          <button className="btn d-block mx-auto  phone-confirm-btn  " type="submit">Send Code</button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
