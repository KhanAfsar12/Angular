import { Component, HostListener, Inject } from '@angular/core';
import { MyserviceService } from './myservice.service';
import { Router } from '@angular/router';
import {NewserviceService} from './newservice.service';
import { FormGroup, FormControl, FormBuilder, NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [NewserviceService]
})
export class AppComponent {
  title = 'Afsar Khan';
  signupForm : FormGroup;
  FirstName : string="";
  LastName : string="";
  Email : string="";
  Password : string="";
 
 constructor(private frmbuilder:FormBuilder){
  this.signupForm = frmbuilder.group({
    fName : new FormControl(),
    lName : new FormControl(),
    emailId : new FormControl(),
    userPassword : new FormControl()
  });
 }

ngOnInit(){
}

PostData(signupForm:NgForm){
  this.FirstName = signupForm.controls.fName.value;
  this.LastName = signupForm.controls.lName.value;
  this.Email = signupForm.controls.emailId.value;
  console.log(this.FirstName+" "+this.LastName)

  console.log(signupForm.controls);
}
}
