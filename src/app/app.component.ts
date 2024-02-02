import { Component, HostListener, Inject } from '@angular/core';
import { MyserviceService } from './myservice.service';
import { Router } from '@angular/router';
import {NewserviceService} from './newservice.service';

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

  employees:any = [
    {code:'001', name:"Afsar", gender:"male", Salary:50000},
    {code:'002', name:"Aman", gender:"male", Salary:500000},
    {code:'003', name:"Salim", gender:"male", Salary:350000},
    {code:'004', name:"Aisha", gender:"female", Salary:50000},
    {code:'005', name:"Farman", gender:"male", Salary:45600}
  ]

  constructor(private router:Router){}
  student(){
    this.router.navigate(['/student']);
  }
  employee(){
    this.router.navigate(['/studentdetails'])
  }

}

