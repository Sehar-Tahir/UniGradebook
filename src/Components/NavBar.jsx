
// *
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  }

  return (
    <>
      {/* Navbar */}
      <nav className='flex flex-col md:flex-row justify-between items-center mx-4 md:mx-10 mt-4 md:mt-10 mb-4 md:mb-4'>
        <div className="flex justify-between items-center w-full md:w-auto">
          <div className="flex justify-center items-center gap-2 ml-0 md:ml-10">
            <img src="src/assets/logo.png" alt="Logo" width={50} />
            <h1 className='text-xl font-bold text-[#181818]'>UniGradebook</h1>
          </div>
          <button className="md:hidden" onClick={toggleNav}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
        <ul className={`flex ${isNavOpen ? 'flex-col' : 'hidden'} md:flex md:flex-row justify-center items-center md:justify-between gap-4 md:gap-6 text-sm mt-4 md:mt-0`}>
          <li>
            <NavLink className="nav-link font-semibold" to="/">Home</NavLink>
          </li>
          <li>
            <NavLink className="nav-link font-semibold" to="/dashboardpage">Dashboard</NavLink>
          </li>
          <li>
            <NavLink className="nav-link font-semibold" to="/inputgradespage">Grades</NavLink>
          </li>
          <li>
            <NavLink className="nav-link font-semibold" to="/specificspage">Specifics</NavLink>
          </li>
          <li>
            <NavLink className="nav-link font-semibold" to="/profilepage">Profile</NavLink>
          </li>
        </ul>
        <div className={`flex ${isNavOpen ? 'flex-col' : 'hidden'} md:flex md:flex-row justify-center items-center gap-4 md:gap-10 mt-4 md:mt-0 mr-0 md:mr-20`}>
          <p className='text-[#414141] font-bold text-sm'>Login</p>
          <p className='text-[#414141] font-bold text-sm'>Sign Up</p>
        </div>
      </nav>
    </>
  )
}

export default NavBar