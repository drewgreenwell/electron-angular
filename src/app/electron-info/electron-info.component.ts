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
      this.process = electronService.remote.process;
    }
}
