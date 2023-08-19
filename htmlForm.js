const bodyParser = require('body-parser');
let express = require('express');
let app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

app.use('/public', express.static(__dirname + '/public'));

app.get('/name', (req, res) => {
    const firstname = req.query.first;
    const lastname = req.query.last;
    res.json({name: `${firstname} ${lastname}`})
})

app.post('/name', (req, res) => {
    let name = `${req.body.first} ${req.body.last}`;
    res.json({ "name": name})
})


 module.exports = app;
