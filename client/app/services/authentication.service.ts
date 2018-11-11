
export class AuthService {
    static $inject = ['$window','jwtHelper'];
    static NAME: string = 'authService';
    constructor(private $window: ng.IWindowService, private jwtService: any ) {
    }
    
    public tokenPayload():any {
        return (this.jwtService.decodeToken(this.$window.localStorage['jwt']) || null);
    };
    
    public getToken(): string {
        return (this.$window.localStorage['jwt']);
    };

    public getHeaders(): any {
        return {
            'Authorization': ('Bearer ' + this.$window.localStorage['jwt'])
        };
    };

    public setToken(token): void {
        this.$window.localStorage['jwt'] = token;
    };
  }