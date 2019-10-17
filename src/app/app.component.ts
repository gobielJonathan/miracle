import { Component } from '@angular/core';
import { AsideService } from './module/aside/aside.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private aside:AsideService){}

}
