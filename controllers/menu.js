const menues = require('../database/menu')

const MenuController = {

    index(req, res){
        res.status(200).json(menues)
    },

    findOneById(req, res){
        const { id } = req.params
        if(!id){
            return res.status(401).json('Unauthorized')
        }
        const menu = menues[id]
        if(!menu){
            return res.status(404).json(`No menu found with id ${id}`)
        }
        return res.status(200).json(menu)   
    }

  

}


module.exports = MenuController