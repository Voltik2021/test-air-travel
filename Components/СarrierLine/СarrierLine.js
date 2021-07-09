import React from 'react';

export default function CarrierLine({ segments }) {
    let carrier = segments[0].airline.caption

    return (
        <div>
            <p className='flight-card-carrier'>
                Рейс выполняет: {carrier}
            </p>
        </div>
    )
}