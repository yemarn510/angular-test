import { Component, OnInit } from '@angular/core';
import { ArtworkService } from '../../artwork.service';
import { HttpParams } from '@angular/common/http';

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
    this.artworkService.getArtworks(params).subscribe({
      next: (res) => {
        this.loading = false;
        console.warn(res);
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  prevPage() {
    this.page--;
  }

  nextPage() {
      this.page++;
  }

  goToPage(n: number) {
      this.page = n;
  }
}
