import{ AuthService } from './authentication.service';

export class UserService {
  static $inject = ['$q', '$http', '$window','authService'];
  static NAME: string = 'userService';
  private api: string = 'api';
  constructor(protected $q: ng.IQService, protected $http: ng.IHttpService, private $window: ng.IWindowService, private authService: AuthService) {

  }
  public getUser(): ng.IHttpPromise<any> {
    return this.$http.get((this.$window.localStorage[this.api] + 'user/' + this.authService.tokenPayload().id), {
        headers: this.authService.getHeaders()
      }).then((response) => {
        return response;
      })
      .catch((err) => {
        return err;
      });
  }
  public update(user): ng.IHttpPromise<any> {
    return this.$http.put((this.$window.localStorage[this.api] + 'user/' + this.authService.tokenPayload().id), user, {
        headers: this.authService.getHeaders()
      })
      .then((response) => {
        return response;
      })
      .catch((err) => {
        return err;
      });
  }
  public create(user): ng.IHttpPromise<any> {

    return this.$http.post((this.$window.localStorage[this.api] + 'user/'), user, {
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
