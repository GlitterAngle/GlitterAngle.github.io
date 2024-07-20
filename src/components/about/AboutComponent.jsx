import React, { forwardRef, useEffect, useRef } from 'react';
// import headshot from '../../assets/headshot/DSC01508-Edit.jpg';
import headshot from '../../assets/headshot/DSC01508-Edit-removebg-preview.png';
import css from '../../assets/tech/css-3.svg';
import express from '../../assets/tech/expressjs-icon.svg';
import git from '../../assets/tech/git-icon.svg';
import html from '../../assets/tech/HTML5_Badge.svg';
import javascript from '../../assets/tech/javascript-1.svg';
import mongo from '../../assets/tech/MongoDB_Logomark_ForestGreen.svg';
import node from '../../assets/tech/nodejs-icon.svg';
import react from '../../assets/tech/react-2.svg';
import psql from '../../assets/tech/postgresql-plain.svg';
import typeScript from '../../assets/tech/ts-logo-512.svg';
import './About.css';

const logos = [
  { src: react, alt: 'React' },
  { src: css, alt: 'CSS' },
  { src: typeScript, alt: 'TypeScript'},
  { src: psql, alt: 'PSQL' },
  { src: mongo, alt: 'MongoDB' },
  { src: node, alt: 'Node' },
  { src: express, alt: 'Express' },
  { src: javascript, alt: 'JavaScript' },
  { src: git, alt: 'Git' },
  { src: html, alt: 'HTML' }
];

const About = forwardRef(() => {
  const containerRef = useRef(null)

  useEffect(()=>{
    const container = containerRef.current

    const updateLogoPostions = () =>{
      let radius = 0
      const centerX = container.offsetWidth / 2
      const centerY = container.offsetHeight / 2
      const duration = 30
      const images = container.querySelectorAll('.tech-logo')

      if(window.innerWidth <= 760){
        radius  = 125
      }else{
        radius = 250
      }
      images.forEach((img,index)=>{
      const angle = (2 * Math.PI/logos.length) * index 
      img.style.left = `${centerX + radius * Math.cos(angle) - img.offsetWidth / 2}px`
      img.style.top = `${centerY + radius * Math.sin(angle) - img.offsetHeight / 2}px`

      let start
      const animate = (timestamp) =>{
        if(!start) start = timestamp
        const progress = (timestamp - start) / (duration * 1000)
        const currentAngle = angle + progress * 2 * Math.PI

        img.style.left = `${centerX + radius * Math.cos(currentAngle) - img.offsetWidth / 2}px`
        img.style.top = `${centerY + radius * Math.sin(currentAngle) - img.offsetHeight / 2}px`

        requestAnimationFrame(animate)
      }
      requestAnimationFrame(animate)
      
    })
    }
    updateLogoPostions()
    window.addEventListener('resize', updateLogoPostions)

    return () =>{
      window.removeEventListener('resize', updateLogoPostions)
    }
  }, [])
  return (
    <>
      <div id='about' className='p-4 lg:p-10 text-left grid grid-cols-1 md:grid-cols-2 gap-2 mt-20 lg:mt-60'>
        <img
          src={headshot}
          alt='headshot'
          className="border-2 border-transparent h-48 w-48 md:h-96 md:w-96 lg:h-90 lg:w-90 rounded-full object-cover object-center place-self-center lg:row-span-2"
        />
        <div className='space-y-8'>
          <p className='indent-8 mb-8 max-w-xs sm:max-w-sm mx-auto lg:max-w-full lg:text-xl'>
            Hello and welcome! I'm Lesley Rotonto, and I'm thrilled to have you explore my portfolio.
            My journey in web development is fueled by a decade-long background in art and a deep-rooted passion for coding and continuous learning.
            My experience in retail has sharpened my communication skills, enabling me to effectively connect and collaborate.
            I bring a unique blend of artistic vision and technical skill to every project, driven by my innate curiosity and a desire to delve into the intricacies of web technologies.
          </p>
          <p className='indent-8 mb-8 max-w-xs sm:max-w-sm mx-auto lg:max-w-full lg:text-xl'>
            My path has been shaped by self-learning and exploring various point-of-sale systems, demonstrating my adaptability and problem-solving skills.
            As I seek to join a team that values growth and innovation, I am excited to contribute my creativity, dedication, and collaborative spirit.
            Thank you for taking the time to get to know me a little better – I look forward to the opportunity to learn, create, and grow together.
          </p>
        </div>
      </div>
      <div className='p-20 flex justify-center w-full gap-4 mt-20'>
        <div className='circle-container' ref={containerRef}>
          {logos.map((logo, index) =>( 
              <img
                key={index}
                src={logo.src}
                alt={logo.alt}
                className='tech-logo'
              />
          ))}
        </div>
      </div>
    </>
  );
});

export default About;
