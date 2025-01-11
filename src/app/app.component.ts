import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [ FormsModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  preserveWhitespaces:true
})

export class AppComponent {
  title = 'Angular';
  // name="";
  // terms=false;
  // email="";
  // age="";

  // updateEmail(e:Event){this.email=(e.target as HTMLInputElement ).value};

  user={name:"", email:"", age:0};


}