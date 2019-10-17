import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { BinusmayaService } from 'src/app/services/binusmaya.service';
import { ClassSchedule } from 'src/app/models/ClassSchedule';
import { ClassSchedulePayload } from 'src/app/models/payload/ClassSchedulePayload';
import { AuthService } from 'src/app/services/messier/auth.service';
import { COLOR_CALENDER_EVENT } from 'src/app/models/ICalenderEvent';
import { CalendarEvent } from 'angular-calendar';
import moment from 'moment';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-class-schedule',
  templateUrl: './class-schedule.component.html',
  styleUrls: ['./class-schedule.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ClassScheduleComponent implements OnInit {

  schedules: CalendarEvent[] = []
  loading: boolean = true
  time: Date = new Date()
  subscription : Subscription

  constructor(
    private service: BinusmayaService,
    private authService: AuthService
  ) { }

  ngOnInit() {

    const payload: ClassSchedulePayload = {
      endDate: moment().add(1, 'month').format("MM/D/YYYY"),
      startDate: moment().format("MM/D/YYYY"),
      nim: "2101632244",
      token: this.authService.token
    }

    this.subscription = this.service.getClassSchedule(payload)
      .subscribe((response: ClassSchedule[]) => {
        for (const schedule of response) {
          const event: CalendarEvent = {
            allDay: true,
            color: COLOR_CALENDER_EVENT.RED,
            draggable: true,
            end: new Date(schedule.EndDate),
            start: new Date(schedule.StartDate),
            title: `${schedule.CourseName}-Shift ${schedule.Shift}-${schedule.Room}`
          }
          this.schedules.push(event)
        }
        this.loading = false
      })
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.subscription.unsubscribe()
  }
}
