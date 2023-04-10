import React, { useState, useEffect } from 'react'

const Technologies = () => {


    return (
    <div id='tech' className='w-[90%] md:w-[65%] mt-20 mx-auto pb-12'>
       
        <h1 className="text-3xl text-center md:text-left font-bold text-white 
        font-libre pb-3">
            Technologies
        </h1>
        <div className='line w-[4em] h-[0.5em] mb-12 mx-auto md:mx-0'></div>
        {/* <p className="text-white text-lg text-center md:text-left pt-8 pb-10 md:mb-12 
        font-libre max-w-[90%] mx-auto md:mx-0">
            I have worked with a range of technologies in the web development 
            world. From frontend to design to SEO and many more
        </p> */}
        <div className='flex flex-col space-y-8 mx-auto 
        md:flex-row md:justify-between md:space-y-0 md:space-x-8'>
            <div className="flex flex-col space-y-5 md:space-y-3 text-center shadow-2xl py-6 md:bg-[#264653] md:w-[31%] rounded-xl">
                <img src="images/reactlogo.png" className='md:w-[3em] w-[5em] rounded-full h-[5em] md:h-[3em] self-center' />
                <div className='space-y-2'>
                    <h1 className="text-2xl text-white font-bold">Frontend</h1>
                        <p className='text-white text-lg max-w-[70%] mx-auto md:py-2 font-libre'>
                            Proficient in front-end programming languages such as HTML, CSS, JavaScript,
                            and frameworks such as ReactJs, TailwindCSS, etc
                        </p>
                </div>                
            </div>
             <div className="flex flex-col text-center space-y-5 md:space-y-3 shadow-2xl py-6 md:bg-[#264653] rounded-xl md:w-[31%]">
                <img src="images/seoq.png" className='md:w-[3em] md:h-[3em] self-center w-[5em] rounded-full h-[5em] ' />
                <div className='space-y-2'>
                    <h1 className="text-2xl text-white font-bold">SEO</h1>
                        <p className='text-white text-lg mx-auto max-w-[70%] md:py-2 font-serif'>
                            Proficient at SEO tools such as Semrush which helps the process of catapulting 
                            a website's visibility in search engine results
                        </p>
                </div>               
            </div>
             <div className="flex flex-col text-center space-y-5 md:space-y-3 py-6 md:bg-[#264653] shadow-2xl rounded-xl md:w-[31%]">
                <img src="images/ui.png" className='md:w-[3em] md:h-[3em] self-center w-[5em] rounded-full h-[5em]' />
                <div className='space-y-2'>
                    <h1 className="text-2xl text-white font-bold">UI/UX</h1>
                    <p className='text-white text-lg mx-auto max-w-[70%] md:py-2 font-serif'>A bit of experience with Figma and other UI tools.</p>
                </div>              
            </div>
        </div>
        
    </div>
  )
}

export default Technologies