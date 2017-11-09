import { Injectable } from '@angular/core';
declare const window: any;
// import { app, remote } from 'electron';

@Injectable()
export class ElectronService {
    public electron = window.require('electron');
    public remote;
    public app;

    constructor() {
        this.remote = this.electron.remote;
        this.app = this.electron.app;
     }
}
