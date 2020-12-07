import { Component, Injectable, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { AccountService } from '@app/_services';
import { Role, User } from '@app/_models';

@Component({ templateUrl: 'list.component.html' })

export class ListComponent implements OnInit {
    //Test data for view
    // users  = [{ id: '1', username: 'admin', password: 'password', firstName: 'Admin', lastName: 'User',  email: 'adminbazaar@gmail.com', role: Role.Admin },
    // { id: '2', username: 'user', password: 'password', firstName: 'Normal', lastName: 'User', email: 'user@gmail.com', role: Role.User }];

    users: any;
    currentUser = null;
    currentIndex = -1;
    username = '';
   // /users

    constructor(private accountService: AccountService) {}

    ngOnInit() {
        console.log(this.users);

     this.retrieveUsers();  
    }
    retrieveUsers(): void {
    this.accountService.getAll()
    .pipe(first())
    .subscribe(users => this.users = users);
    console.log(this.users);
    }
    
    
    deleteUser(id: string) {
        const user = this.users.find(x => x.id === user);
        user.isDeleting = true;
        this.accountService.delete(id)
            .pipe(first())
            .subscribe(() => this.users = this.users.filter(x => x.id !== id));
    }
}