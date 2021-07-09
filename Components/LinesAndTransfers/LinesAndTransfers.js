import React from 'react';
import './LinesAndTransfers.css'

export default function LinesAndTransfers({ segments }) {

    return (
        <div className='flight-card-transfer' >
            <hr className='hr-control' />
            {segments.length === 2 ? <p className='transfer' > 1 пересадка</p> : null}

        </div>
    )
}