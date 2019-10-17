import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClassScheduleComponent } from './class-schedule.component';

const routes: Routes = [{ path: '', component: ClassScheduleComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClassScheduleRoutingModule { }
