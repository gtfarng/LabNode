var express = require('express');
var app = express();
app.get('/api', (req, res) => res.send('<h1>Hello world:4000</h1>') );
app.listen(4000);
