const bcrypt = require('bcrypt')

const emailMaker = (first,last) => {
    return `${first}${last}@gmail.com`
}


const users = [
    {
        id: 0,
        firstname: 'Leo',
        lastname: 'Dupont',
        email: emailMaker('Leo', 'Dupont'),
        password: bcrypt.hashSync('10caroline10', 10),
        url: 'https://cdn.pixabay.com/photo/2015/08/05/04/02/people-875597_1280.jpg'
    },

    {
        id: 1,
        firstname: 'Benjamin',
        lastname: 'Maria',
        email: emailMaker('Benjamin', 'Maria'),
        password: bcrypt.hashSync('10caroline10', 10),
        url: 'https://cdn.pixabay.com/photo/2018/04/27/03/50/portrait-3353699_1280.jpg'

    },
    {
        id: 2,
        firstname: 'Stéphanie',
        lastname: 'Madinina',
        email: emailMaker('Stéphanie', 'Madinina'),
        password: bcrypt.hashSync('10caroline10', 10),
        url: 'https://cdn.pixabay.com/photo/2016/11/29/13/14/attractive-1869761_1280.jpg'
    },
    {
        id: 3,
        firstname: 'Anthony',
        lastname: 'Gwada',
        email: emailMaker('Anthony', 'Gwada'),
        password: bcrypt.hashSync('10caroline10', 10),
        url: 'https://cdn.pixabay.com/photo/2015/06/12/21/54/child-807533_1280.jpg'

    },
    {
        id: 4,
        firstname: 'Olivier',
        lastname: 'César',
        email: emailMaker('Olivier', 'César'),
        password: bcrypt.hashSync('10caroline10', 10),
        url: 'https://cdn.pixabay.com/photo/2015/07/15/06/42/man-845709_1280.jpg'
    }, 
    {
        id: 5,
        firstname: 'Kevin',
        lastname: 'Biber',
        email: emailMaker('Kevin', 'Biber'),
        password: bcrypt.hashSync('10caroline10', 10),
        url: 'https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166_1280.jpg'
    },
    {
        id: 6,
        firstname: 'boris',
        lastname: 'rose',
        email: 'borisrose@gmail.com',
        password: '10caroline10',
        url: 'https://cdn.pixabay.com/photo/2018/03/01/14/57/portrait-3190849_1280.jpg'
    }

]

module.exports = users