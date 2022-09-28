import express from 'express' //ESModules
//const express = require('express') -> commonjs

import productRoutes from './routes/product';
import personRoutes from './routes/person';
import inventoryRoutes from './routes/inventory';

const app = express()
app.use(express.json())

const PORT = 80

app.get('/ping', async (_req, res)=>{
    res.send('pong')
})

app.use('/api/product', productRoutes);
app.use('/api/person', personRoutes);
app.use('/api/inventory', inventoryRoutes); 

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`);  
})
