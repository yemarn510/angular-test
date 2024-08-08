import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtworkListComponent } from './pages/artwork-list/artwork-list.component';
import { ArtworkRoutingModule } from './artwork-routing.module';
import { NxPaginationComponent } from '@aposin/ng-aquila/pagination';
import { LoadingSpinnerComponent } from '../../standalone/loading-spinner/loading-spinner.component';
import { NxFormfieldComponent } from '@aposin/ng-aquila/formfield';
import {
  NxDropdownComponent,
  NxDropdownItemComponent,
} from '@aposin/ng-aquila/dropdown';
import { NxMultiSelectComponent } from '@aposin/ng-aquila/dropdown';
import { FormsModule } from '@angular/forms';
import {
  NxColComponent,
  NxLayoutComponent,
  NxRowComponent,
} from '@aposin/ng-aquila/grid';


@NgModule({
  declarations: [
    ArtworkListComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ArtworkRoutingModule,

    NxPaginationComponent,
    NxFormfieldComponent,
    NxRowComponent,
    NxColComponent,
    NxLayoutComponent,
    NxMultiSelectComponent,
    NxDropdownComponent,
    NxDropdownItemComponent,

    LoadingSpinnerComponent,    
  ],
})
export class ArtWorkModule { }

