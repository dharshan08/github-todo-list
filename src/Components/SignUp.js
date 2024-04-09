import React,{useRef} from "react";
import "./SignUp.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SignUp= ()=>{
    const nameRef=useRef(null);
    const passwordRef= useRef(null);
    const navigate= useNavigate();
    const handleSignUp= async()=>{
        const username=nameRef.current.value;
        const password=passwordRef.current.value;

        try{
            const response = await axios.post("http://localhost:4000/register",{name: username,password:password});
            console.log("User registered successfully");
             
        }catch(error){
            console.error('Error registering user',error);
        }
    }
    const handleLogin=()=>{
        navigate("/");
    }
return(
<div id="loginCard" className="loginCard">
<h1>Sign Up</h1>
<div id="inputs" className="inputs">
<input placeholder="Name "className="nameInput" ref={nameRef}/>
<input placeholder="PassWord "className="passwordInput" ref={passwordRef}/>
</div>
<div className="buttons">
<button className="login" onClick={handleLogin}>Login</button>
<button className="signup" onClick={handleSignUp}>Sign Up</button>
</div>

</div>
)
}

export {SignUp};