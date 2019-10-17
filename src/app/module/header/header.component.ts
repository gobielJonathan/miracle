import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AsideService } from '../aside/aside.service';
import { SemesterService } from 'src/app/services/messier/semester.service';
import { Subscription } from 'rxjs';
import { Semester } from 'src/app/models/Semester';
import { FormControl } from '@angular/forms';
import menu from '../../configs/menus.json'
import { flatten } from 'lodash';
import { Menu } from 'src/app/models/Menu';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  semesters: Semester[]

  subscription: Subscription

  semesterActive: Semester

  menus: Menu[]

  constructor(
    private aside: AsideService,
    private semesterService: SemesterService
  ) { }

  ngOnInit() {
    this.menus = Object.keys(menu).map(key => menu[key].submenus)
    this.menus = flatten(this.menus)

    this.subscription = this.semesterService.getSemster()
      .subscribe(res => {
        this.semesterActive = res[0]
        this.semesterService.active.next(res[0])
        this.semesters = res
      })
  }

  changeSemesterActive(semester: Semester): void {
    this.semesterActive = semester
    this.semesterService.active.next(semester)
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.subscription.unsubscribe()
  }

  onToggleNavSide() {
    this.aside.toggle()
  }

  @ViewChild("searchField" , {read :true, static : true}) searchField : ElementRef

  onToggleSuggestion() : void{
    console.log(this.searchField);
  }
}
