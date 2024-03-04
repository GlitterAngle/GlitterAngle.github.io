import React, { forwardRef } from 'react';
import headshot from '../../assets/headshot/IMG_6768 2.jpg'

const About = forwardRef((props, ref) => {
  return (
    <div ref={ref} className='p-10 text-left grid md:grid-cols-2 p-4 mt-60'>
      <img src={headshot} alt='headshot' className="h-96 w-96 rounded-full object-cover object-center row-span-2 place-self-center" />
      <p className='indent-8 mb-8'>
        Hello and welcome! I'm Lesley Rotonto, and I'm thrilled to have you explore my portfolio.
        My journey in web development is fueled by a decade-long background in art and a deep-rooted passion for coding and continuous learning.
        My experience in retail has sharpened my communication skills, enabling me to effectively connect and collaborate.
        I bring a unique blend of artistic vision and technical skill to every project, driven by my innate curiosity and a desire to delve into the intricacies of web technologies.
      </p>
      <p className='indent-8 mb-8'>
        My path has been shaped by self-learning and exploring various point-of-sale systems, demonstrating my adaptability and problem-solving skills.
        As I seek to join a team that values growth and innovation, I am excited to contribute my creativity, dedication, and collaborative spirit.
        Thank you for taking the time to get to know me a little better – I look forward to the opportunity to learn, create, and grow together.
      </p>
    </div>
  )
})

export default About