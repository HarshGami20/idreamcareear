import gsap from 'gsap'
import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Sun = () => {
    gsap.registerPlugin(ScrollTrigger);
    const arowRrf = useRef()
    useGSAP(() => {

        var tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".sun",
                start: 'top bottom',
                end: 'bottom top',
                ease: "power1",
                scrub: true,
                // markers: true
            },
        });

        tl.from('.sun', {
            rotate:360
        })
    })

    return (
        <>
            <div className='flex items-center justify-center flex-col gap-10 bg-white'>
                <div ref={arowRrf} className='sun'>
                    <img className='w-[143px] aspect-square' src="./src/assets/sun.webp" alt="" />
                </div>
                <div className='btn bg-gradient-to-b from-[#dbcfba] to-[#e0c69c] px-10 py-2 shadow-xl shadow-[#e9c07e] rounded-full border border-[#e9c07e]'>
                    <h4 className='text-4xl font-bold text-blue-950'>Paving a path for your Bright future</h4>
                </div>
                <h4 className='text-[var(--textgray) ]'>Here’s how</h4>
            </div>
        </>
    )
}

export default Sun