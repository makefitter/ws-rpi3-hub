/*eslint-disable*/
import express from 'express';
import rootRequireDef from './utils/rootRequire';
import chalk from 'chalk';
import middleware from './config/middleware';
import routeHandling from './src/scripts/routeHandling';
rootRequireDef(); //initializing function
let Router = rootRequire('src/router');
let app = express();
middleware(app, express);
routeHandling(app, Router);

/****ESLint Config****/
/*eslint no-undef: "off"*/
/*eslint-env node*/
import {
    PythonShell
} from 'python-shell';


let options = {
    mode: 'text',
    encoding: 'utf8',
    /*eslint-disable-next-line*/
    pythonPath: "C:\\Program Files (x86)\\Microsoft Visual Studio\\Shared\\Python36_64\\python.exe",
    pythonOptions: ['-u'], // get print results in real-time
    scriptPath: './src/scripts/python',
    args: ['hello world']
};
// let test = new PythonShell('test.py', options);
// test.on('message',function(message){
// console.log(message);
// })
PythonShell.run('test.py', options, function (err) {
    if (err) throw err;
    console.log('finished');
}).on('message', function(message){
    console.log(message);
})
const PORT = process.env.PORT || 3000;

export default app.listen(PORT, function () {
    //eslint-disable-next-line no-console
    console.log(chalk.bgBlue.whiteBright.bold("Listening on port: " + PORT + " "));
});