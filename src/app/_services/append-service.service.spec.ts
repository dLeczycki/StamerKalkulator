/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AppendServiceService } from './append-service.service';

describe('Service: AppendService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppendServiceService]
    });
  });

  it('should ...', inject([AppendServiceService], (service: AppendServiceService) => {
    expect(service).toBeTruthy();
  }));
});
