const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());

const products = [
  { id: 1, name: 'Product 1', image: '/images/product1.jpg', description: 'This is product 1', price: 10.99 },
  { id: 2, name: 'Product 2', image: '/images/product2.jpg', description: 'This is product 2', price: 15.99 },
  { id: 3, name: 'Product 3', image: '/images/product3.jpg', description: 'This is product 3', price: 12.99 },
];

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.post('/api/orders', (req, res) => {
  const { firstName, lastName, address } = req.body;

  if (!firstName || !lastName || !address) {
    return res.status(400).json({ error: 'First name, last name, and address are required.' });
  }

  console.log(`Order placed by ${firstName} ${lastName} at ${address}`);
  res.json({ success: true });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});