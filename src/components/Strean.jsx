import React from 'react'
import { FaCheck } from 'react-icons/fa'

const Strean = () => {
    return (
        <div className='px-28 py-14 bg-gradient-to-t from-[#FDF6EB] to-[#F1F6FE]'>
            <div className='px-7 p-3 gap-10 flex items-center justify-between rounded-full bg-[#EAF0EE]'>
                <div className='bg-blue-400 text-center text-white w-full rounded-full py-2 '><h2>Corporatr-CSR</h2></div>
                <div className='bg-blue-400 text-center text-white w-full rounded-full py-2 '><h2>Schools</h2></div>
                <div className='bg-blue-400 text-center text-white w-full rounded-full py-2 '><h2>Counselors</h2></div>
            </div>
            <div className='flex flex-col items-center gap-10'>
                <div className='mt-14 text-4xl font-bold text-[var(--texth)]'><h2>Fueling India’s growth through key partnerships</h2></div>
                <div className='flex gap-8'>
                    <iframe className='rounded-3xl' width="560" height="331" src="https://www.youtube.com/embed/v31vXfINFDI?si=d5A8EjfMGRJaXR5V" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    <div className='relative w-[50%] p-5 text-lg  text-[var(--textgray)]'>
                        <p><FaCheck className='mr-4 inline-block text-green-500' />Partnered with 17 State governments, UNICEF, and 25+ Corporate CSR partners.</p>
                        <p><FaCheck className='mr-4 inline-block text-green-500' />Impacted over 2 million students.</p>
                        <p><FaCheck className='mr-4 inline-block text-green-500' />New Education Policy (NEP) curriculum in 10+ Indian languages.</p>
                        <button className='bottom-0 absolute px-5 py-2 border border-blue-400 text-blue-400 rounded-xl text-base'>Know More</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Strean