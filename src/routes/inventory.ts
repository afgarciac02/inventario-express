import express from "express";
import * as inventoryService from '../services/inventoryService';
import { inventory } from "../types";

const router = express.Router();

router.get('/', async (_req, res) => {
    let inventory = await inventoryService.getInventory()
    if (inventory) {
        res.setHeader('Content-Type', 'application/json')
        .writeHead(200)
        .write(inventory)
        res.end(inventory)
    }
});

router.get('/id/:id', async (req, res) => {

    let response = await inventoryService.getInventoryById(parseInt(req.params.id));
    if (response && req.params.id) {
        res.setHeader('Content-Type', 'application/json')
        .writeHead(200)
        .write(response)
        res.end(response)
    }

})

router.get('/name/:name', async (req, res) => {
    
        let response = await inventoryService.getInventoryByName(req.params.name);
        if(response && req.params.name){
            res.setHeader('Content-Type', 'application/json')
            .writeHead(200)
            .write(response)
            res.end(response)
        }

})

router.post('/create/:name', async (req, res) => {
    let newInventary: inventory = { id: 0, name: req.params.name };
    let response = await inventoryService.addInventory(newInventary);
    if(response && req.params.name){
        res.setHeader('Content-Type', 'application/json')
        .writeHead(200)
        .write(response)
        res.end(response)
    }
    
})

export default router;