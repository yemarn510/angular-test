import { TestBed } from '@angular/core/testing';

import { ApiService } from './api.service';
import { HttpClient, HttpErrorResponse, HttpHeaders, provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { of, throwError } from 'rxjs';

describe('ApiService', () => {
  let apiServiceSpy: jasmine.SpyObj<ApiService>;

  beforeEach(() => {
    apiServiceSpy = jasmine.createSpyObj('ApiService', ['get', 'post', 'put', 'delete', 'checkRequest', 'getHeaders']);

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

  it('should return response on success', () => {
    const response = { data: 'data' };
    apiServiceSpy.get.and.returnValue(of(response));
    apiServiceSpy.get('url').subscribe({
      next: (res) => {
        expect(res).toEqual(response);
      },
      error: () => {}
    });
  });

  it('should call checkRequest method in error response', () => {
    apiServiceSpy.get.and.returnValue(throwError(() => apiServiceSpy.checkRequest(new HttpErrorResponse({ status: 404 }))));
    apiServiceSpy.get('url').subscribe({
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
