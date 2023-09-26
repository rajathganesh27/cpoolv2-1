import React from "react";
import { useNavigate } from "react-router-dom";

function DriverSignup()
{
    const navigate=useNavigate();
    function handleClick()
    {
        navigate("/");
    }

    return(
        <div className="mainbg bg-gradient-to-br from-[#fdfefe] to-[#010710] h-screen py-20">
                <div className="container mx-auto ">
                    <div className="bg-white rounded-xl w-2/3 mx-auto shadow-sm overflow-hidden flex my-auto">
                        <div className="left w-1/4 bg-black text-white px-6 py-8 flex flex-col items-center justify-center">
                            <h1 className="font-extrabold mb-6 text-xl mx-auto">
                                REGISTER DRIVER
                            </h1>
                        
                            <div className="mx-auto">
                                <p>Already have an account?</p>
                                <button onClick={handleClick} className="signupbtn font-bold my-4 py-2 px-4 mx-9 bg-white text-black text-xl rounded-full w-35 shadow-lg hover:bg-gray-200">SIGN IN</button>
                            </div>

                        </div>

                        <div className="rightbox w-3/4 bg-white px-10 py-4">
                            <div className="flex mb-5">
                                <h1 className="font-extrabold mb-4 text-2xl">ENTER YOUR DETAILS</h1>
                                <a href="#"><span><img src="https://pbs.twimg.com/profile_images/1605297940242669568/q8-vPggS_400x400.jpg" className="w-10 h-10 ml-96 border"></img></span></a>
                            </div>
                            <form action="#">
                                <div className="namebox flex">
                                    
                                    <input type="text" placeholder="Firstname" className="px-4 py-2 rounded-md border border-black mr-2 shadow-xl w-full" required></input>

                                    
                                    <input type="text" placeholder="Lastname" className="px-4 py-2 rounded-md border border-black ml-2 shadow-xl w-full" required></input>
                                    
                                </div>

                                <div className="email flex">
                                    <input type="text" placeholder="Email" className="px-4 py-2 rounded-md border border-black mr-2 mt-3 shadow-xl w-full" required></input>

                                    <input type="text" placeholder="Phone No" className="px-4 py-2 rounded-md border border-black ml-2 mt-3 shadow-xl w-full" required></input>

                                </div>

                                <div className="flex">
                                    <input type="text" placeholder="Username" className="px-4 py-2 rounded-md border border-black mr-2 mt-3 shadow-xl w-full" required></input>

                                    <input type="text" placeholder="DrivingLicense No" className="px-4 py-2 rounded-md border border-black ml-2 mt-3 shadow-xl w-full" required></input>
                                </div>


                                <div className="pass flex mb-2">
                                <input type="password" placeholder="Password" className="px-4 py-2 rounded-md border border-black mr-2 mt-3 shadow-xl w-full" required></input>

                                <input type="password" placeholder="Confirm Password" className="px-4 py-2 rounded-md border border-black ml-2 mt-3  shadow-xl w-full" required></input>
                                </div>

                                
                                <label for="dob" className="dob">Date of Birth</label>
                                <br></br>
                                <input type="date" id="dob" name="dob" className="px-4 py-2 rounded-md border border-black mr-2 mt-1 shadow-xl w-2/5" required/>

                                <div className="flex mt-4" required>
                                    <input type="radio" id="sex" name="sex" value="sex" className="mr-2"/>
                                    <label for="sex" className="mr-4">MALE</label>

                                    <input type="radio" id="sex" name="sex" value="sex" className="mr-2"/>
                                    <label for="sex">FEMALE</label>
                                </div>

                                <div>
                                <input type="checkbox" id="terms" name="terms" className="border border-gray-400 mt-3" required/>
                                <span>
                                    I accept the <a href="#" className="hover:underline">Terms of Use</a> & <a href="#" className="hover:underline">Privacy Policy</a>
                                </span>
                                
                                </div>

                                


                            </form>

                                <div className="submit">
                                    <button className="signinbtn font-bold my-4 py-4 px-4 bg-black text-white text-xl rounded-full w-40 mx-64 shadow-lg hover:bg-gray-800">SIGN UP </button>

                                </div>
                            


                        </div>

                    </div>    


                </div>
        </div>
    );
}

export default DriverSignup;
