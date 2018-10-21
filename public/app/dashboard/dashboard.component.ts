import {
    DashboardService
} from "./dashboard.service";

class DashboardController implements ng.IController {
    static $inject = ['dashboardService'];
    private _dashboardService: DashboardService;
    public message: string;
    constructor(protected dashboardService: DashboardService) {
        this._dashboardService = dashboardService;
    }

    public getString() {
        return 'Sema';
    }
    
    public write() {
        this._dashboardService.test().then((data) => {
            this.message = JSON.stringify(data.data);
        });
    }
}

export class DashboardComponent implements ng.IComponentOptions {
    static NAME: string = 'dashboard';
    controller: any;
    templateUrl: any;
    constructor() {
        this.controller = DashboardController;
        this.templateUrl = require('./dashboard.component.html');

    }
}