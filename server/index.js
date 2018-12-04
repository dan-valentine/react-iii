require('dotenv').config();
const express = require('express'),
    bodyParser = require('body-parser'),
    session = require('express-session'),
    app = express(),
    port = 4000;

app.use(bodyParser.json());
app.use(session({
    secret: "YoU sHoUlDn'T sToRe SeSsIoN SeCeRt In PlAiNTeXt ",
    resave: false,
    saveUninitialized: false
}))


app.use((req, res, next) => {
    if(!req.session.team){
        req.session.team = [];
    }
    next();
});

app.get('/', (req, res) =>{
    res.send('hello world')
})

app.post('/api/team', (req, res) =>{
    const product = req.body;
    req.session.team.push(product);
    res.send(req.session.team);
})

app.get('/api/team', (req, res) =>{
    const {team} = req.session;
    res.send(team)
})

app.delete('/api/team/:index', (req, res)=>{
    const {team} = req.session;
    const {index} = req.params;
    team.splice(index, 1);
    res.send(team);
})

app.listen(port, ()=>{
    console.log(`Now listening on port ${port}`)
})