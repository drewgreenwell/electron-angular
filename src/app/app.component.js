var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild } from '@angular/core';
import { TitleBarComponent } from './title-bar/title-bar.component';
import { ElectronService } from './services/electron.service';
var AppComponent = /** @class */ (function () {
    function AppComponent(electronService) {
        this.title = 'Angular App in Electron';
        var electron = electronService.getElectron();
        this.window = electron.remote.getCurrentWindow();
    }
    AppComponent.prototype.ngOnInit = function () { };
    AppComponent.prototype.onMaximize = function () {
        if (!this.window.isMaximized()) {
            this.window.maximize();
        }
        else {
            this.window.unmaximize();
        }
    };
    AppComponent.prototype.onMinimize = function () {
        this.window.minimize();
    };
    AppComponent.prototype.onClose = function () {
        this.window.close();
    };
    __decorate([
        ViewChild('titleBar'),
        __metadata("design:type", TitleBarComponent)
    ], AppComponent.prototype, "titleBar", void 0);
    AppComponent = __decorate([
        Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
        }),
        __metadata("design:paramtypes", [ElectronService])
    ], AppComponent);
    return AppComponent;
}());
export { AppComponent };
//# sourceMappingURL=app.component.js.map