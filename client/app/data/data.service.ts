import {
  SocketService
} from "../services/socket.service";

export class DataService {
  static $inject = ['$http', 'socketService'];
  static NAME: string = 'dataService';
private fileName: string;
  constructor(protected $http: ng.IHttpService,
    protected socketService: SocketService) {
      console.log('data:', this.fileName);
    }

  // public getData(): angular.IHttpPromise < any > {
  //   return this.$http.get(('http://localhost:5000/api/cloud/'), {});
  // }
  public connectWs(fileName: string): angular.IHttpPromise < any > {

    return this.$http.put(('http://localhost:5000/api/cloud/'), {name:fileName}, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
  public disconnectWs(): angular.IHttpPromise < any > {
    return this.$http.get(('http://localhost:5000/api/cloud/'), {});
  }
  public setFileName(name: string): void {
    this.fileName = name;
  }
  public getFileName(): string {
    return this.fileName;
  }
}