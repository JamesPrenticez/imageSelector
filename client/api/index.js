  import request from 'superagent'

  export function getHouses () {
    return request
    .get('/api/v1/houses')
    .then(res => res.body.houses)
}