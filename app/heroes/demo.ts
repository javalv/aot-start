import {  Component,
  Input,
  trigger,
  state,
  style,
  transition,
  animate} from '@angular/core';


@Component({
  selector: 'heroes-demo-page',
  template: `    
    <ul>
      <li 
          [@heroState]="hero.state"
          (click)="toggleState()">
          动画
      </li>
      
    </ul>
    <div style=" background-color: #00a0dc" 
          [@shrinkOut]="shrinkOut">
          <span >toase</span>
      </div>
`,
  // styleUrls: ['hero-list.component.css'],
  animations: [
    trigger('heroState', [
      state('inactive', style({
        backgroundColor: '#eee',
        transform: 'scale(1)'
      })),
      state('active', style({
        backgroundColor: '#cfd8dc',
        transform: 'scale(1.1)'
      })),
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out'))
    ]),
    trigger('shrinkOut', [
      state('in', style({
        height : 0
      })),
      state('out', style({
        height : 20
      })),
      transition('in => out', animate('300ms ease-in')),
      transition('out => in', animate('300ms ease-out'))
    ])
  ]

})
export class DemoDetailComponent {

  hero : Hero;

  shrinkOut : string;

  constructor(){
    this.hero = new Hero();
    this.hero.state = 'inactive';
    this.shrinkOut = 'in';
  }

  toggleState(){
    if(this.hero.state == 'active'){
      this.hero.state = 'inactive';
      this.shrinkOut = 'out';
    }else{
      this.hero.state = 'active';
      this.shrinkOut = 'in';
    }


  }



}

class Hero{
  public name : String;
  public state : String;
}
