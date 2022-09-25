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
exports.addPerson = exports.getPersonByName = exports.getPersonById = exports.getPerson = void 0;
const app_1 = require("../app");
const getPerson = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const conn = yield (0, app_1.connect)();
        const inventory = yield conn.query('SELECT * FROM person');
        const response = inventory[0];
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
        const inventory = yield conn.query('SELECT * FROM person WHERE id = ' + id);
        const response = inventory[0];
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
        const inventory = yield conn.query('SELECT * FROM person WHERE name = ' + name);
        const response = inventory[0];
        return response;
    }
    catch (error) {
        console.log(error);
    }
    return false;
});
exports.getPersonByName = getPersonByName;
const addPerson = (inventory) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log('inventory ' + inventory.name);
        const conn = yield (0, app_1.connect)();
        let sql = 'INSERT INTO inventory.person (name) VALUE ("' + inventory.name + '")';
        console.log(sql);
        const queryresponse = yield conn.query(sql);
        // const response = queryresponse[0];
        return queryresponse;
    }
    catch (error) {
        console.log(error);
    }
    return false;
});
exports.addPerson = addPerson;
