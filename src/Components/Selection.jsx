import React from "react";
import { useNavigate } from "react-router-dom";


function Selection()
{   
    const navigate=useNavigate();
    function handleClick()
    {
        navigate("/Selection");
    }

    function handleClick1()
    {
        navigate("/Selection/RiderSignup");
    }

    function handleClick2()
    {
        navigate("/Selection/DriverSignup");
    }

    return(
        <div className="mainbg bg-[#e6f8ea] h-screen py-52">
                <div className="container mx-auto">
                    <div className="bg-white rounded-xl w-2/3 mx-auto shadow-sm overflow-hidden flex my-auto">
                        <div className="left w-1/2 bg-black text-white px-10 py-8 flex flex-col items-center justify-center">
                            <h1 className="font-extrabold mb-6 text-xl mx-auto">
                                WELCOME
                            </h1>
                           
                            <div>
                                
                                <button onClick={handleClick} className="signupbtn font-bold my-4 py-4 px-4 bg-white text-black text-xl rounded-full w-40 mx-auto shadow-lg ">SIGN UP</button>
                            </div>

                        </div>

                        <div className="right w-1/2 bg-white px-10 py-8">
                            <h1 className="font-extrabold mb-4 text-2xl mx-9">ARE YOU A RIDER OR DRIVER?</h1>
                            <div className="dorr">
                                <div className="inputbox flex flex-col">
                                    <button onClick={handleClick1} className="rider bg-black text-white w-1/3 mx-auto rounded-lg px-2 py-3 font-bold text-xl mb-3 mt-3 hover:bg-gray-800">RIDER</button>
                                    <button onClick={handleClick2} className="rider bg-black text-white w-1/3 mx-auto rounded-lg px-2 py-3 font-bold text-xl mt-3 mb-3 hover:bg-gray-800">DRIVER</button>
                                </div>
                            </div>


                        </div>
                    </div>    


                </div>
        </div>
    );
}

export default Selection;