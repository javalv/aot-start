//our root app component
import {Component} from '@angular/core'

@Component({
    selector: 'my-app',
    styles: [`
    .search-results {
      height: 100%;
      // overflow: scroll;
    }
    .title {
      position: fixed;
      top: 0;
      left: 0;
      background-color: rgba(0,0,0,.5);
      color: white;
      width: 100%;
    }
    .title small {
      color: #eaeaea;
    }
  `],
    template: `
    <h1 class="title well">{{ title }} <small>items: {{sum}}</small></h1>
    <div class="search-results">
      <p *ngFor="let i of array">
        {{ i.name }}
      </p>
    </div>
  `
})
export class AppComponent {
    array : any;
    sum = 100;
    throttle = 300;
    scrollDistance = 1;
    title = 'Hello InfiniteScroll v0.2.9, Ng2 Final';

    constructor() {
        this.array = [
            {"name":"zhangsan"},
            {"name":"zhangsan"},
            {"name":"zhangsan"},
            {"name":"zhangsan"},
            {"name":"zhangsan"},
            {"name":"zhangsan"},
            {"name":"zhangsan"},
            {"name":"zhangsan"},
            {"name":"zhangsan"},
            {"name":"zhangsan"},
            {"name":"zhangsan"},
            {"name":"zhangsan"},
            {"name":"zhangsan"},
            {"name":"zhangsan"},
            {"name":"zhangsan"},
            {"name":"zhangsan"},
            {"name":"zhangsan"},
            {"name":"zhangsan"},
            {"name":"zhangsan"},
            {"name":"zhangsan"},
            {"name":"zhangsan"},
            {"name":"zhangsan"},
            {"name":"zhangsan"},
            {"name":"zhangsan"},
            {"name":"zhangsan"},
            {"name":"zhangsan"},


        ];
    }

    ngOnInit(){
        window.onscroll = function () {
            alert(2);
        }
    }

    onScrollDown () {
        console.log('scrolled!!');
        alert(2);


    }

    generateWord() {
        //return chance.word();
    }
}