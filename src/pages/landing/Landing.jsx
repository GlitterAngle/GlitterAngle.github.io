import React from 'react'
import headshot from '../../assets/headshot/Lesley Solarte3299 copy1mb.jpg'

const Landing = () => {
  return (
    <>
    <div className='headshot'>
        <img src={headshot} alt='headshot' className="h-96 w-96 rounded-full object-cover object-center" />
    </div>
    </>
  )
}

export default Landing