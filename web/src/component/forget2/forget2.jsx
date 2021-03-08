import '../signup/signup.css';


import axios from 'axios';
import url from 'url';


function Forget2() {
   

    axios({
        method: 'post',
        url: url + "/auth/forget-password-step-2",
        data: {
            // email: document.getElementById("email2").value,
            // newPassword: document.getElementById("password2").value,
            // otp: document.getElementById("otp").value,
        }
        // ,withCredentials: true
    })
    // .then((response) => {
        
    //     console.log(response.data.message);
    //     alert(response.data.message);
    //     window.location.href = "login.jsx"
        
        
    // }, (error) => {
    //     console.log(error);
    // });
    return(
        <div>
              
<fieldset className="frm">
<legend>New Password</legend>
<label>Email</label>
<input type="email" className="input" id="email2" required placeholder="New password"/>
<label>ENTER OPT</label>
<input type="number" className="input" id="otp" placeholder="Enter OTP"/>
<label>New Password</label>
<input type="password" className="input" id="password2" required placeholder="New Password"/>
<button className="btn1" type="submit">Sumbit</button>
</fieldset>
        </div>

    )
    
}
export default Forget2;