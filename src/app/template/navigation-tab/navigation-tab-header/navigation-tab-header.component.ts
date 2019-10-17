import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import menus from '../../../configs/menus.json'

@Component({
  selector: 'app-navigation-tab-header',
  templateUrl: './navigation-tab-header.component.html',
  styleUrls: ['./navigation-tab-header.component.scss']
})

export class NavigationTabHeaderComponent implements OnInit {

  title: string;

  menu: object;

  constructor(
    private router: Router,
    private location: Location
  ) { }

  ngOnInit() {

    this.router.events.subscribe((val) => {
      /**
       * ex : google.com/jobs/active-job -> will get jobs
       * so the user want to access job menu and
       * system will return all submenus of job
       */
      const urlWithoutParams = this.location.path().split("?")[0]
      const menu = urlWithoutParams.split("/")[1]
      this.title = menu
      this.menu = menus[menu]
    });
  }

}
