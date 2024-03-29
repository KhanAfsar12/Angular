import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { CompanyComponent } from './company/company.component';
import { EmployeeComponent } from './employee/employee.component';
import { CompanyModule } from './company/company.module';
import { MyserviceService } from './myservice.service';
import { MypipePipe } from './mypipe.pipe';
import { StudentComponent } from './student/student.component';
import { StudentdetailsComponent } from './studentdetails/studentdetails.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { StudentregistrationComponent } from './studentregistration/studentregistration.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent,EmployeeComponent, MypipePipe, StudentComponent, StudentdetailsComponent, PagenotfoundComponent, StudentregistrationComponent],
  imports: [BrowserModule,AppRoutingModule,CompanyModule,FormsModule, ReactiveFormsModule],
  providers: [MyserviceService],    //for Service 
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(){
    console.log("Hello World");
  }
 }
