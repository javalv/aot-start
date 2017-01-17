import {Component,
  trigger,
  state,
  style,
  transition,
  animate} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [

    trigger('shrinkOut', [
      state('in', style({
        top: -20
      })),
      state('out', style({
        top: 0
      })),
      transition('in => out', animate('300ms ease-in')),
      transition('out => in', animate('300ms ease-out'))
    ])
  ]
})
export class AppComponent {

  private shrinkOut : string;

  constructor(){
    this.shrinkOut = 'in';
  }

  ngOnInit() {
    setTimeout(()=> {
      this.shrinkOut = 'out';
      setTimeout(()=> {
        this.shrinkOut = 'in';
      }, 2000)
    }, 1000)
  }

}
