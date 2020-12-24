import { TestBed } from '@angular/core/testing';

import { LoadExternalScriptService } from './load-external-script.service';

describe('LoadExternalScriptService', () => {
  let service: LoadExternalScriptService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoadExternalScriptService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
