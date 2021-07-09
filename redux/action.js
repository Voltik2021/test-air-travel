export function getArrFlights(arr) {
    return {
        type: 'GET_ARR_FLIGHTS',
        payload: arr
    }
}

export function changeArrFlights(value) {
    return {
        type: 'CHANGE_SORT_FLIGHTS',
        payload: value
    }
}

export function changeFilterTransfers(value) {
    return {
        type: 'CHANGE_FILTER_TRANSFERS',
        payload: value
    }
}

export function changePrice(value) {
    return {
        type: 'CHANGE_PRICE',
        payload: value
    }
}

export function chooseCarrierAction(value) {
    return {
        type: 'CHOOSE_CARRIER',
        payload: value
    }
}

export function getListCarrier(obj) {
    return {
        type: 'GET_LIST_CARRIER',
        payload: obj
    }
}