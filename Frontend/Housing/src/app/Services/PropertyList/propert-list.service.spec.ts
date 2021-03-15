import { TestBed } from '@angular/core/testing';

import { PropertListService } from './propert-list.service';

describe('PropertListService', () => {
  let service: PropertListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PropertListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
