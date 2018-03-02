import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Aportacion} from '../models/Aportacion';

@Component({
  selector: 'app-aportaciones',
  templateUrl: './aportaciones.component.html',
  styleUrls: ['./aportaciones.component.css']
})
export class AportacionesComponent implements OnInit {

  @Input() aportacion: Aportacion;
  @Output() aportacioneliminadaClicked: EventEmitter<Aportacion> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
