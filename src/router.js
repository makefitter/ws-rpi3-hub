/*eslint no-undef: "off"*/
module.exports = [{
        path: '/',
        handler: rootRequire('src/routes/IndexRoute'),
    },
    {
        path: '/login',
        handler: rootRequire('src/routes/LoginRoute'),
    },
    {
        path: '/user',
        handler: rootRequire('src/routes/UserRoute'),
    },
    {
        path: '/cloud',
        handler: rootRequire('src/routes/CloudRoute'),
    },
];