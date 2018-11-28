const log       = require('log4js').getLogger();

function onConnection(socket) {
    log.trace(`A user connected`);
}

module.exports = onConnection;