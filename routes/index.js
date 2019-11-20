const express = require('express');
const router= express.Router();
const path = require('path');
const app = express();




app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');



app.use(express.static(__dirname + '/public/css'));
app.use(express.static(__dirname + '/public/images'));

//views all pages

app.get('/', function(req, res){
    res.render('home')
});

app.get('/users', function(req, res){
    res.render('users')
});

app.get('/register', function(req, res){
    res.render('register')
});

app.get('/index', function(req, res){
    res.render('home')
});

app.get('/about', function(req, res){
    res.render('aboutme')
});

app.get('/projects', function(req, res){
    res.render('projects')
});

app.get('/services', function(req, res){
    res.render('services')
});

app.get('/contact', function(req, res){
    res.render('contactme')
});



module.exports = router;
