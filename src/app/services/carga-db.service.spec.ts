import { TestBed } from '@angular/core/testing';

import { CargaDBService } from './carga-db.service';

describe('CargaDBService', () => {
  let service: CargaDBService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CargaDBService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
