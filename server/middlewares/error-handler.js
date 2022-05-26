const errorHandlerMiddleware = (err, req, res, next) => {
  res.status(400).send("There was an error!");
};

export default errorHandlerMiddleware;
