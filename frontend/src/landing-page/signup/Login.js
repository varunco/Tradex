import React, { useState } from "react";
import axios from "axios";

function Login(){

const [email,setEmail] = useState("");
const [password,setPassword] = useState("");

const handleLogin = async (e)=>{

e.preventDefault();

try{

const res = await axios.post("http://localhost:3002/login",{
email,
password
});

console.log(res.data);

// save temporarily
localStorage.setItem("username",res.data.username);
localStorage.setItem("userId",res.data.userId);

// redirect with params
window.location.href=`http://localhost:3001/?userId=${res.data.userId}&username=${res.data.username}`;

}
catch{

alert("Invalid email or password");

}

};

return(

<div className="container d-flex justify-content-center align-items-center vh-100">

<div className="card shadow-lg p-4" style={{width:"400px"}}>

<h3 className="text-center mb-4">Login</h3>

<form onSubmit={handleLogin}>

<div className="mb-3">

<label className="form-label">Email</label>

<input
type="email"
className="form-control"
placeholder="Enter your email"
onChange={(e)=>setEmail(e.target.value)}
required
/>

</div>

<div className="mb-3">

<label className="form-label">Password</label>

<input
type="password"
className="form-control"
placeholder="Enter your password"
onChange={(e)=>setPassword(e.target.value)}
required
/>

</div>

<button type="submit" className="btn btn-primary w-100">
Login
</button>
<button
className="btn btn-secondary w-100 mt-3"
onClick={()=>{

  localStorage.clear();

  localStorage.setItem("userId","demo-user");
  localStorage.setItem("username","Guest");

  window.location.href =
  "http://localhost:3001/?userId=demo-user&username=Guest";

}}
>
Try Demo
</button>

</form>

</div>

</div>

);

}

export default Login;