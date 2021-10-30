/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import Action from '../../Storages/Actions/Data'

export default function Weather() {

    const { location, woeid } = useSelector(state => state.data)
    const [weatherNow, setWeatherNow] = useState({ the_temp: 0, weather_state_name: '', weather_state_abbr: 'lc' })
    const dispatch = useDispatch()

    function searchLocation() {
        axios.get(`/api/location/search/?lattlong=${location[1]},${location[0]}`)
             .then(res => dispatch(Action.setWoeid(res.data[0].woeid)))
             .catch(err => console.log(err))
    }

    function getWeather(params) {
        axios.get(`/api/location/${woeid}/`)
             .then(res => setWeatherNow(res.data.consolidated_weather[0]))
             .catch(err => console.log(err))
    }

    useEffect(() => {
        getWeather()
    }, [woeid])

    useEffect(() => {
        searchLocation()
    }, [location])
    
    return (
        <>
            <div className="w-full my-3 bg-white rounded-md p-3 opacity-60 flex justify-between">
                <h1 className="text-6xl font-bold m-0">{weatherNow.the_temp.toFixed(1)} C</h1>
                <div className="w-24 border-l-4 border-green-600">
                    <img className="w-12 mx-auto" src={`https://www.metaweather.com/static/img/weather/${weatherNow.weather_state_abbr}.svg`} alt="cuaca" />
                    <h1 className="text-sm text-center">{weatherNow.weather_state_name}</h1>
                </div>
            </div>
        </>
    )
}
