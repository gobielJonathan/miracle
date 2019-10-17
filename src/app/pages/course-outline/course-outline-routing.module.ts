import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CourseOutlineComponent } from './course-outline.component';

const routes: Routes = [{ path: '', component: CourseOutlineComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourseOutlineRoutingModule { }
