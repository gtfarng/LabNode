var express = require('express');
var app = express();
app.get('/apis', (req, res) => res.send('Hello world on PORT 5000') );
app.listen(5000);
