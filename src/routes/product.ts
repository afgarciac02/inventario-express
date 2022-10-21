import express from "express";
import * as productService from '../services/productServices';
import { product } from "../types";

const router = express.Router();

router.get('/', async (_req, res) => {
    let product = await productService.getProduct()
    if (product) {
        res.setHeader('Content-Type', 'application/json')
            .setHeader('Access-Control-Allow-Origin', '*')
            .setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
            .setHeader('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method')
            .setHeader('Allow', 'GET, POST, OPTIONS, PUT, DELETE')
            .setHeader('Access-Control-Allow-Credentials', 'true')
            .writeHead(200)
        res.end(product)
    }
});

router.get('/id/:id', async (req, res) => {

    let response = await productService.getProductById(parseInt(req.params.id));
    if (response && req.params.id) {
        res.setHeader('Content-Type', 'application/json')
            .setHeader('Access-Control-Allow-Origin', '*')
            .setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
            .setHeader('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method')
            .setHeader('Allow', 'GET, POST, OPTIONS, PUT, DELETE')
            .setHeader('Access-Control-Allow-Credentials', 'true')
            .writeHead(200)
        res.end(response)
    }

})

router.get('/name/:name', async (req, res) => {

    let response = await productService.getProductByName(req.params.name);
    if (response && req.params.name) {
        res.setHeader('Content-Type', 'application/json')
            .setHeader('Access-Control-Allow-Origin', '*')
            .setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
            .setHeader('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method')
            .setHeader('Allow', 'GET, POST, OPTIONS, PUT, DELETE')
            .setHeader('Access-Control-Allow-Credentials', 'true')
            .writeHead(200)
        res.end(response)
    }

})

router.post('/create', async (req, res) => {
    let newProduct: product = { name: req.body.name, brand: req.body.brand, price: req.body.price, quantity: req.body.quantity };
    let response = await productService.addProduct(newProduct);
    if (response && req.body) {
        res.setHeader('Content-Type', 'application/json')
            .setHeader('Access-Control-Allow-Origin', '*')
            .setHeader("Access-Control-Allow-Headers", "X-Requested-With")
            .setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
            .setHeader('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method')
            .setHeader('Allow', 'GET, POST, OPTIONS, PUT, DELETE')
            .setHeader('Access-Control-Allow-Credentials', 'true')
            .writeHead(200)
        res.end(response)
    }

})

router.delete('/delete/:id', async (req, res) => {
    let response = await productService.deleteProduct(parseInt(req.params.id));
    if (response && req.params.id) {
        res.setHeader('Content-Type', 'application/json')
            .setHeader('Access-Control-Allow-Origin', '*')
            .setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
            .setHeader('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method')
            .setHeader('Allow', 'GET, POST, OPTIONS, PUT, DELETE')
            .setHeader('Access-Control-Allow-Credentials', 'true')
            .writeHead(200)
        res.end(response)
    }
})

router.post('/update', async (req, res) => {
    let product: product = { id: req.body.id, brand: req.body.brand, name: req.body.name, price: req.body.price, quantity: req.body.quantity }
    let response = await productService.updateProduct(product);
    if (response && req.body.id) {
        res.setHeader('Content-Type', 'application/json')
            .setHeader('Access-Control-Allow-Origin', '*')
            .setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
            .setHeader('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method')
            .setHeader('Allow', 'GET, POST, OPTIONS, PUT, DELETE')
            .setHeader('Access-Control-Allow-Credentials', 'true')
            .writeHead(200)
        res.end(response)
    }
});

export default router;