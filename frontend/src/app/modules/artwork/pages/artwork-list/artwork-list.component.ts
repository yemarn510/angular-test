import { Component, OnInit } from '@angular/core';
import { ArtworkService } from '../../artwork.service';
import { HttpParams } from '@angular/common/http';
import { Artwork } from '../../../../models/common.model';

@Component({
  selector: 'app-artwork-list',
  templateUrl: './artwork-list.component.html',
  styleUrl: './artwork-list.component.scss'
})
export class ArtworkListComponent implements OnInit {


  page: number = 1;
  count: number = 0;
  pageSize: number = 10;

  loading: boolean = false;

  config: string = '';

  artworks: Artwork[] = []; 

  constructor(
    private artworkService: ArtworkService
  ) { }

  ngOnInit(): void {
    this.getArtworks();
  }

  getArtworks(): void {
    this.loading = true;
    const params = new HttpParams()
      .set('page', this.page.toString())
      .set('limit', this.pageSize.toString());
    this.artworkService.getArtworks(params).subscribe({
      next: (res) => {
        this.loading = false;
        this.artworks = res.data;
        this.count = res.pagination.total;
        this.config = res.config.iiif_url;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  prevPage() {
    this.page = this.page - 1;
    this.getArtworks();
  }

  nextPage() {
    this.page = this.page + 1;
    this.getArtworks();
  }

  goToPage(n: number) {
    this.page = n;
    this.getArtworks();
  }
}
