import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingSpinnerComponent } from './loading-spinner.component';

describe('LoadingSpinnerComponent', () => {
  let component: LoadingSpinnerComponent;
  let fixture: ComponentFixture<LoadingSpinnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoadingSpinnerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoadingSpinnerComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('showLoading', true);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show spinner', () => {
    expect(fixture.nativeElement.querySelector('.whole-page')).toBeTruthy();
  });

  it('should hide spinner', () => {
    fixture.componentRef.setInput('showLoading', false);
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('.whole-page')).toBeFalsy();
  });
});
