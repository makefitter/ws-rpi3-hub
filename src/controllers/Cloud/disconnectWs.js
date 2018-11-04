import connectScript from './connectScript';
module.exports = (req, res) => {

    const io = req.app.get('io');


    let response = {};
    try {
        
        connectScript('disconnect.py', io);
    } catch (err) {
        response.message = 'Script not stopped';
        res.status(404).json(response);

    }
    response.message = 'Script successfully stopped';
    res.status(200).json(response);

};