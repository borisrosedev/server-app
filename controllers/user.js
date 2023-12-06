const users = require('../database/user')




const UserController = {


    index(req, res){
        res.status(200).json(users)
    }

}


module.exports = UserController