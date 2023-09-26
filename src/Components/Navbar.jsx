import React from 'react'
import {Link} from "react-router-dom"
import logo from "../../src/assets/logo.png"

const Navbar = () => {
  return (
    <div className="mainbg bg-[#abe6b9] h-screen">
    <nav className='bg-[#abe6b9]'>
    <div className='flex flex-wrap items-center justify-between py-4 px-4 md:px-8'>
        <div className='mb-4 md:mb-0'>
            <img src={logo} alt="logo" className='md:cursor-pointer h-12' />
        </div>
        <ul className='flex space-x-4 md:space-x-6'>
           
            <li>
                <Link to="/Login" className='py-2 px-3 inline-block text-black font-extrabold text-xl font hover:text-white'>
                    Login
                </Link>
            </li>
            <li>
                <Link to="/Selection" className='py-2 px-3 inline-block text-black font-extrabold text-xl hover:text-white'>
                    Signup
                </Link>
            </li>
        </ul>
    </div>
</nav>
</div>

  )
}

export default Navbar