import {
  Component, OnDestroy, OnInit, ViewChild, HostBinding,
  trigger, transition, animate,
  style, state
} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs/Subscription";
import {BaseComponent} from "../common/base/com.base";
import {HeroesService} from "./heroes.service";
import {LoadingShadeComponent} from "../common/shared/shared.loading";
@Component({
  selector: 'heroes-detail-page',
  template: `<span (click)="test()">详情页{{name}}</span>
                <my-voter
                  (onVoted)="onVoted($event)">
                </my-voter>
                <div>
                    <img src="/public/images/angular.png"/>
                </div>
                <span (click)="next()">next</span> 
                <load-shade ></load-shade>`,
  animations: [
    trigger('routeAnimation', [
      state('*',
        style({
          opacity: 1,
          transform: 'translateX(0)'
        })
      ),
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'translateX(-100%)'
        }),
        animate('0.8s ease-in')
      ]),
      transition('* => void', [
        animate('0.5s ease-out', style({
          opacity: 0,
          transform: 'translateY(100%)'
        }))
      ])
    ])
  ]

})
export class HeroesDetailComponent extends BaseComponent/* implements OnInit, OnDestroy */ {

  @HostBinding('@routeAnimation') get routeAnimation() {
    return true;
  }

  @HostBinding('style.display') get display() {
    return 'block';
  }

  @HostBinding('style.position') get position() {
    return 'absolute';
  }

  @ViewChild(LoadingShadeComponent)
  loadingShade: LoadingShadeComponent;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private heroesService: HeroesService) {
    // super(this.loadingShade);
    super();
  }

  name: any;
  private sub: Subscription;

  ngOnInit() {

    this.loadingShade.loading();

    setTimeout(()=> {
      this.loadingShade.hasLoaded();
      this.request();
    }, 1000);


    // this.name = this.route.snapshot.params['id']; 这种方式为不需要连续调用详情页，常规模式
    //用Subscription接收主要是为了连续的调用一个详情页
    this.sub = this.route.params.subscribe(params => {
      console.log("heroes.detail.ts:" + JSON.stringify(params));
      this.name = params['id'];
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  next() {
    this.router.navigate(['/heroes', 'nextName']);
  }

  test() {
    console.log('test click ...');
    this.loadingShade.hasLoaded();

  }

  private request(): void {
    console.log("heroes: " + this.heroesService.getCrises("123"));
  }

  onVoted(agreed: boolean) {
    console.log("HeroesDetailComponent onVoted " + agreed);
  }

}
