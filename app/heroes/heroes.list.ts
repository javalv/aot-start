import {Component, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {HttpService} from "../common/core/http.service";
@Component({
  selector: 'heroes-list-page',
  template: `<div *ngFor="let item of items">
                    <div (click)="onSelect('zhangsan')">张三</div>
                    <div (click)="onSelect('lisi')">李四</div>
                    <div (click)="gotoDemo()">DEMO</div>
                    <div (click)="gotoCross()">CROSS</div>
                </div>
                
                <div class="search-results"
                    infinite-scroll
                    [infiniteScrollDistance]="2"
                    (scrolled)="onScroll()">
                </div>
                <load-shade ></load-shade>`,

})
export class HeroesListPageComponent {

  private items:any;

  constructor(private router: Router,
              private httpService: HttpService) {
    // super();
  }

  ngOnInit() {
    console.log(this.httpService.getName())
    setTimeout(()=> {
      this.onLoaded();
    }, 1000)
  }

  onLoaded(){
    this.items = [
      {},{},{},{},{},{},
    ]
  }

  onSelect(name: any) {
    console.log(name)
    this.router.navigate(['/heroes/hero', name]);
  }

  gotoDemo() {
    this.router.navigate(['/heroes/demo']);
  }

  gotoCross() {
    this.router.navigate(['/cross_module']);
  }

  onScroll(){
    console.log('onScroll ... ')
    setTimeout(()=>{
      this.items.push({});

    },1000)
  }
}
