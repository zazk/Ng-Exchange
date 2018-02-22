/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DataService } from './data.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('Service: Data', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DataService]
    });
  });

  it('should have Http', inject([DataService], (service: DataService) => {
    expect(!!service.http).toEqual(true);
  }));

  it('should get data from the server', inject([DataService], (service: DataService) => {
    spyOn(console, 'log');
    expect(console.log).not.toHaveBeenCalled();

    service.getData();
    expect(console.log).toHaveBeenCalled();
    service.getData().subscribe( (result) => {
      expect(result).toEqual({ value: 'AngularClass' });
    });
  }));

});
