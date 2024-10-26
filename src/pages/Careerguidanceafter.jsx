import Need from "../components/11-12/Need"
import Appdiv from "../components/Appdiv"
import Counselors from "../components/Counselors"
import Faq from "../components/Faq"
import Howhelp from "../components/Howhelp"
import Program from "../components/Program"
import Success from "../components/sucess-slider/Success"
import Tranding from "../components/Tranding"
import { Button } from "../UI/Button"

const Careerguidanceafter = () => {
    return (
        <>
            <section className="bg-[#FBEED4] relative flex justify-center">
                {/* <div className="absolute bg-[#FBEED4] bottom-0 w-full last:0 -scale-y-100">
          <svg className="w-full z-50 h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 283.5 19.6" preserveAspectRatio="none">
            <path className="fill-[#FBEED4] opacity-35" d="M0 0L0 18.8 141.8 4.1 283.5 18.8 283.5 0z"></path>
            <path className="fill-[#FBEED4] opacity-35" d="M0 0L0 12.6 141.8 4 283.5 12.6 283.5 0z"></path>
            <path className="fill-[#FBEED4] opacity-35" d="M0 0L0 6.4 141.8 4 283.5 6.4 283.5 0z"></path>
            <path className="fill-[#FBEED4]" d="M0 0L0 1.2 141.8 4 283.5 1.2 283.5 0z"></path>
          </svg>
        </div> */}
                <div className="flex py-20 items-center justify-between w-full mx-32 max-w-[90rem]">
                    <div className="tracking-wider">
                        <h1 className="text-3xl tracking-wider font-medium mb-3 text-[#1E405E]">Find the Perfect</h1>
                        <h1 className="text-3xl tracking-wider font-medium mb-10 text-[#F29912]">College and Course Match!</h1>
                        <p className="text-[#6D6D73] mr-48 mb-12 ">Discover your path to success with us</p>
                        <Button >Chat with a Counselor</Button>
                    </div>
                    <div className=''>
                        <img className="w-[368px] h-[363px] mr-10" src="https://d8zm9ei35njj5.cloudfront.net/wp-content/uploads/2023/02/final-image-1.gif" alt="" />
                    </div>
                </div>
            </section>
            <section>
                <div className="mt-36 mb-16">
                    <h1 className="text-center tracking-wider text-[18px] text-[#363636]">We have successfully helped students from <span>Top Schools in India!</span></h1>
                </div>
                <div className="overflow-hidden mb-16">
                    <div className="scroll flex gap-14 items-center justify-start">
                        <img className="h-20 w-full" src="./src/assets/university-1.webp" alt="" />
                        <img className="h-20 w-full" src="./src/assets/university-2.webp" alt="" />
                        <img className="h-20 w-full" src="./src/assets/university-3.webp" alt="" />
                        <img className="h-20 w-full" src="./src/assets/university-4.webp" alt="" />
                    </div>
                </div>
            </section>
            <Success />
            <div className="mt-28"></div>
            <Counselors />
            <div className="mt-28"></div>
            <Howhelp />
            <div className="shadow-2xl bg-gradient-to-b from-[#FFFF] to-[#FCF2E1]">
                <div className='max-w-[90rem]'>
                    <div className='flex justify-between mx-32 py-20 tracking-wide'>
                        <div>
                            <h3 className='text-[#1E405E] text-[19px] font-semibold'><img className='inline-block mr-5 w-[48px]' src="https://d8zm9ei35njj5.cloudfront.net/wp-content/uploads/2023/12/Group-48096149-1.webp" alt="" /><span className='text-[#FF6600]'>MUST-WATCH</span>for IX & X class students</h3>
                            <h1 className='text-[#1E405E] ml-32 mt-10 w-[70%] font-semibold text-4xl tracking-wider leading-[45px] '>A Comprehensive program for <span className='text-[#00ACFF]'> Selecting the Right Stream.</span></h1>
                        </div>
                        <div>
                            <iframe className='rounded-2xl border-[7px] border-sky-200 mr-10' allowfullscreen="" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" title="Stream Selection Program for class 9th and 10th students | Choose the Right Stream | iDreamCareer" width="447" height="251" src="https://www.youtube.com/embed/bBzTrzEmBSY?controls=1&rel=0&playsinline=0&modestbranding=0&autoplay=0&enablejsapi=1&origin=https%3A%2F%2Fidreamcareer.com&widgetid=1" id="widget2"></iframe>
                        </div>
                    </div>
                </div>
            </div>
            <Program />
            <Need />
            <Tranding />
            <Appdiv />
            <Faq />
        </>
    )
}

export default Careerguidanceafter