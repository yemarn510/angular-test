import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtworkListComponent } from './artwork-list.component';
import { ArtWorkModule } from '../../artwork.module';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { Artwork, ArtworkStyleDropdown } from '../../../../models/artwork.model';
import { DUMMY_RESPONSE } from '../../../../constants/mocked-artworks.constant';


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

  // ---------------- createStyleList function ----------------
  it('should return an empty dropdown list for empty artwork list', () => {
    expect(component.createStyleList([])).toEqual([]);
  });

  it('should create a list of value and label objects for dropdown', () => {
    const mockArtworks: Artwork[] = DUMMY_RESPONSE.data.sort(
      (first, second) => first.id - second.id 
    );
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

  it('should call getArtworks on component rendered', () => {
    spyOn(component, 'getArtworks');
    component.getArtworks();
    expect(component.getArtworks).toHaveBeenCalled();
  });

  // ---------------- filterAndSortArtworks function ----------------
  it('should call filterArtworks on filterAndSortArtworks function call', () => {
    spyOn(component, 'filterArtworks');
    component.filterAndSortArtworks();
    expect(component.filterArtworks).toHaveBeenCalled();
  });

  it('should call sortArtworks on filterAndSortArtworks function call', () => {
    spyOn(component, 'sortArtworks');
    component.filterAndSortArtworks();
    expect(component.sortArtworks).toHaveBeenCalled();
  });

  // ---------------- sortArtworks function ----------------
  it('should return all data in the list for blank sort', () => {
    const mockedArtworks: Artwork[] = DUMMY_RESPONSE.data;
    component.sortBy = '';
    expect(component.sortArtworks(mockedArtworks)).toEqual(mockedArtworks);
  });

  it('should return sorted data in the list for selected sort by title', () => {
    const mockedArtworks: Artwork[] = DUMMY_RESPONSE.data;
    component.sortBy = 'title';
    const expectedArtworks: Artwork[] = DUMMY_RESPONSE.data.sort((a, b) => a.title.localeCompare(b.title));
    expect(component.sortArtworks(mockedArtworks)).toEqual(expectedArtworks);
  });

  it('should return sorted data in the list for selected sort by artist_title', () => {
    const mockedArtworks: Artwork[] = DUMMY_RESPONSE.data;
    component.sortBy = 'artist_title';
    const expectedArtworks: Artwork[] = DUMMY_RESPONSE.data.sort((a, b) => a.artist_title.localeCompare(b.artist_title));
    expect(component.sortArtworks(mockedArtworks)).toEqual(expectedArtworks);
  });

  it('should return sorted data in the list for selected sort by date_start', () => {
    const mockedArtworks: Artwork[] = DUMMY_RESPONSE.data;
    component.sortBy = 'date_start';
    const expectedArtworks: Artwork[] = DUMMY_RESPONSE.data.sort((a, b) => new Date(a.date_start).getTime() - new Date(b.date_start).getTime());
    expect(component.sortArtworks(mockedArtworks)).toEqual(expectedArtworks);
  });

  it('should return empty list for empty list and selected sort', () => {
    const mockedArtworks: Artwork[] = [];
    component.sortBy = 'title';
    expect(component.sortArtworks(mockedArtworks)).toEqual([]);
  });

  it('should return empty list for empty list and empty selected sort', () => {
    const mockedArtworks: Artwork[] = [];
    component.sortBy = '';
    expect(component.sortArtworks(mockedArtworks)).toEqual([]);
  });

  it('should return empty list for empty list and invalid selected sort', () => {
    const mockedArtworks: Artwork[] = [];
    component.sortBy = 'invalid';
    expect(component.sortArtworks(mockedArtworks)).toEqual([]);
  });

  it('should return sorted data in the list for selected date sort', () => {
    const mockedArtworks: Artwork[] = DUMMY_RESPONSE.data;
    component.sortBy = 'date_start';
    const expectedArtworks: Artwork[] = DUMMY_RESPONSE.data.sort((a, b) => new Date(a.date_start).getTime() - new Date(b.date_start).getTime());
    expect(component.sortArtworks(mockedArtworks)).toEqual(expectedArtworks);
  });

  it('should return empty list for empty list and selected date sort', () => {
    const mockedArtworks: Artwork[] = [];
    component.sortBy = 'date_start';
    expect(component.sortArtworks(mockedArtworks)).toEqual([]);
  });

  // ---------------- Global Variables ----------------
  it('should have the list of sorting options', () => {
    const expectedOptions = ['title', 'artist_title', 'date_start'];
    expect(component.sortByList).toEqual(expectedOptions);
  });

  it('should have the label for all sorting options', () => {
    const keys = component.sortByList;
    const expectedOptions = ['Name', 'Artist', 'Date'];
    for (let index = 0; index < keys.length; index++) {
      expect(component.sortByValueAndLabelConnection[keys[index]]).toEqual(expectedOptions[index]);
    }
  });

});
