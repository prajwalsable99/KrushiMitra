import React from 'react'

import { NavLink } from 'react-router-dom';
const Navbar = () => {
  
    

  return (
<nav className="sticky top-0 z-50 bg-white shadow dark:bg-white">
    <div className="container flex items-center justify-center p-6 mx-auto text-black capitalize dark:text-black ">
        <NavLink to="/" 

className={({ isActive }) => (isActive ? "text-black dark:text-black border-b-2 border-black mx-1.5 sm:mx-6" : "border-b-2 border-transparent hover:text-black dark:hover:text-black hover:border-black mx-1.5 sm:mx-6")}
       
        
        >home</NavLink>

        <NavLink to="/features" 
        
        className={({ isActive }) => (isActive ? "text-black dark:text-black border-b-2 border-black mx-1.5 sm:mx-6" : "border-b-2 border-transparent hover:text-black dark:hover:text-black hover:border-black mx-1.5 sm:mx-6")}
        
        >features</NavLink>

      <NavLink to="/top5crops" 
        
        className={({ isActive }) => (isActive ? "text-black dark:text-black border-b-2 border-black mx-1.5 sm:mx-6" : "border-b-2 border-transparent hover:text-black dark:hover:text-black hover:border-black mx-1.5 sm:mx-6")}
        
        >Top 5</NavLink>


        <NavLink to="/visualpage"
       className={({ isActive }) => (isActive ? "text-black dark:text-black border-b-2 border-black mx-1.5 sm:mx-6" : "border-b-2 border-transparent hover:text-black dark:hover:text-black hover:border-black mx-1.5 sm:mx-6")}
        >visuals</NavLink>


  <NavLink to="/more" 
        
        className={({ isActive }) => (isActive ? "text-black dark:text-black border-b-2 border-black mx-1.5 sm:mx-6" : "border-b-2 border-transparent hover:text-black dark:hover:text-black hover:border-black mx-1.5 sm:mx-6")}
        
        >More</NavLink>


        <NavLink to="/about" 
        
        className={({ isActive }) => (isActive ? "text-black dark:text-black border-b-2 border-black mx-1.5 sm:mx-6" : "border-b-2 border-transparent hover:text-black dark:hover:text-black hover:border-black mx-1.5 sm:mx-6")}

        >About</NavLink>
     

       
    </div>
</nav>
  )
}

export default Navbar
