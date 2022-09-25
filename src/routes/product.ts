import  express  from "express";
import * as productService from '../services/productServices';
import { product } from "../types";

const router = express.Router();

router.get('/', async (_req, res) => {
    let inventory = await productService.getProduct()
    if (inventory) {
        res.json(inventory)   
        .setHeader('Content-Type', 'application/json')
        .sendStatus(200);
    }
});

router.get('/id/:id', async (req, res) => {

    let response = await productService.getProductById(parseInt(req.params.id));
    if (response && req.params.id) {
        res.json(response)
        .setHeader('Content-Type', 'application/json')
        .sendStatus(200);
    }

})

router.get('/name/:name', async (req, res) => {
    
        let response = await productService.getProductByName(req.params.name);
        if(response && req.params.name){
            res.json(response)
            .setHeader('Content-Type', 'application/json')
            .sendStatus(200);
        }

})

router.post('/create/:name', async (req, res) => {
    let newProduct: product = { name: req.params.name, brand: '', price: 0 , quantity: ''  };
    let response = await productService.addProduct(newProduct);
    if(response && req.params.name){
        res.json(response)
        .setHeader('Content-Type', 'application/json')
        .sendStatus(200);
    }
    
})

export default router;