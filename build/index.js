"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
const PORT = 3000;
app.get('/ping', (_req, res) => {
    console.log('somene pigned here!!' + new Date().toLocaleDateString());
    res.send('pong');
});
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
// app.get('/getInventary',(req, res)=>{
//     res.send('res');
// })
// app.post('/setElement',(req, res)=>{
//     console.log('ingreso = ',req);
//     res.send('agregado con exito');
// });
// app.get('/getElemento', (req, res)=>{
//     res.send('element');
// })
// app.get('/login', (req, res) => {
// })
