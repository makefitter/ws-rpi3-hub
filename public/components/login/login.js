import angular from 'angular';
import template from './login.html';

class LoginCtrl {
    constructor($log) {
        // $log.info('HomeCtrl instantiated');
        this.title = 'Login Works!';
    }
}

LoginCtrl.$inject = ['$log'];

let login = {
    template: template,
    controller: LoginCtrl
};

const MODULE_NAME = 'login';

angular.module(MODULE_NAME, [])
    .component('login', login);

export default MODULE_NAME;