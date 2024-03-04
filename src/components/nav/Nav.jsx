import { Link } from 'react-router-dom'
import React, { useEffect, useState, forwardRef} from 'react';
import github from '../../assets/social_logos/githubWhite.png'
import linkedin from '../../assets/social_logos/liWhite.png'
import logo from '../../assets/Logo/logo5.png'

const Nav = forwardRef((props, ref) => {
  const [burgerOpen, setBurgerOpen] = useState(false)
  const [isFixed, setIsFixed] = useState(false)

  const toggleBurger = (e) => {
    setBurgerOpen(!burgerOpen)
  }

  const handleClick = () =>{
    setBurgerOpen(false)
  }

  const handleScroll = () =>{
    const scrollTop = window.scrollY
    const fixedPoint = 800
    if (scrollTop >= fixedPoint) {
      setIsFixed(true, { behavior: 'smooth' });
    } else {
      setIsFixed(false);
    }
  }

  useEffect(()=>{
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  },[])

  return (
    <div ref={ref}>
      <div className={isFixed ? "fixed top-0 left-0 right-0 bg-black bg-opacity-5" : " bg-black bg-opacity-5"}>
        <section className="relative mx-auto">
          <nav className="flex justify-between">
            <div className="px-5 xl:px-12 py-6 flex w-full items-center">
              <p className="text-3xl font-bold font-heading" href="#">
                <img className="h-20 w-15" src={logo} alt="logo" />
              </p>
              <ul className="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
                <li><Link to="/" className="hover:text-[#805A73] hover:underline ">Home</Link></li>
                <li><Link to="/about" className="hover:text-[#805A73] hover:underline ">About</Link></li>
                <li><Link to="/projects" className="hover:text-[#805A73] hover:underline ">Projects</Link></li>
                {/* <li><a className="hover:text-gray-200" href="#">Contact Us</Link></li> */}
                <li><Link to="/contact" className="hover:text-[#805A73] hover:underline ">Contact</Link></li>
              </ul>
              <div className="hidden xl:flex items-center space-x-5 items-center">
                <a className="flex items-center hover:animate-lift-up" href="https://www.linkedin.com/in/lesley-rotonto/">
                  <img className='h-8' src={linkedin} alt='linkedin' />
                </a>
                <a className="flex items-center hover:animate-lift-up " href="https://github.com/GlitterAngle">
                  <img className='h-8' src={github} alt='github' />
                </a>
              </div>
            </div>
            <a className="xl:hidden flex mr-6 items-center hover:animate-lift-up" href="https://www.linkedin.com/in/lesley-rotonto/">
              <img className='h-8' src={linkedin} alt='linkedin' />
            </a>
            <a className="xl:hidden flex mr-6 items-center hover:animate-lift-up" href="https://github.com/GlitterAngle">
              <img className='h-8' src={github} alt='github' />
            </a>
            <a className="navbar-burger self-center mr-12 md:hidden" onClick={toggleBurger} href="#">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </a>
            <div className={`absolute md:relative md:hidden flex flex-col top-full right-0 bg-black bg-opacity-5  transition-opacity duration-500 ease-in-out ${burgerOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-0'} md:relative flex md:opacity-100 md:translate-y-0`}>
              <ul className="flex flex-col md:flex-row px-4 mx-auto font-semibold font-heading space-y-2 md:space-y-0 md:space-x-12">
                <li><Link onClick={handleClick} to="/" className="hover:text-[#805A73] hover:underline ">Home</Link></li>
                <li><Link onClick={handleClick} to="/about" className="hover:text-[#805A73] hover:underline ">About</Link></li>
                <li><Link onClick={handleClick} to="/projects" className="hover:text-[#805A73] hover:underline ">Projects</Link></li>
                <li><Link onClick={handleClick} to="/contact" className="hover:text-[#805A73] hover:underline ">Contact</Link></li>
              </ul>
            </div>
          </nav>
        </section>
      </div>
    </div>
  )
})

export default Nav