/*eslint-disable*/
import express from 'express';
import rootRequireDef from './utils/rootRequire';
import chalk from 'chalk';
import middleware from './config/middleware';
import routeHandling from './src/scripts/routeHandling';
import pyConfig from './config/pyConfig';
import http from 'http';
import socket from 'socket.io';
rootRequireDef(); //initializing function
let Router = rootRequire('src/router');
let app = express();
middleware(app, express);
routeHandling(app, Router);

var server = http.createServer(app);  
var io = socket(server);

/****ESLint Config****/
/*eslint no-undef: "off"*/
/*eslint-env node*/
import {
    PythonShell
} from 'python-shell';


let options = pyConfig;
// let test = new PythonShell('writeToConsole.py', options);
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
