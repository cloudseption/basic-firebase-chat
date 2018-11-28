const log       = require('log4js').getLogger();

function onDisconnect(socket) {
    log.trace(`A user disconnected`);
}

module.exports = onDisconnect;