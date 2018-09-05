import { TestBed, inject } from '@angular/core/testing';

import { NgUniversalRequestService } from './request.service';

describe('NgUniversalRequestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgUniversalRequestService]
    });
  });

  it('should be created', inject([NgUniversalRequestService], (service: NgUniversalRequestService) => {
    expect(service).toBeTruthy();
  }));
});
