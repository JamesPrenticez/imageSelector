import {FETCH_HOUSES} from '../actions'

const initialState = []

export default function houseReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_HOUSES:
            return action.houses
        default:
            return state
    }
}