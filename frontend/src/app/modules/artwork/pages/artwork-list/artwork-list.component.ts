import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-artwork-list',
  templateUrl: './artwork-list.component.html',
  styleUrl: './artwork-list.component.scss'
})
export class ArtworkListComponent implements OnInit {


  count = 210;
    page = 1;
    perPage = 10;

  constructor() { }

  ngOnInit(): void {
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
