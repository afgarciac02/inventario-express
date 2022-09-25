import { product } from "../types";
import {connect} from '../app';


export const getProduct = async () => {
    try {
        const conn = await connect();
        const inventory =  await conn.query('SELECT * FROM product');
        const response = inventory[0];
        return response;
    } catch (error) {
        console.log(error);
    }
    return false;
} 

export const getProductById =async (id:number) => {
    try {
        const conn = await connect();
        const inventory =  await conn.query('SELECT * FROM product WHERE id = ' + id);
        const response = inventory[0];
        return response;
    } catch (error) {
        console.log(error);
    }
    return false
}

export const getProductByName =async (name:string) => {
    try {
        const conn = await connect();
        const inventory =  await conn.query('SELECT * FROM product WHERE name = ' + name);
        const response = inventory[0];
        return response;
    } catch (error) {
        console.log(error);
    }
    return false;
}

export const addProduct = async (inventory: product) => {
    try {
        console.log('inventory '+inventory.name);
        const conn = await connect();
        let sql = 'INSERT INTO inventory.product (name) VALUE ("'+ inventory.name +'")'
        console.log(sql);
        
        const queryresponse =  await conn.query(sql);
        // const response = queryresponse[0];
        return queryresponse
    } catch (error) {
        console.log(error);
    }
    return false;
}