import React, {useState} from "react";
import OtpValidate from "./OtpValidate";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import './Components.css'

function AuthContainer(){
    const [activeComponent, setActiveComponent] = useState(0);

    const goToNext=()=>{
        setActiveComponent((prev)=>(prev+1+3)%3)
    }
    const goToPrevious = ()=>{
        setActiveComponent((prev)=>(prev-1+3)%3)
    }

    return(
        <div className="contain">
            {activeComponent===0 && <SignIn/>}
            {activeComponent===1 && <SignUp/>}
            {activeComponent===2 && <OtpValidate/>}

            <button onClick={goToPrevious} className="btn prev-btn"> <i className="fa-solid fa-arrow-left" style={{color: '#000000'}}></i> Previous</button>
            <button onClick={goToNext} className="btn next-btn">Next <i className="fa-solid fa-arrow-right" style={{color:'#ffffff'}}></i></button>
            
        </div>
    )
}

export default AuthContainer