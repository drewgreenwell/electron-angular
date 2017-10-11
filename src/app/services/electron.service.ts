import { Injectable } from '@angular/core';

@Injectable()
export class ElectronService {

    private electron: any = null;

    getElectron() {
        if (this.electron === null) {
            this.electron = require('electron');
        }
        return this.electron;
    }

    constructor() { }
}
