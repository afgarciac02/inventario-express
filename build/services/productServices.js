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
exports.addProduct = exports.getProductByName = exports.getProductById = exports.getProduct = void 0;
const app_1 = require("../app");
const getProduct = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const conn = yield (0, app_1.connect)();
        const inventory = yield conn.query('SELECT * FROM product');
        const response = inventory[0];
        return response;
    }
    catch (error) {
        console.log(error);
    }
    return false;
});
exports.getProduct = getProduct;
const getProductById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const conn = yield (0, app_1.connect)();
        const inventory = yield conn.query('SELECT * FROM product WHERE id = ' + id);
        const response = inventory[0];
        return response;
    }
    catch (error) {
        console.log(error);
    }
    return false;
});
exports.getProductById = getProductById;
const getProductByName = (name) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const conn = yield (0, app_1.connect)();
        const inventory = yield conn.query('SELECT * FROM product WHERE name = ' + name);
        const response = inventory[0];
        return response;
    }
    catch (error) {
        console.log(error);
    }
    return false;
});
exports.getProductByName = getProductByName;
const addProduct = (inventory) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log('inventory ' + inventory.name);
        const conn = yield (0, app_1.connect)();
        let sql = 'INSERT INTO inventory.product (name) VALUE ("' + inventory.name + '")';
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
exports.addProduct = addProduct;
