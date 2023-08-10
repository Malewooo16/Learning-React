import React, {useState} from "react";
import './Components.css'

function ProfileDetails (){
    const [regData, setRegData] = useState('');
    const [selectedGender, setSelectedGender]= useState('')

    const handleGenderChange = (event) => {
        setSelectedGender(event.target.value);
      };

    return(
        <div className="contain">
            <p className="prof-detail">Profile Details</p>

            <div className="reg-box">
            <form className="reg-form">
                <label>First Name</label>
                <input className='name' type="text" />

                <label>Last Name</label>
                <input className='name' type="text" />

                
          <div className="radio">
            <label style={{marginBottom:'2px'}} className="d-block">Gender</label>
          <input
            type="radio"
            id="male"
            name="gender"
            value="male"
            onChange={handleGenderChange}
            checked={selectedGender === "male"}
          />
          <label htmlFor="male">Male</label>

          <input
            type="radio"
            id="female" 
            name="gender"
            value="female"
            onChange={handleGenderChange}
            checked={selectedGender === "female"}
          />
          <label style={{marginLeft:'40px'}} htmlFor="female"> Female</label>
          </div>

          <label className="d-block">Password </label>
          <input  type="password" name="pass" id="pass" />

          <label> Confirm Password </label>
          <input  type="password" name="pass" id="pass" />
          <button className="btn d-block mx-auto  login-btn  " type="submit"> Complete </button>
            </form>
            </div>
        </div>
    )
}

export default ProfileDetails