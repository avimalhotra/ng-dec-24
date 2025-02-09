import { Component } from '@angular/core';
// import { CarsComponent } from './cars/cars.component';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
// import { CourseComponent } from './course/course.component';
// import { ReversePipe } from './reverse.pipe';
import { Login } from './login';


@Component({
  selector: 'app-root',
  imports: [ CommonModule, FormsModule  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  preserveWhitespaces:true
})

export class AppComponent {

  title = 'angular';
  model = new Login("","","","","",false);                  // initial values

  onSubmit(data:any){
    console.log( data.value );
    
  }

}