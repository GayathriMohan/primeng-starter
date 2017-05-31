import { Component, Input, Output, EventEmitter } from '@angular/core';
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
    @Input() isSelected:boolean;
    @Output() onRowClick: EventEmitter<any> = new EventEmitter();
    @Input() isChecked:boolean;
	@Output() checkboxTrue:EventEmitter<boolean> = new EventEmitter();
    
    constructor(private carService: CarService) { 
    	this.isSelected = false;
    	this.isChecked = false;
    }

    ngOnInit() {
        this.carService.getCars().then(cars => this.cars = cars);        
        this.columns = [
            {field: 'brand', header: 'Brand'},
            {field: 'color', header: 'Color'},
            {field: 'launch', header: 'Launch'},
            {field: 'price', header: 'Price'}
        ];
    }

    selectedRow(event) {
		this.onRowClick.emit(event.data);
	}

	displayState(event) {
		this.checkboxTrue.emit(event);
	}
 }
