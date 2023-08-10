import React , { useState } from "react";
import './desktop.css'


function DesktopLogin (){



    return(
        <div style={{display:'flex', flexDirection:'row', width:'100%', marginTop:'20%'}}>
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
            <img src="https://s3-alpha-sig.figma.com/img/2a28/42c4/2ff3f1f06ce1a0618b7ebce7faea08f4?Expires=1692576000&Signature=gKCfHJio61ctVw8KZI6v~oyVkDqmQKEZodZrpYS0L4rq1qI0HpbJTvQoD3i~HRz2cTdLOFMdxEz-sblSifDG6q8kuuEWKp-duC1mslIez79CC-VCLe6VKVIQWgEvpnO~Nzj7rPQ00awC3yiwWGoZBurjxQGuQEnRvGhZKE~qEHxSCtUYIzRYtRCBM1Po~1nsbxFy5X0Ueags86~sK8Zsw2wjZRyiVM4MHnTqLe4nHqGKOGskliU49I7a4c6n978bhCklqSj39JrQa9lD62tXlHFlQcrKyKsJNQS9fpw6FzyVrI5DJZM5RXd-mqIJGF1OezyqtbBcOl8gjGUgQQAPkg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="logo"/>
            </div>

            
            {/* <Link to='/Mobile'>
              <button className="btn route-btn">To Mobile</button>
            </Link> */}

        </div>
    )
}

export default DesktopLogin