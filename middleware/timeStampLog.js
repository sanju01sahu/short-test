function timeStampLog(req, res, next) {
  console.log(new Date());

  next();
}

module.exports = { timeStampLog };
