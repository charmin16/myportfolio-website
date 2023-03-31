import React, { useState, useEffect } from 'react'

const Projects = () => {


  return (
    <div id='proj' className='w-[90%] md:w-[65%] mt-20 mx-auto text-white pb-4'>
        
       <h1 className='text-4xl font-bold pb-3 text-center md:text-left font-libre'>Portfolio</h1>
       <div className='line w-[4em] h-[0.5em] mx-auto md:mx-0'></div>
       {/* Project title first project */}
       <div className='lg:relative flex flex-col items-center mb-8 mt-6
          lg:block lg:items-start py-8 lg:py-8 shadow-2xl'>
        <img src="images/diction_gray.png" className='lg:w-[60%] lg:h-[20em] w-[90%] h-[12em]' />
        <div className="lg:block absolute right-0 top-[10%] bg-green-00">
            <h1 className="text-red-500 hidden lg:block">Featured Project</h1>
            <h1 className="text-2xl tracking-wider hidden lg:block">Dictionary</h1>
        </div>
        <h1 className="text-2xl pt-4 pb-2 lg:hidden">Dictionary</h1>
        <div className="flex justify-center space-x-2 mb-3 text-gray-400 w-[100%] lg:hidden">
            <p className='italic text-xl'>React</p>
            <p className='italic text-xl'>API</p>
            <p className='italic text-xl'>TailwindCSS</p>
        </div>
        <div className="lg:hidden w-[3em] h-[0.2em] mb-6 bg-[#c708a4] "></div>
        <p className='max-w-[90%] text-justify font-libre text-md lg:hidden'>
            Dictionary web app built using the Dictionary API. Users will be 
            able to search for words using the input field and get response for 
            the searched word or get a form validation message when trying to 
            submit a blank form
            
        </p>
        
        <div className="lg:hidden flex justify-between w-[100%] mt-12 px-6">
            <a className='rounded-md bg-[#c708a4] py-1 px-2' 
            href="https://github.com/charmin16/dictionary-app" target='_blank'><i className="fa-brands fa-github text-2xl cursor-pointer"></i></a>
            <a className='rounded-md bg-[#c708a4] py-1 px-2' 
            href="https://dictionary-app-eta-bay.vercel.app/" target='_blank'><i className="fa-solid fa-arrow-up-right-from-square text-2xl cursor-pointer"></i></a>
        </div>
        
        {/* Project description section  */}
        <div className="absolute bg-blu-900 left-[63%] top-[32%] py-2 
        px-4 shadow-2xl rounded-lg">
            <p className='hidden lg:block font-libre'>
                Dictionary web app built using the Dictionary API. Users will be 
                able to search for words using the input field and get response for 
                the searched <span className='md:hidden'> or get a form validation message when trying to 
                submit a blank form</span>
            </p>
        </div>
        
        {/* Project tools/technologies used  */}
        <div className="absolute top-[70%] right-0 bg-green-00 space-x-3 hidden lg:flex">
            <p>ReactJs</p>      
            <p>TailwindCSS</p>
            <p>API</p>
        </div>
        
        {/* GitHub and link to website  */}
        <div className="absolute right-0 top-[82%] bg-red-00 space-x-4 hidden lg:block">
            <a href="https://github.com/charmin16/dictionary-app" target='_blank'> 
            <i className="fa-brands fa-github text-2xl cursor-pointer"></i></a>
            <a href="https://dictionary-app-eta-bay.vercel.app/" target='_blank'>
            <i className="fa-solid fa-arrow-up-right-from-square text-2xl cursor-pointer"></i></a> 
        </div>
       </div>
       
       {/* second project  */}
       
       <div className='lg:relative flex flex-col items-center mb-8
          lg:block lg:items-start py-8 lg:py-8 shadow-2xl shadow-slate-00'>
        <img src="images/quizphoto.png" className='lg:w-[60%] lg:h-[20em] w-[90%] h-[12em]' />
        <div className="lg:block absolute right-0 top-[10%] bg-green-00">
            <h1 className="text-red-500 hidden lg:block">Featured Project</h1>
            <h1 className="text-2xl tracking-wider hidden lg:block">QuizHub</h1>
        </div>
        <h1 className="text-2xl pt-3 pb-3 lg:hidden ">QuizHub</h1>
        <div className="flex justify-center space-x-2 mb-3 text-gray-400 w-[100%] lg:hidden">
            <p className='italic text-xl'>React</p>
            <p className='italic text-xl'>Tailwind</p>
        </div>
        <div className="lg:hidden w-[3em] h-[0.2em] mb-6 bg-[#c708a4]"></div>
        <p className='max-w-[90%] text-justify lg:hidden font-libre'>
            A quiz web app to test one's knowledge in 
            different non-academic subject areas. Each of the quiz 
            is timed and upon submission, the script is automatically marked and 
            the score is displayed.  
        </p>
        
        <div className="lg:hidden flex justify-between w-[100%] mt-12 px-6">
           <a className='rounded-md bg-[#c708a4] py-1 px-2' href="https://github.com/charmin16/Quiz-hub" target='_blank'> 
            <i className="fa-brands fa-github text-2xl cursor-pointer"></i></a>
            <a className='rounded-md bg-[#c708a4] py-1 px-2' href="https://quiz-hub.vercel.app/" target='_blank'>
            <i className="fa-solid fa-arrow-up-right-from-square text-2xl cursor-pointer"></i></a> 
        </div>
        
        {/* Project description section  */}
        <div className="absolute bg-blu-900 left-[63%] top-[32%] py-2 
        px-4 shadow-2xl rounded-lg">
            <p className='hidden lg:block font-libre'>
                 A quiz web app to test one's knowledge in 
                non-academic subject areas. Each of the quiz 
                is timed and upon submission, it is automatically marked and 
                the score is displayed.  
            </p>
        </div>
        
        {/* Project tools/technologies used  */}
        <div className="absolute top-[70%] right-0 bg-green-00 space-x-3 hidden lg:flex ">
            <p>ReactJs</p>
            <p>TailwindCSS</p>
           
        </div>
        
        {/* GitHub and link to website  */}
        <div className="absolute right-0 top-[82%] bg-red-00 space-x-4 hidden lg:block ">    
            <a href="https://github.com/charmin16/Quiz-hub" target='_blank'> 
            <i className="fa-brands fa-github text-2xl cursor-pointer"></i></a>
            <a href="https://quiz-hub.vercel.app/" target='_blank'>
            <i className="fa-solid fa-arrow-up-right-from-square text-2xl cursor-pointer"></i></a> 
        </div>
       </div>
       
       {/* Third Project  */}
       
       <div className='lg:relative flex flex-col items-center mb-8
          lg:block lg:items-start py-8 lg:py-8 shadow-2xl shadow-slate-00'>
        <img src="images/countryguide2.png" className='lg:w-[60%] lg:h-[20em] w-[90%] h-[12em]' />
        <div className="lg:block absolute right-0 top-[10%] bg-green-00">
            <h1 className="text-red-500 hidden lg:block">Featured Project</h1>
            <h1 className="text-2xl tracking-wider hidden lg:block">Country Guide</h1>
        </div>
        <h1 className="text-2xl pt-3 pb-3 lg:hidden ">Country Guide</h1>
        <div className="flex justify-center space-x-2 mb-3 text-gray-400 w-[100%] lg:hidden">
            <p className='italic text-xl'>React</p>
            <p className='italic text-xl'>API</p>
            <p className='italic text-xl'>Tailwind</p>
        </div>
        <div className="lg:hidden w-[3em] h-[0.2em] mb-6 bg-[#c708a4]"></div>
        <p className='max-w-[90%] text-justify lg:hidden font-serif'>
            Countries web app I built using REST Countries API to pull 
            down and display country info. You can search for any country 
            of your choice or filter by region. You can also switch from 
            light mode to dark mode and vice versa
        </p>
        
        <div className="lg:hidden flex justify-between w-[100%] mt-12 px-6">
            <a className='rounded-md bg-[#c708a4] py-1 px-2' href="https://github.com/charmin16/All_countries" target='_blank'> 
            <i className="fa-brands fa-github text-2xl cursor-pointer"></i></a>
            <a className='rounded-md bg-[#c708a4] py-1 px-2' href="https://all-countries-two.vercel.app/" target='_blank'>
            <i className="fa-solid fa-arrow-up-right-from-square text-2xl cursor-pointer"></i></a> 
        </div>
        
        {/* Project description section  */}
        <div className="absolute bg-blu-900 left-[63%] top-[32%] py-2 
        px-4 shadow-2xl rounded-lg">
            <p className='hidden lg:block'>
                Countries web app I built using REST Countries API to pull 
                down and display country info. You can search for any country 
                of your choice or filter by region. <span className='md:hidden'> You can also switch from 
                light mode to dark mode and vice versa</span>
            </p>
        </div>
        
        {/* Project tools/technologies used  */}
        <div className="absolute top-[70%] right-0  space-x-3 hidden lg:flex">
            <p>React.js</p>
            <p>TailwindCSS</p>
            <p>API</p>
        </div>
        
        {/* GitHub and link to website  */}
        <div className="absolute right-0 top-[82%] bg-red-00 space-x-4 hidden lg:block">    
            <a href="https://github.com/charmin16/All_countries" target='_blank'> 
            <i className="fa-brands fa-github text-2xl cursor-pointer"></i></a>
            <a href="https://all-countries-two.vercel.app/" target='_blank'>
            <i className="fa-solid fa-arrow-up-right-from-square text-2xl cursor-pointer"></i></a> 
        </div>
       </div>
      
      {/* Fourth Project  */}
      
      <div className='lg:relative flex flex-col items-center
         lg:block lg:items-start py-8 lg:py-8 shadow-2xl shadow-slate-00'>
        <img src="images/food_recipe.png" className='lg:w-[60%] lg:h-[20em] w-[90%] h-[12em]' />
        <div className="lg:block absolute right-0 top-[10%] bg-green-00">
            <h1 className="text-red-500 hidden lg:block">Featured Project</h1>
            <h1 className="text-2xl tracking-wider hidden lg:block">Food Recipe</h1>
        </div>
        <h1 className="text-2xl pt-3 pb-1 lg:hidden ">Food Recipe</h1>
        <div className="flex justify-center space-x-2 mb-3 text-gray-400 w-[100%] lg:hidden">
            <p className='italic text-xl'>React</p>
            <p className='italic text-xl'>TailwindCSS</p>
            <p className='italic text-xl'>API</p>
        </div>
        <div className="lg:hidden w-[3em] h-[0.2em] mb-6 bg-[#c708a4]"></div>
        <p className='max-w-[90%] text-justify lg:hidden font-libre'>
            In case you are not very good at cooking, this web app is for you. 
            This web app provides countless recipes for different delicacies ranging 
            from pizza, bean, etc. With the aid this app anybody can be a chef!
        </p>
        
        <div className="lg:hidden flex justify-between w-[100%] mt-12 px-6">
           <a className='rounded-md bg-[#c708a4] py-1 px-2' href="https://github.com/charmin16/food_recipe" target='_blank'> 
            <i className="fa-brands fa-github text-2xl cursor-pointer"></i></a>
            <a className='rounded-md bg-[#c708a4] py-1 px-2' href="https://food-recipe-31cr.vercel.app/" target='_blank'>
            <i className="fa-solid fa-arrow-up-right-from-square text-2xl cursor-pointer"></i></a> 
        </div>
        
        {/* Project description section  */}
        <div className="absolute bg-blu-900 left-[63%] top-[-8%] md:top-[-30%] lg:top-[32%] py-2 
        px-4 shadow-2xl rounded-lg">
            <p className='hidden md:block lg:block font-libre'>
                In case you are not very good at cooking, this web app is for you. 
                This web app provides countless recipes for different delicacies ranging 
                from pizza, bean, etc. With the aid this app anybody can be a chef!
            </p>
        </div>
        
        {/* Project tools/technologies used  */}
        <div className="absolute top-[70%] right-0 bg-green-00 space-x-3 hidden lg:flex lg:mt-4">
            <p>ReactJs</p>
            <p>TailwindCSS</p>
            <p>API</p>
        </div>
        
        {/* GitHub and link to website  */}
        <div className="absolute right-0 top-[82%] space-x-4 hidden lg:block">    
            <a href="https://github.com/charmin16/food_recipe" target='_blank'> 
            <i className="fa-brands fa-github text-2xl cursor-pointer"></i></a>
            <a href="https://food-recipe-31cr.vercel.app/" target='_blank'>
            <i className="fa-solid fa-arrow-up-right-from-square text-2xl cursor-pointer"></i></a> 
        </div>
       </div>
      
    </div >
  )
}

export default Projects