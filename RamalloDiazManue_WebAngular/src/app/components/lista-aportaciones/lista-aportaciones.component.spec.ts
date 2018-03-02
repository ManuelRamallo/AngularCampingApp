import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaAportacionesComponent } from './lista-aportaciones.component';

describe('ListaAportacionesComponent', () => {
  let component: ListaAportacionesComponent;
  let fixture: ComponentFixture<ListaAportacionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaAportacionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaAportacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
