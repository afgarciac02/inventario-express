import express from "express";
import * as inventoryService from '../services/inventoryService';
import { inventory } from "../types";

const router = express.Router();

router.get('/', async (_req, res) => {
    let inventory = await inventoryService.getInventory()
    if (inventory) {
        res.json(inventory)   
        .setHeader('Content-Type', 'application/json')
        .sendStatus(200);
    }
});

router.get('/id/:id', async (req, res) => {

    let response = await inventoryService.getInventoryById(parseInt(req.params.id));
    if (response && req.params.id) {
        res.json(response)
        .setHeader('Content-Type', 'application/json')
        .sendStatus(200);
    }

})

router.get('/name/:name', async (req, res) => {
    
        let response = await inventoryService.getInventoryByName(req.params.name);
        if(response && req.params.name){
            res.json(response)
            .setHeader('Content-Type', 'application/json')
            .sendStatus(200);
        }

})

router.post('/create/:name', async (req, res) => {
    let newInventary: inventory = { id: 0, name: req.params.name };
    let response = await inventoryService.addInventory(newInventary);
    if(response && req.params.name){
        res.json(response)
        .setHeader('Content-Type', 'application/json')
        .sendStatus(200);
    }
    
})

export default router;