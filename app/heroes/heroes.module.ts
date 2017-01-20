import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {heroesRouting} from './heroes.routing';
import {HeroesDetailComponent} from "./heroes.detail";
import {HeroesPageComponent} from "./heroes";
import {HeroesListPageComponent} from "./heroes.list";
import {SharedModule} from "../common/shared/shared.module";
import {HeroesService} from "./heroes.service";
import {BaseComponent} from "../common/base/com.base";
import {DemoDetailComponent} from "./demo";
import {ChildrenComponent} from "./children.componet";
import {InfiniteScroll} from "../common/scroller/infinite-scroll";

@NgModule({
  imports: [
    CommonModule,
    heroesRouting,
    SharedModule,
  ],
  declarations: [
    HeroesListPageComponent,
    HeroesDetailComponent,
    HeroesPageComponent,
    DemoDetailComponent,
    ChildrenComponent,
    InfiniteScroll
    // BaseComponent
  ],
  providers: [
    HeroesService
  ]
})
export class HeroesModule {
}
