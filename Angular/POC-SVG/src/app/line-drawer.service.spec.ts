import { TestBed } from '@angular/core/testing';

import { LineDrawerService } from './line-drawer.service';

describe('LineDrawerService', () => {
  let service: LineDrawerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LineDrawerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
