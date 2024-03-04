import React, { useEffect, useState, forwardRef } from 'react';
import github from '../../assets/social_logos/githubWhite.png'
import linkedin from '../../assets/social_logos/liWhite.png'
import logo from '../../assets/Logo/logoHeartTransparent.png'

const Nav = forwardRef(({aboutSectionRef, projectsSectionRef, contactSectionRef}, ref) => {
  const [burgerOpen, setBurgerOpen] = useState(false)
  const [isFixed, setIsFixed] = useState(false)

  const toggleBurger = (e) => {
    setBurgerOpen(!burgerOpen)
  }

  const handleClick = () => {
    setBurgerOpen(false)
  }

  const handleScroll = () => {
    const scrollTop = window.scrollY
    const fixedPoint = 800
    if (scrollTop >= fixedPoint) {
      setIsFixed(true, { behavior: 'smooth' });
    } else {
      setIsFixed(false);
    }
  }

  const scrollToAbout = () => {
    if(aboutSectionRef && aboutSectionRef.current){
      aboutSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
    handleClick()
  }

  const scrollToProjects = () => {
    if(projectsSectionRefSectionRef && projectsSectionRefSectionRef.current){
      projectsSectionRefSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
    handleClick()
  }

  const scrollToContact = () => {
    if(contactSectionRef){
      contactSectionRef.scrollIntoView()
    }
    handleClick()
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [])

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
                <li onClick={scrollToAbout} className="hover:underline">About</li>
                <li onClick={scrollToProjects} className="hover:underline">Projects</li>
                <li onClick={scrollToContact}  className="hover:underline">Contact</li>
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
                <li onClick={scrollToAbout} className="hover:underline">About</li>
                <li onClick={scrollToProjects} className="hover:underline">Projects</li>
                <li onClick={scrollToContact} className="hover:underline">Contact</li>
              </ul>
            </div>
          </nav>
        </section>
      </div>
    </div>
  )
})

export default Nav