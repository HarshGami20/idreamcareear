import { FaArrowRight, FaCheck } from 'react-icons/fa'
import { Button } from '../UI/Button'
import { RiSafariLine } from 'react-icons/ri'

const Program = () => {
    return (
        <div className=''>
            <Stickydiv />
            <Tick />
            <Tick />
            <Tick />
            <Tick />
            <Tick />
            <Tick />
            <Tick />
            <Tick />
            <Tick />
            <Tick />
            <div>
                <h1 className='text-xl tracking-wider pt-7 border-t-2 m-10 border-blue-500 text-[var(--texth)] text-center'>Need additional Sessions? avail it at ₹3000 per session</h1>
            </div>
            <div className='flex tracking-wider justify-between items-start w-full px-10 mt-20'>
                <div className='w-fit p-5 '>
                    <h1 className='text-3xl font-bold'><img src='https://d8zm9ei35njj5.cloudfront.net/wp-content/uploads/2023/12/mdi_tick-decagram.webp'
                        className='text-cyan-500 inline-block mr-3' />Outcome</h1>
                </div>
                <div className='w-[302px] flex flex-col gap-10'>
                    <div className='flex'>
                        <FaCheck className='text-4xl text-green-500' />
                        <p className='ml-3  text-sm text-[var(--textgray)]'>Absolute clarity on your Areas of interest, Aptitude Level, Personality Type, and your Strength </p>
                    </div>
                    <div className='flex'>
                        <FaCheck className='text-base text-green-500' />
                        <p className='ml-3  text-sm text-[var(--textgray)]'>
                            Recommendation of suitable Career Paths.</p>
                    </div>
                </div>
                <div className='w-[302px] flex flex-col gap-10'>
                    <div className='flex'>
                        <FaCheck className='text-4xl text-green-500' />
                        <p className='ml-3  text-sm text-[var(--textgray)]'>Absolute clarity on your Areas of interest, Aptitude Level, Personality Type, and your Strength </p>
                    </div>
                    <div className='flex'>
                        <FaCheck className='text-base text-green-500' />
                        <p className='ml-3  text-sm text-[var(--textgray)]'>Recommendation of suitable Career Paths.</p>
                    </div>
                    <div className='flex'>
                        <FaCheck className='text-2xl text-green-500' />
                        <p className='ml-3  text-sm text-[var(--textgray)]'>
                            Absolute clarity on your course, colleges, and backup colleges</p>
                    </div>
                </div>
                <div className='w-[302px] flex flex-col gap-10'>
                    <div className='flex'>
                        <FaCheck className='text-4xl text-green-500' />
                        <p className='ml-3  text-sm text-[var(--textgray)]'>Absolute clarity on your Areas of interest, Aptitude Level, Personality Type, and your Strength </p>
                    </div>
                    <div className='flex'>
                        <FaCheck className='text-4xl text-green-500' />
                        <p className='ml-3  text-sm text-[var(--textgray)]'>Absolute clarity on your Areas of interest, Aptitude Level, Personality Type, and your Strength </p>
                    </div>
                    <div className='flex'>
                        <FaCheck className='text-4xl text-green-500' />
                        <p className='ml-3  text-sm text-[var(--textgray)]'>Full support in building an ideal profile necessary to attract top higher education opportunities</p>
                    </div>
                    <div className='flex'>
                        <FaCheck className='text-5xl text-green-500' />
                        <p className='ml-3  text-sm text-[var(--textgray)]'>Our commitment to be there with you until you successfully move to grade XI in the right fit school, board and subject-combination</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Program


export const Stickydiv = () => {
    return (
        <div className='sticky mx-2 top-0 z-50 bg-white flex justify-between shadow-xl mt-32 px-32 p-5'>
            <div className='flex items-center gap-10 tracking-wider font-semibold text-[var(--texth)]'>
                <h1 className='text-[22px]'>Compare <br /> Pograms</h1>
                <FaArrowRight className='text-cyan-500' />
            </div>
            <div className='flex flex-col gap-4'>
                <div className='w-full border-b-2 border-cyan-500'>
                    <button className='rounded-full  w-full p-1 px-10 bg-[#E5F4FF] '>Basic</button>
                    <p className='text-[17px] py-3 text-center'>Know your Sekf</p>
                </div>
                <div>
                    <h2 className='text-[var(--texth)] text-[24px] font-bold mb-3'>₹ 4,999</h2>
                    <Button> Enroll Now</Button>
                </div>
            </div>
            <div className='flex flex-col gap-4'>
                <div className='w-full border-b-2 border-cyan-500'>
                    <button className='rounded-full  w-full p-1 px-10 bg-[#E5F4FF] '>for Stream Selection</button>
                    <p className='text-[17px] py-3 text-center'>Career Path Pro</p>
                </div>
                <div>

                    <h2 className='text-[var(--texth)] text-[24px] font-bold mb-3'>₹ 6,999</h2>
                    <Button> Enroll Now</Button>
                </div>
            </div>
            <div className='flex flex-col gap-5'>
                <div className='w-full border-b-2 border-cyan-500'>
                    <button className='rounded-full  w-full p-1 px-10 bg-[#E5F4FF] '>for Extensive Guidance</button>
                    <p className='text-[17px] py-4 text-center'>Academic Path Pro</p>
                </div>
                <div>
                    <h2 className='text-[var(--texth)] text-[24px] font-bold mb-3'>₹ 22,000</h2>
                    <Button> Enroll Now</Button>
                </div>
            </div>
        </div>
    );
}


export const Tick = () => {
    return (
        <div className='flex justify-between items-center w-full px-10 border-b-2 mt-10 tracking-wider'>
            <div className='w-fit p-5'>
                <h1><RiSafariLine className='text-cyan-500 inline-block mr-5' />Career Exploration</h1>
                <p className='w-[250px] mt-3 text-sm text-[var(--textgray)]'>Access well-researched content on 550+ careers</p>
            </div>
            <FaCheck className='w-[302px] text-2xl text-center text-green-500' />
            <FaCheck className='w-[302px] text-2xl text-center text-green-500' />
            <FaCheck className='w-[302px] text-2xl text-center text-green-500' />
        </div>
    );
}