const express = require('express')
const fs = require('fs')
const router = express.Router()

router.get('/index.html', (req, res) => {
  fs.readFile('./views/index.html', 'utf-8', (err, data) => {
    if(err) return console.log(err);
    res.send(data)
  })
})

module.exports = router