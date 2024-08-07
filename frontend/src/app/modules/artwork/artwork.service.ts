import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { APIS } from '../../constants/api.constants';

@Injectable({
  providedIn: 'root'
})
export class ArtworkService {

  constructor(
    private apiService: ApiService,
  ) { }

  getArtworks(params: HttpParams) {
    return this.apiService.get(APIS.v1.artworks, params);
  }
}
