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

<div>

<h2>Login</h2>

<form onSubmit={handleLogin}>

<input
type="email"
placeholder="email"
onChange={(e)=>setEmail(e.target.value)}
/>

<input
type="password"
placeholder="password"
onChange={(e)=>setPassword(e.target.value)}
/>

<button type="submit">
Login
</button>

</form>

</div>

);

}

export default Login;