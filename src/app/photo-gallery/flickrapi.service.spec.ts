import { TestBed } from '@angular/core/testing';

import { FlickrapiService } from './flickrapi.service';

describe('FlickrapiService', () => {
  let service: FlickrapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlickrapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
