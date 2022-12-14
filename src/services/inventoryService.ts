import { inventory } from "../types";
import {connect} from '../app'

export const getInventory = async () => {
    try {
        const conn = await connect();
        const inventory =  await conn.query('SELECT * FROM inventory');
        const response = JSON.stringify(inventory[0]);
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
        const response = JSON.stringify(inventory[0]);
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
        const response = JSON.stringify(inventory[0]);
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
        const res = JSON.stringify(queryresponse);
        return res? 'insert' : res 
    } catch (error) {
        console.log(error);
    }
    return false;
}

export const deleteInventory = async (id:number) => {
    try {
        const conn = await connect();
        let sql = 'delete from inventory.inventory where id =' + id
        const queryresponse =  await conn.query(sql);
        const res = JSON.stringify(queryresponse);
        return res? 'delete' : res 
    } catch (error) {
        console.log(error);
    }
    return false;
}

export const updateInventory = async (inventory: inventory) => {
    try {
        const conn = await connect();
        let sql = "UPDATE inventory.inventory SET name='"+inventory.name+"' WHERE id =" + inventory.id
        const queryresponse =  await conn.query(sql);
        const res = JSON.stringify(queryresponse);
        return res? 'update' : res 
    } catch (error) {
        console.log(error);
    }
    return false;
}