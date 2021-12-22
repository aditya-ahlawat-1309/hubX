import React , {useState} from 'react'
import "./Register.css" 

import { useNavigate } from "react-router-dom";




const Register = (props) => {

 

  const navigate = useNavigate();

  const [user,setUser] = useState(
    {
      Name:"",
      Email:"",
      Mobile:"",
      Section:"",
      Referrer:"CU 2019 batch Alumni",
     
      Id:"",
    }
  );




  let name,value;

  const handleInputs = (e) => {
       console.log(e);
       name=e.target.name;
       value = e.target.value;

       setUser({...user , [name]:value})
   }


   const PostData = async (e) => {
         e.preventDefault();
         
        //  Object Destructering instead of writing user.name
         const {Name , Email , Mobile , Section , Referrer , Id} = user;

        const res = await fetch("/register" , {
        
        method : "POST",
        headers:{
          "Content-Type" : "application/json"
        },

        body:JSON.stringify({
          Name , Email , Mobile , Section , Referrer , Id
        })

        });

        const data = await res.json();
        
        if(res.status === 422 
          || !data
          )
        {
          window.alert("Invalid Registration");
          console.log("Invalid");

        } 
        else{
          window.alert("Successful Registration");
          console.log("Successful");

          navigate("/login");
        }

   }

  return (
    <div class="box">
      {/* never use method in form */}
      <form>
        <div class="container" style={{ color: "white" }}>
          <br/>
          <br/>
          <h1>Register</h1>
          <p>Please fill in this form to create an account.</p>
          <hr />

          <label for="name" className="label-register" style={{marginTop:"-9%"}}>
            <b>Name</b>
          </label>
          <br />
          <input
            type="text"
            placeholder="Enter Name"
            name="Name"
            id="name"
            value={user.Name}
            onChange={handleInputs}
            required
            className="input-register"
          />
          <br />
          <label for="email" className="label-register">
            <b>Email</b>
          </label>
          <br />
          <input
            type="text"
            placeholder="Enter Email"
            name="Email"
            id="email"
            value={user.Email}
            onChange={handleInputs}
            required
            className="input-register"
          />
          <br />
          <label for="phone" className="label-register">
            <b>Mobile</b>
          </label>
          <br />
          <input
            type="text"
            placeholder="Enter Phone Number"
            name="Mobile"
            id="number"
            value={user.Mobile}
            onChange={handleInputs}
            required
            className="input-register"
          />
          <br />
          <label for="work" className="label-register">
            <b>Section</b>
          </label>
          <br />

          <input
            type="text"
            placeholder="Enter Work Place"
            name="Section"
            id="work"
            value={user.Section}
            onChange={handleInputs}
            required
            className="input-register"
          />
          <br />

          <label for="work" className="label-register">
            <b>College ID</b>
          </label>
          <br />

          <input
            type="text"
            placeholder="Enter Work Place"
            name="Id"
            id="work"
            value={user.Id}
            onChange={handleInputs}
            required
            className="input-register"
          />
          <br />

          {/* <label for="psw">
            <b>Referrer</b>
          </label>
          <input
            type="text"
            placeholder="Enter Password"
            name="password"
            id="psw"
            value={user.Referrer}
            onChange={handleInputs}
            required
            readOnly
          /> */}
          <hr />
          <p>
            By creating an account you agree to our{" "}
            <a href="#" style={{ color: "yellow", textDecoration: "none" }}>
              Terms & Privacy
            </a>
            .
          </p>

          <button type="submit" className="register-btn" onClick={PostData}>
            Register
          </button>
          <br />
          <a href="/" className="register-back">
            Back
          </a>
        </div>

        {/* <div class="container signin">
          <p>
            Already have an account? <a href="/login">Sign in</a>.
          </p>
        </div> */}
      </form>
    </div>
  );
}

export default Register
