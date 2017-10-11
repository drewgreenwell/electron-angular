import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ElectronService } from '../services/electron.service';

@Component({
  selector: 'electron-info',
  templateUrl: './electron-info.component.html',
  styleUrls: ['./electron-info.component.css']
})
export class ElectronInfoComponent {
    process: any;

    constructor(electronService: ElectronService) {
      const electron = electronService.getElectron();
      this.process = electron.remote.process;
    }
}
