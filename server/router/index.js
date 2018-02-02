const express = require('express')
const router = express.Router()

router.get('/home', function (req, res, next) {
  console.log('req.url222:', req.url)
  console.log('req.path222:', req.path)
})

module.exports = router