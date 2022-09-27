import { product } from "../types";
import {connect} from '../app';


export const getProduct = async () => {
    try {
        const conn = await connect();
        const product =  await conn.query('SELECT * FROM product');
        const response = JSON.stringify(product);
        return response;
    } catch (error) {
        console.log(error);
    }
    return false;
} 

export const getProductById =async (id:number) => {
    try {
        const conn = await connect();
        const product =  await conn.query('SELECT * FROM product WHERE id = ' + id);
        const response = JSON.stringify(product);
        return response;
    } catch (error) {
        console.log(error);
    }
    return false
}

export const getProductByName =async (name:string) => {
    try {
        const conn = await connect();
        const product =  await conn.query('SELECT * FROM product WHERE name = "' + name+ '"');
        const response = JSON.stringify(product);
        return response;
    } catch (error) {
        console.log(error);
    }
    return false;
}

export const addProduct = async (product: product) => {
    try {
        const conn = await connect();
        let sql = 'insert into inventory.product(name, brand, quantity, price) values ("'+product.name+'", "'+product.brand+'", '+product.quantity+', '+product.price+')'
        const queryresponse =  await conn.query(sql);
        return JSON.stringify(queryresponse)
    } catch (error) {
        console.log(error);
    }
    return false;
}