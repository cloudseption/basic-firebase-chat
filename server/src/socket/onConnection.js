const log                           = require('log4js').getLogger();
const attachBadgeBookUserToSocket   = require('./serverTokenHandler').attachBadgeBookUserToSocket;

function onConnection(socket) {
    log.trace(`A user connected`);
    try {
        let cookies     = socket.handshake.headers.cookie;
        let authRegExp  = new RegExp(`\\b${BADGEBOOK_COOKIE_NAME}=[\\w\\d\\+\\-\\.]*`);
        let authCookie  = authRegExp.exec(cookies)[0];
        token           = authCookie.split('authorization=')[1];
    } catch (err) {
        log.trace(`Not authorized`);
        return socket;
    }
}

module.exports = onConnection;