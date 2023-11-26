import express from  'express';
import routerEmployees from './routers/employees.router.js';



const server = express();

server.use(express.json());

server.get('/', (req, res) => res.json('YoContigo Test server'));
server.use('/employees', routerEmployees);




export { server }