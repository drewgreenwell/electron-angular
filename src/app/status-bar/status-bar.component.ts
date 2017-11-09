import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-status-bar',
    templateUrl: './status-bar.component.html',
    styleUrls: ['./status-bar.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class StatusBarComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}
