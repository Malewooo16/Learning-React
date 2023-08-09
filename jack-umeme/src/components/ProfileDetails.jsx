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
            <p>Profile Details</p>

            <div>
            <form>
                <label>First Name</label>
                <input className='form-control name' type="text" />

                <label>Last Name</label>
                <input className='form-control name' type="text" />

                
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
          <label htmlFor="female"> Female</label>


            </form>
            </div>
        </div>
    )
}

export default ProfileDetails