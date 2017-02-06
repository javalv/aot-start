import {Component} from '@angular/core';

@Component({
  moduleId: module.id,
    selector: 'home-page',
    templateUrl: './app.home.html',
})
export class HomePageComponent {

    constructor(){


    }

    ngOnInit(){
      let b:any ;
      this.test(1,b)
    }

    test(a:number,p:any){
      console.log(p)
      console.log(!p)
      console.log(p == undefined)
      console.log(p == null)
      console.log(typeof(p))

      console.log("===============================")
      type C = { a: string, b?: number }
      function f({ a, b = 123 }: C): void {
        console.log(a,b);
      }
      f({a:"we "});
    }
}

interface ClockConstructor {
  test (hour: number, minute: number):any;
}

class Clock implements ClockConstructor {
  currentTime: Date;
  test(h: number, m: number):any { }

  func():ClockConstructor{
    let clock : Clock = new Clock();
    return clock;
  }

}

function func():ClockConstructor{
  let clock : Clock = new Clock();
  return clock;
}
//
//
// class TestString{
//   test(host:"张三"){
//     console.log("TestString:" + host());
//   }
// }
// new TestString().test(function () {
//   console.log(1)
//   return -1;
// });
