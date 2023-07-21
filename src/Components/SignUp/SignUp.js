import React, { useState } from "react";
import logo from "../../Images/logo.png";
import { TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { FiAlertCircle } from "react-icons/fi";

const SignUp = () => {
  // const navigate = useNavigate();

  const [userData, setUserData] = useState({
    Username: "",
    Email: "",
    Password: "",
  });

  const [error, setError] = useState({
    Username: false,
    Email: false,
    Password: false,
  })

  console.log('gggggggggg', error);

  const SignUp = (e) => {
    console.log("SignUp");
    e.preventDefault();

    // username validation
    if (userData.Username.length >= 3) {
      console.log(
        "userData.Username.length",
        userData.Username.length,
        error.Username
      );
      setError((previousError) => ({
        ...previousError,
        Username: false,
      }));
    }
    else {
      setError((previousError) => ({
        ...previousError,
        Username: true,
      }));
    }

    // Email validation
    // if (userData.Email.length >= 0) {

    //   setError((previousError) => ({
    //     ...previousError,
    //     Email: false,
    //   }));
    // }
    // else {
    //   setError((previousError) => ({
    //     ...previousError,
    //     Email: true,
    //   }));
    // }

    //password validation
    if (userData.Password.length >= 6) {
      setError((previousError) => ({
        ...previousError,
        Password: false,
      }));
    }
    else {
      setError((previousError) => ({
        ...previousError,
        Password: true,
      }));
    }

    if (
      error.Username === false &&
      error.Email === false &&
      error.Password === false
    ) {
      // navigate("/signin")
    }
  };

  const handleUsename = (e) => {
    console.log(
      "userData.Username.length",
      userData.Username.length,
      error.Username
    );

    if (e.target.value.length > 0) {
      setError((previousError) => ({
        ...previousError,
        Username: false,
      }));
    } else {
      setError((previousError) => ({
        ...previousError,
        Username: true,
      }));
    }
    setUserData({
      ...userData,
      Username: e.target.value,
    });
  };

  const handleEmail = (e) => {

    if (userData.Email.includes("@") &&
      userData.Email.includes(".") &&
      userData.Email.indexOf("@") != 0 &&
      userData.Email.length - userData.Email.lastIndexOf(".") >= 2) {
      setError((previousError) => ({
        ...previousError,
        Email: false,
      }));
    } else {
      setError((previousError) => ({
        ...previousError,
        Email: true,
      }));
    }
    setUserData({
      ...userData,
      Email: e.target.value,
    })
  }

  return (
    <div className="flex">
      <div className="w-1/3 h-screen bg-[#DAFFE4] rounded-r-3xl flex justify-center text-center items-center">
        <img src={logo} alt="" className="h-36 w-36" />
      </div>
      <div className="w-2/3 h-screen flex flex-wrap">
        <div className="flex flex-col justify-center items-center ml-[30%] gap-5">
          <h1 className="text-center text-3xl font-semibold pb-6 text-[#000000]">
            Sign Up
          </h1>

          <TextField
            id="outlined-basic"
            label="Username"
            variant="outlined"
            onChange={(e) => handleUsename(e)}
            InputProps={{
              endAdornment: error.Username && userData.Username.length == 0 ? (
                <FiAlertCircle className="text-red-700" />
              ) : (
                ""
              ),
            }}
            className="w-96 border p-2 border-[#6D6D6D] rounded-2xl"
          />
          {userData.Username.length > 0 &&
            userData.Username.length < 3 &&
            error.Username == false ? (
            <p className="pt-0 h-1 text-red-600"> Please Enter a valid Username.</p>
          ) : null}


          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            onChange={(e) => handleEmail(e)}
            InputProps={{
              endAdornment: error.Email == true ? (
                <FiAlertCircle className="text-red-700" />
              ) : (
                ""
              ),
            }}
            className="w-96 border p-2 border-[#6D6D6D] rounded-2xl"
          />
          {
            error.Email == true ? (
              <p className="pt-0 h-1 text-red-600"> Please Enter a valid Email.</p>
            ) : null}


          <TextField
            id="outlined-basic"
            label="Password"
            variant="outlined"
            onChange={(e) =>
              setUserData({
                ...userData,
                Password: e.target.value,
              })
            }
            className="w-96 border p-2 border-[#6D6D6D] rounded-2xl"
          // {error.Email ? <p> Password should contain a 6 character</p> : null}
          />

          {/* <input type="text" placeholder='Username' className='w-96 border p-2 border-[#6D6D6D] rounded-lg' />
              <input type="text" placeholder='Email' className='w-96 border p-2 border-[#6D6D6D] rounded-lg' />
              <input type="text" placeholder='Password' className='w-96 border border-[#6D6D6D] p-2 rounded-lg' /> */}

          <button
            onClick={SignUp}
            className="w-96 h-14 border text-[#FFFFFF] bg-[#076AFF] p-2 rounded-lg"
          >
            Sign Up
          </button>

          <p>
            <input type="checkbox" />
            By signing upyou agree to terms of service and privacy policy{" "}
          </p>
          <p>
            Already have an account ?{" "}
            <a href="/signin" className="text-[#076AFF]">
              {" "}
              Sign In{" "}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;