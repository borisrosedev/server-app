const menues = require('../database/menu')

const MenuController = {

    index(req, res){
        res.status(200).json(menues)
    }
}


module.exports = MenuController