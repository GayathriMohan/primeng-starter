import { Component, Input } from '@angular/core';
import { SelectItem } from 'primeng/primeng';
import { Car } from './models/cars';
import { CarService } from './services/cars.service';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent { }
