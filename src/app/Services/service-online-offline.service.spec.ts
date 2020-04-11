import { TestBed } from '@angular/core/testing';

import { ServiceOnlineOfflineService } from './service-online-offline.service';

describe('ServiceOnlineOfflineService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceOnlineOfflineService = TestBed.get(ServiceOnlineOfflineService);
    expect(service).toBeTruthy();
  });
});
