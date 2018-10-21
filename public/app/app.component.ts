let apiPath = 'localhost:5000/api/';
let hostPath = 'http://localhost:5000/';
class AppController implements ng.IController {
      static $inject= ['$state','$window'];
    constructor(public $state: ng.ui.IStateService, public $window: ng.IWindowService) {
        $state.go('app.home');
        $window.localStorage['api'] = apiPath;
        $window.localStorage['host'] = hostPath;
    }
}

export class AppComponent implements ng.IComponentOptions {
    static NAME:string = 'appView';
    controller:any;
    templateUrl:any;
    constructor() {
       this.controller = AppController;
       this.templateUrl = require('./app.component.html');

    }
}
