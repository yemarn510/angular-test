import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { APIS } from '../../constants/api.constants';
import { $PaginatedResponse, PaginatedResponse } from '../../models/common.model';
import { Artwork } from '../../models/artwork.model';

@Injectable({
  providedIn: 'root'
})
export class ArtworkService {

  constructor(
    private apiService: ApiService,
  ) { }

  getArtworks(params: HttpParams): $PaginatedResponse<Artwork> {
    return this.apiService.get<PaginatedResponse<Artwork>>(APIS.v1.artworks, params);
  }
}
