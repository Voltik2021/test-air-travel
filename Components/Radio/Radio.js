import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeArrFlights } from '../../redux/action';

export default function Radio() {
    let dispatch = useDispatch()
    let state = useSelector(state => state)
    let sortflights = state.sortflights;



    let changeSort = (e) => {
        dispatch(changeArrFlights(e.target.value))
    }

    return (
        <div>            
            <div>
                <input onChange={changeSort}
                    type='radio' name='sort'
                    checked={sortflights === 'ascendingOrder'}
                    value='ascendingOrder' />
                <span>- по возрастанию цены</span>
            </div>

            <div>
                <input onChange={changeSort} type='radio' name='sort' value='' />
                <span>- по убыванию цены</span>
            </div>

            <div>
                <input onChange={changeSort} type='radio' name='sort' value='flightDuration' />
                <span>- по времени в пути</span>
            </div>
        </div>
    )
}