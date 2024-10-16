import { TestBed } from '@angular/core/testing';

import { SelezionaImmagineService } from './seleziona-immagine.service';

describe('SelezionaImmagineService', () => {
  let service: SelezionaImmagineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SelezionaImmagineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
