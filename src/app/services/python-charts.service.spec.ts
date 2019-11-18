import { TestBed } from '@angular/core/testing';

import { PythonChartsService } from './python-charts.service';

describe('PythonChartsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PythonChartsService = TestBed.get(PythonChartsService);
    expect(service).toBeTruthy();
  });
});
