const jwt = require('jsonwebtoken')



module.exports = (req, res, next) => {

   if(!req.headers.authorization && !req.headers.authorization.length){
      next('Error')
   } 
   else {
      // const token = req.headers.authorization.split('')[1];
      // const decodedToken = jwt.verify(token, publicKey) 
      // console.log('decodedToken', decodedToken)
      // req.auth = decodedToken
      next()
   }
  


}