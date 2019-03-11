let express = require('express')
let bodyParser = require('body-parser')
let router = express.Router()
let cors = require('cors')
let app = express()

app.use(cors())
// all of our routes will be prefixed with /api

app.use('/api', bodyParser.json(), router) //[use json]
app.use('/api', bodyParser.urlencoded({ extended: false }), router)

let bears = [{ 'id': 0, 'name': 'pooh', 'weight': 211 },
{ 'id': 1, 'name': 'vinnie', 'weight': 111 }
];
let bearIndex = 2;

router.route('/bears')
    .get((req, res) => res.json(bears))
    .post((req, res) => {
        var bear = {};
        bear.id = bearIndex++;
        bear.name = req.body.name
        bear.weight = req.body.weight
        bears.push(bear);
        res.json({ message: 'Bear created!' })
    })

router.route('/bears/:bear_id')
    .get((req, res) => res.json(bears[req.params.bear_id])) // get a bear
    .put((req, res) => { // Update a bear
        var id = req.params.bear_id
        bears[id].name = req.body.name;
        bears[id].weight = req.body.weight;
        res.json({ message: 'Bear updated!' + req.params.bear_id });
    })
    .delete((req, res) => { // Delete a bear
        delete bears[req.params.bear_id]
        res.json({ message: 'Bear deleted: ' + req.params.bear_id });
    })



app.use("*", (req, res) => res.status(404).send('404 Not found'))
app.listen(8000, () => console.log("Server is running"))





