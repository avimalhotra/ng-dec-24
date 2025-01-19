import { Component } from '@angular/core';
import { CarsComponent } from './cars/cars.component';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-root',
  imports: [ CarsComponent, CommonModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  preserveWhitespaces:true
})

export class AppComponent {
    title = 'Angular';  

    swift={ name:"Swift", fuel:"Petrol", hybrid:false, awd: false }
    grandvitara={ name:"Grand Vitara", fuel:"Petrol", hybrid:true, awd: true }

    score=58;

    x=null;

    
    months=["Jan","Feb","Mar","Apr"];
    phone={name:"Iphone 15", brand:"Apple", ram:6, storage:128};

    cars=[
      {"name": "swift", "type": "hatchback", "price":810000},
      {"name": "dzire", "type": "hatchback", "price":880000},
      {"name": "ciaz", "type": "sedan", "price":1000000},
      {"name": "baleno", "type": "hatchback", "price":850000},
      {"name": "brezza", "type": "suv", "price":1400000},
      {"name": "fronx", "type": "hatchback", "price":1000000},
      {"name": "jimny", "type": "suv", "price":1300000},
      {"name": "grand vitara", "type": "suv", "price":1990000}
    ];
    


}