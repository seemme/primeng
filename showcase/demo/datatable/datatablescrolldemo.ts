import {Component,OnInit} from '@angular/core';
import {Car} from '../domain/car';
import {CarService} from '../service/carservice';

@Component({
    templateUrl: 'showcase/demo/datatable/datatablescrolldemo.html',
})
export class DataTableScrollDemo implements OnInit {

    cars: Car[];
    
    carsLarge: Car[];

    constructor(private carService: CarService) { }

    ngOnInit() {
        this.carService.getCarsMedium().then(cars => this.cars = cars);
        this.carService.getCarsLarge().then(cars => this.carsLarge = cars);
    }
}