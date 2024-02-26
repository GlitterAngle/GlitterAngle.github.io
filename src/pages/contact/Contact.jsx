import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'


const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_cp85x5q', 'template_hn8bh7v', form.current, {
        publicKey: 'PdLJL5BOtnZbfX1cz',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
    e.target.reset()
  };

  return (
    <div className='border-2 rounded-lg border-dotted border-[#4A4453] p-4 text-[#4A4453]'>
      <p className='mb-10'>If you'd like to reach me fill out this form!</p>
      <form ref={form} onSubmit={sendEmail} className="bg-transparent col-span-4">
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <div>
            {/* <label>Name</label> */}
            <input type="text" name="name" placeholder='Name' className="placeholder-[#4A4453] bg-transparent border-b border-[#4A4453] w-full" />
          </div>
          <div>
            {/* <label>Email</label> */}
            <input type="email" name="email" placeholder='Email' className="placeholder-[#4A4453] bg-transparent border-b border-[#4A4453] w-full" />
          </div>
          <div className='md:col-span-2'>
            {/* <label>Message</label> */}
            <textarea name="message" placeholder='Message' className="placeholder-[#4A4453] bg-transparent border-b border-[#4A4453] w-full h-32" />
          </div>
          <div className='md:col-span-2'>
            <button className='hover:underline w-full' type="submit">Send</button>
          </div>
        </div>
      </form>
    </div>
  )
}
export default Contact