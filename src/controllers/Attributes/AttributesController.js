'use strict';
module.exports = {
    calculate: {
        get(req, res) {
            require('./calculate')(req, res);
        },
    },
};