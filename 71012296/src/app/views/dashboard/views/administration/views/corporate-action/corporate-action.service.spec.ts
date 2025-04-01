import { TestBed } from '@angular/core/testing';

import { CorporateActionService } from './corporate-action.service';

describe('CorporateActionService', () => {
  let service: CorporateActionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CorporateActionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
