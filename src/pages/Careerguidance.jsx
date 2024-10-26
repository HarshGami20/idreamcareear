import Counselors from "../components/Counselors"
import Howhelp from "../components/Howhelp"
import Mustwatch from "../components/Mustwatch"
import Program from "../components/Program"
import Success from "../components/sucess-slider/Success"
import { Button } from "../UI/Button"
import Faq from '../components/Faq'
import WhichProgram from "../components/WhichProgram"
import Appdiv from "../components/Appdiv"

const Careerguidance = () => {
    return (
        <>
            <section className="bg-[#D4FEE3] relative flex justify-center">
                {/* <div className="absolute z-50 bottom-0 w-full last:0 -scale-y-100">
                    <svg className="w-full z-50 h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 283.5 19.6" preserveAspectRatio="none">
                        <path className="fill-[#D4FEE3] opacity-35" d="M0 0L0 18.8 141.8 4.1 283.5 18.8 283.5 0z"></path>
                        <path className="fill-[#D4FEE3] opacity-35" d="M0 0L0 12.6 141.8 4 283.5 12.6 283.5 0z"></path>
                        <path className="fill-[#D4FEE3] opacity-35" d="M0 0L0 6.4 141.8 4 283.5 6.4 283.5 0z"></path>
                        <path className="fill-[#D4FEE3]" d="M0 0L0 1.2 141.8 4 283.5 1.2 283.5 0z"></path>
                    </svg>
                </div> */}
                <div className="flex mx-32 py-24 items-center justify-between max-w-[90rem]">
                    <div className="tracking-wider ">
                        <h1 className="text-3xl tracking-wider font-medium mb-3 text-[#1E405E]">Help your child choose the</h1>
                        <h1 className="text-3xl tracking-wider font-medium mb-10 text-[#69D783]">Right Subject Combinations!</h1>
                        <p className="text-[#6D6D73] mr-48 mb-12 ">Discover their Areas of Interest and Consult with Expert Counselors!</p>
                        <Button >Speak To Expert!</Button>
                    </div>
                    <div>
                        <img className="w-[390px] h-[326px] mr-10" src="https://d8zm9ei35njj5.cloudfront.net/wp-content/uploads/2023/03/9th-and-10th-hero-banner-1-1024x858.webp" alt="" />
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
            <div className=" shadow-2xl">
                <Mustwatch />
            </div>
            <Program />
            <WhichProgram />
            <Appdiv />
            <Faq />
        </>
    )
}

export default Careerguidance