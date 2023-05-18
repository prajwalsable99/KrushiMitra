/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import Fivedayforecast from './Fivedayforecast';

const WeathFC = () => {
    const [fdata, setfdata] = useState(null);
    const [pos, setpos] = useState([0, 0])
    const API_KEY = "27f1accd902101f99bfcd5f86d27119b";
    // const date = new Date().toLocaleString('en-US', options);



  

    const getLL = (data) => {
        let lat_ = data.coords.latitude;
        let long_ = data.coords.longitude;
        //  console.log(lat_,long_)
        setpos([lat_, long_])
    }
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(getLL);
        async function fetchData() {

            const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${pos[0]}&lon=${pos[1]}&appid=${API_KEY}&units=metric`;

            // Make the API call to get the 5-day forecast data
            fetch(apiUrl)
                .then(response => response.json())
                .then(data => {
                    // Filter the response data to only include the weather data for noon each day
                    const noonWeatherData = data.list.filter(item => item.dt_txt.includes('12:00:00'));

                    // Calculate the average weather data for each day
                    const dailyWeatherData = {};
                    noonWeatherData.forEach(item => {
                        const date = item.dt_txt.split(' ')[0];
                        if (!dailyWeatherData[date]) {
                            dailyWeatherData[date] = {
                                temperature: 0,
                                humidity: 0,
                                windSpeed: 0
                            };
                        }
                        dailyWeatherData[date].temperature += item.main.temp;
                        dailyWeatherData[date].humidity += item.main.humidity;
                        dailyWeatherData[date].windSpeed += item.wind.speed;
                    });
                    Object.keys(dailyWeatherData).forEach(date => {
                        const count = noonWeatherData.filter(item => item.dt_txt.includes(date)).length;
                        dailyWeatherData[date].temperature /= count;
                        dailyWeatherData[date].humidity /= count;
                        dailyWeatherData[date].windSpeed /= count;
                    });

                    // Output the average weather data for each day
                    // console.log('Average weather data for each day:');
                    // console.log(dailyWeatherData);
                    setfdata(dailyWeatherData)
                })
                .catch(error => console.error(error));

        }
        fetchData();

    }, []);



    return (

        <div className="flex flex-col space-y-6 w-full max-w-screen-sm bg-white p-10 mt-10 rounded-xl ring-8 ring-white ring-opacity-40">

            <h1 className='font-bold text-xl'> 5 days Forecast</h1>
        

            <div className="flex justify-between items-center">
                <div>Day</div>
                <div>Temp &deg;C</div>
                <div>Hum %</div>
            </div> 

            {
               fdata && <Fivedayforecast key={"mykey"} data={fdata}></Fivedayforecast>
            }




        </div>
    )
}

export default WeathFC
