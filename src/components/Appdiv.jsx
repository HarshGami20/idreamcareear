import React from 'react'
import { FaCaretRight } from 'react-icons/fa'

const Appdiv = () => {
    return (
        <div className='flex justify-center'>
            <div className='bg-[#365980] pt-7 flex justify-between rounded-3xl max-w-[90rem] w-full my-14'>
                <div className='px-16 pr-24 p-10 tracking-wider'>
                    <h3 className='text-[35px] text-white'>Career Guidance is now</h3>
                    <h2 className='text-[35px] text-white font-semibold'>on your fingertips!</h2>
                    <p className='text-[#CADEF3] mt-10 text-[16px]'><FaCaretRight className='inline mr-3 text-[#CADEF3]' />
                        Ask your queries directly to experts</p>
                    <p className='text-[#CADEF3] mt-3 text-[16px]'><FaCaretRight className='inline mr-3 text-[#CADEF3]' />
                    Explore 550+ Careers</p>
                    <p className='text-[#CADEF3] mt-3 text-[16px]'><FaCaretRight className='inline mr-3 text-[#CADEF3]' />
                    Get information on Colleges, Entrance Exams and Scholarships</p>
                    <div className='flex justify-between pr-10 mt-16'>
                        <img className='h-[40px] ' src="/src/assets/app1.webp" alt="" />
                        <img className='h-[40px] ' src="/src/assets/app2.webp" alt="" />
                        <img className='h-[40px] ' src="/src/assets/app3.webp" alt="" />
                    </div>
                </div>
                <div className=''>
                    <img className='w-[652px] h-[444] p-3 mr-10'
                        src="https://d8zm9ei35njj5.cloudfront.net/wp-content/uploads/2023/03/app-career-screens-1536x1045.webp" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Appdiv