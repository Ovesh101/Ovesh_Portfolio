import {useEffect,useState} from 'react'
import { Link } from 'react-router-dom'

import { styles } from '../style'
import { navLinks } from '../constants'
import { logowhite ,menu, close } from '../assets'

const Navbar = () => {

  const [active,setActive] = useState("");
  const [toggle,setToggle] = useState("true")
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);



  

  return (
    <nav
    className={`${
      styles.paddingX
    } w-full flex items-center py-5 fixed top-0 z-20 ${
      scrolled ? "bg-primary" : "bg-transparent"
    }`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
        to="/"
        className='flex items-center gap-2'
        onClick={() => {
          setActive("");
          window.scrollTo(0,0);
        }}
        >
          <img src={logowhite} alt="logo" className='w-9 h-9' />
          <p className='text-white sm:text-[5px] md:text-[18px] font-bold cursor-pointer'> Ovesh <span className='sm:block '>| Full Stack Developer</span></p>
        </Link>
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((Link) => (
            <li
              key = {Link.id}
              className={`${
                active === Link.title 
                ? "text-white"
                : "text-secondary"
                
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick ={() => {
                if(Link.title == "Download CV") {
                  window.open("https://drive.google.com/file/d/1Gk7f82gPQv9g9jIICjbmZ2_FdbHnu2NH/view?usp=drive_link","_blank")
                }
                  else{
                      setActive(Link.title);
                  }                   
                }}
              
            >
              
              <a href={`#${Link.id}`}>{Link.title}</a>
            </li>

          ))}
        </ul>

        <div className='sm:hidden flex flex-1 justify-center items-center'>
          <img
            src={!toggle ? close : menu}
            alt='menu'
            className='w-[50px] h-[50px] object-contain'
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
               
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
  
}

export default Navbar
