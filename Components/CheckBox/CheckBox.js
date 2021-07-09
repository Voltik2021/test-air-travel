import React from 'react';
import { useDispatch } from 'react-redux';
import { changeFilterTransfers, getArrFlights } from '../../redux/action';

export default function CheckBox() {

    let dispatch = useDispatch()


    let changeFilter = (e) => {

        dispatch(changeFilterTransfers([e.target.value, e.target.checked]))
    }

    return (
        <div>
            <div>
                <input onChange={changeFilter} type='checkbox' value='transfer' />
                <span>- 1 пересадка</span>
            </div>
            <div>
                <input onChange={changeFilter} type='checkbox' value='noTransfer' />
                <span>- без пересадок</span>
            </div>
        </div>
    )
}