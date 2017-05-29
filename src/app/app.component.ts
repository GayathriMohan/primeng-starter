import { Component, Input } from '@angular/core';
import { SelectItem } from 'primeng/primeng';
import { Car } from './models/cars';
import { CarService } from './services/cars.service';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    name: string;
    message: string;
    cars: SelectItem[];
    columns: any[];
    images: any[];
    car: Car[];

    constructor(private carService: CarService) {
        this.cars = [];
        this.cars.push({label: 'Audi', value: 'Audi'});
        this.cars.push({label: 'BMW', value: 'BMW'});
        this.cars.push({label: 'Fiat', value: 'Fiat'});
        this.cars.push({label: 'Ford', value: 'Ford'});
        this.cars.push({label: 'Honda', value: 'Honda'});
        this.cars.push({label: 'Jaguar', value: 'Jaguar'});
        this.cars.push({label: 'Mercedes', value: 'Mercedes'});
        this.cars.push({label: 'Renault', value: 'Renault'});
        this.cars.push({label: 'VW', value: 'VW'});
        this.cars.push({label: 'Volvo', value: 'Volvo'});
    }

    ngOnInit() {
    this.carService.getCars().then(car => this.car = car); 
    this.columns = [
        {field: 'brand', header: 'Brand'},
        {field: 'color', header: 'Color'}
    ];        
        // $('#states').multiSelect({
        // buttonText: function(options, select) {
        //     console.log(select[0].length);
        //     if (options.length === 0) {
        //         return 'None selected';
        //     }
        //     if (options.length === select[0].length) {
        //         return 'All selected (' + select[0].length + ')';
        //     }
        //     else if (options.length >= 4) {
        //         return options.length + ' selected';
        //     }
        //     else {
        //         var labels = [];
        //         console.log(options);
        //         options.each(function() {
        //             labels.push($(this).val());
        //         });
        //         return labels.join(', ') + '';
        //     }
        // }
        // });
    }
}
