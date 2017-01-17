import {
    ModuleWithProviders, NgModule,
    Optional, SkipSelf }       from '@angular/core';

import { CommonModule }      from '@angular/common';

import { HttpService }       from './http.service';
import { HttpServiceConfig }       from './http.service';

@NgModule({
    imports:      [ CommonModule ],
    providers:    [ HttpService ]
})
export class CoreModule {

    constructor (@Optional() @SkipSelf() parentModule: CoreModule) {
        if (parentModule) {
            throw new Error(
                'CoreModule is already loaded. Import it in the AppModule only');
        }
    }

    static forRoot(config: HttpServiceConfig): ModuleWithProviders {
        console.info("core.module is loading...")
        return <ModuleWithProviders>{
            ngModule: CoreModule,
            providers: [
                {provide: HttpServiceConfig, useValue: config }
            ]
        };
    }
}
