import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtworkListComponent } from './pages/artwork-list/artwork-list.component';
import { ArtworkRoutingModule } from './artwork-routing.module';



@NgModule({
  declarations: [
    ArtworkListComponent,
  ],
  imports: [
    CommonModule,
    ArtworkRoutingModule,
  ]
})
export class ArtWorkModule { }

