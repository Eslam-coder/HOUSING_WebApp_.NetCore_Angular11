import { TestBed } from '@angular/core/testing';

import { HousesListService } from './houses-list.service';

describe('HousesListService', () => {
  let service: HousesListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HousesListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
