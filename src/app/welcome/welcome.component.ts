import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-welcome',
    templateUrl: 'welcome.component.html',
    styleUrls: ['./welcome.component.scss'],
    encapsulation: ViewEncapsulation.None
})

export class WelcomeComponent implements OnInit {

    title: string;

    constructor(private route: ActivatedRoute) {
        this.title = route.snapshot.data['title'];
    }

    ngOnInit() { }
}
