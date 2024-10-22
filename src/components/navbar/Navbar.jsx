import React from "react"
import { IoIosCall } from "react-icons/io";



const Navbar = () => {
  return (
    <>
      <header>
        <nav className="relative h-24">
          <div className="w-screen flex items-center justify-center">
            <div className="boxn max-w-[90rem] w-full fixed top-0 z-10 bg-white rounded-xl border m-2">

              <div className="flex text-[16px] h-[70px] text-[var(--textgray)] items-center justify-start p-3">
                {/* left logo divison */}
                <div className="">
                  <img
                    src="./src/assets/Logo.png"
                    alt="logo"
                    className="h-8 mx-10" />
                </div>
                {/* center text links */}
                <div className="flex items-start">
                  <ul className="flex justify-between tracking-wide cursor-default text-sm">
                    <li className="group hover:bg-[#F3F4F5] py-2 px-4 rounded">Career Guidance
                      <ul className="absolute mt-2 hidden group-hover:flex  pr-10 p-4 flex-col gap-2 border rounded-2xl bg-white">
                        <li className="">9th - 10th</li>
                        <li>11th - 12th</li>
                        <li>College - UG/PG</li>
                      </ul>
                    </li>
                    <li className="group hover:bg-[#F3F4F5] py-2 px-4 rounded">Study Abroad
                      <ul className="absolute mt-2 hidden group-hover:flex pr-10 p-4 flex-col gap-2 border rounded-2xl bg-white">
                        <li>Guidence Program</li>
                        <li>UK</li>
                        <li>USA</li>
                        <li>Canada</li>
                        <li>Austrelia</li></ul>
                    </li>
                    <li className="group hover:bg-[#F3F4F5] py-2 px-4 rounded">College Application
                      <ul className="absolute mt-2 hidden group-hover:flex  pr-10 p-4 flex-col gap-2 border rounded-2xl bg-white">
                        <li>Liberal Arts</li>
                        <li>Design: NID, NIFT and IIT</li>
                        <li>CUET</li></ul>
                    </li>
                    <li className="hover:bg-[#F3F4F5] py-2 px-4 rounded">Corporate-CSR</li>
                    <li className="hover:bg-[#F3F4F5] py-2 px-4 rounded">Counselors</li>
                    <li className="hover:bg-[#F3F4F5] py-2 px-4 rounded">Schools</li>
                  </ul>
                </div>

                {/* right num and button divison */}
                <div className="flex gap-8 items-center absolute right-3  tracking-wider">
                  <div className="flex text-[var(--texth)] gap-2 items-center hover:text-blue-400 cursor-pointer"> <IoIosCall /> 09555990000</div>
                  <button className="bg-blue-500 text-white font-bold px-7 rounded-md py-2">Login</button>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header></>
  )
}

export default Navbar