import React from 'react'

const Fivedayforecast = (props) => {
   const {data}=props;
   const objEntries = [];

   for (const key in data) {
    // console.log(`${key}`);
    objEntries.push(

        <div key={key} className="flex justify-between items-center">

                <div>{key}</div>
                <div>{data[key].temperature}</div>
                <div>{data[key].humidity}</div>
                {/* <div>34/56</div> */}
            </div>
    )
  }


  return (
    <div>
        {
            objEntries
        }
       
    </div>
)
}


export default Fivedayforecast