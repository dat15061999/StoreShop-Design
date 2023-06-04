let products = [
    { id: '1', name: 'Red Printed Tshirt', type: 'T-shirt', price: '50', image: 'images/product-1.jpg', amount: '1', size: ['XL', 'L', 'M', 'S'], total: '50' },
    { id: '2', name: 'Black Shoes Pather', type: 'Shoes', price: '25', image: 'images/product-2.jpg', amount: '1', size: ['XL', 'L', 'M', 'S'], total: '25' },
    { id: '3', name: 'Grey Pants', type: 'Pants', price: '75', image: 'images/product-3.jpg', amount: '1', size: ['XL', 'L', 'M', 'S'], total: '75' },
    { id: '4', name: 'Blue Ocean Tshirt', type: 'T-shirt', price: '110', image: 'images/product-4.jpg', amount: '1', size: ['XL', 'L', 'M', 'S'], total: '110' },
    { id: '5', name: 'Grey Shoes Version 1', type: 'Shoes', price: '225', image: 'images/product-5.jpg', amount: '1', size: ['XL', 'L', 'M', 'S'], total: '225' },
    { id: '6', name: 'Black Super Man', type: 'T-shirt', price: '70', image: 'images/product-6.jpg', amount: '1', size: ['XL', 'L', 'M', 'S'], total: '70' },
    { id: '7', name: 'Combo 3 socks', type: 'Crocks', price: '10', image: 'images/product-7.jpg', amount: '1', size: ['Xl', 'L', 'M', 'S'], total: '10' },
    { id: '8', name: 'Casio O"Clock', type: 'Clock', price: '250', image: 'images/product-8.jpg', amount: '1', size: ['24', '28', '32', '38'], total: '250' },
    { id: '9', name: 'Mercedes O"Clock', type: 'Clock', price: '3700', image: 'images/product-9.jpg', amount: '1', size: ['24', '28', '32', '38'], total: '3700' },
    { id: '10', name: 'Red Mix Black Shoes', type: 'Shoes', price: '130', image: 'images/product-10.jpg', amount: '1', size: ['XL', 'L', 'M', 'S'], total: '130' },
    { id: '11', name: 'Grey Shoes', type: 'Shoes', price: '75', image: 'images/product-11.jpg', amount: '1', size: ['XL', 'L', 'M', 'S'], total: '75' },
    { id: '12', name: 'Jean Supper Maza', type: 'Pants', price: '500', image: 'images/product-12.jpg', amount: '1', size: ['XL', 'L', 'M', 'S'], total: '500' },
]

localStorage.setItem('listProduct', JSON.stringify(products));

JSON.parse(localStorage.getItem('listProduct'));