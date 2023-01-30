//Handler for environment variables saved in .env files
require('dotenv').config();

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var passport = require('passport');
var sessions = require('express-session');
var SessionStorage = require('connect-mongo');
var mongoose = require('mongoose');

//Routers
var indexRouter = require('./routes/index');
var warehouse = require('./routes/warehouse');
var shipping = require('./routes/shipping');
var orderSupplies = require('./routes/orderSupplies');
var orderDetails = require('./routes/orderDetails');
var profile = require('./routes/profile');
var contact = require('./routes/contact');
var aboutUs = require('./routes/aboutUs');

// rotte del login
var login = require('./routes/login');
var account = require('./routes/account');
var password = require('./routes/password');

// rotte ecommerce
var ecommerce = require('./routes/ecommerce');
var men = require('./routes/men');
var women = require('./routes/women');
var kids = require('./routes/kids');
var sales = require('./routes/sales');

//rotte funzioni

//Initializing Express
var app = express();

//Database connection
const connP = mongoose.connect(process.env.MONGO_URI,{
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(m => m.connection.getClient(console.log("connected")));

//Session middleware
app.use(sessions({
  secret: "guestSecret",
  saveUninitialized: false,
  resave: false,
  store : SessionStorage.create({clientPromise: connP})
}));

//Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/', warehouse);
app.use('/', shipping);
app.use('/', orderSupplies);
app.use('/', orderDetails);
app.use('/', profile);
app.use('/', contact);
app.use('/', aboutUs);

// rotte del login
app.use('/', login);
app.use('/', account);
app.use('/', password);

// rotte ecommerce
app.use('/', ecommerce);
app.use('/', men);
app.use('/', women);
app.use('/', kids);
app.use('/', sales);

// rotte funzioni



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
