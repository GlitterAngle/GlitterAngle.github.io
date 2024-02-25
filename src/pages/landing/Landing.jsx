import React from 'react'
import headshot from '../../assets/headshot/Lesley Solarte3299 copy1mb.jpg'

const Landing = () => {
  return (
    <>
      <div className='grid md:grid-cols-2 border-2 rounded-lg border-dotted border-[#4A4453] p-4 text-[#4A4453]'>
        <img src={headshot} alt='headshot' className="h-96 w-96 rounded-full object-cover object-center row-span-2 place-self-center" />
        <h3 className='place-self-center font-semibold'>Engineering Your Vision <br /> Turning Ideas into Impactful Software</h3>
        <p>Thank you for stopping by! Your curiosity is the first step to uncovering the unique ways I bring technology to life. Let's explore the possibilities together.</p>
      </div>
    </>
  )
}

export default Landing