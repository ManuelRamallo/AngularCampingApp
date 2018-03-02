import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MisCampaignListadoComponent } from './mis-campaign-listado.component';

describe('MisCampaignListadoComponent', () => {
  let component: MisCampaignListadoComponent;
  let fixture: ComponentFixture<MisCampaignListadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MisCampaignListadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MisCampaignListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
