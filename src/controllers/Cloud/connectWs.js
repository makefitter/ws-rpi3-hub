import connectScript from './connectScript';
module.exports = (req, res) => {

    const io = req.app.get('io');


    let response = {};
    try {
    
        connectScript('scheduler.py',req.body.name, io);
    } catch (err) {
        response.message = 'Script not started';
        res.status(404).json(response);

    }
    response.message = 'Script successfully started';
    res.status(200).json(response);

};