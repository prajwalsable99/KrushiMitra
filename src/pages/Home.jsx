import React from 'react'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
// import Weather from '../components/Weather'
import WhatWeprovide from '../components/WhatWeprovide'


const Home = () => {
  return (
    <div className='min-h-screen '>
      <Hero />
      <WhatWeprovide />
      <Footer/>
      
    </div>
  )
}

export default Home
