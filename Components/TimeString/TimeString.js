import React from 'react';
import './TimeString.css'
import dayjs from 'dayjs';
import 'dayjs/locale/ru';
export default function TimeString(props) {

    let totalTimeHours = (props.duration - props.duration % 60) / 60
    let totalTimeMinutes = props.duration % 60
    let departureDate = props.segments[0].departureDate
    let arrivalDate = props.segments[0].arrivalDate

    if (props.segments.length === 2) {
        arrivalDate = props.segments[1].arrivalDate
    }

    let dataLeft = dayjs(departureDate).locale('ru').format('DD MMMdd')
    let timeLeft = dayjs(departureDate).locale('ru').format('HH:mm')

    let dataRight = dayjs(arrivalDate).locale('ru').format('DD MMMdd')
    let timeRight = dayjs(arrivalDate).locale('ru').format('HH:mm')




    return (
        <div className='flight-card-time'>
            <div>
                <span className='font-time-control'>{timeLeft}</span>
                <span className='color-date'> {dataLeft}</span>
            </div>


            <span className='explanation-time-span'>
                <img className='flight-card-time-img' src='./img/clock.png' />
                {totalTimeHours} ч {totalTimeMinutes} мин
            </span>

            <div>
                <span className='color-date'>{dataRight} </span>
                <span className='font-time-control' >{timeRight}</span>
            </div>
        </div>
    )
}