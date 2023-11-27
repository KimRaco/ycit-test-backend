import express from  'express';
import routerEmployees from './routers/employees.router.js';
import cors from 'cors'



const server = express();

server.use(express.json());
server.use(cors());

server.get('/', (req, res) => res.json('YoContigo Test server'));
server.use('/employees', routerEmployees);




export { server }