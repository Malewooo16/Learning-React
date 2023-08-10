import React , { useState } from "react";
import './desktop.css'

function DesktopLogin (){



    return(
        <div style={{display:'flex', flexDirection:'row', width:'100%'}}>
            <div className="desktop-logo">
               <img src="./com.jackumeme1.png" alt="logo" />
               <p>Jack Umeme</p>
            </div>

            <div className="desktop1"> 
            
            <div className="login-desktop">
                <p style={{fontSize:'50px', fontWeight:500}}>Welcome Back</p>
                <p style={{fontSize:'30px', marginBottom:'20px'}}> Please Enter Your Details</p>

                <form action="submit">
                    <label className="d-block">Email</label>
                    <input type="email"  />

                    <label style={{marginTop:'5%'}} className="d-block">Password</label>
                    <input  type="password"  />

                    <button className="btn d-block login-btn  " type="submit"> Complete </button>
                </form>
            </div>
            </div>
               
            <div className="desktop2">
            <img src="./com.jackumeme1.png" alt="logo"/>
            </div>
        </div>
    )
}

export default DesktopLogin