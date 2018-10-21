import { PythonShell } from 'python-shell';
import pyConfig from '../../../config/pyConfig'
module.exports = (req, res) => {

    console.log(req.body);
  //  pyConfig.scriptPath = '../../../src/scripts/python';
        PythonShell.run('test.py', pyConfig, function (err) {
            if (err) throw err;
            console.log('finished');
        }).on('message', function(message){
            res.status(200).json(message);
        })
};