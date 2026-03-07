import React, { useState } from "react";
import axios from "axios";

function Signup() {

  const [username,setUsername] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const handleSignup = async (e) => {

    e.preventDefault();

    try{

      const res = await axios.post("http://localhost:3002/signup",{
        username,
        email,
        password
      });

      localStorage.setItem("username",res.data.username);
      localStorage.setItem("userId",res.data.userId);

      window.location.href="http://localhost:3001";

    }
    catch(err){

      if(err.response && err.response.status===400){
        alert("Username or email already exists");
      }
      else{
        alert("Signup failed");
      }

    }

  };

  return(

    <div className="container d-flex justify-content-center align-items-center vh-100">

      <div className="card p-4 shadow-lg" style={{width:"400px"}}>

        <h3 className="text-center mb-4">Create Account</h3>

        <form onSubmit={handleSignup}>

          <div className="mb-3">

            <label>Username</label>

            <input
              type="text"
              className="form-control"
              onChange={(e)=>setUsername(e.target.value)}
              required
            />

          </div>

          <div className="mb-3">

            <label>Email</label>

            <input
              type="email"
              className="form-control"
              onChange={(e)=>setEmail(e.target.value)}
              required
            />

          </div>

          <div className="mb-3">

            <label>Password</label>

            <input
              type="password"
              className="form-control"
              onChange={(e)=>setPassword(e.target.value)}
              required
            />

          </div>

          <button className="btn btn-primary w-100">
            Sign Up
          </button>

        </form>

      </div>

    </div>

  );

}

export default Signup;