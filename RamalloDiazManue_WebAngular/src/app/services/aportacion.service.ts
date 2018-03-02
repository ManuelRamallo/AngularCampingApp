import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {AuthService} from './auth.service';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class AportacionService {

  authUrl = 'http://localhost:3000/api/v1/campaign';
  public requestOptions: HttpHeaders;

  constructor(private http: HttpClient, private router: Router, private authService: AuthService) {
    const key = this.authService.getKey();
    console.log(key);
    this.requestOptions = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + key
    });
  }

  mostrarAportaciones(idCampaign): Observable<any> {
    return this.http.get<any>(`${this.authUrl}/aportaciones/${idCampaign}`,
      {headers: this.requestOptions});
  }

  agregarAportacion(idCampaign: string, idCategoria: string, cantidad: string): Observable<any> {

    return this.http.post<any>(`${this.authUrl}/add`,
      {
        campaign_id: idCampaign, id_category: idCategoria, cantidad: cantidad}, { headers: this.requestOptions} );


  }

}
