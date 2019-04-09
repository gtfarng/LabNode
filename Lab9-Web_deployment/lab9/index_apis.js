var express = require('express');
var app = express();
app.get('/api3000', (req, res) => res.send('Hello world:3000') );
app.listen(3000);
