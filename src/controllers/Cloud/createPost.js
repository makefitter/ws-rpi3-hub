import models from '../../../models';
import errorHandling from '../../scripts/errorHandling';

module.exports = (req, res) => {

    let response = {};

    models.UserData.create({
        context: req.body.context,
        age: req.body.age,
        height: req.body.height,
        weight: req.body.weight,
        gender: req.body.gender,
        email: req.body.email,
        additionalNotes: req.body.additionalNotes
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
};