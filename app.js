// import express from 'express';
const express = require('express');
const route = require('./routes');
const app = express(); //앱에다 생성 App이 총괄
const sequelize = require('./models').sequelize;
const bodyParser = require('body-parser');
const cors = require('cors');

sequelize.sync();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/', route);

//에러처리 next(err)
app.use((err, req, res, next) => {
  if (!err.statusCode) {
    err.statusCode = 500;
  }
  res.status(err.statusCode).json({
    errMessage: err,
    success: false
  });
});

app.listen(4000, () => {
  console.log('4000port');
});
