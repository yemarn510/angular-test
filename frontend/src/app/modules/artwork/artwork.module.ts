import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtworkListComponent } from './pages/artwork-list/artwork-list.component';
import { ArtworkRoutingModule } from './artwork-routing.module';
import { NxPaginationComponent } from '@aposin/ng-aquila/pagination';


@NgModule({
  declarations: [
    ArtworkListComponent,
  ],
  imports: [
    CommonModule,
    ArtworkRoutingModule,

    NxPaginationComponent,
  ]
})
export class ArtWorkModule { }

