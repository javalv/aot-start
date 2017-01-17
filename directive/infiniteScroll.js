"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by lvfang on 2017/1/13.
 */
var core_1 = require('@angular/core');
// import { Scroller } from '';
var InfiniteScroll = (function () {
    function InfiniteScroll() {
        this.scroll = new core_1.EventEmitter();
    }
    Object.defineProperty(InfiniteScroll.prototype, "infiniteScrollDistance", {
        set: function (distance) {
            // this._distance = distance;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number), 
        __metadata('design:paramtypes', [Number])
    ], InfiniteScroll.prototype, "infiniteScrollDistance", null);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], InfiniteScroll.prototype, "scroll", void 0);
    InfiniteScroll = __decorate([
        core_1.Directive({
            selector: '[infinite-scroll]'
        }), 
        __metadata('design:paramtypes', [])
    ], InfiniteScroll);
    return InfiniteScroll;
}());
exports.InfiniteScroll = InfiniteScroll;
//# sourceMappingURL=infiniteScroll.js.map