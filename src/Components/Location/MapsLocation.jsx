/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import mapboxgl from "mapbox-gl/dist/mapbox-gl"
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder"
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
import Action from "../../Storages/Actions/Data"

export default function MapsLocation() {

    const dispatch = useDispatch()
    const location = useSelector(state => state.data.location)

    function getLocation() {
        if('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition((position) => {
                const { latitude, longitude } = position.coords
                dispatch(Action.setLocation([longitude, latitude]))
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
            center: location,
            zoom: 10,
        });
        const geocoder = new MapboxGeocoder({
            accessToken: mapboxgl.accessToken,
            marker: {
                color: 'orange'
            },
            mapboxgl: mapboxgl
        });
        geocoder.on('result', function(e) {
            dispatch(Action.setLocation(e.result.center))
        })
        map.addControl(geocoder);
    }, [location])

    return (
        <>
            <div id="map" className="w-full h-full"></div>
        </>
    )
}
