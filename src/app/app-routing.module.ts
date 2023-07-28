import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthGuard } from './shared/guards/auth.guard';

const routes: Routes = [
    { path: '', redirectTo: '/auth/login', pathMatch: 'full' },
    { path: 'auth', loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule) },
    {
        path: 'layout',
        loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule),
        //canActivate: [AuthGuard]
    },
    { path: '**', redirectTo: '/auth/login' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
