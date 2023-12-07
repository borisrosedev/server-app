const menues = require('../database/menu')

const MenuController = {

    index(req, res){
        res.status(200).json(carte)
    },

    findOneById(req, res){
        const { id } = req.body
        if(!id){
            return res.status(401).json('Unauthorized')
        }
        const menu = menues.find(m => m.id == id)
        if(!menu){
            return res.status(404).json(`No menu found with id ${id}`)
        }
        return res.status(200).json(menu)   
    }

  

}


module.exports = MenuController