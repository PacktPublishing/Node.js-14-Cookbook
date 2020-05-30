module.exports = logger;

function logger() {
  return (req, res, next) => {
    console.log("Request received:", req.method, req.url);
    next();
  };
}
