import { Component, Input } from '@angular/core';
import { Car } from '../../models/cars';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class AppMainComponent {

	private selectedCars:Car[]=[];

	displayRowData(isSelected) {
		alert(isSelected.brand + " "+ isSelected.color);
		this.selectedCars.push(isSelected);
	}

	showState(isChecked) {
        alert(isChecked);
    }
}
