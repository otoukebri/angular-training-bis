import { TestBed } from '@angular/core/testing';

import { GuardSampleService } from './guard-sample.service';

describe('GuardSampleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GuardSampleService = TestBed.get(GuardSampleService);
    expect(service).toBeTruthy();
  });
});
