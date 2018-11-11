import  { UserService } from '../services/user.service';
interface IMyScope extends ng.IScope {
    data: string;
    message: any;
    user:any
}

class RegisterController implements ng.IController {
    
    static $inject = ['$scope','$state','userService'];
    title: string = 'hello ng';
    constructor(private $scope: IMyScope, private $state: ng.ui.IStateService,private userService: UserService) {
        this.$scope.message = false;
    
    }

    public submit(): void {
        this.userService.create(this.$scope.user)
            .then((result) => {
                this.$scope.message = result.data.message;
                if (result.status === 201) {
                    this.$state.go('app.login');
                }
            });
    }
}

export class RegisterComponent implements ng.IComponentOptions {
    static NAME: string = 'register';
    controller: any;
    templateUrl: any;
    constructor() {
        this.controller = RegisterController;
        this.templateUrl = require('./register.html');
    }
}