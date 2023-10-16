import { Component, ContentChild, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent {
  @Input('carItem') car: { name: string, year: number } = {} as { name: string, year: number };

  @ContentChild('headerEL') headerEL: ElementRef = {} as ElementRef;

  ngAfterViewInit() {
    console.log(this.headerEL);
  }
}
