import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseOutlineRoutingModule } from './course-outline-routing.module';
import { CourseOutlineComponent } from './course-outline.component';
import { CourseOutlinePlaceholderComponent } from './course-outline-placeholder/course-outline-placeholder.component';
import { CourseOutlinePipe } from 'src/app/pipe/course-outline.pipe';
import { PlaceholderModule } from 'src/app/template/placeholder/placeholder.module';


@NgModule({
  declarations: [CourseOutlineComponent, CourseOutlinePlaceholderComponent, CourseOutlinePipe],
  imports: [
    CommonModule,
    CourseOutlineRoutingModule,
    PlaceholderModule
  ]
})
export class CourseOutlineModule { }
