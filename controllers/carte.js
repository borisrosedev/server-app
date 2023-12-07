const carte = require('../database/carte')
const CarteController = {

    index(req, res){
        res.status(200).json(carte)
    },

    findOneById(req, res){
        const { id } = req.params

        if(!id){
            return res.status(401).json('Unauthorized')
        }

        const dish = carte.find(d => d.id == Number(id))

        if(!dish){
            return res.status(404).json(`No dish found with id ${id}`)
        }

        return res.status(200).json(dish)
        
    }

  

}


module.exports = CarteController