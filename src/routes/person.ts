import express  from "express";
import * as personService from '../services/personService';
import { person } from "../types";

const router = express.Router();

router.get('/', async (_req, res) => {
    let inventory = await personService.getPerson()
    if (inventory) {
        res.json(inventory)   
        .setHeader('Content-Type', 'application/json')
        .sendStatus(200);
    }
});

router.get('/id/:id', async (req, res) => {

    let response = await personService.getPersonById(parseInt(req.params.id));
    if (response && req.params.id) {
        res.json(response)
        .setHeader('Content-Type', 'application/json')
        .sendStatus(200);
    }

})

router.get('/name/:name', async (req, res) => {
    
        let response = await personService.getPersonByName(req.params.name);
        if(response && req.params.name){
            res.json(response)
            .setHeader('Content-Type', 'application/json')
            .sendStatus(200);
        }

})

router.post('/create/:name', async (req, res) => {
    let newPerson: person = { id: 0, name: req.params.name, address: '', mail: '', phone: 0, rol: 'admin', sex: '' };
    let response = await personService.addPerson(newPerson);
    if(response && req.params.name){
        res.json(response)
        .setHeader('Content-Type', 'application/json')
        .sendStatus(200);
    }
    
})

export default router;