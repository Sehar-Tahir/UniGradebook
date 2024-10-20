import React from 'react'
import { RxAvatar } from 'react-icons/rx';
import { FaApple } from "react-icons/fa";
import { MdOutlineModeEdit } from "react-icons/md";
import { BsSave } from "react-icons/bs";
import { FaCircle } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { IoIosInformationCircleOutline } from "react-icons/io";

const DashboardPage = () => {
    return (
        <>
            {/* Navbar */}
            <nav className='md:flex justify-between items-center mt-10 mb-6 w-[70vw] mx-auto'>
                {/* <div>
                    <img src="src/assets/logo.png" alt="Logo" width={50} />
                </div> */}

                <div className="flex flex-col md:flex-row justify-center items-center text-sm gap-2 md:gap-1">
                    <div className='flex justify-center items-center'>
                    <FaApple />
                    <select name="professor" id="professor">
                        <option value="1">Professor</option>
                    </select>
                    </div>
                    <input type="text" placeholder='Professor Name' className='bg-white text-[#404040] 
                    font-semibold rounded-full px-4 py-2 border border-[#c7c8c9] text-xs pr-16' />
                    <div className='flex justify-center items-center gap-2'>
                    <p className='font-semibold'>at </p>
                    <a href='#' className='underline font-semibold'>James Medison University</a>
                    <MdOutlineModeEdit />
                    </div>
                </div>
                <div className="md:flex hidden justify-center items-center gap-2 md:gap-1 mr-20 mt-2 md:mt-0 ">
                    <RxAvatar className='w-8 h-8' />
                    <p className='text-[#414141] font-semibold text-xl'>James</p>
                </div>
            </nav>
            {/* Card */}
            <div className='flex flex-wrap md:flex-nowrap w-[90vw] m-auto md:w-[70vw] mx-auto gap-3'>
                <div className="border-2 border-[#e0dce9] w-[350px] rounded-2xl px-6">
                    <div className="flex justify-between mt-3">
                        <a href="#" className='text-xs text-[black] font-bold underline
                     decoration-[#cbcacc] decoration-1'>I'm Professor heap</a>
                        <BsSave className='mt-4 w-6 h-6' />
                    </div>
                    <h1 className='font-bold text-4xl mt-6 ml-1'>Phillip Heap</h1>
                    <div className='my-10'>
                        <p className='font-bold text-sm'>Professor in the <a href="#" className='underline decoration-[#82449d] text-[#82449d]'>Business Department</a></p>
                        <p className='font-bold text-sm'>at <a href="#" className='underline decoration-[#82449d] text-[#82449d]'>James Madison University</a></p>
                    </div>
                </div>

                <div className="border-2 py-10 md:py-16  border-[#e0dce9] w-[90vw] md:gap-2 m-auto md:w-[250px] rounded-2xl flex flex-col justify-center text-center items-center">
                    <h1 className='font-bold text-7xl'>C+</h1>
                    <p className='font-bold text-sm'>Avg. Grade</p>
                </div>

                <div className="border-2 border-[#e0dce9] w-[90vw] m-auto md:w-[350px] rounded-2xl px-6">
                    <div className='flex items-center justify-end mt-2 gap-4'>
                        <div className='flex justify-center items-center gap-1'>
                            <FaCircle className='text-[#e65d3c] rounded-full w-2 h-2' />
                            <p className='font-bold text-sm'>4.3</p>
                        </div>
                        <div className='flex justify-center items-center gap-1'>
                            <FaCircle className='text-[#7be087] rounded-full w-2 h-2' />
                            <p className='font-bold text-sm'>2.8</p>
                        </div>
                        <div className='flex justify-center items-center gap-1'>
                            <FaCircle className='text-[#f4b44e] rounded-full w-2 h-2' />
                            <p className='font-bold text-sm'>3.2</p>
                        </div>
                    </div>
                    <table className=' w-full md:w-[22vw] h-[30vh] m-auto text-x stable-fixed mb-2'>
                        <tr className='font-bold text-xs text-center border-b border-[#d1d0d3] h-[30px]'>
                            <td className='border-b border-[#D1d0d3]'></td>
                            <td className='border-b border-[#D1d0d3]'></td>
                            <td className='border-b border-[#D1d0d3]'></td>
                            <td className='border-b border-[#D1d0d3]'></td>
                            <td className='border-b border-[#D1d0d3]'></td>
                            <td className='border-b border-[#D1d0d3]'></td>
                            <td className='border-b border-[#D1d0d3]'></td>
                        </tr>
                        <tr className='font-bold text-xs text-center border-b border-[#d1d0d3] h-[30px]'>
                            <td className='border-b border-[#D1d0d3]'></td>
                            <td className='border-b border-[#D1d0d3]'></td>
                            <td className='border-b border-[#D1d0d3]'></td>
                            <td className='border-b border-[#D1d0d3]'></td>
                            <td className='border-b border-[#D1d0d3]'></td>
                            <td className='border-b border-[#D1d0d3]'></td>
                            <td className='border-b border-[#D1d0d3]'></td>
                        </tr>
                        <tr className='font-bold text-xs text-center border-b border-[#d1d0d3] h-[30px]'>
                            <td className='border-b border-[#D1d0d3]'></td>
                            <td className='bg-[#e65d3c]'></td>
                            <td className='border-b border-[#D1d0d3]'></td>
                            <td className='border-b border-[#D1d0d3]'></td>
                            <td className='border-b border-[#D1d0d3]'></td>
                            <td className='border-b border-[#D1d0d3]'></td>
                            <td className='border-b border-[#D1d0d3]'></td>
                        </tr>
                        <tr className='font-bold text-xs text-center border-b border-[#d1d0d3] h-[30px]'>
                            <td className='border-b border-[#D1d0d3]'></td>
                            <td className=' bg-[#e65d3c]'></td>
                            <td className='border-b border-[#D1d0d3]'></td>
                            <td className='border-b border-[#D1d0d3]'></td>
                            <td className='border-b border-[#D1d0d3]'></td>
                            <td className='bg-[#f4b44e]'></td>
                            <td className='border-b border-[#D1d0d3]'></td>
                        </tr>
                        <tr className='font-bold text-xs text-center border-b border-[#d1d0d3] h-[30px]'>
                            <td className='border-b border-[#D1d0d3]'></td>
                            <td className=' bg-[#e65d3c]'></td>
                            <td className='border-b border-[#D1d0d3]'></td>
                            <td className='bg-[#7be087]'></td>
                            <td className='border-b border-[#D1d0d3]'></td>
                            <td className='bg-[#f4b44e]'></td>
                            <td className='border-b border-[#D1d0d3]'></td>
                        </tr>
                        <tr className='font-bold text-xs text-center border-b border-[#d1d0d3] h-[30px]'>
                            <td className='border-b border-[#D1d0d3] w-[25px]'></td>
                            <td className=' bg-[#e65d3c] w-[25px]'></td>
                            <td className='border-b border-[#D1d0d3] w-[25px]'></td>
                            <td className='bg-[#7be087] w-[25px]'></td>
                            <td className='border-b border-[#D1d0d3] w-[25px]'></td>
                            <td className='bg-[#f4b44e] w-[25px]'></td>
                            <td className='border-b border-[#D1d0d3] w-[25px]'></td>
                        </tr>
                        <tr className='font-bold text-[0.5rem] text-center'>
                            <td></td>
                            <td>Dificulty</td>
                            <td></td>
                            <td>Quality</td>
                            <td></td>
                            <td className='w-[60px]'>Would Take Again?</td>
                        </tr>
                    </table>
                </div>
            </div>
            {/* Grade */}
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
            {/* GradeInfo */}
            <h2 className='font-bold text-xl md:text-2xl mt-10 w-[70vw] m-auto'>What Grade Would I Get?</h2>
            <div className="flex w-[70vw] m-auto justify-start items-center gap-1 font-semibold">
                <IoIosInformationCircleOutline className='w-5 h-5' />
                <p className='mb-1'>AI Predixtions</p>
            </div>

            <div className='flex w-[90vw] md:w-[70vw] mx-auto gap-3 mb-10 flex-wrap md:flex-nowrap'>

                <div className="border-2 border-[#e0dce9] w-full md:w-[640px] rounded-2xl px-6 flex flex-col">
                    <div className='border-2 border-[#e2dfeb] md:px-0 px-1 w-full md:w-[600px] rounded-full flex justify-evenly items-center h-12 mt-4 m-auto'>
                        <p className='font-bold text-sm'>A</p>
                        <p className='font-bold text-sm'>-</p>
                        <p className='font-bold text-sm'>+</p>
                        <p className='font-bold text-sm'>B</p>
                        <p className='font-bold text-sm bg-[#c1fa90] h-12 w-8 text-center pt-3'>-</p>
                        <p className='font-bold text-sm'>+</p>
                        <p className='font-bold text-sm'>C</p>
                        <p className='font-bold text-sm'>-</p>
                        <p className='font-bold text-sm'>+</p>
                        <p className='font-bold text-sm'>D</p>
                        <p className='font-bold text-sm'>-</p>
                        <p className='font-bold text-sm'>+</p>
                        <p className='font-bold text-sm'>E</p>
                        <p className='font-bold text-sm'>-</p>
                        <p className='font-bold text-sm'>+</p>
                        <p className='font-bold text-sm'>F</p>
                    </div>
                    <div className='flex flex-col ml-3 my-4'>
                        <h2 className='font-bold text-xl md:text-2xl mb-2'>How Did We Calculate This?</h2>
                        <p><span className='font-bold'>Difficulty:</span> 4.3 (very hard)</p>
                        <p><span className='font-bold'>Quality:</span> 2.8 (average)</p>
                        <p><span className='font-bold'>Avg. Grade:</span> C+</p>
                        <p><span className='font-bold'>Study Time:</span> 6 hours/week</p>
                    </div>
                </div>

                <div className="border-2 w-full border-[#e0dce9] rounded-2xl flex flex-col py-6 md:py-0 justify-center text-center items-center">
                    <h1 className='font-bold text-7xl'>B-</h1>
                    <p className='font-semibold text-sm'>AI Predicted Grade</p>
                </div>
            </div>
        </>
    )
}

export default DashboardPage
