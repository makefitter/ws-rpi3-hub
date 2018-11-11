// import fs from 'fs';
// const constants = require('../../utils/constants').PATHS;
// let _return = {};

// _return.write = (data, fileName) => {
//     fs.appendFile((constants.log + fileName + '.txt'), (data + "\r\n"), (err) => {
//         if (err) console.log(err);
//         console.log("Successfully Written to File!");
//     });
// };
// _return.clean = (name) => {
//     console.log('name:', name);
//     fs.writeFile((constants.log + name + '.txt'), (''), (err) => {
//         if (err) console.log(err);
//         console.log("File cleaned");
//     });
// };

// module.exports = _return;