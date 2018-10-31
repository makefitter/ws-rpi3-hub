import { SocketService } from "../services/socket.service";

export class DataService {
    static $inject = ['$http','socketService'];
    static NAME: string = 'dataService';
    private model: string;
    constructor(protected $http: ng.IHttpService,
                protected socketService: SocketService) {}
   
    public getData(): angular.IHttpPromise<any>{
        return this.$http.get(('http://localhost:5000/api/cloud/'),{
          });
    }
  }