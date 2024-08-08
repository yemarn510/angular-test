import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtworkListComponent } from './artwork-list.component';
import { ArtWorkModule } from '../../artwork.module';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { Artwork, ArtworkStyleDropdown } from '../../../../models/artwork.model';
import { ApiService } from '../../../../services/api.service';
import { ArtworkService } from '../../artwork.service';
import { PaginatedResponse } from '../../../../models/common.model';
import { DUMMY_RESPONSE } from '../../../../constants/mocked-artworks.constant';


describe('ArtworkListComponent', () => {
  let component: ArtworkListComponent;
  let fixture: ComponentFixture<ArtworkListComponent>;
  let artworkService: ArtworkService;
  let apiService: ApiService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;

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

    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    fixture = TestBed.createComponent(ArtworkListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // ---------------- createStyleList function ----------------
  it('should return an empty dropdown list for empty artwork list', () => {
    expect(component.createStyleList([])).toEqual([]);
  });

  it('should create a list of value and label objects for dropdown', () => {
    const mockArtworks: Artwork[] = DUMMY_RESPONSE.data;
    const expectedStyles: ArtworkStyleDropdown[] = [
      { value: 'Classic', label: 'Classic (1)' },
      { value: 'Modernism', label: 'Modernism (1)' },
    ];
  
    const styles = component.createStyleList(mockArtworks);
    expect(styles).toEqual(expectedStyles);
  });

  it('should not return a label and value mix match', () => {
    const mockArtworks: Artwork[] = DUMMY_RESPONSE.data;
    const expectedStyles: ArtworkStyleDropdown[] = [
      { value: 'Classic (1)', label: 'Classic' },
      { value: 'Modernism (1)', label: 'Modernism' },
    ];
  
    const styles = component.createStyleList(mockArtworks);
    expect(styles).not.toEqual(expectedStyles);
  });

  // ---------------- filterArtworks function ----------------
  it('should return all data in the list for blank filter', () => {
    const mockedArtworks: Artwork[] = DUMMY_RESPONSE.data;
    component.selectedStyles = [];
    expect(component.filterArtworks(mockedArtworks)).toEqual(mockedArtworks);
  });

  it('should return filtered data in the list for selected filter', () => {
    const mockedArtworks: Artwork[] = DUMMY_RESPONSE.data;
    component.selectedStyles = ['Classic'];
    const expectedArtworks: Artwork[] = DUMMY_RESPONSE.data.filter(artwork => artwork.style_titles.includes('Classic'));
    expect(component.filterArtworks(mockedArtworks)).toEqual(expectedArtworks);
  });

  it('should return empty list for selected filter not in the list', () => {
    const mockedArtworks: Artwork[] = DUMMY_RESPONSE.data;
    component.selectedStyles = ['Abstract'];
    expect(component.filterArtworks(mockedArtworks)).toEqual([]);
  });

  it('should return empty list for empty list and selected filter', () => {
    const mockedArtworks: Artwork[] = [];
    component.selectedStyles = ['Abstract'];
    expect(component.filterArtworks(mockedArtworks)).toEqual([]);
  });

  it('should return empty list for empty list and empty selected filter', () => {
    const mockedArtworks: Artwork[] = [];
    component.selectedStyles = [];
    expect(component.filterArtworks(mockedArtworks)).toEqual([]);
  });


  // ---------------- getArtworks function ----------------
  it('should call getArtworks on init', () => {
    spyOn(component, 'getArtworks');
    component.ngOnInit();
    expect(component.getArtworks).toHaveBeenCalled();
  });

  it('should call getArtworks on prevPage', () => {
    spyOn(component, 'getArtworks');
    component.prevPage();
    expect(component.getArtworks).toHaveBeenCalled();
  });

  it('should call getArtworks on nextPage', () => {
    spyOn(component, 'getArtworks');
    component.nextPage();
    expect(component.getArtworks).toHaveBeenCalled();
  });

  it('should call getArtworks on goToPage', () => {
    spyOn(component, 'getArtworks');
    component.goToPage(2);
    expect(component.getArtworks).toHaveBeenCalled();
  });
});
