import { TestBed } from '@angular/core/testing';

import { ApiinterceptorInterceptor } from './apiinterceptor.interceptor';

describe('ApiinterceptorInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      ApiinterceptorInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: ApiinterceptorInterceptor = TestBed.inject(ApiinterceptorInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
