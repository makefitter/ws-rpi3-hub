/*eslint-disable*/
import express from 'express';
import rootRequireDef from './utils/rootRequire';
import chalk from 'chalk';
import middleware from './config/middleware';
import routeHandling from './src/scripts/routeHandling';
import _socket from './src/scripts/eventBroadcaster';
import pyConfig from './config/pyConfig';
import os from 'os';
const PORT = process.env.PORT || 3000;
rootRequireDef(); //initializing function

console.log('Process: ', os.platform());
if(os.platform() === 'linux'){
    delete pyConfig.pythonPath;
}

let Router = rootRequire('src/router');
let app = express();
let socket = _socket(app);
app.set('io',socket.io);
middleware(app, express);
routeHandling(app, Router);
/****ESLint Config****/
/*eslint no-undef: "off"*/
/*eslint-env node*/

export default socket.server.listen(PORT, function () {
    //eslint-disable-next-line no-console
    console.log(chalk.bgBlue.whiteBright.bold("Listening on port: " + PORT + " "));
});
