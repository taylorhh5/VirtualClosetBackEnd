const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const userRouter = require('./routing/user-routes.js')
const closetRouter = require('./routing/closet-routes.js')

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/api/users', userRouter);
server.use('/api/closet', closetRouter);



module.exports = server;
