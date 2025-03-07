import { NavLink } from "react-router-dom"
import { FiMenu } from "react-icons/fi";
import "./Navbar.css"
import Logo from "../assets/Logo.svg"

const Navbar = () => {
  return (
    <div className="flex justify-between items-center w-[100%] py-2 px-3 rounded-2xl bg-slate-400 backdrop-filter backdrop-blur-lg bg-opacity-30 shadow-xl" >
      <div className="flex items-center justify-center gap-1 py-1">
        <img src={Logo} alt="" className="w-auto h-10 rounded-full" />
        <span className="font-bold font-sans text-black">MMUST ELC</span>
      </div>

      <ul className="hidden lg:flex gap-12 text-base/7 font-semibold text-gray-900">
        <NavLink to="/"><li className="inline-block cursor-pointer hover:bg-gray-50 duration-200 px-3 rounded-md ease-in-out">Home</li></NavLink>
        <NavLink to="/about"><li className="inline-block cursor-pointer hover:bg-gray-50 duration-200 px-3 rounded-md ease-in-out">About</li></NavLink>
        <NavLink to="/events"><li className="inline-block cursor-pointer hover:bg-gray-50 duration-200 px-3 rounded-md ease-in-out">Events</li></NavLink>
      </ul>

      <button className="bg-[#652727ff] hover:bg-[#5f0909ff] text-white border-none outline-none px-5 py-1 rounded-md text-base hidden lg:inline-block ">Learn More</button>

      <FiMenu className="lg:hidden inline-block font-bold text-black text-2xl cursor-pointer" />
    </div>
  )
}

export default Navbar
