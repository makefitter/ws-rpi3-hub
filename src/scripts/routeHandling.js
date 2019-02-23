const constants = require('../../utils/constants').PATHS;
module.exports = function (app, Router) {
    Router.forEach(route => {
       if (route.path !== '/') {
            app.use('/api' + route.path, route.handler);
       }
    });
    app.get('*', function (req, res) {
        res.sendFile(constants.root + '/graph.html');
    });
    app.use("/*", function (req, res) {
        res.status(404).json({
            message: 'Non-existing route'
        });
    });
};