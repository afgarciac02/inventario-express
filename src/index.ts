import express from 'express' //ESModules
const cors = require('cors');
var bodyParser = require('body-parser');
//const express = require('express') -> commonjs

import productRoutes from './routes/product';
import personRoutes from './routes/person';
import inventoryRoutes from './routes/inventory';

const app = express()
app.use(cors())
app.use(bodyParser.json());

const PORT = 3000

app.get('/', async (_req, res) => {
    res.setHeader('Content-Type', 'application/json')
        .setHeader('Access-Control-Allow-Origin', '*')
        .setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
        .setHeader('Access-Control-Allow-Headers', 'Content-Type')
        .setHeader('Access-Control-Allow-Credentials', 'true')
        .writeHead(200)
    res.end('hello back')
})

app.use('/api/product', productRoutes);
app.use('/api/person', personRoutes);
app.use('/api/inventory', inventoryRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})
