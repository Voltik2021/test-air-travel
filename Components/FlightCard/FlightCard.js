import React from 'react';
import StrinOfCities from '../StringOfCities/StringOfCities';
import TimeString from '../TimeString/TimeString';
import LinesAndTransfers from '../LinesAndTransfers/LinesAndTransfers';
import CarrierLine from '../СarrierLine/СarrierLine';
import './FlightCard.css';


export default function FlightCard({ flight }) {     
        
    let price = flight.price.total.amount   

    return (

        <div className='flight-card'>

            <div className='flight-card-top'>
                <div className='flight-card-header'>
                    <img src='#' alt='logo' />
                    <div className='flight-card-price-wrapper'>
                        <p className='flight-card-price'>{price} </p>
                        <p className='explanation' >Cтоимость для одного взрослого пасажира</p>
                    </div>
                </div>

                <StrinOfCities {...flight.legs[0]} />
                <TimeString {...flight.legs[0]}/>
                <LinesAndTransfers {...flight.legs[0]} /> 
                <CarrierLine {...flight.legs[0]}/>                
            </div>
            <div className='flight-card-bottom'>

                <StrinOfCities {...flight.legs[1]} />
                <TimeString {...flight.legs[1]}/>
                <LinesAndTransfers {...flight.legs[1]} />
                <CarrierLine {...flight.legs[1]}/>                
                
                <button className='flight-card-button' >ВЫБРАТЬ</button>
            </div>


        </div>
    )
}