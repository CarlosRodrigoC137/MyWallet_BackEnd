import express, { json } from "express";
import cors from "cors";
import { signIn, signUp } from "./controllers/authController.js";
import { getTransactions, postTransactions } from "./controllers/userController.js";

const server = express();
server.use(cors());
server.use(json());

server.post("/sign-up", signUp)

server.post("/", signIn);

server.get("/transaction-record", getTransactions);

server.post("/sendTransaction", postTransactions)

server.listen(process.env.PORT, ()=>{
    console.log(`Listening on port ${process.env.PORT}`)
});