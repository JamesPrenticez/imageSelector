export const FETCH_HOUSES = 'FETCH_HOUSES'

export function fetchHouses (houses){
    return {
        type: FETCH_HOUSES,
        houses
    }
}