import { Component, OnInit } from '@angular/core';
import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {AuthService} from '../../services/auth.service';
import {CampaignsService} from '../../services/campaigns.service';
import {Campaign} from '../models/Campaign';

@Component({
  selector: 'app-mis-campaign-listado',
  templateUrl: './mis-campaign-listado.component.html',
  styleUrls: ['./mis-campaign-listado.component.css']
})
export class MisCampaignListadoComponent implements OnInit {

  listaMisCampaigns: Campaign[] = [];
  modalRef: NgbModalRef;


  constructor( private authService: AuthService, private campaignService: CampaignsService) { }


  ngOnInit() {
    this.authService.checkAuth();

    this.campaignService.getMisCampaigns().subscribe(
      respuesta => {
        this.listaMisCampaigns = respuesta;
      });

  }

}
