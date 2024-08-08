import { Component, OnInit } from '@angular/core';
import { ArtworkService } from '../../artwork.service';
import { HttpParams } from '@angular/common/http';
import { Artwork, ArtworkStyleDropdown } from '../../../../models/artwork.model';
import { trigger, state, style, transition, animate, query, stagger, animation } from '@angular/animations';


@Component({
  selector: 'app-artwork-list',
  templateUrl: './artwork-list.component.html',
  styleUrl: './artwork-list.component.scss',
  animations: [
    trigger('flyInOut', [
      transition('void => *', [
        style({ transform: 'translateY(30%)', opacity: 0}),
        animate('500ms {{delay}}ms ease-out'),
      ], { params: { delay: 0 } }),
    ]),
  ],
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
    // to get the list of artworks from the api call
    this.loading = true;
    const params = new HttpParams()
      .set('page', this.page.toString())
      .set('limit', this.pageSize.toString());
    this.artworkService.getArtworks(params).subscribe({
      next: (res) => {
        this.loading = false; // to stop the loading spinner
        this.copiedArtworks = structuredClone(res.data); // deep copy to reuse again and again
        this.count = res.pagination.total; // to set the total count of the artworks
        this.config = res.config.iiif_url; // to get the iiif url for the images
        this.selectedStyles = [];
        this.artworkStyles = this.createStyleList(res.data); // to create the list of styles for dropdown
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
    /*
      to create the list of styles for the dropdown
      this function will be called whenever the artworks are fetched
    */
    if (!artworks.length) {
      return [];
    }

    const groupByArtworkStyles: { [key in string]: number} = {};

    /*
      to group the styles and count the number of artworks for each style
      example: groupByArtworkStyles = { 'Classic': 2, 'Modernism': 1 }
      return value: [ { value: 'Classic', label: 'Classic (2)' }, { value: 'Modernism', label: 'Modernism (1)' } ]
    */

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
    /*
      to filter the artworks based on the selected styles
      if no styles are selected, return the original list
    */
    if (!this.selectedStyles.length) {
      return structuredClone(artworkList);
    }

    return artworkList.filter((artwork) => {
      return artwork.style_titles.some((style) => this.selectedStyles.includes(style));
    });
  }

  sortArtworks(artworkList: Artwork[] = this.copiedArtworks): Artwork[] {
    /*
      to sort the artworks based on the selected sort by
      sorted by can be title, artist_title, date_start
      if no sort by is selected, return the original list
    */

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
    /*
      to filter and sort the artworks based on the selected styles and sort by
      this function will be called whenever the selected styles or sort by changes
      both function call is needed to maintain the sorting and the filtering.
    */
    this.artworks = this.filterArtworks();
    this.artworks = this.sortArtworks(this.artworks);
  }
}
