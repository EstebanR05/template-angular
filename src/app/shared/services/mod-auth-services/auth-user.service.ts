import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthUserService {
  
  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  async validAccessToken(login: any): Promise<void> {
    const params = new URLSearchParams();
    params.append('username', login.username);
    params.append('password', login.password);
    params.append('grant_type', 'password');
    params.append('client_id', 'siscontri');

    const headers =
      new HttpHeaders({
        'Content-type': 'application/x-www-form-urlencoded; charset=utf-8',
        Authorization: 'Basic ' + btoa('siscontri:password')
      });

    const responseAuth = await this.http.post('oauth/token', params.toString(), { headers }).toPromise();

    this.saveToken(responseAuth, login.username);

    await this.router.navigate(['/']);
  }

  checkCredentials(): boolean {
    if (!localStorage.getItem('access_token')) {
      this.router.navigate(['/login']);
    }

    return true;
  }

  getAccessToken(): any {
    if (this.checkCredentials()) {
      return localStorage.getItem('access_token');
    }

    return null;
  }

  getInfoUser(): any {
    if (localStorage.getItem('user_info')) {
      return localStorage.getItem('user_info');
    }

    return null;
  }

  async getCurrentUser(): Promise<any> {
    if (localStorage.getItem('user_info')) {
      return localStorage.getItem('user_info');
    }

    if (this.checkCredentials()) {
      const url = `secu/api/v1/search/users/${localStorage.getItem('username')}`;

      const user = await this.http.get(url).toPromise();
      localStorage.setItem('user_info', JSON.stringify(user));

      return user;
    }
  }

  getApplicationInfo(): Promise<any> {
    const url = `secu/api/v1/search/applicationInfo`;
    return this.http.get<any>(url).toPromise();
  }

  logout(): void {
    this.clearStorage();
    this.router.navigate(['/login']);
  }

  private clearStorage(): void {
    localStorage.removeItem('access_token');
    localStorage.removeItem('username');
    localStorage.removeItem('expires_in');
    localStorage.removeItem('user_info');
  }

  private saveToken(token: any, username: string): void {
    localStorage.setItem('access_token', token.access_token);
    localStorage.setItem('username', username);
    localStorage.setItem('expires_in', token.expires_in);
  }
}
