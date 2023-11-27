import express from  'express';
import routerEmployees from './routers/employees.router.js';
import cors from 'cors'



const server = express();

server.use(express.json());
//server.use(cors());
server.use(
    cors({
      origin: process.env.ORIGIN,
    }),
  )

server.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'https://ycit-test-frontend.vercel.app');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
  });

server.get('/', (req, res) => res.json('YoContigo Test server'));
server.use('/employees', routerEmployees);




export { server }