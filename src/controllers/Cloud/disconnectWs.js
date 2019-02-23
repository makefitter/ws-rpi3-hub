import pyConfig from '../../../config/pyConfig';
import { PythonShell } from 'python-shell';
import os from 'os';
module.exports = (req, res) => {

    const io = req.app.get('io');
    let response = {};

    try {
        pyConfig.args = [req.body.name];
        let script = '';

        if(os.platform() === 'win32'){
            script = 'disconnectTest.py';
        }
        else if(os.platform() === 'linux'){
            script = 'disconnectPI.py';
        }
        
        PythonShell.run(script, pyConfig, function (err) {
                if (err) {
                    console.log(JSON.stringify(err));
                    throw err;
                }
            }).on('message', function (message) {
                let _json = {};
                try {
                    _json = JSON.parse(message);
                } catch (err) {
                    _json = {
                        message: message
                    };
                }
                io.emit('disconnect_message', _json);
            })
            .end(function (err, code, signal) {
                if (err) throw err;
                io.emit('scriptFinished', null);
                console.warn('The exit code was: ' + code + '. The exit signal was: ' + signal + '.');
            });
    } catch (err) {
        response.message = 'Script not started';
        response.err = JSON.stringify(err);
        res.status(404).json(response);
    }
    response.message = 'Script successfully started';
    res.status(200).json(response);

};