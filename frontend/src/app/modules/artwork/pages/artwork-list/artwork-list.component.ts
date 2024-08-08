import { Component, OnInit } from '@angular/core';
import { ArtworkService } from '../../artwork.service';
import { HttpParams } from '@angular/common/http';
import { Artwork, ArtworkStyleDropdown } from '../../../../models/artwork.model';

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

  selectedStyles: string[] = [];

  artworks: Artwork[] = [];
  artworkStyles: ArtworkStyleDropdown[] = [];

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
        this.artworkStyles = this.createStyleList(this.artworks);
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  prevPage(): void {
    this.page = this.page - 1;
    this.getArtworks();
  }

  nextPage(): void {
    this.page = this.page + 1;
    this.getArtworks();
  }

  goToPage(pageNumber: number): void {
    this.page = pageNumber;
    this.getArtworks();
  }

  createStyleList(artworks: Artwork[]): ArtworkStyleDropdown[] {
    if (!artworks.length) {
      return [];
    }

    const groupByArtworkStyles: { [key in string]: number} = {};

    artworks.forEach((artwork) => {
      artwork.style_titles.forEach((style) => {
        if (groupByArtworkStyles[style]) {
          groupByArtworkStyles[style] += 1;
        } else {
          groupByArtworkStyles[style] = 1;
        }
      });
    });

    return Object.keys(groupByArtworkStyles).map((key) => {
      return{
        value: key,
        label: `${key} (${groupByArtworkStyles[key]})`
      };
    });
  }
}
