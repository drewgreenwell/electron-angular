var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { ElectronService } from '../services/electron.service';
var ElectronInfoComponent = /** @class */ (function () {
    function ElectronInfoComponent(electronService) {
        var electron = electronService.getElectron();
        this.process = electron.remote.process;
    }
    ElectronInfoComponent = __decorate([
        Component({
            selector: 'electron-info',
            templateUrl: './electron-info.component.html',
            styleUrls: ['./electron-info.component.css']
        }),
        __metadata("design:paramtypes", [ElectronService])
    ], ElectronInfoComponent);
    return ElectronInfoComponent;
}());
export { ElectronInfoComponent };
//# sourceMappingURL=electron-info.component.js.map