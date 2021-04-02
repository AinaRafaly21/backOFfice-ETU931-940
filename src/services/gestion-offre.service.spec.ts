import { TestBed } from '@angular/core/testing';

import { GestionOffreService } from './gestion-offre.service';

describe('GestionOffreService', () => {
  let service: GestionOffreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GestionOffreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
