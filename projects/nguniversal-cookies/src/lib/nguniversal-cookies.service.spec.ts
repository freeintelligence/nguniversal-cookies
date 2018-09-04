import { TestBed, inject } from '@angular/core/testing';

import { NguniversalCookiesService } from './nguniversal-cookies.service';

describe('NguniversalCookiesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NguniversalCookiesService]
    });
  });

  it('should be created', inject([NguniversalCookiesService], (service: NguniversalCookiesService) => {
    expect(service).toBeTruthy();
  }));
});
