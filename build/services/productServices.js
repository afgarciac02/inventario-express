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
exports.updateProduct = exports.deleteProduct = exports.addProduct = exports.getProductByName = exports.getProductById = exports.getProduct = void 0;
const app_1 = require("../app");
const getProduct = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const conn = yield (0, app_1.connect)();
        const product = yield conn.query('SELECT * FROM product');
        const response = JSON.stringify(product);
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
        const product = yield conn.query('SELECT * FROM product WHERE id = ' + id);
        const response = JSON.stringify(product);
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
        const product = yield conn.query('SELECT * FROM product WHERE name = "' + name + '"');
        const response = JSON.stringify(product);
        return response;
    }
    catch (error) {
        console.log(error);
    }
    return false;
});
exports.getProductByName = getProductByName;
const addProduct = (product) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const conn = yield (0, app_1.connect)();
        let sql = 'insert into inventory.product(name, brand, quantity, price) values ("' + product.name + '", "' + product.brand + '", ' + product.quantity + ', ' + product.price + ')';
        const queryresponse = yield conn.query(sql);
        return JSON.stringify(queryresponse);
    }
    catch (error) {
        console.log(error);
    }
    return false;
});
exports.addProduct = addProduct;
const deleteProduct = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const conn = yield (0, app_1.connect)();
        let sql = 'delete from product where id =' + id;
        const queryresponse = yield conn.query(sql);
        return JSON.stringify(queryresponse);
    }
    catch (error) {
        console.log(error);
    }
    return false;
});
exports.deleteProduct = deleteProduct;
const updateProduct = (id) => __awaiter(void 0, void 0, void 0, function* () {
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
exports.updateProduct = updateProduct;
