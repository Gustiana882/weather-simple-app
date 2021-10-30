/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from "react";
import bg from "../../Assets/bg.jpg";
import Clock from "../../Components/Clock/Clock";
import Calendar from "../../Components/Calender/Calender";
import WeatherToNext from "../../Components/Weather/WeatherToNext";
import WeatherToNow from "../../Components/Weather/WeatherToNow";
import WeatherNow from "../../Components/Weather/Weather";
import MapsLocation from "../../Components/Location/MapsLocation";

function Home() {

    const [menu, setMenu] = useState('maps')


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
                    <div className="bg-white my-3 bg-opacity-70 rounded-lg p-5">
                        <div className="flex justify-between">
                            <h1 className="font-bold text-2xl">Weather</h1>
                            <button 
                                className="bg-blue-300 lg:ml-40 text-white text-sm px-3 py-1 mx-3 rounded-md"
                                onClick={()=>setMenu('maps')}>Maps</button>
                            <button 
                                className="bg-green-300 text-white text-sm px-3 py-1 mx-3 rounded-md"
                                onClick={()=>setMenu('next')}>Weather For Next 5 Day</button>
                            <button 
                                className="bg-red-300 text-white text-sm px-3 py-1 mx-3 rounded-md"
                                onClick={()=>setMenu('now')}>Weather For To Days</button>
                        </div>
                        <div className={`bg-gray-500 w-full h-96 my-5 ${(menu === 'maps')? 'block': 'hidden'}`}>
                            <MapsLocation />
                        </div>

                        <div className={`my-5 ${(menu === 'next')? 'block': 'hidden'}`}>
                            <WeatherToNext weatherTo='next' />
                        </div>

                        <div className={`my-5 ${(menu === 'now')? 'block': 'hidden'}`}>
                            <WeatherToNow weatherTo='next' />
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
