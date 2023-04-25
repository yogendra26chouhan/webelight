const jwt = require("jsonwebtoken");
const HttpStatus = require('http-status-codes');
const config = process.env;

const verifyToken = (req, res, next) => {
  const tokenBearer = req.headers['authorization'];
  
  if (!tokenBearer) {
    return res.json({"code":HttpStatus.FORBIDDEN, "message" : 'A token is required for authentication'});
  }
  const token = tokenBearer.replace("Bearer ","");;
  try {
    const decoded = jwt.verify(token, config.TOKEN_KEY);
    req.user = decoded;
  } catch (err) {
    return res.json({"code":HttpStatus.UNAUTHORIZED, "message" : 'Invalid Token'});
  }
  return next();
};

module.exports = verifyToken;