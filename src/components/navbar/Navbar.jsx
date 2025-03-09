import { useEffect, useState } from "react"
import "./Navbar.css"
import Logo from "../../assets/Logo.png"
import { NavLink } from "react-router-dom"
import { Link } from "react-scroll"
// import menu_icon from "../../assets/menu-icon.png"
import { HiMenuAlt3 } from "react-icons/hi";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      (window.scrollY > 50) ? setSticky(true) : setSticky(false);
    });
  }, []);

  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  }

  return (
    <nav className={`main ${sticky ? "dark-nav" : ""}`}>
      <div className="flex items-center space-x-2">
        <img src={Logo} alt="" className="w-12 lg:w-16 bg-[#faebd7] rounded-full" />
        <p className="logo-text">
          <span className="font-extrabold text-base">MMUST-ELC</span>
          <span className="text-xs block">An Epitome of Excellence</span>
        </p>
      </div>
      <ul className={mobileMenu ? "" : "hide-mobile-menu"}>
        <NavLink to="/"><li className="inline-block my-1 mx-5 text-base">Home</li></NavLink>
        <NavLink to="about"><li className="inline-block my-1 mx-5 text-base">About</li></NavLink>
        <NavLink to="/events"><li className="inline-block my-1 mx-5 text-base">Gallery</li></NavLink>

        <Link to="contact" smooth={true} offset={-260} duration={500}>
          <button className="button">
            <span className="btn-text">
              Contact Us
            </span>

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
            </svg>
          </button>
        </Link>
      </ul>

      {/* <img src={menu_icon} alt="" /> */}
      <HiMenuAlt3 className="menu-icon text-[#fdfdfdff]" onClick={toggleMenu} />
    </nav>
  )
}

export default Navbar
