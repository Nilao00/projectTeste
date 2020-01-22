import { TestBed } from '@angular/core/testing';

import { ListElementServiceService } from './list-element-service.service';

describe('ListElementServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListElementServiceService = TestBed.get(ListElementServiceService);
    expect(service).toBeTruthy();
  });
});
