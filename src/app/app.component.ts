import { Component } from '@angular/core';
import { CarsComponent } from './cars/cars.component';


@Component({
  selector: 'app-root',
  imports: [ CarsComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  preserveWhitespaces:true
})

export class AppComponent {
  title = 'Angular';

  car="Swift";
  bike="Bullet";

  counter=0;

  showVal(count:number){
    this.counter=count;
  }

}