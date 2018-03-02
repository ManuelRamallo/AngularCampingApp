import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignListadoComponent } from './campaign-listado.component';

describe('CampaignListadoComponent', () => {
  let component: CampaignListadoComponent;
  let fixture: ComponentFixture<CampaignListadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampaignListadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampaignListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
