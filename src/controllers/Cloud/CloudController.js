'use strict';
module.exports = {
    connectWs: {
        put(req, res) {
            require('./connectWs')(req, res);
        },
    },
    disconnectWs: {
        get(req, res) {
            require('./disconnectWs')(req, res);
        },
    },
    create: {
        post(req, res) {
            require('./createPost')(req, res);
        },
    },
};