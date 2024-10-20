
import React from 'react'
import { GiGraduateCap } from 'react-icons/gi'
import img from '../assets/Img-1.jpg'
import feedback from '../assets/feedback.png'
import man from '../assets/anonymous-man.png'
import feed from '../assets/likes.png'
const LandingPage = () => {
    return (
        <>
            {/* Home */}
            <div className="relative">
                <img src={img} alt="Hero-img" className='w-full h-auto m-auto' />
            </div>
            <div className="flex flex-col w-[50%] m-auto mt-6 md:absolute md:bottom-64 md:left-72 justify-center items-center px-4 sm:px-0">
                <div className='flex flex-col sm:flex-row justify-center items-center gap-2 mb-2'>
                    <button className='bg-white text-[#404040] font-bold rounded-full px-3 py-2 sm:px-5 sm:py-3 md: border border-[#7b7c7c] text-xs'>Search Schools</button>
                    <button className='bg-white text-[#404040] font-bold rounded-full px-3 py-2 sm:px-5 sm:py-3 border border-[#7b7c7c] text-xs'>Search Professors</button>
                </div>
                <div className='relative flex items-center w-full sm:w-auto'>
                    <GiGraduateCap className='w-4 h-4 sm:w-6 sm:h-6 absolute ml-2 sm:ml-3' />
                    <input type="text" placeholder='Search by School Name' className='bg-white text-[#404040] font-semibold rounded-full px-4 py-2 sm:px-6 sm:py-3 border border-[#7b7c7c] text-xs pl-8 sm:pl-10 pr-12 sm:pr-16 w-full' />
                </div>
            </div>
            {/* Join us */}
            <p className='text-center font-bold text-sm text-[#a2a2a2] mt-4 sm:mt-2'>Join Us</p>
            <div className='flex flex-col sm:flex-row justify-between items-center mx-4 sm:mx-48 mt-8 gap-4 sm:gap-0'>
                <div className='flex flex-col justify-center items-center gap-1'>
                    <img src={feedback} alt="Feedback_img" className='w-20 h-auto sm:w-24' />
                    <p className='font-semibold text-xs text-[#a2a2a2] text-center'>Manage And Edit Your Ratings</p>
                </div>

                <div className='flex flex-col justify-center items-center gap-1'>
                    <img src={man} alt="AnonymousMan_img" className='w-20 h-auto sm:w-24' />
                    <p className='font-semibold text-xs text-[#a2a2a2] text-center'>Your Ratings Are Always Anonymous</p>
                </div>

                <div className='flex flex-col justify-center items-center gap-1'>
                    <img src={feed} alt="Feedback_img" className='w-20 h-auto sm:w-24' />
                    <p className='font-semibold text-xs text-[#a2a2a2] text-center'>Manage And Edit Your Ratings</p>
                </div>
            </div>
        </>
    )
}

export default LandingPage