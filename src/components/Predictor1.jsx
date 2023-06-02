import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Loader from './Loader';

function Predictor1(props) {

  const {cropname}=props;

  const [data, setData] = useState(null);

  const [pred, setpred] = useState("");

  const getMoney=(rate,prod)=>{

    let money= (rate * prod) /( 100 *2.47105) 
    money=money.toFixed(2) ;
    return money;
  }

  async function Predict(scode, year, dcode) {

    try {
      let res = await axios({
        method: 'post',
        url: 'https://be-project-backend.onrender.com/predict',
        data: { scode, year, dcode }
      });

      let data = res.data;
      console.log(data.prediction[0])
      setpred(data.prediction[0])
    } catch (error) {
      alert("something went wrong")
      // console.log(error.response); // this is the main part. Use the response property from the error object

      // return error.response;
    }


  }

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get('https://be-project-backend.onrender.com/inputdata');
      setData(response.data);
      console.log(response.data)
    }
    fetchData();
  }, []);

  const [selectedState, setSelectedState] = useState("NA");
  const [selectedDist, setSelectedDist] = useState("NA");

  const [availableDist, setAvailDist] = useState([]);


  return (
    <section className="text-gray-600 body-font ">


      {
        data === null ?
          (<Loader />)
          :
          (



            <div className="container px-5 py-5 mx-auto bg-black h-full">
              <h1 className="text-3xl font-medium title-font text-white mb-12 text-center">{ cropname} production Predictor</h1>
              <div className='text-xl font-medium title-font text-green-500 mb-12 text-center'>( R2 score: 0.86 ) </div>
              <div className="flex flex-wrap -m-4">
                <div className="p-4 md:w-1/2 w-full">
                  <div className="h-full bg-gray-700 p-8 rounded">

                    <div>

                      <label className='text-white text-2xl pr-2' >State</label>
                      <select className="border border-gray-300 rounded-full text-gray-600 h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none scrollbar-hide"
                        placeholder="State"
                        value={selectedState}

                        onChange={(e) => {
                          setSelectedState(e.target.value);
                          setSelectedDist("NA")
                          // console.log(e.target.value)
                          // console.log(selectedState)
                          let d = data.statedata.find((state) => state['State Code'].toString() === e.target.value).Districts;
                          // console.log(d)
                          setAvailDist(d)
                        }}
                      >
                        <option>--Choose State--</option>
                        {data.statedata.map((state, key) => {
                          return (
                            <option value={state['State Code']} key={key}>
                              {state['State Name']}
                            </option>
                          );
                        })}
                      </select>
                    </div>


                  </div>
                </div>
                <div className="p-4 md:w-1/2 w-full">
                  <div className="h-full bg-gray-700 p-8 rounded">

                    <div>

                      <label className='text-white text-2xl pr-2'>District</label>
                      <select className="border border-gray-300 rounded-full text-gray-600 h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none scrollbar-hide"
                        placeholder="District"
                        value={selectedDist}
                        onChange={(e) => setSelectedDist(e.target.value)}
                      >
                        <option>--Choose Dist--</option>
                        {availableDist?.map((e, key) => {
                          return (
                            <option value={e['Dist Code']} key={key}>
                              {e['Dist Name']}
                            </option>
                          );
                        })}
                      </select>
                    </div>







                  </div>

                </div>

              </div>
              <div className='flex items-center justify-center my-5 '>

                <div>
                  <button className=' border-2 border-green-600 rounded-lg px-5 py-2 my-4 text-green-400 cursor-pointer hover:bg-green-600 hover:text-green-200 text-2xl' disabled={selectedDist === 'NA' || selectedState === "NA"} onClick={
                    () => {
                      console.log(selectedState, selectedDist)
                      Predict(selectedState, 2023, selectedDist);

                    }

                  } > Predict </button>
                </div>

              </div>
                  {
                    pred===""?
                    <div className='text-xl font-medium title-font text-white mb-12 text-center'>select the state and district to get rice yield prediction </div>
                    :(
                     < div>
                    <div className='text-3xl font-medium title-font text-white mb-12 text-center'> {pred.toFixed(2)} kg/ha </div>
                    {/* <div className='text-3xl font-medium title-font text-white mb-12 text-center'> {getMoney( 2040,pred)  } rupees per acre </div> */}
                    {/* <div className='text-xl font-medium title-font text-white mb-12 text-center'> Note: rate of rice 2040 rupees per 100kg </div> */}
                    
                    </div>
                    )
                  }
                  
            </div>










          )

      }



    </section >
  );
}

export default Predictor1