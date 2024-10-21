import React, { useState } from 'react'
import { FaAngleDown, FaAngleUp } from 'react-icons/fa'

const Faq = () => {
    return (
        <>
            <div className='tracking-widest my-14 text-center mx-32'>
                <h1 className='text-4xl font-bold text-[var(--texth)]'>FAQs: What students usually ask us?</h1>
                <p className='text-[21px] leading-10 mt-5 text-[var(--textcolor)]' >Career Counselling is a specialized service that needs multiple resources ranging from trained counsellors, to an updated databased and psychometric tests. We combine this all and bundle it as a service of schools of repute eager to benefit their students.</p>
            </div>
            <div className='mb-14'>
                <Wfaq />
                <Wfaq />
                <Wfaq />
                <Wfaq />
                <Wfaq />
                <Wfaq />
                <Wfaq />
            </div>
        </>
    )
}

export default Faq

export const Wfaq = () => {

    const [togglee, setTogglee] = useState(false)
    const handleClick = () => {
        setTogglee(prevState => !prevState);;
    };
    return (
        <>
            <div onClick={handleClick} className='mx-32 p-5 cursor-pointer hover:text-blue-900' >
                <div className={togglee ? 'text-blue-600' : ''}>
                {togglee ? <FaAngleUp  className='inline mx-2'/> : <FaAngleDown className='inline mx-2' />}  <h3 className='inline text-xl'>What is Career Counseling & Guidance?</h3>
                </div>
            </div>
            <div className={togglee ? 'block' : 'hidden'} >
                <div className='mx-32 leading-10 text-lg tracking-wider text-[var(--textgray)] px-4 flex flex-col gap-7'>
                    <p>As defined by UNICEF, Career Counselling / Career Guidance is a comprehensive, right-based development approach which is designed to assist individuals in making and implementing informed educational and occupational choices, which in turn lead to their social, financial and emotional well-being.</p>
                    <p>Career Guidance is a process by which an adolescent makes a successful transition from school to higher education and finally into the workforce. The process involves exploring different careers, knowing the different pathways to careers, opportunities available, earning levels, and the time period required. Further it involves knowing one’s strengths and interest, matchmaking one’s own potential to the world of careers and then selecting the right courses and colleges, the process to apply and finally the ways to finance his/her education. </p>
                    <p>iDreamCareer has a team of more than 898 stalwart career counselors working all across 105 districts of India. Our career counsellors can introduce you to a plethora of career options to choose from. We at iDC can clarify your doubts on various career options and their scope. Our services also will help you scuffle through the top colleges to make the right career choice.</p>
                </div>
            </div>
        </>
    );
}