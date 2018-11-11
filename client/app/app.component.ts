let apiPath = 'http://localhost:5000/api/';

interface IMyScope extends ng.IScope{
    state: ng.ui.IStateService
}
class AppController implements ng.IController {

    static $inject = ['$state', '$window','$scope'];
    
    constructor(private $state: ng.ui.IStateService, 
                private $window: ng.IWindowService,
                private $scope: IMyScope) {
        this.$window.localStorage['api'] = apiPath;
        this.$window.localStorage['jwt'] = '';
        this.$scope.state  = this.$state;
        this.$state.go('app.login');
    }
}

export class AppComponent implements ng.IComponentOptions {
    static NAME: string = 'appView';
    controller: any;
    templateUrl: any;
    constructor() {
        this.controller = AppController;
        this.templateUrl = require('./app.component.html');

    }
}