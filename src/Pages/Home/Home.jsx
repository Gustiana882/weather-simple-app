import React, { useState, useEffect } from "react";
import bg from "../../Assets/bg.jpg";
import Clock from "../../Components/Clock/Clock";
import axios from "axios";
import Calendar from "../../Components/Calender/Calender";
import Weather from "../../Components/Weather/Weather";
import WeatherNow from "../../Components/Weather/WeatherNow";
import MapsLocation from "../../Components/Location/MapsLocation";

function Home() {

    const [menu, setMenu] = useState('maps')

    function getWeather() {
        // axios.get('https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/44418/')
        //      .then((res) => console.log(res))
        //      .catch((err) => console.log(err))
        function reqListener () {
            console.log(this.responseText);
          }
          
          var oReq = new XMLHttpRequest();
          oReq.addEventListener("load", reqListener);
          oReq.open("GET", "https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/44418/");
          oReq.send();
          
    }

    useEffect(() => {
        getWeather()
    }, [])

    return (
        <>
        <div className="w-screen h-screen fixed z-0">
            <img 
                className="w-full h-full" 
                src={bg} 
                alt="background" />
        </div>
        <section className="absolute top-0 w-full flex justify-center">
            <div className="flex flex-col-reverse md:flex-row">
                <div className="m-3">
                    <div className="bg-white w-full my-3 bg-opacity-70 rounded-lg p-5">
                        <div className="flex justify-between">
                            <input 
                                className="bg-gray-300 text-sm p-2 rounded-md" 
                                type="text" 
                                placeholder="search location" />
                            <button 
                                className="bg-blue-300 text-white text-sm px-3 py-1 mx-3 rounded-md"
                                onClick={()=>setMenu('maps')}>Maps</button>
                            <button 
                                className="bg-green-300 text-white text-sm px-3 py-1 mx-3 rounded-md"
                                onClick={()=>setMenu('weather')}>Weather Details</button>
                        </div>
                        <div className={`bg-gray-500 w-full h-96 my-5 ${(menu === 'maps')? 'block': 'hidden'}`}>
                            <MapsLocation />
                        </div>

                        <div className={`my-5 ${(menu === 'weather')? 'block': 'hidden'}`}>
                            <Weather />
                        </div>

                    </div>
                </div>
                <div className="m-3">
                    <div className="flex flex-col items-center w-full md:w-80">
                        <Clock />
                        <WeatherNow />
                        <div className="w-full my-3 bg-white rounded-md p-3 opacity-90 flex justify-between">
                            <Calendar />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
    }

export default Home;
