import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MisCampaignComponent } from './mis-campaign.component';

describe('MisCampaignComponent', () => {
  let component: MisCampaignComponent;
  let fixture: ComponentFixture<MisCampaignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MisCampaignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MisCampaignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
