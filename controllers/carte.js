const carte = require('../database/carte')
const CarteController = {

    index(req, res){
        res.status(200).json(carte)
    }

}


module.exports = CarteController