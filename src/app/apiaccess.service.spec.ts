import { TestBed } from '@angular/core/testing';

import { APIAccessService } from './apiaccess.service';

describe('APIAccessService', () => {
  let service: APIAccessService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(APIAccessService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
