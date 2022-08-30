//jshint esversion:6
// 377 Level 1 - Username and Password only
// const express = require('express');
// const bodyParser = require('body-parser');
// const ejs = require('ejs');

// const app = express();

// app.use(express.static('public'));
// app.set('view engine',  'ejs');
// app.use(bodyParser.urlencoded({
//     extended: true
// }));

// app.get('/', function(req, res) {
//     res.render('home');
// });

// app.get('/login', function(req, res) {
//     res.render('login');
// });

// app.get('/register', function(req, res) {
//     res.render('register');
// });




// app.listen(3000, function(){
//     console.log('server started on port 3000.')
// });

// npm init -y
// npm i express ejs body-parser
// nodemon app.js



// 378
// const express = require('express');
// const bodyParser = require('body-parser');
// const ejs = require('ejs');
// const mongoose = require('mongoose');

// const app = express();

// app.use(express.static('public'));
// app.set('view engine',  'ejs');
// app.use(bodyParser.urlencoded({
//     extended: true
// }));

// mongoose.connect('mongodb://localhost:27017/userDB', {useNewUrlParser: true});

// const userSchema = {
//     email: String,
//     password: String
// };

// const User = new mongoose.model('User', userSchema);

// app.get('/', function(req, res) {
//     res.render('home');
// });

// app.get('/login', function(req, res) {
//     res.render('login');
// });

// app.get('/register', function(req, res) {
//     res.render('register');
// });


// app.post('/register', function(req, res){
//     const newUser = new User({
//         email: req.body.username,
//         password: req.body.password
//     });

//     newUser.save(function(err){
//         if (err){
//             console.log(err);
//         } else {
//             res.render('secrets');
//         }
//     });
// });

// app.post('/login', function(req, res){
//     const username = req.body.username;
//     const password = req.body.password;

//     User.findOne({email: username}, function(err, foundUser){
//         if (err) {
//             console.log(err);
//         } else {
//             if (foundUser) {
//                 if (foundUser.password === password) {
//                     res.render('secrets');
//                 }
//             }
//         }
//     });
// });



// app.listen(3000, function(){
//     console.log('server started on port 3000.')
// });

// npm i mongoose
// nodemon app.js

// File > New Tab
// 1--> mongod

// 2--> nodemon app.js



// 380 Level 2 - Encryption
// const express = require('express');
// const bodyParser = require('body-parser');
// const ejs = require('ejs');
// const mongoose = require('mongoose');
// const encrypt = require('mongoose-encryption');

// const app = express();

// app.use(express.static('public'));
// app.set('view engine',  'ejs');
// app.use(bodyParser.urlencoded({
//     extended: true
// }));

// mongoose.connect('mongodb://localhost:27017/userDB', {useNewUrlParser: true});

// const userSchema = new mongoose.Schema ({
//     email: String,
//     password: String
// });

// const secret = 'Thisisourlittlesecret.';
// userSchema.plugin(encrypt, { secret: secret, encryptedFields: ['password'] });


// const User = new mongoose.model('User', userSchema);

// app.get('/', function(req, res) {
//     res.render('home');
// });

// app.get('/login', function(req, res) {
//     res.render('login');
// });

// app.get('/register', function(req, res) {
//     res.render('register');
// });


// app.post('/register', function(req, res){
//     const newUser = new User({
//         email: req.body.username,
//         password: req.body.password
//     });

//     newUser.save(function(err){
//         if (err){
//             console.log(err);
//         } else {
//             res.render('secrets');
//         }
//     });
// });

// app.post('/login', function(req, res){
//     const username = req.body.username;
//     const password = req.body.password;

//     User.findOne({email: username}, function(err, foundUser){
//         if (err) {
//             console.log(err);
//         } else {
//             if (foundUser) {
//                 if (foundUser.password === password) {
//                     res.render('secrets');
//                 }
//             }
//         }
//     });
// });



// app.listen(3000, function(){
//     console.log('server started on port 3000.')
// });

// npm i mongoose-encryption
// nodemon app.js



// 381 Using Environment variables to Keep Secrets safe
// require('dotenv').config();
// const express = require('express');
// const bodyParser = require('body-parser');
// const ejs = require('ejs');
// const mongoose = require('mongoose');
// const encrypt = require('mongoose-encryption');

// const app = express();

// console.log(process.env.API_KEY);

// app.use(express.static('public'));
// app.set('view engine',  'ejs');
// app.use(bodyParser.urlencoded({
//     extended: true
// }));

// mongoose.connect('mongodb://localhost:27017/userDB', {useNewUrlParser: true});

// const userSchema = new mongoose.Schema ({
//     email: String,
//     password: String
// });


// userSchema.plugin(encrypt, { secret: process.env.SECRET, encryptedFields: ['password'] });


// const User = new mongoose.model('User', userSchema);

// app.get('/', function(req, res) {
//     res.render('home');
// });

// app.get('/login', function(req, res) {
//     res.render('login');
// });

// app.get('/register', function(req, res) {
//     res.render('register');
// });


// app.post('/register', function(req, res){
//     const newUser = new User({
//         email: req.body.username,
//         password: req.body.password
//     });

//     newUser.save(function(err){
//         if (err){
//             console.log(err);
//         } else {
//             res.render('secrets');
//         }
//     });
// });

// app.post('/login', function(req, res){
//     const username = req.body.username;
//     const password = req.body.password;

//     User.findOne({email: username}, function(err, foundUser){
//         if (err) {
//             console.log(err);
//         } else {
//             if (foundUser) {
//                 if (foundUser.password === password) {
//                     res.render('secrets');
//                 }
//             }
//         }
//     });
// });



// app.listen(3000, function(){
//     console.log('server started on port 3000.')
// });

// npm i dotenv
// touch .env
// ls -a
// nodemon app.js
// touch .gitignore



// 382 Level 3 - Hashing Passwords
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const mongoose = require('mongoose');
const encrypt = require('mongoose-encryption');

const app = express();

console.log(process.env.API_KEY);

app.use(express.static('public'));
app.set('view engine',  'ejs');
app.use(bodyParser.urlencoded({
    extended: true
}));

mongoose.connect('mongodb://localhost:27017/userDB', {useNewUrlParser: true});

const userSchema = new mongoose.Schema ({
    email: String,
    password: String
});


userSchema.plugin(encrypt, { secret: process.env.SECRET, encryptedFields: ['password'] });


const User = new mongoose.model('User', userSchema);

app.get('/', function(req, res) {
    res.render('home');
});

app.get('/login', function(req, res) {
    res.render('login');
});

app.get('/register', function(req, res) {
    res.render('register');
});


app.post('/register', function(req, res){
    const newUser = new User({
        email: req.body.username,
        password: req.body.password
    });

    newUser.save(function(err){
        if (err){
            console.log(err);
        } else {
            res.render('secrets');
        }
    });
});

app.post('/login', function(req, res){
    const username = req.body.username;
    const password = req.body.password;

    User.findOne({email: username}, function(err, foundUser){
        if (err) {
            console.log(err);
        } else {
            if (foundUser) {
                if (foundUser.password === password) {
                    res.render('secrets');
                }
            }
        }
    });
});



app.listen(3000, function(){
    console.log('server started on port 3000.')
});

// npm i md5