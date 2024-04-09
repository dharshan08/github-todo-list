import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login=()=>{
    const navigate= useNavigate();
    const [name,setName]=useState("");
    const [password,setPassword]=useState("");
    const handleSignUp=()=>{
        navigate("/signup");
    }
    const handleLogin= async ()=>{
        try{
            const response = await axios.get("http://localhost:4000/users");

            if(response.status === 200 && response.data[0].name === name && response.data[0].password === password){
                console.log("Login succesful");
                navigate("/home");
            }
            else{
                console.log("Login failed");
            }

        }catch(error){
            console.error("Error loggin in",error);
        }
    };
return(
<div id="loginCard" className="loginCard">
<h1>Login Page</h1>
<div id="inputs" className="inputs">
<input placeholder="enter your username "className="nameInput" type="text" onChange={(e)=> setName(e.target.value)}/>
<input placeholder="enter your password "className="passwordInput" type="password" onChange={(e)=> setPassword(e.target.value)}/>
</div>
<div className="buttons">
<button className="login" onClick={handleLogin}>Login</button>
<button className="signup" onClick={handleSignUp}>Sign Up</button>
</div>

</div>
)
}

export default Login;