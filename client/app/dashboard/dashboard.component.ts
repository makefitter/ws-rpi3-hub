import {
    DashboardService
} from "./dashboard.service";
import {
    DataService
} from "../data/data.service";
enum Gender {
    male,
    female,
    other
}
enum Context {
    basket_ballH_1H_regular = "Basketball-B. Handling-One Hand-Regular",
        basket_ballH_1H_lr = "Basketball-B. Handling-One Hand-Left Right",
        basket_ballH_1H_fb = "Basketball-B. Handling-One Hand-Forward Backward",
        basket_ballH_1H_io = "Basketball-B. Handling-One Hand-In Out",
        basket_ballH_1H_ft = "Basketball-B. Handling-One Hand-Fingertip",
        basket_ballH_1H_spin = "Basketball-B. Handling-One Hand-spin",
        basket_ballH_1H_dribblerun = "Basketball-B. Handling-One Hand-Dribble Run"

}
export class UserData {
    public email:string;
    public age: string;
    public height: string;
    public weight: string;
    public gender: Gender;
    public additionalNotes: string;
    context: Context;
    contextCollection: string[]
    constructor() {
        this.contextCollection = [];
        this.contextCollection.push(...Object.keys(Context).map(key => Context[key]));
    }
}
class DashboardController implements ng.IController {

    static $inject = ['dashboardService', '$state', 'dataService'];
    public message: string = null;
    public userData: UserData
    constructor(private dashboardService: DashboardService, private $state: ng.ui.IStateService, private dataService: DataService) {
        this.userData = new UserData();
    }

    public submit() {
        this.dashboardService.submitData(this.userData).then((data) => {
            this.message = data.data.message;
            if (data.status === 201 || data.status === 200) {
                this.dataService.setFileName(data.data.data.fileName);
                this.$state.go('app.data');
            }
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