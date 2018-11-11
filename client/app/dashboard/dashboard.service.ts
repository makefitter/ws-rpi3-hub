import { UserData } from "./dashboard.component";
import { AuthService } from "../services/authentication.service";
export class DashboardService {
  static $inject = ['$q', '$http', '$window','authService'];
  static NAME: string = 'dashboardService';
  private host: string = '';
  constructor(protected $q: ng.IQService, protected $http: ng.IHttpService, protected $window: ng.IWindowService, private authService: AuthService) {
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
    
    userData.email = this.authService.tokenPayload().email;
    return this.$http.post((this.$window.localStorage['api'] + 'cloud/'), userData, {
        headers: this.authService.getHeaders()
      })
      .then((response) => {
        return response;
      })
      .catch((err) => {
        return err;
      });
  }
}