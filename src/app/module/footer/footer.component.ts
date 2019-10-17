import { Component } from '@angular/core';
import particleConfig from '../../configs/particles.json'

declare var particlesJS : any;

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent  {

  constructor() { }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    particlesJS('particles-js', particleConfig, function() {
      console.log('callback - particles.js config loaded');
    });
  }
  

}
