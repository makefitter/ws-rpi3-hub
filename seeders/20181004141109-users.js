'use strict';
var bcrypt = require('bcryptjs');
module.exports = {
    up: (queryInterface, Sequelize) => {
        const salt = bcrypt.genSaltSync();
        return queryInterface.bulkInsert('User', [{
                "name": "Edin",
                "surname": "Golubovic",
                "email": "edin@inovatink.com",
                "password": bcrypt.hashSync('7166', salt),
            },
            {
                "name": "Semir",
                "surname": "Salkic",
                "email": "semir.salkic1@gmail.com",
                "password": bcrypt.hashSync('8731', salt),
            },
        ], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('User', null, {});
    }
};
