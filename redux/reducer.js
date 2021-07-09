let initialState = {
    flights: [],
    sortflights: 'ascendingOrder',
    transferTrue: false,
    transferFalse: false,
    lowerBoundPrice: 0,
    upperBoundPrice: Infinity,
    carrier: '',
    listCarrierAndBestPrice: {},
    chooseCarrier: []

}

export default function reducer(state = initialState, action) {
    let newState
    let filterState
    switch (action.type) {

        case 'GET_ARR_FLIGHTS':
            newState = { ...state }
            newState.flights = action.payload
            return newState

        case 'CHANGE_SORT_FLIGHTS':
            newState = { ...state }
            newState.sortflights = action.payload
            return newState

        case 'CHANGE_FILTER_TRANSFERS':
            newState = { ...state }
            if (action.payload[0] === 'transfer') {
                newState.transferTrue = action.payload[1] ? true : false
                return newState
            }
            if (action.payload[0] === 'noTransfer') {
                newState.transferFalse = action.payload[1] ? true : false
                return newState
            }

        case 'CHANGE_PRICE':
            newState = { ...state }
            if (action.payload[1] === 'lowerBound') {
                +action.payload[0] < 0 ? newState.lowerBoundPrice = 0 : newState.lowerBoundPrice = +action.payload[0]

            } else {
                +action.payload[0] <= 0 ? newState.upperBoundPrice = Infinity : newState.upperBoundPrice = +action.payload[0]
            }
            return newState

        case 'GET_LIST_CARRIER':
            newState = { ...state }
            newState.listCarrierAndBestPrice = action.payload
            return newState

        case 'CHOOSE_CARRIER':
            newState = { ...state }

            if (action.payload[1]) {
                newState.chooseCarrier = [...state.chooseCarrier, action.payload[0]]
                return newState
            } else {

                newState.chooseCarrier = [...state.chooseCarrier]
                filterState = newState.chooseCarrier.filter((item) => { return item !== action.payload[0] })
                newState.chooseCarrier = [...filterState]

                return newState
            }





    }
    return state
}