var express = require('express');
var app = express();
app.get('/api', (req, res) => res.send('Hello world on PORT 4000') );
app.listen(4000);
