import { TestBed } from '@angular/core/testing';

import { EmpListService } from './emp-list.service';

describe('EmpListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmpListService = TestBed.get(EmpListService);
    expect(service).toBeTruthy();
  });
});
