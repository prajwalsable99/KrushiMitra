import React from 'react'
import 'leaflet/dist/leaflet.css';
import { MapContainer,  GeoJSON } from 'react-leaflet'
import data from './mydata';
import { production } from './mydata'
import { useEffect, useState } from 'react';

// const crops = ["rice", "sugarcane", "cotton", "wheat"];


const giveColour = (prod) => {

    if (prod >= 3000) {
        return 1;
    } if (prod >= 2000) {
        return 0.7;
    } if (prod >= 1000) {
        return 0.5;
    } if (prod >= 300) {
        return 0.3;
    } else {
        return 0.1;
    }
}

const MyMap = () => {
    const [currd, setcurrd] = useState("rice");
    useEffect(() => {

    }, [currd])



    const handleclickonDist = (e) => {
        // console.log("clicked")
    }
    const handlemonDist = (e) => {
        // console.log("in")
        e.target.setStyle(
            {

                color: "white",
                weight: 4

            }
        )
    }
    const handlemoutDist = (e) => {
        // console.log("out")
        e.target.setStyle(
            {

                color: "black",
                weight: 2

            }
        )
    }


    const oneachDist = (district, layer) => {

        const { NAME_2 } = district.properties;
        // console.log(NAME_2)
        layer.bindPopup(NAME_2 + " : " + production[NAME_2][currd]);
        // layer.options.fillColor = colours[Math.floor(Math.random() * colours.length)]
        layer.options.fillOpacity = giveColour(production[NAME_2][currd])
        layer.on(
            {
                click: handleclickonDist,
                mouseover: handlemonDist,
                mouseout: handlemoutDist,
            }
        )

    }

    return (
        <div className="App w-full h-screen k">




            <div className='w-full h-5/6 p-8 '>


                <MapContainer center={[19.50942573513594, 75.69651106427662]} scrollWheelZoom={false} zoom={7} className="w-full h-full">
                    {/* <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    /> */}
                    <GeoJSON key={currd}
                        data={data.features}
                        style={{
                            fillColor: "green",
                            // fillOpacity: 0.4,
                            color: "black",
                            weight: 2
                        }}
                        onEachFeature={oneachDist}

                    />
                </MapContainer>

                <div className="flex items-center justify-center pt-3">

                    <select
                        onChange={(e) => { setcurrd(e.target.value); console.log(e.target.value) }}
                        className="border border-gray-300 rounded-full text-gray-600 h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none">
                        <option value={"rice"}>Rice</option>
                        <option value={"wheat"} >wheat</option>
                        <option value={"sugarcane"} >Sugarcane</option>
                        <option value={"cotton"} >Cotton</option>

                    </select>

                </div>

            </div>

            <div className='w-full h-1/12  flex items-center justify-center pt-3 my-2'>
                <h1
                    className="  text-2xl text-white  text-transparent sm:text-2xl"
                >
                    {currd} production (kg/ha) in 2017
                </h1>

            </div>
            <div className='flex   items-center justify-center'>
                <div className="bg-green-800 rounded-full text-white px-3 py-1 text-xl uppercase font-medium"> &gt;3000</div>
                <div className="bg-green-700 rounded-full text-white px-3 py-1 text-xl uppercase font-medium">&gt;2000</div>
                <div className="bg-green-500 rounded-full text-white px-3 py-1 text-xl uppercase font-medium">&gt;1000</div>
                <div className="bg-green-300 rounded-full text-white px-3 py-1 text-xl uppercase font-medium">&gt;300</div>
                <div className="bg-green-100 rounded-full text-black px-3 py-1 text-xl uppercase font-medium">&lt;300</div>
            </div>

        </div>
    );
}

export default MyMap
