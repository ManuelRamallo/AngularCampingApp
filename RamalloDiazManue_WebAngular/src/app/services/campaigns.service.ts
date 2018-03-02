import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthService} from './auth.service';
import {Observable} from 'rxjs/Observable';
import {Campaign} from '../components/models/Campaign';

@Injectable()
export class CampaignsService {
  campaignUrl = 'http://localhost:3000/api/v1/campaign';
  public requestOptions: HttpHeaders;

  constructor(private http: HttpClient, private authService: AuthService ) {
    const key = this.authService.getKey();
    console.log(key);
    this.requestOptions = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + key
    });
  }

  getCampaigns(): Observable<any> {
    return this.http.get<any>(`${this.campaignUrl}/list`, {headers: this.requestOptions});
  }

  getMisCampaigns(): Observable<any> {
    return this.http.get<any>(`${this.campaignUrl}/myList`, {headers: this.requestOptions});
  }

  addCampaigns (codigoCamp: string): Observable<any> {
    return this.http.post<any>(`${this.campaignUrl}/join`,
      {campaignCode: codigoCamp},
      {headers: this.requestOptions});
  }


}
