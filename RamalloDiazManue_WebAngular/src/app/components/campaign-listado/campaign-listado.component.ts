import { Component, OnInit } from '@angular/core';
import {Campaign} from '../models/Campaign';
import {AuthService} from '../../services/auth.service';
import {CampaignsService} from '../../services/campaigns.service';
import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {Router} from '@angular/router';

@Component({
  selector: 'app-campaign-listado',
  templateUrl: './campaign-listado.component.html',
  styleUrls: ['./campaign-listado.component.css']
})
export class CampaignListadoComponent implements OnInit {
  modalRef: NgbModalRef;

  listaCampaigns: Campaign[] = [];

  constructor(private modalService: NgbModal, private authService: AuthService, private campaignService: CampaignsService, private router: Router) { }

  mostrarModal(modalContent: any) {
    this.modalRef = this.modalService.open(modalContent, {size: 'lg'});
  }

  ngOnInit() {
    this.authService.checkAuth();

    this.campaignService.getCampaigns().subscribe(
      respuesta => {
        this.listaCampaigns = respuesta;
      });
  }


  goToAportaciones(camp: Campaign) {
    this.router.navigate(['/listadoMisCampaign', camp._id]);
  }

}
