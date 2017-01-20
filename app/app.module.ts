import {NgModule} from '@angular/core';
import {BrowserModule}  from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {routing} from "./app.routing";
import {HomePageComponent} from "./app.home";
import {HttpServiceConfig, HttpService} from "./common/core/http.service";
import {HeroesModule} from "./heroes/heroes.module";
@NgModule({
  imports: [
    BrowserModule,
    // CoreModule.forRoot({host:'192.168.10.1',port:8080}),
    routing,
    HeroesModule,
  ],
  declarations: [
    AppComponent,
    HomePageComponent,
  ],
  providers: [
    HttpService,
    {provide: HttpServiceConfig, useValue: {host: '192.168.10.2', port: 8080}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
