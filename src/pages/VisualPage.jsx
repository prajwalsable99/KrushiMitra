import React from 'react'
import Graph1 from '../components/visualization/Graph1'
import MyMap from '../components/visualization/MyMap'

const VisualPage = () => {
  return (

    <div>

      <div className='min-w-screen h-full flex  justify-center bg-gray-700 pt-16' >

        < Graph1 />

      </div>
      <div className='min-w-4/6  flex items-center  justify-center bg-gray-700 '>

        < MyMap />

      </div>

    </div>



  )
}

export default VisualPage
