import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthService} from './auth.service';
import {Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class CategoriaService {

  authUrl = 'http://localhost:3000/api/v1/campaign';
  public requestOptions: HttpHeaders;

  constructor(private http: HttpClient, private router: Router, private servicioauth: AuthService) {
    const key = this.servicioauth.getKey();

    this.requestOptions = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + key
    });
  }

  categoria(idCamp): Observable<any> {
    console.log(`idCamp: ` + idCamp);
    return this.http.get<any>(`${this.authUrl}/categories/${idCamp}`,
      {headers: this.requestOptions});

  }


}
