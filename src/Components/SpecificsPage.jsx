import React from 'react'
import { RxAvatar } from 'react-icons/rx';
import { FaApple } from "react-icons/fa";
import { MdOutlineModeEdit } from "react-icons/md";
import Chart from './Chart'
import { LiaLessThanSolid } from "react-icons/lia";
import { IoIosArrowDown } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { TbRectangleFilled } from "react-icons/tb";
const SpecificsPage = () => {
    return (
        <>
            {/* Navbar */}
            <nav className='md:flex justify-between items-center mt-10 mb-6 w-[70vw] mx-auto'>

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
            {/* Specifics */}
            <div className='w-[70vw] mx-auto mt-10'>
                <div className='flex md:justify-center md:gap-32 gap-4 justify-center items-start md:flex-row flex-col'>
                    <div className='flex md:justify-start items-start justify-center gap-2'>
                        <LiaLessThanSolid className='w-5 h-5 mt-1' />
                        <h2 className='text-xl font-bold'>ECON 200 MICROECONOMICS</h2>
                    </div>
                    <div className=" border-2 border-[#e0dce9] w-[230px] rounded-2xl flex flex-col justify-center text-center items-center">
                        <p className='font-bold text-[0.65rem] mt-3'>EXPECTED GRADE</p>
                        <h1 className='font-bold text-7xl text-[#9a58af]'>B</h1>
                        <p className='font-bold text-[0.65rem] mb-3'>Spring 2005 - Fall 2024</p>
                    </div>
                </div>
                {/* 2 */}

                <div className='flex md:w-[70vw] mx-auto justify-center items-center mt-4 gap-2 w-full flex-wrap md:flex-nowrap'>

                    <div className=" border-2 border-[#e0dce9] w-[400px] h-[285px] rounded-2xl flex flex-col justify-center  text-center items-center">
                        <p className='font-bold text-[0.65rem] mt-3'>Grade Overview</p>
                        <Chart />
                        <div className='flex justify-end gap-2 mt-1'>
                            <p className='flex justify-center items-center font-bold text-xs gap-1'><TbRectangleFilled className='text-[#cb6ce6] rounded-3xl' /> A</p>
                            <p className='flex justify-center items-center font-bold text-xs gap-1'><TbRectangleFilled className='text-[#9854AD] rounded-3xl' /> B</p>
                            <p className='flex justify-center items-center font-bold text-xs gap-1'><TbRectangleFilled className='text-[#723C82] rounded-3xl' /> C</p>
                            <p className='flex justify-center items-center font-bold text-xs gap-1'><TbRectangleFilled className='text-[#44244D] rounded-3xl' /> D</p>
                            <p className='flex justify-center items-center font-bold text-xs gap-1'><TbRectangleFilled className='text-[#2A1631] rounded-3xl' /> F</p>
                        </div>
                    </div>
                    {/*  */}
                    <div className='flex flex-col md:gap-3 gap-8 justify-center items-center'>
                        {/* 1 */}
                        <div className="mt-4 md:mt-0 border-2 border-[#e0dce9] m-auto md:w-[450px] rounded-2xl flex flex-col justify-center items-start px-2">

                            <p className='font-bold text-[0.65rem] mt-3'>Course Overview</p>
                            <div className='flex justify-between items-center border-b border-[#9f9fa1] gap-52 md:gap-0 md:w-[30vw] m-auto text-[0.65rem] mt-2'>
                                <p className='text-[#a6a5a6] text-[0.5rem] font-bold'>Metric</p>
                                <p className='text-[#a6a5a6] text-[0.5rem] font-bold'>Value</p>
                            </div>
                            <div className='flex justify-between items-center border-b border-[#9f9fa1] gap-36 md:gap-0 md:w-[30vw] m-auto text-[0.65rem] mt-2'>
                                <p>Earliest Term</p>
                                <p>Spring 2005</p>
                            </div>
                            <div className='flex justify-between items-center border-b border-[#9f9fa1] gap-40 md:gap-0 md:w-[30vw] m-auto text-[0.65rem] mt-2'>
                                <p>Latest Term</p>
                                <p>Fall 2024</p>
                            </div>
                            <div className='flex justify-between items-center gap-36 md:gap-0 md:w-[30vw] m-auto text-[0.65rem] mt-2 mb-2'>
                                <p>Total Courses</p>
                                <p>26 Classes</p>
                            </div>

                        </div>
                        {/* 2 */}
                        <div className=" border-2 border-[#e0dce9] md:w-[450px] m-auto rounded-2xl flex flex-col justify-center items-start px-2">

                            <p className='font-bold text-[0.65rem] mt-3'>Instructor Overview</p>
                            <div className='flex justify-between items-center border-b border-[#9f9fa1] gap-52 md:gap-0 md:w-[30vw] m-auto text-[0.65rem] mt-2'>
                                <p className='text-[#a6a5a6] text-[0.5rem] font-bold'>Metric</p>
                                <p className='text-[#a6a5a6] text-[0.5rem] font-bold'>Instructor</p>
                            </div>
                            <div className='flex justify-between items-center border-b border-[#9f9fa1] gap-40 md:gap-0 md:w-[30vw] m-auto text-[0.65rem] mt-2'>
                                <p>Highest Avg. GPA</p>
                                <p>Feilds <span className='text-[#9a58af] font-bold'>(3.47 GPA)</span></p>
                            </div>
                            <div className='flex justify-between items-center border-b border-[#9f9fa1] gap-40 md:gap-0 md:w-[30vw] m-auto text-[0.65rem] mt-2'>
                                <p>Lowest Avg. GPA</p>
                                <p>Heap <span className='text-[#9a58af] font-bold'>(2.63 GPA)</span></p>
                            </div>
                            <div className='flex justify-between items-center gap-40 md:gap-0 md:w-[30vw] m-auto text-[0.65rem] mt-2 mb-2'>
                                <p>Most Classes Taught</p>
                                <p>Heap <span className='font-bold'>(18 Classes)</span></p>
                            </div>
                        </div>

                    </div>

                </div>

                {/* 3 */}

                <div className=" border-2 border-[#e0dce9] w-[80vw] md:w-[68vw] m-auto mt-4 mb-14 rounded-2xl flex flex-col gap-2 justify-center text-center items-center">

                    <div className='flex md:justify-between justify-center flex-col gap-3 md:flex-row items-center w-full md:w-[800px] m-auto text-[0.65rem] my-4'>
                        <p className='text-[0.65rem] font-bold'>Instructors</p>
                        <p className='w-[40%] font-semibold border-b border-[#9f9fa1] text-[#838385] flex justify-between items-center'>Search <CiSearch className='w-4 h-4' /></p>
                    </div>

                    <div className='flex flex-wrap justify-between items-center border-b border-[#9f9fa1] md:gap-0 gap-1 md:w-[800px] m-auto mt-2'>
                        <p className='md:w-[100px] text-center text-[#838385] text-[0.5rem] font-bold'>Latest Term</p>
                        <p className='md:w-[100px] text-center text-[#838385] text-[0.5rem] font-bold'>Class Taught(#18)</p>
                        <p className='md:w-[100px] text-center text-[#838385] text-[0.5rem] font-bold'>A(%)</p>
                        <p className='md:w-[100px] text-center text-[#838385] text-[0.5rem] font-bold'>B(%)</p>
                        <p className='md:w-[100px] text-center text-[#838385] text-[0.5rem] font-bold'>C(%)</p>
                        <p className='md:w-[100px] text-center text-[#838385] text-[0.5rem] font-bold'>D(%)</p>
                        <p className='md:w-[100px] text-center text-[#838385] text-[0.5rem] font-bold'>F(%)</p>
                        <p className='md:w-[100px] text-center text-[#838385] text-[0.5rem] font-bold'>GPA</p>
                    </div>
                    <div className='flex justify-between items-center border-b border-[#9f9fa1] md:gap-0 gap-3 md:w-[800px] m-auto text-[0.65rem] mt-2'>
                        <p className='flex justify-center items-center gap-1 md:w-[100px] font-semibold'> <IoIosArrowDown className='w-3 h-3' /> Heap</p>
                        <p className='md:w-[100px] text-center font-semibold'>18</p>
                        <p className='md:w-[100px] text-center font-semibold'>30.6</p>
                        <p className='md:w-[100px] text-center font-semibold'>37.7</p>
                        <p className='md:w-[100px] text-center font-semibold'>18.0</p>
                        <p className='md:w-[100px] text-center font-semibold'>4.4</p>
                        <p className='md:w-[100px] text-center font-semibold'>9.3</p>
                        <p className='md:w-[100px] text-center font-semibold'>2.63</p>
                    </div>
                    <div className='flex justify-between items-center md:w-[800px] m-auto md:gap-0 gap-4 text-[0.65rem] mt-2 mb-8'>
                        <p className='flex justify-center items-center gap-1 md:w-[100px] font-semibold'> <IoIosArrowDown className='w-3 h-3' /> Feilds</p>
                        <p className='md:w-[100px] text-center font-semibold'>3</p>
                        <p className='md:w-[100px] text-center font-semibold'>64.9</p>
                        <p className='md:w-[100px] text-center font-semibold'>24.3</p>
                        <p className='md:w-[100px] text-center font-semibold'>8.1</p>
                        <p className='md:w-[100px] text-center font-semibold'>2.7</p>
                        <p className='md:w-[100px] text-center font-semibold'>0</p>
                        <p className='md:w-[100px] text-center font-semibold'>3.47</p>
                    </div>
                </div>

            </div>
        </>
    )
}

export default SpecificsPage
