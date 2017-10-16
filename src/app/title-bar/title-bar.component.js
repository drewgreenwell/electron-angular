var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, EventEmitter, Input, Output } from '@angular/core';
var remote = require('electron').remote;
var TitleBarComponent = /** @class */ (function () {
    function TitleBarComponent() {
        this.onMaximize = new EventEmitter();
        this.onMinimize = new EventEmitter();
        this.onClose = new EventEmitter();
    }
    TitleBarComponent.prototype.minimize = function ($event) {
        this.onMinimize.emit();
    };
    TitleBarComponent.prototype.maximize = function ($event) {
        this.onMaximize.emit();
    };
    TitleBarComponent.prototype.close = function ($event) {
        this.onClose.emit();
    };
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], TitleBarComponent.prototype, "title", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], TitleBarComponent.prototype, "logo", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], TitleBarComponent.prototype, "onMaximize", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], TitleBarComponent.prototype, "onMinimize", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], TitleBarComponent.prototype, "onClose", void 0);
    TitleBarComponent = __decorate([
        Component({
            selector: 'app-title-bar',
            templateUrl: './title-bar.component.html',
            styleUrls: ['./title-bar.component.css']
        })
    ], TitleBarComponent);
    return TitleBarComponent;
}());
export { TitleBarComponent };
//# sourceMappingURL=title-bar.component.js.map