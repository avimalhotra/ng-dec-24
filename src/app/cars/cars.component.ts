import { Component,  } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-cars',
  imports: [NgOptimizedImage],
  templateUrl: './cars.component.html',
  styleUrl: './cars.component.css',
  preserveWhitespaces:true
})
export class CarsComponent {
  
    carname="swift";

    img2={ src:"image1.webp", alt:"lily"};

}
