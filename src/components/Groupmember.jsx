import React from 'react'
import {Link} from 'react-router-dom'

const Groupmember = (props) => {

    const {name,role,memimg,insta,linkedin}=props;
  return (

     <div className="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
                            <div className="flex flex-col">
                            
                               
                                    <img className="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                                     alt='l'   src={memimg} />
                               
    
                            
                                <div className="text-center mt-6">
                             
                                    <h1 className="text-gray-900 text-xl font-bold mb-1">
                                        {name}
                                    </h1>
    
                                    
                                    <div className="text-black  mb-2">
                                    {role}
                                    </div>
    
                                  
                                    <div className="flex items-center justify-center opacity-50 hover:opacity-100
                                    transition-opacity duration-300">
                              
                                        <Link to={linkedin} target={'_blank'} className="flex rounded-full hover:bg-indigo-50 h-10 w-10">
                                            <i className="mdi mdi-linkedin text-indigo-500 mx-auto mt-2"></i>
                                        </Link>
    
                                     
                                       
    
                                        <Link to={insta} target={'_blank'} className="flex rounded-full hover:bg-orange-50 h-10 w-10">
                                            <i className="mdi mdi-instagram text-orange-400 mx-auto mt-2"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
  )
}

export default Groupmember


                                  
                         