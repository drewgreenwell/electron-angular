import { Component, EventEmitter, Input, Output } from '@angular/core';
const remote = require('electron').remote;

@Component({
  selector: 'electron-info',
  templateUrl: './electron-info.component.html',
  styleUrls: ['./electron-info.component.css']
})
export class ElectronInfoComponent {
    process = remote.process;
}
