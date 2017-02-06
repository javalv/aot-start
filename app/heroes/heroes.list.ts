import {Component, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {HttpService} from "../common/core/http.service";
import {HeroesService} from "./heroes.service";
//import {Observer} from "rxjs/Observer";
@Component({
  selector: 'heroes-list-page',
  styles: [
    // `.search-results {
    //         height: 20rem;
    //         overflow: scroll;
    //     }`
  ],
  template: `<div >
                    <div (click)="onSelect('zhangsan')">张三</div>
                    <div (click)="onSelect('lisi')">李四</div>
                    <div (click)="gotoDemo()">王五</div>
                    <div (click)="gotoCross()">CROSS</div>
                </div>
                
                <!--<div class="search-results"-->
                    <!--infinite-scroll-->
                    <!--[infiniteScrollDistance]="2"-->
                    <!--[infiniteScrollThrottle]="500"-->
                    <!--(scrolled)="onScroll()"-->
                    <!--[scrollWindow]="true">-->
                <!--</div>-->

                <div *ngFor="let item of items">
                    <p>{{item.name}}</p>
                </div>

                <load-shade ></load-shade>`,



})
export class HeroesListPageComponent {

  items:any;

  constructor(private router: Router,
              private httpService: HttpService,
              private heroesService:HeroesService) {
    // super();
  }

  ngOnInit() {
    // let result = this.heroesService.getCrises("http://localhost/api/common/fetch_server_time",{});
    // console.log(result);
    this.heroesService.getServerTime("/common/fetch_server_time")
      .then(
        (result:any) => {
            // alert(JSON.stringify(result));
            console.log(result);
          });

    setTimeout(()=> {
      this.onLoaded();
    }, 1000)
  }

  onLoaded(){
    this.items = [];
    for(let i=0;i<20;i++){
      this.items.push({name:'zhangsan'});
    }
    let items = this.items;
    let self = this;
    //let observer: Observer = new Observer();

    Emitter.register("nihao", self.onScroll, self);

    window.onscroll = function (event) {
      Emitter.fire("nihao", "cyrwpj", 1);
    }


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

  onScroll(p:any){
    //alert(p);
    console.log(p)
    this.items.push({name:'lisi'});
  }

  onScrollDown(){
    console.log("onScroll ...");
    setTimeout(()=>{
      this.items.push({});

    },1000)
  }

  onScrollUp(){
    console.log("onScroll ...");
    setTimeout(()=>{
      this.items.push({});

    },1000)
  }


}


export class Emitter {
  /** 监听数组 */
  private static listeners = {};


  /**
   * 注册事件
   * @param name 事件名称
   * @param callback 回调函数
   * @param context 上下文
   */
  public static register(name: string, callback: Function, context: any) {
    let observers: Observer[] = Emitter.listeners[name];
    if (!observers) {
      Emitter.listeners[name] = [];
    }
    Emitter.listeners[name].push(new Observer(callback, context));
  }

  /**
   * 移除事件
   * @param name 事件名称
   * @param callback 回调函数
   * @param context 上下文
   */
  public static remove(name: string, callback: Function, context: any) {
    let observers: Observer[] = Emitter.listeners[name];
    if (!observers) return;
    let length = observers.length;
    for (let i = 0; i < length; i++) {
      let observer = observers[i];
      if (observer.compar(context)) {
        observers.splice(i, 1);
        break;
      }
    }
    if (observers.length == 0) {
      delete Emitter.listeners[name];
    }
  }

  /**
   * 发送事件
   * @param name 事件名称
   */
  public static fire(name: string, ...args: any[]) {
    let observers: Observer[] = Emitter.listeners[name];
    if (!observers) return;
    let length = observers.length;
    for (let i = 0; i < length; i++) {
      let observer = observers[i];
      observer.notify(name, ...args);
    }
  }
}

/**
 * 观察者
 */
class Observer {
  /** 回调函数 */
  private callback: Function = null;
  /** 上下文 */
  private context: any = null;

  constructor(callback: Function, context: any) {
    let self = this;
    self.callback = callback;
    self.context = context;
  }

  /**
   * 发送通知
   * @param args 不定参数
   */
  notify(...args: any[]): void {
    let self = this;
    self.callback.call(self.context, ...args);
  }

  /**
   * 上下文比较
   * @param context 上下文
   */
  compar(context: any): boolean {
    return context == this.context;
  }
}
