/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ProductCheckerService } from './product-checker.service';

describe('ProductCheckerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductCheckerService]
    });
  });

  it('should ...', inject([ProductCheckerService], (service: ProductCheckerService) => {
    expect(service).toBeTruthy();
  }));
});
