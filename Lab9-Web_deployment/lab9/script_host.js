var express = require('express');
var app = express();

app.get('/', function(req, res){
   setTimeout(()=> {
       process.stdout.write('.')
       res.send('Hello world')
   }, 1000);

});

app.listen(81);
