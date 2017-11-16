import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-title-bar',
  templateUrl: './title-bar.component.html',
  styleUrls: ['./title-bar.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TitleBarComponent {
    @Input() title: string;
    @Input() logo: string;
    @Output() onMaximize = new EventEmitter<void>();
    @Output() onMinimize = new EventEmitter<void>();
    @Output() onClose = new EventEmitter<void>();

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
