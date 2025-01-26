import { Component } from '@angular/core';
// import { CarsComponent } from './cars/cars.component';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
// import { CourseComponent } from './course/course.component';
import { ReversePipe } from './reverse.pipe';


@Component({
  selector: 'app-root',
  imports: [ CommonModule, FormsModule , ReversePipe ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  preserveWhitespaces:true
})

export class AppComponent {
  title = 'Angular';  

  user={name:"lorem", city:"noida"};

  date = new Date();

  word="Lorem";
  
}