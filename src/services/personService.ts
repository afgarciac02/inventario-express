import { person } from "../types";
import {connect} from '../app';

export const getPerson = async () => {
    try {
        const conn = await connect();
        const persons =  await conn.query('SELECT * FROM person');
        const response = JSON.stringify(persons[0]);
        return response;
    } catch (error) {
        console.log(error);
    }
    return false;
} 

export const getPersonById =async (id:number) => {
    try {
        const conn = await connect();
        const persons =  await conn.query('SELECT * FROM person WHERE id = ' + id);
        const response = JSON.stringify(persons[0]);
        return response;
    } catch (error) {
        console.log(error);
    }
    return false
}

export const getPersonByName =async (name:string) => {
    try {
        const conn = await connect();
        const persons =  await conn.query('SELECT * FROM person WHERE name = "' + name+'"');
        const response = JSON.stringify(persons[0]);
        return response;
    } catch (error) {
        console.log(error);
    }
    return false;
}

export const addPerson = async (person: person) => {
    try {
        const conn = await connect();
        let sql = 'insert into inventory.person(name, phone, mail, sex, role, address) values ("'+person.name+'", '+person.phone+',"'+person.mail+'", "'+person.sex+'", "'+person.rol+'", "'+person.address+'")'
        const queryresponse =  await conn.query(sql);
        const res = JSON.stringify(queryresponse);
        return res? 'insert' : res 
    } catch (error) {
        console.log(error);
    }
    return false;
}

export const deletePerson = async (id:number) => {
    try {
        const conn = await connect();
        let sql = 'delete from person where id =' + id
        const queryresponse =  await conn.query(sql);
        const res = JSON.stringify(queryresponse);
        return res? 'delete' : res 
    } catch (error) {
        console.log(error);
    }
    return false;
}

export const updatePerson = async (person: person) => {
    try {
        const conn = await connect();
        let sql = "UPDATE person SET address='"+person.address+"', mail='"+person.mail+"', name='"+person.name+"', sex='"+person.sex+"', phone="+person.phone+"  WHERE id=" + person.id
        const queryresponse =  await conn.query(sql);
        const res = JSON.stringify(queryresponse);
        return res? 'update' : res 
    } catch (error) {
        console.log(error);
    }
    return false;
}