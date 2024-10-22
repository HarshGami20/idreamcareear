import { MdClose } from 'react-icons/md'
import { useState } from 'react'



const Whatsapp = () => {

    const [togglee, setTogglee] = useState(true)
    const handleClick = () => {
        setTogglee(!togglee);
    };

    return (
        <div className={togglee ? 'fixed boxs flex-col flex m-4 gap-4 bg-white z-50 p-4 rounded-3xl right-0 bottom-0' : 'hidden'}>
            <button onClick={handleClick} className='absolute top-3 right-5 text-xl'><MdClose /></button>
            <div className='flex items-center'><img className='w-16' src="./src/assets/logo.png" alt="" />
                <h2 className='text-xl ml-3 text-cyan-500'>iDreamCareer</h2>
            </div>
            <div className='flex border-t py-3 items-center'><img className='w-14' src="./src/assets/whatsapp.png" alt="" />
                <h2 className='text-3xl font-bold text-[var(--texth)] '>Chat with an Expert</h2>
            </div>
            <p className='text-lg mb-4 text-[var(--textgray)]'>Please fill out the below details to proceed.</p>
            <input className='p-2 text-base rounded-lg border border-gray-700 ' type="text" placeholder='Name' />
            <input className='p-2 text-base rounded-lg border border-gray-700 ' type="text" placeholder='Email' />
            <input className='p-2 text-base rounded-lg border border-gray-700 ' type="text" placeholder='Number' />
            <button className='bg-gray-800 rounded-lg p-2 border border-black text-white'>Chate with Expert!</button>
        </div>
    )
}

export default Whatsapp