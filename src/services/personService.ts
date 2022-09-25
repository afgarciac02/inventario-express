import { person } from "../types";
import {connect} from '../app';

export const getPerson = async () => {
    try {
        const conn = await connect();
        const inventory =  await conn.query('SELECT * FROM person');
        const response = inventory[0];
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
        const response = inventory[0];
        return response;
    } catch (error) {
        console.log(error);
    }
    return false
}

export const getPersonByName =async (name:string) => {
    try {
        const conn = await connect();
        const inventory =  await conn.query('SELECT * FROM person WHERE name = ' + name);
        const response = inventory[0];
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
        let sql = 'INSERT INTO inventory.person (name) VALUE ("'+ inventory.name +'")'
        console.log(sql);
        
        const queryresponse =  await conn.query(sql);
        // const response = queryresponse[0];
        return queryresponse
    } catch (error) {
        console.log(error);
    }
    return false;
}