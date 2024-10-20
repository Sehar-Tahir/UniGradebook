import React from 'react'
// import { RxAvatar } from "react-icons/rx";
import { LiaLessThanSolid } from "react-icons/lia";

const InputGradePage = () => {
    return (
        <>
            {/* Input */}
            <div className='mb-10 mt-14 '>
                <ul className='flex md:justify-around justify-center items-center text-center md:gap-0 gap-4 w-[90vw] md:w-[50vw] m-auto border-b-2 border-[black]'>
                    <li>Profile</li>
                    <li>Account Settings</li>
                    <li className='font-bold'>Your Grades</li>
                    <li>Saved Professors</li>
                </ul>
            </div>
            <div className='w-[50vw] m-auto md:flex hidden'>
                <LiaLessThanSolid className='w-6 h-6' />
            </div>

            <div className='flex flex-col justify-center items-center gap-4 mb-8'>

                <div className='flex flex-col justify-center items-start gap-1'>
                    <h2 className='font-semibold md:ml-0 m-2'>Enter Course Details</h2>
                    <div className="border-2 border-[#e0dce9] rounded-2xl flex flex-col justify-center items-start p-8 gap-2 w-full md:w-[400px]">

                        <div className="flex justify-center items-center gap-2">
                            <label htmlFor="courseName" className='font-bold text-sm'>Course Name</label>
                            <input type="text" id="courseName" className='px-2 border border-[#c2bfc7] rounded-full' />
                        </div>

                        <div className="flex justify-center items-center gap-2">
                            <label htmlFor="instructorName" className='font-bold text-sm'>Instructor Name</label>
                            <input type="text" id="instructorName" className='px-0 border border-[#c2bfc7] rounded-full' />
                        </div>

                        <div className="flex justify-center items-center gap-2">
                            <label htmlFor="semester" className='font-bold text-sm'>Semester</label>
                            <select id="semester" className='px-24 border border-[#c2bfc7] rounded-full'>
                                <option value=""></option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col justify-center items-start gap-1'>
                    <h2 className='font-semibold'>What Grade Did you Get?</h2>
                    <div className="border-2 border-[#e0dce9] rounded-2xl flex flex-col justify-center items-center md:px-0 px-28 p-8 gap-2 w-full md:w-[400px]">

                        <div className="flex justify-center items-center gap-2">
                            <label htmlFor="semester" className='font-bold text-sm'>Grade</label>
                            {/* <input type="text"  id="courseName" className='px-2 border border-[#c2bfc7] rounded-full'/> */}
                            <select id="semester" className='px-7 border border-[#c2bfc7] rounded-full'>
                                <option value=""></option>
                            </select>
                        </div>
                    </div>
                </div>


                <div className='flex flex-col justify-center items-start gap-1'>
                    <h2 className='font-semibold md:ml-0 ml-2'>Rate Your Course</h2>
                    <div className="border-2 border-[#e0dce9] rounded-2xl flex flex-col justify-center items-start p-8 gap-2 w-full md:w-[400px]">



                        <div className="flex justify-between items-center gap-6">
                            <label htmlFor="difficulty" className='font-bold text-sm'>Difficulty</label>
                            <ol className='flex text-xs font-bold gap-10 text-[#7d7d7f] justify-end mx-3'>
                                <li>1- Easy</li>
                                <li>5- Extremely Difficult</li>
                            </ol>
                        </div>

                        <div className="flex justify-between items-center gap-6">
                            <label htmlFor="quality" className='font-bold text-sm'>Quality</label>
                            {/* <ol className='flex text-[0.5rem] font-bold gap-10 text-[#7d7d7f] justify-end mt-6 mr-4 ml-3'> */}
                            <ol className='flex text-xs font-bold gap-10 text-[#7d7d7f] justify-end mx-7'>
                                <li>1- Poor</li>
                                <li>5- Great</li>
                            </ol>
                        </div>

                        <div className="flex justify-center items-center gap-4">

                            <label htmlFor="AgainCourse" className='font-bold text-sm'>Would You Take it Again?</label>
                            <div className='flex justify-center items-center gap-1'>
                                <input
                                    name="color"
                                    type="radio"
                                    class="h-4 w-4 rounded-full border border-[#c2bfc7] checked:border-slate-400 transition-all"
                                    id="Again"
                                />
                                <label htmlFor="Again" className='font-bold text-sm'>Yes</label>
                            </div>
                            <div className='flex justify-center items-center gap-1'>
                                <input
                                    name="color"
                                    type="radio"
                                    class="h-4 w-4 rounded-full border border-[#c2bfc7] checked:border-slate-400 transition-all"
                                    id="Again"
                                />
                                <label htmlFor="Again" className='font-bold text-sm'>No</label>
                            </div>

                        </div>
                    </div>
                </div>

                <button className='rounded-full border border-[#c2bfc7] px-4 py-2 text-xs 
                font-bold bg-[#bde5c0] text-[#56804a]'>Save</button>

            </div>
        </>
    )
}

export default InputGradePage
