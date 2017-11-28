import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { ElectronService } from '../services/electron.service';

@Component({
  selector: 'app-electron-info',
  templateUrl: './electron-info.component.html',
  styleUrls: ['./electron-info.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ElectronInfoComponent {
    process: any;

    constructor(electronService: ElectronService) {
      this.process = electronService.remote.process;
    }
}
