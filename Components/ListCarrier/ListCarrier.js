import React from 'react';
import { useDispatch } from 'react-redux';
import { chooseCarrierAction } from '../../redux/action';
import './ListCarrier.css'

export default function ListCarrier({ carrier }) {

    let dispatch = useDispatch()



    let chooseCarrier = (e) => {

        dispatch(chooseCarrierAction([e.target.value, e.target.checked]))
    }

    return (

        <div className='list-carrier-control' >
            <input onChange={chooseCarrier} type='checkbox' value={carrier} />
            <span >- {carrier}</span>
        </div>

    )
}