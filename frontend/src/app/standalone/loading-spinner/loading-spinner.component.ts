import { Component, input } from '@angular/core';
import { NxSpinnerComponent } from '@aposin/ng-aquila/spinner';


@Component({
  selector: 'app-loading-spinner',
  standalone: true,
  imports: [
    NxSpinnerComponent
  ],
  templateUrl: './loading-spinner.component.html',
  styleUrl: './loading-spinner.component.scss'
})
export class LoadingSpinnerComponent {
  showLoading = input.required<boolean>();
}
