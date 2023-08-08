import React, {useState} from "react";


function OtpValidate(){
    const [otp, setOtp] = useState('');


  return(
    <div className="contain">
    <div className="logo">
      <img src="./com.jackumeme1.png" alt="logo" />
      <h2 className="logo-text ">Jack Umeme</h2>
    </div>

    <div>
    <div className="auth-msg"><p>Please enter the verification code sent to this phone number</p></div>
      <form className="signup-group">
        
        <div className="otp">
        <input className=" form-control otp-styles mb-4 d-inline  " type="text"/>
        <input className=" form-control otp-styles mb-4 d-inline " type="text"/>
        <input className=" form-control otp-styles mb-4 d-inline " type="text"/>
        <input className=" form-control otp-styles mb-4 d-inline " type="text"/>
        <input className=" form-control otp-styles mb-4 d-inline" type="text"/>

        <div className="otp-actions">
        <p1>Re-send Code</p1>
        <span style={{position:'relative', left:'65px'}}>Change Phone Number</span>
        </div>
        </div>

        
        
        
        <button className="btn d-block mx-auto  phone-confirm-btn  " type="submit">Send Code</button>
      </form>
    </div>
  </div>
  )
}

export default OtpValidate