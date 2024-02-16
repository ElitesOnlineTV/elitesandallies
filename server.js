const express = require('express');
const app = express();
const port = 3021;
app.set('view engine', 'ejs');
app.use("/public", express.static("public"));
app.use("/css", express.static(__dirname + '/public/css'))
app.use("/js", express.static(__dirname + '/public/js'))

app.get('/', (req, res) =>{
    res.render('index');
})

app.get('/Login', (req, res) =>{
    res.render('login')
})

app.get('/Signup', (req, res) =>{
    res.render('signup')
})

app.get('/Home', (req, res) =>{
    res.render('homepage');
})
app.get('/next', (req, res) =>{
    res.render('next')
})




app.listen(port, () => console.log(`Example app listening on port ${port}!`));