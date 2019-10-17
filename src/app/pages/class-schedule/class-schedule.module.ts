import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClassScheduleRoutingModule } from './class-schedule-routing.module';
import { CalenderModule } from 'src/app/template/calender/calender.module';
import { ClassScheduleComponent } from './class-schedule.component';
import { LoadingModule } from 'src/app/template/loading/loading.module';

@NgModule({
  declarations: [ClassScheduleComponent],
  imports: [
    CommonModule,
    ClassScheduleRoutingModule,
    CalenderModule,
    LoadingModule
  ]
})
export class ClassScheduleModule { }
