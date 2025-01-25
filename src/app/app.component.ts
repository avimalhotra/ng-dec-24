import { Component } from '@angular/core';
// import { CarsComponent } from './cars/cars.component';
import { CommonModule } from '@angular/common';
import { CourseComponent } from './course/course.component';


@Component({
  selector: 'app-root',
  imports: [ CommonModule, CourseComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  preserveWhitespaces:true
})

export class AppComponent {
  title = 'Angular';  
  month=1;
  // css={color:'red','text-align':'center'};

  
}