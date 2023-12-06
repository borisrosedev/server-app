
module.exports = (req, res, next) => {

   const { authorization } = req.headers
   const token = authorization.split('')[1];
   console.log('authorization', authorization)
   

   next()



}