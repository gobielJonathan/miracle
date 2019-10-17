import { TestBed } from '@angular/core/testing';

import { BinusmayaService } from './binusmaya.service';

describe('BinusmayaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BinusmayaService = TestBed.get(BinusmayaService);
    expect(service).toBeTruthy();
  });
});
