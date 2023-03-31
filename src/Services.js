import React from 'react'

const Services = () => {
  return (
       <div id='serv' className='w-[90%] md:w-[65%] mt-20 mx-auto pb-12 shadow-2xl px-4'>
       
        <h1 className="text-4xl text-center md:text-left font-bold text-white 
        font-libre pt-8 pb-3 md:mb-0 ">
            Our Services
        </h1>
        <div className='line w-[4em] h-[0.5em] bg-green-500 mx-auto md:mx-0'></div>
        <div className='flex flex-col space-y-12 mx-auto mt-12
        md:flex-row md:justify-between md:space-y-0 md:space-x-8'>
            <div className="flex flex-col md:space-y-3 text-center shadow-2xl py-6 
            bg-[#264653] md:w-[31%] rounded-xl hover:bg-red-900 hover:scale-105">
                <img src="images/Web-Development.jpg" className='w-[7em] h-[7em] self-center rounded-full' />  
                <div className='space-y-4 mt-8'>
                    <h1 className="text-2xl text-white font-bold tracking-wider">Web Developement</h1>
                    <p className='text-white text-lg max-w-[90%] md:max-w-[70%] mx-auto text-center md:py-2'>
                        We undertake every aspect of web development, from frontend to backend
                        and database management. 
                    </p>
                </div>                
            </div>
             <div className="flex flex-col text-center items-center md:space-y-3 shadow-2xl py-6 
             bg-[#264653] rounded-xl md:w-[31%] hover:bg-red-900 hover:scale-105">
                <img src="images/seoi.jpeg" className='w-[7em] h-[7em] self-cente block bg-black rounded-full ' />
                <div className='space-y-4 mt-8'>
                    <h1 className="text-2xl text-white font-bold tracking-wider">SEO</h1>
                    <p className='text-white text-lg mx-auto max-w-[90%] md:max-w-[70%] md:py-2'>
                        We help websites gain vast visibility in search engine results using our optimized
                        SEO tools and software
                    </p>
                </div>               
            </div>
             <div className="flex flex-col text-center md:space-y-3 py-6 
             bg-[#264653] shadow-2xl rounded-xl md:w-[31%] hover:bg-red-900 hover:scale-105">
                <img src="images/trainingi.jpeg" className='w-[7em] h-[7em] self-center rounded-full' />
                <div className='space-y-4 mt-8'>
                    <h1 className="text-2xl text-white font-bold tracking-wider">Trainings</h1>
                    <p className='text-white text-lg mx-auto max-w-[90%] md:max-w-[70%] md:py-2'>
                       We undertake trainings for prospective web developers. Our trainings 
                        cut across different aspects of web developemnt and SEO
                    </p>
                </div>              
            </div>
        </div>
        
    </div>
  )
}

export default Services