import React, { useState } from 'react'
import logo from '../../Images/logo.png'
import { TextField } from "@mui/material";
import { useNavigate } from 'react-router-dom';

function SignIn() {

    const navigate = useNavigate()

    const [userData, setUserData] = useState({
        Username: "", Password: ""
    })

    const [error, setError] = useState({
        Username: true,
        Password: true
    })

    const [submit, setSubmit] = useState(false);
    // const [success setSuccess] = useState(false);

    const SIgnIn = (e) => {
        console.log("signin")
        e.preventDefault();
        // navigate('/dashboard')

        // //username validation
        // if (userData.Username.length >= 3) {
        //     setError((previousError) => ({
        //         ...previousError,
        //         Username: false
        //     }))
        // }
        // else {
        //     setError((previousError) => ({
        //         ...previousError,
        //         Username: true
        //     }))
        // }

        // //password validation
        // if (userData.Password.length >= "6") {
        //     setError((previousError) => ({
        //         ...previousError,
        //         Password: false
        //     }))
        // }
        // else {
        //     setError((previousError) => ({
        //         ...previousError,
        //         Password: false
        //     }))
        // }

        if (error.Username === false &&
            error.Password === false) {
            navigate('/dashboard')
        }

    }

    return (
        <div className='flex'>
            <div className='w-1/3 bg-[#DAFFE4] rounded-r-3xl flex justify-center text-center items-center'>
                <img src={logo} alt="" className='h-36 w-36' />
            </div>
            <div className='w-2/3 h-screen flex flex-wrap'>
                <form className="flex flex-col justify-center items-center ml-[30%] gap-5">
                    <h1 className="text-center text-3xl font-semibold pb-6 text-[#000000]">Sign In</h1>
                    <TextField id="outlined-basic"
                        type='text'
                        label="Username"
                        variant="outlined"
                        value={userData.Username}
                        onChange={(e) =>
                            setUserData({ ...userData, Username: e.target.value })
                        }
                        className='w-96 border p-2 border-[#6D6D6D] rounded-2xl'
                        />
                        {/* {error.Username ? <p>Enter valid username</p> : null} */}

                    <TextField
                        id="outlined-basic"
                        type='password'
                        label="Password"
                        variant="outlined"
                        value={userData.Password}
                        onChange={(e) =>
                            setUserData({ ...userData, Password: e.target.value })
                        }
                        className='w-96 border p-2 border-[#6D6D6D] rounded-2xl'
                    />
                    {/* {error.Password ? <p> Password should contain a 6 character</p> : null} */}

                    {/* <input type="text" placeholder='Username' className='w-96 h-14 border p-2 border-[#6D6D6D] rounded-lg' />
                    <input type="text" placeholder='Password' className='w-96 h-14 border p-2 border-[#6D6D6D] rounded-lg' /> */}

                    <button onClick={SIgnIn} className='w-96 h-14 text-[#FFFFFF] bg-[#076AFF] p-2 rounded-lg'>Sign In</button>
                    {/* <Link to={/}/> */}
                    <a href="/" className='text-[#076AFF]'>Forget Password</a>
                    <p>Dont have an account ? <a href="/dashboard" className='text-[#076AFF]'> Sign Up </a></p>
                </form>
            </div>
        </div>
    )
}

export default SignIn
