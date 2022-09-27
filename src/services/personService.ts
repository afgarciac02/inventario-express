import { person } from "../types";
import {connect} from '../app';

export const getPerson = async () => {
    try {
        const conn = await connect();
        const inventory =  await conn.query('SELECT * FROM person');
        const response = JSON.stringify(inventory);
        return response;
    } catch (error) {
        console.log(error);
    }
    return false;
} 

export const getPersonById =async (id:number) => {
    try {
        const conn = await connect();
        const inventory =  await conn.query('SELECT * FROM person WHERE id = ' + id);
        const response = JSON.stringify(inventory);
        return response;
    } catch (error) {
        console.log(error);
    }
    return false
}

export const getPersonByName =async (name:string) => {
    try {
        const conn = await connect();
        const inventory =  await conn.query('SELECT * FROM person WHERE name = "' + name+'"');
        const response = JSON.stringify(inventory);
        return response;
    } catch (error) {
        console.log(error);
    }
    return false;
}

export const addPerson = async (inventory: person) => {
    try {
        console.log('inventory '+inventory.name);
        const conn = await connect();
        let sql = 'insert into inventory.person(name, phone, mail, sex, role, address) values ("'+inventory.name+'", '+inventory.phone+',"'+inventory.mail+'", "'+inventory.sex+'", "'+inventory.rol+'", "'+inventory.address+'")'
        const queryresponse =  await conn.query(sql);
        return JSON.stringify(queryresponse)
    } catch (error) {
        console.log(error);
    }
    return false;
}