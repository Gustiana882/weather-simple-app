import React, { useEffect, useState } from 'react'

export default function Clock() {
    const date = new Date();
    const setString = times => (times < 10) ? `0${times.toString()}` : times.toString()
    const [time, setTime] = useState({ 
        hours: setString(date.getHours()),
        minutes: setString(date.getMinutes()),
        day: setString(date.getDate()),
        month: setString(date.getMonth()),
    });

    useEffect(() => {
        const timer = setInterval(() => {
            setTime({
                hours: setString(new Date().getHours()),
                minutes: setString(new Date().getMinutes()),
                day: setString(new Date().getDate()),
                month: setString(new Date().getMonth())
            })
        }, 1000);
        return () => {
            clearInterval(timer);
        }
    }, [])

    return (
        <>
            <div className="w-80 my-3 bg-white rounded-md p-3 opacity-60 flex">
                <h1 className="text-7xl font-bold m-0">{time.hours}:{time.minutes}</h1>
                <div className="text-center mx-auto border-l-4 border-green-600 pl-2">
                    <h1 className="text-4xl m-0">{time.day}</h1>
                    <h1 className="text-xl m-0">October</h1>
                </div>
            </div>
        </>
    )
}
