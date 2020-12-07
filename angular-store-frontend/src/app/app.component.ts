import { Component } from '@angular/core';
import { AccountService} from './_services';
import { Role, User } from './_models';

@Component({ selector: 'app', templateUrl: 'app.component.html' })
export class AppComponent {
    user: User;
    // isLoggedIn = false; 
    // showAdmin = false;
    // username: string;

    constructor(private accountService: AccountService) {
        this.accountService.user.subscribe(x => this.user = x);
    }

    // ngOnInit(): void {
    //     //this.isLoggedIn = !!this..getToken();
    
    //     if(this.isLoggedIn){
    //       this.showAdmin = this.user.role.includes('Admin');
    
    //       this.username = this.user.username;
    //     }
    //   }

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