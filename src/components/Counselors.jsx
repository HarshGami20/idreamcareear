import React from 'react'

const Counselors = () => {
    return (
        <>
            <div className='absolute'></div>
            <div className='pl-20 pr-10 flex items-center justify-between py-20 bg-gradient-to-b from-[#e6e7ff] to-[#fefeff]'>
                <div className='w-[40%] flex flex-col gap-4'>
                    <h2 className='text-[37px] font-semibold'>Our Counselors sculpting <br />
                        student success</h2>
                    <p className='text-[21px]'>500+ Counselors with <span className='text-blue-500'>20+ years</span>  of experience in our team who have helped 1 Million+ students to kick start their Career Journey.</p>
                    <div className='flex items-center gap-3'>
                        <img className='h-10' src="./src/assets/ndc.webp" alt="" />
                        <p className='underline text-[18px]'>NCDA (USA) certified</p>
                    </div>
                </div>
                <div className='flex gap-5'>
                    <Card url='./src/assets/cirt1.webp'/>
                    <Card url='./src/assets/cirt2.webp'/>
                    <Card url='./src/assets/cirt3.png'/>
                </div>
            </div>
        </>
    )
}

export default Counselors

export const Card = ({url}) => {
    return (
        <>
            <div className='bg-white boxs rounded-lg p-5 flex items-center justify-center flex-col gap-3'>
                <div className='flex relative'>
                    <img className='h-[191px]' src={url} alt="" />
                    <img className='h-8 absolute ' src="./src/assets/ndc.webp" alt='' />
                </div>
                <h3>Parmita serma</h3>
                <h4>Masters in Biotechnologys</h4>
                <h4><span className='text-blue-500'>12+ years</span>of Counselting</h4>
            </div>
        </>
    )
}