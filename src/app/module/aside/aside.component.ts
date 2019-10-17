import { Component } from '@angular/core';
import * as $ from 'jquery'
import { AsideService } from './aside.service';
import { AuthService } from 'src/app/services/messier/auth.service';
import menus from '../../configs/menus.json';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})
export class AsideComponent {

  menus: object[]

  constructor(
    private aside: AsideService,
    private auth: AuthService
  ) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.menus = Object.keys(menus)
      .map(key => menus[key])

  }
  
  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewIni  t' to the class.

    /** 
     * toggle submenu
     */
    $(".aside-items").click(function () {
      $(this).children("a").toggleClass("show")
      $(this).children(".sub-menu").slideToggle()
    })

  }

  toggleAuthModal() {
    this.auth.toggleModal()
  }

  logout(){
    this.auth.logout()
  }
}
