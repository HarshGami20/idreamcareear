import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { TiTick } from 'react-icons/ti'

const Howhelp = () => {
    return (
        <div className='flex items-center justify-center'>
            <div className='max-w-[90rem] mx-28 mb-10'>
                <h1 className='text-[32px] text-center tracking-wider font-medium'>How we are helping</h1>
                <h1 className='text-[32px] text-center text-cyan-500 tracking-wider font-medium'>1 million+ students like you!</h1>
                <div className='flex gap-14 mt-20 mb-5'>
                    <div style={{ boxShadow: '#AEEAC6 0px 0px 0px 2px, #AEEAC6 0px 4px 6px -1px, #AEEAC6 0px 1px 0px inset' }}
                        className='bg-white rounded-lg flex flex-col gap-2 p-6 pt-9 pr-0 '>
                        <h1 className='text-[#3D3E40] text-xl font-bold tracking-normal'><img className='inline-block mr-3' src="https://d8zm9ei35njj5.cloudfront.net/wp-content/uploads/2023/03/Real-time-chatpng.webp" alt="" />Get to Know Yourself</h1>
                        <p className='text-[#6D6D73] mt-5 leading-7 text-sm'><TiTick className='inline-block mr-3' />Areas of Interest, Aptitude Level and Personality Typ</p>
                        <p className='text-[#6D6D73] leading-7 text-sm'><TiTick className='inline-block mr-3' />Strengths & weaknesses</p>
                        <p className='text-[#6D6D73] leading-7 text-sm'><TiTick className='inline-block mr-3' />16-page in-depth career report</p>
                        <h3 className='text-base mt-10 mb-5 text-[#2ECC71]'>Take psychometric assessment<FaArrowRight className='inline-block ml-3' /></h3>
                    </div>
                    <div style={{ boxShadow: '#F7D79A 0px 0px 0px 2px, #F7D79A 0px 4px 6px -1px, #F7D79A 0px 1px 0px inset' }}
                        className='bg-white rounded-lg flex flex-col gap-2 p-6 pt-9 pr-0 '>
                        <h1 className='text-[#3D3E40] text-xl font-bold tracking-normal'> <img className='inline-block mr-3' src="https://d8zm9ei35njj5.cloudfront.net/wp-content/uploads/2023/03/Group-48095872.webp" alt="" />Get to Know Yourself</h1>
                        <p className='text-[#6D6D73] mt-5 leading-7 text-sm'><TiTick className='inline-block mr-3' />Areas of Interest, Aptitude Level and Personality Typ</p>
                        <p className='text-[#6D6D73] leading-7 text-sm'><TiTick className='inline-block mr-3' />Strengths & weaknesses</p>
                        <p className='text-[#6D6D73] leading-7 text-sm'><TiTick className='inline-block mr-3' />16-page in-depth career report</p>
                        <h3 className='text-base mt-10 mb-5 text-[#F39C12]'>Take psychometric assessment<FaArrowRight className='inline-block ml-3' /></h3>
                    </div>
                    <div style={{ boxShadow: '#ABDDFE 0px 0px 0px 2px, #ABDDFE 0px 4px 6px -1px, #ABDDFE 0px 1px 0px inset' }}
                        className='bg-white rounded-lg flex flex-col gap-2 p-6 pt-9 pr-0'>
                        <h1 className='text-[#3D3E40] text-xl font-bold tracking-normal'> <img className='inline-block mr-3' src="https://d8zm9ei35njj5.cloudfront.net/wp-content/uploads/2023/03/Group-48095872.webp" alt="" />Get to Know Yourself</h1>
                        <p className='text-[#6D6D73] mt-5 leading-7 text-sm'><TiTick className='inline-block mr-3' />Areas of Interest, Aptitude Level and Personality Typ</p>
                        <p className='text-[#6D6D73] leading-7 text-sm'><TiTick className='inline-block mr-3' />Strengths & weaknesses</p>
                        <p className='text-[#6D6D73] leading-7 text-sm'><TiTick className='inline-block mr-3' />16-page in-depth career report</p>
                        <h3 className='text-base mt-10 mb-5 text-[#ABDDFE]'>Take psychometric assessment<FaArrowRight className='inline-block ml-3' /></h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Howhelp