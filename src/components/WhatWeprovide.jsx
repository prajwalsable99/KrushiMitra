import React from 'react'
import { Link } from 'react-router-dom'
import a1 from '../assets/images/a1.jpg'
import a2 from '../assets/images/a2.jpg'
import a3 from '../assets/images/a3.jpg'
const WhatWeprovide = () => {
  return (
<section className="text-white body-font bg-black">
  <h1 className="sm:text-3xl text-2xl font-medium pt-2 title-font text-center text-white">What we offer ?</h1>
  <div className="container px-5 py-12 mx-auto">
    <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-2 border-gray-200 sm:flex-row flex-col">
      <img src={a1} alt={""} className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 flex-shrink-0"/>
      
        

      <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
        <h2 className="text-white text-lg title-font font-medium mb-2">yield Predictions</h2>
        <p className="leading-relaxed text-base">
        Get the approximate yield of particular crop based on prevoius years location wise production statistics.

        </p>
        <Link to= '/top5crops/' className="mt-3 text-green-500 inline-flex items-center">Try 
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </Link>
      </div>
    </div>
    <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
    <img src={a2} alt={""} className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 flex-shrink-0"/>
      <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
        <h2 className="text-white text-lg title-font font-medium mb-2">Crop Recommendations</h2>
        <p className="leading-relaxed text-base">
        Recommends crop on basis of factors like NPK value of soil,temperature and rainfall.
        </p>
        <Link to= '/features/' className="mt-3 text-green-500 inline-flex items-center">Try
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </Link>
      </div>
      
    </div>
    <div className="flex items-center lg:w-3/5 mx-auto sm:flex-row flex-col">
    <img src={a3} alt={""} className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 flex-shrink-0"/>
      <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
        <h2 className="text-white text-lg title-font font-medium mb-2">Visualization and statistics</h2>
        <p className="leading-relaxed text-base">
            Provides Past few years crop pattern and production statistics of Maharashtra State.
        </p>
        <Link to= '/visualpage/' className="mt-3 text-green-500 inline-flex items-center">Check
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path className='' d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </Link>
      </div>
    </div>
    
  </div>
</section>
  )
}

export default WhatWeprovide
