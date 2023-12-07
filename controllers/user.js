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
    },

    login(req, res){
        
        const { email, password } = req.body
        console.log('req.body', req.body)
        console.log('🟠email', email)
        console.log('🥎password', password)

        if(!email || !password){
            return res.status(400).json('Bad Request 1')

        }

        const user = users.find(u => u.email == email)

        if(!user){
            return res.status(404).json('No user found')
        }

        if(user.password !== password){
            return res.statsu(400).json('Bad Request 2')
        }

        return res.status(200).json(user)

    }

}


module.exports = UserController