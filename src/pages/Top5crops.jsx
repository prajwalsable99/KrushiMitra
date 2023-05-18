import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Loader from '../components/Loader';
import CropTr from '../components/CropTr';

function Top5crops() {



    const [data, setData] = useState(null);

    const [pred, setpred] = useState({ predictions:[0,0,0,0,0],success:false});


    async function Predict(scode, year, dcode) {

        try {
            let res = await axios({
                method: 'post',
                url: 'https://be-project-backend.onrender.com/top5res',
                data: { scode, year, dcode }
            });

            let data = res.data;
            console.log(data.predictions)
            setpred(data)
            
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
            //   console.log(response.data)
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



                        <div className="container px-5 py-5 mx-auto bg-gray-900 h-full">
                            <h1 className="text-3xl font-medium title-font text-white mb-12 text-center">Prediction of Major crops in India</h1>
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
                                    <button className=' bg-blue-600 border-2 border-white rounded-lg px-5 py-2 my-4 text-white cursor-pointer hover:bg-blue-300 hover:text-white text-2xl' disabled={selectedDist === 'NA' || selectedState === "NA"} onClick={
                                        () => {
                                            console.log(selectedState, selectedDist)
                                            Predict(selectedState, 2023, selectedDist);

                                        }

                                    } > Predict </button>
                                </div>

                            </div>
                           

                           {/* table */}

                          
<section className="antialiased bg-gray-700 text-gray-600 h-full px-4">
    <div className="flex flex-col  justify-center h-full py-4">
        
        <div className="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200 py-2">
            <header className="px-5 py-4 border-b border-gray-100">
                <h2 className="font-semibold text-gray-800">Major Crops (random forest regressor)</h2>
            </header>
            <div className="p-3">
                <div className="overflow-x-auto">
                    <table className="table-auto w-full">
                        <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                            <tr>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-left">Crop Name</div>
                                </th>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-left">R2 score</div>
                                </th>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-center">RMSE</div>
                                </th>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-left">Yield (kg/ha) </div>
                                </th>
                                
                            </tr>
                        </thead>
                        <tbody className="text-sm divide-y divide-gray-100">
                            
{/*                               
                        wheat_m.predict(X)
        prediction2= sugarcane_m.predict(X)
        prediction3 = groundnut_m.predict(X)
        prediction4 = cotton_m.predict(X)
        prediction5 = soyabean_m.predict(X) */}

                          
                            <CropTr rmse={"421"} cyield={pred.predictions[0]} r2score={"0.89"} cname={"wheat"} />
                            <CropTr rmse={"1758"} cyield={pred.predictions[1]} r2score={'0.74'} cname={"sugarcane"} />
                            <CropTr rmse={"390.68"} cyield={pred.predictions[2]} r2score={'0.76'} cname={"groundnut"} />
                            <CropTr rmse={"153.14"} cyield={pred.predictions[3]} r2score={'0.63'} cname={"cotton"} />
                            <CropTr rmse={"342"} cyield={pred.predictions[4]} r2score={'0.70'} cname={"soyabean"} />
                            

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</section>
                           {/* end table */}
                        </div>










                    )

            }



        </section >
    );
}



export default Top5crops
