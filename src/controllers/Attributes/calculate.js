import pyConfig from '../../../config/pyConfig';
import {
    PythonShell
} from 'python-shell';
import os from 'os';
import fs from 'fs';
import path from 'path';
const constants = require('../../../utils/constants').PATHS;
module.exports = (req, res) => {

    const io = req.app.get('io');
    let response = {};
    console.log(req.query.file);

    try {
        console.log(req.query.file);
        pyConfig.args = [req.query.file];
        let script = '';

        if (os.platform() === 'win32') {
            script = 'ws_notebookTest.py';
        } else if (os.platform() === 'linux') {
            script = 'ws_notebook.py';
        }
        PythonShell.run(script, pyConfig, function (err) {
            if (err) {
                console.log(JSON.stringify(err));
                throw err;
            }
        }).end(function (err, code, signal) {
            if (err) throw err;
            response.message = 'Script finished';
            res.status(200).json(response);
            console.warn('The exit code was: ' + code + '. The exit signal was: ' + signal + '.');
        })
        .on('message', function (message) {
           console.log(message); 
        })
        
    } catch (err) {
        response.message = 'Script not started';
        response.err = JSON.stringify(err);
        res.status(404).json(response);
    }


};