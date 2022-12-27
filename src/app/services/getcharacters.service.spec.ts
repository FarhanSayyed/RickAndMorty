import { TestBed } from '@angular/core/testing';

import { GetcharactersService } from './getcharacters.service';

describe('GetcharactersService', () => {
  let service: GetcharactersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetcharactersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
