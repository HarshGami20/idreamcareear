import gsap from 'gsap'
import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";



const Unemp = () => {

    gsap.registerPlugin(ScrollTrigger);
    const graphRrf = useRef()
    useGSAP(() => {

        var tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".graph",
                start: 'top 70%',
                end: 'bottom 40%',
                ease: "power1",
                scrub: true,
                // markers: true
            },
        });

        tl.from('.graph', {
            opacity: 0,
            y: -100
        })

        tl.from('.arow',{
            x:-100,
        },"");


        // gsap.from('.graph', {
        //     opacity:0,
        //     y:-200,
        //     scrollTrigger: {
        //         trigger: '.graph,.arow',
        //         start:'top 70%%',
        //         end:'bottom 60%',
        //         markers: true,
        //         scrub: 4,
        //         ease:1
        //     },
        // })

    })

    return (
        <>

            <div className='relative'>

                {/* grapg hover part */}
                <div ref={graphRrf} className='graph w-full absolute -top-10 flex justify-center'>
                    <img className='w-[255px] h-[100%]' src="./src/assets/graph.webp" alt="" />
                </div>

                <div className='relative flex flex-wrap justify-between'>

                    {/* left of container */}
                    <div className='flex pb-40'>
                        <div>

                            <div className='left flex pt-32'>
                                <div className='arrow pl-4'>
                                    <img className='h-14 arow' src="./src/assets/arow.webp" alt="" />
                                </div>
                                <div className=''>
                                    <h2 className='text-5xl font-semibold text-[var(--texthead)] pl-6 '>42%</h2>
                                </div>
                            </div>
                            <div className='w-fit tracking-wider relative -top-7 ml-28'>
                                <p className='text-right mb-5'>Graduates in india</p>
                                <h3 className='font-bold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-[#1e405e] to-blue-500' >aged under 25 are</h3>
                                <p className='text-right mt-5 text-[var(--textgray)]'>(The IndianExpress, 2023)</p>
                            </div>
                        </div>
                        {/* center of container */}
                        <div className='text-center mt-56 ml-6 mb-20'>
                            <img className='w-[262px] h-[137px]' src="./src/assets/roundarow.webp" alt="" />
                            <div className='absolute m-auto -translate-x-20' >
                                <h2 className='text-red-700 font-bold text-4xl mb-10'>Unemployed</h2>
                                <p className='text-[var(--textgray)] mb-4'>but</p>
                                <div className='btn bg-gradient-to-t from-cyan-50 to-[var(--to)] px-10 py-2 shadow-xl  rounded-full border-2 border-blue-500'>
                                    <h4 className='text-3xl text-blue-950'>You can escape being part of this 42%.</h4>
                                </div>
                            </div>
                        </div>

                    </div>
                    {/* right of container */}
                    <div className='flex items-center'>
                        <img className='h-80' src="./src/assets/unemployment.png" alt="" />
                    </div>

                </div>

            </div>
        </>
    )
}

export default Unemp