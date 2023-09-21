import { TestBed } from '@angular/core/testing';

import { CommnService } from './commn.service';

describe('CommnService', () => {
  let service: CommnService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommnService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
