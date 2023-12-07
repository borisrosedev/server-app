const users = require('../database/user')
//const fs = require('node:fs')
//const jwt = require('jsonwebtoken')



const UserController = {


    index(req, res){
        res.status(200).json(users)
    },

    findOneById(req, res){   
    
        const { id } = req.params
        if(!id){
            return res.status(400).json('Bad Request')
        }
        const user= users.find(u => u.id == Number(id))
        if(!user){
            return res.status(404).json(`No user found with id ${id}`)
        }
        return res.status(200).json(user)   
    }

}


module.exports = UserController