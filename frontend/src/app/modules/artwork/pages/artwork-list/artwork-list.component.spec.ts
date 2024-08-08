import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtworkListComponent } from './artwork-list.component';
import { ArtWorkModule } from '../../artwork.module';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('ArtworkListComponent', () => {
  let component: ArtworkListComponent;
  let fixture: ComponentFixture<ArtworkListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArtWorkModule],
      providers: [ 
        provideHttpClient(),
        provideHttpClientTesting(),
      ],
      declarations: [ArtworkListComponent],
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtworkListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
