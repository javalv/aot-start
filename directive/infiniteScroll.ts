/**
 * Created by lvfang on 2017/1/13.
 */
import { Directive, ElementRef, Input, Output, EventEmitter } from '@angular/core';
// import { Scroller } from '';
@Directive({
  selector: '[infinite-scroll]'
})
export class InfiniteScroll {

  @Input() set infiniteScrollDistance(distance: Number) {
    // this._distance = distance;
  }

  @Output() scroll = new EventEmitter();

  // ngOnInit() {
  //   this.scroller = new Scroller(window, setInterval, this.element, this.onScroll.bind(this), this._distance, {});
  // }
  //
  // private scroller: Scroller;
  //
  // private _distance: Number;
  //
  // onScroll() {
  //   this.scroll.next({});
  // }
}


