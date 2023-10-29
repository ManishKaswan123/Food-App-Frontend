import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import '../Styles/login.css'

function ForgetPassword() {
    const history = useHistory();
    const [email, emailSet] = useState("");

    const handleForgetPassword=async()=>{
        try{
            const data=await axios.post("http://localhost:3000/user/forgetpassword",{
                email:email
            });
            history.push("http://localhost:3000/resetpassword")
        }
        catch(err){
            console.log(err);
        }
    }

    return (
        <div className="container-grey">
            <div className="form-container">
                <div className='h1Box'>
                    <h1 className='h1'>FORGET PASSWORD</h1>
                    <div className="line"></div>
                </div>
                <div className="loginBox">
                    <div className="entryBox">
                        <div className="entryText">Email</div>
                        <input className="email input" type="email" name="Email" placeholder="Your Email" required="" onChange={(e) => emailSet(e.target.value)} />
                    </div>
                    <button className="loginBtn  form-button" type="submit" onClick={handleForgetPassword}>
                        Send Email
                    </button>

                </div>
            </div>
        </div>
    )
}

export default ForgetPassword
