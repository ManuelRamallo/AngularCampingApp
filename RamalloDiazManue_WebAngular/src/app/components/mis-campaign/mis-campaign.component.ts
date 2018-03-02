import {Component, Input, OnInit} from '@angular/core';
import {Campaign} from '../models/Campaign';
import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {CampaignsService} from '../../services/campaigns.service';
import {Categoria} from '../models/Categoria';
import {AuthService} from '../../services/auth.service';
import {CategoriaService} from '../../services/categoria.service';
import {AportacionService} from '../../services/aportacion.service';

@Component({
  selector: 'app-mis-campaign',
  templateUrl: './mis-campaign.component.html',
  styleUrls: ['./mis-campaign.component.css']
})
export class MisCampaignComponent implements OnInit {

  @Input() misCampaign: Campaign;
  @Input() categoria: Categoria;
  modalRef: NgbModalRef;

  listaCategoriasProv: Categoria[] = [];

  idCampaign = '';
  idAportacion= '';
  cantidad;

  constructor(private campaignService: CampaignsService, private authService: AuthService, private modalService: NgbModal,
              private categoriaService: CategoriaService, private aportacionService: AportacionService) { }

  mostrarModal(modalContent: any, idCamp) {
    this.categoriaService.categoria(idCamp).subscribe(
      categoria => {
          this.listaCategoriasProv = categoria;

          this.idCampaign = idCamp;

          console.log(idCamp);
          console.log(this.listaCategoriasProv);
      });

    this.modalRef = this.modalService.open(modalContent);
  }

  agregarAportacion(modalContent) {

    if (this.idAportacion === '' || this.cantidad === '') {

      alert('No puede realizar donaciones vacias');

    } else {

      console.log(this.idAportacion);
      console.log(this.cantidad);
      console.log(this.idCampaign);

      this.aportacionService.agregarAportacion(this.idCampaign, this.idAportacion, this.cantidad).subscribe(
        respuesta => {
          console.log(respuesta);
        }
      );
      this.modalRef.dismiss(modalContent);
    }
  }


  ngOnInit() {
  }

}
