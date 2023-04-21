//Here we are validating the token for every API CALL except login and register
//Because those two are non-protected routes (PUBLIC ROUTES)

const jwt = require('jsonwebtoken');


module.exports = (req, res, next) => {
  try{
    const token = req.headers.authorization.split(' ')[1];
    const decoded = jwt.verify(token,process.env.JWT_SECRET);
    req.body.userId = decoded.userId;
    next();
}
  catch(err){
    res.send({
        message: err.message,
        success: false,
    })
  }
};
