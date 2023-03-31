import React, { useState, useEffect } from 'react'

const ContactUs = () => {

  return (
      <div id='contacts' className='w-[100%] md:w-[65%] mt-24 mx-auto bg-black md:bg-[#1d3557] text-white'>
        
        <div className="flex flex-col w-[100%]">
                <div className="relative w-[100%]">
                    <img src="laptop/laptop4.avif" className='max-h-[20em] w-[100%]' /> 
                    <div className="absolute top-[25%] md:top-[40%] left-[15%] md:left-[25%] text-center space-y-2">
                        <p className='md:text-4xl text-2xl font-bold tracking-widest text-gray-900'>Contact Us</p>
                        <p className='text-gray-900 md:text-2xl text-xl font-bold'>Feel free to drop us a line below..</p>
                    </div>
                </div>
        
        <div className="flex flex-col-reverse md:flex-row md:justify-between pt-20 w-[100%] px-8 shadow-2xl shadow-slate-500">
            <div className='md:w-[47%]'>
                <p className="text-2xl pb-2 pt-20 md:pt-0 text-left ">Send Me A Message</p>
                <div className='line w-[5em] h-[0.25em]'></div>
                <form action="https://formsubmit.co/prinzecharmin101@gmail.com" method="POST" id='form' className='w-[100%]'>
                    <input type="text" name="name" placeholder='Your Name' required />
                    <input type="email" name="email" placeholder='Your Email' required />
                    <input type="text" name="subject" placeholder='Subject' required />
                    <input type="hidden" name="_captcha" value="false"></input>
                    <textarea name="textarea" id="" placeholder="Tell me, I'm listening" cols="30" rows="4"></textarea>
                    <div className='text-center '>
                        <button className='bg-green-500 my-8 self-center mx-auto py-3 px-12 rounded-full' type="submit"><i className="fa-solid fa-arrow-up-right-from-square text-2xl"></i> Send</button>
                    </div>
                    
                </form>
            </div>
            
            <div className='md:w-[47%] flex flex-col items-cente '>
                <p className="text-2xl pb-2  ">Get in Touch</p>
                <div className='line w-[5em] h-[0.25em]'></div>
                <div className='pt-5 '>
                    <p className='font-libre'>
                       Pls feel free to reach me on any of my social media handles below.
                       Alternatively, you can send me a message using the form below. Looking 
                       forward to hearing from you soon
                    </p>
                    <div className='pt-6 space-y-3'>
                        <div className='flex space-x-4 items-center'>
                            <i className="fa-brands fa-whatsapp fa-1x text-green-500"></i>
                            <p>002347036228989</p>
                        </div>
                        <div className='flex space-x-4 items-center'>
                            <i className="fa-regular fa-envelope fa-1x text-green-500"></i>
                            <p>prinzecharmin101@gmail.com</p>
                        </div>
                         <div className='flex space-x-4 items-center'>
                            <i className="fa-brands fa-linkedin fa-1x text-green-500"></i>
                            <p>Charming Princewill</p>
                        </div>
                        <div className='flex space-x-4 items-center'>
                            <i className="fa-brands fa-github fa-1x text-green-500"></i>
                            <p>charmin16</p>
                        </div>
                    </div>
                </div>
                   
                <div className='md:items-start md:mx-0 pt-6 md:space-x-6 space-x-4 '>
                    <i className="fa-brands fa-linkedin fa-2x rounded-full text-green-500 cursor-pointer"></i>
                    <i className="fa-brands fa-github fa-2x text-green-500 cursor-pointer"></i> 
                    <i className="fa-brands fa-twitter fa-2x text-green-500 cursor-pointer"></i>
                    <i className="fa-brands fa-facebook-f fa-2x text-green-500 cursor-pointer"></i>
                </div>
            </div>
        </div>   
       </div>
        
    </div>
  )
}

export default ContactUs