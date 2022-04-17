import "../../style/App.css";
import React, { useState } from "react";
import Axios from 'axios';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Registration from "../Registration/registration";
import { useHistory } from "react-router-dom"
function Login() {
  const history = useHistory()
  const [userName, setUserName]=useState('')
  const [password, setPassword]=useState('')
  const [status, setStatus] = useState('');

  const validateData = () =>{
    Axios.post("http://localhost:3005/login", {
      name: userName,
      password: password,
    }).then((response) => {
        
if(response.data.message){
  setStatus(response.data.message)
}
else{
  history.push("/admin");
}
    });
  };
  const getRegistrationPage = ()=>{
     history.push('/registration');
  }
  return (
    <div className="w-full h-screen flex">
      <img
        src="https://images.unsplash.com/photo-1540569876033-6e5d046a1d77?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
        alt="background"
        class="object-cover object-center h-screen w-7/12"
      />
      <div className="bg-white flex flex-col justify-center items-center w-5/12 shadow-lg">
        <h1 className="text-3xl font-bold text-orange-500 mb-2">LOGIN</h1>
        <h1 className="text-3xl font-bold text-orange-500 mb-2">{status}</h1>
        <div className="w-1/2 text-center">
          <input
            type="text"
            name="username"
            placeholder="username"
            autocomplete="off"
            className="shadow-md border w-full h-10 px-3 py-2 text-orange-500 focus:outline-none focus:border-orange-500 mb-3 rounded"
            onChange={(e)=>{
              setUserName(e.target.value);
            }}
          />
          <input
            type="password"
            name="password"
            placeholder="password"
            autocomplete="off"
            className="shadow-md border w-full h-10 px-3 py-2 text-orange-500 focus:outline-none focus:border-orange-500 mb-3 rounded"
            onChange={(e)=>{
              setPassword(e.target.value);
            }}
          />
          <button class="bg-orange-500 hover:bg-orange-600 text-white px-3 py-1 rounded text-lg focus:outline-none shadow"
          onClick={validateData}
          >
            Sign In
          </button>
          <Link onClick={getRegistrationPage}>Don't have an account? Register</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
