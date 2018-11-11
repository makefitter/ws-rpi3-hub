import models from '../../../models';
import errorHandling from '../../scripts/errorHandling';

const auth = require('../../scripts/auth');
const sequelize = require('../../../models/index').sequelize;

module.exports = (req, res) => {
    
    auth([
        'user'
    ], req, res, (err, check) => {

        let response = {};
        if (err) res.status(400).json(errorHandling(err));

        else if (check) {
            let name = Date.now() + '_' + req.body.email;
            sequelize.transaction((t) => {
                return models.User.findOne({
                    where: {
                        email: req.body.email
                    }
                }, {
                    transaction: t
                }).then((user) => {

                    return models.UserData.create({
                        context: req.body.context,
                        age: req.body.age,
                        height: req.body.height,
                        weight: req.body.weight,
                        gender: req.body.gender,
                        email: req.body.email,
                        additionalNotes: req.body.additionalNotes,
                        fileName: name,
                        userId: user.id
                    }, {
                        transaction: t
                    }).then((data) => {

                        if (data) {
                            response.message = 'User data created successfully';
                            response.data = data;
                            res.status(201).json(response);
                        } else {
                            response.message = 'User data is not created';
                            response.data = null;
                            res.status(400).json(response);
                        }
                    }).catch((err) => {
                        res.status(400).json(errorHandling(err));
                    });
                }).catch((err) => {
                    res.status(400).json(errorHandling(err));
                });
            }).catch((err) => {
                res.status(400).json(errorHandling(err));
            });
        } else if (!check) {
            response.message = 'Invalid token';
            res.status(406).json(response);
        }
    });
};