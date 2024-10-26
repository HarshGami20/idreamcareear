import React from 'react'
import { FaArrowRight, FaCheck } from 'react-icons/fa'
import { Button } from '../UI/Button'

const WhichProgram = () => {
    return (
        <div className='mt-20 flex items-center justify-center flex-col'>
            <div className='flex items-center w-screen'>
                <div className=''><img className='w-20' src="https://d8zm9ei35njj5.cloudfront.net/wp-content/uploads/2023/12/Group-48096167.webp" alt="" /></div>
                <h2 className='text-center m-auto text-2xl text-[var(--texth)] tracking-wider '>Still confused which program to choose?
                    <span className='text-cyan-500 underline ml-5'>Talk to our Experts <FaArrowRight className='inline-block ml-3' /> </span></h2>
            </div>
            <div>
                <h1 className='text-center tracking-wider font-medium mt-5 text-[32px] text-[var(--texth)]'>Want to know more about the</h1>
                <h1 className='text-center tracking-wider font-medium mt-3 text-[32px] text-cyan-500'>Psychometric Career Assessment Test?</h1>
                <p className='text-center tracking-wider mt-8 text-xl text-[var(--textgray)] '>View sample report and analyze how our psychometric assessment would help you!</p>
            </div>
            <div className='flex items-center justify-center gap-20 mt-10 mb-7'>
                <img className='w-[550px] h-[256px]' src="https://d8zm9ei35njj5.cloudfront.net/wp-content/uploads/2023/03/Group-48095437-2-1024x477.webp" alt="" />
                <div>
                    <p className='text-[20px] font-medium'><FaCheck className='mr-3 inline-block' /> Taken by <span className='text-red-700 font-semibold'> 22.5 Lakh+ students!</span></p>
                    <p className='text-[20px] font-medium'><FaCheck className='mr-3 inline-block' /> Industrys best reliability score of <span className='text-red-700 font-semibold'> 0.75!</span></p>
                    <p className='text-[20px] font-medium'>(Cronbach Alpha)</p>
                </div>
            </div>
            <Button className={'bg-yellow-400 py-3 font-normal text-center'}>Download Sample Report</Button>
        </div>
    )
}

export default WhichProgram