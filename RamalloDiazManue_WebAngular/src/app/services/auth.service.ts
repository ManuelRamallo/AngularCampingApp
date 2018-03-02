import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {User} from '../components/models/User';
import {RespuestaLogin} from '../components/models/respuestaLogin';


const requestOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable()
export class AuthService {
  authUrl = 'http://localhost:3000/api/v1/auth';


  constructor(private http: HttpClient, private router: Router) { }

  doLogin (email: string, password: string): Observable<User> {
    return this.http.post<User>(`${this.authUrl}/login`,
      {email: email, password: password}, requestOptions);
  }

  doRegister (email: string, password: string, nombre_grupo: string, nombre: string): Observable<User> {
    return this.http.post<User>(`${this.authUrl}/register`,
      {email: email, password: password, nombre: nombre, nombre_grupo: nombre_grupo}, requestOptions);
  }

  setLoginData(key: string, nombre: string) {
    localStorage.setItem('key', key);
    localStorage.setItem('nombre', nombre);
  }

  getKey(): string {
    return localStorage.getItem('key');
  }

  getEmail(): string {
    return localStorage.getItem('nombre');
  }

  checkAuth() {
    const apikey = localStorage.getItem('key');
    if ( apikey == null ) {
      this.router.navigate(['/']);
    }
  }

  checkLoggedIn() {
    const apikey = localStorage.getItem('key');
    if ( apikey != null ) {
      this.router.navigate(['/listadoCampaign']);
    }
  }

  doLogout() {
    localStorage.removeItem('key');
  }

  obtenerCampain(idCampaign) {
    localStorage.setItem('idCampaign', idCampaign);
  }

  getCampaing(): string {
    console.log(localStorage.getItem('idCampaign'));
    return localStorage.getItem('idCampaign');
  }

}
