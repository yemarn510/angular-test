import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtworkListComponent } from './pages/artwork-list/artwork-list.component';

const routes: Routes = [
  {
    path: '',
    component: ArtworkListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
