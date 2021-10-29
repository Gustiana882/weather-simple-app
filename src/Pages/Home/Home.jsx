import React, { useState, useEffect } from "react";
import bg from "../../Assets/bg.jpg";
import Clock from "../../Components/Clock/Clock";
import axios from "axios";
import Calendar from "../../Components/Calender/Calender";
import Weather from "../../Components/Weather/Weather";
import WeatherNow from "../../Components/Weather/WeatherNow";
import MapsLocation from "../../Components/Location/MapsLocation";

function Home() {

    return (
        <>
        <div className="w-screen h-screen fixed z-0">
            <img className="w-full h-full" src={bg} alt="background" />
        </div>
        <section className="absolute top-0 w-full flex justify-center">
            <div className="flex flex-col-reverse md:flex-row">
                <div className="m-3">
                    <div className="bg-white w-full my-3 bg-opacity-70 rounded-lg p-5">
                        {/* navbar */}
                            <div className="flex justify-between">
                                <input className="bg-gray-300 text-sm p-2 rounded-md" type="text" placeholder="search location" />
                                <button className="bg-blue-300 text-white text-sm px-3 py-1 mx-3 rounded-md">Maps</button>
                                <button className="bg-green-300 text-white text-sm px-3 py-1 mx-3 rounded-md">Weather Details</button>
                            </div>
                        {/* end navbar */}

                        {/* location */}
                        <div className="bg-gray-500 w-full h-96 my-5">
                            <MapsLocation />
                        </div>
                        {/* end location */}

                        {/* weather */}
                        <div className="my-5 hidden">
                            <Weather />
                        </div>
                        {/* end weather */}

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
