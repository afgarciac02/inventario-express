import { product } from "../types";
import {connect} from '../app';


export const getProduct = async () => {
    try {
        const conn = await connect();
        const product =  await conn.query('SELECT * FROM product');
        const response = JSON.stringify(product[0]);
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
        const response = JSON.stringify(product[0]);
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
        const response = JSON.stringify(product[0]);
        return response;
    } catch (error) {
        console.log(error);
    }
    return false;
}

export const addProduct = async (product: product) => {
    try {
        const conn = await connect();
        let sql = 'insert into inventory.product(name, brand, quantity, price) values ("'+product.name+'", "'+product.brand+'", '+product.quantity+', '+product.price+')';
        const queryresponse =  await conn.query(sql);
        const res = JSON.stringify(queryresponse);
        return res? 'insert' : res 
    } catch (error) {
        console.log(error);
    }
    return false;
}

export const deleteProduct = async (id:number) => {
    try {
        const conn = await connect();
        let sql = 'delete from product where id =' + id
        const queryresponse =  await conn.query(sql);
        const res = JSON.stringify(queryresponse);
        return res? 'delete' : res 
    } catch (error) {
        console.log(error);
    }
    return false;
}

export const updateProduct = async (product: product) => {
    try {
        const conn = await connect();
        let sql = "UPDATE product SET brand='"+product.brand+"', name='"+product.name+"', price="+product.price+", quantity="+product.quantity+" WHERE id=" + product.id
        const queryresponse =  await conn.query(sql);
        const res = JSON.stringify(queryresponse);
        return res? 'update' : res 
    } catch (error) {
        console.log(error);
    }
    return false;
}