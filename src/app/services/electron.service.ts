import { Injectable } from '@angular/core';
import { ElectronMock } from '../../mocks/electron.mock';
declare const window: any;
// import { app, remote } from 'electron';

@Injectable()
export class ElectronService {
    public electron;
    public remote;
    public app;

    constructor() {
        if ( window.require ) {
            this.electron = window.require('electron');
            this.remote = this.electron.remote;
            this.app = this.electron.app;
        } else {
            // running in browser
            this.electron = {};
            this.remote = new ElectronMock();
            this.app = {};
        }
     }
}
