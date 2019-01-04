import { AuthService } from '../services/authentication.service';

class UserLogin {
    public email: string;
    public password: string;
}
interface IMyScope extends ng.IScope {
    user: UserLogin;
    error: string;
    isError: boolean;
}
class LoginController implements ng.IController {

    static $inject = ['$scope','$window','$state','$http','authService'];
    title: string = 'hello ng';
    private api = 'api';
    public user: UserLogin;
    constructor(private $scope: IMyScope,
                private $window: ng.IWindowService,
                private $state: ng.ui.IStateService,
                private $http: ng.IHttpService,
                private authService: AuthService
                ) {
                    this.$scope.isError = false;
    }
    public submit(): void {
        this.$http.post(this.$window.localStorage[this.api] + 'login',
        {
            email: this.$scope.user.email,
            password: this.$scope.user.password
        }
        ,{
            headers: {
              'Content-Type': 'application/json'
            }
          }).then((data: any) => {
            if (data.status === 200) {
                this.authService.setToken(data.data.token);
                this.$state.go('app.home');
            }
          }).catch((err: any) => {
                this.$scope.isError = true;
                this.$scope.error = err.data.message.msg;
          });
    }
}

export class LoginComponent implements ng.IComponentOptions {
    static NAME: string = 'login';
    controller: any;
    templateUrl: any;
    constructor() {
        this.controller = LoginController;
        this.templateUrl = require('./login.html');
    }
}
