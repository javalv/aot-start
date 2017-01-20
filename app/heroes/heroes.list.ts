import {Component, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {HttpService} from "../common/core/http.service";
// import {InfiniteScroll} from "../common/scroller/infinite-scroll";
@Component({
  selector: 'heroes-list-page',
  styles: [
    `.search-results {
            height: 20rem;
            overflow: scroll;
        }`
  ],
  template: `<div *ngFor="let item of items">
                    <div (click)="onSelect('zhangsan')">张三</div>
                    <div (click)="onSelect('lisi')">李四</div>
                    <div (click)="gotoDemo()">王五</div>
                    <div (click)="gotoCross()">CROSS</div>
                </div>
                
                <div class="search-results"
                    infinite-scroll
                    [infiniteScrollDistance]="2"
                    [infiniteScrollThrottle]="500"
                    (scrolled)="onScroll()">
                </div>
                
                <load-shade ></load-shade>`,



})
export class HeroesListPageComponent {

  items:any;

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
      {},{},{},{},{},{},{},{},{},{},{},{},
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
    console.log("onScroll ...");
    setTimeout(()=>{
      this.items.push({});

    },1000)
  }
}
