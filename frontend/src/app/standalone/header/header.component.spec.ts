import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show the header of the app', () => {
    expect(fixture.nativeElement.querySelector('.title')).toBeTruthy();
  })

  it('the header should have the correct title', () => {
    expect(fixture.nativeElement.querySelector('.title').textContent.trim()).toEqual('ART COLLECTION');
  });
});
