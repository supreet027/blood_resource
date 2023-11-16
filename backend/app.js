const express = require('express');
const app = express();
const createError = require('http-errors');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const homeRouter = require('./routes');
const hospitalRouter = require('./routes/hospital');
const publicuserRouter = require('./routes/publicuser');
const organizationRouter = require('./routes/organization');
const registrationRouter = require('./routes/registration');

// const loginRouter = require('./routes/login');
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static('public'));

app.use('/', homeRouter);
app.use('/hospital', hospitalRouter);
app.use('/organization', organizationRouter);
app.use('/publicUser', publicuserRouter);
app.use('/registration', registrationRouter);

app.get('/', (_req, res) => {
  res.send('Hello');
});

// catch 404 and forward to error handler
app.use(function(_req, _res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, _next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

app.listen(5000, () => {
  console.log('Backend is running');
});