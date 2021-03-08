import '../signup/signup.css';
import axios from 'axios';
import url from 'url';



function Forget1 () {
    


    axios({
        method: 'post',
        url: url + "/auth/forget-password",
        data: {
            // email: document.getElementById("your-email").value,
        }
        // ,withCredentials: true
    })
    // .then((response) => {
    //     console.log(response);
    //     alert(response.data.message);
    //     window.location.href = "forget2.jsx"
    // }, (error) => {
    //     console.log(error);
    //     alert(error)
    // });
    
    
    return(
        <div>
            
            
                <fieldset className="frm">
                    <legend>Forgetten Password</legend>
                    <label>Your Email</label>
                    <input type="email" class="input" id="Your-email" placeholder="jhon_doe@example.com"/>
                    <button className="btn1">Next</button>
                </fieldset>
            
        
        </div>
    )
    
}

export default Forget1;