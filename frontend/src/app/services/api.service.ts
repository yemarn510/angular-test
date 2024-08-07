import {
  HttpClient,
  HttpHeaders,
  HttpParams,
  HttpErrorResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(
    private http: HttpClient,
  ) {}

  getHeaders(): { headers: HttpHeaders } {
    // this project does not have any authentication, so we are not sending any token
    return {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
    };
  }

  getBlob(url?: string, params?: HttpParams): Observable<ArrayBuffer> {
    return this.http.get(url || '', {
      ...this.getHeaders(),
      responseType: 'arraybuffer',
      params: params,
    });
  }

  post<T = unknown>(url: string, data: Object | FormData): Observable<T> {
    return this.http.post<T>(url, data, { ...this.getHeaders() }).pipe(
      catchError((error) => {
        this.checkRequest(error);
        return throwError(error);
      }),
    );
  }

  postText(url: string, data: Object | FormData): Observable<string> {
    return this.http.post(url, data, {
      ...this.getHeaders(),
      responseType: 'text',
    });
  }

  postBlob<T = unknown>(
    url: string,
    data: Object | FormData,
  ): Observable<ArrayBuffer> {
    return this.http.post(url, data, {
      ...this.getHeaders(),
      responseType: 'arraybuffer',
    });
  }

  get<T = unknown>(url: string, params?: HttpParams): Observable<T> {
    return this.http.get<T>(url, { ...this.getHeaders(), params: params }).pipe(
      catchError((error) => {
        this.checkRequest(error);
        return throwError(error);
      }),
    );
  }

  patch<T = unknown>(url: string, data: Object | FormData): Observable<T> {
    return this.http.patch<T>(url, data, { ...this.getHeaders() }).pipe(
      catchError((error) => {
        this.checkRequest(error);
        return throwError(error);
      }),
    );
  }

  put<T = unknown>(url: string, data: Object | FormData): Observable<T> {
    return this.http.put<T>(url, data, { ...this.getHeaders() }).pipe(
      catchError((error) => {
        this.checkRequest(error);
        return throwError(error);
      }),
    );
  }

  delete<T = unknown>(url: string, data?: Object | FormData): Observable<T> {
    return this.http.delete<T>(url, { ...this.getHeaders(), body: data }).pipe(
      catchError((error) => {
        this.checkRequest(error);
        return throwError(error);
      }),
    );
  }

  checkRequest(error: HttpErrorResponse): void {
    if (error.status === 401 || error?.error?.message === 'Invalid Token') {
      console.error('Session Timeout, Please Login Again');
    }
  }
}
