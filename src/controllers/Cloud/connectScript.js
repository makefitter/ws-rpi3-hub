import pyConfig from '../../../config/pyConfig';
import {
    PythonShell
} from 'python-shell';
// const toFile '../../scripts/writeToFile';
const toFile = require('../../scripts/writeToFile');
export default (scriptPath, io) => {
    scriptPath = 'scheduler.py';
    toFile.clean();
    PythonShell.run(scriptPath, pyConfig, function (err) {

            if (err) {
               return false;
            }
            return true;
        }).on('message', function (message) {
            let _json = JSON.parse(message);
            console.log('scriptLog:',_json);
           toFile.write(message);
            io.emit('message', _json);
        });
};