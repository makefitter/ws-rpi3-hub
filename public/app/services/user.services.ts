export class UserService {
  static $inject = ['$q', '$http', '$window'];
  static NAME: string = 'userService';
  private host: string = '';
  constructor(protected $q: ng.IQService, protected $http: ng.IHttpService, protected $window: ng.IWindowService) {
    this.host = $window.localStorage['api'];
  }
  public getAll(): angular.IHttpPromise < any > {

    const headers = {
      'Authorization': 'Basic ' + '21udiasdkjaldksjlaj2'
    };
    return this.$http.get(('http://localhost:5000/api/user/'), {
      headers: headers
    });
  }
}