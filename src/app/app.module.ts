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

@NgModule({
  declarations: [AppComponent,EmployeeComponent, MypipePipe],
  imports: [BrowserModule,AppRoutingModule,CompanyModule,FormsModule],
  providers: [MyserviceService],    //for Service 
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(){
    console.log("Hello World");
  }
 }
