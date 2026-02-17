import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../housinglocation';
import { HousingService } from '../housing.service';

const FALLBACK_LOCATIONS: HousingLocation[] = [
  { id: 0, name: 'Acme Fresh Start Housing', city: 'Chicago', state: 'IL', photo: 'https://picsum.photos/200/200?random=1', availableUnits: 4, wifi: true, laundry: true },
  { id: 1, name: 'A113 Transitional Housing', city: 'Santa Monica', state: 'CA', photo: 'https://picsum.photos/200/200?random=2', availableUnits: 0, wifi: false, laundry: true },
  { id: 2, name: 'Warm Beds Housing Support', city: 'Juneau', state: 'AK', photo: 'https://picsum.photos/200/200?random=3', availableUnits: 1, wifi: false, laundry: false },
  { id: 3, name: 'Homesteady Housing', city: 'Chicago', state: 'IL', photo: 'https://picsum.photos/200/200?random=4', availableUnits: 1, wifi: true, laundry: false },
  { id: 4, name: 'Happy Homes Group', city: 'Gary', state: 'IN', photo: 'https://picsum.photos/200/200?random=5', availableUnits: 1, wifi: true, laundry: false },
  { id: 5, name: 'Hopeful Apartment Group', city: 'Oakland', state: 'CA', photo: 'https://picsum.photos/200/200?random=6', availableUnits: 2, wifi: true, laundry: true },
  { id: 6, name: 'Seriously Safe Towns', city: 'Oakland', state: 'CA', photo: 'https://picsum.photos/200/200?random=7', availableUnits: 5, wifi: true, laundry: true },
  { id: 7, name: 'Hopeful Housing Solutions', city: 'Oakland', state: 'CA', photo: 'https://picsum.photos/200/200?random=8', availableUnits: 2, wifi: true, laundry: true },
  { id: 8, name: 'Seriously Safe Towns', city: 'Oakland', state: 'CA', photo: 'https://picsum.photos/200/200?random=9', availableUnits: 10, wifi: false, laundry: false },
  { id: 9, name: 'Capital Safe Towns', city: 'Portland', state: 'OR', photo: 'https://picsum.photos/200/200?random=10', availableUnits: 6, wifi: true, laundry: true },
];

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, HousingLocationComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  housingService = inject(HousingService);
  housingLocationList: HousingLocation[] = FALLBACK_LOCATIONS;
  filteredLocationList: HousingLocation[] = FALLBACK_LOCATIONS;

  constructor() {
    this.housingService.getAllHousingLocations().then((list) => {
      if (list.length > 0) {
        this.housingLocationList = list;
        this.filteredLocationList = list;
      }
    });
  }

  filterResults(text: string): void {
    if (!text) {
      this.filteredLocationList = this.housingLocationList;
      return;
    }
    this.filteredLocationList = this.housingLocationList.filter((loc) =>
      loc.city.toLowerCase().includes(text.toLowerCase())
    );
  }
}
