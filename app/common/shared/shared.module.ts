import {NgModule}     from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoadingShadeComponent} from "./shared.loading";
@NgModule({
    imports: [CommonModule],
    declarations: [LoadingShadeComponent],
    exports: [CommonModule, LoadingShadeComponent]
})
export class SharedModule {

    constructor() {
        console.log('SharedModule loading ... ')
    }


}
