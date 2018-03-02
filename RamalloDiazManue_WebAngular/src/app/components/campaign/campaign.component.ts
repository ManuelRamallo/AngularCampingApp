import {Component, EventEmitter, Input, OnInit} from '@angular/core';
import {Campaign} from '../models/Campaign';
import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {CampaignsService} from '../../services/campaigns.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-campaign',
  templateUrl: './campaign.component.html',
  styleUrls: ['./campaign.component.css']
})
export class CampaignComponent implements OnInit {
  @Input() campaign: Campaign;
  /*@Output clickAportaciones: EventEmitter<Campaign> = new EventEmitter();*/


  modalRef: NgbModalRef;
  codigoCamp = '';

  constructor(private modalService: NgbModal, private campaignService: CampaignsService, private router: Router) { }

  mostrarModal(modalContent: any) {
    this.modalRef = this.modalService.open(modalContent, {size: 'lg'});
  }

  guardarCampaign(modalAgregarCampaign) {
    this.modalRef.dismiss(modalAgregarCampaign);
    this.campaignService.addCampaigns(this.codigoCamp)
      .subscribe( respuesta => {
        alert('Se ha unido Perfectamente');
      }, error => {
        alert('No se ha unido a la campaña');
      });
  }

  ngOnInit() {
  }

}
