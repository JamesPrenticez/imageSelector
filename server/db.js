const environment = process.env.NODE_ENV || 'development'
const config = require('../knexfile')[environment]
const database = require('knex')(config)

module.exports = {
    getHouses
}

function getHouses(db = database) {
    return db('houses')
}