import React, {useState} from "react";
import './Components.css';

function SignIn() {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword]= useState('');

    return(
        <div className="contain">
            <div className="logo">
                <img src="./com.jackumeme1.png" alt="logo" />
                <h2 className="logo-text ">Jack Umeme</h2>
            </div>
            <div>
            <form  className="form-group mt-1">
                <label className="my-2">Phone Number</label>
                <input className="form-control input-styles" type="text" onChange={(e)=>e.target.value}/>
                <label className="my-2">Password</label>
                <input className="form-control input-styles"type="password" onChange={(e)=>e.target.value}/>
                <p className="my-2">Forgot Password</p>
                <button className="btn d-block mx-auto  login-btn  " type="submit">Login</button>
                <button className="btn d-block mx-auto guest">Continue as Guest</button>

            </form>
        </div>
        </div>
    )
}

export default SignIn