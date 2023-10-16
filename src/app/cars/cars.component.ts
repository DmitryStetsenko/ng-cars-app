import { Component } from '@angular/core';

type CarType =  {
  name: string; 
  year: number;
}

@Component({
  selector: '.app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent {
  cars: CarType[] = [
    {name: 'Ford', year: 2010}, 
    {name: 'Audi', year: 2019}, 
    {name: 'BMW', year: 2021}, 
    {name: 'Mersedes', year: 2007},
  ];

  inputText = '';
  bindText = '';
  
  updateCarList(car: CarType) {
    this.cars.push(car);
  }
}
