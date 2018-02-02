const express = require('express')
const path = require('path')
const index = require('./router')
const template = require('./generatorPage').page
const app = express()

app.engine('html', require('ejs').renderFile)
app.set('view engine', 'html')

const handleServerRender = (req, res) => {
  const html = template({
    title: 'hello world from server',
  })
  console.log('html222===:', html)
  res.end(html)
}

app.use(/\/(home)?/, function (req, res, next) {
  console.log('url:', req.url)
  handleServerRender(req, res, next)
})

app.use('/', index)

app.listen(8000, function () {
  console.log('listen in 8000')
})