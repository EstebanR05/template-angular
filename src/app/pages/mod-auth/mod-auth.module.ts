import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModAuthRoutingModule } from './mod-auth-routing.module';
import { AuthLoginPageComponent } from "./components/auth-login-page/auth-login-page.component";
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AuthLoginPageComponent
  ],
  imports: [
    CommonModule,
    ModAuthRoutingModule,
    FormsModule
  ]
})
export class ModAuthModule {
}
