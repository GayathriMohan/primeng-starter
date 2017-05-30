import { Component, Input } from '@angular/core';
import { SelectItem } from 'primeng/primeng';
import { Car } from '../../../models/cars';
import { CarService } from '../../../services/cars.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  providers: [CarService]
})
export class AppTableComponent {
	private cars: Car[];  
    private columns: any[];
    
    constructor(private carService: CarService) { }

    ngOnInit() {
        this.carService.getCars().then(cars => this.cars = cars);        
        this.columns = [
            {field: 'brand', header: 'Brand'},
            {field: 'color', header: 'Color'}
        ];
    }
 }
