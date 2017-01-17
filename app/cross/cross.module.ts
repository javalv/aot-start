import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";

import {SharedModule} from "../common/shared/shared.module";
import {HeroesService} from "../heroes/heroes.service";
import {CrossMainComponent} from "./cross.main";
import {CrossListComponent} from "./cross.list";
import {crossRouting} from "./crosss.routing";

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    crossRouting
  ],
  declarations: [
    CrossMainComponent,
    CrossListComponent
  ],
  providers: [
    HeroesService
  ]
})
export class CrossModule {
}
