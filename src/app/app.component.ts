import { Component, HostListener, Inject } from '@angular/core';
import { MyserviceService } from './myservice.service';
import { Router } from '@angular/router';
import {NewserviceService} from './newservice.service';
import { FormGroup, FormControl, FormBuilder, NgForm, Validators } from '@angular/forms';
import { formsignup } from './formsignup';

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
    fName : ['',Validators.required],
    lName : ['',Validators.required],
    emailId :['',[Validators.required, Validators.email]],
    userPassword : ['',Validators.required]
  });
 }

ngOnInit(){
  // this.signupForm.get('fName').valueChanges.subscribe(uname=>{
  //   console.log('fName changed:'+uname);
  // })

  this.signupForm.valueChanges.subscribe((uname:formsignup)=>{
    console.log('fName changed:'+uname.fName);
    console.log('fName changed:'+uname.lName);
    console.log('fName changed:'+uname.emailId);
    console.log('fName changed:'+uname.userPassword);
  });
}

PostData(signupForm:NgForm){
  this.FirstName = this.signupForm.get('fName').value;
  console.log(this.FirstName)
}

resetForm(){
  this.signupForm.reset({
    fName:'Afsar', 
    emailId:'ka484564@gmail.com'
  })
}

fillData(){
  this.signupForm.setValue({
  'fName':'Afsar Khan',
  'lName':'Akhtar Hussain',
  'emailId':'ka484564@gmail.com',
  'userPassword':'123e2323ddsws'})
}
}
