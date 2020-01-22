import { TestBed } from '@angular/core/testing';

import { AouthServiceService } from './aouth-service.service';

describe('AouthServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AouthServiceService = TestBed.get(AouthServiceService);
    expect(service).toBeTruthy();
  });
});
