const express = require('express')
const db = require('../db')
const router = express.Router()

module.exports = router

//Get houses and display on main page
router.get('/api/v1/houses', (req, res) => {
  db.getHouses()
    .then(callback => res.json({recipes: callback}))
    .catch(err => {
        res.status(500).send('something went wrong')
  })
})