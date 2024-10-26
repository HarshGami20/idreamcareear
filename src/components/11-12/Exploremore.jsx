import { FaArrowRight } from "react-icons/fa"

const Exploremore = () => {
    return (
        <div>
            <h1 className="text-[30px] tracking-wider font-semibold text-[var(--texth)] text-center my-5 max-w-[90rem]">Explore more programs relevant to you!</h1>
            <div className="flex justify-between gap-5 mt-28 mx-32">
                <div className="content-center cursor-pointer w-[350px] h-[220px] relative text-[var(--texth)] bg-gradient-to-br from-[#C2E1FE] to-[#EAF5FE] rounded-3xl">
                    <h1 className="text-center">Study Abroad<FaArrowRight className="inline" />
                    </h1>
                    <img className="absolute w-28 -top-14 left-[50%] translate-x-[-50%]" src="/src/assets/explor (2).webp" alt="" />
                </div>
                <div className="content-center cursor-pointer w-[350px] h-[220px] relative text-[var(--texth)] bg-gradient-to-br from-[#C6FDEC] to-[#E9FEF8] rounded-3xl">
                    <h1 className="text-center">Study Abroad<FaArrowRight className="inline" />
                    </h1>
                    <img className="absolute w-28 -top-14 left-[50%] translate-x-[-50%]" src="/src/assets/explor (3).webp" alt="" />
                </div>
                <div className="content-center cursor-pointer w-[350px] h-[220px] relative text-[var(--texth)] bg-gradient-to-br from-[#F8DADA] to-[#FCF0F0] rounded-3xl">
                    <h1 className="text-center">Study Abroad<FaArrowRight className="inline" />
                    </h1>
                    <img className="absolute w-28 -top-14 left-[50%] translate-x-[-50%]" src="/src/assets/explor (1).webp" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Exploremore