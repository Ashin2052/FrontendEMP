import { TestBed } from '@angular/core/testing';

import { LeaceServiceService } from './leace-service.service';

describe('LeaceServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LeaceServiceService = TestBed.get(LeaceServiceService);
    expect(service).toBeTruthy();
  });
});
