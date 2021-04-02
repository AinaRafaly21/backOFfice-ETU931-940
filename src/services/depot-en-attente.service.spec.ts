import { TestBed } from '@angular/core/testing';

import { DepotEnAttenteService } from './depot-en-attente.service';

describe('DepotEnAttenteService', () => {
  let service: DepotEnAttenteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DepotEnAttenteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
