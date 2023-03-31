import React, { useState, useEffect } from 'react'

const AboutMe = () => {

    const [showAboutMe, setShowAboutMe] = useState(false)

    useEffect(() => {
        setTimeout(() => {
        setShowAboutMe(!showAboutMe)
        }, 4000)
  }, [])


    

  return (
    <div id='about'>
        {!showAboutMe ? <div className='w-screen h-screen'></div> : <div id='medium-and-above' className='hidden w-[90%] md:w-[65%] mt-[9em] bg-gr-500 mx-auto md:flex flex-col text-center 
        md:text-left pb-8'>   
        {/* About me section large screen and above */} 
        <p className="md:text-4xl sm:text-2xl text-xl text-white font-bold font-libre md:pb-3">About Me</p>
        <div className='line w-[4em] h-[0.5em] bg-green-500'></div>
        <div className='flex flex-col-reverse items-center md:items-start md:flex-row md:space-x-16 md:space-y-0'>       
              <p className='text-white md:opacity-90 opacity-70 md:leading-6 md:tracking-wide pt-6 md:pt-0 
              text-justify text-md max-w-[55%] font-serif md:mt-6'>
                Hello, I am Charming. I obtained a Bachelors in Electrical and Electronics 
                Engineering from the University of East London, but because I have always been 
                fascinated by technology and the diverse ways it has positively impacted our world 
                I decided to venture into the captivating world of technology. 
                I have acquired my skills through different forms of trainings(virtual & in-person), 
                bootcamp, online and physical tech communities, etc.
                Today, I'm  a frontend developer with a passion for creating 
                beautiful, responsive websites and web applications.
                I have worked for a couple of organizations and I have also done 
                a lot of freelance jobs for clients all over the world. 
                <br />
                When I am on my computer writing codes then you will find me on 
                my chessboard or in a swimming pool. I do have a life outside programming.
                I love chess, I love swimming and sometimes I hangout with the boys to 
                clear my head.          
            </p>
            <div className="relative bg-gren-500 w-[100%]">
                <img id='myphoto' src="/sm4012 2nd.png" alt="" className='mt-8 md:w-[26em] md:h-[18em] sm:w-[14em] 
                sm:h-[14em] h-[12em] w-[12em] rounded-l-2xl lg:w-[17em] lg:h-[18em]' />
                <div className="absolute w-[17em] h-[18em] border-4 border-[#c708a4] top-[15%] left-[5%] "></div>
            </div>
            
        </div>
       </div>}
       
       {/* About me section phone and small screen  */}
       {showAboutMe && <div id="mobile-container" className='md:hidden text-white'>
        <div id='img-cont' className="w-[90%] mx-auto relative flex justify-center items-center bg-gray-400">
           <img id='myphoto' src="retry 2.jpg" alt="" className='rounded-l-xl w-[50%] 
           h-[15em] border sm:w-[27em] sm:h-[16em] border-x-8 my-8 sm:my-8 border-[#c708a4]' />
           {/* <div className="absolute w-[13.5em] h-[15em] border-4 border-[#c708a4] top-[15%] left-[26%] "></div> */}
           
        </div>
        <div className=''>
            <div className='max-w-[90%] mx-auto py-12'>
                <p id='about' className="text-3xl font-bold pb-3 font-libre text-center">About Me</p>
                 <div className='line w-[4em] h-[0.5em] bg-green-500 mx-auto'></div>
                <p className='text-justify font-libre mt-4 text-lg'>
                    Hello, I am Charming. I obtained a Bachelors Degree in Electrical and Electronics 
                    Engineering from the University of East London, but because I have always been 
                    fascinated by technology and the diverse ways it has positively impacted our world, 
                    I decided to venture into the captivating world of technology. 
                    I have acquired my skills through different forms of trainings(virtual & in-person), 
                    bootcamps, online and physical tech communities, etc.
                    Today, I'm  a frontend developer with a passion for creating 
                    beautiful, responsive websites and web applications.
                    I have worked for a couple of organizations and I have also done 
                    a lot of freelance jobs for clients all over the world. 
                    <br />
                    When I am not on my computer writing codes then you will probably find me on 
                    my chessboard or in a swimming pool. I do have a life outside programming.
                    I love chess, I love swimming and I indulge in some other social activities 
                    when I want to relax and clear my head.
                    <br />
                    I do want to sincerely thank you for stopping by and definitely looking forward 
                    to hearing from you soon.
                </p>
            </div>
        </div>
       </div>}
       
      </div>
      
  )
}

export default AboutMe