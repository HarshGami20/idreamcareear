import { FaAngleRight } from "react-icons/fa"

const SeeHow = () => {
  return (
    <div className="bg-[#375A81] relative">
        <img className="absolute top-10" src="https://d8zm9ei35njj5.cloudfront.net/wp-content/uploads/2024/02/Group-48096367.webp" alt="" />
        <div className="max-w-[90rem] mx-32 pt-10">
            <div className="flex justify-between items-end tracking-wider text-white">
                <h1 className="text-3xl leading-[53px]">See how <span className="text-[#FB951E]">iDreamCareer</span><br />
                is transforming Student Futures</h1>
                <p>View all stories<FaAngleRight className="inline ml-3" /></p>
            </div>
            <div className="flex justify-between rounded-3xl mt-5">
                <img className="w-[478px] h-[308px] scale-90 " src="/src/assets/seehow (1).webp" alt="" />
                <img className="w-[478px] h-[308px] scale-90 " src="/src/assets/seehow (2).webp" alt="" />
            </div>
        </div>
    </div>
  )
}

export default SeeHow