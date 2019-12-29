exports.boardWrite = (req, res, next) => {
  console.log('it is boardwrite');
  res.status(200).send('hi');
};
exports.boardRead = (req, res, next) => {
  console.log('it is boardRead');
  res.status(200).send('hello');
};

// const writeBoard = (req, res, next) => {
//   console.log('wirteboard');
// };

// exports = {
//   writeBoard
// };
