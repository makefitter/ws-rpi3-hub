import{ AuthService } from './authentication.service';

export class UserService {
  static $inject = ['$q', '$http', '$window','authService'];
  static NAME: string = 'userService';
  private host: string = '';
  constructor(protected $q: ng.IQService, protected $http: ng.IHttpService, private $window: ng.IWindowService, private authService: AuthService) {
    this.host = this.$window.localStorage['api'];
  }
  getUser() {
    return this.$http.get((this.$window.localStorage['api'] + 'user/' + this.authService.tokenPayload().id), {
        headers: this.authService.getHeaders()
      }).then((response) => {
        return response;
      })
      .catch((err) => {
        return err;
      });
  }
  update(user) {

    return this.$http.put((this.$window.localStorage['api'] + 'user/' + this.authService.tokenPayload().id), user, {
        headers: this.authService.getHeaders()
      })
      .then((response) => {
        return response;
      })
      .catch((err) => {
        return err;
      });
  }
  create(user) {
    return this.$http.post((this.$window.localStorage['api'] + 'user/'), user, {
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