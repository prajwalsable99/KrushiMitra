import React from 'react'
const options = {
	year: 'numeric',
	month: 'long',
	day: 'numeric',
	hour: 'numeric',
	minute: 'numeric',
	second: 'numeric'
};

const Dayweat = (props) => {
    const {wdata}=props;
    const date = new Date().toLocaleString('en-US', options);

  return (
    <div className="flex flex-col bg-white rounded  w-full max-w-xs mb-2 p-4">
    <div className="font-bold text-xl">Current Weather</div>
    <div className="text-sm text-gray-500">{date}</div>
    {/* <div className="mt-6 text-6xl self-center inline-flex items-center justify-center rounded-lg text-indigo-400 h-24 w-24">

            </div> */}
    <div className="flex flex-row items-center justify-center mt-6">
        <div className="font-medium text-4xl">{wdata?.main.temp} &deg;C</div>
        <div className="flex flex-col items-center ml-6">
            <div>{wdata?.weather[0].description} </div>
            <div className="mt-1
                    ">
                <span className="text-sm"><i className="far fa-long-arrow-up"></i></span>
                <span className="text-sm font-light text-gray-500">min : {wdata?.main.temp_min} &deg;C</span>
            </div>
            <div>
                <span className="text-sm"><i className="far fa-long-arrow-down"></i></span>
                <span className="text-sm font-light text-gray-500">max : {wdata?.main.temp_max} &deg;C</span>
            </div>
        </div>
    </div>
    <div className="flex flex-row justify-between mt-6">
        <div className="flex flex-col items-center">
            <div className="font-medium text-sm">Wind speed</div>
            <div className="text-sm text-gray-500">{wdata?.wind.speed} m/s</div>
        </div>
        <div className="flex flex-col items-center">
            <div className="font-medium text-sm">Humidity</div>
            <div className="text-sm text-gray-500">{wdata?.main.humidity} %</div>
        </div>
        <div className="flex flex-col items-center">
            <div className="font-medium text-sm">Visibility</div>
            <div className="text-sm text-gray-500">{wdata?.visibility / 1000} km</div>
        </div>
    </div>
</div>
  )
}

export default Dayweat
