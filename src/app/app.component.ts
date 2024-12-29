import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CourseComponent } from "./course/course.component";
import { TrainerComponent } from './trainer/trainer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CourseComponent, TrainerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular';
  version=19;
}
