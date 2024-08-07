import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { ArtworkListComponent } from './pages/artwork-list/artwork-list.component';



@NgModule({
  declarations: [
    ArtworkListComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
  ]
})
export class HomeModule { }
