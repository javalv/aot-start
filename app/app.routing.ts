import {Routes, RouterModule} from '@angular/router';
import {HomePageComponent} from "./app.home";
import {HeroesModule} from "./heroes/heroes.module";
import {HeroesPageComponent} from "./heroes/heroes";
import {HeroesListPageComponent} from "./heroes/heroes.list";
import {DemoDetailComponent} from "./heroes/demo";
import {HeroesDetailComponent} from "./heroes/heroes.detail";

const appRoutes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/home'},
  {path: 'home', component: HomePageComponent},
  {path: 'heroes',component: HeroesPageComponent,  children: [
    {path: '', component: HeroesListPageComponent},
    {path: 'demo', component: DemoDetailComponent},
    {path: 'hero/:id', component: HeroesDetailComponent}
  ]},

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
