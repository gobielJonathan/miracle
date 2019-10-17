import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { Job } from 'src/app/models/Job';
import moment from 'moment/moment'

@Component({
  selector: 'app-job-template',
  templateUrl: './job-template.component.html',
  styleUrls: ['./job-template.component.scss'],
})

export class JobTemplateComponent implements OnInit {

  timeFormat: any

  _jobs: Job[]

  constructor() { }

  @Input("jobs")
  public set value(jobs :Job[]) {
    for (const job of jobs) {
      job.Date = moment(job.StartDate).format("D/MM/YY")
      job.StartDate = moment(job.StartDate).format("H:mm:ss")
      job.EndDate = moment(job.EndDate).format("H:mm:ss")
    }
    this._jobs = jobs
  }
  

  ngOnInit() {
  }

}
