import  express  from "express";
import * as productService from '../services/productServices';
import { product } from "../types";

const router = express.Router();

router.get('/', async (_req, res) => {
    let product = await productService.getProduct()
    if (product) {
        res.setHeader('Content-Type', 'application/json')
        .writeHead(200)
        .write(product)
        res.end(product)
    }
});

router.get('/id/:id', async (req, res) => {

    let response = await productService.getProductById(parseInt(req.params.id));
    if (response && req.params.id) {
        res.setHeader('Content-Type', 'application/json')
        .writeHead(200)
        .write(response)
        res.end(response)
    }

})

router.get('/name/:name', async (req, res) => {
    
        let response = await productService.getProductByName(req.params.name);
        if(response && req.params.name){
            res.setHeader('Content-Type', 'application/json')
            .writeHead(200)
            .write(response)
            res.end(response)
        }

})

router.post('/create', async (req, res) => {
    let newProduct: product = { name: req.body.name, brand: req.body.brand, price: req.body.price , quantity: req.body.quantity  };
    let response = await productService.addProduct(newProduct);
    if(response && req.body){
        res.setHeader('Content-Type', 'application/json')
        .writeHead(200)
        .write(response)
        res.end(response)
    }
    
})

router.delete('/delete/:id',async (req, res) => {
    let response = await productService.deleteProduct(parseInt(req.params.id));
    if(response && req.params.id){
        res.setHeader('Content-Type', 'application/json')
        .writeHead(200)
        .write(response)
        res.end(response)
    }
})

router.post('/update/:id',async (req, res) => {
    let response = await productService.updateProduct(parseInt(req.params.id));
    if(response && req.params.id){
        res.setHeader('Content-Type', 'application/json')
        .writeHead(200)
        .write(response)
        res.end(response)
    }
});

export default router;