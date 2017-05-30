import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Car } from '../models/cars';
import { carOptions } from '../data/cars-details';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class CarService {
    getCars() : Promise<Car[]> {
    	return Promise.resolve(carOptions);
    }
}
