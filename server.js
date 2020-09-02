const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const authRouter = require('./auth/auth-routes.js')
const userRouter = require('./routes/user-routes.js')
const closetRouter = require('./routes/closet-routes.js')


const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/api/users', authRouter);
server.use('/api/users', userRouter);
server.use('/api/closet', closetRouter);





module.exports = server;
