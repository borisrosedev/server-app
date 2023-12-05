const { faker } = require('@faker-js/faker')
const carte = [];
let counter = 0

Array.from({ length: 30 }).forEach(el => {
        carte.push({
            id: counter,
            url: faker.image.urlPicsumPhotos,
            name: faker.commerce.productName(),
            description: faker.lorem.paragraph(1),
            price: faker.commerce.price({ min: 1, max: 15 })
            
        })
        counter++
})

module.exports = carte