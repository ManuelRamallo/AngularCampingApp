import { TestBed, inject } from '@angular/core/testing';

import { AportacionService } from './aportacion.service';

describe('AportacionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AportacionService]
    });
  });

  it('should be created', inject([AportacionService], (service: AportacionService) => {
    expect(service).toBeTruthy();
  }));
});
