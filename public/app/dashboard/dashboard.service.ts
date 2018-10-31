import {
  UserData
} from "./dashboard.component";

export class DashboardService {
  static $inject = ['$q', '$http', '$window'];
  static NAME: string = 'dashboardService';
  private host: string = '';
  constructor(protected $q: ng.IQService, protected $http: ng.IHttpService, protected $window: ng.IWindowService) {
    this.host = $window.localStorage['api'];
  }
  // public getAll(): angular.IHttpPromise < any > {

  //   const headers = {
  //     'Authorization': 'Basic ' + '21udiasdkjaldksjlaj2'
  //   };
  //   return this.$http.get(('http://localhost:5000/api/user/'), {
  //     headers: headers
  //   });
  // }
  // public test():  angular.IHttpPromise < any > {
  //   const headers = {
  //     'Authorization': 'Basic ' + '21udiasdkjaldksjlaj2'
  //   };
  //     return this.$http.get(('http://localhost:5000/api/cloud/'),{
  //       headers: headers
  //     });
  // }
  public submitData(userData: UserData): ng.IHttpPromise < any > {
    return this.$http.post(('http://localhost:5000/api/cloud/'), userData, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then((response) => {
        return response;
      })
      .catch((err) => {
        return err;
      });
  }
}