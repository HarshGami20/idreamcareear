import React from 'react'

const Footer = () => {
    return (
        <div className='flex justify-between bg-gradient-to-b from-[var(--from)] to-[var(--to)]'>
            <div className='bg-[#314862] mt-[1px]'>
                <div className='p-10 text-gray-100 text-base tracking-wider flex flex-col gap-5'>
                    <h2 className='text-white font-lg font-semibold'>iDreamCareer</h2>
                    <p>
                        About Us
                    </p>
                    <p>
                        Our Team
                    </p>
                    <p> Contact Us
                    </p>
                <iframe className='rounded-xl' width="180" height="110" src="https://www.youtube.com/embed/HdQ_9OSKI_4?si=wN72TbQTg92vE_pD" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <p>Socials</p>
                <h2 className='text-white mt-10 font-semibold'>Talk to an Expert now!</h2>
                    
                </div>
            </div>
            <div>
                <Navlist />
                <Navlist />
            </div>
            <div>
                <Navlist />
                <Navlist />
            </div>
            <div>
                <Navlist />
                <Navlist />
            </div>
            <div>
                <Navlist />
                <Navlist />
            </div>
        </div>
    )
}

export default Footer

export const Navlist = () => {
    return (<>
        <div className='p-10 text-[var(--textgray)] text-base tracking-wider flex flex-col gap-5'>
            <h2 className='text-[var(--texth)] text-[20px] font-semibold'>Student&Parents</h2>
            <p>
                9th & 10th Students
            </p>
            <p>
                11th & 12th Students
            </p>
            <p> Undergraduate
            </p>
            <p>Liberal arts in India</p>
        </div>
    </>
    );
}