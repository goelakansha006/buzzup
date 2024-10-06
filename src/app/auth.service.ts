import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiUrl: string = 'https://api.buzzup.club';

  constructor(private http: HttpClient) { }

  loginUser(email: string, password: string): Observable<any> {
    return this.http.post(this.apiUrl + '/v1/user/login', { email, password });
  }


  public isAuthenticated(): boolean {
    const token: any = localStorage.getItem('authToken');
    const helper = new JwtHelperService();
    const isExpired = helper.isTokenExpired(token);

    const decodedToken = helper.decodeToken(token);

    if (decodedToken?.expires === undefined) { return false; }
    return new Date().getTime() / 1000 < decodedToken.expires
  }
}
