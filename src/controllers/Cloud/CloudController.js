'use strict';
module.exports = {
    create: {
        post(req, res) {
            require('./createPost')(req, res);
        },
    },
    read: {
        get(req, res) {
            require('./readGet')(req, res);
        },
    },
    all: {
        get(req, res) {
            require('./allGet')(req, res);
        },
    },
};