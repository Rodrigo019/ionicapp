import { TestBed } from '@angular/core/testing';

import { BaseRequestService } from './base-request-service.service';

describe('BaseRequestServiceService', () => {
  let service: BaseRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BaseRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
