
class HomeController implements ng.IController {
    
    static $inject = [];
    welcome: string = 'hello ng';
    users: any;
    constructor(){}
}

export class HomeComponent implements ng.IComponentOptions {
    static NAME: string = 'homeView';
    controller: any;
    templateUrl: any;
    constructor() {
        this.controller = HomeController;
        this.templateUrl = require('./home.html');
    }
}