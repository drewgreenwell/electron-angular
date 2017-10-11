import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-welcome',
    templateUrl: 'welcome.component.html'
})

export class WelcomeComponent implements OnInit {

    title: string;

    constructor(private route: ActivatedRoute) {
        this.title = route.snapshot.data['title'];
    }

    ngOnInit() { }
}
