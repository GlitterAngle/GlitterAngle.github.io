import React from 'react'
import { useSpring, animated, useTransition } from '@react-spring/web'
import ProjectComponent from '../../components/projects/ProjectComponent'
import ContactComponent from '../../components/contact/ContactComponent'
import AboutComponent from '../../components/about/AboutComponent'
import NewNav from '../../components/nav/NewNave'
import newLogo from '../../assets/Logo/LogoBlack.png'

const Landing = () => {

  const movement = useSpring({
    from: { clipPath: 'inset(100% 0% 0% 0%)' },
    to: { clipPath: 'inset(0% 0% 0% 0%)' },
    config: { duration: 1000 },
  })


  const pTransitions =  useSpring({
    from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
    to: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    config: { duration: 1000},
    delay: 500 
  })

  return (
    <>
    <NewNav/>
    <animated.div style={movement}>
        <div className='h-screen p-4 flex flex-col justify-center items-center'>
          <div className='flex flex-row items-center space-x-4'>
            <img src={newLogo} alt='Logo' className='h-48 w-90' />
            <h2 className='font-semibold text-2xl text-center'>
              Hi I'm Lesley! <br />
              Engineering Your Vision <br /> Turning Ideas into Impactful Software
            </h2>
          </div>
          <br />
          <animated.p style={pTransitions} className='text-lg text-center'>
            Your curiosity is the first step to uncovering the unique ways I bring technology to life. Let's explore the possibilities together.
          </animated.p>
        </div>
      </animated.div>
      <AboutComponent />
      <ProjectComponent />
      <ContactComponent />
    </>
  )
}

export default Landing