import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewserviceService {
  employees:any[];
  constructor() { 
   this.employees = [
    {empcode:'001', name:"Afsar Khan"},
    {empcode:'002', name:"Jibran Khalil"}
   ];
  }
  display(){
    return "Afsar IT InfoTech";
  }
}
