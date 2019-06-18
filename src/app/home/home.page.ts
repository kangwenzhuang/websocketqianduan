import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {
    username: string;

    constructor( private router: Router) {
    }

    go() {
        this.router.navigate(['/websocket', this.username]);
    }
}
