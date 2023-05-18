import React from 'react'
import Groupmember from '../components/Groupmember';
 import img1 from '../assets/images/gm1.jpg'
 import img2 from '../assets/images/gm2.jpg'
 import img3 from '../assets/images/gm3.jpg'
 import img4 from '../assets/images/gm4.jpg'
const About = () => {
  return (
  <>
   
    

    <div className="flex items-center justify-center min-h-screen  py-1 bg-gray-100">
        <div className="flex flex-col">
            
         
    
            <div className="flex flex-col ">
         
                <div className="container max-w-7xl px-4">
                    
                    <div className="flex flex-wrap justify-center text-center mb-2">
                        <div className="w-full lg:w-6/12 px-4">
                            
                            <h1 className="text-gray-900 text-4xl font-bold mb-2">
                                Meet the Team
                            </h1>
    
                          
                           
                        </div>
                    </div>
    
                  
                    <div className="flex flex-wrap">
                       
                       
                      <Groupmember name={"prajwal"} role={"project head,UI,Backend"} memimg={img1}
                      insta={"https://instagram.com/ig_prajwal_2001"} linkedin={"https://www.linkedin.com/in/prajwal-sable-0273921b1"}
                      />

                      <Groupmember name={"Ashish"} role={"Idea,Backend"} memimg={img2}
                       insta={"https://instagram.com/ig_prajwal_2001"} linkedin={"https://www.linkedin.com/in/prajwal-sable-0273921b1"}/>
                      <Groupmember name={"Atharva"} role={"ML"} memimg={img3}
                       insta={"https://instagram.com/ig_prajwal_2001"} linkedin={"https://www.linkedin.com/in/prajwal-sable-0273921b1"}
                      />
                      <Groupmember name={"Mandar"} role={"ML "} memimg={img4}
                       insta={"https://instagram.com/ig_prajwal_2001"} linkedin={"https://www.linkedin.com/in/prajwal-sable-0273921b1"}
                      />
                      
                        
                       
                       
    
                 
                      
                    </div>
                </div>
            </div>
        </div>
    </div>
  </>
  )
}

export default About;
