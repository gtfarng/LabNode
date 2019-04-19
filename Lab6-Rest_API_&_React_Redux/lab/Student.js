let express = require('express')
let bodyParser = require('body-parser')
let router = express.Router()
let cors = require('cors')
let app = express()

app.use(cors())
// all of our routes will be prefixed with /api

app.use('/api', bodyParser.json(), router) //[use json]
app.use('/api', bodyParser.urlencoded({ extended: false }), router)

let students = [{ 'no':0,'id': 5735512002, 'name': 'Jatupat', 'surname': 'Pannoi', 'Major': 'CoE', 'GPA': 2.50 },
                { 'no':1,'id': 6135512002, 'name': 'GTfarng', 'surname': 'lockerz', 'Major': 'CoE', 'GPA': 3.50 }
];

let studentIndex = 2;

router.route('/students')
    .get((req, res) => res.json(students))
    .post((req, res) => {
        var student = {};
        student.no = studentIndex++;
        student.id = req.body.id
        student.name = req.body.name
        student.surname = req.body.surname
        student.Major = req.body.Major
        student.GPA = req.body.GPA
        students.push(student);
        res.json({ message: 'Student created!' })
    })

router.route('/students/:student_id')
    .get((req, res) => res.json(students[req.params.student_id])) // get a bear
    .put((req, res) => {
        var id = req.params.student_id
        students[id].id = req.body.id
        students[id].name = req.body.name
        students[id].surname = req.body.surname
        students[id].Major = req.body.Major
        students[id].GPA = req.body.GPA
        res.json({ message: 'Student updated!' + req.params.student_id });
    })

    .delete((req, res) => { 
        delete students[req.params.student_id]
        res.json({ message: 'Student deleted: ' + req.params.student_id });
    })



app.use("*", (req, res) => res.status(404).send('404 Not found'))
app.listen(8000, () => console.log("Server is running"))





