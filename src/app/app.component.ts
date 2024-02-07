import { Component, HostListener, Inject } from '@angular/core';
import { MyserviceService } from './myservice.service';
import { Router } from '@angular/router';
import {NewserviceService} from './newservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [NewserviceService]
})
export class AppComponent {
  title = 'Afsar Khan';
 
 constructor(){}

//  ngOnInit(){

// }
}
