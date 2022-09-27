import { inventory } from "../types";
import {connect} from '../app'

export const getInventory = async () => {
    try {
        const conn = await connect();
        const inventory =  await conn.query('SELECT * FROM inventory');
        const response = JSON.stringify(inventory);
        return response;
    } catch (error) {
        console.log(error);
    }
    return false;
}

export const getInventoryById =async (id:number) => {
    try {
        const conn = await connect();
        const inventory =  await conn.query('SELECT * FROM inventory WHERE id = ' + id);
        const response = JSON.stringify(inventory);
        return response;
    } catch (error) {
        console.log(error);
    }
    return false;
}

export const getInventoryByName =async (name:string) => {
    try {
        const conn = await connect();
        const inventory =  await conn.query('SELECT * FROM inventory WHERE name = "' + name +'"');
        const response = JSON.stringify(inventory);
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
        const queryresponse =  await conn.query(sql);
        return JSON.stringify(queryresponse)
    } catch (error) {
        console.log(error);
    }
    return false;
}