import React, { useState } from "react";
import "../../style/App.css";
import Axios from "axios";
import { Link, useHistory } from "react-router-dom";

const Registration = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [ShowErrorMsg, setShowErrorMsg] = useState(true);
  const history = useHistory();
  const register = () => {
    if (name == "" || email == "" || password == "" || cpassword == "") {
      setIsButtonDisabled(false);
      setShowErrorMsg(false);
    } else {
      Axios.post("http://localhost:3005/register", {
        name: name,
        password: password,
        cpassword: cpassword,
        email: email,
      }).then(() => {
        history.push("/");
      });
    }
  };

  const tryTocheck = (e) => {};
  const loginPage = () => {
    history.push("/");
  };
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="px-8 py-6 mx-4 mt-4 text-left bg-white shadow-lg md:w-1/3 lg:w-1/3 sm:w-1/3">
          <h3 className="text-2xl font-bold text-center">Join us</h3>

          <div className="mt-4">
            <div>
              <label className="block" for="Name">
                Name
              </label>
              <input
                type="text"
                placeholder="Name"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
            <div className="mt-4">
              <label className="block" for="email">
                Email
              </label>
              <input
                type="text"
                placeholder="Email"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                required={true}
              />
            </div>
            <div className="mt-4">
              <label className="block">Password</label>
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <div className="mt-4">
              <label className="block">Confirm Password</label>
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                onChange={(e) => {
                  setCpassword(e.target.value);
                }}
              />
            </div>
            <span className="text-xs text-red-400" hidden={ShowErrorMsg}>
              Please Enter the all the records;
            </span>
            <div className="flex">
              <button
                className="w-full px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900"
                onClick={register}
                disabled={isButtonDisabled}
              >
                Create Account
              </button>
            </div>
            <div className="mt-6 text-grey-dark">
              <Link onClick={loginPage}>Already have an account? Log in</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Registration;
