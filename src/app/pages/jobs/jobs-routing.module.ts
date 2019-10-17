import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HistoryJobsComponent } from './history-jobs/history-jobs.component';
import { FutureJobsComponent } from './future-jobs/future-jobs.component';
import { AuthGuardGuard } from 'src/app/services/guards/auth-guard.guard';
import { ActiveJobsComponent } from './active-jobs/active-jobs.component';


const routes: Routes = [
  { path: "", component: ActiveJobsComponent },
  { path: "active-job", component: ActiveJobsComponent, canActivate: [AuthGuardGuard] },
  { path: "history-job", component: HistoryJobsComponent, canActivate: [AuthGuardGuard] },
  { path: "future-job", component: FutureJobsComponent, canActivate: [AuthGuardGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobsRoutingModule { }
