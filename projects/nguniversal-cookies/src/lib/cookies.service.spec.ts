import { TestBed, inject } from '@angular/core/testing';

import { NgUniversalCookiesService } from './cookies.service';

describe('NgUniversalCookiesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgUniversalCookiesService]
    });
  });

  it('should be created', inject([NgUniversalCookiesService], (service: NgUniversalCookiesService) => {
    expect(service).toBeTruthy();
  }));
});
