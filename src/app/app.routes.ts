import { Routes } from '@angular/router';
import { noAuthGuard } from '../guard/no-auth.guard';
import { authGuard } from '../guard/auth.guard';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'sign-in' },

    { path: 'signed-in-redirect-admin', pathMatch: 'full', redirectTo: 'home-admin' },
    { path: 'signed-in-redirect-teacher', pathMatch: 'full', redirectTo: 'home-teacher' },
    { path: 'signed-in-redirect-student', pathMatch: 'full', redirectTo: 'home-student' },


    { path: 'sign-in', loadComponent: () => import('./modules/auth/sign-in/sign-in.component').then(m => m.SignInComponent) },

    { path: 'sign-out', canActivate: [authGuard], loadComponent: () => import('./modules/auth/sign-out/sign-out.component').then(m => m.SignOutComponent) },

    //{ path: 'home', loadComponent: () => import('./modules/admin/home-admin/home-admin.component').then(m => m.HomeAdminComponent) },
];
