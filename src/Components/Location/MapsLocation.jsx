/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import mapboxgl from "mapbox-gl/dist/mapbox-gl"

export default function MapsLocation() {

    const [location, setLocation] = useState({ latitude: -6.63552, longitude: 106.7810816, zoom: 10 })

    function getLocation() {
        if('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition((position) => {
                const { latitude, longitude } = position.coords
                setLocation({...location, ...{ latitude, longitude }})
            });
        } else {
            console.log('not suport')
        }
    }

    useEffect(() => {
        getLocation()
    }, [])

    useEffect(() => {
        mapboxgl.accessToken = 'pk.eyJ1IjoiZ3VzdGlhbmEiLCJhIjoiY2t2YmpmMGhnYXA3aDJ2bnp1cnh1NW00ZSJ9.DUURhGc-sk7iVUT5BGQzEw';
        const map = new mapboxgl.Map({
            container: document.getElementById('map'),
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [location.longitude, location.latitude],
            zoom: location.zoom
        });
    }, [location])

    return (
        <>
            <div id="map" className="w-full h-full"></div>
        </>
    )
}
