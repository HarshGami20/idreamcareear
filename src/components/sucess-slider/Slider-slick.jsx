import { sliderlinks } from './sliderlink'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";


const Sliderslick = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
      }
    return (
        <>
            <Slider {...settings}>
                {sliderlinks.map((link, index) => (
                    <div key={index} className='bg-white rounded-lg p-10 gap-5 my-20' >
                        <div className='flex flex-col'>
                            <h2 className='text-[16px] text-[var(--tectp)] my-4'>{link.top}</h2>
                            <div className='h-1 bg-blue-500 rounded-full mr-[30%]'></div>
                            <p className='text-[12px] text-[var(--textgray)] my-5'>{link.description}</p>
                        </div>
                        <div className='flex items-center gap-4'>
                            <img className='h-[74px] w-[74px]' src={link.url} alt="" />
                            <div className='tracking-wide'>
                                <h4 className='text-[14px] text-blue-400 font-bold'>{link.name}</h4>
                                <p className='twxt-[12px]'>{link.from}</p>
                            </div>
                        </div>
                    </div >
                ))
                }
            </Slider>
        </>
    )
}

export default Sliderslick


{/* <div key={index} className='bg-white rounded-lg p-10 m-10' >
                    <div className='flex flex-col'>
                        <h2 className='text-[16px] text-[var(--tectp)] my-4'>Understood best career opportunities for me</h2>
                        <div className='h-1 bg-blue-500 rounded-full mr-[30%]'></div>
                        <p className='text-[12px] text-[var(--textgray)] my-5'>Earlier I was too confused regarding my career options. There were too many career options and I didn’t know how to evaluate betwen them and choose one. In my first session, the counsellor helped me understand some of the best career opportunities.</p>
                    </div>
                    <div className='flex items-center gap-4 '>
                        <img className='h-[74px] w-[74px]' src="./src/assets/kritika.webp" alt="" />
                        <div className='tracking-wide'>
                            <h4 className='text-[14px] text-blue-400 font-bold'>Kritika Verma</h4>
                            <p className='twxt-[12px]'>2nd Year, Hansraj College</p>
                        </div>
                    </div>
                </div > */}