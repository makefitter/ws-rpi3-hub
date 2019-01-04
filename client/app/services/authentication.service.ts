
export class AuthService {
    static $inject = ['$window','jwtHelper'];
    static NAME: string = 'authService';
    private jwtIndex: string = 'jwt';
    constructor(private $window: ng.IWindowService, private jwtService: any ) {
    }

    public tokenPayload():any {
        return (this.jwtService.decodeToken(this.$window.localStorage[this.jwtIndex]) || null);
    }

    public getToken(): string {
        return (this.$window.localStorage[this.jwtIndex]);
    }

    public getHeaders(): any {
        return {
            'Authorization': ('Bearer ' + this.$window.localStorage[this.jwtIndex])
        };
    }

    public setToken(token): void {
        this.$window.localStorage[this.jwtIndex] = token;
    }
  }
