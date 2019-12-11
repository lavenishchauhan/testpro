const jwt = require('jsonwebtoken');
const config = require('config');

function auth(req,res,next){
    const token = req.header('Authorization');

    if(!token) {
      return  res.status(401).send('Acess denied. No token provided');
    }
    else{

    try{
        const decoded = jwt.verify(token, config.get('jwtPrivateKey'));
        req.user = decoded;
        //console.log( 'decoded', decoded)
        //console.log( 'req.user', req.user)
        next();
    }
    catch(ex){
        res.status(400).send('Invalid token');
    }
}
}

module.exports = auth;