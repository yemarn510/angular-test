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
  copiedArtworks: Artwork[] = [];
  artworkStyles: ArtworkStyleDropdown[] = [];

  sortBy: keyof Artwork | string = '';

  sortByValueAndLabelConnection: { [key in string]: string } = {
    title: 'Name',
    artist_title: 'Artist',
    date_start: 'Date'
  }

  sortByList: string[] = [
    'title',
    'artist_title',
    'date_start',
  ]

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
        this.copiedArtworks = structuredClone(res.data);
        this.count = res.pagination.total;
        this.config = res.config.iiif_url;
        this.selectedStyles = [];
        this.artworkStyles = this.createStyleList(res.data);
        this.filterAndSortArtworks();
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

  filterArtworks(artworkList: Artwork[] = this.copiedArtworks): Artwork[] {
    if (!this.selectedStyles.length) {
      return structuredClone(artworkList);
    }

    return artworkList.filter((artwork) => {
      return artwork.style_titles.some((style) => this.selectedStyles.includes(style));
    });
  }

  sortArtworks(artworkList: Artwork[] = this.copiedArtworks): Artwork[] {
    if (!this.sortBy) {
      return structuredClone(artworkList);
    }

    if (this.sortBy === 'date_start') {
      return artworkList.sort((first, second) => {
        const firstDate = new Date(first.date_start);
        const secondDate = new Date(second.date_start);
        return firstDate.getTime() - secondDate.getTime();
      });
    }

    return artworkList.sort((first, second) => {
      const firstString = (first[this.sortBy as keyof Artwork] || '') as string;
      const secondString = (second[this.sortBy as keyof Artwork] || '') as string;
      return firstString.localeCompare(secondString);
    });
  }

  filterAndSortArtworks(): void {
    this.artworks = this.filterArtworks();
    this.artworks = this.sortArtworks(this.artworks);
  }
}
