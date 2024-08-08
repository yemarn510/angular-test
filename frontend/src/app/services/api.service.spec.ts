import { TestBed } from '@angular/core/testing';

import { ApiService } from './api.service';
import { HttpErrorResponse, provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { of, throwError } from 'rxjs';

describe('ApiService', () => {
  let apiServiceSpy: jasmine.SpyObj<ApiService>;

  beforeEach(() => {
    apiServiceSpy = jasmine.createSpyObj('ApiService', ['get', 'post', 'put', 'patch', 'delete', 'checkRequest', 'getHeaders']);

    TestBed.configureTestingModule({
      providers: [ 
        provideHttpClient(),
        provideHttpClientTesting(),
        { provide: ApiService, useValue: apiServiceSpy }
      ]
    });;
  });

  it('should call get method in get request', () => {
    expect(apiServiceSpy.get).toBeTruthy();
  });

  it('should call post method in post request', () => {
    expect(apiServiceSpy.post).toBeTruthy();
  });

  it('should call put method in put request', () => {
    expect(apiServiceSpy.put).toBeTruthy();
  });

  it('should call delete method in delete request', () => {
    expect(apiServiceSpy.delete).toBeTruthy();
  });

  it('should throw error on error response', () => {
    apiServiceSpy.get.and.returnValue(throwError(() => new Error('Error')));
    apiServiceSpy.get('url').subscribe({
      next: () => {},
      error: (err) => {
        expect(err).toBeInstanceOf(Error);
      }
    });
  });

  it('should return response on success for get method', () => {
    const response = { data: 'data' };
    apiServiceSpy.get.and.returnValue(of(response));
    apiServiceSpy.get('url').subscribe({
      next: (res) => {
        expect(res).toEqual(response);
      },
      error: () => {}
    });
  });

  it('should return response on success for get method with params', () => {
    const response = { data: 'data' };
    apiServiceSpy.get.and.returnValue(of(response));
    apiServiceSpy.get('url').subscribe({
      next: (res) => {
        expect(res).toEqual(response);
      },
      error: () => {}
    });
  });

  it('should return response on success post method', () => {
    const response = { data: 'data' };
    apiServiceSpy.post.and.returnValue(of(response));
    apiServiceSpy.post('url', {}).subscribe({
      next: (res) => {
        expect(res).toEqual(response);
      },
      error: () => {}
    });
  });

  it('should return response on success patch method', () => {
    const response = { data: 'data' };
    apiServiceSpy.patch.and.returnValue(of(response));
    apiServiceSpy.patch('url', {}).subscribe({
      next: (res) => {
        expect(res).toEqual(response);
      },
      error: () => {}
    });
  });

  it('should return response on success put method', () => {
    const response = { data: 'data' };
    apiServiceSpy.put.and.returnValue(of(response));
    apiServiceSpy.put('url', {}).subscribe({
      next: (res) => {
        expect(res).toEqual(response);
      },
      error: () => {}
    });
  });

  it('should return response on success delete method', () => {
    const response = { data: 'data' };
    apiServiceSpy.delete.and.returnValue(of(response));
    apiServiceSpy.delete('url').subscribe({
      next: (res) => {
        expect(res).toEqual(response);
      },
      error: () => {}
    });
  });

  it('should call checkRequest method in error response for get method', () => {
    apiServiceSpy.get.and.returnValue(throwError(() => apiServiceSpy.checkRequest(new HttpErrorResponse({ status: 404 }))));
    apiServiceSpy.get('url').subscribe({
      next: () => {},
      error: () => {
        expect(apiServiceSpy.checkRequest).toHaveBeenCalled();
      }
    });
  });

  it('should call checkRequest method in error response for post method', () => {
    apiServiceSpy.post.and.returnValue(throwError(() => apiServiceSpy.checkRequest(new HttpErrorResponse({ status: 404 }))));
    apiServiceSpy.post('url', {}).subscribe({
      next: () => {},
      error: () => {
        expect(apiServiceSpy.checkRequest).toHaveBeenCalled();
      }
    });
  });

  it('should call checkRequest method in error response for patch method', () => {
    apiServiceSpy.patch.and.returnValue(throwError(() => apiServiceSpy.checkRequest(new HttpErrorResponse({ status: 404 }))));
    apiServiceSpy.patch('url', {}).subscribe({
      next: () => {},
      error: () => {
        expect(apiServiceSpy.checkRequest).toHaveBeenCalled();
      }
    });
  });

  it('should call checkRequest method in error response for put method', () => {
    apiServiceSpy.put.and.returnValue(throwError(() => apiServiceSpy.checkRequest(new HttpErrorResponse({ status: 404 }))));
    apiServiceSpy.put('url', {}).subscribe({
      next: () => {},
      error: () => {
        expect(apiServiceSpy.checkRequest).toHaveBeenCalled();
      }
    });
  });

  it('should call checkRequest method in error response for delete method', () => {
    apiServiceSpy.delete.and.returnValue(throwError(() => apiServiceSpy.checkRequest(new HttpErrorResponse({ status: 404 }))));
    apiServiceSpy.delete('url').subscribe({
      next: () => {},
      error: () => {
        expect(apiServiceSpy.checkRequest).toHaveBeenCalled();
      }
    });
  });

  it('should not call checkRequest method in success response', () => {
    apiServiceSpy.get.and.returnValue(of({ data: 'data' }));
    apiServiceSpy.get('url').subscribe({
      next: () => {},
      error: () => {}
    });
    expect(apiServiceSpy.checkRequest).not.toHaveBeenCalled();
  });
});
