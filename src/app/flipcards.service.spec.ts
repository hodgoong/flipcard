import { TestBed, inject } from '@angular/core/testing';

import { FlipcardsService } from './flipcards.service';

describe('FlipcardsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FlipcardsService]
    });
  });

  it('should be created', inject([FlipcardsService], (service: FlipcardsService) => {
    expect(service).toBeTruthy();
  }));
});
