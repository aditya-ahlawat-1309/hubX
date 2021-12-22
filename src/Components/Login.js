import React,{useState} from 'react'
import "./Login.css";

import { useNavigate } from "react-router-dom";



const Login = ()  => {

const navigate = useNavigate();

  const [email,setEmail] = useState("");
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [section, setSection] = useState("");
  const [mobile, setMobile] = useState("");

const loginUser = async (e) => {
    e.preventDefault();
console.log("1");
    const res = await fetch("https://stormy-waters-66992.herokuapp.com/signin" ,{
      method : "POST",
      headers : {
        'Content-Type': 'application/json'
      },
      body:JSON.stringify({
        email,
        name,
        id,
        section,
        mobile
      })
    });

    const data = await res.json();

    try{
    if(
      res.status === 400 || 
       !data
      ) 
    {
      window.alert("Invalid Credentials");
      console.log(email 
        //+ name + id + section + mobile
        );
    }else{
      window.alert("Login Successful");
      navigate("/link");
    }

  }
  catch (err){
console.log(err);
  }
}

    return (
      <div className="login-div-NAlumni">
        <div>
          <form method="post">
            <div class="container-signin">
            



<div style={{color:"white"}}>
  <br />
  <br />
  <h1> Login</h1>
  <hr />
</div>



          
              <label for="password" className="label-login" style={{marginTop:"-5.5%"}}>
                <b>Name</b>
              </label>
              <br />
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Enter Name"
                name="password"
                required
                className="input-login"
              />
             <br/>
              <label for="password" className="label-login">
                <b>College ID : ( Roll No. )</b>
              </label>
              <br />
              <input
                value={id}
                onChange={(e) => setId(e.target.value)}
                type="text"
                placeholder="Enter College ID"
                name="password"
                required
                className="input-login"
              />
          <br/>
              <label for="Email" className="label-login">
                <b>Section</b>
              </label>
              <br />
              <input
                value={section}
                onChange={(e) => setSection(e.target.value)}
                type="text"
                placeholder="Enter Email"
                name="Email"
                required
                className="input-login"
              />
             <br/>
              
              <label for="Mobile" className="label-login">
                <b>Mobile</b>
              </label>
              <br />
              <input
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                type="text"
                placeholder="Enter Your Mobile Number"
                name="password"
                required
                className="input-login"
              />
            <br/>
           
              <label for="Email" className="label-login">
                <b>Email</b>
              </label>
              <br />
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                placeholder="Enter Email"
                name="Email"
                required
                className="input-login"
            />
              <br/>

              <button type="submit" onClick={loginUser} className='login-btn'>
                Login
              </button>
              <label></label>
            </div>
          </form>
          

          <a href="/" className='login-home'>Home</a>
        </div>
        <img src="https://wallpaperaccess.com/full/871179.jpg" 
width="100%"
        />
      </div>
    );
}

export default Login
