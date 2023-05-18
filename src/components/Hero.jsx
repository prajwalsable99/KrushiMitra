import React from 'react'
import { Link } from 'react-router-dom'
import heroimg from '../assets/images/h5.jpg'


const Hero = () => {
  return (
    <div className="relative h-full ">
    <img
      src={heroimg}
      className="absolute inset-0 object-cover w-full h-full"
      alt=""
    />
    <div className="relative bg-gray-900 bg-opacity-50 w-full h-full p-16">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="flex flex-col items-center justify-between xl:flex-row">
          <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
              The Best friend of <br className="hidden md:block" />
              farmer{' '}
              <span className="text-teal-accent-400">is here</span>
            </h2>
            <p className="max-w-xl mb-4 text-base text-gray-200 md:text-lg">
            "The farmer is the only man in our economy who buys everything at retail, sells everything at wholesale, and pays the freight both ways." - John F. Kennedy
            </p>
            <Link
              to="/features"
              aria-label=""
              className="inline-flex items-center font-semibold tracking-wider transition-colors duration-200 text-yellow-300  text-3xl hover:text-white"
            >
              Get Started
              <svg
                className="inline-block w-3 ml-2"
                fill="currentColor"
                viewBox="0 0 12 12"
              >
                <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
              </svg>
            </Link>
          </div>
          
        </div>
      </div>
    </div>
  </div>
  )
}

export default Hero
