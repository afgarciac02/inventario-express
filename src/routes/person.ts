import express from "express";
import * as personService from '../services/personService';
import { person } from "../types";

const router = express.Router();

router.get('/', async (_req, res) => {
    let person = await personService.getPerson()
    if (person) {
        res.setHeader('Content-Type', 'application/json')
            .setHeader('Access-Control-Allow-Origin', '*')
            .setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
            .setHeader('Access-Control-Allow-Headers', 'Content-Type')
            .setHeader('Access-Control-Allow-Credentials', 'true')
            .writeHead(200)
        res.end(person)
    }
});

router.get('/id/:id', async (req, res) => {

    let response = await personService.getPersonById(parseInt(req.params.id));
    if (response && req.params.id) {
        res.setHeader('Content-Type', 'application/json')
            .setHeader('Access-Control-Allow-Origin', '*')
            .setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
            .setHeader('Access-Control-Allow-Headers', 'Content-Type')
            .setHeader('Access-Control-Allow-Credentials', 'true')
            .writeHead(200)
        res.end(response)
    }

})

router.get('/name/:name', async (req, res) => {

    let response = await personService.getPersonByName(req.params.name);
    if (response && req.params.name) {
        res.setHeader('Content-Type', 'application/json')
            .setHeader('Access-Control-Allow-Origin', '*')
            .setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
            .setHeader('Access-Control-Allow-Headers', 'Content-Type')
            .setHeader('Access-Control-Allow-Credentials', 'true')
            .writeHead(200)
        res.end(response)
    }

})

router.post('/create', async (req, res) => {
    console.log(req.body);
    let newPerson: person = { id: 0, name: req.body.name, address: req.body.address, mail: req.body.mail, phone: req.body.phone, rol: req.body.rol, sex: req.body.sex };
    let response = await personService.addPerson(newPerson);
    if (response) {
        res.setHeader('Content-Type', 'application/json')
            .setHeader('Access-Control-Allow-Origin', '*')
            .setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
            .setHeader('Access-Control-Allow-Headers', 'Content-Type')
            .setHeader('Access-Control-Allow-Credentials', 'true')
            .writeHead(200)
        res.end(response)
    }

})

router.delete('/delete/:id', async (req, res) => {
    let response = await personService.deletePerson(parseInt(req.params.id));
    if (response && req.params.id) {
        res.setHeader('Content-Type', 'application/json')
            .setHeader('Access-Control-Allow-Origin', '*')
            .setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
            .setHeader('Access-Control-Allow-Headers', 'Content-Type')
            .setHeader('Access-Control-Allow-Credentials', 'true')
            .writeHead(200)
        res.end(response)
    }
})

router.post('/update', async (req, res) => {
    let person: person = { id: req.body.id, address: req.body.address, mail: req.body.mail, name: req.body.name, phone: req.body.phone, rol: req.body.rol, sex: req.body.sex }
    let response = await personService.updatePerson(person);
    if (response && req.body.id) {
        res.setHeader('Content-Type', 'application/json')
            .setHeader('Access-Control-Allow-Origin', '*')
            .setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
            .setHeader('Access-Control-Allow-Headers', 'Content-Type')
            .setHeader('Access-Control-Allow-Credentials', 'true')
            .writeHead(200)
        res.end(response)
    }
});

export default router;