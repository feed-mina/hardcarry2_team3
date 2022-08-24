const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');


const logger = require('morgan');
const cors = require('cors');

const indexRouter = require('./routes/index');
const itemRouter = require('./routes/api/item');
const balanceRouter = require('./routes/api/balance');
const diaryRouter = require('./routes/api/diary');
const testRouter = require('./routes/api/test');


const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
//app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public/build')));
//app.use 해서 bulid folder를 static만들어야하고
app.use(cors());

//db 연결
const models = require("./models");

models.sequelize.sync().then( (res) => {
  console.log("DB connected successful");
}).catch(err => {
  console.log(err);
})



//app.use('/', indexRouter);
app.use('/api/item', itemRouter);
app.use('/api/balance', balanceRouter);
app.use('/api/test', testRouter);
app.use('/api/diary', diaryRouter);

app.get("/*", (req, res) => {
  console.log(__dirname);
  // index.html 파일 응답
  res.sendFile(path.join(__dirname, "./public/build", "index.html"));
});


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
