import express from 'express' //ESModules
const cors = require('cors');
//const express = require('express') -> commonjs

import productRoutes from './routes/product';
import personRoutes from './routes/person';
import inventoryRoutes from './routes/inventory';

const app = express()
app.use(express.json())
app.use(cors())

const PORT = 3000

app.get('/ping', async (_req, res) => {
    res.setHeader('Content-Type', 'application/json')
        .setHeader('Access-Control-Allow-Origin', '*')
        .setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
        .setHeader('Access-Control-Allow-Headers', 'Content-Type')
        .setHeader('Access-Control-Allow-Credentials', 'true')
        .writeHead(200)
    res.end('pong')
})

app.use('/api/product', productRoutes);
app.use('/api/person', personRoutes);
app.use('/api/inventory', inventoryRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})
