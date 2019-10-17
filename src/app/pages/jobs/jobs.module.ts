import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobsRoutingModule } from './jobs-routing.module';
import { HistoryJobsComponent } from './history-jobs/history-jobs.component';
import { FutureJobsComponent } from './future-jobs/future-jobs.component';
import { JobsService } from 'src/app/services/messier/jobs.service';
import { JobTemplateComponent } from 'src/app/template/job-template/job-template.component';
import { EmptyComponent } from 'src/app/template/empty/empty.component';
import { LoadingModule } from 'src/app/template/loading/loading.module';
import { ActiveJobsComponent } from './active-jobs/active-jobs.component';

@NgModule({
  declarations: [
    ActiveJobsComponent,
    HistoryJobsComponent,
    FutureJobsComponent,
    JobTemplateComponent,
    EmptyComponent,
  ],
  imports: [
    CommonModule,
    JobsRoutingModule,
    LoadingModule
  ],
  providers : [JobsService, JobTemplateComponent]
})
export class JobsModule { }
