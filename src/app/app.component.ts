import { Component } from '@angular/core';
import { CarsComponent } from './cars/cars.component';
import {FormsModule} from '@angular/forms';
import { NgClass, NgOptimizedImage } from '@angular/common';


@Component({
  selector: 'app-root',
  imports: [ CarsComponent, FormsModule, NgClass, NgOptimizedImage ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  preserveWhitespaces:true
})

export class AppComponent {
  title = 'Angular';  
  age=0;

  x="active";

  img1={ src:"jack.webp", alt:"Jack Efron"};
  
}