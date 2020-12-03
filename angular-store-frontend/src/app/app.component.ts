import { Component } from '@angular/core';
import { AccountService} from './_services';
import { Role, User } from './_models';

@Component({ selector: 'app', templateUrl: 'app.component.html' })
export class AppComponent {
    user: User;

    constructor(private accountService: AccountService) {
        this.accountService.user.subscribe(x => this.user = x);
    }

    // constructor(private authenticationService: AuthenticationService) {
    //     this.authenticationService.user.subscribe(x => this.user = x);
    // }

    get isAdmin() {
        return this.user && this.user.role === Role.Admin;
    }

    logout() {
        this.accountService.logout();
    }
}