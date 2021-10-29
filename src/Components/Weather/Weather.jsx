import React from 'react'

export default function Weather() {
    return (
        <>
            <div className="grid md:grid-cols-1 lg:grid-cols-3">
                {
                    [1,2,3,4,5,6].map((v, i) => {
                        return(
                            <div key={i} className="m-3 bg-white rounded-md p-3 opacity-100">
                                <div className="flex justify-around">
                                    <div className="text-center">
                                        <h1 className="text-xl font-bold">36 C</h1>
                                        <p className="text-sm">{new Date().toLocaleDateString()}</p>
                                    </div>
                                    <div className="w-20 border-l-4 border-green-600">
                                        <img className="w-10 mx-auto" src="https://www.metaweather.com/static/img/weather/lc.svg" alt="cuaca" />
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
        </>
    )
}
