const express = require('express');

const app = express();
const port = 3000;

app.listen(port, ()=>{
    console.log(`Hello your are listening to: ${port}`);
})

app.set('view engine', 'ejs');


app.get('/Home', (req, res, next)=>{
    res.render('pages/index'); 
})


app.get('/Profile', (req, res, next)=>{
    res.render('pages/index'); 
})


app.get('/Login', (req, res, next)=>{
    res.render('pages/index'); 
})


app.get('/Register', (req, res, next)=>{
    res.render('pages/index'); 
})


app.get('/User', (req, res, next)=>{
    res.render('pages/index'); 
})



