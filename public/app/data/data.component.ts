// import { DataService } from "./data.service";
import {
    SocketService
} from "../services/socket.service";
import { DataService } from "./data.service";

class Coord {

    constructor(public x: number, public y: number, public z: number, public w ? : number) {

        if (!w) {
            w = 0;
        }
    };

}
interface IMyScope extends ng.IScope
{
  data: string;
}

class DataController implements ng.IController {
    static i = 0;
    static $inject = ['dataService','socketService', '$scope'];
    //  private $scope : ng.IScope;
    welcome: string = 'hello';
    public status: string = null;
    acc: Coord;
    gyro: Coord;
    quat: Coord;
    constructor(protected dataService: DataService,public socketService: SocketService, private $scope: IMyScope) {
        
        this.acc = new Coord(1, 3.3, 4.4);
        this.gyro = new Coord(28, 31, 2);
        this.quat = new Coord(1, 2, 3, 4);

        this.socketService.get().on('message', (data) => {
            console.log('data: ', data);
            this.$scope.$apply(() => {
               this.welcome = String( DataController.i);
               this.acc.x = data.acc_x;
               this.acc.y = data.acc_y;
               this.acc.z = data.acc_z;

               this.gyro.x = data.gyro_x;
               this.gyro.y = data.gyro_y;
               this.gyro.z = data.gyro_z;
               
               this.quat.w = data.quat_w;
               this.quat.x = data.quat_x;
               this.quat.y = data.quat_y;
               this.quat.z = data.quat_z;
            });
            DataController.i++;
        })
    }
    public startData(): void{
        this.dataService.getData().then((data) => {
            this.status = data.data.message;    
        })
    }  
}

export class DataComponent implements ng.IComponentOptions {
    static NAME: string = 'data';
    controller: any;
    templateUrl: any;
    constructor() {
        this.controller = DataController;
        this.templateUrl = require('./data.html');
    }
}