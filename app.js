// import express from 'express';
const express = require('express');
const route = require('./routes');
const app = express(); //앱에다 생성 App이 총괄
const sequelize = require('./models').sequelize;

sequelize.sync();

app.use('/', route);

app.listen(3000, () => {
  console.log('3000port');
});
