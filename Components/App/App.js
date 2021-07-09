import React, { useState, useEffect } from 'react';
import ManagementForm from '../ManagementForm/ManagementForm';
import { useSelector, useDispatch } from 'react-redux';
import { getArrFlights, getListCarrier } from '../../redux/action';
import data from '../../flights.json';
import FlightCard from '../FlightCard/FlightCard';
import './App.css';




export default function App() {
    
    let [showMore, setShowMore] = useState(4)
    let state = useSelector(state => state)
    let dispatch = useDispatch()
    let sortflights = state.sortflights;
    let flights = state.flights;
    console.log(sortflights)


    useEffect(() => {
        let listCarrierAndBestPrice = {}
        data.result.flights.sort((a, b) => {
            b = +b.flight.price.total.amount
            a = +a.flight.price.total.amount
            if (a < b) {
                return 1;
            }
            if (b < a) {
                return -1;
            }

            return 0;
        }).map((item) => {
            listCarrierAndBestPrice = { ...listCarrierAndBestPrice, [item.flight.carrier.caption]: item.flight.price.total.amount }
        })

        let listCarrier = []
        for (let item in listCarrierAndBestPrice) {
            listCarrier.push(item)
        }

        let listBestPrice = Object.values(listCarrierAndBestPrice)

        listCarrierAndBestPrice = { listCarrier: listCarrier, listBestPrice: listBestPrice }


        dispatch(getListCarrier(listCarrierAndBestPrice))
    }, [])


    useEffect(() => {
        let flightsSort = data.result.flights.sort((a, b) => {
            b = sortflights === 'flightDuration' ? +b.flight.legs[0].duration : +b.flight.price.total.amount
            a = sortflights === 'flightDuration' ? +a.flight.legs[0].duration : +a.flight.price.total.amount
            if (a < b) {
                return sortflights ? -1 : 1;
            }
            if (b < a) {
                return sortflights ? 1 : -1;
            }

            return 0;
        })

        dispatch(getArrFlights(flightsSort))
    }, [state.sortflights])

    let moreCard = () => {
        setShowMore(showMore + 2)
    }



    return (
       
        <div className='main-page'>
            <ManagementForm />
            <div  className='main-control' >
                {flights.filter((item) => {
                    let elemTop = item.flight.legs[0].segments
                    let elemBottom = item.flight.legs[1].segments
                    if (state.transferTrue && state.transferFalse) {
                        return elemTop.length === 2 && elemBottom.length === 2 ? null : item
                    } else if (state.transferTrue) {
                        return elemTop.length === 1 && elemBottom.length === 2 || elemTop.length === 2 && elemBottom.length === 1;
                    } else if (state.transferFalse) {
                        return elemTop.length === 1 && elemBottom.length === 1;
                    } else {
                        return item
                    }

                }).filter((item) => {
                    let elem = item.flight.price.total.amount
                    return elem > state.lowerBoundPrice && elem < state.upperBoundPrice

                }).filter((item) => {
                    if (state.chooseCarrier.length === 0) {
                        return item
                    }
                    return state.chooseCarrier.find((elem) => { return elem === item.flight.carrier.caption }) ? item : null


                }).map((item, index) => {
                    if (index < showMore) {

                        return <FlightCard key={item.flightToken} {...item} />
                    }
                })}
               
                    <button className = 'button-more-card' onClick = {moreCard}>Показать ещё</button>              
                
            </div>
                
        </div>
            
       
    )
}