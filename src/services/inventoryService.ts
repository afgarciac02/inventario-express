import { inventory } from "../types";
import {connect} from '../app'

export const getInventory = async () => {
    try {
        const conn = await connect();
        const inventory =  await conn.query('SELECT * FROM inventory');
        const response = inventory[0];
        return response;
    } catch (error) {
        console.log(error);
    }
    return false;
}

export const getInventoryById =async (id:number) => {
    try {
        const conn = await connect();
        const inventory =  await conn.query('SELECT * FROM person WHERE id = ' + id);
        const response = inventory[0];
        return response;
    } catch (error) {
        console.log(error);
    }
    return false;
}

export const getInventoryByName =async (name:string) => {
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

export const addInventory = async (inventory: inventory) => {
    try {
        const conn = await connect();
        let sql = 'INSERT INTO inventory.inventory (name) VALUE ("'+ inventory.name +'")'
        console.log(sql);
        const queryresponse =  await conn.query(sql);
        // const response = queryresponse[0];
        return queryresponse
    } catch (error) {
        console.log(error);
    }
    return false;
}