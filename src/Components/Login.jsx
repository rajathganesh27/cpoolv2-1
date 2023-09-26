import React from "react";
import { useNavigate } from "react-router-dom";


function Login()
{   
    const navigate=useNavigate();
    function handleClick()
    {
        navigate("/Selection");
    }

    return(
        <div className="mainbg bg-[#cdf0d5] h-screen py-36">
                <div className="container mx-auto ">
                    <div className="bg-white rounded-xl w-2/3 mx-auto shadow-sm overflow-hidden flex my-auto">
                        <div className="left w-1/2 bg-[#abe6b9] text-white px-10 py-8 flex flex-col items-center justify-center">
                            <h1 className="font-extrabold mb-6 text-xl mx-auto">
                                WELCOME
                            </h1>
                           
                            <div>
                                <p className="mx-auto">Don't have an account?</p>
                                <button onClick={handleClick} className="signupbtn font-bold my-4 py-4 px-4 bg-white text-black text-xl rounded-full w-40 mx-auto shadow-lg hover:bg-gray-200">SIGN UP</button>
                            </div>

                        </div>

                        <div className="right w-1/2 bg-white px-10 py-8">
                            <h1 className="font-extrabold mb-4 text-2xl">ENTER YOUR DETAILS</h1>
                            <form action="#">
                                <div className="inputbox flex flex-col">
                                    <p>Email</p>
                                    <input type="text" placeholder="Email or Username" className="px-4 py-2 rounded-md border border-black mb-4 shadow-xl" required></input>

                                    <p>Password</p>
                                    <input type="password" placeholder="Password" className="px-4 py-2 rounded-md border border-black mb-4 shadow-xl" required></input>
                                    <a href="#" className="hover:underline">Forgot your Password?</a>

                                    <button className="signinbtn font-bold my-4 py-4 px-4 bg-black text-white text-xl rounded-full w-40 mx-auto shadow-lg hover:bg-gray-800">SIGN IN</button>

                                </div>
                            </form>


                        </div>

                        
                    </div>    


                </div>
        </div>
    );
}

export default Login;