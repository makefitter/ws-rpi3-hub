import pyConfig from '../../../config/pyConfig';
import { PythonShell } from 'python-shell';
const toFile = require('../../scripts/writeToFile');
export default (scriptPath,fileName, io) => {

    toFile.clean('');
// Just for RPI3 INCLUDE:
delete pyConfig.pythonPath;
    PythonShell.run(scriptPath , pyConfig, function (err) {

            if (err) {
               return false;
            }
            return true;
        }).on('message', function (message) {
	let _json={}; 
	try{
            _json = JSON.parse(message);
            console.log('scriptLog:',_json);
		}
catch(err){
	_json = {};
}
           toFile.write(message,fileName);
            io.emit('message', _json);
        })
        .end(function (err,code,signal) {
            if (err) throw err;
            io.emit('scriptFinished',null);
            console.log('The exit code was: ' + code);
            console.log('The exit signal was: ' + signal);
            console.log('finished');
          });
};