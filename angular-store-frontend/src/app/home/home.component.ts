import { Component } from '@angular/core';

import { User } from '@app/_models';
import { AccountService, AuthenticationService } from '@app/_services';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent {
    loading = false;
    user: User;
    userFromApi: User;

    constructor(private accountService: AccountService, private authenticationService: AuthenticationService) {
        this.user = this.accountService.userValue;
    }
}