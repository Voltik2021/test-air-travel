import React from 'react';
import './ManagementForm.css'
import { useSelector } from 'react-redux';
import Radio from '../Radio/Radio';
import CheckBox from '../CheckBox/CheckBox';
import InputPrice from '../InputPrice/InputPrice';
import ListCarrier from '../ListCarrier/ListCarrier';

export default function ManagementForm() {
    let state = useSelector(state => state)
    let listCarrier = state.listCarrierAndBestPrice.listCarrier ? state.listCarrierAndBestPrice.listCarrier : []
    let listBestPrice = state.listCarrierAndBestPrice.listBestPrice ? state.listCarrierAndBestPrice.listBestPrice : []

    return (
        <div className='form-control'>
            <p><b>Сортировать</b></p>
            <Radio />
            <p><b>Фильтровать</b></p>
            <CheckBox />
            <p><b>Цена</b></p>
            <InputPrice />
            <p><b>Авиакомпании</b></p>
            <div className='list-carrier-price'>
                <div className='list-carrier'>
                    {listCarrier.map((item) => {
                        return <ListCarrier key={item} carrier={item} />

                    })}
                </div>
                <div  >
                    {listBestPrice.map((item) => {
                        return <p className='best-price' key={item}>от {item} р.</p>

                    })}

                </div>
            </div>

        </div>

    )
}












