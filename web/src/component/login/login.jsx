import '../signup/signup.css';

import axios from 'axios';
import url from 'url';


function Login(){
   

    axios({
        method: 'post',
        url: url + "/auth/login",
        data: {
            // email: document.getElementById("login-email").value,
            // password: document.getElementById("login-password").value,
        }, withCredentials: true
        
    })
    // .then((response) => {
    //     console.log(response);
    //     alert(response.data.message)
    //     window.location.href = "signup.jsx"
    // }, (error) => {
    //     console.log(error);
    //     alert(error)
    // });
    


    return (
        <div>
            <fieldset className="frm">
        <legend>Log In</legend>
        <label>Email :</label>
        <br/>
        <input type="email" className="input" name="email" id="login-email" required placeholder="Email Adress"/>
        <br/><br/>
        <label>Password :</label>
        <br/>
        <input type="password" className="input" name="password" id="login-password" required placeholder="Password"/>
        <br/><br/>
        <input type="checkbox"/>Remember Password?
        <br/>
        <button className="btn1" type="submit">Login</button><br/>
        <div className="sign">Don't Have An Account?SignUp Here</div>
        <div className="sign1">Forggten Pawword</div>
        </fieldset>
</div>

    )
}
export default Login;