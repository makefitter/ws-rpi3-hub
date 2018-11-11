// app.ts
import { module, element, bootstrap, ILogService } from 'angular';
import 'angular-jwt';
import '@uirouter/angularjs';
import { AppComponent } from '../app/app.component';
import { SocketService } from './services/socket.service';

import { HomeComponent } from '../app/home/home.component';

import { UserComponent } from '../app/user/user.component';
import { UserService } from './services/user.service';

import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardService } from './dashboard/dashboard.service';

import { DataComponent } from './data/data.component';
import { DataService } from './data/data.service';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { AuthService } from './services/authentication.service';

import './app.less';



export let app = module('app', 
    [
    'ui.router',
    'angular-jwt'
    ])
    .config(['$stateProvider', '$urlRouterProvider', ($stateProvider: ng.ui.IStateProvider, $urlRouterProvider: ng.ui.IUrlRouterProvider) => {
        $stateProvider
        .state({
                name: 'app.login',
                component: LoginComponent.NAME,
                url: '/login'
            })
        .state({
                name: 'app',
                url: '/',
                component: AppComponent.NAME
            })
        .state({
                name: 'app.home',
                component: HomeComponent.NAME,
            })
        .state({
                name: 'app.user',
                component: UserComponent.NAME,
            })
        .state({
                name: 'app.dashboard',
                url: '/dashboard',
                component: DashboardComponent.NAME,
            })
        .state({
                name: 'app.data',
                component: DataComponent.NAME,
            })
        .state({
                name: 'app.register',
                component: RegisterComponent.NAME,
            });
    
        $urlRouterProvider.otherwise('/');
    }])
    .service(SocketService.NAME, SocketService)
    .component(AppComponent.NAME, new AppComponent())
    .component(HomeComponent.NAME, new HomeComponent())

    .component(UserComponent.NAME, new UserComponent())
    .service(UserService.NAME, UserService)

    .component(DashboardComponent.NAME, new DashboardComponent())
    .service(DashboardService.NAME, DashboardService)

    .component(DataComponent.NAME, new DataComponent())
    .service(DataService.NAME, DataService)

    .component(LoginComponent.NAME, new LoginComponent()) 
    
    .component(RegisterComponent.NAME, new RegisterComponent())
    
    .service(AuthService.NAME, AuthService);

element(document).ready( () => {
    bootstrap(document, ['app']);
});
