import {NgModule}     from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule}  from '@angular/forms';
import {LoadingShadeComponent} from "./shared.loading";
@NgModule({
    imports: [CommonModule],
    declarations: [LoadingShadeComponent],
    exports: [CommonModule, FormsModule, LoadingShadeComponent]
})
export class SharedModule {

    constructor() {
        console.log('SharedModule loading ... ')
    }


}