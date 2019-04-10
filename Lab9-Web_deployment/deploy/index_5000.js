var express = require('express');
var app = express();
app.get('/api', (req, res) => res.send('<h1>Hello world:5000</h1>') );
app.listen(5000);
