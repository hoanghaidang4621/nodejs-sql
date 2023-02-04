import createError from 'http-errors';
import express, { json, urlencoded } from 'express';
import path, { join }from 'path';
import {fileURLToPath} from 'url';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import indexRouter from './src/routes/index.js';
import usersRouter from './src/routes/users.js';

var app = express();  
// view engine setup
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.set('views', join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(logger('dev'));
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(join(__dirname, './src/public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// // catch 404 and forward to error handler
// app.use(function (req, res, next) {
//   next(createError(404));
// });
// // error handler
// app.use(function (err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};
//   // render the error page
//   res.status(err.status || 500);
// });
app.listen(3000, function () {
  console.log("Server is running on port " + 3000);
});
export default app;
