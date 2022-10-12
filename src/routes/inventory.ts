import express from "express";
import * as inventoryService from '../services/inventoryService';
import { inventory } from "../types";

const router = express.Router();

router.get('/', async (_req, res) => {
    let inventory = await inventoryService.getInventory()
    if (inventory) {
        res.setHeader('Content-Type', 'application/json')
            .setHeader('Access-Control-Allow-Origin', '*')
            .setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
            .setHeader('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method')
            .setHeader('Allow', 'GET, POST, OPTIONS, PUT, DELETE')
            .setHeader('Access-Control-Allow-Credentials', 'true')
            .writeHead(200)
        res.end(inventory)
    }
});

router.get('/id/:id', async (req, res) => {

    let response = await inventoryService.getInventoryById(parseInt(req.params.id));
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

    let response = await inventoryService.getInventoryByName(req.params.name);
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

router.post('/create/:name', async (req, res) => {
    let newInventary: inventory = { id: 0, name: req.params.name };
    let response = await inventoryService.addInventory(newInventary);
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

router.delete('/delete/:id', async (req, res) => {
    let response = await inventoryService.deleteInventory(parseInt(req.params.id));
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
    let inventory: inventory = { id: parseInt(req.body.id), name: req.body.name, }
    let response = await inventoryService.updateInventory(inventory);
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