import { useEffect, useState } from 'react'
import { MdClose } from 'react-icons/md'
import './popup.css'
import Whatsapp from './Whatsapp'

const Popup = () => {

    const [togglee, setTogglee] = useState(true)
    const handleClick = () => {
        setTogglee(!togglee);
    };
    const [wtogglee, setWtogglee] = useState(false)
    const handlewClick = () => {
        setWtogglee(!wtogglee);
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Escape') {
            setWtogglee(false);
            setTogglee(false);
        }
    };

    useEffect(() => {
        // Add event listener for keydown
        window.addEventListener('keydown', handleKeyDown);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

        // State to manage visibility
        const [isVisible, setIsVisible] = useState(false);

        // useEffect to set a timer
        useEffect(() => {
            // Set a timeout to change visibility after 5 seconds
            const timer = setTimeout(() => {
                setIsVisible(true);
            }, 5000);

            // Cleanup function to clear the timer if the component unmounts
            return () => clearTimeout(timer);
        }, []);


    return (
        <div>
            {isVisible ? (
                <div>
                <img onClick={handlewClick} className='bounce fixed cursor-pointer z-40 right-10 bottom-16 w-14' src="./src/assets/whatsapp.png" alt="" />
                {wtogglee? <Whatsapp /> : ''}
                <div className={togglee ? 'block' : 'hidden'} >
                    <div className='h-screen fixed z-30 bg-black bg-opacity-75 w-screen flex items-center justify-center'>
                        <div className='rounded-2xl boxs overflow-hidden flex items-center justify-center '>

                            <div className='flex w-[830px]'>
                                <div className='flex flex-col tracking-widest py-8 bg-white gap-7 p-6 pr-8 w-full'>
                                    <h1 className='text-2xl text-nowrap font-bold text-[var(--texth)]'>Chat with Real Experts,<br /><span className='text-red-700'>
                                        Not Bots!</span></h1>
                                    <p className='text-base mb-3 font-medium text-[var(--textgray)]'>Ask your career-related questions from Career Counseling Experts.</p>

                                    <input className='p-2 text-base w-[378px] rounded-lg border border-gray-700 ' type="text" placeholder='Name' />
                                    <input className='p-2 text-base w-[378px] rounded-lg border border-gray-700 ' type="text" placeholder='Email' />
                                    <input className='p-2 text-base w-[378px] rounded-lg border border-gray-700 ' type="text" placeholder='Number' />
                                    <button className='bg-gray-800 rounded-lg p-2 border border-black text-white'>Chate with Expert!</button>
                                </div>
                                <div className='w-full bg-cover relative bg-[url("./src/assets/popup.webp")]' >
                                    <div className='absolute right-0 p-3 text-xl cursor-pointer' onClick={handleClick}><MdClose /></div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                </div>

            ) : ''}
    {/* <h1 className='text-4xl text-center h-screen flex items-center justify-center'>wait</h1> */}

        </div>
    )
}

export default Popup
