"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const productService = __importStar(require("../services/productServices"));
const router = express_1.default.Router();
router.get('/', (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let product = yield productService.getProduct();
    if (product) {
        res.setHeader('Content-Type', 'application/json')
            .writeHead(200)
            .write(product);
        res.end(product);
    }
}));
router.get('/id/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let response = yield productService.getProductById(parseInt(req.params.id));
    if (response && req.params.id) {
        res.setHeader('Content-Type', 'application/json')
            .writeHead(200)
            .write(response);
        res.end(response);
    }
}));
router.get('/name/:name', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let response = yield productService.getProductByName(req.params.name);
    if (response && req.params.name) {
        res.setHeader('Content-Type', 'application/json')
            .writeHead(200)
            .write(response);
        res.end(response);
    }
}));
router.post('/create', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let newProduct = { name: req.body.name, brand: req.body.brand, price: req.body.price, quantity: req.body.quantity };
    let response = yield productService.addProduct(newProduct);
    if (response && req.body) {
        res.setHeader('Content-Type', 'application/json')
            .writeHead(200)
            .write(response);
        res.end(response);
    }
}));
router.delete('/delete/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let response = yield productService.deleteProduct(parseInt(req.params.id));
    if (response && req.params.id) {
        res.setHeader('Content-Type', 'application/json')
            .writeHead(200)
            .write(response);
        res.end(response);
    }
}));
router.post('/update/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let response = yield productService.updateProduct(parseInt(req.params.id));
    if (response && req.params.id) {
        res.setHeader('Content-Type', 'application/json')
            .writeHead(200)
            .write(response);
        res.end(response);
    }
}));
exports.default = router;
