import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Car} from '../models/cars';
// import cars from '../json/cars.json';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class CarService {
    constructor(private http: Http) {}

    getCars() {
        return this.http.get('../json/cars.json')
        .toPromise()
        .then(res =>  res.json().data )
        .then(data => { return data; });
    }
}
