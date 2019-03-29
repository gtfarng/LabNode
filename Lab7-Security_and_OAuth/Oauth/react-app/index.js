const express = require('express');
const soap = require('soap');
const bodyParser = require('body-parser')
const url = 'https://passport.psu.ac.th/authentication/authentication.asmx?wsdl';
const app = express()
const router = express.Router()
app.use(bodyParser.urlencoded({extended: false}), router)
app.use(bodyParser.json, router)

const out = `
<html>
<body>
  <h2>PSU Passport Authentication (SOAP) </h2>
 <form action="/" method="post">
 Username: <input type="text" name="username" /> <br>
 Password: <input type="password" name="password" /> <br>
 <input type="submit" value="Submit">
</form>
</body>
</html> 
`

router.route('/')
   .get((req, res) => {
       res.send(out)
   })
   .post((req, res) => {
       soap.createClient(url, (err, client) => {
           if (err) console.error(err);
           else {
               let user = {}
               user.username = req.body.username
               user.password = req.body.password

               client.GetUserDetails(user, function (err, response) {
                   // client.GetStudentDetails(args, function(err, response) {
                   if (err) console.error(err);
                   else {
                       console.log(response);
                       res.send(response);
                   }
               });
           }
       });
   })

app.listen(80, () => console.log('Server is ready!'))