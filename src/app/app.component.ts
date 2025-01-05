import { Component } from '@angular/core';
import { CourseComponent } from "./course/course.component";
import { TrainerComponent } from './trainer/trainer.component';
import { AdminComponent } from './admin/admin.component';


@Component({
  selector: 'app-root',
  imports: [CourseComponent, TrainerComponent, AdminComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'Angular';
  version=19;
  author={name:"Avinash", company:"Tech Altum"};
  
  arr=[1,3,2, 10, 21 ];
  car={ name:"Swift", power:82, torque:112 };
  
  numSrt=function(a:number,b:number){return a-b};
  reverseString(x:string){return x.split("").reverse().join("");}
  reverseWords(x:string){return x.split(" ").reverse().join(" ");}


  jack={image:"jack.webp", alt:"Jack Efron", width:70, height:70};

  disabled=false;
  p="para";
  p1="color:purple";

  h2="lorem ipsum";
  upperCase(){ this.h2=this.h2.toUpperCase() }

  counter=0;
  inc(){ this.counter=this.counter+1 }
  dec(){ this.counter=this.counter-1 }


}