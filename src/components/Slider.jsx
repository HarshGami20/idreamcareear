
const Slider = () => {
    return (
            <div className="h-28 bg-white mx-5 flex items-center justify-center">
                <div className="p-5">
                    <p>
                        College Acceptance for our <br />
                        students
                    </p>
                </div>
                <div className="w-[80%] overflow-hidden">
                    <div className="scroll flex gap-14 items-center justify-start">
                        <img className="h-16 w-full" src="./src/assets/university-1.webp" alt="" />
                        <img className="h-16 w-full" src="./src/assets/university-2.webp" alt="" />
                        <img className="h-16 w-full" src="./src/assets/university-3.webp" alt="" />
                        <img className="h-16 w-full" src="./src/assets/university-4.webp" alt="" />
                    </div>
                </div>
            </div>
    )
}

export default Slider