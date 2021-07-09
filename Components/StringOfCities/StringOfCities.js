import React from 'react';
import './StringOfCities.css'

export default function StrinOfCities({ segments }) {

    let departureCity
    let arrivalCity = segments[0].arrivalCity.caption;
    let departureAirport = segments[0].departureAirport.caption;
    let arrivalAirport = segments[0].arrivalAirport.caption;
    let abbreviationDepartureAirport = segments[0].departureAirport.uid
    let abbreviationArrivalAirport = segments[0].arrivalAirport.uid

    if (segments.length === 2) {
        departureCity = segments[0].departureCity
        arrivalCity = segments[1].arrivalCity
        departureCity = departureCity ? departureCity.caption : '';
        arrivalCity = arrivalCity ? arrivalCity.caption : '';
        arrivalAirport = segments[1].arrivalAirport.caption;
        abbreviationArrivalAirport = segments[1].arrivalAirport.uid
    }


    return (
        <div className='flight-card-cities'>
            <p> {departureCity} {departureAirport} </p>
            <p className='color-control arrow'>({abbreviationDepartureAirport}) </p>
            <p> {arrivalCity} {arrivalAirport}</p>
            <p className='color-control'>({abbreviationArrivalAirport})</p>
        </div>
    )
}