import { UserService } from "../services/user.services";

class HomeController implements ng.IController {
    
    static $inject = ['userService','$state'];
    welcome: string = 'hello ng';
    users: any;
    constructor(public home: UserService, public $state: ng.ui.IStateService) {
        this.home.getAll().then((data) => {
            this.users = data.data;
        });
    }
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