import express from  'express';



const server = express();

server.use(express.json());

server.get('/', (req, res) => res.json('Dev.to clon server'));




export { server }