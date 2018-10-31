/*eslint-disable*/
import express from 'express';
import rootRequireDef from './utils/rootRequire';
import chalk from 'chalk';
import middleware from './config/middleware';
import routeHandling from './src/scripts/routeHandling';
import _socket from './src/scripts/eventBroadcaster';

const PORT = process.env.PORT || 3000;
rootRequireDef(); //initializing function
let Router = rootRequire('src/router');
let app = express();
let socket = _socket(app);
app.set('io',socket.io);
middleware(app, express);
routeHandling(app, Router);
/****ESLint Config****/
/*eslint no-undef: "off"*/
/*eslint-env node*/
// let options = pyConfig;
// let test = new PythonShell('writeToConsole.py', options);
// test.on('message',function(message){
// console.log(message);
// })

// PythonShell.run('scheduler.py', options, function (err) {
//     if (err) throw err;
//     console.log('finished');
// }).on('message', function(message){
//     console.log(message);
// })


export default socket.server.listen(PORT, function () {
    //eslint-disable-next-line no-console
    console.log(chalk.bgBlue.whiteBright.bold("Listening on port: " + PORT + " "));
});
