import { Component, OnInit, Input, ViewEncapsulation, SimpleChanges } from '@angular/core';

import {
  isSameDay,
  isSameMonth,
} from 'date-fns';

import {
  CalendarEvent,
  CalendarView
} from 'angular-calendar';

@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.scss'],
  encapsulation: ViewEncapsulation.None,
})

export class CalenderComponent implements OnInit {

  constructor() { }

  view: CalendarView = CalendarView.Month;
  activeDayIsOpen: boolean = false;
  CalendarView = CalendarView;

  viewDate: Date = new Date();
  @Input()
  events: CalendarEvent[] = []

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
      }
      this.viewDate = date;
    }
  }

  setView(view: CalendarView) {
    this.view = view;
  }

  closeOpenMonthViewDay() {
    this.activeDayIsOpen = false;
  }
  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
  }
  ngOnInit() {
    
  }

}
