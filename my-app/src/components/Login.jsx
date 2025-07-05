import React, { useState,useRef } from "react";
import Header from "./Header";
import { checkValidate } from "../assets/Utility/constant";



const Login = () => {

const [isSignUp,setSignUp] = useState(true)
const [errorMessage, setErrorMessage] =useState()
const email = useRef(null)
const password = useRef(null)

const toggleSignUp =()=>{
  setSignUp(!isSignUp)
}

const handleButtonClick = ()=>{
 const message = checkValidate(email.current.value,password.current.value)
  setErrorMessage(message)
}

  return (
    <>
    <div>
    <Header/>
    <div className="absolute fixed">
    <img src="https://assets.nflxext.com/ffe/siteui/vlv3/0552717c-9d8c-47bd-9640-4f4efa2de663/537e2c5e-c750-4d4c-9f7a-e66fe93eb977/IN-en-20240701-POP_SIGNUP_TWO_WEEKS-perspective_WEB_b00eeb83-a7e8-4b5b-8ff7-86ed92c51caf_large.jpg" />

    </div>
    <form onSubmit={(e)=> e.preventDefault()} className="absolute w-3/12 bg-black/80 border-1 mx-auto right-0 left-0 my-30 p-12 text-white " >  
    <h1 className="text-2xl font-bold mb-3">{isSignUp ?  "Sign In":"Sign Up"}</h1>
    {!isSignUp &&(<input type="text" placeholder="Full Name" className="p-3 my-3 bg-gray-600 w-full rounded-lg" />)}
    <input ref={email} type="text" placeholder="Email" className="p-3 my-3 bg-gray-600 w-full rounded-lg" /> 
    <input ref={password} type="password" placeholder="Password" className="p-3 my-3 bg-gray-600 w-full rounded-lg" />
    <p className="m-2 text-red-500 text-lg font-bold">{errorMessage}</p>
      <button className="p-2 my-7 font-bold text-slate-50 bg-red-600 w-full rounded-lg" onClick={handleButtonClick}>{isSignUp ?  "Sign In":"Sign Up"}</button>
      <p className="pb-3 cursor-pointer hover:underline" onClick={toggleSignUp}>{isSignUp ?  "New To Netflix? Sign Up Now":"If Already Registered? Sign In Now"}</p>
    </form>
    </div>
    </>
     
  );
};

export default Login;
