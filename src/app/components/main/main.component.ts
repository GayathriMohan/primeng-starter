import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class AppMainComponent {
	displayRowData(isSelected) {
		alert(isSelected);
	}
	showState(isChecked) {
        alert(isChecked);
    }
}
