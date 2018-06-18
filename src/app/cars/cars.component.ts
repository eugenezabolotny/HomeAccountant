import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  carName = '';
  carStatus = false;
  cars = ['Ford', 'Audi', 'BMW'];
  items = [
    {id: 3, name: 'item 1'},
    {id: 6, name: 'item 2'},
    {id: 9, name: 'item 3'},
  ];

  addCar() {
    this.carStatus = true;
    this.cars.push(this.carName);
    this.carName = '';
  }

  constructor() {
  }

  ngOnInit() {
  }

}
