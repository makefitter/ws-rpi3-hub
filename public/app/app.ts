// app.ts
import { module, element, bootstrap, ILogService } from 'angular';
import '@uirouter/angularjs';
import { AppComponent } from '../app/app.component';
import { SocketService } from './services/socket.service';

import { HomeComponent } from '../app/home/home.component';

import { UserComponent } from '../app/user/user.component';
import { UserService } from '../app/services/user.services';

import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardService } from './dashboard/dashboard.service';

import { DataComponent } from './data/data.component';
import { DataService } from './data/data.service';
import './app.less';



export let app = module('app', [
    'ui.router',
])
    .config(['$stateProvider', '$urlRouterProvider', ($stateProvider: ng.ui.IStateProvider, $urlRouterProvider: ng.ui.IUrlRouterProvider) => {
        $stateProvider.state({
            name: 'app',
            url: '/app',
            component: AppComponent.NAME
        }).state(
            {
                name: 'app.home',
                url: '/home',
                component: HomeComponent.NAME
            }).state(
            {
                name: 'app.user',
                url: '/user?id',
                component: UserComponent.NAME,
            })
            .state(
                {
                    name: 'app.dashboard',
                    url: '/dashboard',
                    component: DashboardComponent.NAME,
                })
            .state(
                {
                    name: 'app.data',
                    url: '/data',
                    component: DataComponent.NAME,
                });

        $urlRouterProvider.otherwise('/app');
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
    
element(document).ready( () => {
    bootstrap(document, ['app']);
});
