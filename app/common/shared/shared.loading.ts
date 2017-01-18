import {Component,
  trigger,
  state,
  style,
  transition,
  animate} from "@angular/core";
@Component({
  selector: 'load-shade',
  template: `<div [@shrinkOut]="shrinkOut">loading...</div>`,
  styles: ['div{' +
  'position: absolute;' +
  'height:20px;width:100px;' +
  'background-color: #8c8c8c' +
  '}'],
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
export class LoadingShadeComponent {
  shrinkOut : string;
  constructor() {
    this.shrinkOut = 'in';
  }

  ngOnInit() {
    // this.shrinkOut = 'in';
  }

  // @Input() loaded: boolean = false;

  // ngOnChanges() {
  //   if (this.loaded == true) {
  //     this.hide = false;
  //   } else {
  //     this.hide = true;
  //   }
  // }

  loading(){
    setTimeout(()=> {
      this.shrinkOut = 'out';
    }, 100);
  }

  hasLoaded() {
    this.shrinkOut = 'in';
  }

}
