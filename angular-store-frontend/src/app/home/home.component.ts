import { Component } from '@angular/core';

import { User } from '@app/_models';
import { AccountService, AuthenticationService } from '@app/_services';
import { first } from 'rxjs/operators';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent {
    loading = false;
    user: User;
    userFromApi: User;

    constructor(private accountService: AccountService, private authenticationService: AuthenticationService) {
        this.user = this.accountService.userValue;
    }

    ngOnInit() {
        this.loading = true;
        this.accountService.getById(this.user.id).pipe(first()).subscribe(user => {
            this.loading = false;
            this.userFromApi = user;
        });
    }
}