import { useState, useEffect } from 'react'
// import './Skill.css'

const Skills = () => {


  return (
    <div id='skills' className='w-[100%] md:w-[65%] mx-auto shadow-2xl shadow-black pt-4 pb-12 px-6 
    text-white text-sm md:text-base mt-24'>
        
       <h1 className="text-4xl text-center md:text-left pb-3 font-libre font-bold ">Skills</h1>
       <div className='line w-[4em] h-[0.5em] bg-green-500 mx-auto md:mx-0'></div>
        <div className="flex flex-col md:flex-row justify-between font-serif mt-12">
            <div id="left-top" className='md:w-[46%]'>
                <div className="flex justify-between items-center">
                    <div className='bg-cyan-00 w-[19%]'>
                        <h1>HTML5</h1>
                        <h1>90%</h1>
                    </div>
                    <div className="relative w-[78%] bg-red-00">
                        <div className='w-[100%] border bg-gren-500 py-1 rounded-full'></div>
                        <div className='absolute top-0 w-[90%] border bg-[#c708a4] py-1 rounded-full'></div>
                    </div>
                </div>
                
                 <div className="flex justify-between items-center mt-4">
                    <div className='bg-cyan-00 w-[19%]'>
                        <h1>CSS</h1>
                        <h1>90%</h1>
                    </div>
                    <div className="relative w-[78%] bg-red-00">
                        <div className='w-[100%] border bg-gren-500 py-1 rounded-full'></div>
                        <div className='absolute top-0 w-[90%] border bg-[#c708a4] py-1 rounded-full'></div>
                    </div>
                </div>
                
                 <div className="flex justify-between items-center mt-4">
                    <div className='bg-cyan-00 w-[19%]'>
                        <h1>JavaScript</h1>
                        <h1>85%</h1>
                    </div>
                    <div className="relative w-[78%] bg-red-00">
                        <div className='w-[100%] border bg-gren-500 py-1 rounded-full'></div>
                        <div className='absolute top-0 w-[85%] border bg-[#c708a4] py-1 rounded-full'></div>
                    </div>
                </div>
                
                 <div className="flex justify-between items-center mt-2">
                    <div className='bg-cyan-00 w-[19%]'>
                        <h1>React</h1>
                        <h1>80%</h1>
                    </div>
                    <div className="relative w-[78%] bg-red-00">
                        <div className='w-[100%] border bg-gren-500 py-1 rounded-full'></div>
                        <div className='absolute top-0 w-[80%] border bg-[#c708a4] py-1 rounded-full'></div>
                    </div>
                </div>
                
                <div className="flex justify-between items-center mt-2">
                    <div className='bg-cyan-00 w-[19%]'>
                        <h1>APIs</h1>
                        <h1>80%</h1>
                    </div>
                    <div className="relative w-[78%] bg-red-00">
                        <div className='w-[100%] border bg-gren-500 py-1 rounded-full'></div>
                        <div className='absolute top-0 w-[80%] border bg-[#c708a4] py-1 rounded-full'></div>
                    </div>
                </div>
                
            </div>
            
            <div id="bottom-right" className='md:w-[46%]'>
                <div className="flex justify-between items-center mt-2">
                    <div className='bg-cyan-00 w-[19%]'>
                        <h1>NextJs</h1>
                        <h1>60%</h1>
                    </div>
                    <div className="relative w-[78%] bg-red-00">
                        <div className='w-[100%] border bg-gren-500 py-1 rounded-full'></div>
                        <div className='absolute top-0 w-[60%] border bg-[#c708a4] py-1 rounded-full'></div>
                    </div>
                </div>
                
                <div className="flex justify-between items-center mt-2">
                    <div className='bg-cyan-00 w-[19%]'>
                        <h1>Tailwind</h1>
                        <h1>80%</h1>
                    </div>
                    <div className="relative w-[78%] bg-red-00">
                        <div className='w-[100%] border bg-gren-500 py-1 rounded-full'></div>
                        <div className='absolute top-0 w-[80%] border bg-[#c708a4] py-1 rounded-full'></div>
                    </div>
                </div>
                
                <div className="flex justify-between items-center mt-2">
                    <div className='bg-cyan-00 w-[19%]'>
                        <h1>Python</h1>
                        <h1>60%</h1>
                    </div>
                    <div className="relative w-[78%] bg-red-00">
                        <div className='w-[100%] border bg-gren-500 py-1 rounded-full'></div>
                        <div className='absolute top-0 w-[60%] border bg-[#c708a4] py-1 rounded-full'></div>
                    </div>
                </div>
                
                <div className="flex justify-between items-center mt-2">
                    <div className='bg-cyan-00 w-[19%]'>
                        <h1>Figma</h1>
                        <h1>50%</h1>
                    </div>
                    <div className="relative w-[78%] bg-red-00">
                        <div className='w-[100%] border bg-gren-500 py-1 rounded-full'></div>
                        <div className='absolute top-0 w-[50%] border bg-[#c708a4] py-1 rounded-full'></div>
                    </div>
                </div>
                
                <div className="flex justify-between items-center mt-2">
                    <div className='bg-cyan-00 w-[19%]'>
                        <h1>TypeScript</h1>
                        <h1>60%</h1>
                    </div>
                    <div className="relative w-[78%] bg-red-00">
                        <div className='w-[100%] border bg-gren-500 py-1 rounded-full'></div>
                        <div className='absolute top-0 w-[60%] border bg-[#c708a4] py-1 rounded-full'></div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Skills