import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Álvaro Gomez Izquierdo',
      email: 'alvar.villavicios.o@gmail.com',
      password: bcrypt.hashSync('tim_izquierdo'),
      isAdmin: true,
    },
    {
      name: 'Pepe Pecas',
      email: 'pica@gmail.com',
      password: bcrypt.hashSync('papas'),
      isAdmin: false,
    },
  ],
  products: [
    {
      // _id: '1',
      name: 'Gemini song',
      slug: 'gemini-song',
      cathegory: 'classic',
      image: '/images/p1.jpg',
      brand: 'alvar',
      price: 1,
      rating: 4.5,
      numReviews: 10,
      description: 'classic song',
      countInStock: 1000,
    },
    {
      // _id: '2',
      name: 'Cancer song',
      slug: 'cancer-song',
      cathegory: 'classic',
      image: '/images/p2.jpg',
      brand: 'alvar',
      price: 1,
      rating: 4.5,
      numReviews: 10,
      description: 'classic song',
      countInStock: 1000,
    },
  ],
};

export default data;
