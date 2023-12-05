//const { faker } = require('@faker-js/faker')
//const carte = [];
// let counter = 0

// Array.from({ length: 30 }).forEach(el => {
//         carte.push({
//             id: counter,
//             url: faker.image.urlPicsumPhotos,
//             name: faker.commerce.productName(),
//             description: faker.lorem.paragraph(1),
//             price: faker.commerce.price({ min: 1, max: 15 })
            
//         })
//         counter++
// })


const carte = [
    {
        id:0,
        name: 'Tartines aux oeufs et bacon',
        type: 'plat',
        description: 'Tartines de chez Mami Gertrude',
        url: 'https://cdn.pixabay.com/photo/2021/02/04/12/47/food-5981232_1280.jpg',
        ingredients: ['fromage', 'tomate', 'oeuf', 'bacon', 'oignons']
    },
    {
        id: 1,
        name: 'Pizza italien faite maison de Mamie Mimi',
        description: 'Une pizza faite avec amour',
        price: '20',
        url: 'https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_1280.jpg',
        type: 'plat',
        ingredients: ['fromage', 'tomate', 'poivrons', 'anchois', 'oignons']
    },
    {
        id: 2,
        name: 'Boeuf caramélisé',
        description: 'Boeuf caramélisé à la cantonaise',
        price: '25',
        url: 'https://cdn.pixabay.com/photo/2015/11/19/10/38/food-1050813_1280.jpg',
        type: 'plat',
        ingredients : ['boeuf', 'sucre', 'vinaigre', 'poivre', 'sel']

    }, 
    {
        id:3,
        name: 'Bananes au chocolat et à la vanille',
        description : 'Dessert composé de bananes, chocolat et vanille',
        url:'https://cdn.pixabay.com/photo/2014/03/07/11/00/bananas-282313_1280.jpg',
        price: '10',
        type: 'dessert'

    },
    {
        id:4,
        name: 'Bruschetta à l\'italienne',
        description: 'Des bruschettas que vous n\'allez pas oubliées',
        price: '15',
        type: 'entrée',
        ingredients : ['tomate', 'mozzarella', 'olives', 'persil'],
        url: 'https://cdn.pixabay.com/photo/2020/10/01/22/39/gourmet-5619887_1280.jpg'
    },
    {
        id:5,
        name : 'Champignons farcis',
        description: 'De superbes champions farcis par Monsieur Duchêne',
        price: '30',
        url: 'https://cdn.pixabay.com/photo/2023/11/01/17/14/ai-generated-8358446_1280.jpg',
        type: 'plat',
        ingredients: ['champignons', 'tomate', 'pain', 'boeuf', 'sel', 'huile', 'poivre']
    },
    {
        id:6,
        name: 'Coquilles au fromage',
        description: 'De magniques coquilles au fromage',
        price: '30',
        url : 'https://cdn.pixabay.com/photo/2023/11/01/17/14/ai-generated-8358441_1280.jpg',
        type: 'plat',
        ingredients: ['lait', 'fromate', 'saint-jacque', 'sel', 'citron']
    },
    {   
        id: 7,
        name: 'Ailes de poulet de chez Papi Baba',
        description: 'Issues des meilleures poules de l\'Eure, ces ailes de poulet vous feront rêver',
        price: '30',
        url : 'https://cdn.pixabay.com/photo/2023/08/25/12/32/chicken-wings-8212936_1280.png',
        type : 'plat',
        ingredients: ['poulet', 'poivrons', 'herbes de provence', 'citron', 'poivre', 'sel']

    },
    {
        id:8,
        name: 'Nugets de poulet',
        description: 'Nugets de poulet préparées avec amour par Mami Boubou',
        price: '10',
        url: 'https://cdn.pixabay.com/photo/2023/10/01/21/52/ai-generated-8288202_1280.jpg',
        type : 'entrée'

    },
    {
        id:9,
        name: 'Saumon nipon',
        description: 'Saumon nipon fait par le célèbre Ishiro Nakamura',
        price: '40',
        url: 'https://cdn.pixabay.com/photo/2014/11/05/15/57/salmon-518032_1280.jpg',
        type : 'plat',
        ingredients: ['saumon', 'citron', 'poivre', 'sel']
    },
    {
        id:10,
        name: 'Framboises angéliques',
        description : 'Dessert à la framboise',
        price: '10',
        url: 'https://cdn.pixabay.com/photo/2017/01/31/09/30/raspberries-2023404_1280.jpg',
        type :'dessert'
    },
    {
        id:11,
        name: 'Gâteau aux fraises',
        description : 'Délicieux éclair composé de fraises',
        price: '10',
        url: 'https://cdn.pixabay.com/photo/2018/05/01/18/21/eclair-3366430_1280.jpg',
        type: 'dessert'
    },
    {
        id:12,
        name: 'Frites',
        description: 'Frites de chez Mami Boubou',
        price: '10',
        url: 'https://cdn.pixabay.com/photo/2023/10/01/21/37/ai-generated-8288194_1280.jpg',
        type: 'entrée'
    },
    {
        id: 13,
        name: 'Canapés au saumon et haricot vert',
        description: 'Canapés composés de saumon et de haricots verts de Mimi Lalo',
        price: '10',
        type: 'entrée',
        url:'https://cdn.pixabay.com/photo/2022/02/22/11/00/pate-7028475_1280.jpg'
    },
    {
        id:14,
        name: 'Soupe au curi',
        price: '20',
        type: 'plat',
        description: 'Délicieuse soupe au curi de chez Papi Gandhi',
        url: 'https://cdn.pixabay.com/photo/2022/06/07/20/52/curry-7249247_1280.jpg',
        ingredients: ['pomme de terre', 'courgette', 'poivron', 'citron', 'poivre', 'sel']
    },
    {
        id: 15,
        name: 'Poulet caramélisé',
        price: '13',
        type: 'plat',
        description: 'Poulet caramélisé de chez Mami Shang',
        url: 'https://cdn.pixabay.com/photo/2022/06/07/21/00/chicken-7249273_1280.jpg',
        ingredients : ['poulet', 'sucre', 'vinaigre', 'poivre', 'sel']
    },
    {
        id: 16,
        name: 'Mousse au nougat',
        price: '10',
        type: 'dessert',
        description: 'Mousse au nougat',
        url: 'https://cdn.pixabay.com/photo/2018/01/12/16/31/nougat-3078581_1280.jpg',
    },
    {
        id: 17,
        name: 'Pancakes',
        description: 'Panckes de chez Papi Pouf',
        price: '10',
        type: 'dessert',
        url: 'https://cdn.pixabay.com/photo/2017/03/13/13/39/pancakes-2139844_1280.jpg'
    },
    {
        id: 18,
        name: 'Steak de veau à l\'asperge',
        description: 'Steak de veau avec asperge de chez Mami Loulou',
        price: '20',
        type: 'plat',
        url : 'https://cdn.pixabay.com/photo/2017/03/23/19/57/asparagus-2169305_1280.jpg'

    }

]


module.exports = carte