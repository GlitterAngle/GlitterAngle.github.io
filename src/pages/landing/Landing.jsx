import React from 'react'
import headshot from '../../assets/headshot/Lesley Solarte3299 copy1mb.jpg'

const Landing = () => {
  return (
    <>
    <div className='headshot'>
        <img src={headshot} alt='headshot' style={{ width: '200px', height: '260px' }}/>
    </div>
    </>
  )
}

export default Landing