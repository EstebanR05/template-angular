import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AuthLoginPageComponent} from "./components/auth-login-page/auth-login-page.component";

const routes: Routes = [
  {
    path: 'login',
    children: [
      {
        path: '',
        component: AuthLoginPageComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModAuthRoutingModule {
}
