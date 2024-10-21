import React from 'react'

const SharkTank = () => {
    return (
        <div className='px-32 py-10 bg-[url("./src/assets/bluebg.webp")]'>
            <div className='flex justify-between px-20 items-end'>
                <div className='font-bold tracking-wider text-[#FAECA9] text-3xl leading-normal py-4'>
                    <h2>Trusted by<br />
                        Aman Gupta and Ritesh Agrawal</h2>
                </div>
                <div><img className='h-[158px] w-[115px]' src="https://d8zm9ei35njj5.cloudfront.net/wp-content/uploads/2024/03/Group-4809638311-150x205.webp" alt="" /></div>
            </div>
            <div className='flex gap-40 mb-8 px-20'>
                <img src="https://d8zm9ei35njj5.cloudfront.net/wp-content/uploads/2024/03/boat2.png" alt="" />
                <img src="https://d8zm9ei35njj5.cloudfront.net/wp-content/uploads/2024/03/boat.webp" alt="" />
            </div>
            <div className='pl-20 flex justify-between'>
                <div className='w-full'>
                    <img className=' rounded-3xl w-[405px] h-[270px] p-[10px]' src="https://d8zm9ei35njj5.cloudfront.net/wp-content/uploads/2024/03/IMG_4045-1024x683.webp" alt="" />
                </div>
                <div className='-ml-36 p-3 pr-0 w-fit'>
                    <h1 className='text-white font-semibold text-4xl mb-5'>Funding Amount: ₹1.1 Cr
                    </h1>
                    <p className='text-lg tracking-wider text-white'>Thrilled to announce that iDreamCareer secured INR 1.1 Crore funding from Ritesh Agrawal (Founder & CEO, OYO) and Aman Gupta (Founder & CEO, boAt) on Shark Tank India Season 3. This achievement inspires us to expand our reach and keep fulfilling more career dreams.</p>
                </div>
            </div>
        </div>
    )
}

export default SharkTank