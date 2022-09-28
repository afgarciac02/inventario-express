"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatePerson = exports.deletePerson = exports.addPerson = exports.getPersonByName = exports.getPersonById = exports.getPerson = void 0;
const app_1 = require("../app");
const getPerson = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const conn = yield (0, app_1.connect)();
        const persons = yield conn.query('SELECT * FROM person');
        const response = JSON.stringify(persons);
        return response;
    }
    catch (error) {
        console.log(error);
    }
    return false;
});
exports.getPerson = getPerson;
const getPersonById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const conn = yield (0, app_1.connect)();
        const persons = yield conn.query('SELECT * FROM person WHERE id = ' + id);
        const response = JSON.stringify(persons);
        return response;
    }
    catch (error) {
        console.log(error);
    }
    return false;
});
exports.getPersonById = getPersonById;
const getPersonByName = (name) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const conn = yield (0, app_1.connect)();
        const persons = yield conn.query('SELECT * FROM person WHERE name = "' + name + '"');
        const response = JSON.stringify(persons);
        return response;
    }
    catch (error) {
        console.log(error);
    }
    return false;
});
exports.getPersonByName = getPersonByName;
const addPerson = (person) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const conn = yield (0, app_1.connect)();
        let sql = 'insert into inventory.person(name, phone, mail, sex, role, address) values ("' + person.name + '", ' + person.phone + ',"' + person.mail + '", "' + person.sex + '", "' + person.rol + '", "' + person.address + '")';
        const queryresponse = yield conn.query(sql);
        return JSON.stringify(queryresponse);
    }
    catch (error) {
        console.log(error);
    }
    return false;
});
exports.addPerson = addPerson;
const deletePerson = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const conn = yield (0, app_1.connect)();
        let sql = 'delete from person where id =' + id;
        const queryresponse = yield conn.query(sql);
        return JSON.stringify(queryresponse);
    }
    catch (error) {
        console.log(error);
    }
    return false;
});
exports.deletePerson = deletePerson;
const updatePerson = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const conn = yield (0, app_1.connect)();
        let sql = "UPDATE alumnos SET curso='secundaria' WHERE curso='primaria'" + id;
        const queryresponse = yield conn.query(sql);
        return JSON.stringify(queryresponse);
    }
    catch (error) {
        console.log(error);
    }
    return false;
});
exports.updatePerson = updatePerson;
