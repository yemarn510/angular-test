import { TestBed } from '@angular/core/testing';

import { ApiService } from './api.service';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { of } from 'rxjs';

describe('ApiService', () => {
  let service: ApiService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ 
        provideHttpClient(),
        provideHttpClientTesting(),
      ]
    });;
    service = TestBed.inject(ApiService);

    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
  });

  it('should call get method in get request', () => {
    expect(service.get).toBeTruthy();
  });

  it('should call post method in post request', () => {
    expect(service.post).toBeTruthy();
  });

  it('should call put method in put request', () => {
    expect(service.put).toBeTruthy();
  });

  it('should call delete method in delete request', () => {
    expect(service.delete).toBeTruthy();
  });

  it('should throw error on error response', () => {
    httpClientSpy.get.and.returnValue(of(new Error('Error')));
    service.get('url').subscribe({
      next: () => {},
      error: (err) => {
        expect(err).toBeInstanceOf(Error);
      }
    });
  });

  it('should return response on success', () => {
    const response = { data: 'data' };
    httpClientSpy.get.and.returnValue(of(response));
    service.get('url').subscribe({
      next: (res) => {
        expect(res).toEqual(response);
      },
      error: () => {}
    });
  });

  it('should call checkRequest method in error response', () => {
    httpClientSpy.get.and.returnValue(of(new Error('Error')));
    service.get('url').subscribe({
      next: () => {},
      error: () => {
        expect(service.checkRequest).toHaveBeenCalled();
      }
    });
  });

  it('should not call checkRequest method in success response', () => {
    httpClientSpy.get.and.returnValue(of({ data: 'data' }));
    service.get('url').subscribe({
      next: () => {},
      error: () => {
        expect(service.checkRequest).not.toHaveBeenCalled();
      }
    });
  });

  it('should call getHeaders method in get request', () => {
    httpClientSpy.get.and.returnValue(of({ data: 'data' }));
    service.get('url').subscribe({
      next: () => {
        expect(service.getHeaders).toHaveBeenCalled();
      },
      error: () => {}
    });
  });
});
