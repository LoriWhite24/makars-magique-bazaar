import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { AuthGuard } from './_helpers';

const accountModule = () => import('./account/account.module').then(x => x.AccountModule);
const usersModule = () => import('./users/users.module').then(x => x.UsersModule);

//TODO fix routing to admin and get users to be displayed as admin
//Main entry point for app and gateway logged in components
const routes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'users', loadChildren: usersModule, canActivate: [AuthGuard]},
    { path: 'account', loadChildren: accountModule },
    // {
    //     path: 'admin',
    //     component: AdminComponent,
    //     canActivate: [AuthGuard],
    //     data: { roles: [Role.Admin] }
    // },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }