import { createPool } from 'mysql2/promise';
require('dotenv').config()

export async function connect () {
    const connection = await createPool({
        host     : process.env.HOST,
        database : process.env.DATABASE,
        user     : process.env.USER,
        password : process.env.PASSWORD,
    });
    
    return connection;
}
