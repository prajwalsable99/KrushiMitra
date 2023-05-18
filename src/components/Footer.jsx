import React from 'react'
import { Link } from 'react-router-dom'
import footimg from '../assets/images/h3.jpg'
const Footer = () => {
  return (
    <footer aria-label="Site Footer" className="bg-gray-800 lg:grid lg:grid-cols-5">
    <div className="relative block h-32 lg:col-span-2 lg:h-full">
      <img
        src={footimg}
        alt=""
        className="absolute inset-0 object-cover w-full h-full"
      />
    </div>
  
    <div className="px-4 py-16 sm:px-6 lg:col-span-3 lg:px-8">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
        <div>
          <p>
            <span className="text-xs tracking-wide text-white uppercase">
              Call us
            </span>
  
            <span
              className="block text-2xl font-medium text-white hover:opacity-75 sm:text-3xl"
            >
            +91 7517780449
            </span>
          </p>
  
          <ul className="mt-8 space-y-1 text-sm text-white">
            <li>Monday to Friday: 10am - 5pm</li>
            
          </ul>
  
         
        </div>
  
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <p className="font-medium text-white">More Services</p>
  
            <nav aria-label="Footer Navigation - Services" className="mt-6">
              <ul className="space-y-4 text-sm">
                <li>
                  <Link to="/more/weather" className="text-white transition hover:opacity-75">
                    Weather
                  </Link>
                </li>
  
                <li>
                  <Link to="/more/market" className="text-white transition hover:opacity-75">
                    Market 
                  </Link>
                </li>
  
                <li>
                  <Link to="/more/calendar" className="text-white transition hover:opacity-75">
                    calendar
                  </Link>
                </li>
  
              
  
                <li>
                  <Link to="/more/diary" className="text-white transition hover:opacity-75">
                    Diary
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
  
          <div>
            <p className="font-medium text-white">Company</p>
  
            <nav aria-label="Footer Navigation - Company" className="mt-6">
              <ul className="space-y-4 text-sm">
               
  
                <li>
                  <Link to="/about" className="text-white transition hover:opacity-75">
                    Meet the Team
                  </Link>
                </li>
  
                
              </ul>
            </nav>
          </div>
        </div>
      </div>
  
      <div className="pt-12 mt-12 border-t border-gray-100">
        <div className="sm:flex sm:items-center sm:justify-between">
          <nav aria-label="Footer Navigation - Support">
            <ul className="flex flex-wrap gap-4 text-xs">
              <li>
                <p  className="text-white transition hover:opacity-75">
                  Terms & Conditions
                </p>
              </li>
  
              <li>
                <p className="text-white transition hover:opacity-75">
                  Privacy Policy
                </p>
              </li>
  
              <li>
                <p className="text-white transition hover:opacity-75">
                  Cookies
                </p>
              </li>
            </ul>
          </nav>
  
          <p className="mt-8 text-xs text-white sm:mt-0">
            &copy; 2022. Company Name. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  </footer>
  
  )
}

export default Footer
