import React from 'react'

export default function WeatherNow() {
    return (
        <>
            <div className="w-full my-3 bg-white rounded-md p-3 opacity-60 flex justify-between">
                <h1 className="text-7xl font-bold m-0">36 C</h1>
                <div className="w-24 border-l-4 border-green-600">
                    <img className="w-12 mx-auto" src="https://www.metaweather.com/static/img/weather/lc.svg" alt="cuaca" />
                    <h1 className="text-sm text-center">Light Cloud</h1>
                </div>
            </div>
        </>
    )
}
