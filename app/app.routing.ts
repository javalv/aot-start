import {Routes, RouterModule} from '@angular/router';
import {HomePageComponent} from "./app.home";

const appRoutes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/home'},
  {path: 'home', component: HomePageComponent},
  {path: 'heroes', loadChildren: 'app/heroes/heroes.module#HeroesModule'},
  // {path: 'heroes', loadChildren: () => require('es6-promise!./heroes/heroes.module')('HeroesModule')},
  // {
  //     path: 'heroes', loadChildren: () => new Promise(function (resolve) {
  //     require.ensure([], function (require) {
  //         resolve(require('./heroes/heroes.module')['HeroesModule']);
  //     });
  // })
  // }

  {path: 'cross_module', loadChildren: 'app/cross/cross.module#CrossModule'},
];

export const appRoutingProviders: any[] = [];

export const routing = RouterModule.forRoot(appRoutes);
