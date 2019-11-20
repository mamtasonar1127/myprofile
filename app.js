const express = require('express');
const path = require('path');
var morgan = require('morgan');
var flash = require('connect-flash');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var passport = require('passport');

  

const bodyParser= require("body-parser");
const app = express();

//connection for mlab/mongoose

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://mamtasonar:mamtasonar123@clustertest-vhc08.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
  console.log("connection ok");
});

const Users= require("./models/user");

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());



app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());





//routes
app.use('/', require('./routes/index')); 





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




app.post('/register',(req,res)=>{

    const name= req.body.name;
    const email= req.body.email;
    const password= req.body.password;

newUsers= new Users({
    name:name,
    email:email,
    password:password

})

    newUsers.save(err=>{
        if(err){
            console.log(err);
        }else{
            res.redirect('/users');
        }

    })

})





var port = process.env.PORT || 3000;

app.listen(port, () => console.log('Server'+port));