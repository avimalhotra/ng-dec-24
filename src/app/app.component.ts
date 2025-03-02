import { Component, inject, ViewEncapsulation } from '@angular/core';
// import { CarsComponent } from './cars/cars.component';
import { CommonModule } from '@angular/common';
import {FormsModule, Validators} from '@angular/forms';
import { CourseComponent } from './course/course.component';
// import { ReversePipe } from './reverse.pipe';
// import { Login } from './login';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';
import {  Validator, FormControl, FormArray, FormGroup } from '@angular/forms';
// import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-root',
  imports: [ CommonModule, FormsModule, ReactiveFormsModule, CourseComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  preserveWhitespaces:true,
  // encapsulation:ViewEncapsulation.ShadowDom
})

export class AppComponent {

  title = 'angular';

  /* model = new Login("","","","","",false);                  
  onSubmit(data:any){console.log( data.value );} */

  // email=new FormControl('');
  // pass=new FormControl('');
  // age=new FormControl(0);

  // loginform=new FormGroup({
  //   email:new FormControl("",[Validators.required, Validators.minLength(6)]),
  //   pass:new FormControl("",[Validators.required,Validators.minLength(8)], ),
  //   age:new FormControl(0,[Validators.required, Validators.min(25), Validators.max(75)]),
  // });

  // loginUser(){
  //   console.log(this.loginform.status);
  //   console.log(this.loginform.value);
  //   console.log(this.loginform.valid);
  // };


  // setVal(){this.loginform.setValue({email:"mail@domain.com",pass:"12345678",age:25})}
  // patchVal(){ this.loginform.patchValue({email:"new@mail.com"})};

  private formBuilder=inject(FormBuilder);

  loginForm=this.formBuilder.group({
    email:['',Validators.required],
    pass:['',Validators.required]
  });


}