// ============================
// REQUIREMENTS
// ============================
require('dotenv').config();
const log           = require('log4js').getLogger();
const PORT          = process.env.PORT || 8080;
log.level           = process.env.LOG_LEVEL || 'trace';

// Utilities
const path          = require('path');

// Server Connection Things
const express       = require('express');
const http          = require('http');
const socketIo      = require('socket.io');
const socketFuncs   = require('./socket/index');

// ============================
// REQUIREMENTS
// ============================
// Set up ApplicationServer
const app           = express();
const httpServer    = http.Server(app);
const ioServer      = socketIo(httpServer);

// API Endpoints
app.use('/', express.static(path.resolve(`${__dirname}/../../react-chat/build`)));

// Socket Setup
ioServer.on('connection', socketFuncs.connect);

httpServer.listen(PORT, () => { log.info(`Listening on port ${PORT}`) })