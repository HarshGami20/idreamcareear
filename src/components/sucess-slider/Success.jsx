import React from 'react'
import SliderSlick from './Slider-slick'

const Success = () => {
  return (
    <div className="relativ bg-gradient-to-b from-[var(--from)] to-[var(--to)]">
      <div className="relative">
        <img className="h-16 absolute left-16 -top-4 p-" src="./src/assets/upp.webp" alt="" />
      </div>
      <div className='flex items-center justify-start flex-col justify'>
        <div className='text-center tracking-widest'>
          <h3 className='text-lg pt-5 text-[var(--textgray)]'>success stories</h3>
          <h2 className='text-4xl p-5 font-medium text-[var(--texth)]'>Turning Visions into Victories!</h2>
        </div>

      </div>
      <SliderSlick />
      <div className="h-full relative">
        <div className="relative  h-full">
          <img className="h-16 absolute right-16 -bottom-9 " src="./src/assets/down.webp" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Success