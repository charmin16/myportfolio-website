import React, { useState } from 'react'
// import './Navbar.css'

const Navbar = () => {

    const [open, setOpen] = useState(false)

    const changeHam = () => {
        setOpen(!open)
    }

  return (
    <div>    
        <nav className=" py-8 mx-auto w-[90%] flex justify-between text-white">
            <div className='md:text-3xl sm:text-2xl text-xl tracking-widest font-monoton'>Charming</div>
            <div className='hidden lg:block space-x-4 font-cinzel'>
                <a href="#about">About</a>
                <a href="#tech">Technologies</a>
                <a href="#proj">Portfolio</a>
                <a href="#skills">Skills</a>
                <a href="#serv">Services</a>
                <a href="#contacts">Contact</a>
            </div>
                
            {/* hamburger animation button  */}
            <div className="lg:hidden">
                <button onClick={() => setOpen(!open)} className={open ? 'open lg:hidden hamburger block ' : 'lg:hidden hamburger block'} >
                    <span className="hamburger-top"></span>
                    <span className="hamburger-middle"></span>
                    <span className="hamburger-bottom"></span>
                    
                </button>
            </div>
        </nav>
        
        {open && <div className='flex flex-col items-center text-xl uppercase
        space-y-4 pt-8 bg-black min-h-screen text-white md:hidden'>
            <a href="">About</a>
            <a href="">Technologies</a>
            <a href="">Projects</a>
             <a href="">Skills</a>
            <a href="">Contact</a>
           
        </div>}
      
    </div>
  )
}

export default Navbar





