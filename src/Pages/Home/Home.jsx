import React, { useState, useEffect } from "react";
import bg from "../../Assets/bg.jpg";
import Clock from "../../Components/Clock/Clock";
import axios from "axios";
import Calendar from "../../Components/Calender/Calender";

function Home() {
    const [location, setLocation] = useState({ latitude: '', longitude: '' })
    const [data, setData] = useState({})

    function getLocation() {
        if('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition((position) => {
                const { latitude, longitude } = position.coords
                setLocation({ latitude, longitude })
            });
        } else {
          /* geolocation IS NOT available */
        }
    }

    function getWeather() {
        axios({
            method: 'GET',
            url: 'https://www.metaweather.com/api/location/search/?query=san'
        })
            .then((response) => {
                console.log(response)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    useEffect(() => {
        getLocation()
        getWeather()
    }, [])

    return (
        <>
        <div className="w-screen h-screen fixed z-0">
            <img className="w-full h-full" src={bg} alt="background" />
        </div>
        <section className="absolute top-0 w-full overflow-x-hidden">
            <div className="grid grid-cols-3">
                <div className="col-span-2">
                    <div className=" w-11/12 h-11/12 bg-white my-3 mx-auto bg-opacity-70 rounded-lg p-5">
                        <div className="flex justify-between">
                            <input className="bg-gray-300 text-sm p-2 rounded-md" type="text" placeholder="search location" />
                            <button className="bg-green-300 text-white text-sm px-3 py-1 rounded-md">Weather Details</button>
                        </div>
                        <div className="bg-gray-500 w-full h-96 my-5 hidden">

                        </div>
                        <div className="h-96 my-5">
                            <div className="grid grid-cols-3">
                                {
                                    [1,2,3,4,5,6].map(() => {
                                        return(
                                            <div className="m-3 bg-white rounded-md p-3 opacity-100">
                                                <div className=" flex justify-between">
                                                    <div className="text-center">
                                                        <h1 className="text-xl font-bold">36 C</h1>
                                                        <p className="text-sm">{new Date().toLocaleDateString()}</p>
                                                    </div>
                                                    <div className="w-20 border-l-4 border-green-600">
                                                        <img className="w-5 mx-auto" src="https://www.metaweather.com/static/img/weather/lc.svg" alt="cuaca" />
                                                        <p className="text-xs text-center">Light Cloud</p>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="text-sm mt-3">
                                                        <span className="px-1">max : 32 C</span>
                                                        <span className="px-1 border-l-2 border-gray-900">max : 38 C</span>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="flex flex-col items-center">
                        <Clock />
                        <div className="w-80 my-3 bg-white rounded-md p-3 opacity-60 flex justify-between">
                            <h1 className="text-7xl font-bold m-0">36 C</h1>
                            <div className="w-24 border-l-4 border-green-600">
                                <img className="w-12 mx-auto" src="https://www.metaweather.com/static/img/weather/lc.svg" alt="cuaca" />
                                <h1 className="text-sm text-center">Light Cloud</h1>
                            </div>
                        </div>
                        <div className="w-80 my-3 bg-white rounded-md p-3 opacity-90 flex justify-between">
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
