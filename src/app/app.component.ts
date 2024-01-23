import { Component, HostListener, Inject } from '@angular/core';
import { MyserviceService } from './myservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Afsar Khan';
  first_name = "Afsar";
  last_name = "Khan";

  a = 10;
  b=3;
  constructor(){
  }


}

