import { Component, EventEmitter, Input, Output } from '@angular/core';
const remote = require('electron').remote;

@Component({
  selector: 'app-title-bar',
  templateUrl: './title-bar.component.html',
  styleUrls: ['./title-bar.component.css']
})
export class TitleBarComponent {
    @Input() title: string;
    @Input() logo: string;
    @Output() onMaximize = new EventEmitter();
    @Output() onMinimize = new EventEmitter();
    @Output() onClose = new EventEmitter();

    minimize($event: any) {
        this.onMinimize.emit();
    }

    maximize($event: any) {
        this.onMaximize.emit();
    }
    close($event: any) {
        this.onClose.emit();
    }
}
