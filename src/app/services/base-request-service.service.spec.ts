import { TestBed } from '@angular/core/testing';

import { BaseRequestServiceService } from './base-request-service.service';

describe('BaseRequestServiceService', () => {
  let service: BaseRequestServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BaseRequestServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
