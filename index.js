import dbConnect from "./src/db.js";
import { server } from "./src/server.js";
import * as dotenv from "dotenv";

dotenv.config();

const {SERVER_PORT} = process.env
const port = SERVER_PORT || 8080

dbConnect()
  .then(() => {
    server.listen(port, () => {
      console.log(`Server listening on port ${port}`);
    });
  })
  .catch(err => {
    console.log(err);
  });