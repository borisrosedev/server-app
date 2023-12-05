//const { faker } = require('@faker-js/faker')
const carte = require('./carte')
const menues = []
let counter = 0

let appetizers = carte.filter(el => el.type == 'entrée')
let dishes = carte.filter(el => el.type == 'plat')
let desserts = carte.filter(el => el.type == 'dessert')



Array.from({ length: 5}).forEach(el => {

     
        menues.push([ 

            {
                title: dishes[counter],
                url: dishes[counter].url,
                id: counter,
                options: ['plat seul', 'formule'],
                quantity: [0,1,2],
                description:[{
                    ingredients: dishes[counter].ingredients
                }, {

                    menue: [
                        appetizers[counter ? counter : 0],
                        dishes[counter],
                        desserts[counter ? counter : 0]
                    ]
                    
                }] 

            }, 
            {
                title: dishes[counter+1],
                url: dishes[counter+1].url,
                id: counter+1,
                options: ['plat seul', 'formule'],
                quantity: [0,1,2],
                description:[{
                    ingredients: dishes[counter].ingredients
                }, {

                    menue: [
                        appetizers[counter+1 ? counter+1 : 0],
                        dishes[counter+1],
                        desserts[counter+1 ? counter+1 : 0]
                    ]
                    
                }] 

            }

        ])
        counter+=2;

})


module.exports = menues