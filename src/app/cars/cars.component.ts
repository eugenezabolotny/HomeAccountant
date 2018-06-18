import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  carName = '';
  carStatus = false;
  cars = ['Ford', 'Audi', 'BMW', 'Mazda', 'Lanos', 'Bentley'];

  addCar() {
    this.carStatus = true;
    this.cars.push(this.carName);
    this.carName = '';
  }

  setBigCarText(car: string) {
    return car.length > 4;
  }

  constructor() {
  }

  ngOnInit() {
  }

}
