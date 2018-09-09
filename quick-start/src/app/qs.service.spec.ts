import { TestBed } from '@angular/core/testing';

import { QsService } from './qs.service';

describe('QsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QsService = TestBed.get(QsService);
    expect(service).toBeTruthy();
  });
});
