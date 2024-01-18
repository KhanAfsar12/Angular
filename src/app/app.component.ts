import { Component, HostListener, Inject } from '@angular/core';
import { MyserviceService } from './myservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Afsar Khan';
  public choose = '';
  setvalue(drp:any){
    this.choose=drp.target.value;
  }
 
}
