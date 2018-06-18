import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  carName = '';
  carYear = 2017;

  cars: [{name: string, year: number}] = [
    {name: 'Ford', year: 2015},
    {name: 'Audi', year: 2016},
    {name: 'BMW', year: 2017},
    {name: 'Mazda', year: 2018},
  ];

  constructor() {
  }

  addCar() {
    this.cars.push(
      {name: this.carName, year: this.carYear}
    );
    this.carName = '';
    this.carYear = 2017;
  }

  ngOnInit() {
  }

}
