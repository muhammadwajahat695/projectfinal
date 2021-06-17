import bcrypt from 'bcryptjs';



const data = {
    users: [
        {
            name: 'Basir',
            email: 'admin@example.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: true,
        },
        {
            name: 'John',
            email: 'user@example.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: false,
        },
    ],
    products: [
        {


            name: 'Jwllery ',
            category: 'spoon',
            image: '/images/p1.jpg',
            price: 120,
            descriptio: 'high quality product',
            countInStock: 6,

        },
        {

            name: 'Hot Pot',
            category: 'Hot Pot',
            image: 'images/p1.jpg',
            price: 120,
            descriptio: 'high quality product',
            countInStock: 5,

        },
        {

            name: 'Tray',
            category: 'tray',
            image: '/images/p1.jpg',
            price: 120,
            descriptio: 'high quality product',
            countInStock: 5,

        },
        {

            name: 'Wooden Spoon',
            category: 'spoon',
            image: '/images/p1.jpg',
            price: 120,
            descriptio: 'high quality product',
            countInStock: 5,

        },
        {

            name: 'Wa',
            category: 'spoon',
            image: '/images/p1.jpg',
            price: 120,
            descriptio: 'high quality product',
            countInStock: 5,

        },
        {


            name: 'Wklkoden Spoon',
            category: 'spoon',
            image: '/images/p1.jpg',
            price: 120,
            descriptio: 'high quality product',
            countInStock: 5,

        },
        {


            name: 'Wooden aslkc Spoon',
            category: 'spoon',
            image: '/images/p1.jpg',
            price: 120,
            descriptio: 'high quality product',
            countInStock: 5,

        },
        {


            name: 'Wooden Spoonafbv',
            category: 'spoon',
            image: '/images/p1.jpg',
            price: 120,
            descriptio: 'high quality product',
            countInStock: 5,

        },
        {


            name: 'Wooden Spoon asggas',
            category: 'spoon',
            image: '/images/p1.jpg',
            price: 120,
            descriptio: 'high quality product',
            countInStock: 5,

        },
    ],


}
export default data