import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { PiGraduationCapLight } from 'react-icons/pi'

const Hover = () => {
    return (
        <div className='flex rounded-3xl border-2 border-gray-400 m-10 '>
            <div className='flex relative'>
                <div className='first border-r-2 border-gray-400 w-60 p-10 flex flex-col gap-4'>
                    <div className='bg-red-300 text-4xl  rounded-full w-7 h-6 p-7 '>
                        <PiGraduationCapLight className='-translate-x-[50%] -translate-y-[50%]'/>
                    </div>
                    <h3 className='text-[var(--texth)] text-lg'>Pool of 550+ career choices</h3>
                    <p className='text-[var(--textgray)] text-sm'>Find the perfect career pathway thats just right for you</p>
                    <h3 className='text-[var(--texth)] text-base mt-10'>Know More </h3>
                </div>
                <div className='first border-r-2 border-gray-400 w-60 p-10 flex flex-col gap-4'>
                    <div className='bg-red-300 text-4xl  rounded-full w-7 h-6 p-7 '>
                        <PiGraduationCapLight className='-translate-x-[50%] -translate-y-[50%]'/>
                    </div>
                    <h3 className='text-[var(--texth)] text-lg'>Pool of 550+ career choices</h3>
                    <p className='text-[var(--textgray)] text-sm'>Find the perfect career pathway thats just right for you</p>
                    <h3 className='text-[var(--texth)] text-base mt-10'>Know More </h3>
                </div>
                <div className='first border-r-2 border-gray-400 w-60 p-10 flex flex-col gap-4'>
                    <div className='bg-red-300 text-4xl  rounded-full w-7 h-6 p-7 '>
                        <PiGraduationCapLight className='-translate-x-[50%] -translate-y-[50%]'/>
                    </div>
                    <h3 className='text-[var(--texth)] text-lg'>Pool of 550+ career choices</h3>
                    <p className='text-[var(--textgray)] text-sm'>Find the perfect career pathway thats just right for you</p>
                    <h3 className='text-[var(--texth)] text-base mt-10'>Know More </h3>
                </div>
                <div className='first border-r-2 border-gray-400 w-60 p-10 flex flex-col gap-4'>
                    <div className='bg-red-300 text-4xl  rounded-full w-7 h-6 p-7 '>
                        <PiGraduationCapLight className='-translate-x-[50%] -translate-y-[50%]'/>
                    </div>
                    <h3 className='text-[var(--texth)] text-lg'>Pool of 550+ career choices</h3>
                    <p className='text-[var(--textgray)] text-sm'>Find the perfect career pathway thats just right for you</p>
                    <h3 className='text-[var(--texth)] text-base mt-10'>Know More </h3>
                </div>
            </div>
        </div>
    )
}

export default Hover


export const Explorbtn = ({className}) => {
    return (
        <>
            <button class={className} className='bg-blue-950 flex gap-5 rounded-full items-center text-lg text-white px-7 py-2 font-medium '>
                Explore Now<FaArrowRight />
            </button>
        </>
    );
}