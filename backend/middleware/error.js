const ErrorHandler = require("../utils/errorhandler");

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Internal Error";

  //wrong id error in MongoDB
  if (err.name === "CastError") {
    const message = `Couldn't found the resource. Invalid: ${err.path}`;
    err = new ErrorHandler(message, 400);
  }

  //mongoose duplicate id error
  if (err.code === 11000) {
    const message = `${object.keys(err.keyValue)} email is already registered`;
    err = new ErrorHandler(message, 400);
  }

  //wrong jwt error
  if (err.code === "JsonwebTokenError") {
    const message = `jwt token is invalid, try again`;
    err = new ErrorHandler(message, 400);
  }

  //jwt expire error
  if (err.code === "TokenExpiredError") {
    const message = `jwt token is Expired, try again`;
    err = new ErrorHandler(message, 400);
  }

  res.status(err.statusCode).json({
    success: false,
    message: err.message,
  });
};
