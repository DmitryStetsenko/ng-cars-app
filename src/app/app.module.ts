import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CarsComponent } from './cars/cars.component';
import { CarComponent } from './car/car.component';
import { FormsModule } from '@angular/forms';
import { AddCarComponent } from './add-car/add-car.component';

@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    CarComponent,
    AddCarComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule, // \two way binding 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
