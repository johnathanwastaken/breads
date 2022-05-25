// const express = require('express')
// const router = express.Router()

// // INDEX
// router.get('/', (req, res) => {
//   res.send('This is the index at /breads')
// })

// module.exports = router

/////////////////////////////

const express = require('express')
const breads = express.Router()
const Bread = require('../models/bread.js')

// INDEX
breads.get('/', (req, res) => {
  res.send(Bread)
})

// SHOW
breads.get('/:arrayIndex', (req, res) => {
    res.send(Bread[req.params.arrayIndex])
  })
  

module.exports = breads
