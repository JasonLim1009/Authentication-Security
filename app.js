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
// require('dotenv').config();
// const express = require('express');
// const bodyParser = require('body-parser');
// const ejs = require('ejs');
// const mongoose = require('mongoose');
// const md5 = require('md5');

// const app = express();

// console.log(md5('123456'));

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
//         password: md5(req.body.password)
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
//     const password = md5(req.body.password);

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

// npm i md5
// mongod
// nodemon app.js



// 383 Level 4 - Salting and Hashing Passwords with bcrypt
// require('dotenv').config();
// const express = require('express');
// const bodyParser = require('body-parser');
// const ejs = require('ejs');
// const mongoose = require('mongoose');
// const bcrypt = require('bcrypt');
// const saltRounds = 10;

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

//     bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
//         const newUser = new User({
//             email: req.body.username,
//             password: hash
//         });
    
//         newUser.save(function(err){
//             if (err){
//                 console.log(err);
//             } else {
//                 res.render('secrets');
//             }
//         });
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
//                 bcrypt.compare(password, foundUser.password, function(err, result) {
//                     if (result === true) {
//                         res.render('secrets');
//                     }
//                 });
//             }
//         }
//     });
// });

// app.listen(3000, function(){
//     console.log('server started on port 3000.')
// });

// node --version
// curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
// nvm --version

// File > New Tab
// nvm install 16.17.0 
// npm i bcrypt
// npm i bcrypt@5.0.1
// nodemon app.js



// 386 Level 5 - Cookies & Sessions
// require('dotenv').config();
// const express = require('express');
// const bodyParser = require('body-parser');
// const ejs = require('ejs');
// const mongoose = require('mongoose');
// const session = require('express-session');
// const passport = require('passport');
// const passportLocalMongoose = require('passport-local-mongoose');


// const app = express();

// app.use(express.static('public'));
// app.set('view engine',  'ejs');
// app.use(bodyParser.urlencoded({
//     extended: true
// }));

// app.use(session({
//     secret: 'Our little secret.',
//     resave: false,
//     saveUninitialized: false
// }));

// app.use(passport.initialize());
// app.use(passport.session());

// mongoose.connect('mongodb://localhost:27017/userDB', {useNewUrlParser: true});

// const userSchema = new mongoose.Schema ({
//     email: String,
//     password: String
// });

// userSchema.plugin(passportLocalMongoose);

// const User = new mongoose.model('User', userSchema);

// passport.use(User.createStrategy());

// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());

// app.get('/', function(req, res) {
//     res.render('home');
// });

// app.get('/login', function(req, res) {
//     res.render('login');
// });

// app.get('/register', function(req, res) {
//     res.render('register');
// });

// app.get('/secrets', function(req, res){
//     if (req.isAuthenticated()){
//         res.render('secrets');
//     } else {
//         res.redirect('/login');
//     }
// });

// app.get('/logout', function(req, res){
//     res.redirect('/');
// });


// app.post('/register', function(req, res){

//     User.register({username: req.body.username}, req.body.password, function(err, user){
//         if (err) {
//             console.log(err);
//             res.redirect('/register');
//         } else {
//             passport.authenticate('local')(req, res, function(){
//                 res.redirect('/secrets');
//             });
//         }
//     });
    
// });

// app.post('/login', function(req, res){

//     const user = new User({
//         username: req.body.username,
//         password: req.body.password
//     });

//     req.login(user, function(err){
//         if (err) {
//             console.log(err);
//         } else {
//             passport.authenticate('local')(req, res, function(){
//                 res.redirect('/secrets');
//             });
//         }
//     });
// });

// app.listen(3000, function(){
//     console.log('server started on port 3000.')
// });

// npm i passport passport-local passport-local-mongoose express-session
// nodemon app.js



// 387 Level 6 - OAuth 2.0 & How to implement Sign in with google
// require('dotenv').config();
// const express = require('express');
// const bodyParser = require('body-parser');
// const ejs = require('ejs');
// const mongoose = require('mongoose');
// const session = require('express-session');
// const passport = require('passport');
// const passportLocalMongoose = require('passport-local-mongoose');
// const GoogleStrategy = require('passport-google-oauth20').Strategy;
// const findOrCreate = require('mongoose-findorcreate');

// const app = express();

// app.use(express.static('public'));
// app.set('view engine',  'ejs');
// app.use(bodyParser.urlencoded({
//     extended: true
// }));

// app.use(session({
//     secret: 'Our little secret.',
//     resave: false,
//     saveUninitialized: false
// }));

// app.use(passport.initialize());
// app.use(passport.session());

// mongoose.connect('mongodb://localhost:27017/userDB', {useNewUrlParser: true});

// const userSchema = new mongoose.Schema ({
//     email: String,
//     password: String,
//     googleId: String
// });

// userSchema.plugin(passportLocalMongoose);
// userSchema.plugin(findOrCreate);

// const User = new mongoose.model('User', userSchema);

// passport.use(User.createStrategy());

// passport.serializeUser(function(user, done) {
//     done(null, user.id);
// });

// passport.deserializeUser(function(id, done) {
//     User.findById(id, function(err, user) {
//         done(err, user);
//     });
// });

// passport.use(new GoogleStrategy({
//     clientID: process.env.CLIENT_ID,
//     clientSecret: process.env.CLIENT_SECRET,
//     callbackURL: 'http://localhost:3000/auth/google/secrets'
// },
// function(accessToken, refreshToken, profile, cb) {
//     console.log(profile);

//     User.findOrCreate({ googleId: profile.id }, function (err, user) {
//         return cb(err, user);
//     });
// }
// ));

// app.get('/', function(req, res) {
//     res.render('home');
// });

// app.get("/auth/google", 
//     passport.authenticate('google', { scope: ["profile"] })
// );

// app.get("/auth/google/secrets",
//     passport.authenticate('google', { failureRedirect: "/login" }),
//     function(req, res) {

//         res.redirect("/secrets");
//     });

// app.get('/login', function(req, res) {
//     res.render('login');
// });

// app.get('/register', function(req, res) {
//     res.render('register');
// });

// app.get('/secrets', function(req, res){
//     if (req.isAuthenticated()){
//         res.render('secrets');
//     } else {
//         res.redirect('/login');
//     }
// });

// app.get('/logout', function(req, res){
//     res.redirect('/');
// });


// app.post('/register', function(req, res){

//     User.register({username: req.body.username}, req.body.password, function(err, user){
//         if (err) {
//             console.log(err);
//             res.redirect('/register');
//         } else {
//             passport.authenticate('local')(req, res, function(){
//                 res.redirect('/secrets');
//             });
//         }
//     });
    
// });

// app.post('/login', function(req, res){

//     const user = new User({
//         username: req.body.username,
//         password: req.body.password
//     });

//     req.login(user, function(err){
//         if (err) {
//             console.log(err);
//         } else {
//             passport.authenticate('local')(req, res, function(){
//                 res.redirect('/secrets');
//             });
//         }
//     });
// });

// app.listen(3000, function(){
//     console.log('server started on port 3000.')
// });

// npm install passport-google-oauth20
// npm install mongoose-findorcreate
// nodemon app.js



// 388 
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const mongoose = require('mongoose');
const session = require('express-session');
const passport = require('passport');
const passportLocalMongoose = require('passport-local-mongoose');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const findOrCreate = require('mongoose-findorcreate');

const app = express();

app.use(express.static('public'));
app.set('view engine',  'ejs');
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(session({
    secret: 'Our little secret.',
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

mongoose.connect('mongodb://localhost:27017/userDB', {useNewUrlParser: true});

const userSchema = new mongoose.Schema ({
    email: String,
    password: String,
    googleId: String,
    secret: String
});

userSchema.plugin(passportLocalMongoose);
userSchema.plugin(findOrCreate);

const User = new mongoose.model('User', userSchema);

passport.use(User.createStrategy());

passport.serializeUser(function(user, done) {
    done(null, user.id);
});

passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
        done(err, user);
    });
});

passport.use(new GoogleStrategy({
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: 'http://localhost:3000/auth/google/secrets'
},
function(accessToken, refreshToken, profile, cb) {
    console.log(profile);

    User.findOrCreate({ googleId: profile.id }, function (err, user) {
        return cb(err, user);
    });
}
));

app.get('/', function(req, res) {
    res.render('home');
});

app.get("/auth/google", 
    passport.authenticate('google', { scope: ["profile"] })
);

app.get("/auth/google/secrets",
    passport.authenticate('google', { failureRedirect: "/login" }),
    function(req, res) {

        res.redirect("/secrets");
    });

app.get('/login', function(req, res) {
    res.render('login');
});

app.get('/register', function(req, res) {
    res.render('register');
});

app.get('/secrets', function(req, res){
    User.find({'secret': {$ne: null}}, function(err, foundUser){
        if (err){
            console.log(err);
        } else {
            if (foundUser) {
                res.render('secrets', {usersWithSecrets: foundUser});
            }
        }
    });
});

app.get('/submit', function(req, res){
    if (req.isAuthenticated()){
        res.render('submit');
    } else {
        res.redirect('/login');
    }
});

app.post('/submit', function(req, res){
    const submittedSecret = req.body.secret;

    console.log(req.user.id);

    User.findById(req.user.id, function(err, foundUser){
        if (err) {
            console.log(err);
        } else {
            if (foundUser) {
                foundUser.secret = submittedSecret;
                foundUser.save(function(){
                    res.redirect('/secrets');
                });
            }
        }
    });
});

app.get('/logout', function(req, res){
    res.redirect('/');
});


app.post('/register', function(req, res){

    User.register({username: req.body.username}, req.body.password, function(err, user){
        if (err) {
            console.log(err);
            res.redirect('/register');
        } else {
            passport.authenticate('local')(req, res, function(){
                res.redirect('/secrets');
            });
        }
    });
    
});

app.post('/login', function(req, res){

    const user = new User({
        username: req.body.username,
        password: req.body.password
    });

    req.login(user, function(err){
        if (err) {
            console.log(err);
        } else {
            passport.authenticate('local')(req, res, function(){
                res.redirect('/secrets');
            });
        }
    });
});

app.listen(3000, function(){
    console.log('server started on port 3000.')
});

// nodemon app.js