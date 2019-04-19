var express = require('express')
var app = express()
app.get('/api4000', (req, res) => res.send('Hello world:4000') )
app.listen(4000)
