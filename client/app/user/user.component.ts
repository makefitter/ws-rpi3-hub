import { UserService } from '../services/user.service';
import { AuthService } from '../services/authentication.service';
class UserController implements ng.IController {
      static $inject = ['$window','$state', 'authService'];
      users: any;
        constructor(private $window: ng.IWindowService,
             private $state:ng.ui.IStateService, private authService: AuthService) {
                const tokenIndex:string = 'jwt';
                if(this.$window.localStorage[tokenIndex] !== '') {
            this.users = JSON.stringify(this.authService.tokenPayload());
            } else {
                this.$state.go('app.login');
            }
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
