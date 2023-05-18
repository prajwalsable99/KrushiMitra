import React, { useEffect, useState } from 'react'
import Dayweat from './Dayweat';
import WeathFC from './WeathFC';



const Weather = () => {

	const [wdata, setwdata] = useState(null);
	const lat = 0;
	const lon = 0;
	const API_KEY = "27f1accd902101f99bfcd5f86d27119b";
	// const date = new Date().toLocaleString('en-US', options);
	useEffect(() => {
		async function fetchData() {
			// You can await here
			try {
				const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`);
				const data = await response.json();
				setwdata(data)
				// console.log(data)

			} catch (error) {
				console.log(error.message)
			}
		}
		fetchData();
	}, []);
	return (


	<div >
		
		<Dayweat wdata={wdata}/>
		<WeathFC/>
	</div>


	)
}

export default Weather
