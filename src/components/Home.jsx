
const Home = () => {
  return (
    <>
      <section className="flex font-[sans-serif] justify-center p-10 items-center">
        <div className="flex items-center justify-between gap-20 max-w-[84rem]">
          <div className="flex flex-col w-[44%]">
            <h1 className="font-semibold text-[#1E405E] text-4xl py-10 leading-loose">
              <span className="text-[#58ADFF]">Expert</span> Career Guidance,<br />
              <span className="text-[#58ADFF]">Better</span> College Prospects
            </h1>
            <p className="text-base mr-[150px] leading-6">
              A career counselling platform to help you navigate your career path
              with the help of our expert certified counselors
            </p>
            <button className="mt-10 rounded-lg bg-blue-600 h-10 w-52 text-white">
              Chat with an Expert
            </button>
          </div>
          <div className="flex gap-[20px]">
            <div className="flex flex-col gap-[20px]">
              <img
                src="/public/group3.webp"
                className="transition ease-in duration-300 hover:scale-[1.123] h-[165px] w-[261px]" />
              <img
                src="/src/assets/group2.webp"
                className="hero-img h-[246px] w-[261px]" />
            </div>
            <div className="flex flex-col gap-[20px]">
              <img
                src="src/assets/group1.webp"
                className="hero-img h-[227px] w-[261px]" />
              <img
                src="./src/assets/group4.webp"
                className="hero-img h-[183px] w-[80%]" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
