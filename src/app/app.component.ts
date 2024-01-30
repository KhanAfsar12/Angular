import { Component, HostListener, Inject } from '@angular/core';
import { MyserviceService } from './myservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Afsar Khan';
 
  dob = new Date(2004, 5, 6);
  salary:number = 65000;

  name:string = "Afsar Khan";
  work:string = "software engineer";
  position:string = "Data Engineer";

  currentDate = new Date();
  myNumber:number = 0.1234567893455;
  constructor(){
  }

}

