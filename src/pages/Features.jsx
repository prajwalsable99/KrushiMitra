import React from 'react'
import Recommender from '../components/Recommender'
import Predictor1 from '../components/Predictor1'
import ClassRes from '../components/ClassRes'
const Features = () => {
  return (
    <div className=' bg-black w-full min-h-screen pt-16'>
      
      {/* <marquee>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui magnam quam iure delectus dolorem quia expedita! Alias error animi debitis dicta culpa suscipit earum cupiditate sunt nobis, mollitia, corrupti a!</marquee> */}
        <Predictor1 cropname="rice"/>
        <Recommender/>
        <ClassRes algo={'SVM'}acc={0.97}prec={0.97}recll={0.97} f1={0.97}/>
        <ClassRes algo={'Random forest'}acc={0.99}prec={0.98}recll={0.99} f1={1}/>

</div>


   
  )
}

export default Features
