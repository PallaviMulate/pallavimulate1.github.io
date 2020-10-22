import { TestBed } from '@angular/core/testing';

import { DigiservicesService } from './digiservices.service';

describe('DigiservicesService', () => {
  let service: DigiservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DigiservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
