
import React, { useEffect, useState } from "react";
import axios from 'axios'
// eslint-disable-next-line no-unused-vars
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
import Loader from '../Loader'


const gcolor2="gray"
const gcolor1="rgb(255, 99, 132)"
const sampledata = {
  labels: ["x1", "x2", "x3", "x4"],
  datasets: [
    {
      label: "Sample data",
      backgroundColor:  gcolor2,
      borderColor:  gcolor1,
      data: [15, 55, 40, 20],
    }
  ]

};



const Graph1 = () => {
  

  const [data, setData] = useState();
  const [err, seterr] = useState(true);
  const [graphdata, setgraphdata] = useState(sampledata);
  const [district, seldistrict] = useState("NA");



  // const handleclick=()=>{

  //   console.log("clicked")
  //   setgraphdata({
  //     labels: data.years,
  //     datasets: [
  //       {
  //         label: "Sample data",
  //         backgroundColor: "red",
  //         borderColor: "red",
  //         data: data.dist,
  //       }
  //     ]

  //   })
  // }



  useEffect(() => {




    async function fetchData() {
      const response = await axios.get('https://be-project-backend.onrender.com/visualize');
      console.log(response.data.ricedata)
      setData(response.data.ricedata);
      seterr(false)


    }
    fetchData();
  }, []);








  return (
    <div className={err ? "bg-white w-full h-full" : " bg-white  w-1/2 h-3/4  "} >
      {
        err ?
          <Loader />
          :
          <div className="" style={{"margin":"0px 13px"}}>
            {/* prajwal */}
            <Line data={graphdata} />
            <div>

<label className='text-black text-xl pr-2' >District</label>
<select className="border border-gray-300 rounded-full text-gray-600 h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none scrollbar-hide"
  placeholder="district"
  value={district}

  onChange={(e) => {
    seldistrict(e.target.value);
    console.log(e.target.value)

    e.target.value==="select district"?setgraphdata(sampledata):

    setgraphdata({
      labels: data.years,
      datasets: [
        {
          label:` ${e.target.value} rice-procution : (kg/ha)`,
          backgroundColor: gcolor2,
          borderColor:  gcolor1,
          data: data.districts.find((district) => district['districtname'].toString() === e.target.value).production,
        }
      ]
      
    })





  }}
>
  <option>select district</option>
  {data?.districts.map((dis, key) => {
    return (
      <option value={dis['districtname']} key={key}>
        {dis['districtname']}
      </option>
    );
  })}
</select>
</div>

          </div>

        

      }
     

     

    </div>

  );
};

export default Graph1;