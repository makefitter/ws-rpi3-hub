import { UserService } from '../services/user.service';
import { AuthService } from '../services/authentication.service';
class UserController implements ng.IController {
      static $inject = ['userService','$window','$state', 'authService'];
      users: any;
        constructor(private user:UserService,private $window: ng.IWindowService,
             private $state:ng.ui.IStateService, private authService: AuthService) {
            if(this.$window.localStorage['jwt'] !== ''){
            this.users = JSON.stringify(this.authService.tokenPayload());
            }
            else this.$state.go('app.login');
        }
}


export class UserComponent implements ng.IComponentOptions {
    static NAME:string = 'user';
    controller:any;
    templateUrl:any;
    constructor() {
       this.controller = UserController;
       this.templateUrl = require('./user.html');
    }
}
