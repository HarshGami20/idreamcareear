import React from 'react'

const Mustwatch = ({url}) => {
  return (
    <div className='bg-gradient-to-b from-[#FFFF] to-[#FCF2E1]'>
        <div className='flex justify-between mx-32 py-20 tracking-wide'>
            <div> 
                <h3 className='text-[#1E405E] text-[19px] font-semibold'><img className='inline-block mr-5 w-[48px]' src="https://d8zm9ei35njj5.cloudfront.net/wp-content/uploads/2023/12/Group-48096149-1.webp" alt="" /><span className='text-[#FF6600]'>MUST-WATCH</span>for IX & X class students</h3>
                <h1 className='text-[#1E405E] ml-32 mt-10 w-[70%] font-semibold text-4xl tracking-wider leading-[45px] '>A Comprehensive program for <span className='text-[#00ACFF]'> Selecting the Right Stream.</span></h1>
            </div>
            <div>
            <iframe  className='rounded-2xl border-[7px] border-sky-200 mr-10' allowfullscreen="" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" title="Stream Selection Program for class 9th and 10th students | Choose the Right Stream | iDreamCareer" width="447" height="251" src="https://www.youtube.com/embed/UvWs2MroVjY?controls=1&amp;rel=0&amp;playsinline=0&amp;modestbranding=0&amp;autoplay=0&amp;enablejsapi=1&amp;origin=https%3A%2F%2Fidreamcareer.com&amp;widgetid=1" id="widget2"></iframe>
            </div>
        </div>
    </div>
  )
}

export default Mustwatch