import React from 'react'
// import { RxAvatar } from "react-icons/rx";
import { IoIosAdd } from "react-icons/io";
import { FaCheck } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
const ProfilePage = () => {
  return (
    <>
      {/* Grades */}
      <div className='mb-10 mt-14 '>
                <ul className='flex md:justify-around justify-center items-center text-center md:gap-0 gap-4 w-[90vw] md:w-[50vw] m-auto border-b-2 border-[black]'>
                    <li>Profile</li>
                    <li>Account Settings</li>
                    <li className='font-bold'>Your Grades</li>
                    <li>Saved Professors</li>
                </ul>
            </div>

      <div className='w-[70vw] m-auto flex md:flex-row flex-col md:justify-between justify-center text-center items-center mb-6'>
        <div className='flex justify-center items-center font-semibold gap-1 md:ml-10'>
          <p className=' md:text-xl text-sm'>Your School:</p>
          <a href='#' className='underline'>James Medison University</a>
        </div>
        <div className="flex mr-28 border rounded-full border-[#cac9cb] md:mt-0 mt-4 font-semibold text-sm px-2 py-1 justify-center items-center">
          <button>Add more </button>
          <IoIosAdd className='mt-1' />
        </div>
      </div>

       <h2 className='font-bold text-2xl mt-10 w-[70vw] m-auto mb-4'>Student Feedback</h2>

<table className='w-[90vw] md:w-[70vw] h-[45vh] m-auto text-sm table-fixed border border-[#d1d0d3] mb-10'>
    <tr className='items-center border-b border-[#d1d0d3] bg-[#eae7ed] h-8'>
        <th className='border-r border-[#D1d0d3] md:text-sm text-[0.6rem]'>Course Name</th>
        <th className='border-r border-[#D1d0d3] md:text-sm text-[0.6rem]'>Semester</th>
        <th className='border-r border-[#D1d0d3] md:text-sm text-[0.6rem]'>Grade</th>
        <th className='border-r border-[#D1d0d3] md:text-sm text-[0.6rem]'>Difficulty</th>
        <th className='border-r border-[#D1d0d3] md:text-sm text-[0.6rem]'>Quality</th>
        <th className='border-r border-[#D1d0d3] md:text-sm text-[0.6rem]'>Would Take Again</th>
    </tr>
    <tr className='font-bold text-xs text-center border-b border-[#d1d0d3]'>
        <td className='border-r border-[#D1d0d3]'>ECON200</td>
        <td className='border-r border-[#D1d0d3]'>Fall24</td>
        <td className='border-r border-[#D1d0d3]'>C</td>
        <td className='border-r border-[#D1d0d3]'>4.1</td>
        <td className='border-r border-[#D1d0d3]'>3.0</td>
        <td className='flex justify-center'>
            <span className='flex justify-center items-center bg-[#b3e8bf] text-[#478f5f] w-10 
rounded-full text-xs gap-1 mt-4'><FaCheck className='w-2' />Yes</span></td>
    </tr>

    <tr className='font-bold text-xs text-center border-b border-[#d1d0d3]'>
        <td className='border-r border-[#D1d0d3]'>ECON201</td>
        <td className='border-r border-[#D1d0d3]'>Fall24</td>
        <td className='border-r border-[#D1d0d3]'>B-</td>
        <td className='border-r border-[#D1d0d3]'>4.0</td>
        <td className='border-r border-[#D1d0d3]'>2.7</td>
        <td className='flex justify-center'>
            <span className='flex justify-center items-center bg-[#ebacac] text-[#c15b5b] w-10 
rounded-full text-xs mt-4'><RxCross2 className='w-3' /> No</span></td>
    </tr>

    <tr className='font-bold text-xs text-center border-b border-[#d1d0d3]'>
        <td className='border-r border-[#D1d0d3]'>SCOM110</td>
        <td className='border-r border-[#D1d0d3]'>SPR24</td>
        <td className='border-r border-[#D1d0d3]'>C</td>
        <td className='border-r border-[#D1d0d3]'>5.0</td>
        <td className='border-r border-[#D1d0d3]'>3.0</td>
        <td className='flex justify-center'>
            <span className='flex justify-center items-center bg-[#ebacac] text-[#c15b5b] w-10 
rounded-full text-xs mt-4'><RxCross2 className='w-3' />No</span></td>
    </tr>

    <tr className='font-bold text-xs text-center border-b border-[#d1d0d3]'>
        <td className='border-r border-[#D1d0d3]'>PHIL150</td>
        <td className='border-r border-[#D1d0d3]'>SPR24</td>
        <td className='border-r border-[#D1d0d3]'>C+</td>
        <td className='border-r border-[#D1d0d3]'>4.2</td>
        <td className='border-r border-[#D1d0d3]'>2.3</td>
        <td className='flex justify-center'>
            <span className='flex justify-center items-center bg-[#b3e8bf] text-[#478f5f] w-10 
rounded-full text-xs gap-1 mt-4'><FaCheck className='w-2' />Yes</span></td>
    </tr>

    <tr className='font-bold text-xs text-center border-b border-[#d1d0d3]'>
        <td className='border-r border-[#D1d0d3]'>ENG105</td>
        <td className='border-r border-[#D1d0d3]'>Fall24</td>
        <td className='border-r border-[#D1d0d3]'>C+</td>
        <td className='border-r border-[#D1d0d3]'>4.0</td>
        <td className='border-r border-[#D1d0d3]'>2.6</td>
        <td className='flex justify-center'>
            <span className='flex justify-center items-center bg-[#b3e8bf] text-[#478f5f] w-10 
rounded-full text-xs gap-1 mt-4'><FaCheck className='w-2' />Yes</span></td>
    </tr>
</table >
    </>
  )
}

export default ProfilePage
