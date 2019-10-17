import { Component, OnInit } from '@angular/core';
import { CourseOutlineService } from 'src/app/services/messier/course-outline.service';
import { Observable, Subscription } from 'rxjs';
import { CourseOutline } from 'src/app/models/CourseOutline';
import { SemesterService } from 'src/app/services/messier/semester.service';
import { CourseOutlinePayload } from 'src/app/models/payload/CourseOutlinePayload';

@Component({
  selector: 'app-course-outline',
  templateUrl: './course-outline.component.html',
  styleUrls: ['./course-outline.component.scss']
})
export class CourseOutlineComponent implements OnInit {

  courseOutlines$:Observable<CourseOutline[]>
  subscription : Subscription

  constructor(
    private service : CourseOutlineService,
    private semesterService : SemesterService
  ) {  }

  ngOnInit() {
    this.subscription = this.semesterService.active.subscribe(res => {
      if(!res)return 
      const payload: CourseOutlinePayload = {
        semesterId: res.SemesterId
      }
      this.courseOutlines$ = this.service.getCourseOutlines(payload)
    })
  }

  seeDetail(courseOutline : CourseOutline){
    console.log(courseOutline)
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.subscription
  }
}
