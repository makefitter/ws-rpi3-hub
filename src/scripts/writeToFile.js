import fs from 'fs';
const constants = require('../../utils/constants').PATHS;
let _return = {};
const _path = (constants.log +  'data.txt');

_return.write = (data) => {
    fs.appendFile(_path, (data + "\r\n"), (err) => {
        if (err) console.log(err);
        console.log("Successfully Written to File!");
    });
};
_return.clean = () => {
    fs.writeFile(_path, (''), (err) => {
        if (err) console.log(err);
        console.log("File cleaned");
    });
};

module.exports = _return;