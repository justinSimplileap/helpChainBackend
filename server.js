require('dotenv').config({ path: `${process.cwd()}/.env` });
const express = require('express');
const cors = require('cors');
const authRouter = require('./route/authRoute');
const AppError = require('./utils/appError');
const catchAsync = require('./utils/catchAsync');
const globalErrorHandler = require('./controller/errorController');
const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.set('view enginer', 'ejs');
app.use(function (req, res, next) {
  if (req.protocol === 'http') {
    res.setHeader(
      'Strict-Transport-Security',
      'max-age=31536000; includeSubDomains; preload'
    );
  }
  next();
});

app.get('/', (req, res) => {
  res.status(200).json({
    status: 'SUCCESS',
    message: 'REST API are working',
  });
});

// All routes

app.use('/api/v1/auth', authRouter);

app.use(
  '*',
  catchAsync(async (req, res, next) => {
    throw new AppError(`Can't find ${req.originalUrl} on this server`, 404);
  })
);

app.use(globalErrorHandler);

const PORT = process.env.APP_PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running in PORT ${PORT}`);
});
