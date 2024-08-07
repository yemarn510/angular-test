import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/artwork/artwork.module').then(m => m.ArtWorkModule) // for lazy loading modules
  }
];
