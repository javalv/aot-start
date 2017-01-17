import { Component, EventEmitter, Input, Output } from '@angular/core';
@Component({
  selector: 'my-voter',
  template: `
    <button (click)="vote(true)" >Agree</button>
    <button (click)="vote(false)" >Disagree</button>
  `
})
export class ChildrenComponent {
  @Input()  name: string;
  @Output() onVoted = new EventEmitter<boolean>();
  vote(agreed: boolean) {
    console.log("VoterComponent vote " + agreed);
    this.onVoted.emit(agreed);
  }
}
