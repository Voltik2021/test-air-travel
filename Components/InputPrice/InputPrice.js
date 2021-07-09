import React from 'react';
import { useDispatch } from 'react-redux';
import { changePrice } from '../../redux/action';
import './InputPrice.css'

export default function InputPrice() {

    let dispatch = useDispatch()


    let lowerBoundPrice = (e) => {
        console.log(e.target.value)
        dispatch(changePrice([e.target.value, 'lowerBound']))
    }

    let upperBoundPrice = (e) => {
        console.log(e.target.value)
        setTimeout(() => dispatch(changePrice([e.target.value, 'upperBound'])), 2000)

    }

    return (
        <div>
            <div>
                От
                <input className='input-control' onChange={lowerBoundPrice} type='number' />
            </div>
            <div className='input-control-correction'>
                До
                <input className='input-control' onChange={upperBoundPrice} type='number' />
            </div>
        </div>
    )
}