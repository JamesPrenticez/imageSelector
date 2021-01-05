import nock from 'nock'
import { getHouses } from './index'

test('API fetches recipes from server', () => {
  nock(/localhost/)
    .get('/api/v1/houses')
    .reply(200, 
      {houses: [{ id: 100, name:'Southern Series'}]})

  return getHouses()
    .then(houses => {
      expect(houses.length).toBe(1)
      expect(houses[0].id).toBe(100)
    })
})
