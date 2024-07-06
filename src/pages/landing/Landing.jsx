import React, { useEffect, useState } from 'react'
import { useSpring, animated} from '@react-spring/web'
import ProjectComponent from '../../components/projects/ProjectComponent'
import ContactComponent from '../../components/contact/ContactComponent'
import AboutComponent from '../../components/about/AboutComponent'
import NewNav from '../../components/nav/NewNave'
import newLogo from '../../assets/Logo/LogoBlack.png'
import './Landing.css'

const Landing = () => {
  const [displayText, setDisplayText] = useState('')

  useEffect(() =>{
    const text = "Leet's explore the possibilities together!"
    let index = 0
    const interval = setInterval(() =>{
      setDisplayText((prev)=>prev+(text[index]||''))
      index++
      if(index === text.length){
        clearInterval(interval)
      }
    },100)
    return ()=>clearInterval(interval)
  },[])

  // const movement = useSpring({
  //   from: { clipPath: 'inset(100% 0% 0% 0%)' },
  //   to: { clipPath: 'inset(0% 0% 0% 0%)' },
  //   config: { duration: 1000 },
  // })



  return (
    <>
    <NewNav/>
    {/* style={movement} */}
    <animated.div >
        <div className='min-h-screen p-4 flex flex-col justify-center items-center'>
          <div className='flex flex-col md:flex-row items-center space-x-0 md:space-x-4 space-y-4 md:space-y-0'>
            <img src={newLogo} alt='Logo' className=' he-24 w-24 md:h-48 md:w-48' />
            <h2 className='font-semibold text-xl md:text-2xl text-center'>
              Hi I'm Lesley! <br />
              Engineering Your Vision <br /> Turning Ideas into Impactful Software
            </h2>
          </div>
          <br />
          <p className='text-base md:text-lg text-center'>
            {displayText}
            <span className="blinking-cursor">|</span>
          </p>
        </div>
      </animated.div>
      <AboutComponent />
      <ProjectComponent />
      <ContactComponent />
    </>
  )
}

export default Landing