import { Component, ViewEncapsulation } from '@angular/core';
import { AuthUserService } from 'src/app/shared/services/mod-auth-services/auth-user.service';
import { Login } from 'src/app/shared/interface/user.interface';
import { MessageService } from "primeng/api";

@Component({
  selector: 'auth-login-page',
  templateUrl: './auth-login-page.component.html',
  styleUrls: ['./auth-login-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AuthLoginPageComponent {
  login = <Login>{};

  constructor(
    private userService: AuthUserService,
    private messageService: MessageService
  ) { }

  async onClickSubmit(): Promise<void> {
    try {
      await this.userService.validAccessToken(this.login);
    } catch (e: any) {
      if (e.status === 401 || e.status === 400) {
        this.messageService.add({
          severity: 'warn',
          summary: 'Autenticación',
          detail: 'Usuario y/o contraseña es incorrecta.'
        });
      }
    }
  }
}
