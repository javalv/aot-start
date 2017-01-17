import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {heroesRouting} from './heroes.routing';
import {HeroesDetailComponent} from "./heroes.detail";
import {HeroesPageComponent} from "./heroes";
import {HeroesListPageComponent} from "./heroes.list";
import {SharedModule} from "../common/shared/shared.module";
import {HeroesService} from "./heroes.service";
import {BaseComponent} from "../common/base/com.base";
import {DemoDetailComponent} from "./demo";
import {ChildrenComponent} from "./children.componet";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    heroesRouting,
    SharedModule
  ],
  declarations: [
    HeroesListPageComponent,
    HeroesDetailComponent,
    HeroesPageComponent,
    DemoDetailComponent,
    ChildrenComponent
    // BaseComponent
  ],
  providers: [
    HeroesService
  ]
})
export class HeroesModule {
}
