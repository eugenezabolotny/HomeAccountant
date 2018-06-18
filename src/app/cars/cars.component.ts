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
  dates = [
    new Date(2015, 3, 4),
    new Date(2011, 2, 5),
    new Date(2017, 4, 6),
    new Date(2000, 1, 7),
  ];

  constructor() {
  }

  addCar() {
    this.carStatus = true;
    this.cars.push(this.carName);
    this.carName = '';
  }

  ngOnInit() {
  }

}
