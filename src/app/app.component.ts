import { Component} from '@angular/core';
import { User } from './User';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent{
  title = "Afsar Khan"
  user = new User()

constructor(){}

OnFormSubmit(form:NgForm){
  if(form.invalid){
    return;
  }
  console.log('User name: '+ form.controls['uname'].value);
  console.log('Gender: '+ form.controls['gender'].value);
  console.log('Married: '+ form.controls['married'].value);
  console.log('T&C Accepted: '+ form.controls['tc'].value);
}

resetForm(form:NgForm){
  this.user = new User();
  form.resetForm({married:false});
}

setDefaultValues(){
  this.user.username = "Afsar";
  this.user.gender = 'male';
  this.user.isMarried = false;
  this.user.isTCAccepted = true;
}

}
