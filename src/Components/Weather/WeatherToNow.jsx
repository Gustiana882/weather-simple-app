/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux'
import moment from 'moment'

export default function WeatherToNow(props) {

    const { woeid, date } = useSelector(state => state.data)
    const [weather, setWeather] = useState([])
    const [loading, setLoading] = useState('animate-pulse')

    function getWeatherDate(inputDate = date) {
        setLoading('animate-pulse')
        axios.get(`/api/api/location/${woeid}/${inputDate.format('YYYY/MM/DD')}/ `)
             .then(res => {
                 setWeather(res.data)
                 setLoading('')
                })
             .catch(err => console.log(err))
    }

    useEffect(() => {
        getWeatherDate()
    }, [date])



    return (
        <>
            <h1 className="ml-4">weather forecast for today</h1>
            <div className="grid md:grid-cols-1 lg:grid-cols-3">
                {
                    weather.map((val, i) => {
                        return(
                            <div key={i} className={`m-3 ${loading} bg-white rounded-md p-3 opacity-100`}>
                                <div className="flex justify-around">
                                    <div className="text-center">
                                        <h1 className="text-xl font-bold">{val.the_temp.toFixed(1)} C</h1>
                                        <p className="text-sm">{moment(val.applicable_date).format('dddd, DD-MM-YYYY')}</p>
                                        <p className="text-sm">{moment(val.created).format('h:mm:ss')}</p>
                                    </div>
                                    <div className="w-20 border-l-4 border-green-600">
                                        <img className="w-10 mx-auto" src={`https://www.metaweather.com/static/img/weather/${val.weather_state_abbr}.svg`} alt="cuaca" />
                                        <p className="text-xs text-center">{val.weather_state_name}</p>
                                    </div>
                                </div>
                                <div>
                                    <div className="text-sm mt-3 text-center">
                                        <span className="px-1">min : {val.min_temp.toFixed(1)} C</span>
                                        <span className="px-1 border-l-2 border-gray-900">max : {val.max_temp.toFixed(1)} C</span>
                                    </div>
                                </div>
                                <div className="flex justify-center">
                                    <button 
                                        className="bg-blue-300 static rounded-md py-1 w-10/12 text-center text-white opacity-100 m-3"
                                        onClick={() => getWeatherDate(moment(val.applicable_date))}>View Detail</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}
