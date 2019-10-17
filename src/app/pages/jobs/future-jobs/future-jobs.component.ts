import { Component, OnInit } from '@angular/core';
import { JobsService } from 'src/app/services/messier/jobs.service';
import { AuthService } from 'src/app/services/messier/auth.service';
import {  JOB_MODE } from 'src/app/models/payload/JobPayload';
import { SemesterService } from 'src/app/services/messier/semester.service';
import { JobComponent } from '../JobComponent';

@Component({
  selector: 'app-future-jobs',
  templateUrl: './future-jobs.component.html',
  styleUrls: ['./future-jobs.component.scss']
})
export class FutureJobsComponent extends JobComponent implements OnInit {

  constructor(
    service: JobsService,
    authService: AuthService,
    semesterService: SemesterService
  ) {
    super(semesterService, authService, service,JOB_MODE.FUTURE_JOB);
  }

  ngOnInit() {
    this.getJobs()
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.subscription.unsubscribe()
  }


}
