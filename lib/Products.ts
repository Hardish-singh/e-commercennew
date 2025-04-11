interface Product {
    id: number;
    name: string;
    collection: string;
    price: string;
    img: string;
    color?: string;
    rating: number;
  }
  
  interface Products {
    women: Product[];
    men: Product[];
  }
  
  const products: Products = {
    men: [
      {
        id: 1,
        name: 'Cush Coat',
        collection: 'Urban Collection',
        price: '₹27,000',
        img: '/product1.png',
        color: '#bcbec0',
        rating: 4.2
      },
      {
        id: 2,
        name: 'Air Cocoon',
        collection: 'Weekend Collection',
        price: '₹37,000',
        img: '/product2.jpg',
        rating: 4.5
      },
      {
        id: 33,
        name: 'Cush Coat',
        collection: 'Urban Collection',
        price: '₹27,000',
        img: '/product1.png',
        color: '#bcbec0',
        rating: 4.2
      },
      {
        id: 34,
        name: 'Air Cocoon',
        collection: 'Weekend Collection',
        price: '₹37,000',
        img: '/product2.jpg',
        rating: 4.5
      },
      {
        id: 35,
        name: 'Cush Coat',
        collection: 'Urban Collection',
        price: '₹27,000',
        img: '/product1.png',
        color: '#bcbec0',
        rating: 4.2
      },
      {
        id: 36,
        name: 'Air Cocoon',
        collection: 'Weekend Collection',
        price: '₹37,000',
        img: '/product2.jpg',
        rating: 4.5
      },
      {
        id: 37,
        name: 'Cush Coat',
        collection: 'Urban Collection',
        price: '₹27,000',
        img: '/product1.png',
        color: '#bcbec0',
        rating: 4.2
      },
      {
        id: 38,
        name: 'Air Cocoon',
        collection: 'Weekend Collection',
        price: '₹37,000',
        img: '/product2.jpg',
        rating: 4.5
      },
      {
        id: 39,
        name: 'Cush Coat',
        collection: 'Urban Collection',
        price: '₹27,000',
        img: '/product1.png',
        color: '#bcbec0',
        rating: 4.2
      },
      {
        id: 40,
        name: 'Air Cocoon',
        collection: 'Weekend Collection',
        price: '₹37,000',
        img: '/product2.jpg',
        rating: 4.5
      },
      {
        id: 41,
        name: 'Cush Coat',
        collection: 'Urban Collection',
        price: '₹27,000',
        img: '/product1.png',
        color: '#bcbec0',
        rating: 4.2
      },
      {
        id: 42,
        name: 'Air Cocoon',
        collection: 'Weekend Collection',
        price: '₹37,000',
        img: '/product2.jpg',
        rating: 4.5
      },
      {
        id: 43,
        name: 'Cush Coat',
        collection: 'Urban Collection',
        price: '₹27,000',
        img: '/product1.png',
        color: '#bcbec0',
        rating: 4.2
      },
      {
        id: 44,
        name: 'Air Cocoon',
        collection: 'Weekend Collection',
        price: '₹37,000',
        img: '/product2.jpg',
        rating: 4.5
      },
      {
        id: 45,
        name: 'Cush Coat',
        collection: 'Urban Collection',
        price: '₹27,000',
        img: '/product1.png',
        color: '#bcbec0',
        rating: 4.2
      },
      {
        id: 46,
        name: 'Air Cocoon',
        collection: 'Weekend Collection',
        price: '₹37,000',
        img: '/product2.jpg',
        rating: 4.5
      },
      {
        id: 47,
        name: 'Cush Coat',
        collection: 'Urban Collection',
        price: '₹27,000',
        img: '/product1.png',
        color: '#bcbec0',
        rating: 4.2
      },
      {
        id: 48,
        name: 'Air Cocoon',
        collection: 'Weekend Collection',
        price: '₹37,000',
        img: '/product2.jpg',
        rating: 4.5
      }
    ],
    women: [
      {
        id: 3,
        name: 'Cush Coat',
        collection: 'Urban Collection',
        price: '₹27,000',
        img: '/product3.png',
        color: '#FFBB00',
        rating: 4.3
      },
      {
        id: 4,
        name: 'Street Jacket',
        collection: 'Casual Wear',
        price: '₹23,000',
        img: '/product4.png',
        color: '#735DA5',
        rating: 4.1
      },
      {
        id: 5,
        name: 'Cush Coat',
        collection: 'Urban Collection',
        price: '₹27,000',
        img: '/product3.png',
        color: '#FFBB00',
        rating: 4.3
      },
      {
        id: 6,
        name: 'Street Jacket',
        collection: 'Casual Wear',
        price: '₹23,000',
        img: '/product4.png',
        color: '#735DA5',
        rating: 4.1
      },
      {
        id: 7,
        name: 'Cush Coat',
        collection: 'Urban Collection',
        price: '₹27,000',
        img: '/product3.png',
        color: '#FFBB00',
        rating: 4.3
      },
      {
        id: 8,
        name: 'Street Jacket',
        collection: 'Casual Wear',
        price: '₹23,000',
        img: '/product4.png',
        color: '#735DA5',
        rating: 4.1
      },
      {
        id: 9,
        name: 'Cush Coat',
        collection: 'Urban Collection',
        price: '₹27,000',
        img: '/product3.png',
        color: '#FFBB00',
        rating: 4.3
      },
      {
        id: 10,
        name: 'Street Jacket',
        collection: 'Casual Wear',
        price: '₹23,000',
        img: '/product4.png',
        color: '#735DA5',
        rating: 4.1
      },
      {
        id: 11,
        name: 'Cush Coat',
        collection: 'Urban Collection',
        price: '₹27,000',
        img: '/product3.png',
        color: '#FFBB00',
        rating: 4.3
      },
      {
        id: 12,
        name: 'Street Jacket',
        collection: 'Casual Wear',
        price: '₹23,000',
        img: '/product4.png',
        color: '#735DA5',
        rating: 4.1
      },
      {
        id: 13,
        name: 'Cush Coat',
        collection: 'Urban Collection',
        price: '₹27,000',
        img: '/product3.png',
        color: '#FFBB00',
        rating: 4.3
      },
      {
        id: 14,
        name: 'Street Jacket',
        collection: 'Casual Wear',
        price: '₹23,000',
        img: '/product4.png',
        color: '#735DA5',
        rating: 4.1
      },
      {
        id: 15,
        name: 'Cush Coat',
        collection: 'Urban Collection',
        price: '₹27,000',
        img: '/product3.png',
        color: '#FFBB00',
        rating: 4.3
      },
      {
        id: 16,
        name: 'Street Jacket',
        collection: 'Casual Wear',
        price: '₹23,000',
        img: '/product4.png',
        color: '#735DA5',
        rating: 4.1
      },
      {
        id: 17,
        name: 'Cush Coat',
        collection: 'Urban Collection',
        price: '₹27,000',
        img: '/product3.png',
        color: '#FFBB00',
        rating: 4.3
      },
      {
        id: 18,
        name: 'Street Jacket',
        collection: 'Casual Wear',
        price: '₹23,000',
        img: '/product4.png',
        color: '#735DA5',
        rating: 4.1
      },
      {
        id: 19,
        name: 'Cush Coat',
        collection: 'Urban Collection',
        price: '₹27,000',
        img: '/product3.png',
        color: '#FFBB00',
        rating: 4.3
      },
      {
        id: 20,
        name: 'Street Jacket',
        collection: 'Casual Wear',
        price: '₹23,000',
        img: '/product4.png',
        color: '#735DA5',
        rating: 4.1
      }
    ]
  };
  
  export default products;
  