import axios from 'axios';
import React, { useRef, useState } from 'react'

const Recommender = () => {
    const [ph,setph]=useState(0);

    const [op,setop]=useState("")
    const myref=useRef();

    const getrec=async(obj)=>{

        try {
            let res = await axios({
              method: 'post',
              url: 'https://be-project-backend.onrender.com/recommend',
              data: obj
            });
      
            let ans = res.data.recommendation;
            // console.log(data.recommendation)
            setop(ans);
          } catch (error) {
            alert("something went wrong")
            // console.log(error.response); // this is the main part. Use the response property from the error object
      
            // return error.response;
          }
    }


    const onformsub=(e)=>{
        e.preventDefault();
        const { nr,pr,kr,rainfall,ph,humidity,temperature } =myref.current;
        const body={
            "N":nr.value,
            "P":pr.value,
            "K":kr.value,
            "temperature":temperature.value,
            "humidity":humidity.value,
            "ph":ph.value,
            "rainfall":rainfall.value
            
          }
        console.log("Submitted",body);
        getrec(body)

       

        myref.current.reset();
        setTimeout(()=>{
            setop("")
        },7000)
       
    }

    return (

    <section className="max-w-4xl p-6 mx-auto bg-indigo-600 rounded-md shadow-md dark:bg-gray-800 mt-10">
    <h1 className="text-xl font-bold text-yellow-500 text-center capitalize ">Get recommendation for crop</h1>
    <form ref={myref} onSubmit={onformsub}>
        <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
                <label className="text-white dark:text-gray-200" htmlFor="username">Temperature</label>
                <input id="temperature" type="number" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" max={50} min={5} required/>
            </div>

            <div>
                <label className="text-white dark:text-gray-200" htmlFor="emailAddress">Humidity(%)</label>
                <input id="humidity" type="number" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" max={100} min={0} required/>
            </div>

            <div>
                <label className="text-white dark:text-gray-200" htmlFor="password">Rainfall (mm)</label>
                <input id="rainfall" type="number" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" min={0} max={300} required/>
            </div>

           

           
            <div>
                <label className="text-white dark:text-gray-200" htmlFor="passwordConfirmation">Ph </label>
                <output className='text-white text-md'>: {ph } </output>
                <input id="ph" type="range" className="block w-full py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" min={0} max={10}  value={ph} onChange={(e)=>{ e.preventDefault();setph(e.target.value) }} required/>
            </div>

         <div>
                <label className="text-white dark:text-gray-200" htmlFor="password">Nitrogen ratio (N)</label>
                <input id="nr" type="number" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" min={0} max={150} required/>
            </div>

            <div>
                <label className="text-white dark:text-gray-200" htmlFor="password">Phosphorous ratio (P)</label>
                <input id="pr" type="number" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" min={0} max={150} required/>
            </div>

            <div>
                <label className="text-white dark:text-gray-200" htmlFor="password">Potassium ratio (K)</label>
                <input id="kr" type="number" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" min={0} max={210} required/>
            </div>  
            
            
        </div>



        <div className="flex justify-end mt-6">
            <button className="px-6 py-2 leading-5 text-white transition-colors duration-200 transhtmlForm bg-pink-500 rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600"  type='submit'>recommend</button>
        </div>
        
    </form>
<div className='pb-5 bg-white text-black mt-2 text-2xl text-center'> {op&& `Ideal crop to grow : ${op}` } {!op&& `OUTPUT HERE`}</div>
</section>

 
   
  )
}

export default Recommender
