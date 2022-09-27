import express  from "express";
import * as personService from '../services/personService';
import { person } from "../types";

const router = express.Router();

router.get('/', async (_req, res) => {
    let person = await personService.getPerson()
    if (person) {
        res.setHeader('Content-Type', 'application/json')
        .writeHead(200)
        .write(person)
        res.end(person)
    }
});

router.get('/id/:id', async (req, res) => {

    let response = await personService.getPersonById(parseInt(req.params.id));
    if (response && req.params.id) {
        res.setHeader('Content-Type', 'application/json')
        .writeHead(200)
        .write(response)
        res.end(response)
    }

})

router.get('/name/:name', async (req, res) => {
    
        let response = await personService.getPersonByName(req.params.name);
        if(response && req.params.name){
            res.setHeader('Content-Type', 'application/json')
            .writeHead(200)
            .write(response)
            res.end(response)
        }

})

router.post('/create', async (req, res) => {
    console.log(req.body);
    let newPerson: person = { id: 0, name: req.body.name, address: req.body.address, mail: req.body.mail, phone: req.body.phone, rol: req.body.rol, sex: req.body.sex };
    let response = await personService.addPerson(newPerson);
    if(response){
        res.setHeader('Content-Type', 'application/json')
        .writeHead(200)
        .write(response)
        res.end(response)
    }
    
})

export default router;