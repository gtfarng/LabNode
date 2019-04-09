var express = require('express');
var app = express();
app.get('/api5000', (req, res) => res.send('Hello world:5000') );
app.listen(5000);
