import { TestBed } from '@angular/core/testing';

import { ArtworkService } from './artwork.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ApiService } from '../../services/api.service';
import { Artwork } from '../../models/artwork.model';
import { of, throwError } from 'rxjs';
import { PaginatedResponse } from '../../models/common.model';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { DUMMY_RESPONSE } from '../../constants/mocked-artworks.constant';

describe('ArtworkService', () => {
  let apiService: ApiService;
  let artworkService: ArtworkService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ 
        provideHttpClient(),
        provideHttpClientTesting(),
      ]
    });
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    apiService = new ApiService(httpClientSpy);
    artworkService = new ArtworkService(apiService);
  });

  it('should return expected artworks', (done: DoneFn) => {
    const expectedArtWork: PaginatedResponse<Artwork> = DUMMY_RESPONSE;

    httpClientSpy.get.and.returnValue(of(expectedArtWork));
    const params = new HttpParams();
    artworkService.getArtworks(params).subscribe({
      next: (res) => {
        expect(res).toEqual(expectedArtWork);
        done();
      },
      error: done.fail,
    });
    expect(httpClientSpy.get.calls.count()).withContext('one call').toBe(1);
  });

  it('should return error on error api call', (done: DoneFn) => {
    httpClientSpy.get.and.returnValue(throwError(() => new Error('Error')));

    const params = new HttpParams();
    artworkService.getArtworks(params).subscribe({
      next: () => {
        done.fail('Expected an error, but got a success response');
      },
      error: (err) => {
        expect(err).toBeInstanceOf(Error);
        done();
      },
    });
  });
});
