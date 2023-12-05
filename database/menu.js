const { faker } = require('@faker-js/faker')
const menues = []
let counter = 0

Array.from({ length: 5}).forEach(el => {

        menues.push([ 

            {
                title: faker.commerce.productName(),
                url: faker.image.urlPicsumPhotos(),
                id: counter,
                options: ['plat seul', 'formule'],
                quantity: [0,1,2],
                description:[{
                    ingredients: [
                        faker.internet.emoji({ types: ['food']}),
                        faker.internet.emoji({ types: ['food']}),
                        faker.internet.emoji({ types: ['food']}),
                        faker.internet.emoji({ types: ['food']}),
                    ]
                }, {

                    menue: [
                        faker.internet.emoji({ types: ['food']}),
                        faker.internet.emoji({ types: ['food']}),
                        faker.internet.emoji({ types: ['food']}),
                        faker.internet.emoji({ types: ['food']}),
                    ]
                    
                }] 

            }, 
            {
                title: faker.commerce.productName(),
                url: faker.image.urlPicsumPhotos(),
                id: ++counter,
                options: ['plat seul', 'formule'],
                quantity: [0,1,2],
                description:[{
                    ingredients: [
                        faker.internet.emoji({ types: ['food']}),
                        faker.internet.emoji({ types: ['food']}),
                        faker.internet.emoji({ types: ['food']}),
                        faker.internet.emoji({ types: ['food']}),
                    ]
                }, {

                    menue: [
                        faker.internet.emoji({ types: ['food']}),
                        faker.internet.emoji({ types: ['food']}),
                        faker.internet.emoji({ types: ['food']}),
                        faker.internet.emoji({ types: ['food']}),
                    ]
                }] 

            }

        ])

})


module.exports = menues