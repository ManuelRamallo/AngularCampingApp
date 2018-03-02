import { Component, OnInit } from '@angular/core';
import {Aportacion} from '../models/Aportacion';
import {AuthService} from '../../services/auth.service';
import {AportacionService} from '../../services/aportacion.service';
import {ActivatedRoute, ParamMap, Route, Router} from '@angular/router';
import 'rxjs/add/operator/switchMap';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-lista-aportaciones',
  templateUrl: './lista-aportaciones.component.html',
  styleUrls: ['./lista-aportaciones.component.css']
})
export class ListaAportacionesComponent implements OnInit {

  listaAportaciones: Aportacion[] = [];
  idCamp: string;

  constructor(private authService: AuthService, private aportacionesService: AportacionService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.switchMap((params: ParamMap) =>
      this.idCamp = params.get('id')
    );

    this.authService.checkAuth();
    this.aportacionesService.mostrarAportaciones(this.authService.getCampaing()).subscribe(
      campaign => {
        this.listaAportaciones = campaign;
        console.log(campaign);

      }
    );
  }

}
