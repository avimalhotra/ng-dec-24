import { Component, EventEmitter, input, Input, Output } from '@angular/core';

@Component({
  selector: 'app-cars',
  imports: [],
  templateUrl: './cars.component.html',
  styleUrl: './cars.component.css',
  preserveWhitespaces:true
})
export class CarsComponent {
  
  @Input() carname="";

  bikname=input('');

  @Output() changeValue=new EventEmitter<number>();
  x=0;

  changedValue(){
    this.x=this.x+1;
    this.changeValue.emit(this.x);
  } 


}
