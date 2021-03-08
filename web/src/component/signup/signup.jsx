// import {
//     useHistory
// } from "react-router-dom";
import "./signup.css";
import axios from "axios";

import { UseGlobalState, UseGlobalStateUpdate } from '../../context/context'
import { BaseURL } from "../Url/BaseUrl";
import { useHistory } from "react-router-dom";
// import classes from '@material-ui/core/classes';

// import response from 'response';

function Signup() {
    const setGlobalState = UseGlobalStateUpdate()
    const globalState = UseGlobalState();
    let history = useHistory();

  function signup() {
    //  event.preventDefault();

    console.log("clicked");
    var userName = document.getElementById("name1").value;
    var userEmail = document.getElementById("email1").value.toLowerCase();
    var userPhone = document.getElementById("Number").value;
    var userPassword = document.getElementById("password1").value;
    // var userGender = document.getElementById("gender").value;
    // console.log(userEmail)
    var userData = {
      userName: userName,
      userEmail: userEmail,
      userPhone: userPhone,
      userPassword: userPassword,
      //   userGender: userGender,
    };
    console.log(userData);
    axios({
      method: "post",
      url: BaseURL + "/signup",
      data: userData,
      withCredentials: true,
    })
      .then(function (response) {
        console.log(response);
        if (response.data.status === 200) {
          alert(response.data.message);
          console.log(response.data);
          //   history.push("/login");
        } else {
          alert(response.data.message);
          console.log(response.data);
        }
      })
      .catch(function (error) {
        alert(error);
      });

    // document.getElementById("name").value = "";
    // document.getElementById("email").value = "";
    // document.getElementById("phone").value = "";
    // document.getElementById("password").value = "";
    // document.getElementById("gender").value = "";
    return false;
  }
  return (
    <>
      <div>
        <form onSubmit={signup()}>
          <fieldset className="frm">
            <legend>Sign Up</legend>
            <label>User Name :</label>
            <br />
            <input
              type="text"
              className="input"
              name="name"
              id="name1"
              required
              placeholder="User Name..."
            />
            <br />
            <label>Email :</label>
            <br />
            <input
              type="email"
              className="input"
              name="email"
              id="email1"
              required
              placeholder="Email Adress..."
            />
            <br />
            <label>Password :</label>
            <br />
            <input
              type="password"
              className="input"
              name="password1"
              id="password"
              required
              placeholder="Password..."
            />
            <br />
            <label>Phone :</label>
            <br />
            <input
              type="number"
              className="input"
              name="Number"
              id="Number"
              required
              placeholder="Phone Number..."
            />
            <br />
            <label> Nationalty:</label>
            <br />
            <select className="input" id="nationalty">
              <option value="Pakistan">Pakistan</option>
              <option value="Afghanistan">Afghanistan</option>
              <option value="Balgium">Balgium</option>
              <option value="Canada">Canada</option>
              <option value="Iran">Iran</option>
              <option value="India">India</option>
              <option value="China">China</option>
              <option value="Japan">Japan</option>
              <option value="America">America</option>
              <option value="Englend">Englend</option>
            </select>
            <br />
            <label>Gender :</label>
            <br />
            <select name="Gender" className="input" id="gender" required>
              <option value="Male" className="input">
                Male
              </option>
              <option value="Female" className="input">
                Female
              </option>
            </select>
            <br />
            <br />
            <input type="checkbox" required />i Accept The All Trums And policy
            <br />
            <br />
            <button className="btn">Submit</button>
            <div className="login">Have An Account?Login Here</div>
          </fieldset>
        </form>
      </div>
    </>
  );
}

export default Signup;
