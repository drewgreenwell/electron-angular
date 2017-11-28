import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';


@Component({
    selector: 'app-dashboard',
    templateUrl: 'dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    encapsulation: ViewEncapsulation.None,
})

export class DashboardComponent implements OnInit, OnDestroy {

    constructor(public router: Router) { }

    ngOnInit() {
    }

    ngOnDestroy() {
    }
}
